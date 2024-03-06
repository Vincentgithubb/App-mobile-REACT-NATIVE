import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { getAllGames } from '../services/api/games/request'
import GameComponent from '../components/GameComponent'
import Header from '../components/Header'
import { Game } from '../types/types'
import { cat, useBearStore, useCategoryStore } from '../store/StoreOption'
import { getGamesGenre } from '../services/api/games/request_genre'

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#483067',
    width: 270,
    height: 28
  },
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  },
  button: {
    backgroundColor: '#483067',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    margin: 1,
    width: 110
  },
  Text: {
    textAlign: 'center',
    color: 'white'
  },
  cat: {},
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  }
})

export default function Games({ navigation }: { navigation: any }) {
  const [games, setGames] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { option } = useBearStore()
  const { category, changeCategory } = useCategoryStore()

  useEffect(() => {
    async function fetchGames() {
      // let fetchedGames: Game[] = []

      if (category !== 'all') {
        console.log('retr')
        getGamesGenre(category).then((data) => setGames(data))
      } else {
        // fetchedGames = await getAllGames()

        getAllGames().then((data) => setGames(data))
      }
    }

    fetchGames()
    console.log({ category })
  }, [category])

  const filterByPlatform = (games: Game[]) => {
    if (option === 'All') {
      return games
    } else {
      return games.filter((game) => game.platform === option)
    }
  }

  // const filterByGenre = (games: Game[]) => {
  //   return games.filter((game) => category === 'all' || game.genre.toLowerCase() === category.toLowerCase())
  // }

  const filterByName = (games: Game[]) => {
    return games.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const filteredGames = filterByName(filterByPlatform(games))
  console.log({ filteredGames })

  const navigateToDetails = (id: number) => {
    navigation.navigate('Details', { id })
  }

  return (
    <ScrollView style={styles.background}>
      <Header />
      <View style={styles.cat}>
        <ScrollView horizontal={true}>
          {cat.map((nom) => (
            <TouchableOpacity key={nom} onPress={() => changeCategory(nom)}>
              <View style={styles.button}>
                <Text style={styles.Text}>{nom}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          placeholderTextColor={'white'}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <Text style={styles.title}>{category}</Text>
      <GameComponent games={filteredGames} navigateToDetails={navigateToDetails} />
    </ScrollView>
  )
}
