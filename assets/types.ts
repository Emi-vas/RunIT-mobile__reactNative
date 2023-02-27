export type Training = {
    title: string,
    subTitle: string,
    image: number,
    steps: Step[]
}

export type Step = {
    name: string,
    timeHigh: number,
    timeLow: number,
    rep: number
}