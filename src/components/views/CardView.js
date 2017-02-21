/**
 * @providesModule CardView
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import * as helper from 'Helper'
import { createIconSet } from 'react-native-vector-icons'
import glyphMap from '../extras/Manarune.json'
const ManaIcon = createIconSet(glyphMap, 'Mana')

export default class CardView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: this.props.card
    }
  }

  render() {
    var cardImageUrl = 'https://deckbox.org//system/images/mtg/cards/'+this.state.card.multiverseid+'.jpg'
    return (
      <View style={{marginTop: 65, flex: 1, backgroundColor: 'black'}}>
        <Image
          resizeMode="contain"
          style={{height: 100, width: 90}}
          source={{uri: cardImageUrl}}
        />
        <Text style={{color: '#fff'}}>
          {this.state.card.name}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.type}
        </Text>
        <Text style={{color: '#fff', fontSize: 16}}>
          {helper.textIconConverter(this.state.card.text)}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.flavor}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.imageName}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.multiverseid}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.number}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.rarity}
        </Text>
        <Text style={{color: '#fff'}}>
          {this.state.card.mciNumber}
        </Text>
          {/*{
          {this.state.card.subtypes}
          {this.state.card.types}
          {this.state.card.colorIdentity}
          {this.state.card.colors}*/}
      </View>
    )
  }
}
