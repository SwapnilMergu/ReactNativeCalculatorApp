import React, { useReducer, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Buttons from './components/Buttons'
import Keys from './components/Keys'


const reducer= (state, action)=>{
  switch(action.type){
    case "TAKE-NUM1":
      return {...state,num1:action.payload}
    case "TAKE-OPERATOR":
      return {...state,num1:action.payload}
  }
}

const App = () => {

  const [state, dispatch]= useReducer(reducer,{
    num1:'',
    num2:'',
    opFlag:false
  })

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [num3, setNum3] = useState('')

  const [op, setOp] = useState('')
  const [flag, setFlag] = useState(false)


  function equal(){
    var a= parseFloat(num2);
    var b= parseFloat(num3);
    var c=0
    switch(op){
      case '+':
        c=a+b;
        break;
      case '-':
        c=a-b;
        break;
      case '*':
        c=a*b;
        break;
      case '/':
        c=a/b;
        break;
    }
    return c;
  }

  const handleNum=(data)=>{
    console.log("Data: "+data)
    if(isNaN(data) && data!="."){
      if(data==="="){
        var res=equal()
        setNum2(""+res)
        setNum1(""+res)
        setOp("")
        setFlag(false)
        setNum3('')
      }else if(flag===true){
        var res=equal()
        setNum2(""+res)
        setNum1(""+res+data)
        setFlag(true)
        setOp(data)
        setNum3('')
      }else{
        setNum2(num1)
        setOp(data)
        setFlag(true)
        setNum1(num1+data)
      }
    }
    else{
      if(flag){
        setNum3(num3+data)
      }
      setNum1(num1+data)
    }
  }

  const handleClear= ()=> {
    setNum1('')
    setNum2('')
    setNum3('')
    setOp('')
    setFlag(false)
  }


  return (
      <SafeAreaView  style={{flex:1,flexDirection:'column'}}>

      <View style={{flex:1,justifyContent:'center',backgroundColor:'#F9F9F9'}}>
        <Text style={{textAlign:'right',color:'black',fontSize:34,fontWeight:'200'}}>{num1}</Text> 
      </View>
      
      <View style={{flex:3,backgroundColor:'white',justifyContent:'center'}}>
        <Keys handleNum={handleNum} handleClear={handleClear}/>
      </View>
      </SafeAreaView>
     )
}

export default App