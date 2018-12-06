
import Firebase from 'firebase'
 let config = {
   apiKey: "AIzaSyDRC-jdCd54JS3g09qmv4dFLpj2MkDp4H0",
     authDomain: "vuecrud-e252c.firebaseapp.com",
     databaseURL: "https://vuecrud-e252c.firebaseio.com",
     projectId: "vuecrud-e252c",
     storageBucket: "vuecrud-e252c.appspot.com",
     messagingSenderId: "663912177634"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()
