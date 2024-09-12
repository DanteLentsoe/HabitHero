import { useHabitStore } from '@/app/store'
import { FC } from 'react'
import classNames from 'classnames'

export type AchievementListProps = {
  className?: string
}
export const AchievementList: FC<AchievementListProps> = ({ className }) => {
  const achievements = useHabitStore((state) => state.achievements)

  return (
    <div className={classNames('mt-8', className)}>
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="space-y-2">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-2 rounded ${
              achievement.achieved ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <span className="font-bold">{achievement.name}</span>
            <span className="ml-2 text-sm text-gray-600">
              {achievement.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
