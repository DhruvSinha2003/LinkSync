'use client';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";
export default function LoginWithGoogle(){
    return(
    <button 
        onClick={()=>signIn('google')}
        className="bg-blue-500 text-white items-center text-center w-full flex gap-4 justify-center py-4">
        
        <FontAwesomeIcon className='h-6' icon={faGoogle} />
        <span>Sign in with Google</span>
        </button>
    );
}