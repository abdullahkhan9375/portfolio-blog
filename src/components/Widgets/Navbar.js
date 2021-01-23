import React from 'react'
import {NavLink} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
import './../../styles/Navbar/Navbar.css';
import './../../styles/Variables.css';
import {useSpring, animated} from 'react-spring';


export default function Navbar() {

    const [active, toggle] = useState(false);
    const [ham, setHam] = useState(false);


    const props = useSpring({
        config : {mass : 0.01, tension : 2000, friction : 10},
        to : {left : active ? '-43vh' : '-50vh'},
        from : {left : '-50vh'}
    })

    const props_ham = useSpring({
        from : {opacity : 1},
        to : {transform : ham ? 0 : 1}
    })

    const navRef = useRef();
    const buttRef = useRef();


  function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggle(false)
                buttRef.current.classList.add('show')
                buttRef.current.classList.remove('hide')
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
    }, []);
}

useOutsideAlerter(navRef)




    const onClickHandle = () => {
        toggle(true);
        buttRef.current.classList.add('hide')
        buttRef.current.classList.remove('show')
        console.log('true')
    }

    return (
    <>
           <div ref = {buttRef} style = {{...props_ham}}className = "navbar-button show">
                 {/* <svg id = "hamburger" onClick = {onClickHandle} height="40px" viewBox="0 -53 384 384" width="384pt"xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>  */}
                 <span onClick = {onClickHandle}>
                 <i id = "hamburger"  class="fas fa-bars"></i>
                 </span>
           </div>
           <animated.div ref = {navRef} style = {{...props}}className = "container--navbar show">
               <div className = "navbar--item">
                   <NavLink to = "/" exact>
                      Home
                   </NavLink >
               </div>    
               <div className = "navbar--item">
                   <NavLink to = "/project">
                       Projects
                   </NavLink>
               </div>
               <div className = "navbar--item">
                   <NavLink to = "/post">
                       Blog
                   </NavLink>
                </div>
               <div className  ="navbar--item"> 
                   <NavLink to = "/about">
                       About Me
                   </NavLink>
               </div>
           </animated.div>
           </>
    )
}
