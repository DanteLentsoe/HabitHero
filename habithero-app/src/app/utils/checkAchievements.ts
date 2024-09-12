import { Achievement, Habit } from '../types'

export const checkAchievements = (habits: Array<Habit>): Array<Achievement> => {
  const achievements: Array<Achievement> = [
    {
      id: '1',
      name: 'Habit Starter',
      description: 'Create your first habit',
      requiredScore: 1,
      icon: '🌱',
      achieved: habits.length > 0,
    },
    {
      id: '2',
      name: 'Streak Master',
      description: 'Achieve a 7-day streak on any habit',
      requiredScore: 7,
      icon: '🔥',
      achieved: habits.some((habit) => habit.streak >= 7),
    },
    {
      id: '3',
      name: 'Point Collector',
      description: 'Earn 1000 points',
      icon: '🏆',
      achieved: habits.reduce((sum, habit) => sum + habit.points, 0) >= 1000,
      requiredScore: 1000,
    },
    {
      id: '4',
      name: 'Month Master',
      description: 'Complete all habits for a month',
      requiredScore: 30,
      icon: '📅',
      achieved: habits.every((habit) => habit.streak >= 30),
    },
    {
      id: '5',
      name: 'Habit Enthusiast',
      description: 'Create 5 habits',
      requiredScore: 5,
      icon: '🌟',
      achieved: habits.length >= 5,
    },
    {
      id: '6',
      name: 'Consistency King',
      description: 'Maintain a 30-day streak on any habit',
      requiredScore: 30,
      icon: '👑',
      achieved: habits.some((habit) => habit.streak >= 30),
    },
    {
      id: '7',
      name: 'Habit Centurion',
      description: 'Accumulate 100 total days of habit streaks',
      requiredScore: 100,
      icon: '💯',
      achieved: habits.reduce((sum, habit) => sum + habit.streak, 0) >= 100,
    },
    {
      id: '8',
      name: 'Diverse Developer',
      description: 'Have active streaks in 3 different habits simultaneously',
      requiredScore: 3,
      icon: '🌈',
      achieved: habits.filter((habit) => habit.streak > 0).length >= 3,
    },
    {
      id: '9',
      name: 'Point Magnate',
      description: 'Earn 10,000 points',
      requiredScore: 10000,
      icon: '💰',
      achieved: habits.reduce((sum, habit) => sum + habit.points, 0) >= 10000,
    },
    {
      id: '10',
      name: 'Perfect Week',
      description: 'Complete all habits every day for a week',
      requiredScore: 7,
      icon: '🏅',
      achieved: habits.every((habit) => habit.streak >= 7) && habits.length > 0,
    },
  ]
  return achievements
}
