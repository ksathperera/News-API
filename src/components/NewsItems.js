import React from "react";
import './NewsItem.css'

const NewsItems = ({title,description, url, urlToImage}) => {
    return (
        <div className="news-app">
            <div className="news-items">
                <img className="news-img" src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>


        </div>
    )
}

export default NewsItems