import { Game } from '../../../types/types'
import { api } from '../../api'

export const getGameDetails = async (id: number) => {
  return await api.get(`/games?id=${id}`).then((response) => {
    return response.data
  })
}
