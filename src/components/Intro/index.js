import React, { Component } from 'react'
import { translate } from 'react-i18next'

import './styles/intro.css'

class Intro extends Component {

  state = {
    topics: ["intro.topics.web", "intro.topics.android", "intro.topics.coffee", "intro.topics.ai"],
    topic: "intro.topics.web",
  }

  setNextTopic = () => {
    const { topics } = this.state
    let newTopics = topics
    newTopics.push(topics[0])
    newTopics = newTopics.splice(1, newTopics.length)
    this.setState({
      topics: newTopics,
      topic: newTopics[0]
    })
  }

  componentDidMount(){
    setInterval(this.setNextTopic, 2000)
  }

  render() {
    const { t } = this.props
    const { topic } = this.state

    return (
      <div className="intro">
        <h1 className="title noselect">
          {t("intro.title")}
        </h1>
        <div className="topics">
          <span className="topic noselect">
            {t(topic)}
          </span>
        </div>
        <a href="#projects" className="next btn">
          <i className="fas fa-arrow-down"></i>
          <span className="btn-text noselect">
            {t("intro.btn")}
          </span>
          <i className="fas fa-arrow-down"></i>
        </a>
      </div>
    )
  }
}

export default translate("home")(Intro)