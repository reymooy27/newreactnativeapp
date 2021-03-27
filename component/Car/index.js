import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './styles'
import StyledButton from '../Button'

function Car({carName, carPrize, carImage}) {
  return (
    <View style={styles.carContainer}>
        <ImageBackground source={carImage} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{carName}</Text>
          <Text style={styles.subTitle}>{`Starting at $${carPrize}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton type='primary' content='Custom Order' onPress={()=> console.warn('primary')}/>
          <StyledButton type='secondary' content='Existing Inventory' onPress={()=> console.warn('secondary')}/>
        </View>
      </View>
  )
}

export default Car
