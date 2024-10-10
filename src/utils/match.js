import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  getCountFromServer,
  orderBy,
} from "firebase/firestore";
import { firestore } from "@/utils/firebase.js";
import store from "@/store";

const createMatch = async () => {
  const shared_with = [store.state.account.id];
  const match = await addDoc(collection(firestore, "match"), {
    status: "waiting",
    public: true,
    shared_with,
    archived: false,
    created_by: store.state.account.id,
    updated_at: new Date(),
    created_at: new Date(),
  });
  return match;
};

const updateMatch = async ({ id, data }) => {
  const matchRef = doc(firestore, "match", id);
  const match = await getDoc(matchRef);
  const matchData = setDoc(matchRef, {
    ...match.data(),
    ...data,
    updated_at: new Date(),
  });
  return matchData;
};

const getMatches = async () => {
  const queryParams = [where("shared_with", "in", store.state.account.id)];
  queryParams.push(orderBy("updated_at", "desc"));
  queryParams.push(orderBy("created_at", "desc"));
  const qmatchs = query(collection(firestore, "match"), ...queryParams);
  const matchDocs = await getDocs(qmatchs);
  return matchDocs.docs;
};

const getWaitingMatches = async () => {
  const queryParams = [where("status", "==", "waiting")];
  const qmatchs = query(collection(firestore, "match"), ...queryParams);
  const matchDocs = await getDocs(qmatchs);
  return matchDocs.docs;
};

const getMatch = async (id) => {
  const matchRef = doc(firestore, "match", id);
  const match = await getDoc(matchRef);
  return match;
};

export { createMatch, updateMatch, getMatches, getMatch, getWaitingMatches };
