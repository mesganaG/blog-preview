import { useState } from 'react'
import thumbanilImage from './assets/images/illustration-article.svg'
import avatarImage from './assets/images/image-avatar.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">

       <div className="main-card-container">

        <div className="thumbnail-container">
          <img src={thumbanilImage} alt="thumbnail" />
        </div>

        <div className="metadata-details">
          <p className='status'><b>Learning</b></p>
          <p className='date'>published 21 Dec 2023</p>
        </div>

        <div className="main-title-and-description">
            <a href="#"><h2>HTML & CSS foundation</h2></a>
          <p>These languages are the backbone of every website, defining structure
            ,content, and presentation.
          </p>
        </div>

        <div className="author-profile-container">

          <div className="avatar-img-container">
              <img src={avatarImage} alt="author-avatar-image" />
          </div>
          <p>Greg Hooper</p>

        </div>

        </div>
      </div>
    </>
  )
} 

export default App
