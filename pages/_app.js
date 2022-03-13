import "../public/styles/globals.css";
import "../public/styles/main.css";
import "../public/styles/jquery.bxslider.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
