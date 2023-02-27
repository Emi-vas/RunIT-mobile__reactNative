import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteProp } from "@react-navigation/native"
import { Training } from "./types"

export type StackTrainings = {
    Main: undefined,
    Training: {
        data: Training
    },
}

export type StackTrainingsProps = NativeStackNavigationProp<
    StackTrainings,
    'Training'
>

export type TrainingRoute = RouteProp<
    StackTrainings,
    'Training'
>