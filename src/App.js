import React, { useState, useEffect } from 'react'

const App = () => {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('batman')
  const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?query=batman")
  const [loading, setLoading] = useState(false)

  const fetchNews = () => {
    setLoading(true)
    fetch(url)
      .then(result => result.json())
      .then(data => (setNews(data.hits), setLoading(false)))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchNews()
  }, [url])

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  const searchForm = () => (
    <form>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button onClick={handleSubmit}>Seach</button>
    </form>
  )

  const showLoading = () => (
    loading ? <h2>Loading...</h2> : ''
  )

  const showData = () => (
    news.map((n, i) => (<p key={i}>{n.title}</p>))
  )

  return (
    <div>
      <h2>This is News</h2>
      {showLoading()}
      {searchForm()}
      {showData()}
    </div >
  )
}

/*
import React, { Component } from 'react';

class App extends Component {
  state = {
    like: 0
  }

  increment = () => {
    this.setState({
      like: this.state.like + 1
    })
  }

  componentDidMount(){
    document.title =`Clicked ${this.state.like}`
  }

  componentDidUpdate(){
    document.title =`Clicked ${this.state.like}`
  }

  render() {
    return (
      <div>
        Hello React
      <hr />
        <h4>{this.state.like}</h4>
        <button onClick={this.increment}>Like++</button>
      </div>
    )
  }
}
*/

export default App;
