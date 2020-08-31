import React, { useState } from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Hassan", 
      caption: "React is pretty cool!",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "Hammad", 
      caption: "Game development is fun!",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <img
          className="app_headerImage"
          src="{ImageUrl}"
          alt=""
        />
      </div>
      {
      posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

      <Post username="Huzaifa" caption="I want to be a data scientist!" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>

      {/* Posts */ }
      {/* Posts */ }

    </div>
  );
}

export default App;
