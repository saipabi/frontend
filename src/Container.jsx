// import React from 'react'
// import {phone} from './assets'

const Container = () => {
  return (
    <>
    <div className='grid'>
        <div className="child-0" >
            <h1>Fully Responsive Design</h1>
            <p>When you use a theme created by Start Bootstrap,<br/>
             you know that
                 the theme will look great on any<br/>
                  device, whether 
                 its a phone, tablet, or desktop the <br/>
                 page will behave responsively!</p>
        </div>
        <div className="child-1" >
            {/* <img src="image/phone.jpg" alt='user'/> */}
        </div>
        <div className="child-2">
            {/* <img src='image/laptop.jpg' alt='user'/> */}
        </div>
        <div className="child-3">
            <h1>Updated For Bootstrap 5
           </h1>
           <p> Newly improved, and full of great utility classes,<br/> 
            Bootstrap 5 is leading
             the way in mobile responsive<br/> web development!
              All of the themes on Start<br/> Bootstrap are now using Bootstrap 5!</p></div>
        <div className="child-4">
            <h1>Easy to Use & Customize</h1>
            <p>Landing Page is just HTML and CSS with a splash of <br/>SCSS for users who 
                demand some deeper<br/> customization options. Out of the box, 
                just add your<br/> content and images, and your new landing<br/> page will be ready to go!</p>
        </div>
        <div className="child-5">
            {/* <img src='image/computer.jpg'/> */}
        </div>
        
    </div>
    </>
  )
}

export default Container;