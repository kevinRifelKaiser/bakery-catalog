import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    felx: 1,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    marginVertical: 5,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
    width: 350,
    marginBottom: 20,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  description: {
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    marginVertical: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '75%',
    justifyContent: 'space-between',
  },
});
