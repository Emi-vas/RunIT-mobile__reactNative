import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//assets
import { COLORS } from '../../assets/constants';
import { trainings } from '../../assets/data/trainings';
//compo
import TrainingMin from '../../components/TrainingMin/TrainingMin';

const Trainings = () => {
    return (
       <View style={styles.wrapper}>
            <FlatList 
                data={trainings}
                renderItem={({ item }) => <TrainingMin training={item} />}
                keyExtractor={(item) => item.title}
                showsVerticalScrollIndicator={false} //showsHorizontalScrollIndicator={false}
            />
       </View>
    );
};

export default Trainings;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.orangeBg,
        flex: 0.9,
    }
})