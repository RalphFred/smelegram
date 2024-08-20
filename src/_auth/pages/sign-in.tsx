import { SignIn, useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (isSignedIn) {
    navigate('/'); // Redirect to the home page after sign-in
  }
  return <SignIn path="/sign-in" />
}