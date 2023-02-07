import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>
      <Text>
        Id {categoryId} | Title {title}
      </Text>
      <Button title="See in detail" onPress={() => navigation.navigate('ProductDetail')} />
    </View>
  );
};

export default Products;
