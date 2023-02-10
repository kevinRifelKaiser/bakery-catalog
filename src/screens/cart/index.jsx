import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { CartItem } from '../../components';
import { CART } from '../../constants/data/index';

const Cart = () => {
  const onDelete = () => null;
  const item = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  const subtotal = 12500;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList data={CART} renderItem={item} keyExtractor={keyExtractor} />
      <TouchableOpacity style={styles.subtotal}>
        <Text style={styles.subtotalText}>Total: {subtotal}</Text>
        <Text style={styles.subtotalText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
