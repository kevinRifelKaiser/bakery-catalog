import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../constants/theme/index';
import { Categories, ProductDetail, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Rubik-Medium',
          fontSize: 20,
        },
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ title: 'Categories' }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Product details' }}
      />
      <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
