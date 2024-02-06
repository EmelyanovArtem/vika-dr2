export interface questionInt {
  id: number,
  question: string,
  ans1: {
    text: string,
    res: boolean | number,
  },
  ans2: {
    text: string,
    res: boolean | number,
  },
  ans3: {
    text: string,
    res: boolean | number,
  },
}