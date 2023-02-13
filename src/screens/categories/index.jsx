import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { selectCategory } from '../../store/actions/index';

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Categories;
