import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/constants';
//types
import { TrainingRoute } from '../../../assets/typesNavgation';
//utils 
import { secToMin } from '../../../utils/timeConvert';


const Training = () => {
    const route = useRoute<TrainingRoute>()
    const { data } = route.params
    const steps = data.steps
    
    const [start, setStart] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [whatTime, setWhatTime] = useState('high')
    const [rep, setRep] = useState(steps[0].rep)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    useEffect(() => {
        setRep(steps[currentStep].rep)
    },[currentStep])

    useEffect(() => {
        if(start == false) return

        let time = 0
        if(whatTime == "high") {
            //setTime(steps[currentStep].timeHigh) 
            time = steps[currentStep].timeHigh
        } else {
            //setTime(steps[currentStep].timeLow)
            time = steps[currentStep].timeLow
        }

        const {min, sec} = secToMin(time)
        setMin(min)
        setSec(sec)

        let timer: any 

        const removeTimer = () => {
            clearInterval(timer)
            setSec(0)
            if( whatTime == "high" ) {
                setWhatTime('low')
                console.log("low")
            } else if(whatTime == 'low') {
                setWhatTime('high')
                if(rep == 1) {
                    setCurrentStep(prev => prev + 1)
                } else {
                    setRep(prev => prev - 1)
                }
            }
        }

        timer = setInterval(() => {
            setSec((prev) => {
                if(prev == 0) {
                    setMin((prev) => {
                        if(prev == 0) {
                            removeTimer()
                            return 0
                        }
                        return prev - 1
                    })
                    return 59
                }
                return prev - 1
            })
        }, 1000)
    },[currentStep, whatTime, start])

  
    return (
        <SafeAreaView 
        style={{
            ...styles.wrapper,
            backgroundColor: (whatTime == "low" || steps[currentStep].timeHigh == 0) ? COLORS.orangeBg : COLORS.red
        }}
        >
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subTitle}>{data.subTitle}</Text>

            <View style={styles.step}>
                <Text style={styles.textStep}>Etape en cours :</Text>
                <Text style={{...styles.textStep, fontWeight: "700"}}>
                    {steps[currentStep].name}
                </Text>
            </View>

            <View style={styles.nextStep}>
                <Text style={styles.textNextStep}>Etape suivante :</Text>
                <Text style={{...styles.textNextStep, fontWeight: "700"}}>
                    {steps[currentStep + 1] ? steps[currentStep + 1].name : "Terminé ! "}
                </Text>
            </View>

            <View>
                <Text style={styles.chrono}>
                    { min < 10 && "0" }
                    {min} 
                    :
                    { sec < 10 && "0" }
                    {sec}
                </Text>
            </View>

        </SafeAreaView>
    );
};

export default Training;


const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        flex: 1
    },
    title: {
        color: COLORS.orangeDark,
        textAlign: "center",
        fontSize: 40,
        letterSpacing: 4,
    },
    subTitle: {
        color: COLORS.blackLight,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 20,
        marginVertical: 10
    },

    //stepBloc
    step: {
        backgroundColor: COLORS.orangeDark,
        padding: 20,
        borderRadius: 20,
        marginTop: 30
    },
    textStep: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginVertical: 3
    },
    nextStep: {
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        borderColor: COLORS.orangeDark,
        borderWidth: 2
    },
    textNextStep: {
        color: COLORS.orangeDark,
        textAlign: "center",
        fontSize: 20,
        marginVertical: 3
    },


    //CHRONO
    chrono: {
        fontSize: 70,
        color: COLORS.blackLight,
        marginTop: 50
    }
})