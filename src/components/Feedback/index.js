import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    emojiDisplayed: true,
  }

  changeState = () => {
    this.setState(prevState => ({
      emojiDisplayed: !prevState.emojiDisplayed,
    }))
  }

  renderPage = () => {
    const {emojiDisplayed} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    if (emojiDisplayed) {
      return (
        <div className="whiteBg">
          <h1>How satisfied are you with our customer support performance ?</h1>
          <ul className="emojis">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button type="button" onClick={this.changeState}>
                  <img src={eachEmoji.imageUrl} alt={eachEmoji.name} />
                </button>
                <p>{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="whiteBg">
        <div className="love">
          <img className="heart" src={loveEmojiUrl} alt="Love Emoji" />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    return <>{this.renderPage()}</>
  }
}

export default Feedback
