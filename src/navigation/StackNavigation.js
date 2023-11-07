
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Demo from "../pages/volunteer/verification/Demo";
// home page
import HomePage from "../pages/volunteer/HomePages/HomePage";

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage} options={{headerShown:false}} />
               

            </Stack.Navigator>
        </NavigationContainer>
    )
}