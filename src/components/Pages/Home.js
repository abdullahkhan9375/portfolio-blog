import React from 'react'
import './../../styles/Home/Home.css';
import {useState, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
// import {motion} from 'framer-motion';
import linkedin from './../../img/linkedin.png';
import github from './../../img/github.png';
import Footer from './../Widgets/Footer';


const newActions = [
    {
        id : 0,
        content : ' code.'
    },
    {
        id : 1,
        content : ' read.'
    },
   {
        id : 2,
        content : ' work.'
    },
    {
        id : 3,
        content : ' design.'
    }, {
        id : 4,
        content : ' create.'
    },
    { 
        id : 5,
        content : ' analyze.'
    },
    {
        id : 6,
        content : ' think.'
    },
    {
        id : 7,
        content : ' write.'
    },
    {
        id : 8,
        content : ' imagine.'
    },
    {
        id : 9,
        content: ' experiment.'
    }
]


export default function Home() {
    const [idx, setIdx] = useState(0)
    

    const transitions = useTransition (newActions[idx], item => item.id, {
        // config : {mass : 10, tension : 70, friction : 20}
        from : {position : 'absolute', opacity : 0, transform : `translateX(-20px)`},
        enter : {opacity : 1, transform : 'translateX(20px)'},
        leave : {opacity : 0, transform : 'translateX(100px)'}
    })
    const genAction = () => {
        setIdx(idx => (idx + 1) % 4);
        if (idx > newActions.length - 1){
            setIdx (0);
        }
    }
    useEffect ( () => {
        setInterval(genAction, 2000)
    }, []) 
    
    

    return (
        
        <div className = "container--home">
                <div className = "container--item header-1">
                    Hi. I'm
                </div>
                <div className = "container--item header-2">
                    Abdullah Khan
                </div>
                <div className = "container--item headline">
                    I like to
                    {transitions.map(({item, props, key}) => {
                        return<animated.span key = {key} className = {"special headline"} style = {{...props, marginLeft : '0.0em'}} > {" "} {item.content} </animated.span>})}
                </div>
                <div className = "container--icons">
                    <a   href = "https://github.com/abdullahkhan9375"> <img className = "icon--github" src = {github} alt = {"github"}/> </a>
                    <a href = "https://www.linkedin.com/in/abdullah-khan-91026917b/"> < img  className = "icon--linkedin" src = {linkedin} alt = {"linkedin"}/></a>
                    
                </div>
                        <Footer></Footer>
                </div>
    )
}
