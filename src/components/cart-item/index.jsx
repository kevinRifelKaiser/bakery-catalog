import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { THEME } from '../../constants/theme/index';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.description}>$ {item.price}</Text>
          <Text style={styles.description}>x {item.quantity}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item)} style={styles.iconContainer}>
          <Ionicons name="trash" size={24} color={THEME.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
