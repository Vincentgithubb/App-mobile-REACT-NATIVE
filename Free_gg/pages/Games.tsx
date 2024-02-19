import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, TextInput, Image, StyleSheet } from 'react-native'
import { getAllGames } from '../services/api/games/request'
import GameComponent from '../components/GameComponent'
import Header from '../components/Header'

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#483067',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: 250,
    height: 26,
    right: 0,
    top: 279,
    position: 'absolute',
    marginRight: 15
  },
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  }
})

export default function Games() {
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getAllGames().then((data) => {
      setGames(data)
    })
  }, [])

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <ScrollView style={styles.background}>
      <Header />
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        placeholderTextColor={'white'}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <GameComponent games={filteredGames} />
    </ScrollView>
  )
}
