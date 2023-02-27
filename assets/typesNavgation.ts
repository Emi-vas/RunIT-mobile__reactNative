import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type StackTrainings = {
    Main: undefined,
    Training: undefined,
}

export type StackTrainingsProps = NativeStackNavigationProp<
    StackTrainings,
    'Training'
>