/**
 * @providesModule SetListCell
 */

import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '../extras/Keyrune.json'
const MagicIcon = createIconSet(glyphMap, 'Keyrune');
import styles from './styles';

export default class SetListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressButton = () => {
    this.props.navigator.push({
      name: 'CardList',
      passProps: {
        set: this.props.item
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
        <MagicIcon name={this.props.item.code.toLowerCase()} size={30} color="#000" />
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
