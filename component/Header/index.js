import React from 'react'
import {Image, View } from 'react-native'
import styles from './styles'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.png'
function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      <Image style={styles.menu} source={menu}/>
    </View>
  )
}

export default Header
