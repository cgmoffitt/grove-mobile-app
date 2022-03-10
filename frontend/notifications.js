import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import routes from "./constants/routes"

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

async function schedulePushNotification() {
    console.log("Scheduling a notification")
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "New Pending Event",
            body: 'Hike with Blake on Saturday!',
            data: {route: routes.HANGOUTS_TAB} ,
        },
        trigger: { seconds: 3 },
    });
}

export {
    registerForPushNotificationsAsync,
    schedulePushNotification
}