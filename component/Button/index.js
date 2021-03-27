import React from 'react'
import {Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'

function StyledButton({type, content, onPress}) {

  const bc = type === 'primary' ? styles.primary : styles.secondary
  const c = type === 'primary' ? styles.textPrimary : styles.textSecondary
  
  return (
    <View style={styles.container}>
      <TouchableHighlight style={[styles.button, bc]} onPress={()=> onPress()}>
        <Text style={[styles.text, c]}>{content}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default StyledButton
