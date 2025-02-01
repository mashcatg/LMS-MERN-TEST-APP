"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[100vh] my-6">
        {/* Login Form */}
        <motion.div
          className="bg-white rounded-3xl p-8 max-w-lg w-full border-accent_secondary shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          {/* Google Login Button */}
          <motion.button
            className="w-full py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-[0.5rem] hover:bg-gray-100 transition flex items-center justify-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGoogle className="w-5 h-5 text-red-500" />
            <span>Sign in with Google</span>
          </motion.button>

          {/* Divider with "or" */}
          <div className="flex items-center justify-center mb-6">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-4 text-gray-500">or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          <form>
            <motion.div
              className="mb-4 input-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-[0.5rem] focus:outline-none focus:border-accent_secondary"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              className="mb-6 input-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <label
                className="block text-left text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-[0.5rem] focus:outline-none focus:border-accent_secondary"
                placeholder="Enter your password"
              />
            </motion.div>

            <motion.div
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded-full accent-accent_secondary text-white"
                />{" "}
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-accent_secondary hover:underline"
              >
                Forgot password?
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonSecondary
                btnText="Login"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
              />
            </motion.div>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-gray-600">
                Don’t have an account?{" "}
                <Link
                  href="sign-up"
                  className="text-accent_secondary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Login;
