import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* {Homepage} */}
        <main className='px-32'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
