import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//constants
import { COLORS } from '../../../assets/constants';
//assets
import { AntDesign } from '@expo/vector-icons';
//styles
import { button, textButton } from '../../../styles/utils';
//compo
import AddStep from './AddStep';


const CreateTraining = () => {

    const [displayAddStep, setDisplayAddStep] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <SafeAreaView style={styles.wrapper}>
                <Text style={styles.title}>Creer un plan d'entrainement</Text>

                { displayAddStep && <AddStep /> }

                {
                    !displayAddStep &&
                    <TouchableOpacity style={styles.btn} onPress={()=>setDisplayAddStep(true)} >
                        <AntDesign name="pluscircleo" size={33} color={"white"} />
                        <Text style={styles.textBtn}>Ajouter une étape</Text>
                    </TouchableOpacity>
                }
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default CreateTraining;

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.9,
        backgroundColor: COLORS.orangeBg,
        alignItems: "center"
    },
    title: {
        fontSize: 27,
        color: COLORS.blackLight,
        maxWidth: "90%",
        textAlign: "center",
        marginBottom: 30,
        marginTop: 10,
    },

    btn: {
        backgroundColor: COLORS.blue,
        flexDirection: "row",
        alignItems: "center",
        ...button,
    },
    textBtn: {
        ...textButton
    },
})