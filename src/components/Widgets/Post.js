import React, {useState, useEffect} from 'react'
import sanityClient from '../../client';
import {Link} from 'react-router-dom';
import './../../styles/Post/Post.css';
import Sort from './Sort';
import Spinner from 'react-bootstrap/Spinner';
import Paginate from './../Widgets/Paginate.js';


const defaultQuery = `*[_type == "post"] | order (publishedAt desc){
                    title,
                    _id,
                    slug,
                    publishedAt,
                    likes,
                    categories[]->{
                        title
                    },
                    description,
                    estimate,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }[0...5]`
// const randomColors = ["#B6465F", "#F95738", "#C03221", "#DD7230", "#7D1D3F",
// "#A69658", "#B95F89", "#F46036", "#6A041D", "#BC5D2E", "#FF784F", "#A663CC", "#610F7F"]

// const getRandomColor = () => {
//     return Math.floor(Math.random() * randomColors.length)
// }


const postsPerPage = 5;


export default function Post() {

    // const [sort, setSort] = useState('newestFirst');
    const [query, setquery] = useState (defaultQuery);
    const [length, setLength] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [postData, setPost] = useState(null);


    useEffect (()=> {
        const res = async () => {
            const data = await sanityClient
                .fetch(query)
                setPost(data)
                
        }
        const res2 = async () => {
            const data2 = await sanityClient.fetch(`*[_type == "post"]`)
            setLength(data2.length);
            console.log(length)
        }

        
        res();
        res2();
        console.log(postData)
         
    }, [query]);

    // const getPostClass = (post) => {
    //     switch (post.categories[0].title){
    //         case 'Opinion':
    //             return `linear-gradient(180deg, rgba(246, 232, 234, 0.85) 2%, ${randomColors[getRandomColor()]} 200%)`;
    //         case 'Story': 
    //             return`linear-gradient(180deg, rgba(246, 232, 234, 0.85) 2%, ${randomColors[getRandomColor()]} 200%)`;
    //         case 'Dev Diaries':
    //             return `linear-gradient(180deg, rgba(246, 232, 234, 0.85) 2%, ${randomColors[getRandomColor()]} 200%)`;
    //     }
    // }
    
    const getNumberHandle = (number) => {
        setPageNumber(number)
    }

    // const projectId = "g02soeyq"
    // const datasetName = "production"
    // const token = "sk2SSgwIjTadTaXcIJZtIL2R7o4JyEzZhOmYETzxr4BBcrEZismV3TVJm2rAK3mgEI2VoHBlvPiTSH9drygDxhFFeMtKpulTulBDF8SrjMemIZ1d9EV37hrxEldRhjnC58Z4N68l4x45VjDAJhcRXCRO4x7YKOTxCSRmNgHDAMr74Mpqasxn"

    // const handleLike = (mutations) => {
    //         console.log(mutations)
    //     fetch(`https://${projectId}.api.sanity.io/v1/data/mutate/${datasetName}`, {
    // method: 'post',
    // headers: {
    //     'Content-type': 'application/json',
    //     'Authorization' : `Bearer ${token}`
    // },
    // body: JSON.stringify(mutations)
    // })
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.error(error))
    //     }

    
    // const handleShare = (slug) => {
    //     var sl = slug
    //     sl.select()
    //     document.execCommand('copy')
    // }
        

    // style = {{backgroundImage: `${getPostClass(post)}, url(${post.mainImage.asset.url})`, backgroundSize : 'cover'}}
    const post = postData !== null ? postData.map((post, index) => {
        
        const date = post.publishedAt
        return (
                <div className = {`post--item`}>
                    <div className = "post--header">
                        <img className = "post--img" src = {post.mainImage.asset.url} alt = {"project"}/>
                        {/* <Like handleLike = {handleLike} likes = {post.likes} id = {post._id}></Like> */}
                        <p className = "post--date"> {date.slice(0, 10)} </p>
                        <h1 className = "post--title"> {post.title} </h1>
                        <p className = "post--description">
                            {post.description}
                        </p>
                     </div>
                    <div className = "post--mid">
                        <Link className = "btn--read from-right" to = {"/post/" + post.slug.current}>
                         Read
                        </Link>
                        {/* <div onClick = {() => handleShare(post.slug)}  className = "btn--read from-right"> Share </div> */}
                    </div>
                    <div className = "post--footer">
                         <div className = "post--estimate">
                            {post.estimate}
                         </div>
                         <div className = "post--cat">
                             {post.categories[0].title}
                         </div>
                         
                     </div>
                </div>
        )
        }) :<Spinner animation="grow" />;

    const page = postData !== null ? <Paginate getNumber = {getNumberHandle} listLength = {Math.floor(length / postsPerPage)}/> : <div> Loading ... </div>
    const getQuery = (query) => {
        setquery(query);
    }   

    if (postData === null){
        return <Spinner animation="grow" />
    }

    return (
        <div className = "container--main-post" >
                <div className = "main-heading">
                    <h1>Sochmore</h1>
                </div>
                <div className = "post--sort">
                    <Sort pageNumber = {pageNumber} getQuery = {getQuery}></Sort>
                </div>
                <div className = "post--page">
                   {page}
                </div>
                <div className = "container--post">
                    {postData && post}
                </div>
                
        </div>
    )
}
