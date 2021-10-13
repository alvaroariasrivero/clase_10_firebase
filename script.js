// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

///////////////////////////////////MÉTODOS///////////////////////////////////////////////
//AÑADIR DATOS => collection, addDoc
//LEER COLECCIÓN EN CONSOLA => collection, getDocs, query 
//LEER UN SOLO DOCUMENTO => doc, getDoc
//AÑADIR O CREAR DATOS(INCLUYE COLECCIÓN + ID) => doc, setDoc
//OBTENER VARIOS ELEMENTOS DE UNA COLECCIÓN => collection, query, where, getDocs
//BORRAR DATOS => doc, deleteDoc
//ORDENAR Y LIMITAR DATOS => collection, getDocs, query, orderBy, limit


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDslarv4HPoFJnv5s4-nidMSFly1GSC_MI",
  authDomain: "registroquiz-b22ad.firebaseapp.com",
  projectId: "registroquiz-b22ad",
  storageBucket: "registroquiz-b22ad.appspot.com",
  messagingSenderId: "1043240518761",
  appId: "1:1043240518761:web:0182d56ae321dcaf394ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

///////////////////////////////////////AGREGAR DATOS////////////////////////////////////////////////////

// try {
//     const docRef = await addDoc(collection(db, "cities"), {
//        nombre: "Madrid",
//        país: "España",
//      });
  
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }



//////////////////////////////////////////LEER LA COLECCIÓN EN CONSOLA////////////////////////////////////////////////
// const q = query(collection(db, "cities"))
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, '=>', doc.data());
// });


////////////////////////////////////////CAMBIA O CREA DATOS SI NO EXISTEN//////////////////////////////////////


// const superRef = collection(db, "Supercosas")


// await setDoc(doc(superRef, "supercebolla"), {
//     nombre: "Supercebolla",
//     enemigo: "Superajo",
//     habilidad: "Hace llorar",
//     poderoso: true
//   });

// await setDoc(doc(superRef, "superaspiradora"), {
//     nombre: "Superaspiradora",
//     enemigo: "Superpelusa",
//     habilidad: "Succiona",
//     poderoso: true
//   });

// await setDoc(doc(superRef, "superpelusa"), {
//     nombre: "Superpelusa",
//     enemigo: "Superaspiradora",
//     habilidad: "Rueda",
//     poderoso: false
//   });

//   await setDoc(doc(superRef, "superajo"), {
//     nombre: "Superajo",
//     enemigo: "Supercebolla",
//     habilidad: "Sabe fuerte",
//     poderoso: false
//   });

//   await setDoc(doc(superRef, "superclavo"), {
//     nombre: "Superclavo",
//     enemigo: "Supermartillo",
//     habilidad: "Se clava",
//     poderoso: false
//   });

//////////////////////////////////////////////////////////BORRAR DATOS///////////////////////////////////////

// await deleteDoc(doc(db, "users", "MVeDh25gXNpsPF4V07Db"));



///////////////////////////////////////////LEER UN SOLO DOCUMENTO///////////////////////////////////////////
// const docRef = doc(db, "Supercosas", "Supermartillo");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }


///////////////////////OBTENER VARIOS ELEMENTOS DE UNA COLECCIÓN//////////////////////////////////////////
// const q = query(collection(db, "Supercosas"), where("poderoso", "!=", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data().habilidad);
// });


//////////////////////////////ORDENAR Y LIMITAR DATOS////////////////////////////////////////////////////

// const superRef = collection(db, "Supercosas")
// const q = query(superRef, orderBy("enemigo"), limit(5));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });