import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 100,
    width: 250,
    marginVertical: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
