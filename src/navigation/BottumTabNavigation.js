import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanQR from '../pages/volunteer/Verification/ScanQR';
import BulkVerification from '../pages/volunteer/Verification/CollegeList';

const Tab = createBottomTabNavigator();

export default function BottomTabs(){
    return(
        <Tab.Navigator
            screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'#D9D9D9'}}}
           
        >
            <Tab.Screen name='ScanQRCode' component={ScanQR} />
            <Tab.Screen name='BulkVerification' component={BulkVerification} />
        </Tab.Navigator>
    )
}