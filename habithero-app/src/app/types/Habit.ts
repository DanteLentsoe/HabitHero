export type Habit = {
  id: string
  name: string
  frequency: 'daily' | 'weekly'
  streak: number
  completions: Array<string> // Array of date strings
  points: number
}
