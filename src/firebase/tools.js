//utility tool for looping through firestore collection

export const firestoreLooper = (snapshot) => {
  let data = [];
  snapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
};
