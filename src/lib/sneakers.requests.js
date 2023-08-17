import { collection, getDocs, getDoc, doc, where, query } from "firebase/firestore";
import { db } from "./config";

const sneakersRef = collection(db,"items");

export const getSneakers = async (category) =>{
  const q = category
  ? query(sneakersRef, where("category","==", category))
  : sneakersRef;
  

  let sneakers = [];
  const querySnapshot = await getDocs (q);

  querySnapshot.forEach((doc) => {
    sneakers = [...sneakers, {...doc.data(), id: doc.id}];
  });

  return sneakers;
};

export const getSneaker = async (id) =>{

    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);
    if(docSnap.exists()) return { id: docSnap.id, ...docSnap.data()};

    return null;
};