import { create } from 'zustand'

type Platform = 'PC (Windows)' | 'All' | 'Web Browser'
interface OptionState {
  option: Platform
  changeOption: (name: Platform) => void
}

export const useBearStore = create<OptionState>()((set) => ({
  option: 'All',
  changeOption: (name) => set({ option: name })
}))
