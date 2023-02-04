import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NewsItems from './NewsItems'

const NewsList = () => {
    const[articles,setArticles] = useState([])

    useEffect(() => {
        const getArticles = () => {
            const response = axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=de1697b1f6984e648d9895ab89843a7c')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()

    }, [])
        
    return (
        <div>
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