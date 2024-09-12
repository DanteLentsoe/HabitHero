import { useHabitStore } from '@/app/store'
import { FC } from 'react'
import classNames from 'classnames'

export type HabitListProps = {
  className?: string
}

export const HabitList: FC<HabitListProps> = ({ className }) => {
  const { habits, completeHabit } = useHabitStore()

  if (habits.length === 0) {
    return <div>No habits yet. Start by adding a new habit!</div>
  }
  return (
    <div className={classNames('space-y-4', className)}>
      {habits.map((habit) => (
        <div
          key={habit.id}
          className="flex justify-between items-center bg-gray-100 p-4 rounded"
        >
          <div>
            <span className="font-bold">{habit.name}</span>
            <span className="ml-2 text-sm text-gray-600">
              ({habit.frequency})
            </span>
            <div className="text-sm">
              <span className="mr-2">Streak: {habit.streak}</span>
              <span>Points: {habit.points}</span>
            </div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
            onClick={() => completeHabit(habit.id)}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  )
}
