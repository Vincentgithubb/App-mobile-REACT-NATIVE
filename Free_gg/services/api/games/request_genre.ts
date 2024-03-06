import { Game } from '../../../types/types'
import { api } from '../../api'

export const getGamesGenre = async (categorie: any) => {
  return api.get('/games?category=' + categorie).then((response) => {
    return response.data as Game[]
  })
}
