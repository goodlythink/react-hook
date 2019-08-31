import React, { useState, useEffect } from 'react'

const App = () => {
  const [like, setLike] = useState(0)

  useEffect(() => {
    document.title = `This Like ${like}`
  })

  const increment = () => {
    setLike(like + 1)
  }

  return (
    <div>
      <h2>This is Hook</h2>
      <h4>{like}</h4>
      <button onClick={increment}>Like++</button>
    </div>
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
