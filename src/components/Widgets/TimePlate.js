import react from 'react';
import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import './../../styles/About/Plates.css';

const timePlates = [
    {
        id : '2018',
        direction : 'left',
        class : 'plate-1',
        title : '"Hello World"',
        content : "I wrote my first line of code. The customary 'Hello World' in Python. I was blown away. I was making small scripts and automating stuff here and there",
    },
    {
        id : '2019',
        title : 'My First Website',
        direction : 'right',
        class : 'plate-2',
        content : 'I started studying Data Science and Creative Writing in Macquarie University. Throughout the year, I focused on learning new technologies and started Web Development by December 2019. My first website was ugly.'
    },
    {
        id : '2020',
        title : 'Just Warming Up',
        direction : 'left',
        class : 'plate-3',
        content : 'By 2020, I had started delving into the MERN stack. I alternated between Data Science and Web Development projects. By the end of the year, I was adding projects into my portfolio.'
    },
    {
        id : 'null',
        title : '',
        direction : 'left',
        class : 'plate-3',
        content : ''
    }
]

export default function TimePlate (props) {

    const plate = props.plate;
    // const [plate, setPlate] = useState(timePlates[index])
    // const [anim, setAnim] = useState(null);

    // const leftAnim = {
    //     left :['-10%', '5%', '-10%'],
    //        }

    // const rightAnim = {
    //     left :['-100%', '5%', '-100%'],
    //        }

    // const cleanupAnim = {
    //     opacity : 0
    // }
    // const transition = {
    //     duration: 2,
    //     times : [0.2, 0.7, 0.2]
    // }
    // useEffect(() => {
    //     setPlate (timePlates[index])

    // }, [])

    // useEffect ( () => {
    //     const animat = async () => {
    //         await setAnim(plate.direction === "right" ? rightAnim : leftAnim)
    //     }
    //     animat();
    // }, [plate])

    return (
        <>
            <div className =  {`timeplate--title ${plate.title_class}`}> 
                {plate.title}
            </div>
            <div className = "timeplate--content">
               <div className = "timeplate--content-1">
                {plate.content_1}
               </div>
               <div className = "timeplate--content-2">
                {plate.content_2}
               </div>
            </div>
        </>
    )
}
