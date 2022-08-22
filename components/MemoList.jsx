import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const MemoList = ({myMemo}) => {

  const renderItem = ({item}) => (
    <View>
        <Text>{item.content}</Text>
    </View>
  )

  return (
    <FlatList data={myMemo} 
              renderItem={renderItem} 
              keyExtractor={item => item.id.toString()}
              style={styles.list} />
  )
}

const styles = StyleSheet.create({
    list:{
        flex: 1
    }
})

export default MemoList