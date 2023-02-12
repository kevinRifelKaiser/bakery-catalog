import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    navigation.navigate('Products', {
      title: item.title,
      categoryId: item.id,
      categoryColor: item.color,
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
