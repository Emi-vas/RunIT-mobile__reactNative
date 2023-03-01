import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//assets
import { COLORS } from '../../assets/constants';
//types
import { Step, SubStep } from '../../assets/types';
//utils
import { secToString } from '../../utils/timeConvert';

interface Props {
    steps: Step[]
}

const Details = ({ steps }: Props) => {
    return(
        <View style={styles.wrapper}>
            {
                steps.map((step: Step, index: number) => (
                    <View style={styles.container} key={index}>
                         {
                            step.rep > 1 &&
                            <View style={styles.blocRep}>
                                <Text style={styles.textRep}>X{step.rep}</Text>
                            </View>
                        }

                        <View>
                            <Text style={styles.title}>{step.name}</Text>
                            <View style={styles.intensityCont}>
                                {
                                    step.subSteps.map((subStep: SubStep, index: number) => (
                                        <SubStepCompo subStep={subStep} key={index} />
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}
export default Details

interface SubStepCompoProps {
    subStep: SubStep
}

const SubStepCompo = ({ subStep }: SubStepCompoProps) => {
    return (
        <View 
            style={{ 
                ...styles.intensityBloc, 
                backgroundColor: subStep.type == "highIntensity" ? COLORS.orangeBg : COLORS.blackLight
            }}
        >
            <Text style={{
                ...styles.textIntensity,
                color: subStep.type == "highIntensity" ? COLORS.black : "white"
            }}>
                {
                subStep.type == "lowIntensity" ?
                "Basse intensité" : "Haute intensité"
                }
            </Text>
            <Text 
                style={{
                    ...styles.textTime,
                    color: subStep.type == "highIntensity" ? COLORS.black : "white"
                }}
            >
                { secToString(subStep.time)   }
            </Text>
        </View>
    )
}


export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.orangeDark,
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },

    //container of a step
    container: {
        flexDirection: "row",
        marginVertical: 15,
    },

    //bloc rep
    blocRep: {
        marginRight: 7,
        paddingRight: 7,
        borderRightWidth: 3,
        borderRightColor: "white",
        justifyContent: 'center',
    },
    textRep: {
        fontWeight: "700",
        fontSize: 22,
        color: COLORS.blackLight
    },

    //intensity
    intensityCont: {
        flexDirection: "row"
    },
    intensityBloc: {
        width: 110,
        marginHorizontal: 7,
        marginTop: 10,
        padding: 7,
        borderRadius: 20
    },
    textIntensity: {
        textAlign: "center",
    },
    textTime: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: "600"
    }

})