import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { getGameDetails } from '../services/api/games/request_details'
import Header from '../components/Header'

export default function Details({ route }: { route: any }) {
  const { id }: { id: number } = route.params
  const [details, setDetails] = useState([])

  useEffect(() => {
    getGameDetails(id).then((data) => {
      setDetails(data)
    })
  }, [])

  return (
    <View>
      <Header />
      <Text>Details</Text>
    </View>
  )
}
