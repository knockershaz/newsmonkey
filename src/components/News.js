import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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
  constructor(props) {
    super(props);
    console.log("this is a constrructor");
    this.state = {
      articles:[],
      loading: false,
      page:1,
      totalResults:0
    };
    document.title=`${this.props.category} - NewsMonkey`
  }
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles.concat(parsedData.articles) , totalResults:parsedData.totalResults ,loading:false});
  };
  async componentDidMount() {
    this.props.setProgress(10);
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json();
  this.props.setProgress(70);
  this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults ,loading:false});
  this.props.setProgress(100);
  }
  handleNext=async()=>
  {
    this.setState({page:this.state.page+1,})
    this.componentDidMount();
  }
  handlePrev=async()=>
  {
    this.setState({page:this.state.page-1,})
    this.componentDidMount();
  }
  render() {
    return (
      <>
        <h1 className="text-center my-3">Top {this.props.category} HeadLines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
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
}

export default News;
