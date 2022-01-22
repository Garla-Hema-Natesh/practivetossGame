import {Component} from 'react'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {image: headsImage, headsCount: 0, tailsCount: 0}

  onClicked = () => {
    const {headsCount, tailsCount} = this.state
    let latestHead = headsCount
    let tossImage = ''
    let latestTails = tailsCount
    const tossValue = Math.floor(Math.random() * 2)

    if (tossValue === 0) {
      latestHead += 1
      tossImage = headsImage
    } else {
      latestTails += 1
      tossImage = tailsImage
    }
    this.setState({
      image: tossImage,
      headsCount: latestHead,
      tailsCount: latestTails,
    })
  }

  render() {
    const {image, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div>
        <img src={image} />
        <p>headsCount {headsCount}</p>
        <p>tails Count {tailsCount}</p>
        <p>total Count{total}</p>
        <button onClick={this.onClicked}>click</button>
      </div>
    )
  }
}
export default CoinToss
