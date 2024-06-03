import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "../components";
import Loading from "./loading";
import "../styles/globals.css";
import { ThemeContext } from "../context";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" sizes="76x76" href="favicon.ico" />
			<body>
				<ThemeContext>
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContext>
			</body>
		</html>
	);
}