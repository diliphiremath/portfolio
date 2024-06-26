const author = "Dilip Hiremath";
const description =
	"Software developer from India, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://diliph.dev";
export const AppMetadata = {
	metadataBase: new URL("https://diliph.dev"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Dilip Hiremath",
		"Dilip Hiremath - software developer",
		"Frontend developer",
		"Backend developer",
		"Portfolio website",
		"Software Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		// images: [
		// 	{
		// 		url: "https://vasile-novatchii.netlify.app/screenshot.webp",
		// 		width: 800,
		// 		height: 600,
		// 		alt: "My personal portfolio website"
		// 	},
		// 	{
		// 		url: "https://vasile-novatchii.netlify.app/screenshot.webp",
		// 		width: 1800,
		// 		height: 1600,
		// 		alt: "My personal portfolio website"
		// 	}
		// ],
		locale: "en-US",
		type: "website"
	}
};  