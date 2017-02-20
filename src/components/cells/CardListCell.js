/**
 * @providesModule CardListItem
 */

import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createIconSet } from 'react-native-vector-icons'
import glyphMap from '../extras/Keyrune.json'
const MagicIcon = createIconSet(glyphMap, 'Keyrune')
import styles from './styles'
import * as helper from 'Helper'
import CardView from 'CardView'

export default class CardListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressButton = () => {
    this.props.navigator.push({
      component: CardView,
      name: 'card_view',
      passProps: {
        card: this.props.item
      }
    })
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPressButton.bind(this)} underlayColor={'lightgrey'}>
        <View style={styles.listItem}>
          {this.renderLeftSide()}
          {this.renderText()}
        </View>
      </TouchableHighlight>
    );
  }

  renderLeftSide() {
    return (
      <View style={styles.listItemSetIcon}>
        <MagicIcon name={this.props.item.set.code.toLowerCase()} size={30} color={helper.cardColour(this.props.item.rarity)} />
      </View>
    );
  }

  renderText() {
    return (
      <Text style={styles.listItemText}>
        {this.props.item.name}
      </Text>
    );
  }
}
