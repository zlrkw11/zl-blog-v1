import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <p className="w-[200px] ml-4 border-b-2 border-blue-400">All Posts</p>
      <div className="w-[600px] ml-4 gap-8 flex">
        {posts.map((post) => (
          <div key={post._id}>
            <Link to={`/post/${post._id}`}>
              <h2 className=" hover:text-blue-500">{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
