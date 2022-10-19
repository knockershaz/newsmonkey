import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
      country:"in",
      category:"sports",
      pageSize:6
  }
  static ropTypes ={
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
  }
  constructor() {
    super();
    console.log("this is a constrructor");
    this.state = {
      articles:[],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36e7946b2ec345b2b30c48b2f183616f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults ,loading:false});
  }
  handleNext=async()=>
  {
    console.log("next")
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36e7946b2ec345b2b30c48b2f183616f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page:this.state.page+1,
        loading:false
    })
  }
  handlePrev=async()=>
  {
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36e7946b2ec345b2b30c48b2f183616f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page:this.state.page-1,
        loading:false
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>
            &larr; Preview
          </button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
