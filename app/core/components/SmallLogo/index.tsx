import { Image } from 'react-native'

const SmallLogo = () => {
  return (
    <Image
      source={require('@assets/images/Logos.png')}
      resizeMode="center"
      style={{ height: 39, width: 39 }}
    />
  )
}

export default SmallLogo