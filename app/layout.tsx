import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewsSource',
  description: 'Your reilable news source',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray-100'>
      <body className={inter.className}>
        <Navbar/>
        <main className="lg:px-[200px] xs:px-[150px] py-10 h-screen" >
          {children}
        </main>
      </body>
    </html>
  )
}
