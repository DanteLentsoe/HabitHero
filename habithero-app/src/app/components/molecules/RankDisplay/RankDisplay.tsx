import { Rank } from '@/app/types/rank'
import { FC } from 'react'

export type RankDisplayProps = {
  rank: Rank
}

export const RankDisplay: FC<RankDisplayProps> = ({ rank }) => (
  <div className="mt-8 bg-purple-100 p-4 rounded-lg">
    <h2 className="text-2xl font-bold text-purple-800 mb-2">Current Rank</h2>
    <div className="flex items-center">
      <span className="text-4xl mr-4">{rank.icon}</span>
      <div>
        <p className="font-semibold text-xl">{rank.name}</p>
        <p className="text-sm text-gray-600">
          Score range: {rank.minScore} -{' '}
          {rank.maxScore === Infinity ? '∞' : rank.maxScore}
        </p>
      </div>
    </div>
  </div>
)
