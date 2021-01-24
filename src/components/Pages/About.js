import React from 'react'
import './../../styles/About/About-timeline.css'
import './../../styles/About/About-time.css'
import './../../styles/About/Plates.css';
import {motion} from 'framer-motion';
import {useState, useEffect, useRef} from 'react';
import TimePlate from './../Widgets/TimePlate';


const timePlates = [
    {
        id : '2018',
        class : 'plate-1',
        title : '"Hello World"',
        title_class : "title--1",
        content_1 : "I wrote my first line of code. The customary 'Hello World' in Python. I was blown away. I was making small scripts and automating stuff here and there",
        content_2 : "Creative Writing caught my interest. I started a blog called “Sochmore” for opinion pieces, short stories and articles. "
    },
    {
        id : '2019',
        title : 'My First Website',
        title_class : "title--2",
        class : 'plate-2',
        content_1 : 'I started studying Data Science and Creative Writing in Macquarie University. While searching for opportunities, I failed my first interview. It pushed me to learn within and without the classroom.',
        content_2 : "By the end of 2019, I had a solid foundation in Python, HTML, CSS and Javascript. I was making goofy websites, maintaining my blog and going to the gym like crazy."
    },
    {
        id : '2020',
        title : 'Just Warming Up',
        title_class : "title--3",
        class : 'plate-3',
        content_1 : 'By 2020, I had started delving into the MERN stack. My goal for 2020 was to learn as much as I could. I was juggling Web Dev, University courses and freelance writing. It sure was a lot of work.',
        content_2 : "By December 2020, I started exploring React.js and Python’s Data Visualization libraries. They were  overwhelming at first but I started liking it even more. I had only one year left for university."
    },
    {
        id : 'null',
        title : '',
        title_class : "",
        class : 'plate-4',
        content_1 : '',
        content_2 : ''
    }
]

