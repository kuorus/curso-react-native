import AsyncStorage from '@react-native-async-storage/async-storage';

const useName = () => {
  const getAsyncName = async () => {
    try {
      const name = await AsyncStorage.getItem('user-name');
      return name;
    } catch (e) {
      console.error(e);
    }
  };

  const setAsyncName = async (value: string) => {
    try {
      await AsyncStorage.setItem('user-name', value);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    getAsyncName,
    setAsyncName,
  };
};

export default useName;
