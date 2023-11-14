import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={style.container}>
            <Text style={style.allText}>Workouts</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#708090',
      alignItems: 'center',
      justifyContent: 'center'
    },
    allText: {
      color: 'white'
    }
});