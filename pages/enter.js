import { auth, googleAuthProvider } from '../libs/firebase'

export default function EnterPage({ }) {
  const user = null;
  const username = null

  return (
    <main>
        {user ? 
        !username ? <UserNameForm /> : <SignOutButton />
        :
        <SignInButton />
      }

      {/* <SignInButton />
      <SignOutButton /> */}
    </main>
  )
}

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'} /> Sign in with Google
    </button>
  )

}

const SignOutButton = () => {
   return <button onClick={() => auth.signOut()}></button>
  
}

const UserNameForm = () => {
  return null;
  
}