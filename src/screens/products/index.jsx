import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
      <Button title="See in detail" onPress={() => navigation.navigate('ProductDetail')} />
    </View>
  );
};

export default Products;
