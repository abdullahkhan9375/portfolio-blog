import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import sanityClient from '../../client'
import Spinner from 'react-bootstrap/Spinner';
import github from './../../img/github.png'
import './../../styles/Projects/SingleProject.css';

export default function SingleProject() {
    const [project, setProject] = useState(null);
    const {slug} = useParams();
    // const [links, setLinks] = useState([]); 

//     const Links = (project) => {
//         if (project !== null){
//             if (project.gitLink !== undefined){
//                 setLinks([...links, project.gitLink])
//             }
//             if (project.extLink !== undefined){
//                 setLinks([...links, project.extLink])
//             }
//             if (project.kagLink !== undefined){
//                 setLinks([...links, project.kagLink])
//             }
//     }
// }

    // const genLinks = links[0] !== undefined ? links.map ((link, i) => {
    //     return (
    //         <a href = {link}> {link} </a>
    //     )
    // }) : <div> Loading ... </div>


    useEffect (() => {
        const req = async () => {
            const res = await sanityClient.fetch(`*[slug.current == "${slug}"]{
            title, 
            _id,
            slug,
            description,
            publishedAt,
            title1,
            title2,
            image{
                asset -> {
                    _id,
                    url
                }
            },
            imageCon1 {
                asset -> {
                    _id, 
                    url
                }
            },
            imageCon2 {
                asset -> {
                    _id, 
                    url
                }
            },
            content1,
            content2,
            gitLink,
            kagLink,
            extLink,
        }`)
        setProject(res[0])
    }
    req()
    // Links(project);

}, [])



    
    

    if (project === null){
        return <Spinner animation = "border"/>
    }
    console.log(project)
    return (
        <div className = "container--sproject-main">
           <h1> {project.title}</h1>
           <img src = {project.image.asset.url} alt = {"project"} />
           <h4> {project.description} </h4>
           <div className = "sproject--footer">
              <img  style = {{width : '30px' }} className = "gitImg" src = {github} alt = {"github icon"}/> 
              <a href = {project.gitLink}> Project Link </a>  
           </div>
           {/* <div className = "container---background" style = {{background : `url(${project.image.asset.url})`}}>
            </div> */}
           <div className = "sproject--container">
               <div className = "sproject--row">
                <div className = "sproject--img" style = {{background : `url(${project.imageCon1.asset.url})`, backgroundPosition : 'center', backgroundSize : 'cover', padding : '0.2em'}} >
                    
                </div>
                <div className = "sproject--content">
                    <h3> {project.title1} </h3>
                    <p> {project.content1} </p>
                </div>
               </div>
               <div id = "row-2" className = "sproject--row">
                   <div className = "sproject--content">
                    <h3> {project.title2} </h3>
                    <p> {project.content2} </p>
                        
                </div>
                <div className = "sproject--img" style = {{background : `url(${project.imageCon2.asset.url})`, backgroundPosition : 'center', backgroundSize : 'cover'}}>
                    
                </div>
                
               </div>
               
           </div>
        </div>
    )
}
