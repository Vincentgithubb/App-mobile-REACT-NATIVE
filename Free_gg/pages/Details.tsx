import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { getGameDetails } from '../services/api/games/request_details'
import Header from '../components/Header'
import GameDetails from '../components/GameDetails'

export default function Details({ route }: { route: any }) {
  const { id }: { id: number } = route.params
  const [details, setDetails] = useState([])

  useEffect(() => {
    getGameDetails(id).then((data) => {
      return setDetails(data)
    })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#271C4D' }}>
      <Header />
      <Text>Details</Text>
      <GameDetails game={details} />
    </ScrollView>
  )
}
