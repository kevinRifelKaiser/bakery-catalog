import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: color }}
        onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.description}>$ {item.price}</Text>
          <Text style={styles.description}>x {item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
