import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react"
import app from "../firebase.init";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const handleSignInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        
    }
    const submitForm = (e) =>{
        e.preventDefault()
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])

    return {user, handleSignInWithGoogle,submitForm};

}

export default useFirebase;