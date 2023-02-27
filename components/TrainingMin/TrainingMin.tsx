import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//assets
import { bgImages, tools } from '../../assets/images';
import { COLORS } from '../../assets/constants';
//icons
import { AntDesign } from '@expo/vector-icons';
//types
import { Training } from '../../assets/types';
//compo
import Details from './Details';

interface Props {
    training: Training
}

const TrainingMin = ({ training }: Props) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
       <View style={styles.wrapper}>
            <Image source={bgImages[training.image]} style={styles.bgImage} />
            <Image source={tools.afterTrainingMin} style={styles.after} />
            <View style={styles.blocText}>
                <Text style={styles.title}>{training.title}</Text>
                <Text style={styles.subTitle}>{training.subTitle}</Text>
            </View>
            <View style={styles.blocButtons}>
                <View style={styles.button}>
                    <AntDesign name="doubleright" size={33} color="white" />
                    <Text style={styles.textButton}>Faire l'entrainement</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setDisplayDetails((prev) => !prev)}
                >
                    <AntDesign name="doubleright" size={33} color="white" />
                    <Text style={styles.textButton}>Détails</Text>
                </TouchableOpacity>
            </View>

            { displayDetails && <Details steps={training.steps} /> }
       </View>
    );
};

export default TrainingMin;


const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        position: "relative",
        marginVertical: 20
    },

    //IMAGES
    bgImage: {
        width: "100%",
        height: 230,
        resizeMode: "cover",
        position: 'absolute'
    },
    after: {
        position: "absolute",
        width: "100%",
        height: 230
    },

    //TEXTES
    blocText: {
        width: '60%',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 33,
        color: 'white'
    },
    subTitle: {
        fontSize: 20,
        color: COLORS.orangeLight,
    },

    //BUTTONS
    blocButtons: {
        marginTop: 30,
        marginLeft: 20
    },
    button: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20,
    },
    textButton: {
        color: "white",
        marginLeft: 5,
        fontSize: 15
    }
})