'use client'
import { useHabitStore } from '@/app/store'
import { Habit } from '@/app/types'
import { useEffect, useState } from 'react'
import { AddHabitModal, HabitList } from '../../organisims'
import { AchievementList, HabitProgress } from '../../molecules'

export const HabitTrackerPage = () => {
  const [habits, setHabits] = useState<Array<Habit>>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const initializeStore = useHabitStore((state) => state.initializeStore)

  useEffect(() => {
    initializeStore()
    setIsLoading(false)
  }, [initializeStore])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const addHabit = (habit: Habit) => {
    setHabits([...habits, habit])
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Habit Tracker</h1>
      <HabitList />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Add New Habit
      </button>
      <AddHabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        addHabit={addHabit}
      />
      <AchievementList />
      <HabitProgress />
    </div>
  )
}
