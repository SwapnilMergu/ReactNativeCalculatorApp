import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Buttons from './Buttons'

const Keys = ({handleNum,handleClear}) => {
  return (<View>
        <TouchableOpacity onPress={handleClear} style={{height:80,width:80,margin:5}}>
          <View style={{height:80,width:80,backgroundColor: "#D4D4D2", justifyContent:'center', borderRadius:100}}>
          
            <Text style={{textAlign:'center', fontSize:28,fontWeight:'200'}}>AC</Text>
          </View>
        </TouchableOpacity>
      <Buttons values={[7,8,9,'*']} handleNum={handleNum}/>
      <Buttons values={[4,5,6,'-']} handleNum={handleNum}/>
      <Buttons values={[1,2,3,'+']} handleNum={handleNum}/>
      <Buttons values={[0,'.','=','/']} handleNum={handleNum}/>
  </View>
)
}

export default Keys