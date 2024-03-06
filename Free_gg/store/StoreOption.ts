import { create } from 'zustand'

type Platform = 'PC (Windows)' | 'All' | 'Web Browser'
interface OptionState {
  option: Platform
  changeOption: (name: Platform) => void
}

export const cat = [
  'all',
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts'
] as const

type Category = (typeof cat)[number]

interface CategoryState {
  category: Category
  changeCategory: (name: Category) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: 'all',
  changeCategory: (name) => set({ category: name })
}))

export const useBearStore = create<OptionState>()((set) => ({
  option: 'All',
  changeOption: (name) => set({ option: name })
}))
