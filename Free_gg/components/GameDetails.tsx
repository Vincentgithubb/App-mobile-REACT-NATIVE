import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native'
import { DetailedGame, Game } from '../types/types'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  infos: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  screen: { backgroundColor: '#38256B', height: 600, width: '100%', margin: 20, marginTop: 30 },
  pics: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 20 },
  screenshotImage: { width: 380, height: 300, borderRadius: 10, marginHorizontal: 5 }
})

interface Props {
  game: DetailedGame
  navigateToHome: () => void
}

const GameDetails: React.FC<Props> = ({ game, navigateToHome }) => {
  const navigation = useNavigation()
  const handlePress = () => {
    if (game && game.game_url) {
      Linking.openURL(game.game_url)
    }
  }

  return (
    game && (
      <View style={{ marginBottom: '20%' }}>
        <View key={game.id} style={styles.infos}>
          <Text style={{ fontSize: 35, color: '#2B6692', margin: 10 }}>Details</Text>
          <Image
            source={{ uri: game.thumbnail }}
            style={{ width: 305, height: 303, borderRadius: 15, marginBottom: 15 }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginBottom: 10 }}>{game.title}</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10, marginRight: 20, marginLeft: 20 }}>
            {game.description}
          </Text>
          <View style={styles.screen}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 20, margin: 10 }}>
              Game infos :
            </Text>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Game Url :</Text>
                  <TouchableOpacity onPress={handlePress}>
                    <Text style={{ color: '#2B6692', margin: 10, marginTop: 0 }}>
                      {game.game_url ? 'Click to open' : 'No URL available'}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Genre :</Text>
                  <Text style={{ color: 'white', margin: 10, marginTop: 0 }}>{game.genre}</Text>
                </View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Platform :</Text>
                  <Text style={{ color: 'white', margin: 10, marginTop: 0 }}>{game.platform}</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Publisher :</Text>
                  <Text style={{ color: 'white', margin: 10, marginTop: 0 }}>{game.publisher}</Text>
                </View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Developers :</Text>
                  <Text style={{ color: 'white', margin: 10, marginTop: 0 }}>{game.developer}</Text>
                </View>
                <View>
                  <Text style={{ color: 'white', margin: 10 }}>- Release Date :</Text>
                  <Text style={{ color: 'white', margin: 10, marginTop: 0 }}>{game.release_date}</Text>
                </View>
              </View>
            </View>
            {game.screenshots && game.screenshots.length > 0 && (
              <ScrollView horizontal>
                <View style={styles.pics}>
                  {game.screenshots.map((screenshot) => (
                    <Image key={screenshot.id} source={{ uri: screenshot.image }} style={styles.screenshotImage} />
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
          {game.minimum_system_requirements && (
            <View style={styles.infos}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 20, margin: 10 }}>
                ---Minimum System Requirements---
              </Text>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: 'white', marginVertical: 5 }}>OS: {game.minimum_system_requirements.os}</Text>
                <Text style={{ color: 'white', marginVertical: 5 }}>
                  Processor: {game.minimum_system_requirements.processor}
                </Text>
                <Text style={{ color: 'white', marginVertical: 5 }}>
                  Memory: {game.minimum_system_requirements.memory}
                </Text>
                <Text style={{ color: 'white', marginVertical: 5 }}>
                  Graphics: {game.minimum_system_requirements.graphics}
                </Text>
                <Text style={{ color: 'white', marginVertical: 5 }}>
                  Storage: {game.minimum_system_requirements.storage}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    )
  )
}

export default GameDetails
