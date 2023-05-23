import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree'

import imgBlurBg from '../mobile/src/assets/bg-blur.png'
import Stripes from '../mobile/src/assets/stripes.svg'
import NlwLogo from '../mobile/src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind';

const StyledStripes = styled(Stripes)


export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  if (!hasLoadedFonts) {
     return null
  }

  return (
    <ImageBackground 
      source={imgBlurBg}
      className='relative bg-gray-900 flex-1 items-center px-8 py-10'
      imageStyle={{position: 'absolute', left: '-100%'}}>
      <StyledStripes className='absolute left-2' />  

      <View className='flex-1 items-center justify-center gap-6'>
        <NlwLogo />
        <View className='space-y-2'>
          <Text className='font-title text-gray-50 text-center text-2xl leading-tight'>
            Sua cápsula do tempo
          </Text>
          <Text className='font-body text-base text-gray-100 w-80 text-center leading-relaxed'>
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity  activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2'>
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
        </TouchableOpacity>
      </View>
      <Text className='text-center font-body text-sm leading-relaxed text-gray-100 '>Feito com 💜 no NLW da Rocketseat</Text>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

