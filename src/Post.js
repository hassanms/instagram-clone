import React from 'react'
import './Post.css';

function Post() {
    return (
        <div>
            {/* header -> avatar + username */}
            <h3>Username</h3>
            
            {/* image */}
            <img
                className="post__image"
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            />

            {/* username + caption */}
            <h4>Username: caption</h4>
        </div>
    )
}

export default Post
