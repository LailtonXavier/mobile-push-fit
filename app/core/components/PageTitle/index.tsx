import useTheme from '@/hooks/useTheme'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { Pressable, View } from 'react-native'
import SemiTitle from '../SemiTitle'
import SmallLogo from '../SmallLogo'

interface PageTitleProps {
  title: string
  back?: boolean
  hasIcon?: boolean
  className?: string
}

const PageTitle = ({title, back = false, hasIcon = true, className}: PageTitleProps) => {
  const {colors} = useTheme()

  const handleBack = () => {
    router.push('/(tabs)/');
  };

  return (
    <View className={`${className} flex flex-row items-center mt-16`}>
      {hasIcon && (
        back ? (
          <Pressable
            className="flex justify-center h-11 w-11"
            onPress={handleBack}
          >
            <ArrowLeft color={colors.secondary} size={30} />
          </Pressable>
        ) : (
          <SmallLogo />
        )
      )}
      <SemiTitle title={title} className={`${hasIcon ? 'ml-4' : ''} text-2xl`} />
    </View>
  )
}

export default PageTitle