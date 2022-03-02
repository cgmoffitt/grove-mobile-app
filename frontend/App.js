import React, { useState, useEffect, useRef } from 'react';
import { Provider, useDispatch } from 'react-redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './navigation/TabNavigator';
import * as Notifications from 'expo-notifications';
import { useFonts } from 'expo-font';
import {
  registerForPushNotificationsAsync,
} from './notifications'
import { navigationRef } from './navigation/RootNavigation';
import createStore from "./redux"
import { setActivityType } from "./redux/utils"
import { activityHeader } from "./constants/defaultData"


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function ReduxApp() {
  const dispatch = useDispatch()
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const route = response.notification.request.content.data.route
      setActivityType(activityHeader.PENDING, dispatch)
      navigationRef.current?.navigate(route)
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default function App() {
  const store = createStore()

  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/opensans/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/opensans/OpenSans-Bold.ttf'),
    OpenSansItalic: require('./assets/fonts/opensans/OpenSans-Italic.ttf'),
    Poppins: require('./assets/fonts/poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/poppins/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}
