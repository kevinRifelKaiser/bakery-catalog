import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { OrderItem } from '../../components';
import { ORDERS } from '../../constants/data/index';

const Orders = () => {
  const onDelete = () => null;
  const item = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your orders</Text>
      <FlatList data={ORDERS} renderItem={item} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
