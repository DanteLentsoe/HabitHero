import { Habit } from '../types'
import { Rank } from '../types/rank'

export const ranks: Array<Rank> = [
  { id: 'novice', name: 'Novice', minScore: 0, maxScore: 49, icon: '👶' },
  {
    id: 'apprentice',
    name: 'Apprentice',
    minScore: 50,
    maxScore: 199,
    icon: '🧑‍🎓',
  },
  { id: 'adept', name: 'Adept', minScore: 200, maxScore: 499, icon: '👨‍🔬' },
  { id: 'expert', name: 'Expert', minScore: 500, maxScore: 999, icon: '🧙‍♂️' },
  {
    id: 'master',
    name: 'Master',
    minScore: 1000,
    maxScore: Infinity,
    icon: '🦸‍♂️',
  },
]

export const calculateRank = (habits: Array<Habit>): Rank => {
  const totalScore = habits.reduce((sum, habit) => sum + habit.streak, 0)
  return (
    ranks.find(
      (rank) => totalScore >= rank.minScore && totalScore <= rank.maxScore,
    ) || ranks[0]
  )
}
