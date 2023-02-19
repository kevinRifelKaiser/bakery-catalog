import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { PRODUCTS } from '../../constants/data/index';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions';

const ProductDetail = ({ route }) => {
  const { title } = route.params;
  const selectedProduct = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();

  const productData = PRODUCTS.find((product) => product.id === selectedProduct.id);

  const onHandleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{productData.description}</Text>
      <Text style={styles.description}>$ {productData.price}</Text>
      <Text style={styles.description}>{productData.weight}</Text>
      <Button title="Add to cart" color={THEME.colors.primary} onPress={onHandleAddToCart} />
    </View>
  );
};

export default ProductDetail;
