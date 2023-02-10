import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.secondary,
    width: 350,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Rubik-Medium',
    fontSize: 13,
    marginVertical: 1,
  },
});
