import { useState, useEffect } from "react";
import Timer from "./components/Timer";
function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    // clear out the input boxes
    if (res.ok) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <Timer />
      <div className="flex flex-col h-[400px] w-screen border-2 justify-center items-center">
        <h1>post a blog</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[200px] gap-4 mt-8"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
          ></textarea>
          <button type="submit">Add post</button>
        </form>
      </div>
    </>
  );
}

export default Home;
