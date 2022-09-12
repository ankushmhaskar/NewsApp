import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: "general",
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  
  capatilizeFirst=(name)=>{
    return name.charAt(0).toUpperCase()+ name.slice(1);
  }


  constructor(props) {
    super(props);
    console.log("this is etxt");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capatilizeFirst(this.props.category)}- newsmonkey`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const urlUpdate = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(urlUpdate);
    this.props.setProgress(30);
    let passedDate = await data.json();
    console.log(passedDate);
    this.props.setProgress(70);
    this.setState({ articles: passedDate.articles, totalResults: passedDate.totalResults, loading: false })
    this.props.setProgress(100);
  }

  // create the setmode using the componentdidmount when run after the render process
  async componentDidMount() {
    this.updateNews()
  }


  // next and previous function
  clickNext = async () => {
    console.log('next');
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

    //   let urlUpdate = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09722434ad504a5db05373abf9a3a502&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(urlUpdate);
    //   let passedDate = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: passedDate.articles,
    //     loading: false
    //   })
    // }
    await this.setState({
      page: this.state.page + 1
    })
    this.updateNews()

  }
  clickPrev = async () => {
    console.log('prev');
    // let urlUpdate = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09722434ad504a5db05373abf9a3a502&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(urlUpdate);
    // let passedDate = await data.json()

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: passedDate.articles,
    //   loading: false
    // })
    await this.setState({ page: this.state.page - 1 });
    this.updateNews()

  }

  render() {
    let { heading } = this.props;
    return (
      <>
        <div className='my-3'>
          <h2 className='text-center'>{heading} From {this.capatilizeFirst(this.props.category)}</h2>
          {this.state.loading && <Spiner />}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className='col-md-4 col-sm-6' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
          <div className='conatainer my-md-2 p-2 '>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end me-md-5">
              <button className="btn btn-dark me-md-2" type="button" onClick={this.clickPrev} disabled={this.state.page <= 1}>Previous</button>
              <button className="btn btn-dark" type="button" onClick={this.clickNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>Next</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
