import React, { useState, useEffect } from 'react'
import SkeletonArticle from './component/skeleton/skeletonarticle'
import SkeletonProfile from './component/skeleton/skeletonprofile'

const Front = () => {
  const [article, setArticle] = useState(null)
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  const loadArticles = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setArticle(data)
        setLoading(false)
        // console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setUser([...user, data])
        // console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    loadArticles()
    loadUser()
  }, [])

  return (
    <div className='front'>
      <div className='articles'>
        <h2> ARTICLES FETCHED FROM JSONPLACEHOLDER API </h2>
        {loading &&
          [...Array(10).keys()].map((item, ind) => (
            <SkeletonArticle key={ind} />
          ))}

        <div className='wrapper'>
          {article &&
            article.map((art, ind) => {
              return (
                <div className='article' key={ind}>
                  <h3>{art.title}</h3>
                  <p>{art.body} </p>
                </div>
              )
            })}
        </div>
      </div>

      <div className='profile'>
        {loading && <SkeletonProfile />}
        <div className='wrapper'>
          <div className='img-container'>
            {!loading && <img src='./img/default.png' alt='prof' />}
          </div>
          <div>
            {user &&
              user.map((use, ind) => {
                return (
                  <div key={ind}>
                    <h2>{use.name}</h2>
                    <h4>{use.email}</h4>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front
