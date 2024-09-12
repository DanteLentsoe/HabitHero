import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Achievement, Habit } from '../types'
import { checkAchievements, updateHabit } from '../utils'

export type HabitStore = {
  habits: Array<Habit>
  achievements: Array<Achievement>
  addHabit: (habit: Habit) => void
  completeHabit: (habitId: string) => void
  getAchievements: () => Array<Achievement>
  initializeStore: () => void
}

export const useHabitStore = create<HabitStore>()(
  persist(
    (set, get) => ({
      habits: [],
      achievements: [],
      addHabit: (habit: Habit) =>
        set((state) => ({
          habits: [...state.habits, habit],
          achievements: checkAchievements([...state.habits, habit]),
        })),
      completeHabit: (habitId: string) =>
        set((state) => {
          const updatedHabits = state.habits.map((habit) =>
            habit.id === habitId ? updateHabit(habit) : habit,
          )
          return {
            habits: updatedHabits,
            achievements: checkAchievements(updatedHabits),
          }
        }),
      getAchievements: () => get().achievements,
      initializeStore: () => {
        // intentionally left empty.
        // Used to trigger the loading of persisted state.
      },
    }),
    {
      name: 'HabitHero-storage',
      getStorage: () => localStorage,
    },
  ),
)
