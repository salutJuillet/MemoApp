import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Empty = () => {
  return (
    <View style={styles.block}>
        <Image source={require('../assets/images/empty.png')}
               style={styles.image}
               resizeMode='cover' />
        <Text style={styles.descriptionText}>
            내용이 존재하지 않습니다.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    descriptionText:{
        fontSize:25,
        color:'#999999'
    },
    image:{
        width:161,
        height:150,
        marginBottom:30
    }
})

export default Empty