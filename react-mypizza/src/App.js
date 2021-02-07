import React, { useState } from 'react';
import {Provider} from 'react-redux'
import Routes from './config/router'
import {store} from './config/store'
import axios from 'axios'
import firebase from './firebase';
import notification from "./assets/images/notification.png"



function App() {
  
  React.useEffect(()=>{
  const msg= firebase.messaging()
  msg.requestPermission().then(()=>{
    return msg.getToken();
  }).then((data)=>{
    console.log("token",data)

    const param = JSON.stringify({
      "to": data,
     "notification": {
          "title": "React-mypizza",
          "body": "vous pouvez maintenant customiser votre pizza",
          "click_action": "http://localhost:3000/",
          "icon": "http://localhost:3000/icon.png"
      }
  })


  const config = {
    method: 'post',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: { 
      'authorization': 'key=AAAAwRLkeb8:APA91bEtd6hVYte3f0bKCZSwZ33BiPsXRsCXeVW_Unc_QUGB4ZJih8Vk1c6ZaN2Q37XGj54qdnLSroA-gVeGgoe8_0hwRM0Yz8DqCkwh0o0yqIwWAXKNe497nYMXNOkEWIo2YykWinB2', 
      'Content-Type': 'application/json'
    },
    data:param,
  }

  axios(config).then(function (response) {
    //console.log(JSON.stringify(response.data));
  }).catch(function (error) {
    //console.log(error);
  });

  }).catch(()=>{ 
    ///console.log( "error")
  })

  })
  

  return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
  );
}


export default App;