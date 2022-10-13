import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

export default function Authentication() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignUpForm />
      <button onClick={()=>{logGoogleUser()}}>Sign In With Google Pop Up</button>
    </div>
  )
}
