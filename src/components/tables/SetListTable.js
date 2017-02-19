/**
 * @providesModule SetListTable
 */

import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { ListView } from 'realm/react-native';
import SetListCell from 'SetListCell';
import * as realm from 'realm-wrapper'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const {height, width} = Dimensions.get('window');

export default class SetListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: realm.getAllSets(),
      originalData: realm.getAllSets(),
    }
  }

  onChange(text) {
    var title = text

    if (title == '') {
      this.setState({ data: this.state.originalData })
    }
    else {
      var newData = this.state.originalData.filtered('name CONTAINS[c] "'+title+'"').sorted([['releaseDate', true]]).snapshot();
      this.setState({ data: newData })
    }
  }

  render() {
    var data = this.state.data;

    return (
      <View style={{marginTop: 65, height: height - 114, backgroundColor: 'white'}}>
        <View>
          <SearchBar
            lightTheme
            onChangeText={(text) => this.onChange(text)}
            placeholder='Search...' />
        </View>
        <ListView
          dataSource={ds.cloneWithRows(data)}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        />
      </View>
    )
  }

  renderRow(item, sectionIndex, rowIndex) {
    return (
      <SetListCell item={item} navigator={this.props.navigator} />
    )
  }
}
