
import LoginWithGoogle from '../components/buttons/LoginWithGoogle';
export default function LoginPage(){
    return(
        <div className="shadow-xl shadow-black/20 mt-36 bg-white border p-4 max-w-xs mx-auto mt-4">
        <h1 className="text-4xl font-bold text-center mb-4">
        Sign In
        </h1>
        <p className='text-center mb-4 text-gray-500'>
        Use your Google Account to sign in to LinkSync
        </p>
        <LoginWithGoogle />
        </div>
    );
}