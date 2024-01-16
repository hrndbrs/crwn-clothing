const { initializeApp } = require("firebase/app")
const {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch
} = require("firebase/firestore")
const { nanoid } = require("nanoid")

const firebaseConfig = {
  apiKey: "AIzaSyCvHByOXIEbom_ueAi5u7CMLrvcooOzslM",
  authDomain: "crwn-clothing-hbrs.firebaseapp.com",
  projectId: "crwn-clothing-hbrs",
  storageBucket: "crwn-clothing-hbrs.appspot.com",
  messagingSenderId: "764401332086",
  appId: "1:764401332086:web:91475cc24dd64ad57dd457",
};

initializeApp(firebaseConfig);
const db = getFirestore();

async function addCollectionAndDocuments(collectionKey, data) {
  const batch = writeBatch(db)

  for (const item of data) {
    let id

    if (item.id) {
      id = item.id
      delete item.id
    } else id = nanoid(20)

    const ref = doc(db, collectionKey, id)
    batch.set(ref, item)
  }

  await batch.commit()
  console.log("done")
}

module.exports = {
  addCollectionAndDocuments
}