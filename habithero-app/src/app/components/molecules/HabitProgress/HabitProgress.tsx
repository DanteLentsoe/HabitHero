import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useHabitStore } from '@/app/store'
import classNames from 'classnames'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export type HabitProgressProps = {
  className?: string
}

export const HabitProgress: FC<HabitProgressProps> = ({ className }) => {
  const habits = useHabitStore((state) => state.habits)

  if (habits.length === 0) {
    return null
  }
  const data = {
    labels: habits.map((habit) => habit.name),
    datasets: [
      {
        label: 'Streak',
        data: habits.map((habit) => habit.streak),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Points',
        data: habits.map((habit) => habit.points),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className={classNames('mt-8', className)}>
      <h2 className="text-2xl font-bold mb-4">Habit Progress</h2>
      <Bar data={data} options={options} />
    </div>
  )
}
