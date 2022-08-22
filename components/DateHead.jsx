import React from 'react'
import { StatusBar, Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DateHead = ({date}) => {

  const { top } = useSafeAreaInsets(); //useSafeAreaInsets() 훅을 이용하여 statusbar의 높이를 구할 수 있다. (top, bottom, left, right 가능)

  return (
    <>
        <View style={[styles.statusBarPlaceholder, {height: top}]} />
        <StatusBar backgroundColor="#96b397" barStyle="dark-content" />
        <View style={styles.block}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    statusBarPlaceholder:{
        backgroundColor:'#96b397'
    },
    block:{
      backgroundColor:'#c7e5c8',
      padding:10
    },
    dateText:{
      fontSize:22,
      // fontWeight:'bold',
      color:'#333',

    }
})

export default DateHead