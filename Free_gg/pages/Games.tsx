import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { getAllGames } from '../services/api/games/request'
import GameComponent from '../components/GameComponent'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons'
import { Game } from '../types/types'
import { cat, useBearStore, useCategoryStore } from '../store/StoreOption'
import { getGamesGenre } from '../services/api/games/request_genre'

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 20,
    backgroundColor: '#483067',
    width: 270,
    height: 28,
    borderRadius: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '17%'
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
    alignContent: 'center',
    margin: 2,
    width: 110,
    height: 45
  },
  Text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14
  },
  cat: {
    height: 50,
    backgroundColor: '#110A20'
  },
  title: {
    color: 'white',
    fontSize: 25,
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
      if (category !== 'all') {
        getGamesGenre(category).then((data) => setGames(data))
      } else {
        getAllGames().then((data) => setGames(data))
      }
    }

    fetchGames()
  }, [category])

  const filterByPlatform = (games: Game[]) => {
    if (option === 'All') {
      return games
    } else {
      return games.filter((game) => game.platform === option)
    }
  }

  const filterByName = (games: Game[]) => {
    return games.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const filteredGames = filterByName(filterByPlatform(games))

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
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Search by name"
          placeholderTextColor={'white'}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Ionicons name="search" size={20} color="white" />
      </View>
      <Text style={styles.title}>{category}</Text>
      <GameComponent games={filteredGames} navigateToDetails={navigateToDetails} />
    </ScrollView>
  )
}
