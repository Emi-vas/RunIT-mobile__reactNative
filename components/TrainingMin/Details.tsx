import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//assets
import { COLORS } from '../../assets/constants';
//types
import { Step } from '../../assets/types';
//utils
import { secToString } from '../../utils/timeConvert';

interface Props {
    steps: Step[]
}

const Details = ({ steps }: Props) => {
    const time = secToString(647)

    return (
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
                                    step.timeHigh != 0 &&
                                    <View 
                                        style={{ ...styles.intensityBloc, backgroundColor: COLORS.orangeBg }}
                                    >
                                        <Text style={styles.textIntensity}>Haute intensité</Text>
                                        <Text style={ styles.textTime }>{ secToString(step.timeHigh) }</Text>
                                    </View>
                                }
                                {
                                    step.timeLow != 0 &&
                                    <View 
                                        style={{ ...styles.intensityBloc, backgroundColor: COLORS.blackLight }}
                                    >
                                        <Text style={{ ...styles.textIntensity, color: 'white' }}>Basse intensité</Text>
                                        <Text style={{...styles.textTime, color: COLORS.orangeBg}}>{ secToString(step.timeLow) }</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    );
};

export default Details;

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#c27d2a",
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