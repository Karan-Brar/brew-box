import "@/styles/globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
