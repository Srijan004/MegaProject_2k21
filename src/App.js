import './App.css';
import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {

  const SignInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) =>{
      console.log(re);
      console.log(3);
    })
    .catch((err) =>{
      console.log(err);
      console.log(4);
    })
  }
  return (
    <div className = "App">
      <div className = "content">
        <button onClick = { SignInWithGoogle }> SignIn </button>
      </div>
    </div>
  );
}

export default App;