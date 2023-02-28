import { Vibration } from "react-native"

export const vibrate = (number: number) => {
    if(number == 2) {
        const pattern = [
            500,
            700
        ]
    
        Vibration.vibrate(pattern)
    } else {
        Vibration.vibrate()
    }
   

}



