import React from 'react';
import {Header} from 'react-native-elements';
export default function AppHeader(){
  return(
    <Header 
    backgroundColor={'#14D5D8'}
    centerComponent={{
      text:"Photo Gallery App",
      style:{
        color:'#fff',
        fontWeight:'bolder',
        fontSize:'large',
        fontFamily:'sens-serif'
      }

    }}
    />
  )
  
}
