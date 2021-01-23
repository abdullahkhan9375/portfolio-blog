import React from 'react'

export default function PaginateButton(props) {
    const index = props.index;
    

    const clickHandle = () => {
        props.getNumber(index);
    }
    return (
        <div className = "paginate--item">
           <div onClick = {clickHandle} > {index} </div>
        </div>
    )
}
