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

export const COLLECTION = {
  SERVICES: 'cloud_services',
  REVIEWS: 'cloud_reviews'
}

export const getDocument = async (collection_name, id = '') => {
  const docSnap = await getDoc(doc(db, collection_name, id))
  if (docSnap.exists()) {
    console.log('found document:', id)
    return {
      id: docSnap.id,
      ...docSnap.data()
    }
  }
  return null
}

export const updateDocument = async (collection_name, id = '', field = '', value) => {
  let response = await getDocument(collection_name, id)
  if (!response) {
    console.log('document is not existed')
    return
  }

  await updateDoc(doc(db, collection_name, id), { [field]: value })
}

export const getServices = async (doc_name) => {
  const name = doc_name.trim().toLowerCase()
  const querySnapshot = await getDocs(collection(db, COLLECTION.SERVICES))
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

export const addService = async (service_name = '') => {
  let name = service_name.trim()
  console.log('create new document:', name)
  const docRef = await addDoc(collection(db, COLLECTION.SERVICES), {
    name: name,
    creator: '',
    image: '',
    rating: {
      total: 0,
      average: 0,
      stars: new Array(5).fill(0)
    },
  })
  addReviewCollection(docRef.id)
}

export const addReviewCollection = async (id) => {
  await setDoc(doc(db, COLLECTION.REVIEWS, id), {
    reviews: []
  })
}

export const addReview = async (id, review) => {
  let response = await getDocument(COLLECTION.REVIEWS, id)
  if (!response) {
    console.log('document not found', id)
    return
  }
  console.log(response)
  const reviews = response.reviews
  await updateDocument(COLLECTION.REVIEWS, id, 'reviews', [...reviews, review])
}

///////////////////////////
export const getOverviews = async (doc_name) => {
  const services = await getServices(doc_name)
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

export const getOverview = async (id) => {
  const service = await getDocument(COLLECTION.SERVICES, id)
  return {
    id: service.id,
    name: service.name,
    creator: service.creator,
    image: service.image,
    rating: service.rating
  }
}

export const getReviews = async (id) => {
  let response = await getDocument(COLLECTION.REVIEWS, id)
  if (!response) {
    console.log('document not found', id)
    return []
  }
  console.log(response)
  return response.reviews
}

