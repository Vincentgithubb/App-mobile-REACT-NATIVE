import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: 153,
    height: 180,
    marginBottom: 30,
    display: 'flex',
    alignItems: 'center'
  },
  cardcontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 45,
    marginTop: 65
  },
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  },
  title: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    right: '46%',
    top: 27
  }
})

export default function GameComponent({ games }) {
  return (
    <View>
      <Text style={styles.title}>ALL</Text>
      <View style={styles.cardcontainer}>
        {games.map((game) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: game.thumbnail }} style={{ width: 153, height: 162, borderRadius: 15 }} />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.title}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
