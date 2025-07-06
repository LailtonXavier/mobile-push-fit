import { Image } from 'react-native'

const Logo = () => {
  return (
    <Image
      source={require('@assets/images/logo.png')}
      className="w-72 h-72 mt-32"
      resizeMode="center"
    />
  )
}

export default Logo