import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import App from './App'
import { List, ListItem, SideMenu } from 'react-native-elements'
import * as realm from 'realm-wrapper'

const RNFS = require('react-native-fs');
const realm_lock_path = RNFS.DocumentDirectoryPath + '/bundled.realm.lock'
const realm_management_path = RNFS.DocumentDirectoryPath + '/bundled.realm.management'
const realm_bundle_path = RNFS.MainBundlePath + '/bundled.realm'
const realm_path = RNFS.DocumentDirectoryPath + '/bundled.realm'

class AppRootContainer extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  copyRealmBundle() {
    RNFS.copyFile(realm_bundle_path, realm_path)
    .then((success) => {
      console.log('default.realm copied from MainBundlePath to DocumentDirectoryPath!');
      realm.closeDatabase()
      realm.openDatabase()
    })
    .catch((err) => {
      console.log("ERROR: " + err.message);
    });
  }

  deleteFile(path) {
    RNFS.unlink(path)
    .then(() => {
      console.log('File deleted at: ' + path)
    })
    .catch((err) => {
      console.log("ERROR: " + err.message);
    });
  }

  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillMount() {
    console.log('================================================')
    console.log('MainBundlePath: ' + RNFS.MainBundlePath)
    console.log('DocumentsDir: ' + RNFS.DocumentDirectoryPath)
    this.deleteFile(realm_lock_path)
    this.deleteFile(realm_management_path)
    this.deleteFile(realm_path)
    this.copyRealmBundle()
    console.log('================================================')
  }

  sideMenuChanged(isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }

  sideMenuClicked(name) {
    console.log('side menu clicked' + name)
  }

  render () {
    const src = require('./images/logo.png')

    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amanda Martin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        subtitle: 'CEO'
      },
      {
        name: 'Christy Thomas',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        subtitle: 'Lead Developer'
      },
      {
        name: 'Settings',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
        subtitle: 'Configure options'
      }
    ]

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
        <View style={{backgroundColor: 'darkgrey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10,}}>
          <Image
            source={src}
            style={styles.logo} />
        </View>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              onPress={() => this.sideMenuClicked(l.name)}
              avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </List>
      </View>
    )

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.sideMenuChanged(isOpen)}
        menu={MenuComponent}>
        <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    )
  }
}

styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 34
  },
})

export default AppRootContainer
