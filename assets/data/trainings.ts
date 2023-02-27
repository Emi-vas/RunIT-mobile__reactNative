import { Training } from "../types";

export const trainings: Training[] = [
    {
        title: 'Test',
        subTitle: `3" 2"`,
        image: 3,
        steps: [
            {
                name: 'échauffement',
                timeHigh: 0,
                timeLow: 10,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 7,
                timeLow: 5,
                rep: 3
            },
            {
                name: 'retour au calme',
                timeHigh: 0,
                timeLow: 7,
                rep: 1
            },

        ]
    },
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
        steps: [
            {
                name: 'échauffement',
                timeHigh: 0,
                timeLow: 600,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 15,
                timeLow: 15,
                rep: 16
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 15,
                timeLow: 15,
                rep: 16
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 15,
                timeLow: 15,
                rep: 16
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
        title: 'Long',
        subTitle: "1' 1'",
        image: 2,
        steps: [
            {
                name: 'échauffement',
                timeHigh: 0,
                timeLow: 600,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 60,
                timeLow: 60,
                rep: 4
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 60,
                timeLow: 60,
                rep: 4
            },
            {
                name: 'repos',
                timeHigh: 0,
                timeLow: 120,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 60,
                timeLow: 60,
                rep: 4
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
        title: 'Progressif',
        subTitle: `1' 30" 15"`,
        image: 3,
        steps: [
            {
                name: 'échauffement',
                timeHigh: 0,
                timeLow: 600,
                rep: 1
            },
            {
                name: 'travail',
                timeHigh: 60,
                timeLow: 60,
                rep: 4
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
                timeHigh: 15,
                timeLow: 15,
                rep: 16
            },
            {
                name: 'retour au calme',
                timeHigh: 0,
                timeLow: 300,
                rep: 1
            },
        ]
    },
]