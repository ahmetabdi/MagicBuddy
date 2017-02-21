/**
 * @providesModule Helper
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import { createIconSet } from 'react-native-vector-icons'
import glyphMap from './Manarune.json'
const ManaIcon = createIconSet(glyphMap, 'Mana')

const reactStringReplace = require('react-string-replace')

export const cardColour = (rarity) => {
  switch (rarity) {
    case 'Common':
      return('#1A1718')
    case 'Uncommon':
      return('#707883')
    case 'Rare':
      return('#A58E4A')
    case 'Mythic Rare':
      return('#BF4427')
    default:
      return('#000')
  }
}

export const fontSize = () => {
  return 16
}

export const typeIconConverter = (text) => {
  text = text.toLowerCase()

  if (text.includes('artifact')) {
    return <ManaIcon name={'artifact'} size={30} />
  }

  if (text.includes('creature')) {
    return <ManaIcon name={'creature'} size={30} />
  }

  if (text.includes('enchantment')) {
    return <ManaIcon name={'enchantment'} size={30} />
  }

  if (text.includes('instant')) {
    return <ManaIcon name={'instant'} size={30} />
  }

  if (text.includes('land')) {
    return <ManaIcon name={'land'} size={30} />
  }

  if (text.includes('planeswalker')) {
    return <ManaIcon name={'planeswalker'} size={30} />
  }

  if (text.includes('sorcery')) {
    return <ManaIcon name={'sorcery'} size={30} />
  }
}

export const textIconConverter = (text) => {

  text = reactStringReplace(text, '{R}', (match, i) => (
    <ManaIcon key={'r'+i} name="r" color="white" />
  ));

  text = reactStringReplace(text, '{G}', (match, i) => (
    <ManaIcon key={'g'+i} name="g" color="white" />
  ));

  text = reactStringReplace(text, '{B}', (match, i) => (
    <ManaIcon key={'b'+i} name="b" color="white" />
  ));

  text = reactStringReplace(text, '{E}', (match, i) => (
    <ManaIcon key={'e'+i} name="e" color="white" />
  ));

  text = reactStringReplace(text, '{T}', (match, i) => (
    <ManaIcon key={'tap'+i} name="tap" color="white" />
  ));

  text = reactStringReplace(text, '{0}', (match, i) => (
    <ManaIcon key={'0'+i} name="0" color="white" />
  ));

  text = reactStringReplace(text, '{1}', (match, i) => (
    <ManaIcon key={'1'+i} name="1" color="white" />
  ));

  text = reactStringReplace(text, '{2}', (match, i) => (
    <ManaIcon key={'2'+i} name="2" color="white" />
  ));

  text = reactStringReplace(text, '{3}', (match, i) => (
    <ManaIcon key={'3'+i} name="3" color="white" />
  ));

  text = reactStringReplace(text, '{4}', (match, i) => (
    <ManaIcon key={'4'+i} name="4" color="white" />
  ));

  text = reactStringReplace(text, '{5}', (match, i) => (
    <ManaIcon key={'5'+i} name="5" color="white" />
  ));

  text = reactStringReplace(text, '{6}', (match, i) => (
    <ManaIcon key={'6'+i} name="6" color="white" />
  ));

  text = reactStringReplace(text, '{7}', (match, i) => (
    <ManaIcon key={'7'+i} name="7" color="white" />
  ));

  text = reactStringReplace(text, '{8}', (match, i) => (
    <ManaIcon key={'8'+i} name="8" color="white" />
  ));

  text = reactStringReplace(text, '{9}', (match, i) => (
    <ManaIcon key={'9'+i} name="9" color="white" />
  ));

  text = reactStringReplace(text, '{10}', (match, i) => (
    <ManaIcon key={'10'+i} name="10" color="white" />
  ));

  text = reactStringReplace(text, '{11}', (match, i) => (
    <ManaIcon key={'11'+i} name="11" color="white" />
  ));

  text = reactStringReplace(text, '{12}', (match, i) => (
    <ManaIcon key={'12'+i} name="12" color="white" />
  ));

  text = reactStringReplace(text, '{13}', (match, i) => (
    <ManaIcon key={'13'+i} name="13" color="white" />
  ));

  text = reactStringReplace(text, '{14}', (match, i) => (
    <ManaIcon key={'14'+i} name="14" color="white" />
  ));

  text = reactStringReplace(text, '{15}', (match, i) => (
    <ManaIcon key={'15'+i} name="15" color="white" />
  ));

  text = reactStringReplace(text, '{16}', (match, i) => (
    <ManaIcon key={'16'+i} name="16" color="white" />
  ));

  text = reactStringReplace(text, '{17}', (match, i) => (
    <ManaIcon key={'17'+i} name="17" color="white" />
  ));

  text = reactStringReplace(text, '{18}', (match, i) => (
    <ManaIcon key={'18'+i} name="18" color="white" />
  ));

  text = reactStringReplace(text, '{19}', (match, i) => (
    <ManaIcon key={'19'+i} name="19" color="white" />
  ));

  text = reactStringReplace(text, '{20}', (match, i) => (
    <ManaIcon key={'20'+i} name="20" color="white" />
  ));

  return text
}
