import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems'

const NewsList = () => {
    const[articles,setArticles] = useState([])

    useEffect(() => {
        const getArticles = async() => {
           
           // Make a GET request to the API endpoint
            axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=de1697b1f6984e648d9895ab89843a7c')
                .then(response => {
                // Handle the response data
                const data = response.data;
                console.log(data.articles);
                setArticles(response.data.articles)
                })
                .catch(error => {
                // Handle any errors
                console.error(error);
                });


        }
        getArticles()

    }, [])
        
    return (
        <div className='row'>
            {articles.map(article => {
                return(
                    <NewsItems
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList