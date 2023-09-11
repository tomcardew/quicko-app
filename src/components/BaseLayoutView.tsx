import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface Props {
  title?: string;
  children?: any;
  loading: boolean;
}

const BaseLayoutView = ({title = 'quicko', children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BaseLayoutView;
