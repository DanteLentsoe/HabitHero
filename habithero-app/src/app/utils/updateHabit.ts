import { format, isThisWeek } from 'date-fns'
import { Habit } from '../types'

export const updateHabit = (habit: Habit): Habit => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const isCompleted = habit.completions.includes(today)

  if (isCompleted) {
    return habit
  }

  const updatedCompletions = [...habit.completions, today]
  let updatedStreak = habit.streak
  let updatedPoints = habit.points

  if (habit.frequency === 'daily') {
    const yesterday = format(new Date(Date.now() - 86400000), 'yyyy-MM-dd')
    if (habit.completions.includes(yesterday)) {
      updatedStreak += 1
    } else {
      updatedStreak = 1
    }
  } else if (habit.frequency === 'weekly') {
    if (isThisWeek(new Date(habit.completions[habit.completions.length - 1]))) {
      updatedStreak += 1
    } else {
      updatedStreak = 1
    }
  }

  updatedPoints += 10 * updatedStreak

  return {
    ...habit,
    completions: updatedCompletions,
    streak: updatedStreak,
    points: updatedPoints,
  }
}
