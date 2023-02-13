import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { PRODUCTS } from '../../constants/data/index';

const ProductDetail = ({ route }) => {
  const { title } = route.params;
  const selectedProduct = useSelector((state) => state.products.selected);

  const productData = PRODUCTS.find((product) => product.id === selectedProduct.id);

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
