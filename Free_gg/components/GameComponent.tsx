import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Game } from '../types/types'

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

export default function GameComponent({
  games,
  navigateToDetails
}: {
  games: Game[]
  navigateToDetails: (id: number) => void
}) {
  return (
    <View>
      <Text style={styles.title}>ALL</Text>
      <View style={styles.cardcontainer}>
        {games.map((game) => {
          return (
            <TouchableOpacity key={game.id} onPress={() => navigateToDetails(game.id)}>
              <View style={styles.card}>
                <Image source={{ uri: game.thumbnail }} style={{ width: 153, height: 162, borderRadius: 15 }} />
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.title}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
