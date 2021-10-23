import { firebase } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrRuhveFVFui-ZaedeI7GPOulptYohRWM",
  authDomain: "vue-chat-room-7de65.firebaseapp.com",
  projectId: "vue-chat-room-7de65",
  storageBucket: "vue-chat-room-7de65.appspot.com",
  messagingSenderId: "444214477508",
  appId: "1:444214477508:web:38255bfae6c43c68867f91",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
