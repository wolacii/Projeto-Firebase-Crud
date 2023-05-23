import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database"

let app
try {
    app = getApp();
} catch (any) {

    const firebaseConfig = { 
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATA_BASEURL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db, set, ref }
