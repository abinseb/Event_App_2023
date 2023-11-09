
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// home page
import HomePage from "../pages/volunteer/HomePages/HomePage";
import BottomTabs from "./BottumTabNavigation";

// verify
import SingleUserVerification from "../pages/volunteer/Verification/SingleUserVerification";
import VerifyTopTabNavigation from "./TopTabNavigation";

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage} options={{headerShown:false}} />
                {/* bottum Tab navigation for workshop */}
                <Stack.Screen name ="bottomTab" component={BottomTabs} options={{headerShown:false}} />

                {/* verify the single user */}
                <Stack.Screen name="singleUserVerify" component={SingleUserVerification} options={{headerShown:false}} />

                {/* top tab navigation */}
                <Stack.Screen name="TopTab" component={VerifyTopTabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}