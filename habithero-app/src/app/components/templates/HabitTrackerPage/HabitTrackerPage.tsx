'use client'
import { useHabitStore } from '@/app/store'
import { Habit } from '@/app/types'
import { useEffect, useState } from 'react'
import { AddHabitModal, HabitList, Tab } from '../../organisims'
import {
  AchievementList,
  AchievementsDisplay,
  HabitProgress,
  RankDisplay,
} from '../../molecules'
import { calculateAchievements, calculateRank } from '@/app/utils'

export const HabitTrackerPage = () => {
  const habitsDefault = useHabitStore((state) => state.habits)
  const [habits, setHabits] = useState<Array<Habit>>(habitsDefault || [])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const initializeStore = useHabitStore((state) => state.initializeStore)

  useEffect(() => {
    initializeStore()
    setIsLoading(false)
  }, [initializeStore])

  const [achievements, setAchievements] = useState(
    calculateAchievements(habits),
  )
  const [rank, setRank] = useState(calculateRank(habits))

  useEffect(() => {
    setAchievements(calculateAchievements(habits))
    setRank(calculateRank(habits))
  }, [habits])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const addHabit = (habit: Habit) => {
    setHabits([...habits, habit])
  }

  const tabs = [
    {
      name: 'Habit Progress',
      view: <HabitProgress />,
    },
    {
      name: 'Achievements Display',
      view: <AchievementsDisplay achievements={achievements} />,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Habit Tracker</h1>
      <HabitList />
      <button
        className="bg-purple-500 text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300 mt-4"
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
      <RankDisplay rank={rank} />
      <div className="mt-12">
        <Tab tabs={tabs} />
      </div>
    </div>
  )
}
