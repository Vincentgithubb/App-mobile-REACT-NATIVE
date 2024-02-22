import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Game } from '../types/types'

const styles = StyleSheet.create({
  card: {
    width: 245,
    display: 'flex',
    marginLeft: 20,
    height: '100%',
    marginBottom: 20
  },
  cardcontainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  }
})

const GameRoulet: React.FC<{
  games: Game[]
  navigateToDetails: (id: number) => void
}> = ({ games, navigateToDetails }) => {
  return (
    <ScrollView horizontal={true} style={styles.cardcontainer}>
      {games.map((game) => {
        return (
          <View key={game.id} style={styles.card}>
            <TouchableOpacity onPress={() => navigateToDetails(game.id)}>
              <Image
                source={{ uri: game.thumbnail }}
                style={{ width: 235, height: 235, borderRadius: 30, marginBottom: 15 }}
              />
            </TouchableOpacity>
            <Text style={{ color: '#13807D', fontWeight: 'bold', fontSize: 18, marginBottom: 7 }}>{game.title}</Text>
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 20 }}>{game.short_description}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default GameRoulet
