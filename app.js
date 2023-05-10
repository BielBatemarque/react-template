import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const[post, setPosts] = useState([]);

  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    const fet = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await fet.json();
    setPosts(json);
  }
  
  console.log(post)
  return (
    <div className="App">
      <h1>Consume API</h1>
        {post.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

export default App;
