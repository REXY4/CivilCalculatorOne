import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </>
    );
};

export default StackNavigator;
