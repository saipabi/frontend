
import propTypes from 'prop-types';


const Image = (props) => {
  

  return (
    <> 
    <div className="images">
      <div className="picture-1">    <div className="one"><h1>{props.img}</h1></div>
   <div className="two"><h1>{props.title}</h1></div>
   <div className="three"><h3>{props.description}</h3></div>
   </div>

</div>
    </>

  )
}
Image.propTypes = {
  img:propTypes.string,
  title: propTypes.string,
  description:propTypes.string,

}

export default Image;