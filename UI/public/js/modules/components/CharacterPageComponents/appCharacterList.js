import React from 'react';
import Client from '../../../../../../Client/clientFile'
import AppCharacterItem from './appCharacterItem';
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

export default React.createClass({
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
       <div className="row character-select">
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
