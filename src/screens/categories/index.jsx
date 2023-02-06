import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';

const Categories = () => {
  const onSelected = () => null;
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    </View>
  );
};

export default Categories;
