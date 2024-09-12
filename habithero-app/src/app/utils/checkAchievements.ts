import { Achievement, Habit } from '../types'

export const checkAchievements = (habits: Array<Habit>): Array<Achievement> => {
  const achievements: Array<Achievement> = [
    {
      id: '1',
      name: 'Habit Starter',
      description: 'Create your first habit',
      achieved: habits.length > 0,
    },
    {
      id: '2',
      name: 'Streak Master',
      description: 'Achieve a 7-day streak on any habit',
      achieved: habits.some((habit) => habit.streak >= 7),
    },
    {
      id: '3',
      name: 'Point Collector',
      description: 'Earn 1000 points',
      achieved: habits.reduce((sum, habit) => sum + habit.points, 0) >= 1000,
    },
  ]
  return achievements
}
