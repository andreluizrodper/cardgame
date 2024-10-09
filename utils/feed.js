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

const createFeed = async ({ data }) => {
  const feed = await addDoc(collection(firestore, "feed"), {
    ...data,
    archived: false,
    created_by: store.state.account.data(),
    created_by_id: store.state.account.id,
    updated_at: new Date(),
    created_at: new Date(),
  });
  return feed;
};

const updateFeed = async ({ id, data }) => {
  const feedRef = doc(firestore, "feed", id);
  const feed = await getDoc(feedRef);
  const feedData = setDoc(feedRef, {
    ...feed.data(),
    ...data,
    updated_at: new Date(),
  });
  return feedData;
};

const getFeeds = async () => {
  const queryParams = [];
  queryParams.push(orderBy("updated_at", "desc"));
  queryParams.push(orderBy("created_at", "desc"));
  const qfeeds = query(collection(firestore, "feed"), ...queryParams);
  const feedDocs = await getDocs(qfeeds);
  return feedDocs.docs;
};

const getFeed = async ({ id }) => {
  const feedRef = doc(firestore, "feed", id);
  const feed = await getDoc(feedRef);
  return feed;
};

export { createFeed, updateFeed, getFeeds, getFeed };
