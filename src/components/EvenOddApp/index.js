import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: 'Even', count: 0}

  onIncrement = () => {
    const {count} = this.state
    const randNum = Math.ceil(Math.random() * 100)
    if (randNum % 2 === 0) {
      this.setState(prevState => ({isEven: 'Even'}))
    } else {
      this.setState(prevState => ({isEven: 'Odd'}))
    }
    this.setState(prevState => ({count: prevState.count + randNum}))
  }

  render() {
    const {count, isEven} = this.state

    return (
      <div className="main-container">
        <h1 className="count"> Count {count}</h1>
        <p className="odd-even">Count is {isEven}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increments
        </button>
        <p className="des">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
