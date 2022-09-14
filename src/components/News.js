import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'



const News = (props) => {

  const capatilizeFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [search, setSearch] = useState('')
  // document.title = `${capatilizeFirst(props.category)}- newsmonkey`;


  const updateNews = async () => {
    props.setProgress(10);
    let urlUpdate = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09722434ad504a5db05373abf9a3a502&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(urlUpdate);
    props.setProgress(30);
    let passedData = await data.json();
    console.log(passedData);
    props.setProgress(70);

    setArticles(passedData.articles)
    setLoading(false)
    setTotalResults(passedData.totalResults)
    props.setProgress(100);
  }

  // create the setmode using the componentdidmount when run after the render process
  useEffect(() => {
    updateNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // next and previous function
  const clickNext = async () => {
    console.log('next');
    props.setProgress(10);
    let urlUpdate = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09722434ad504a5db05373abf9a3a502&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(urlUpdate);
    props.setProgress(30);
    let passedData = await data.json();
    console.log(passedData);
    props.setProgress(70);

    setArticles(passedData.articles)
    setLoading(false)
    setTotalResults(passedData.totalResults)
    props.setProgress(100);
    setPage(page + 1)

  }
  const clickPrev = async () => {
    console.log('prev');
    props.setProgress(10);
    let urlUpdate = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=09722434ad504a5db05373abf9a3a502&page=${page - 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(urlUpdate);
    props.setProgress(30);
    let passedData = await data.json();
    console.log(passedData);
    props.setProgress(70);

    setArticles(passedData.articles)
    setLoading(false)
    setTotalResults(passedData.totalResults)
    props.setProgress(100);
    setPage(page - 1);

  }
  // onchange on serch type here 
  const searchChange = (Search) => {
    console.log('change');
    setSearch(Search.target.value)
    
  }
 
  

  let { heading } = props;
  return (
    <>
      <div className='my-3'>
        <div className="mb-3 row">
          <h2 className='text-start col-6'>{heading} From {capatilizeFirst(props.category)}</h2>
          {loading && <Spiner />}
          <div className='col-6'>
            <input type="text" className="form-control" id="text" placeholder='search here...' onChange={searchChange} value={search} />
          </div>
        </div>
        <div className={`row text-${props.mode === 'dark' ? 'dark' : 'dark'}`}>
          {!loading && articles.filter((element)=>element.title.includes(search)).map((element) => {
            return <div className='col-md-4 col-sm-6' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className='conatainer my-md-2 p-2 '>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end me-md-5">
            <button className="btn btn-dark me-md-2" type="button" onClick={clickPrev} disabled={page <= 1}>Previous</button>
            <button className="btn btn-dark" type="button" onClick={clickNext} disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}>Next</button>

          </div>
        </div>
      </div>
    </>
  )
}

News.defaultProps = {
  country: "general",
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}
export default News