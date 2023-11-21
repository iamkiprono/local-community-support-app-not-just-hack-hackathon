import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../components/Wrapper'

const Buy = () => {
  return (
    <Wrapper>
        <View>
            <Text className='font-bold text-3xl text-[#96938d]'>
                Available:
            </Text>
        </View>
        <View>
            <Text className='font-bold text-3xl text-[#96938d]'>
                73 litres
            </Text>
        </View>
    </Wrapper>
  )
}

export default Buy