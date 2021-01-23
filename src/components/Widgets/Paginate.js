import React from 'react'
import './../../styles/Paginate/Paginate.css';
import PaginateButton from './../Widgets/PaginateButton';

export default function Paginate(props) {
    
    return (
        <div className = "container--paginate">
            {[...Array(props.listLength)].map((e, i) => {
                return <PaginateButton getNumber = {props.getNumber} index = {i} key = {i}/>
            })}
        </div>
    )
}


// listLength.forEach(element => {
//         return <PaginateButton index=  {element}/>
//     }) : <div> Loading ... </div>