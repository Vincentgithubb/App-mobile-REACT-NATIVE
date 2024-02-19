import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/1786054/screenshots/5797492/media/6ac70b80ebe5341a62cf128ade8f2e82.png?resize=1200x900&vertical=center'
        }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>FREE.GG</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  image: {
    height: 300,
    width: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    color: 'white',
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Header
