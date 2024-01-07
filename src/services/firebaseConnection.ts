import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFJvK7wrfGpfa6LQb277Fbl4MVzzh3t4A",
    authDomain: "tarefas-400014.firebaseapp.com",
    projectId: "tarefas-400014",
    storageBucket: "tarefas-400014.appspot.com",
    messagingSenderId: "679544859900",
    appId: "1:679544859900:web:1596bbac81845a3adafb79",
    measurementId: "G-D9ZES0DDSD"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()

export { db }