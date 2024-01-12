import './globals.css';
export default function Home() {
  return (
    <main>
      <section className=' pt-32 mx-auto max-w-4xl '>
      <div className='max-w-md mb-8'>
      <h1 className='text-6xl font-bold'>Your one link <br />for everything</h1>
      <h2 className='text-gray-500 text-xl mt-6'>Share all of your links, profiles, contact information and more on one page.</h2>
      </div>
      <form className='inline-flex items-center shadow-lg shadow-black/30'>
        <span className='bg-white py-4 px-2 pl-4'>linksync.com/</span>
        <input type='text' placeholder='username' className='py-4'></input>
        <button type='submit' className='bg-blue-500 text-white py-4 px-6'>Join for free</button>
      </form>
      </section>
    </main>
  )
}
