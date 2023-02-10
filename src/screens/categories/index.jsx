import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';

const Categories = ({ navigation }) => {
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
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Categories;
