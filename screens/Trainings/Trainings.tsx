import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//assets
import { COLORS } from '../../assets/constants';
import { trainings } from '../../assets/data/trainings';
//compo
import TrainingMin from '../../components/TrainingMin/TrainingMin';
import Training from '../Training/Training';
//navigation
import { createStackNavigator } from '@react-navigation/stack';
import { StackTrainings } from '../../assets/typesNavgation';

const Stack = createStackNavigator<StackTrainings>()



const Trainings = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerShown: false //si tu veux le tej
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
        </Stack.Navigator>
    );
};
export default Trainings;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.orangeBg,
        flex: 0.9,
    }
})


const Main = () => {
    return (
        <View style={styles.wrapper}>
                <FlatList 
                    data={trainings}
                    renderItem={({ item }) => <TrainingMin training={item} />}
                    keyExtractor={(item) => item.title}
                    showsVerticalScrollIndicator={false} //showsHorizontalScrollIndicator={false}
                    /* ItemSeparatorComponent={() => <View style={{height: 30}} />} */
                    ListFooterComponent={() => (
                        <View style={{ marginTop: 30 }}></View>
                    )}
                />
        </View>
    )
}