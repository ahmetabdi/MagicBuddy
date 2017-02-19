/**
 * @providesModule Helper
 */

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
