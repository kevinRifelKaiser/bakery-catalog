import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../constants/theme/index';
import { formatDate } from '../../utils/index';

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{formatDate(item.date)}</Text>
        <View>
          <Text style={styles.description}>$ {item.total}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(item)}>
        <Ionicons name="trash" size={24} color={THEME.colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;
