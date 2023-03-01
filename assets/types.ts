export type Training = {
    title: string,
    subTitle: string,
    image: number,
    steps: Step[]
}

export type Step = {
    name: string,
    rep: number,
    subSteps: SubStep[]
}

export type SubStep = {
    type: string,
    time: number
}



