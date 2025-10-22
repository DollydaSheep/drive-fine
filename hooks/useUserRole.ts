import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser){
        console.log("🚪 User logged out");
        setUser(null);
        setLoading(false);
        return;
      }
      // const { creationTime, lastSignInTime} = currentUser.metadata
      console.log("Sign In")
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser?.metadata) 
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
