import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
    marginVertical: 15,
  },
  subtotal: {
    position: 'absolute',
    bottom: 72,
    backgroundColor: THEME.colors.primary,
    right: 50,
    left: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    height: 55,
  },
  subtotalText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: THEME.colors.white,
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
});
