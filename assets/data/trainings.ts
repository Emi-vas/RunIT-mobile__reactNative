import { Training } from "../types";

export const trainings: Training[] = [
    {
        title: 'Test',
        subTitle: `3" 2"`,
        image: 3,
        steps: [
            {
                name: 'échauffement',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 2,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Série 1',
                rep: 3,
                subSteps: [
                    {
                        type: "highIntensity",
                        time: 3,
                        isDone: []
                    },
                    {
                        type: "lowIntensity",
                        time: 3,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Reccup',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 3,
                        isDone: []
                    }
                ]
            }, 
            {
                name: 'Série 2',
                rep: 3,
                subSteps: [
                    {
                        type: "highIntensity",
                        time: 3,
                        isDone: []
                    },
                    {
                        type: "lowIntensity",
                        time: 3,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Retour au calme',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 2,
                        isDone: []
                    }
                ]
            },
        ]
    },
    {
        title: 'Classique',
        subTitle: `30" 30"`,
        image: 0,
        steps: [
            {
                name: 'Echauffement',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 600,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Série 1',
                rep: 8,
                subSteps: [
                    {
                        type: "highIntensity",
                        time: 30,
                        isDone: []
                    },
                    {
                        type: "lowIntensity",
                        time: 30,
                        isDone: []
                    },
                ]
            },
            {
                name: 'Récupération',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 120,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Série 2',
                rep: 8,
                subSteps: [
                    {
                        type: "highIntensity",
                        time: 30,
                        isDone: []
                    },
                    {
                        type: "lowIntensity",
                        time: 30,
                        isDone: []
                    },
                ]
            },
            {
                name: 'Récupération',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 120,
                        isDone: []
                    }
                ]
            },
            {
                name: 'Série 3',
                rep: 8,
                subSteps: [
                    {
                        type: "highIntensity",
                        time: 30,
                        isDone: []
                    },
                    {
                        type: "lowIntensity",
                        time: 30,
                        isDone: []
                    },
                ]
            },
            {
                name: 'Retour au calme',
                rep: 1,
                subSteps: [
                    {
                        type: "lowIntensity",
                        time: 120,
                        isDone: []
                    }
                ]
            },

        ]
    },
 
    /*     {
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
    }*/
]