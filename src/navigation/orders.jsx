import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Orders } from '../screens/index';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Rubik-Medium',
          fontSize: 20,
        },
        headerTintColor: THEME.colors.white,
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
