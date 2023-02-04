import React,{useState,useEffect} from 'react'
import axios from 'axios'

const NewsList = () => {
    const[articles,setArticles] = useState([])

    useEffect(() => {
        const getArticles = () => {
            const response = axios.get('https://newsapi.org/v2/everything?q=football&apiKey=de1697b1f6984e648d9895ab89843a7c')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()

    }, [])
        
    return (
        <div>

        </div>
    )
}

export default NewsList