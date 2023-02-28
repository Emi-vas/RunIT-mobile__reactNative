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
    let timer: any 
    let time = 0
    
    const [start, setStart] = useState(false) //start btn
    const [pause, setPause] = useState(false)
    const [currentStep, setCurrentStep] = useState(0) //echauffement, travail, retour au calme
    const [whatTime, setWhatTime] = useState('high') //time high intensity time or low intensity time
    const [rep, setRep] = useState(steps[0].rep) //number of rep of set
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const displayTime = (time: number) => {
        const { min, sec } = secToMin(time)
        setMin(min)
        setSec(sec)
    }

    useEffect(() => {
        //if step change we set the rep of the new step
        setRep(steps[currentStep].rep) 
    },[currentStep])



    useEffect(() => {
       if(!pause) {
            if(whatTime == "high") {
                //always start with high time
                time = steps[currentStep].timeHigh
            } else {
                //if it's low time
                time = steps[currentStep].timeLow
            }
       }

        //handle start btn
        if(start == false) return

        displayTime(time)

        //when time == 0
        const removeTimer = () => {
            clearInterval(timer)
            setPause(false)
            if( whatTime == "high" ) {
                //if time high is end, we switch on low time
                setWhatTime('low')
            } else if(whatTime == 'low') {
                //if it's low time we change step (so we switch on high time)
                setWhatTime('high')
                if(rep == 1) {
                    //if there is no more rep to do we change step
                    if(steps[currentStep + 1]) {
                        setCurrentStep(prev => prev + 1)
                    } else {
                        //END
                        setStart(false)
                    }
                } else {
                    //if there is another rep
                    setRep(prev => prev - 1)
                }
            }
        }

        timer = setInterval(() => {
            if(time == 0) {
                removeTimer()
            } else {
                time = time - 1
                displayTime(time)
            }
            
        }, 1000)

        return () => clearInterval(timer)
    },[currentStep, whatTime, start])

   
  
    return (
        <SafeAreaView 
        style={{
            ...styles.wrapper,
            backgroundColor: (whatTime == "low" || steps[currentStep].timeHigh == 0) ? COLORS.orangeBg : COLORS.green
        }}
        >
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subTitle}>{data.subTitle}</Text>

            <View style={styles.blocStep}>
                <View style={styles.step}>
                    <Text style={styles.textStep}>Etape en cours :</Text>
                    <Text style={{...styles.textStep, fontWeight: "700"}}>
                        {steps[currentStep].name}
                    </Text>
                </View>
                <View style={styles.rep}>
                    <Text style={styles.textRep}>x{rep}</Text>
                </View>
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
    blocStep: {
        flexDirection: "row",
        alignItems: "center"
    },
    rep: {
        padding: 10,
        marginLeft: 3,
    },
    textRep: {
        fontSize: 30,
        color: COLORS.blackLight,
        
       
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
    },

    //BTN
    blocButton: {
        marginTop: 30
    },
    button: {
        backgroundColor: "#2a88e4",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 50
    },
    textButton: {
        fontSize: 30,
        color: "white"
    },
})