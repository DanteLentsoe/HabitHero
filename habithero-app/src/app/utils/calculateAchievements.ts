import { Achievement, Habit } from '../types'
export const achievements: Achievement[] = [
  {
    id: '1',
    name: 'Habit Starter',
    description: 'Create your first habit',
    requiredScore: 1,
    icon: '🌱',
    achieved: false,
  },
  {
    id: '2',
    name: 'Streak Master',
    description: 'Achieve a 7-day streak on any habit',
    requiredScore: 7,
    icon: '🔥',
    achieved: false,
  },
  {
    id: '3',
    name: 'Point Collector',
    description: 'Earn 1000 points',
    requiredScore: 1000,
    icon: '🏆',
    achieved: false,
  },
  {
    id: '4',
    name: 'Month Master',
    description: 'Complete all habits for a month',
    requiredScore: 30,
    icon: '📅',
    achieved: false,
  },
  {
    id: '5',
    name: 'Habit Enthusiast',
    description: 'Create 5 habits',
    requiredScore: 5,
    icon: '🌟',
    achieved: false,
  },
  {
    id: '6',
    name: 'Consistency King',
    description: 'Maintain a 30-day streak on any habit',
    requiredScore: 30,
    icon: '👑',
    achieved: false,
  },
  {
    id: '7',
    name: 'Habit Centurion',
    description: 'Accumulate 100 total days of habit streaks',
    requiredScore: 100,
    icon: '💯',
    achieved: false,
  },
  {
    id: '8',
    name: 'Diverse Developer',
    description: 'Have active streaks in 3 different habits simultaneously',
    requiredScore: 3,
    icon: '🌈',
    achieved: false,
  },
  {
    id: '9',
    name: 'Point Magnate',
    description: 'Earn 10,000 points',
    requiredScore: 10000,
    icon: '💰',
    achieved: false,
  },
  {
    id: '10',
    name: 'Perfect Week',
    description: 'Complete all habits every day for a week',
    requiredScore: 7,
    icon: '🏅',
    achieved: false,
  },
]

export const calculateAchievements = (habits: Habit[]): Achievement[] => {
  return achievements.map((achievement) => {
    let achieved = false

    switch (achievement.id) {
      case '1':
        achieved = habits.length > 0
        break
      case '2':
        achieved = habits.some((habit) => habit.streak >= 7)
        break
      case '3':
        achieved = habits.reduce((sum, habit) => sum + habit.points, 0) >= 1000
        break
      case '4':
        achieved = habits.every((habit) => habit.streak >= 30)
        break
      case '5':
        achieved = habits.length >= 5
        break
      case '6':
        achieved = habits.some((habit) => habit.streak >= 30)
        break
      case '7':
        achieved = habits.reduce((sum, habit) => sum + habit.streak, 0) >= 100
        break
      case '8':
        achieved = habits.filter((habit) => habit.streak > 0).length >= 3
        break
      case '9':
        achieved = habits.reduce((sum, habit) => sum + habit.points, 0) >= 10000
        break
      case '10':
        achieved =
          habits.every((habit) => habit.streak >= 7) && habits.length > 0
        break
      default:
        achieved = false
    }

    return { ...achievement, achieved }
  })
}
