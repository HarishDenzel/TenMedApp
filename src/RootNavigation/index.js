import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { enableScreens } from 'react-native-screens';
// import { CustomTab } from '../Utils/CustomTab';
import StartScreen from '../Screens/AuthScreens/StartScreen';
import LocationScreen from '../Screens/AuthScreens/LocationScreen';
const Stack = createStackNavigator();

export default function App() {
  enableScreens();

  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      StatusBar.setBarStyle('dark-content', true);
      StatusBar.setBackgroundColor('#ffff');
      //StatusBar.setHidden(true);
      if (!state.isConnected) {
        alert('Something Went Wrong...');
      }
     })

  }, []);


  const beforeLoggedIn = {
    
    StartScreen:StartScreen,
    LocationScreen:LocationScreen
   
  };
  
  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Object.entries({
          ...beforeLoggedIn,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
  

  

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'InitialScreen'} component={AuthStack} />
        {/* <Stack.Screen name={'AuthStack'} component={AuthStack} /> */}
       {/* // <Stack.Screen name={'BottomTab'} component={BottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}





