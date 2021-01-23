import React, {useState, useEffect} from 'react'
import '../../styles/Home/Switch.css';
import {motion} from 'framer-motion';

const defAnim = { top : '2%',
        left : 'calc(var(--switch-theme-x) + var(--switch-offset-x))',
        color: 'transparent',
    backgroundColor : 'transparent'}


const trans = {type : 'spring', damping : 8, duration: 0.2 }

export default function Switch_Mode( props ) {

    const [anim1, setAnim1] = useState(defAnim)
    const [anim2, setAnim2] = useState(defAnim)
    const [anim3, setAnim3] = useState(defAnim)
    const [hover, setHover] = useState (false);

    const [winWidth, setWinWidth] = useState(window.innerWidth);


    useEffect ( () => {
        checkWindow();
    }, [hover])

    const checkWindow = () => {
            setWinWidth(window.innerWidth)
        }
        
    


    function hoverAnimStart () {
        setHover(true);
        if (winWidth < 1920){
        setAnim1({
            top :'calc(var(--switch-one-y) + var(--switch-offset-y))',
            left : 'calc(var(--switch-theme-x) + var(--switch-offset-x))',
            opacity : 1
        })
        setAnim2 ({
            top :'calc(var(--switch-two-y) + var(--switch-offset-y))',
            left : 'calc(var(--switch-theme-x) + var(--switch-offset-x))',
            opacity : 1
        }) 
        setAnim3 ({
            top :'calc(var(--switch-three-y) + var(--switch-offset-y))',
            left : 'calc(var(--switch-theme-x) + var(--switch-offset-x))',
            opacity : 1
        })
        
    }

    if (winWidth < 1140){

    }
}

    function hoverAnimEnd () {
        setHover(false);
        setAnim1(defAnim)
        setAnim2(defAnim)
        setAnim3(defAnim)
        
    }

    const setTheme = (e) => {
        props.getTheme(e.target.innerText)
    }



    return (
        <div className = "container---switch-main">
            <motion.div onMouseEnter = {hoverAnimStart} onMouseLeave= {() => setTimeout(hoverAnimEnd, 1500)} className = "switch--item switch--theme">
                <span id = "mode_svg">
                <i class="far fa-sun fa-lg"></i>
                </span>
            </motion.div>
            <motion.div transition = {trans} animate = {anim1} onClick = {e => setTheme(e)} className = "switch--item switch--one">
                light
            </motion.div>
            <motion.div transition = {trans} animate = {anim2} onClick = {e => setTheme(e)} className = "switch--item switch--two">
                dark
            </motion.div>
            <motion.div transition = {trans} animate = {anim3} onClick = {e => setTheme(e)} className = "switch--item switch--three">
                blue
            </motion.div>
        </div>
    )
}
