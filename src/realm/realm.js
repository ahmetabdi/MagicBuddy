/**
 * @providesModule realm-wrapper
 */

import Realm from 'realm';

class StringObject extends Realm.Object {}
StringObject.schema = {
  name: 'StringObject',
  properties: { value: 'string' }
};

class Card extends Realm.Object {}
Card.schema = {
  name: 'Card',
  properties: {
    name: 'string',
    artist:  { type: 'string', optional: true },
    cmc: { type: 'int', optional: true },
    flavor: { type: 'string', optional: true },
    imageName: { type: 'string', optional: true },
    layout: { type: 'string', optional: true },
    manaCost: { type: 'string', optional: true },
    multiverseid: { type: 'int', optional: true },
    number: { type: 'string', optional: true },
    rarity: { type: 'string', optional: true },
    text: { type: 'string', optional: true },
    type: { type: 'string', optional: true },
    mciNumber: { type: 'string', optional: true },
    power: { type: 'string', optional: true },
    toughness: { type: 'string', optional: true },
    subtypes: { type: 'list', objectType: 'StringObject', default: []},//, optional: true },
    types: { type: 'list', objectType: 'StringObject', default: []},//, optional: true },
    colorIdentity: { type: 'list', objectType: 'StringObject', default: []},//, optional: true },
    colors: { type: 'list', objectType: 'StringObject', default: []},//, optional: true },
    set: 'Set'
  }
};

class Set extends Realm.Object {}
Set.schema = {
  name: 'Set',
  properties: {
    name: 'string',
    code: { type: 'string', optional: true },
    border: { type: 'string', optional: true },
    releaseDate: { type: 'date',  optional: true },
    type: { type: 'string', optional: true },
    cards: { type: 'list', objectType: 'Card' },
  }
};

// export default new Realm({path: 'bundled.realm', schema: [StringObject, Card, Set]});
var realm

export const openDatabase = () => {
  realm = new Realm({path: 'bundled.realm', schema: [StringObject, Card, Set]});
  console.log('openDatabase()')
}

export const closeDatabase = () => {
  if (realm) {
    realm.close()
    realm = null
    console.log('closeDatabase()')
    console.log(realm)
  }
}

export const getAllSets = () => {
  return realm.objects('Set').sorted([['releaseDate', true]]).snapshot()
}
