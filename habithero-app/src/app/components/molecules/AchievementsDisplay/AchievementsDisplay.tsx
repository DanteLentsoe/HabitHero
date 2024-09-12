import { Achievement } from '@/app/types'
import { FC } from 'react'

export type AchievementsDisplayProps = {
  achievements: Array<Achievement>
}

export const AchievementsDisplay: FC<AchievementsDisplayProps> = ({
  achievements,
}) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold text-purple-800 mb-4">Achievements</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`p-4 rounded-lg ${
            achievement.achieved ? 'bg-green-100' : 'bg-gray-100'
          }`}
        >
          <div className="text-3xl mb-2">{achievement.icon}</div>
          <h3 className="font-semibold">{achievement.name}</h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  </div>
)
