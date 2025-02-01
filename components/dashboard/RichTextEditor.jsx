import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // For the default snow theme

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div className="input-container mb-12 col-span-1 md:col-span-2">
      <label className="block text-sm font-semibold mb-2">Description</label>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        placeholder="Describe the issue in detail..."
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        style={{ height: "150px" }}
      />{" "}
    </div>
  );
};

// Optional: Define toolbar options and other settings for the editor
RichTextEditor.modules = {
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

RichTextEditor.formats = [
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

export default RichTextEditor;
