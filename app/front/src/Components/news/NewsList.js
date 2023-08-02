import React from 'react';

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return (
          <div>
            <h3>{news.title}</h3>
            <img src={news.urlToImage} alt="" />
            <p>{news.description}</p>
            <p>
              <a href={news.url}>{news.url}</a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
