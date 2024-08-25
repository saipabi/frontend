// import React from 'react'
import propTypes from 'prop-types'

const Cards = [{
  id:1, profile:'image/girl1.webp',
  name: 'Margaret E.', description: '"This is fantastic! Thanks so much guys!"'
},

  {id:2, profile: 'image/girl2.webp',
  name: 'Fred S.', description: '"Bootstrap is amazing. I ve been using it to create lots of super nice landing pages."'

  },

  {id:3, profile: 'image/girl3.webp', name: "Sarah W.", description: '"Thanks so much for making these free resources available to us!"'}
]

function Card (props){
  
  return(

    <div
  className='count' >
  
    <img src={props.profile} alt='user' className='image-1'/>
    <h2>{props.name}</h2>
    <h3>{props.description} </h3>

  </div>

  )

  
}

const MainContent = () => {
   
  return (
    <>
      <div className='Cards'>
      
    
       {Cards.map((item,index)=>(
        <Card key={index}
        profile={item.profile} 
        description={item.description}
        name={item.name}/>

       ))}

      <div className='footer'>
      <div className='main'><p className='para'>
      Ready to get started? Sign up now!</p>
    <div className='inb'>
<input className="email" type='Email' value='Email Address'/>
<br></br>
<button className='sub'>Submit</button></div>
</div>
      </div>
       </div>
  {/* <Card name="Margaret E." description='"This is fantastic! Thanks so much guys!"' profile='image/girl1.webp'/> */}
    </>
  )
}

Card.propTypes = {
  name: propTypes.string,
  profile: propTypes.string,
  description: propTypes.string,
}

export default MainContent