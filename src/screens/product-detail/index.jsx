import { View, Text } from 'react-native';

import { styles } from './styles';
import { PRODUCTS } from '../../constants/data/index';

const ProductDetail = ({ route }) => {
  const { productId, title } = route.params;

  const productData = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{productData.description}</Text>
      <Text style={styles.description}>$ {productData.price}</Text>
      <Text style={styles.description}>{productData.weight}</Text>
    </View>
  );
};

export default ProductDetail;
