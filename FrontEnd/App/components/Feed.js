
import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPosts([
          { id: 1, content: 'This is a tweet.' },
          { id: 2, content: 'Another tweet here.' },
        ]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Your Feed</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
