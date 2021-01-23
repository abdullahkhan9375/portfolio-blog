
const queries = 
    [
    {
    
        id : 0,
        type : 'any', 
        query : `*[_type == "post"] | order (publishedAt ${sortOrder}){
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
    },
    {
        id : 1,
        type : 'opinion',
        query : `*[_type=="post" && categories[0]._ref == ${catTags[0].ref}] | order(publishedAt ${sortOrder}){
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
    },
    {
       id : 2,
        type : 'story',
        query : `*[_type=="post" && categories[0]._ref == ${catTags[2].ref}] | order(publishedAt ${sortOrder}){
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
    },
    {
        id : 3,
        type : 'dev-diaries',
        query : `*[_type=="post" && categories[0]._ref == ${catTags[1].ref}] | order(publishedAt ${sortOrder}){
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
    }

]

export default queries;