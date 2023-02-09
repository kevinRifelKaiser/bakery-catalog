import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
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
        headerTintColor: THEME.colors.white,
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: 'Product details' }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
          categoryId: route.params.categoryId,
          categoryColor: route.params.categoryColor,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
