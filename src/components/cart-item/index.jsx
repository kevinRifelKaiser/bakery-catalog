import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { THEME } from '../../constants/theme/index';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          <Text style={styles.description}>$ {item.price}</Text>
          <Text style={styles.description}>x {item.quantity}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(item)} style={styles.iconContainer}>
        <Ionicons name="trash" size={24} color={THEME.colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
