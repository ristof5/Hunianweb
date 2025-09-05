import Hero from '@/components/hero'
import Main from '@/components/main'

export default function Home() {
  return (
    <div >
      <Hero/>
      <div className='mt-16'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-800 mb-3'> Our Rooms </h1>
            <p className='py-3 text-gray-900'>Villa and beach party</p>
        </div>
        <Main/>
      </div>
    </div>
  );
}
