// components/Chatbox.jsx

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // For the default snow theme

const Chatbox = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div className="chatbox-container border border-gray-300 rounded-lg p-4 mb-6">
      <div className="chatbox-header border-b border-gray-300 mb-4">
        <h2 className="text-lg font-semibold">Create a Ticket</h2>
      </div>
      <div className="chatbox-content">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          placeholder="Describe the issue in detail..."
          modules={Chatbox.modules}
          formats={Chatbox.formats}
          style={{ height: "150px", borderRadius: "0.5rem" }}
          className="border border-gray-300"
        />
      </div>
      <div className="chatbox-footer mt-4 flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => alert("Ticket Created!")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// Optional: Define toolbar options and other settings for the editor
Chatbox.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "code-block"],
    ["clean"],
  ],
};

Chatbox.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code-block",
];

export default Chatbox;
