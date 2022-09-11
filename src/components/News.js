import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';

export default class News extends Component {

  constructor() {
    super();
    console.log("this is etxt");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  // create the setmode using the componentdidmount when run after the render process
  async componentDidMount() {
    console.log("hello");
    let urlUpdate = `https://newsapi.org/v2/top-headlines?country=in&apiKey=09722434ad504a5db05373abf9a3a502&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(urlUpdate);
    let passedDate = await data.json()
    console.log(passedDate)
    this.setState({ articles: passedDate.articles, totalResults: passedDate.totalResults, loading: false })
  }
  // next and previous function
  clickNext = async () => {
    console.log('next');
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

      let urlUpdate = `https://newsapi.org/v2/top-headlines?country=in&apiKey=09722434ad504a5db05373abf9a3a502&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(urlUpdate);
      let passedDate = await data.json()
      console.log(passedDate)
      this.setState({
        page: this.state.page + 1,
        articles: passedDate.articles,
        loading: false
      })
    }
  }
  clickPrev = async () => {
    console.log('prev');
    let urlUpdate = `https://newsapi.org/v2/top-headlines?country=in&apiKey=09722434ad504a5db05373abf9a3a502&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(urlUpdate);
    let passedDate = await data.json()
    console.log(passedDate)
    this.setState({
      page: this.state.page - 1,
      articles: passedDate.articles,
      loading: false
    })

  }

  render() {
    let { heading } = this.props;
    return (
      <>
        <div className='my-3'>
          <h2>{heading}</h2>
          {this.state.loading && <Spiner />}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} />
              </div>
            })}
          </div>
          <div className='conatainer my-2 p-2 '>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end me-5">
              <button className="btn btn-dark me-md-2" type="button" onClick={this.clickPrev} disabled={this.state.page <= 1}>Previous</button>
              <button className="btn btn-dark" type="button" onClick={this.clickNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>Next</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
