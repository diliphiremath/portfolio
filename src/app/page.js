"use client";
// `app/page.js` is the UI for the `/` URLimport { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "../components";
import Loading from "./loading";
import "../styles/globals.css";
import { ThemeContext } from "../context";

import { WelcomeSection, AboutSection, ProjectsSection, TechnologiesSection } from "./sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			{/* <ProjectsSection /> */}
			<TechnologiesSection />
		</div>
	);
}