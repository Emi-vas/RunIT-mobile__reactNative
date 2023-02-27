export type Training = {
    title: string,
    subTitle: string,
    image: number,
    steps: Step[]
}

type Step = {
    name: string,
    timeHigh: number,
    timeLow: number,
    rep: number
}