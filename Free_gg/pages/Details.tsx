import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { getGameDetails } from '../services/api/games/request_details'
import Header from '../components/Header'
import GameDetails from '../components/GameDetails'
import { DetailedGame } from '../types/types'

export default function Details({ route, navigation }: { route: any; navigation: any }) {
  const { id }: { id: number } = route.params
  const [details, setDetails] = useState<DetailedGame | null>(null)
  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    getGameDetails(id).then((data) => {
      setDetails(data)
    })
  }, [id])

  return (
    <ScrollView style={{ backgroundColor: '#271C4D' }}>
      {details && <GameDetails game={details} navigateToHome={navigateToHome} />}
    </ScrollView>
  )
}
