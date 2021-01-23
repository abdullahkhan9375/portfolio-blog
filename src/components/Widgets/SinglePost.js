import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import sanityClient from '../../client'
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';
import '../../styles/SinglePost/SinglePost.css';
import tag from '../../img/tag.png';
import Spinner from 'react-bootstrap/Spinner';




const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}



export default function SinglePost() {

    const [singlePost, setSinglePost] = useState(null);
    const {slug} = useParams();
    console.log(slug)

    useEffect(()=> {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title, 
            _id,
            slug,
            publishedAt,
            likes,
            categories[]->{
                        title
                    },
            mainImage{
                asset -> {
                    _id,
                    url
                }
            },
            publishedAt,
            body,
            "name" : author -> name,
            "authorImage" : author-image

        }
        `).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug]);
   
    if (!singlePost){
        return <Spinner animation="grow" />
    }
    if (singlePost){
        const date = singlePost.publishedAt
    }
    return (
        <div className = "container--main-sp">
            <div className = "container--main-post-sp">
                <BlockContent blocks = {singlePost.body} projectId = "g02soeyq" dataset = "production"></BlockContent>
            </div>
            <div className = "container--aside-sp">
                <div className = "aside--writer">
                <h4> WRITTEN BY </h4>
                <p>{singlePost.name}</p>
                </div>
                <div className = "aside--cat">
                <span id = "tag--icon">
                <i class="fas fa-tag"></i>
                </span>
                <p>{singlePost.categories[0].title}</p>
                </div>
            </div>
        </div>
        
    )
}
