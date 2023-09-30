import React from 'react';
import './newsItem.css'; // Import your CSS file for styling

const NewsItem = ({ title, description, imageUrl }) => {
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/video" className="btn btn-primary">Practise here!</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
