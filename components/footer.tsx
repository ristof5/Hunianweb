import Image from "next/image"
import Link from "next/link"


const footer = () => {
  return (
    <footer className='bg-gray-900'>
        <div className='max-w-screen-xl mx-auto px-4 w-full py-10 md:scroll-py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-sm'>
                <div>
                    <Link href={'/'} className="mb-10 block">
                        <Image src={'/logohunian.png'} alt='logo' width={128} height={49} priority className='cursor-pointer'/>
                    </Link>
                    <p>
                        Hunian adalah platform pemesanan online yang memudahkan Anda menemukan 
                        dan memesan akomodasi terbaik untuk perjalanan Anda.
                    </p>
                </div>
                <div>
                    <div className="flex gap-20">
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link href='/about'>About Us</Link>
                                </li>
                                <li>
                                    <Link href='/room'>Rooms</Link>
                                </li>
                                <li>
                                    <Link href='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href='#'>Legal</Link>
                                </li>
                                <li>
                                    <Link href='#'>Term & Condition</Link>
                                </li>
                                <li>
                                    <Link href='#'>Payment Method</Link>
                                </li>
                                <li>
                                    <Link href='#'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="mb-8 text-xl font-semibold text-white">Newsletter</h4>
                    <p className="text-gray-400 mb-5">
                        Subscribe to our newsletter to get the latest updates and offers.
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <input type="text" name="email" className="w-full p-3 rounded-sm bg-white" 
                            placeholder="johndoe@gmail.com"/>
                        </div>
                        <button className="bg-orange-400 p-3 font-bold text-white w-full text-center
                        rounded-sm hover:bg-orange-500">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center
        text base text-gray-500'>
            &copy; Copyright 2025 | Hunian | Riffani | All rights reserved.
        </div>

    </footer>
  )
}

export default footer