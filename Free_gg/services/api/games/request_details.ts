import { api } from '../../api'

export const getGameDetails = async (id) => {
  return await api.get(`/games?id=${id}`).then((response) => {
    return response.data
  })
}
