import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotVerifiedToVerify from "../pages/volunteer/Verification/NotVerifiedList";
import VerifiedToNotVerify from "../pages/volunteer/Verification/VerifiedToNotVerify";
import { useRoute } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator()

export default function VerifyTopTabNavigation({route}){
    // const route = useRoute();
    const { groupid,groupname } = route.params;

    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="NotVerified" 
            component={NotVerifiedToVerify} 
            initialParams={ {groupid,groupname} }
            options={{
                unmountOnBlur:true,
            }}  
             />
            <Tab.Screen 
            name="Verified" 
            component={VerifiedToNotVerify}  
            initialParams={ {groupid,groupname} }
            options={{
                unmountOnBlur:true,
            }}
            />
        </Tab.Navigator>
    )
}