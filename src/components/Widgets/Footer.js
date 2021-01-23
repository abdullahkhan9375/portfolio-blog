import React from 'react'
import './../../styles/Footer/Footer.css';



// var style = {
//     backgroundColor: "#F8F8F8",
//     borderTop: "1px solid #E7E7E7",
//     textAlign: "center",
//     padding: "20px",
//     position : 'absolute',
//     left: "0",
//     bottom: "0",
//     zIndex: "-2",
//     height: "50px",
//     width: "100%",
// }

// var phantom = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%',
// }


export default function Footer() {
    return (
        <div className = "container--footer">
            <div className = "footer--items">
                <p>Created with React and Sanity.io</p>
                <p>Designed and coded by Abdullah Khan</p>
                
            </div>
        </div>
    )
}
