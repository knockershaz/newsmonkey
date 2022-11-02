import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

const updateNews=async()=> {
  props.setProgress(10);
  let url =
  // `https://newsapi.org/v2/everything?q=tesla&from=2022-10-01&sortBy=publishedAt&apiKey=36e7946b2ec345b2b30c48b2f183616f`
  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36e7946b2ec345b2b30c48b2f183616f&page=${page}&pageSize=${props.pageSize}`;
  setloading(true)
let data = await fetch(url);
props.setProgress(30);
let parsedData = await data.json();
props.setProgress(70);
setArticles(parsedData.articles)
settotalResults(parsedData.totalResults)
setloading(false)
props.setProgress(100);
}

useEffect(() => {
  document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`
  updateNews();
   // eslint-disable-next-line
}, [])

  const fetchMoreData = async() => {
    let url =
    // `https://newsapi.org/v2/everything?q=tesla&from=2022-10-01&sortBy=publishedAt&apiKey=36e7946b2ec345b2b30c48b2f183616f`
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36e7946b2ec345b2b30c48b2f183616f&page=${page}&pageSize=${props.pageSize}`;
    setpage(page+1);
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center " style={{margin:'35px 0px',marginTop:'90px'}}>Top {props.category} HeadLines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
          </InfiniteScroll>
      </>
    );
  }

News.defaultProps={
  country:"in",
  category:"general",
  pageSize:6
}
News.propTypes ={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
}
export default News;