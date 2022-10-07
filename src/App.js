
import { Firebase } from './Firebase/Config';
function App() {
  return (
    <div>
       <button onClick={()=>{
          //  Firebase.firestore().collection('products').get().then(snapshot=>{
          //      snapshot.forEach((obj)=>{
          //        console.log(obj.data(),obj.id)
          //      })
          //  })


          // Firebase.firestore().collection('products').add({
          //   name:"Mi",
          //   type:"mobile",
          //   price:"12999"

          // })


          Firebase.firestore().collection('products').doc("ZWp6rCdqB6Ag0cGyohaD").delete().then(()=>{
             console.log("delete done successfully")
          })
          
       }}>
        click me
       </button>
    </div>
  )
}

export default App;
