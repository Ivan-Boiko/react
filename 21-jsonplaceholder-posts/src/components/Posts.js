import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resposne) => resposne.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr></hr>
      {isLoading ? (
        <h1>Loaded</h1>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
