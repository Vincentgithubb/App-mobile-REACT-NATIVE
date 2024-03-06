import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { useBearStore } from '../store/StoreOption'
import { getAllGames } from '../services/api/games/request'
import { Game } from '../types/types'
import GameRoulet from '../components/GameRoulette'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#271C4D',
    height: '100%'
  },
  title: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 8,
    marginTop: 4,
    paddingBottom: 30
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default function Home({ navigation }: { navigation: any }) {
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { option } = useBearStore()

  useEffect(() => {
    getAllGames().then((data) => {
      setGames(data)
    })
  }, [])

  const filteredGames = games.filter((game: Game) => {
    const matchesSearchTerm = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    if (option === 'All') {
      return matchesSearchTerm
    } else {
      return matchesSearchTerm && game.platform === option
    }
  })

  const randomGames: Game[] = []
  if (filteredGames.length > 0) {
    const indices: number[] = []
    while (indices.length < 10) {
      const randomIndex = Math.floor(Math.random() * filteredGames.length)
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex)
        randomGames.push(filteredGames[randomIndex])
      }
    }
  }

  const navigateToDetails = (id: number) => {
    navigation.navigate('Details', { id })
  }

  return (
    <ScrollView style={styles.background}>
      <Header />
      <View style={styles.display}>
        <Text style={styles.title}>10 Random Games</Text>
        <FontAwesomeIcon icon={faAngleRight} size={20} color="#13807D" style={{ marginRight: 10, marginTop: 9 }} />
      </View>
      <GameRoulet games={randomGames} navigateToDetails={navigateToDetails} />
    </ScrollView>
  )
}
