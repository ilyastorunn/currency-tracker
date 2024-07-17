const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h2>
          <a className="text-white" href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
