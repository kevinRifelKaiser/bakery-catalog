import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgound,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rubik-Bold',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
  },
});