export default function About() {

    const [circ1, setCirc1] = useState(false);
    const [circ2, setCirc2] = useState(false);
    const [circ3, setCirc3] = useState(false);
    const [plate, setPlate] = useState('null');

    const [idx, setIdx] = useState(null);
    const [plateHover, setPlateHover] = useState(false);
    const back = useRef();
    const [index, setIndex] = useState(0);

    const [anim_x, setAnim_x] = useState('-310%')
    const [anim, setAnim] = useState({
        left : '-20%'
    })
    // was -20%
    // was -310%
    const [winWidth, setWinWidth] = useState(window.innerWidth);


    const checkTheme = () => {
        const html = document.getElementById ('html')
        const theme = html.getAttribute('data-theme')
        if (theme === "light"){
            setIndex(0);
        }
        if (theme === "dark"){
            setIndex(1)
        }
        if (theme === "blue"){
            setIndex(2)
        }
    }

    const checkWindow = () => {
        if (window.innerWidth <3850){
            setWinWidth(window.innerWidth)
            setAnim_x('-290%')
        }
        if (window.innerWidth < 1920){
            setWinWidth(window.innerWidth)
            setAnim_x('-310%')
        }
        if (window.innerWidth <= 1370){
            setWinWidth(window.innerWidth)
            setAnim_x('-205%')
        }
        if (window.innerWidth <= 1024){
            setWinWidth(window.innerWidth)
            setAnim_x('-140%')
        }
        if (window.innerWidth <= 992){
            setWinWidth(window.innerWidth)
            setAnim_x('-130%')
        }
        if (window.innerWidth <= 768){
            setWinWidth(window.innerWidth)

        }
        
    }



    const handleMouseEnter = (e) => {
        const selected = e.target.innerText;
        const body = document.getElementById('body');
        switch (selected){
            case '2018':
                setCirc2(true)
                setPlateHover(true)
                setIdx(0)
                body.classList.add('plate-blue')
                break
            case '2019':
                setCirc1(true)
                setPlateHover(true)
                setIdx(1)
                body.classList.add('plate-green')
                break
            case '2020':
                setCirc3(true)
                setPlateHover(true)
                setIdx(2)
                body.classList.add('plate-purple')
                break
        }

        }

    const handleMouseLeave = (e) => {
        const selected = e.target.innerText;
        const body = document.getElementById('body');
        
        switch(selected) {
            case '2018':
                setCirc2(false)
                setPlateHover(false)
                setIdx(0)
                body.classList.remove('plate-blue')
                break
            case '2019':
                setCirc1(false)
                setPlateHover(false)
                setIdx(1)
                body.classList.remove('plate-green')
                break
            case '2020':
                setCirc3(false)
                setPlateHover(false)
                setIdx(2)
                body.classList.remove('plate-purple')
                break
        }
    }
    const handleMouseClick = (e) => {
        const selected = e.target.innerText;
        switch(selected){
            case '2018':
                setIdx(0);
                break
            case '2019':
                setIdx(1);
                break
            case '2020':
                setIdx(2);
                break
        }
    }

    useEffect (() => {
        if (idx !== null){
            setPlate(timePlates[idx])
        }

    }, [idx])

    useEffect (() => {
        if (plateHover){
            if (winWidth <= 700){
                setAnim ({...anim, left : '5%', opacity : 1})
            } 
            else {
                setAnim ({...anim, left : '14.97%', opacity : 1})
            }
        }
        else {
            setAnim ({...anim, left : '-70%', opacity : 0})
        }
        checkTheme();
        checkWindow();
    }, [plateHover])

    const spring = {
        type : 'spring',
        damping : 15, 
        stiffnesss : 20,
        duration : 3
    }

    const circTheme = [
        {
            circ1_1 : 'rgba(36, 110, 185, 1)',
            circoff : 'rgba(0, 0, 0, 0)',
            circ2_1 : 'rgba(27, 154, 170, 1)',
            circ3_1 : 'rgba(63, 136, 197, 1)'
        },
        {
            circ1_1 : 'rgba(255,51, 31, 1)',
            circoff : 'rgba(0, 0, 0, 0)',
            circ2_1 : 'rgba(164, 3, 31, 1)',
            circ3_1 : 'rgba(158, 42, 43, 1)'
        },
        {
            circ1_1 : 'rgba(0, 63, 145, 1)',
            circoff : 'rgba(0, 0, 0, 0)',
            circ2_1 : 'rgba(0, 18, 66, 1)',
            circ3_1 : 'rgb(0, 0, 49)'
        }
    ]

    return (
        <>
        <div className = "container--timeline-main">
            <div className = "container--timeline">
                <motion.div transition = {spring} animate = {{transform : circ2 ? `translateX(${anim_x}) rotate(90deg)` : 'translateX(0px) rotate(-90deg)', border : circ2 ? '5px solid transparent' : '', backgroundColor : circ2 ? `${circTheme[index].circ1_1}` : `${circTheme[index].circoff}`}} className = "timeline--half-circle circle-1">
                    
                </motion.div>
                <div className = "timeline--line line-1">
                    
                </div>
                <motion.div  transition = {spring} animate = {{transform : circ1 ? `translateX(${anim_x}) rotate(90deg)` : 'translateX(0px) rotate(-90deg)', border : circ1 ? '5px solid transparent' : '', backgroundColor : circ1 ? `${circTheme[index].circ2_1}` : `${circTheme[index].circoff}`}} className = "timeline--half-circle circle-2">
                    
                </motion.div>
                <div className = "timeline--line line-2">

                </div>
                <motion.div  transition = {spring} animate = {{transform : circ3 ? `translateX(${anim_x}) rotate(90deg)` : 'translateX(0px) rotate(-90deg)', border : circ3 ? '5px solid transparent' : '', backgroundColor : circ3 ? `${circTheme[index].circ3_1}` : `${circTheme[index].circoff}`}} className = "timeline--half-circle circle-3">

                </motion.div>
            </div>
        </div>
        <div className = "container--time">
            
                <div onClick = {(e) => handleMouseEnter(e)} className = "time--item time-2018">
                    <h2> 2018 </h2>
                </div>
                <div onClick = {(e) => handleMouseEnter(e)} className = "time--item time-2019">
                    <h2> 2019 </h2>
                </div>
                <div  onClick = {(e) => handleMouseEnter(e)} className = "time--item time-2020">
                    <h2> 2020 </h2>
                </div>
        </div>
        <motion.div id = "cross_1" className = "container--cross" transition = {spring} animate = {{opacity : circ2 ? 1 : 0}} 
        onClick = {(e) => handleMouseLeave(e)}>
            2018
                    <div  onClick = {(e) => handleMouseLeave(e)} className = "cross-1">
                        2018
                    </div>
                    <div  onClick = {(e) => handleMouseLeave(e)} className = "cross-2">
                        2018
                    </div>

                </motion.div>
                <motion.div id = "cross_1" className = "container--cross" transition = {spring} animate = {{opacity : circ1 ? 1 : 0}} id = "cross_2" onClick = {(e) => handleMouseLeave(e)} className = "container--cross">
                    2019
                    <div  onClick = {(e) => handleMouseLeave(e)} className = "cross-1">
                    2019
                    </div>
                    <div  onClick = {(e) => handleMouseLeave(e)} className = "cross-2">
                        2019
                    </div>

                </motion.div>
                <motion.div id = "cross_1" className = "container--cross" transition = {spring} animate = {{opacity : circ3 ? 1 : 0}} id = "cross_3" onClick = {(e) => handleMouseLeave(e)} className = "container--cross">
                    <div onClick = {(e) => handleMouseLeave(e)} className = "cross cross-1">
                    2020
                    </div>
                    <div onClick = {(e) => handleMouseLeave(e)} className = "cross cross-2">
                    2020  
                    </div>
                    2020
                </motion.div>
        <motion.div ref = {back} transition = {{duration : 1}} animate = {anim} className = {`container--timeplate ${plate.class}`}>
            {plate === null ? null : <TimePlate plate = {plate}></TimePlate>}
        </motion.div>
        </>
    )
}
