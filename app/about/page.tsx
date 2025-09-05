import { Metadata } from 'next'
import Image from 'next/image'
import HeaderSection from '@/components/header-section' 
import { IoEyeOutline, IoLocateOutline } from 'react-icons/io5'

export const metadata: Metadata = {
    title: 'About Us - Hunian',
    description: 'Learn more about us',
}

const AboutPage = () => {
  return (
    <div className=''>
        <HeaderSection title='About Us - Hunian' subTitle='Learn more about us' />
        <div className='max-w-screen-xl mx-auto py-20 px-4'>
            <div className="grid md:grid-cols-2 gap-8">
                <Image src='/about.jpg' alt='about' width={600} height={500} className="w-full h-[450px] object-cover rounded-lg shadow-lg"/>
                <div>
                    <h1 className='className="text-5xl font-semibold text-gray-900 mb-4"'>Who We Are</h1>
                    <p className='text-gray-700 py-5'> Menyediakan Tempat Bersinggah yang Luar biasa nyaman dan mantap Kami berkomitmen untuk memberikan pengalaman menginap yang tak terlupakan bagi setiap tamu kami. 
                    Dengan layanan pelanggan yang ramah, fasilitas modern, dan lokasi strategis, kami memastikan bahwa setiap kunjungan Anda akan menjadi momen yang berharga. Baik Anda sedang merencanakan liburan keluarga, perjalanan bisnis, atau sekadar mencari tempat untuk bersantai, kami memiliki berbagai pilihan akomodasi yang sesuai dengan kebutuhan Anda. 
                    Dari kamar yang elegan hingga suite mewah, setiap detail dirancang untuk kenyamanan dan kepuasan Anda.
                    </p>
                    <ul className='list-item space-y-6 pt-8'>
                        <li className='flex gap-5'>
                            <div className="flex-none mt-1">
                                <IoEyeOutline className='size-7 text-blue-800' />
                            </div>
                            <div className="flex-1">
                                <h4 className='text-lg font-semibold mb-1 text-blue-900'>Vision :</h4>
                                <p className='text-gray-800'>Bisa Di Andalkan untuk lini liburan anda</p>
                            </div>
                        </li>
                        <li className='flex gap-5'>
                            <div className="flex-none mt-1">
                                <IoLocateOutline className='size-7 text-blue-800' />
                            </div>
                            <div className="flex-1">
                                <h4 className='text-lg font-semibold mb-1 text-blue-900'>Mission :</h4>
                                <p className='text-gray-800'>Mengutamakan kenyamanan Pelanggan dalam housing yang disediakan</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage