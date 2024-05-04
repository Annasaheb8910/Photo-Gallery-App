import React, { useState, useEffect } from 'react';
import {Text,ScrollView,FlatList} from 'react-native'
import axios from 'axios';
import Photo from './photo'
export default function Gallery(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random?count=20&client_id=WMOqOGzygPz5kqxJ9yE0Z3J5lPY_OK69zsUpveuI48w'
      )
      .then((res) => {
        res.data.map((unit) => setData((prevState) => [...prevState, unit]));
      });
      
  }, []);
  return (
//     <Photo link={"https://images.unsplash.com/photo-1711950904932-0e800a0d58b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTc2MzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ4MDU3Mzl8&ixlib=rb-4.0.3&q=80&w=1080"
// } name={'John Doe'}/>
<ScrollView>
<FlatList
numColumns={2}
data={data}
renderItem={({item})=>{
  return <Photo link={item.urls.regular} name={item.user.name}/>;
}}
 /> 
</ScrollView>
  )
}
