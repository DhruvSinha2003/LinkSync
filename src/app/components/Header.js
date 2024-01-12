import { getServerSession } from 'next-auth';
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from './buttons/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default async function Header(){
  const session = await getServerSession(authOptions);
    return(
    <header className='bg-white border-b py-4'>
    <div className=' flex justify-between mx-auto px-6'>
    <div className='flex items-center gap-6 text-blue-500'>
      <Link href={'/'} className='flex items-center gap-2'>
      <FontAwesomeIcon className=' h-4' icon={faLink}/>
      <span className='font-bold'>LinkSync</span>
      </Link>
        <nav className=' flex items-center gap-4 text-slate-500 text-sm'>
          <Link href={'/about'}>About</Link>
          <Link href={'/pricing'}>Pricing</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
      </div>
        
        <nav className='flex items-center gap-4 text-sm text-slate-500'>
        {
          !!session && (
            <>
            <Link href ={'/account'}>
            Hello, {session?.user?.name}
            </Link>
            <LogoutButton />
            </>
          )
        }
        {!session && (
          <>
          <Link href={'/login'}>Sign In</Link>
        <Link href={'/login'}>Create an Account</Link>
          </>
        )}
        
        </nav>
    </div>
      
      </header>
      );}