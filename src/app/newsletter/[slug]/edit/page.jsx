"use client";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const NewsletterCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });

      const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = reader.result;
              const range = quill.getSelection();
              quill.insertEmbed(range.index, "image", base64);
            };
            reader.readAsDataURL(file);
          }
        };
      };

      quill.getModule("toolbar").addHandler("image", imageHandler);
    }
  }, [quill]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(
      newTitle
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );
  };

  const handleSubmit = () => {
    const newsData = {
      title,
      description,
      bannerImage,
      slug,
      content,
      author,
    };
    console.log(newsData);
    alert("Newsletter created successfully!");
  };

  return (
    <div className="max-w-4xl my-10 mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Newsletter</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Short Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Banner Image
        </label>
        <input
          type="file"
          onChange={(e) => setBannerImage(e.target.files[0])}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Slug</label>
        <input
          type="text"
          value={slug}
          readOnly
          className="w-full px-4 py-2 border rounded-md bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Content</label>
        <div
          ref={quillRef}
          className="bg-white rounded-md border px-4 py-2 h-[60vh]"
        ></div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Author Name
        </label>
        <input
          type="text"
          value={author}
          onChange={setAuthor(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
      >
        Create Newsletter
      </button>
    </div>
  );
};

export default NewsletterCreation;
