import localFont from "next/font/local";
import { Poppins } from "@next/font/google"
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { CartProvider } from "@/services/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700']
})

export const metadata = {
  title: "Cozy Corner",
  description: "e-commerce furniture website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <body
        className={poppins.className}
      >
        <AuthProvider>
          <CartProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </CartProvider>
          <ToastContainer></ToastContainer>
        </AuthProvider>
      </body>

    </html>
  );
}
