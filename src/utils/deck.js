import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  orderBy,
} from "firebase/firestore";
import { firestore } from "@/utils/firebase.js";
import store from "@/store";

const createDeck = async ({ data }) => {
  const deck = await addDoc(collection(firestore, "deck"), {
    ...data,
    archived: false,
    created_by: store.state.account.data(),
    created_by_id: store.state.account.id,
    updated_at: new Date(),
    created_at: new Date(),
  });
  return deck;
};

const updateDeck = async ({ id, data }) => {
  const deckRef = doc(firestore, "deck", id);
  const deck = await getDoc(deckRef);
  const deckData = setDoc(deckRef, {
    ...deck.data(),
    ...data,
    updated_at: new Date(),
  });
  return deckData;
};

const getDecks = async () => {
  const queryParams = [where("created_by_id", "==", store.state.account.id)];
  queryParams.push(where("archived", "==", false));
  queryParams.push(orderBy("updated_at", "desc"));
  queryParams.push(orderBy("created_at", "desc"));
  const qdecks = query(collection(firestore, "deck"), ...queryParams);
  const deckDocs = await getDocs(qdecks);
  return deckDocs.docs;
};

const getDeck = async (id) => {
  const deckRef = doc(firestore, "deck", id);
  const deck = await getDoc(deckRef);
  return deck;
};

export { createDeck, updateDeck, getDecks, getDeck };
