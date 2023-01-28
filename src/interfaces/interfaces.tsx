
export interface Score {
  name: string,
  score: number
}
export type Scores = Score[]

export interface Message {
  author: string,
  date: Date,
  message: string
}

export type Messages = Message[]
