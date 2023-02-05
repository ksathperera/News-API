import React from "react";
import './NewsItem.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const NewsItems = ({title,description, url, urlToImage}) => {
    return (
      
            <div className="col-md-4 news-items">
                <img className="news-img w-50" src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        
    )
}

export default NewsItems