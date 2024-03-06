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
    margin: 40,
    marginTop: 30
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

interface GameComponentProps {
  games: Game[]
  navigateToDetails: (id: number) => void
}

const GameComponent: FC<GameComponentProps> = ({ games, navigateToDetails }) => {
  return (
    <View style={styles.cardcontainer}>
      {games.map((game) => (
        <TouchableOpacity key={game.id} onPress={() => navigateToDetails(game.id)}>
          <View style={styles.card}>
            <Image source={{ uri: game.thumbnail }} style={{ width: 153, height: 162, borderRadius: 15 }} />
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default GameComponent
