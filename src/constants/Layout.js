import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export const LAYOUT = {
  window: {width, height},
  header:{ headerShown: false },
}