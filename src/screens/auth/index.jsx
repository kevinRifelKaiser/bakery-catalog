import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './styles.js';
import { THEME } from '../../constants/theme/index.js';

const Auth = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't have an account?" : 'Already have an account?';
  const buttonName = isLogin ? 'Login' : 'Register';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={THEME.colors.black}
        autoCapitalize="none"
        autoCorrect={false}
        onChange={() => {}}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor={THEME.colors.black}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChange={() => {}}
      />
    </View>
  );
};

export default Auth;
