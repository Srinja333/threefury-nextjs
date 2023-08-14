import './globals.css'
import { Inter } from 'next/font/google'
//import {BrowserRouter as Router} from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ThreeFury',
  description: 'Grow your business digitally with Threefury',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Router> */}
        {children}
        {/* </Router> */}
      </body>
    </html>
  )
}
