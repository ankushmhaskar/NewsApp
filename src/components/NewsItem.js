import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date } = props;
  return (
    <>
      <div className='my-3'>
        <div className="card" >
          <img src={!imageUrl ? "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/09/jhalak-dikhhla-jaa-1662213668.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target={"_blank"} rel={"noreferrer"} className="btn btn-primary">Readmore</a>
          </div>
        </div>
      </div>
    </>
  )

}
export default NewsItem