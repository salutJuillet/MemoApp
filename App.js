import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider, SafeAreaView
 } from 'react-native-safe-area-context';
import MemoList from './components/MemoList';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddMemo from './components/AddMemo';


export default function App() {

  const dt = new Date();
  const theDate = `${dt.getFullYear()}-${dt.getMonth + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes}`; //년-월-일 시:분
  const toDay = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일`; //년 월 일
  const [myMemo, setMyMemo] = useState([
    {id:1, content:'오늘의 날씨 흐림', dt: '2022-08-12 8:01', done: true},
    {id:2, content:'스쿼트 100개', dt: '2022-08-12 17:30', done: false},
    {id:3, content:'점심으로 쌀국수 먹었음', dt: '2022-08-14 12:44', done: true},
    {id:4, content:'홈플러스 할인 -과자 사오기', dt: '2022-08-15 15:23', done: false},
  ])

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.select({ios:'padding'})}
                              style={styles.avoid}>
            <DateHead date={toDay} />    
            <Empty />
            <AddMemo />           
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avoid:{
    flex:1
  }
});
