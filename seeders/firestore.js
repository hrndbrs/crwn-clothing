const { initializeApp } = require("firebase/app")
const { getFirestore, doc, getDoc, setDoc } = require("firebase/firestore")
const { nanoid } = require("nanoid")

const firebaseConfig = {
  apiKey: "AIzaSyCvHByOXIEbom_ueAi5u7CMLrvcooOzslM",
  authDomain: "crwn-clothing-hbrs.firebaseapp.com",
  projectId: "crwn-clothing-hbrs",
  storageBucket: "crwn-clothing-hbrs.appspot.com",
  messagingSenderId: "764401332086",
  appId: "1:764401332086:web:91475cc24dd64ad57dd457",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function createData(dbName, data) {
  await data.forEach(async (x) => {
    const ref = doc(db, dbName, nanoid(20))
    await setDoc(ref, x)
    const snapshot = await getDoc(ref)
    console.log(snapshot.data())
  })

}

module.exports = {
  createData
}