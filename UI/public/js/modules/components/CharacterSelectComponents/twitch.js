import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-12 video-holder">
          <h3>Watch Live GGXRD Gameplay</h3>
          <iframe
            className="video"
            src="http://player.twitch.tv/?channel=joniosan&muted=true"
            height="600"
            width="800"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
          </iframe>
          <iframe
            className="video-small"
            src="http://player.twitch.tv/?channel=joniosan&muted=true"
            height="300"
            width="400"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
          </iframe>
          <iframe
            className="video-mobile"
            src="http://player.twitch.tv/?channel=joniosan&muted=true"
            height="200"
            width="300"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
          </iframe>
        </div>
      </div>
    )
  }
})
