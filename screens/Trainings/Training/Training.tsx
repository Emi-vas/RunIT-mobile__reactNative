import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
//types
import { TrainingRoute } from '../../../assets/typesNavgation';
//utils 
import { secToMin } from '../../../utils/timeConvert';
import { vibrate } from '../../../utils/vibrate';
//style
import { styles, stylesEnd } from './Training.style';
//assets
import { COLORS } from '../../../assets/constants';
import { imageMain } from '../../../assets/images';


const Training = () => {
    const route = useRoute<TrainingRoute>()
    const { data } = route.params
    const steps = data.steps
    let timer: any 
    
    const [start, setStart] = useState(false) //start btn
    const [pause, setPause] = useState(false)
    const [saveTime, setSaveTime] = useState(0) //save time for pause
    const [currentStep, setCurrentStep] = useState(0) //echauffement, travail, retour au calme
    const [whatTime, setWhatTime] = useState('high') //time high intensity time or low intensity time
    const [rep, setRep] = useState(steps[0].rep) //number of rep of set
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const [displayEnd, setDisplayEnd] = useState(false)

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
        let time = 0
        if(!pause) {
                if(whatTime == "high" ) {
                    //always start with high time
                    time = steps[currentStep].timeHigh
                } else {
                    //if it's low time
                    time = steps[currentStep].timeLow
                }
        }

        //handle start btn
        if(start == false) return
        if(pause == true) time = saveTime



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
                        setDisplayEnd(true)
                    }
                } else {
                    //if there is another rep
                    setRep(prev => prev - 1)
                }
            }
        }

        vibrate(1)
        displayTime(time)

        timer = setInterval(() => {
            if(time == 0) {
                removeTimer()
            } else {
                time = time - 1
                setSaveTime(time)
                displayTime(time)
            }
        }, 1000)

        return () => clearInterval(timer)
    },[currentStep, whatTime, start])



    if(displayEnd) return <End />

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

            {   
                start &&
                <View>
                    <Text style={styles.chrono}>
                        { min < 10 && "0" }
                        {min} 
                        :
                        { sec < 10 && "0" }
                        {sec}
                    </Text>
                    <Text style={styles.chronoIntensity}>
                        {(whatTime == "high" && steps[currentStep].timeHigh != 0) ? "Haute intensité" : "Basse intensité"}
                    </Text>
                </View>
            }

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
                            if(steps[currentStep + 1]) {
                                setWhatTime('high')
                                setCurrentStep(prev => prev + 1)
                            } else {
                                //END
                                setStart(false)
                                setDisplayEnd(true)
                            }
                        }}
                    >
                        <Text style={styles.textButton2}>Passer l'étape</Text>
                    </TouchableOpacity>
               }
            </View>
        </SafeAreaView>
    );
};
export default Training;


const End = () => {
    return(
        <View style={stylesEnd.wrapper}>
            <Image source={imageMain.end} style={stylesEnd.bg} />
            
            <Text style={stylesEnd.title}>Terminé !</Text>
        </View>
    )
}


