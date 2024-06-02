import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = ({values, handleNum}) => {
    var c= '#FF9500'
  return (
    <View >
        <View style={{flexDirection:'row'}}>
        {
            values.map((value,index)=>(
                <TouchableOpacity onPress={()=>handleNum(value)} >
                <View style={{height:80,width:80,backgroundColor: (isNaN(value) && value!='.') ? (value==='=') ? "#D4D4D2":'#505050': '#FF9500',margin:5, justifyContent:'center', borderRadius:100}}>
                    <Text style={{color: value==="="? 'black':'white', textAlign:'center', fontSize:28,fontWeight:'200'}}>{value}</Text>
                </View>
                </TouchableOpacity> 
            ))
        }   
        </View>
    </View>
  )
}

export default Buttons