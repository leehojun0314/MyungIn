/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../public/styles/Home.module.css";
import Main from "../components/Main";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Myung In</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.-, maximum-scale=1.0, user-scalable=no, target-densityDpi=medium-dpi"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main></Main>
		</div>
	);
}
