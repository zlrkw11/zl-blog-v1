import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading... post_id:{id}</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
