import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const searchObject = [
  {id: 1, name: 'Natesh', occupation: 'Student'},
  {id: 2, name: 'Thrisha', occupation: 'Student'},
  {id: 3, name: 'Ratna Varsh', occupation: 'Student'},
  {id: 4, name: 'Nagamani', occupation: 'Home Maker'},
]

class CoinToss extends Component {
  state = {
    image: headsImage,
    headsCount: 0,
    tailsCount: 0,
    textDisplayed: '',
    selectedName: '',
    formRequiredText: '',
    searchInputText: '',
    searchList: searchObject,
    date: new Date(),
    checkBoxStatus: false,
  }

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

  inputText = event => {
    this.setState({textDisplayed: event.target.value})
  }

  selectWho = event => {
    this.setState({selectedName: event.target.value})
  }

  formButton = event => {
    event.preventDefault()
  }

  requiredTextFunction = () => {
    this.setState({formRequiredText: 'Required'})
  }

  formInput = event => {
    if (event.target.value === '') {
      console.log('Natesh')
      this.requiredTextFunction()
    }
  }

  searchInput = event => {
    this.setState({searchInputText: event.target.value})
  }

  checkBox = () => {
    const {checkBoxStatus} = this.state
    if (checkBoxStatus === true) {
      this.setState({checkBoxStatus: false})
    } else {
      this.setState({checkBoxStatus: true})
    }
  }

  render() {
    const {
      image,
      headsCount,
      tailsCount,
      textDisplayed,
      selectedName,
      formRequiredText,
      searchInputText,
      searchList,
      date,
      checkBoxStatus,
    } = this.state
    const total = headsCount + tailsCount
    const filterList = searchList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInputText.toLowerCase()),
    )

    console.log(date)

    console.log(filterList)
    let checkButton
    if (checkBoxStatus === true) {
      checkButton = <p>Check box is clicked</p>
    } else {
      checkButton = <p>check box is not clicked</p>
    }

    return (
      <div className="main-container">
        <div>
          <img src={image} className="image" />
          <p>headsCount {headsCount}</p>
          <p>tails Count {tailsCount}</p>
          <p>total Count{total}</p>
          <button onClick={this.onClicked}>click</button>
        </div>
        <div>
          <h2>input</h2>
          <input type="text" onChange={this.inputText} />
          <p>Text Entered : {textDisplayed}</p>
        </div>
        <div>
          <h1>{selectedName}</h1>
          <select onChange={this.selectWho} value={selectedName}>
            <option value="Nagamani">Nagamani</option>
            <option value="Natesh">Natesh</option>
            <option value="Thrisha" Selected>
              Thrisha
            </option>
            <option value="Ratna Varsha">Ratna Varsha</option>
          </select>
        </div>
        <div>
          <p>{selectedName}</p>
          <lable>Male</lable>
          <input type="radio" value="Male" name="gender" />
          <lable>Female</lable>
          <input type="radio" value="Female" name="gender" selected />
        </div>
        <div>
          <form>
            <lable>Name</lable>
            <input type="text" onChange={this.formInput} />
            <p>{formRequiredText}</p>

            <button type="submit" onClick={this.formButton}>
              Submit
            </button>
          </form>
        </div>
        <div>
          <input
            type="search"
            onChange={this.searchInput}
            placeholder="Search"
            value={searchInputText}
          />
        </div>

        <div>
          <input type="checkbox" onChange={this.checkBox} />
          {checkButton}
        </div>
        <textarea rows="20" cols="40">
          check
        </textarea>
      </div>
    )
  }
}
export default CoinToss
