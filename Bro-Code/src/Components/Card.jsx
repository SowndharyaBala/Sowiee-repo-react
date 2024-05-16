import propsTypes from 'prop-types'

function Card(props){
return(
    <div>
        <p> Name : {props.name}</p>
        <button>Age : {props.age}</button>
        <div>Student : {props.isStudent ? "yes" : "no"}</div>
  </div>
);

}  

Card.propsTypes = {
    Name : propsTypes.string,
    Age : propsTypes.number,
    isStudent : propsTypes.bool,
}

Card.defaultProps= {
    Name : "Sowieee",
    Age : 23,
    isStudent : true,

}
export default Card