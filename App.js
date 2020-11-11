import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View  style={styles.Ctxt}>
        <Text style={styles.titulo}><Text style={styles.titulo2}>TODO</Text>LIST</Text>
      </View>
      <View style={styles.cfilter}>
        <Text style={styles.filter}>Filter:</Text>
      </View>
      <View style={styles.botoes}>
        <View style={styles.high}>
          <TouchableOpacity>High</TouchableOpacity>
        </View>
        <View style={styles.medium}>
          <TouchableOpacity>Medium</TouchableOpacity>
        </View>
        <View style={styles.low}>
          <TouchableOpacity>Low</TouchableOpacity>
        </View>
      </View>
      <View style={styles.tarefa}>
        <TouchableOpacity style={styles.icon}><AntDesign name="delete" size={20} color="#00FF94" />

        </TouchableOpacity>
        <Text style={styles.txtt}>
          Tarefa 1
        </Text>
      </View>
      <View style={styles.tarefa2}>
        <TouchableOpacity style={styles.icon}><AntDesign name="delete" size={20} color="#FAFF01" />

        </TouchableOpacity>
        <Text style={styles.txtt}>
          Tarefa 2
        </Text>
      </View>
      <View style={styles.tarefa3}>
        <TouchableOpacity style={styles.icon}><AntDesign name="delete" size={20} color="#FF6565" />

        </TouchableOpacity>
        <Text style={styles.txtt}>
          Tarefa 3
        </Text>
      </View>
      <View style={styles.plus}>
        <TouchableOpacity> <MaterialCommunityIcons name="plus" size={24} color="white" />

        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'  
    
    
  },
  Ctxt:{
    alignItems:'center',
    backgroundColor: '#FAA43F',
    height:80, 
    justifyContent:'center',
    
  },
 
  titulo:{
    color: '#FFF',
    fontSize: 20,
    

  },
  titulo2:{
    color:'#fff',
    fontWeight: 'bold'

  },
  filter:{
    color: 'grey'
  },
  cfilter:{
    marginTop: 5,
    marginLeft: 10
  },
  botoes:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop:5
    
  },
  high:{
    backgroundColor: '#FF6565',
    height: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15

  },
  medium:{
    backgroundColor: '#F2F2F2',
    height: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    color: '#00FF94',
    borderColor: '#00FF94',
    borderWidth:1

  },
  low:{
    backgroundColor: '#F2F2F2',
    height: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    color: '#FAFF01',
    borderColor: '#FAFF01',
    borderWidth:1
    

  },
  tarefa:{
    width:'96%',
    backgroundColor:'#F2F2F2',
    marginTop: 20,
    marginLeft: 7,
    paddingLeft: 6,
    height: 50,
    alignItems: 'center',
    borderRadius:10, 
    flexDirection: 'row',
    borderColor: '#00FF94',
    borderWidth:1,
    borderBottomWidth: 4
  },
  icon:{
    marginHorizontal: 7,
    
    
  },
  txtt:{
    color:'#555555',
    fontSize: 18
  },
  tarefa2:{
    width:'96%',
    backgroundColor:'#F2F2F2',
    marginTop: 20,
    marginLeft: 7,
    paddingLeft: 6,
    height: 50,
    alignItems: 'center',
    borderRadius:10, 
    flexDirection: 'row',
    borderColor: '#FAFF01',
    borderWidth:1,
    borderBottomWidth: 4

  },
  tarefa3:{
    width:'96%',
    backgroundColor:'#F2F2F2',
    marginTop: 20,
    marginLeft: 7,
    paddingLeft: 6,
    height: 50,
    alignItems: 'center',
    borderRadius:10, 
    flexDirection: 'row',
    borderColor: '#FF6565',
    borderWidth:1,
    borderBottomWidth: 4

  },
  plus:{
    position:'absolute',
    width:60,
    height:60,
    backgroundColor:'#FAA43F',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    right:25,
    bottom:25,
    elevation:2,
    zIndex:9,
    shadowColor:'#000',
    shadowOpacity:0.2,
    hadowOffset:{
        width:1,
        height:3,
        }

  }

});
