import { useHabitStore } from '@/app/store'
import { Habit } from '@/app/types'
import { FC, useState } from 'react'

export type AddHabitModalProps = {
  isOpen: boolean
  onClose: () => void
  addHabit: (habit: Habit) => void
}

export const AddHabitModal: FC<AddHabitModalProps> = ({ isOpen, onClose }) => {
  const [habitName, setHabitName] = useState('')
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily')
  const addHabit = useHabitStore((state) => state.addHabit)

  const handleSubmit = () => {
    if (habitName.trim()) {
      addHabit({
        id: Date.now().toString(),
        name: habitName.trim(),
        frequency,
        streak: 0,
        completions: [],
        points: 0,
      })
      setHabitName('')
      setFrequency('daily')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add New Habit</h2>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter habit name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
