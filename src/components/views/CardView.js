/**
 * @providesModule CardView
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import * as helper from 'Helper'

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
        <Text style={{color: '#fff', fontSize: 16, fontFamily: 'Beleren-Bold', marginTop: 20}}>
          {helper.textIconConverter(this.state.card.manaCost)}
        </Text>
        <Text style={{color: '#fff', fontSize: 16, fontFamily: 'Beleren-Bold'}}>
          {this.state.card.name}
        </Text>
        <Text style={{color: '#fff', fontSize: 16, fontFamily: 'MPlantin'}}>
          {this.state.card.type}
        </Text>
        <Text style={{color: '#fff', fontSize: 16, fontFamily: 'MPlantin'}}>
          {helper.textIconConverter(this.state.card.text)}
        </Text>
        <Text style={{color: '#fff', fontSize: 16, fontFamily: 'MPlantin-italic'}}>
          {this.state.card.flavor}
        </Text>
      </View>
    )
  }
}
