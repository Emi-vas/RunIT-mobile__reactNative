//react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//compo
import Trainings from './screens/Trainings/Trainings';
import Musiques from './screens/Musiques/Musiques';
import Profile from './screens/Profile/Profile';
//icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => { // les icones
                      let iconName;
                
                      if (route.name == "Entrainements") {
                        return <AntDesign name="profile" size={24} color={focused ? "orange" : "white"} />
                      } else if (route.name == "Musiques") {
                        return <FontAwesome name="music" size={24} color={focused ? "orange" : "white"} />
                      }else if (route.name == "Mon plan") {
                        return <FontAwesome name="user" size={24} color={focused ? "orange" : "white"} />
                      }
                    },
                    tabBarActiveTintColor: 'orange', //text
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: {
                      fontSize: 13
                    },
                    
                    tabBarStyle: { // style additionnel
                        height : 90,
                        paddingVertical: 7,
                        backgroundColor: "black",
                        position: 'absolute',
                        borderTopWidth: 0,
                        paddingBottom:30
                    },
    
                    headerShown: true //show or not header
                })}
          
        >
              <tab.Screen name="Entrainements" component={Trainings}/>
              <tab.Screen name="Musiques" component={Musiques} />
              <tab.Screen name="Mon plan" component={Profile} />
        </tab.Navigator>
    </NavigationContainer>
  );
}