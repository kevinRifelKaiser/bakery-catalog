import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';
import { removeFromCart, confirmOrder } from '../../store/actions';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const onHandleConfirm = () => {
    dispatch(confirmOrder(items, total));
  };

  const item = ({ item }) => <CartItem item={item} onDelete={() => onDelete(item.id)} />;
  const keyExtractor = (item) => item.id.toString();

  const Header = () => {
    return (
      items.length <= 0 && (
        <View style={styles.header}>
          <Text style={styles.headerText}>No items added yet</Text>
        </View>
      )
    );
  };

  const Footer = () => {
    return (
      items.length > 0 && (
        <TouchableOpacity onPress={onHandleConfirm} style={styles.subtotal}>
          <Text style={styles.subtotalText}>Total: {total}</Text>
          <Text style={styles.subtotalText}>Confirm</Text>
        </TouchableOpacity>
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Header />
      <FlatList data={items} renderItem={item} keyExtractor={keyExtractor} />
      <Footer />
    </View>
  );
};

export default Cart;
