import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Vibration } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//types
import { TrainingRoute } from '../../../assets/typesNavgation';
import { Step } from '../../../assets/types';
//utils 
import { secToMin } from '../../../utils/timeConvert';
//style
import { styles, stylesEnd } from './Training.style';
//assets
import { COLORS } from '../../../assets/constants';
//compo
import Details from '../../../components/TrainingMin/Details';


const Training = () => {
    const route = useRoute<TrainingRoute>()
    const { data } = route.params
    let timer: any 

    const [start, setStart] = useState(false) //start btn
    const [step, setStep] = useState(0)
    const [subStep, setSubStep] = useState(0)
    const [rep, setRep] = useState(0)
    const [pause, setPause] = useState(false)
    const [saveTime, setSaveTime] = useState(0) //save time for pause
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const [steps, setSteps] = useState(JSON.parse(JSON.stringify(data.steps)))

    const [displayEnd, setDisplayEnd] = useState(false) //exercice done

    const displayTime = (time: number) => {
        const { min, sec } = secToMin(time)
        setMin(min)
        setSec(sec)
    }

    useEffect(() => {
        //refresh number of rep when step change
        setRep(steps[step].rep)
    },[step])


    useEffect(() => {
        let time = steps[step].subSteps[subStep].time
        if(pause) {
            time = saveTime
        }

        displayTime(time)

        if(!start) return
        if(pause) setPause(false)
        Vibration.vibrate()

        timer = setInterval(() => {
            time = time - 1

            if(time < 0) {
                finishExercice()
                endTime()
            } else {
                displayTime(time)
                setSaveTime(time)
            }
        }, 1000)

        return () => clearInterval(timer)
    },[start, step, subStep])

    //track userActivity
    const finishExercice = () => {
        let userTrainingTemp = steps
        userTrainingTemp[step].subSteps[subStep].isDone = [
            ...userTrainingTemp[step].subSteps[subStep].isDone,
            true 
        ]
        setSteps(userTrainingTemp)
    }

    const endTime = () => {
        clearInterval(timer)
        passEx()
    }

    const passEx = () => {
        //press btn to pass exercice
        if(steps[step].subSteps[subStep + 1]) {
            setSubStep(subStep + 1)
            return
        }

        if(rep > 1) {
            //there is rep left
            setRep(prev => prev - 1)
            setSubStep(0)
            return
        } 
        passStep()
    }

    const passStep = () => {
        //press btn to next step
        if(steps[step + 1]) {
            //there is step left
            setSubStep(0)
            setStep(step + 1)
            return
        } 
        //end
        setDisplayEnd(true)
    }

    if(displayEnd) return <End steps={steps} />

    return (
        <SafeAreaView 
        style={{
            ...styles.wrapper,
            backgroundColor:  steps[step].subSteps[subStep].type == "lowIntensity" ? COLORS.orangeBg : COLORS.green
        }}
        >
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subTitle}>{data.subTitle}</Text>

            <View style={styles.blocStep}>
                <View style={styles.step}>
                    <Text style={styles.textStep}>Etape en cours :</Text>
                    <Text style={{...styles.textStep, fontWeight: "700"}}>
                        {steps[step].name}
                    </Text>
                </View>
                <View style={styles.rep}>
                    <Text style={styles.textRep}>x{rep}</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    setSubStep(0)
                    setRep(0)
                    passStep()
                }} 
                style={styles.nextStep}
            >
                <Text style={styles.textNextStep}>Etape suivante :</Text>
                <Text style={{...styles.textNextStep, fontWeight: "700"}}>
                    { steps[step + 1] ? steps[step + 1].name : "Terminé !"}
                </Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.chrono}>
                    { min < 10 && "0" }
                    {min} 
                    :
                    { sec < 10 && "0" }
                    {sec}
                </Text>
                <Text style={styles.chronoIntensity}>
                    { 
                        steps[step].subSteps[subStep].type == "lowIntensity" ?
                        "Basse intensité" : "Haute intensité"
                    }
                </Text>
            </View>

            <View style={styles.blocButton}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        if(!start) {
                            setStart(true)
                        }
                        if(start) {
                            setStart(false)
                            setPause(true)
                        }
                    }}
                >
                    <Text style={styles.textButton}>{ !start ? "Start !" : "Stop" }</Text>
                </TouchableOpacity>

               {
                    start &&
                    <TouchableOpacity 
                        style={styles.button2}
                        onPress={() => {
                            passEx()
                        }} 
                    >
                        <Text style={styles.textButton2}>Passer </Text>
                    </TouchableOpacity>
               }
            </View>
        </SafeAreaView>
    );
};
export default Training;

interface PropsEnd {
    steps: Step[]
}

const End = ({ steps }: PropsEnd) => {
    console.log(steps[0].subSteps[0].isDone)
    return(
        <SafeAreaView style={stylesEnd.wrapper}>
            <Text style={stylesEnd.title}>Terminé !</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Details steps={steps} />
            </ScrollView>
        </SafeAreaView>
    )
}


