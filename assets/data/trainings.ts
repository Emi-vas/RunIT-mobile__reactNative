import { Training } from "../types";

export const trainings: Training[] = [
    {
        title: 'Classique',
        subTitle: `30" 30"`,
        image: 0,
        steps: [
            {
                name: 'échauffement',
                timeHigh: 0,
                timeLow: 600,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 30,
                timeLow: 30,
                rep: 8
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 30,
                timeLow: 30,
                rep: 8
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 30,
                timeLow: 30,
                rep: 8
            },
            {
                name: 'retour au calme',
                timeHigh: 0,
                timeLow: 300,
                rep: 1
            },

        ]
    },
    {
        title: 'Court',
        subTitle: `15" 15"`,
        image: 1,
        steps: []
    },
    {
        title: 'Long',
        subTitle: "1' 1'",
        image: 2,
        steps: []
    },
    {
        title: 'Progressif',
        subTitle: `1' 30" 15"`,
        image: 3,
        steps: []
    },
]