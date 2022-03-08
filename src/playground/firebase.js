import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  child,
  get,
  off,
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkt-5gj7WnKgIIT5eOz33-sanl2htC-CY",
  authDomain: "expensify-cd72e.firebaseapp.com",
  databaseURL: "https://expensify-cd72e-default-rtdb.firebaseio.com",
  projectId: "expensify-cd72e",
  storageBucket: "expensify-cd72e.appspot.com",
  messagingSenderId: "389455953180",
  appId: "1:389455953180:web:9cb6730287fc599bed0ed9",
  measurementId: "G-7KKYZLEQ17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

//! onChildAdded
onChildAdded(ref(db, "expenses"), (snapshot) => {
  console.log("onChildAdded");
  console.log(snapshot.key, snapshot.val());
});

setTimeout(() => {
  console.log("onChildAdded timeout");
  update(ref(db, "expenses/-Mxa0jfZnkyStO7CmDal"), {
    hasMonkeys: true,
  });
}, 3000);

//! onChildChange
onChildRemoved(ref(db, "expenses"), (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//! onChildChange
onChildChanged(ref(db, "expenses"), (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//! Getting data and put it in an expenses array using
// onValue(ref(db), (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     childSnapshot.forEach((anotherChild) => {
//       expenses.push({
//         id: anotherChild.key,
//         ...anotherChild.val()
//       })
//     })
//   })
//   console.log(expenses)
// }, (e) => {
//   console.log("Fetch data failed ", e)
// })

//* getting data and put it in an expenses array
// get(ref(db))
//   .then((snapshot) => {
//     // console.log(snapshot.key)
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       childSnapshot.forEach((anotherChild) => {
//         console.log(anotherChild.key)
//         expenses.push({
//           id: anotherChild.key,
//           ...anotherChild.val()
//         })
//       })
//     })

//     console.log("test ", expenses)
// })

// const firebaseNotes = {
//   notes: {
//     kmsds: {
//       title: "This is title one",
//       body: "this is the body",
//     },
//     lindf: {
//       title: "This is title two",
//       body: "this is the body",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "This is title one",
//     body: "this is the body",
//   },
//   {
//     id: "189sdf",
//     title: "This is title two",
//     body: "this is the body",
//   },
// ];

// push(ref(db, 'expenses'), {
//   description: "rent",
//   note: "rent is expensive",
//   amount: 97000,
//   createdAt: 100,
// })

//! How to create array items in database
// push(ref(db, "notes"), {
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// })

// set(ref(db, 'notes'), notes)

// update(ref(db, "notes/-Mx_zqvKZeoIR8tZJecR"), {
//   title: "buy food",
//   body: "I had to get fat again."
// });

//! How to Read or get or fetch data (ONCE)
// get(ref(db, "location/city"))
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//    })
//   .catch((e) => {
//     console.log("Error fetching data ", e)
//   })

//! How to read everytime data changes on the database
// onValue(ref(db), (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching ', e)
// })

// setTimeout(() => {
//   update(ref(db), {age: 99})
// }, 3500)
// setTimeout(() => {
//   off(ref(db), 'value'); //* used to stop the onValue calls
// }, 7500)
// setTimeout(() => {
//   update(ref(db), {age: 39})
// }, 10500)

// onValue(ref(db), (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val()
//   const msg = `${name} is a ${title} at ${company}.`
//   console.log(msg)
// }, (e) => {
//   console.log("Error while fetching data ", e)
// })

//! How to create
// set(ref(db), {
//   name: "Juan Gomez",
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google"
//   },
//   location: {
//     city: "Santo Domingos",
//     country: "Dominican Republic",
//   },
// })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed ", e);
//   });

// // update(ref('/age'), {
// //   age: 44
// // })

//! How to update
// const updates = {};
// updates["/location/city"] = "Newark";
// update(ref(db), updates)
//   .then(() => {
//     console.log("update complete.");
//   })
//   .catch((e) => {
//     console.log("update failed ", e);
//   });

// updates["/attributes"] = { height: 160, weight: 85 };
// update(ref(db), updates)
//   .then(() => {
//     console.log('update attribute')
//   })
//   .catch((e) => {
//     console.log('update failed ', e)
//   });

// update(ref(db), {
//   name: "John Snow",
//   age: 32,
//   isSingle: null //! another way to remove an item
// })

// update(ref(db), {
//   job: "Manager",
//   "location/city": "New York"
// });

// update(ref(db), {
//   "job/company": "Amazon",
//   "location/city": "Seatle",
//   stressLevel: 9
// });

//! How to Remove
// remove(ref(db, "/isSingle/"))
//   .then(() => console.log("deleted"))
//   .catch((e) => console.log("delete failed ", e))

//! How to Remove with set()
// set(ref(db, '/isSingle'), null)
