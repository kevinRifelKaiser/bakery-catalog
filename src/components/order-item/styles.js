import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  description: {
    fontFamily: 'Rubik-Medium',
    fontSize: 13,
    marginVertical: 1,
  },
});
