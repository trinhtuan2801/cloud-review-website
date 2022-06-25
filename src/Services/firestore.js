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
  query,
  where
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

const trimName = (str) => {
  let name = str.trim()
  return name
}

export const getDocument = async (id = '') => {
  const docSnap = await getDoc(doc(db, COLLECTION, id))
  if (docSnap.exists()) {
    console.log('found document:', id)
    return {
      id: docSnap.id,
      ...docSnap.data()
    }
  }
  return null
}

export const getDocuments = async (doc_name) => {
  const name = doc_name.trim().toLowerCase()
  const querySnapshot = await getDocs(collection(db, COLLECTION))
  let result = []
  querySnapshot.forEach(doc => {
    const data = doc.data()
    if (data.name.toLowerCase().includes(name))
      result.push({
        id: doc.id,
        ...data
      })
  })
  return result
}

export const addDocument = async (doc_name = '') => {
  let name = trimName(doc_name)
  console.log('create new document:', name)
  await addDoc(collection(db, COLLECTION), {
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

export const updateDocument = async (id = '', field = '', value) => {
  let service = await getDocument(id)
  if (!service) {
    console.log('document is not existed')
    return
  }

  await updateDoc(doc(db, COLLECTION, id), { [field]: value })
}

export const getOverviews = async (doc_name) => {
  const services = await getDocuments(doc_name)
  let result = []
  services.map(service => {
    result.push({
      id: service.id,
      name: service.name,
      creator: service.creator,
      image: service.image,
      rating: service.rating
    })
  })

  return result
}

export const addComment = async (id, comment) => {
  let service = await getDocument(id)
  if (!service) {
    console.log('document not found', id)
    return
  }
  console.log(service)
  let comments = service.comments
  comments.push(comment)
  await updateDocument(service.id, 'comments', comments)
} 

export const getComments = async (id) => {
  let service = await getDocument(id)
  if (!service) {
    console.log('document not found', id)
    return []
  }
  console.log(service)
  return service.comments
}
