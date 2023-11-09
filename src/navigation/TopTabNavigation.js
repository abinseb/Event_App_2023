import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotVerifiedToVerify from "../pages/volunteer/Verification/NotVerifiedList";
import VerifiedToNotVerify from "../pages/volunteer/Verification/VerifiedToNotVerify";
const Tab = createMaterialTopTabNavigator()

export default function VerifyTopTabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="NotVerified" component={NotVerifiedToVerify} />
            <Tab.Screen name="Verified" component={VerifiedToNotVerify} />
        </Tab.Navigator>
    )
}