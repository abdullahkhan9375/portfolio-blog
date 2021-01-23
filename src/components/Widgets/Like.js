// import like from './../../img/like.png'
// import unlike from './../../img/unlike.png';
// import react, {useState, useEffect} from 'react';




// export default function Like (props){

//     const [iconlike, setIconLike] = useState(unlike)
//     const [liked, setLiked] = useState(false);
//     const [likes, setLikes] = useState(props.likes);


//     const like_mutation = { "mutations" : [{
//     "patch" : {
//         "id" : `${props.id}`,
//         "inc" : {
//             "likes" : 1
        
//     }
// }
// } ]}

// const unlike_mutation = {
//     "mutations" : [{
//     "patch" : {
//         "id" : `${props.id}`,
//         "dec" : {
//             "likes" : 1
        
//     }
// }
// }]}
//     // console.log(props)

//     const handleLike = () => {
//         if (liked) {
//             setIconLike(unlike)
//             setLiked(false)
//             setLikes(likes - 1)
//             props.handleLike(unlike_mutation)

//         }
//         if (!liked){
//             setIconLike(like)
//             setLiked(true)
//             setLikes(likes + 1)
//             props.handleLike(like_mutation)
//         }
//     }


//     return (
//         <div className = "like--item">
//             <div className = "like--num"> {likes} </div>
//             <img  onClick = {handleLike} className = "like--icon" src = {iconlike}/>
//         </div>
//     )
// }