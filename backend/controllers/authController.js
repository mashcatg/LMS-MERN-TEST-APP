const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Login = require('../models/Login');
const { v4: uuidv4 } = require('uuid');

// Signup (for email/password-based signup)
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    
    user = new User({ email, password });
    await user.save();
    
    res.status(201).json({ msg: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error during signup' });
  }
};

// Login (for email/password-based login)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d' 
    });
    const expiryTime = new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000); // 6 months

    const login = new Login({
      userId: user._id,
      token,
      logId: uuidv4(),
      ipAddress: req.ip,
      cookie: req.headers['user-agent'],
      expiryTime
    });
    await login.save();

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 6 * 30 * 24 * 60 * 60 * 1000 // 6 months
    });

    res.json({ message: 'Logged in successfully', user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Send OTP (for email-based OTP verification)
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a 6-digit OTP
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

    // Find the user by email
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    // Set OTP and expiry time in user document
    user.otp = otp;
    user.expiry_date = Date.now() + 3600000; // 1 hour expiry
    await user.save();

    // Send OTP via email
    await sendOtp(email, otp);

    res.json({ msg: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error during OTP generation' });
  }
};

// Verify OTP (to verify the OTP sent to the user)
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    // Check if OTP is correct and not expired
    if (user.otp !== otp || Date.now() > user.expiry_date) {
      return res.status(400).json({ msg: 'Invalid or expired OTP' });
    }

    // Clear OTP from user document (since it's been verified)
    user.otp = null;
    user.expiry_date = null;
    await user.save();

    res.json({ msg: 'OTP verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error during OTP verification' });
  }
};

// Google OAuth Login
exports.googleLogin = async (req, res) => {
  try {
    const { tokenId } = req.body;

    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email } = ticket.getPayload();

    // Find the user by email or create a new one
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, password: '' });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error during Google login' });
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    await Login.findOneAndDelete({ userId: req.user.id, token: req.cookies.token });
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error: error.message });
  }
};
