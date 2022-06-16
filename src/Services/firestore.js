import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAD0iutk0Af8EWDkkUJcuaXv1E8MRlAvmI",//
  authDomain: "cocos-popit.firebaseapp.com",//
  projectId: "cocos-popit",//
  storageBucket: "cocos-popit.appspot.com",
  messagingSenderId: "609803389398",
  appId: "1:609803389398:web:3af2f0614f212017ccbc77",
  measurementId: "G-9CLSP96584"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const COLLECTION = 'cloud_services'

const standardizeName = (str) => {
  let name = str.trim().toLowerCase()
  name = str.charAt(0).toUpperCase() + str.slice(1)
  return name
}

export const getDocument = async (doc_name = '') => {
  let name = standardizeName(doc_name)
  const docSnap = await getDoc(doc(db, COLLECTION, name))
  if (docSnap.exists()) {
    console.log('existed document:', name)
    return docSnap
  }
  return null
}

export const addDocument = async (doc_name = '') => {
  const docSnap = await getDocument(doc_name)
  if (docSnap) {
    console.warn('Cant add an existed document:', doc_name)
    return
  }
  let name = standardizeName(doc_name)
  console.log('create new document:', name)
  await setDoc(doc(db, COLLECTION, name), {
    name: name,
    creator: '',
    image: '',
    rating: {
      total: 0,
      average: 0,
      stars: new Array(5).fill(0)
    },
    comments: [],

  })
}

export const updateDocument = async (doc_name = '', field = '', value) => {
  let docSnap = await getDocument(doc_name)
  if (!docSnap) {
    console.log('document is not existed')
    return
  }

  let name = standardizeName(doc_name)
  await updateDoc(doc(db, COLLECTION, name), { [field]: value })
}

export const getOverviews = async () => {
  const docs = await getDocs(collection(db, COLLECTION))
  let result = []
  docs.forEach(doc => {
    const data = doc.data()
    result.push({
      name: data.name,
      creator: data.creator,
      image: data.image,
      rating: data.rating
    })
  })

  return result
}

