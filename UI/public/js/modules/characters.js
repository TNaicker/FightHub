import React from 'react'
import AppBody from './components/realBody';
import { Router, Route, hashHistory, Link } from 'react-router'

const Client = require('../../../../Client/clientFile');
const charImages = [
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG25c.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG9a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG24b.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG13a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG7a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG23b.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG16a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG8a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG12a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG19a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG20a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG18a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG21a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG2b.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG17a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG3a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG4a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG6a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG14a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG22a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG15a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG11a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG1b.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG10a.jpg)',
 'url(http://guiltygear.us/ggxrdr/wp-content/uploads/2017/05/R2_CG5a.jpg)',
]

const AppCharacterList = React.createClass({
  getInitialState() {
    return {
      client: new Client(),
      characters: []
    };
  },
  render() {
    console.log(this.state.characters);
    const items = this.state.characters.map((name, ind) => {
      // <AppCharacterItem value={name} img={{backgroundImage: charImages[ind]}}/>
      return <AppCharacterItem key={ind} id={name} img={{backgroundImage: charImages[ind]}}/>
   })

   return (
       <div>
       { items }
      </div>
    );
  },
  componentWillMount() {
    this.state.client.characters(1).then((chars) => {
      //Declaration of consts for holding game data
      const gameArr = [];
      //Putting game characters into array
      chars.forEach((character) => {
        gameArr.push(character.character_name);
      })
      //Set state gameName to array of game names
      this.setState({characters: gameArr})
    })
  }
})


const AppCharacterItem = React.createClass({
  render: function() {
    return(
      <Link to={"/characters/" + this.props.id}>
        <div className="row body-char" style={this.props.img}>
          <div className="col-xs-1">
            <p>{this.props.value}</p>
          </div>
        </div>
      </Link>
    )
  }
})


export default React.createClass({
  render() {
    return (
      <AppBody>
        <AppCharacterList/>
      </AppBody>
    )
  }
})
