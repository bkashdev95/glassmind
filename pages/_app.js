/** @format */

import "../styles/theme.scss";

import Head from "next/head";
import { useRouter } from "next/router";
import { Sidenav } from "../components";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports";

Amplify.configure({
  ...config,
});


function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const authPages = [
		"/error-illustration",
		"/error",
		"/password-reset-cover",
		"/password-reset-illustration",
		"/password-reset",
		"/sign-in-cover",
		"/sign-in-illustration",
		"/sign-in",
		"/sign-up-cover",
		"/sign-up-illustration",
		"/sign-up",
	];

	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href='/favicon/favicon.ico'
					type='image/x-icon'
				/>
				<title>Glassmind MVP</title>
			</Head>
			{!authPages.includes(router.pathname) && <Sidenav />}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
