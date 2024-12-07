import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Platform, SafeAreaView} from 'react-native';
import {Scaffold} from '../components';

const ApiCall = () => {
  const [showResponse, setShowResponse] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      setShowResponse([...data]);
    } catch (e) {
      console.log('Error:-', e);
    }
  };

  return (
    <Scaffold>
      <View style={styles.container}>
        <Text>Api call page</Text>
        <Text>{showResponse?.[0]?.category}</Text>
      </View>
    </Scaffold>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
