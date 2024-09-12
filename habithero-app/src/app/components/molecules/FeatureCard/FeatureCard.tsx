import { FC } from 'react'
import classNames from 'classnames'

export type FeatureCardProps = {
  title: string
  description: string
  icon: string
  className?: string
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => (
  <div
    className={classNames(
      'bg-purple-100 p-6 rounded-lg text-center',
      className,
    )}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
    <p className="text-purple-600">{description}</p>
  </div>
)
