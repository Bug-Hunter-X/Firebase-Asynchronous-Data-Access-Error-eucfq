The solution is to ensure that you access the document data only after the promise has resolved:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().myProperty); // Access data safely after resolution
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
This revised code uses an `if (doc.exists)` check to handle cases where the document might not exist and wraps the whole operation in a `.catch()` to handle potential errors during the data retrieval process. This approach ensures that the code gracefully handles both successful retrievals and potential errors.