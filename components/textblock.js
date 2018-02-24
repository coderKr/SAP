import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class TextBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.textblock}>
        <Text>{this.props.heading}: </Text>
        <Text>{this.props.value} </Text>
      </View>
    );
 }
}

const styles = StyleSheet.create({
  textblock: {
    width: 200,
    height: 100,
  },

});
