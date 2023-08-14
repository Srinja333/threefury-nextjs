import './globals.css'
import { Inter } from 'next/font/google'
//import {BrowserRouter as Router} from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default: 'ThreeFury',
    template: '%s | ThreeFury'
  },
  description: 'Our vision is to grow your business digitally. ThreeFury, a leading digital agency, offers web design and development, SEO and Digital Marketing, mobile app development, video editing and graphic design, and content marketing solutions for enhanced online visibility and success.',
  keywords: ['threefury','threefury services','threefury website','threefury digital marketing','threefury web design and development','threefury web solution','threefury social media management'],
  verification: {
    google: "your-verification-id",
  },
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
