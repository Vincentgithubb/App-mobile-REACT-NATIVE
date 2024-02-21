import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { DetailedGame, Game } from '../types/types'

export default function GameDetails({ game }: { game: any }) {
  return (
    game && (
      <View>
        <View key={game.id}>
          <Image source={{ uri: game.thumbnail }} style={{ width: 153, height: 162, borderRadius: 15 }} />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.title}</Text>
        </View>
      </View>
    )
  )
}
