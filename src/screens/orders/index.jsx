import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../components';
import { getOrders, deleteOrder } from '../../store/actions/index';

const Orders = () => {
  const dispatch = useDispatch();

  const ordersList = useSelector((state) => state.orders.list);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };
  const item = ({ item }) => <OrderItem item={item} onDelete={() => onDelete(item.id)} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your orders</Text>
      <FlatList data={ordersList} renderItem={item} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
