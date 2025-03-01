"use client";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const BlogCreation = () => {
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
  const [loading, setLoading] = useState(false);

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

            if (file.size > 1024 * 1024 * 3) {
              alert("Image size should be less than 3MB");
              return;
            }

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

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds the maximum limit of 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setBannerImage(reader.result); // Save the Base64-encoded string
      };
      reader.readAsDataURL(file);
    }
  };

  const url = "http://localhost:8081/api/blog/create";

  const handleSubmit = async () => {
    const blogData = {
      title,
      description,
      bannerImage,
      slug,
      content,
      author,
    };

    setLoading(true);

    // Send the blogData to the server
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      alert("Something went wrong!");
      setLoading(false);
      return;
    }

    const data = await response.json();
    console.log(data);

    alert("Blog created successfully!");
    setLoading(false);
  };

  return (
    <div className="max-w-4xl my-10 mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>

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
          accept="image/*"
          onChange={handleBannerImageChange}
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
          className="bg-white rounded-md border px-4 py-2 h-[50vh]"
        ></div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Author Name
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Create Blog
      </button>
    </div>
  );
};

export default BlogCreation;
