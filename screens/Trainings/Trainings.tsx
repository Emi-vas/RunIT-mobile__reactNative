import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
//assets
import { COLORS } from '../../assets/constants';
import { trainings } from '../../assets/data/trainings';
import { AntDesign } from '@expo/vector-icons';
//compo
import TrainingMin from '../../components/TrainingMin/TrainingMin';
import Training from './Training/Training';
import CreateTraining from './CreateTraining/CreateTraining';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
import { StackTrainings, StackTrainingsProps } from '../../assets/typesNavgation';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator<StackTrainings>()


const Trainings = () => {

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerShown: false 
            }}
        >
            <Stack.Screen
                name="Main"
                component={Main}
            />
            <Stack.Screen
                name="Training"
                component={Training}
            />
            <Stack.Screen 
                name='Create'
                component={CreateTraining}
            />
        </Stack.Navigator>
    );
};
export default Trainings;

const styles = StyleSheet.create({
   
})


const Main = () => {
    const navigation = useNavigation<StackTrainingsProps>()

    const [displayBtn, setDisplayBtn] = useState(false)

    const handleCreateBtn = () => {
        if(!displayBtn) {
            setDisplayBtn(true)
            setTimeout(() => {
                setDisplayBtn(false)
            }, 3000)
            return
        }

       //navigate
        navigation.navigate('Create')
    }

    return (
        <SafeAreaView style={stylesMain.wrapper}>
                <FlatList 
                    data={trainings}
                    renderItem={({ item }) => <TrainingMin training={item} />}
                    keyExtractor={(item) => item.title}
                    showsVerticalScrollIndicator={false} //showsHorizontalScrollIndicator={false}
                    /* ItemSeparatorComponent={() => <View style={{height: 30}} />} */
                />

                <TouchableOpacity style={stylesMain.createButton} onPress={handleCreateBtn}>
                    <AntDesign name="pluscircleo" size={33} color={"white"} />
                    {
                        displayBtn && <Text style={stylesMain.textCreateButton}>Créer un programme</Text>
                    }
                    
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const stylesMain = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.orangeBg,
        flex: 0.9,
    },

    createButton: {
        backgroundColor: COLORS.blue,
        position: "absolute",
        bottom: 30,
        right: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 7,
        borderRadius: 30,

        shadowOpacity: 0.4,
        shadowColor: "black",
        shadowOffset: {width: 3, height: 5},
    },
    textCreateButton: {
        fontSize: 17,
        color: "white",
        marginLeft: 7
    }
})