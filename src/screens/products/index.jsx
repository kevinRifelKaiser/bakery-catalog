import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { ProductItem } from '../../components';
import { PRODUCTS } from '../../constants/data/index';

const Products = ({ navigation, route }) => {
  const { categoryId, categoryColor } = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);
  const onSelected = (item) => {
    navigation.navigate('ProductDetail', { productId: item.id, title: item.title });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={categoryColor} />
  );
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.productsList}
      />
    </View>
  );
};

export default Products;
