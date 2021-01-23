import React, {useState, useEffect} from 'react'
import sanityClient from '../../client';
import '../../styles/Projects/Project.css'
import '../../styles/Post/Post.css';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'


const defQuery = `*[_type == "project"] | order (publishedAt desc){
                    title,
                    slug,
                    publishedAt,
                    description,
                    image{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
export default function Project() {
    const [projects, setProjects] = useState(null);

useEffect (()=> {
        const res = async () => {
            const data = await sanityClient
                .fetch(defQuery)
                setProjects(data);
        }
        res();
         
    }, [defQuery]);




const genProjects = projects !== null ? projects.map((project, i) => {
    const date = project.publishedAt
    return (
        <div className = "project--item">
            <div className = "project--img">
            <img src= {project.image.asset.url} alt = "imi"/>
            </div>
            <div className = "project--mid">
            <p className = "project--date"> {date.slice(0, 10)} </p>
            <div className = "project--title"> {project.title} </div>
            <p className = "project--description"> {project.description} </p>
            </div>
            <div className = "project--footer">
               <Link className = "btn-proj" to = {"/project/" + project.slug.current}>
                    Explore
                </Link>
            </div>

        </div>
    )
}) : <Spinner animation = "border" />







    return (
        <div className = "container--projects-main">
            <div className = "project--title-main">
                My Projects
            </div>
            <div className = "container--projects">
                {genProjects}
            </div>       
        </div>
    )
}
