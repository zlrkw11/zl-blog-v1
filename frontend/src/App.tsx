import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  return (
    <>
      <div className="flex h-[400px] w-screen border-2 justify-center">
        post a blog here
      </div>
    </>
  );
}

export default App;
