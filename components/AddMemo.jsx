import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native'

const AddMemo = () => {

  const [text, setText] = useState('');
  const button = (
    <View style={styles.buttonStyle}>
        <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  )

  return (

    <View style={styles.block}>
        <TextInput placeholder='메모를 작성해보세요!'
                style={styles.input}
                value={text}
                onChangeText={setText} />
        {
            Platform.select({
                ios: (
                <TouchableOpacity activeOpacity={0.5}>
                    {button}
                </TouchableOpacity>
                ),
                android: (
                    <View style={styles.circleWrapper}>
                        <TouchableNativeFeedback>
                            {button}
                        </TouchableNativeFeedback>
                    </View>
                )
            })
        }
    </View>
  )
}

const styles = StyleSheet.create({
    block:{
        height:70,
        paddingHorizontal:18,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        flexDirection:'row',
    },
    input:{
        fontSize:16,
        width:'87%',
        borderBottomWidth:2,
        borderBottomColor:'#bdbdbd',
        marginRight:10,
        height:48,
        paddingHorizontal:7
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        backgroundColor:'#c7e5c8',
        borderRadius:24
    },
    circleWrapper:{
        overflow:'hidden',
        borderRadius:24
    }
})

export default AddMemo