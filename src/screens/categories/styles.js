import { StyleSheet, StatusBar } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgound,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rubik-Bold',
    marginTop: StatusBar.currentHeight + 5,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginVertical: 20,
  },
});
