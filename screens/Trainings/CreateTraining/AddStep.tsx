import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/constants';

const AddStep = () => {
    return (
        <View style={styles.wrapper}>
            <TextInput
                placeholder="Nom de l'étape"
                style={{
                    ...styles.textInput,
                    width: 250
                }}
            >

            </TextInput>

        </View>
    );
};

export default AddStep;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    textInput: {
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        padding: 13,
        fontSize: 17
    }
})