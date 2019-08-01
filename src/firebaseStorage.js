import './firebaseConfig';

let storage = firebase.storage()
let storageRef = this.storage.ref();
let imagesRef = storageRef.child('images');

export storage, storageRef, imagesRef;