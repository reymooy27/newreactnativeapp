import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import styles from './styles'
import carlist from './carList'
import Car from '../../component/Car'

function CarList() {
  return (
    <View style={styles.container}>
        <FlatList 
          snapToAlignment={'start'} 
          decelerationRate={'fast'} 
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
          data={carlist} 
          renderItem={({item})=> <Car carName={item.name} carImage={item.image} carPrize={item.prize}/>}/>
      </View>
  )
}

export default CarList
