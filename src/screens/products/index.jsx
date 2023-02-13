import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ProductItem } from '../../components';
import { selectProduct, filterProducts } from '../../store/actions/index';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', { productId: item.id, title: item.title });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={selectedCategory.color} />
  );
  const keyExtractor = (item) => item.id;

  useEffect(() => {
    dispatch(filterProducts(selectedCategory.id));
  }, []);

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
