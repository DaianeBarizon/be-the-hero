import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  logonContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  logonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logonLogoImg: {
    height: 50,
    width: 120,
  },

  logonHeroesImg: {
    height: 400,
    width: 410,
  },

  logonTitle: {
    fontWeight: 'bold',
    color: '#41414d',
    fontSize: 20,
    marginVertical: 10,
  },

  logonInput: {
    fontSize: 14,
    color: '#41414d',
    borderColor: '#999',
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  logonButton: {
    backgroundColor: '#e02041',
    marginBottom: 10,
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: 'center',
  },

  logonButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  logonRegisterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  logonRegisterIcon: {
    marginRight: 10,
  },

  logonRegisterText: {
    color: '#41414d',
  },
});
