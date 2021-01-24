import React, {useState, useEffect} from 'react'
import sortImg from './../../img/sort.png'
import './../../styles/Post/Post.css'

const catTags = [
    {
        category : "any",
        ref : `in ["08cb4970-7a2a-414c-8c5b-38bba50047b5","b5697028-ea7d-4678-9183-901c12526f11","39b43a49-2478-4c34-9e40-e3479d32c35e" ]`
    },
    {
        category : "opinion",
        ref : `== "08cb4970-7a2a-414c-8c5b-38bba50047b5"`
    },
    {
        category : 'dev-diaries',
        ref : ` == "b5697028-ea7d-4678-9183-901c12526f11"`
    },
    {
        category : "story",
        ref : ` == "39b43a49-2478-4c34-9e40-e3479d32c35e"`
    }
]

const orders = [
    {
        sortOrder: 'asc'
    },
    {
        sortOrder : 'desc'
    }
]

const pages = [
    {
        page : '[0...6]'
    },
    {
        page : '[6...12]'
    },
    {
        page : '[12...18]'
    },
    {
        page : '[18...24]'
    },
    {
        page : '[24...30]'
    },
    {
        page: '[30...36]'
    },
    {
        page : '[36...42]'
    }
]




export default function Sort(props) {
    const pageNumber = props.pageNumber;
    const getQuery = props.getQuery;
    const [order, setOrder] = useState('desc');


// const [sortQuery, setSortQuery] = useState (queries[0]);
// const [button, setButton] = useState(0);
const [queryType, setqueryType] = useState(0);



    const selectHandle = (e) => {
        setOrder(e.target.value);
        console.log(order)
        
    }

    const selectQuery = (e) => {
        // setSortQuery (queries[e.target.value])
        setqueryType(e.target.value)
        }
    
    

    const genQuery = (order, queryType) => {
        switch (queryType){
            case "0":
               return `*[_type=="post"] | order(publishedAt ${order}){
                    title,
                    slug,
                    publishedAt,
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
                }`    
            default:
               return `*[_type=="post" && categories[0]._ref ${catTags[queryType].ref}] | order(publishedAt ${order}){
                   _id,
                    title,
                    slug,
                    publishedAt,
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
                }${pages[pageNumber].page}`
        }
    }
         

    useEffect (() => {
        const query = genQuery(order, queryType, pageNumber)
        getQuery(query)
        // console.log(query)
    }, [order, queryType, pageNumber])


    return (
        <div className = "container--sort-main">
        <div className = "container--sort">
            <img src = {sortImg} alt = "sort"/>
            <label htmlFor = "sortby"> Sort By </label>
        </div>
        <div className = "sort--select">
             <select onChange = {e => selectHandle (e)} name = "order">
                 <option value= {orders[1].sortOrder}> Newest </option>
                        <option value= {orders[0].sortOrder}> Oldest </option>
                        
                        
                    </select>
            <select onChange = {e => selectQuery (e)} name = "type">
                        <option value={0}> Any         </option>
                        <option value={1}>  Opinion     </option>
                        <option value={3}>  Story       </option>
                        <option value={2}>  Dev Diaries </option>
            </select>
        </div>
        
        </div>
    )
}
