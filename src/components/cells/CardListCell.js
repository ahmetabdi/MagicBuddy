/**
 * @providesModule CardListItem
 */

import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '../extras/Keyrune.json'
const MagicIcon = createIconSet(glyphMap, 'Keyrune');
import styles from './styles';
// import { cardColour } from './helpers'
import * as helper from 'Helper'

export default class CardListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressButton = () => {
    console.log('TouchableHighlight pressed...');
    this.props.navigator.push({
      name: 'CardView',
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
