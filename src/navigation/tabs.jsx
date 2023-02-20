import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { countItems } from '../utils';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const items = useSelector((state) => state.cart.items);

  const [amountOfItems, setAmountOfItems] = useState(0);

  useEffect(() => {
    setAmountOfItems(countItems(items));
  }, [items]);

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: THEME.colors.backgound,
          position: 'absolute',
          bottom: 7,
          right: 7,
          left: 7,
          height: 60,
          borderRadius: 50,
        },
        tabBarLabelStyle: {
          fontFamily: 'Rubik-Medium',
          fontSize: 14,
          marginBottom: 5,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.secondary,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Categories',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? THEME.colors.primary : THEME.colors.secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={24}
              color={focused ? THEME.colors.primary : THEME.colors.secondary}
            />
          ),
          tabBarBadge: items.length > 0 ? amountOfItems : null,
          tabBarBadgeStyle: {
            backgroundColor: THEME.colors.red,
            color: THEME.colors.white,
          },
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={24}
              color={focused ? THEME.colors.primary : THEME.colors.secondary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
