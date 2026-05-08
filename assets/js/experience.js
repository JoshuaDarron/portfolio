const experiences = {
	rocketride: {
		company: "RocketRide AI Inc.",
		title: "Founding Engineer",
		location: "San Francisco, CA",
		period: "2026 - Current",
		description:
			"Founding-team engineer on an open-source MIT-licensed AI runtime. I own the developer-facing surface: TypeScript SDK, Python SDK, MCP server, VS Code extension, and workshop tooling. I also built Pulsar, a market intelligence agent running internally across finance, HR, and marketing, which launches as a featured app on RocketRide Cloud. I work in TypeScript, Python, and C++, and I write about what I build.",
		highlights: [
			"Built and published the RocketRide TypeScript and Python SDKs, available on npm and PyPI",
			"Developed the RocketRide MCP stdio server for streaming local files to the runtime",
			"Built the RocketRide VS Code extension for in-IDE pipeline development",
			"Designed the workshop launchpad: cross-platform tool that resolves runtime versions, downloads OS-specific binaries, and boots UI plus API plus runtime with one pnpm dev",
			"Built Pulsar end-to-end: Next.js, Postgres, Neo4j with Graph Data Science, Claude Sonnet, RocketRide pipelines. Adopted internally by finance, HR, and marketing",
			"Contributed to the open source RocketRide server and authored the official platform documentation",
		],
		technologies: [
			"TypeScript",
			"Python",
			"C++",
			"Node.js",
			"MCP",
			"Postgres",
			"Neo4j",
			"Docker",
			"REST API",
		],
		videos: [
			{
				name: "RocketRide: The Open Source Way to Benchmark GPT, Claude, Gemini, and Grok",
				description: "YouTube walkthrough of RocketRide's open source benchmarking capabilities",
				tech: ["Benchmarking", "Open Source"],
				image: "https://img.youtube.com/vi/pq2eRW_0D0Q/hqdefault.jpg",
				link: "https://www.youtube.com/watch?v=pq2eRW_0D0Q",
			},
		],
		projects: [
			{
				name: "Pulsar",
				description: "Market intelligence agent built on RocketRide. Adopted internally at RocketRide and launching as a featured app on RocketRide Cloud.",
				tech: ["Next.js", "Postgres", "Neo4j", "Claude"],
				link: "https://github.com/joshuadarron/pulsar",
			},
			{
				name: "rocketride-server (GitHub)",
				description: "Open-source MIT-licensed AI runtime. C++ core with Python and TypeScript SDKs. 2k+ stars.",
				tech: ["C++", "Open Source", "Docker"],
				link: "https://github.com/rocketride-org/rocketride-server",
			},
			{
				name: "rocketride-workshops (GitHub)",
				description: "Workshop scaffolding for the runtime. Cross-platform launchpad boots UI, API, and runtime with one pnpm dev.",
				tech: ["TypeScript", "pnpm", "Cross-platform"],
				link: "https://github.com/rocketride-org/rocketride-workshops",
			},
			{
				name: "rocketride (npm)",
				description: "RocketRide Pipeline Node.js Client SDK",
				tech: ["TypeScript", "Node.js", "SDK"],
				link: "https://www.npmjs.com/package/rocketride",
			},
			{
				name: "rocketride (PyPI)",
				description: "RocketRide Pipeline Python Client SDK",
				tech: ["Python", "WebSocket", "SDK"],
				link: "https://pypi.org/project/rocketride/",
			},
			{
				name: "rocketride-mcp (PyPI)",
				description: "RocketRide MCP stdio server that streams local files to the runtime",
				tech: ["Python", "MCP", "Streaming"],
				link: "https://pypi.org/project/rocketride-mcp/",
			},
			{
				name: "RocketRide Docs",
				description: "Official RocketRide platform documentation",
				tech: ["Documentation", "Developer Experience"],
				link: "https://docs.rocketride.org/",
			},
		],
	},
	aparavi: {
		company: "Aparavi Software AG",
		title: "Software Engineer",
		location: "Santa Monica, CA",
		period: "2022 - 2026",
		description:
			"Led major initiatives to design and ship new features for the data intelligence automation platform using Node.js, SQL databases, and React.js. Worked closely with product managers, designers, and engineers to ensure features met customer needs. Helped improve team process and workflow by identifying bottlenecks and proposing solutions to increase efficiency. Contributed to the development of data management and protection solutions helping organizations worldwide optimize and safeguard their data.",
		highlights: [
			"Designed and implemented new platform features end-to-end across the full stack",
			"Collaborated cross-functionally with product, design, and engineering to deliver customer-driven features",
			"Identified process improvements and proposed workflow changes to increase team productivity",
			"Managed tasks independently using Agile methodologies, delivering on time and within scope",
			"Built solutions for data classification, protection, and compliance at enterprise scale",
		],
		technologies: [
			"Node.js",
			"React",
			"SQL",
			"AWS",
			"TypeScript",
			"Agile",
		],
		projects: [
			{
				name: "Aparavi",
				description: "Data intelligence automation platform",
				tech: ["Node", "React", "SQL", "AWS"],
				image: "./assets/img/portfolio/aparavi.png",
				link: "https://www.aparavi.com/",
			},
		],
	},
	hotb: {
		company: "HOTB Software",
		title: "Software Engineer",
		location: "Irvine, CA",
		period: "2020 - 2022",
		description:
			"Built enterprise-grade full-stack software using Linux, Node.js, MSSQL, ArangoDB, PostgreSQL, React, and AWS. Developed internal systems for order entry and management, conversion and revenue reporting, and production workflow tracking. Designed custom REST APIs in Node.js and managed Linux server deployments with Docker and AWS. Led development of a government assistance application facilitating COVID-19 financial relief with transactions up to $15,000 per household.",
		highlights: [
			"Built order management, revenue reporting, and production tracking systems used across departments",
			"Designed and implemented custom REST APIs in Node.js for internal and external integrations",
			"Deployed and maintained Linux servers and virtualized environments using Docker and AWS",
			"Developed a government COVID-19 financial assistance platform handling transactions up to $15,000 per household",
		],
		technologies: [
			"Node.js",
			"React",
			"MSSQL",
			"PostgreSQL",
			"ArangoDB",
			"AWS",
			"Docker",
			"Linux",
			"Knex.js",
		],
		projects: [
			{
				name: "Georgia Rental Assistance",
				description: "Government assistance platform",
				tech: ["Node", "React", "SQL", "AWS"],
				image: "./assets/img/portfolio/ga-era.png",
				link: "https://georgiarentalassistance.ga.gov/",
			},
			{
				name: "CoreCompli",
				description: "Compliance platform",
				tech: ["Node", "SQL", "AWS"],
				image: "./assets/img/portfolio/corecompli.png",
				link: "https://hotbsoftware.com/corecompli/",
			},
		],
	},
	nihonkohden: {
		company: "Nihon Kohden",
		title: "Software Engineer",
		location: "Irvine, CA",
		period: "2020 - 2021",
		description:
			"Architected and implemented data streaming APIs to receive continuous data flows from medical monitoring equipment, storing results in Microsoft SQL for further analysis. Built Node.js APIs to query and serve data to frontend applications, and designed Vue-based interfaces for displaying real-time data streams. Assisted with building infrastructure for a data warehouse implementation and participated in daily Scrum meetings for project coordination and troubleshooting.",
		highlights: [
			"Architected streaming APIs for continuous ingestion of medical monitoring data into MSSQL",
			"Built Node.js APIs to query and deliver data to frontend applications",
			"Designed and developed Vue.js frontend for real-time medical data visualization",
			"Assisted with data warehouse infrastructure planning and implementation",
			"Participated in daily Scrum meetings for project analysis and blocker resolution",
		],
		technologies: [
			"Node.js",
			"Vue.js",
			"MSSQL",
			"REST API",
			"Data Streaming",
		],
		projects: [
			{
				name: "NK Lab",
				description: "Medical data waveform visualization",
				tech: ["Node", "Vue", "SQL"],
				image: "./assets/img/portfolio/nk-lab.png",
				link: "https://www.nkdhs.com/products.pl?waveform=true",
			},
		],
	},
	roguecloud: {
		company: "Rogue Cloud",
		title: "Software Engineer",
		location: "San Juan Capistrano, CA",
		period: "2019",
		description:
			"Automated business processes for enterprise clients using the Salesforce cloud platform. Developed enterprise-grade software to improve operational agility in competitive markets. Provided training to junior engineers on programming concepts and mentored student interns on career development. Facilitated daily Scrum meetings to analyze project status, troubleshoot issues, and coordinate directly with the development team across all project phases.",
		highlights: [
			"Automated business processes for corporations using the Salesforce cloud platform",
			"Developed enterprise-grade software to enhance operational agility for clients",
			"Trained junior engineers on programming concepts and mentored interns on career progression",
			"Facilitated daily Scrum meetings and coordinated with the development team across all project phases",
		],
		technologies: [
			"Salesforce",
			"Apex",
			"Lightning",
			"JavaScript",
			"Scrum",
		],
		projects: [],
	},
	appmakersla: {
		company: "AppMakersLA",
		title: "Project Manager Intern",
		location: "Los Angeles, CA",
		period: "2016",
		description:
			"Provided hands-on support in the facilitation of full-stack application development. Monitored project progress and maintained workflow by assigning tasks to developers. Actively participated in client meetings to discuss application requirements, review progress, and gather feedback.",
		highlights: [
			"Assisted with facilitation and coordination of full-stack application development",
			"Monitored project progress, maintained workflow, and assigned tasks to developers",
			"Participated in client meetings to discuss requirements and review application progress",
		],
		technologies: [
			"JavaScript",
			"HTML/CSS",
			"Project Management",
			"Agile",
		],
		projects: [],
	},
};

function renderExperience() {
	let slug = new URLSearchParams(window.location.search).get("company");
	if (!slug) {
		const m = window.location.pathname.match(/^\/experience\/([^/]+)\/?$/);
		if (m) slug = m[1];
	}

	if (!slug || !experiences[slug]) {
		document.querySelector(".detail-main").style.display = "none";
		document.getElementById("fallbackMessage").style.display = "flex";
		document.querySelector(".detail-header").style.display = "none";
		return;
	}

	const exp = experiences[slug];

	document.title = exp.company + " | Joshua D. Phillips";
	document.getElementById("companyName").textContent = exp.company;
	document.getElementById("companyMeta").textContent =
		exp.title + " \u00B7 " + exp.location + " \u00B7 " + exp.period;
	document.getElementById("companyDescription").textContent = exp.description;

	// Update meta tags dynamically
	var pageUrl = "https://joshuadarron.com/experience/" + slug + "/";
	var metaDesc = exp.title + " at " + exp.company + " (" + exp.period + ", " + exp.location + "). " + exp.description.substring(0, 150) + "...";

	var descEl = document.getElementById("metaDescription");
	if (descEl) descEl.setAttribute("content", metaDesc);

	var canonicalEl = document.getElementById("canonicalLink");
	if (canonicalEl) canonicalEl.setAttribute("href", pageUrl);

	var ogTitleEl = document.getElementById("ogTitle");
	if (ogTitleEl) ogTitleEl.setAttribute("content", exp.company + " | Joshua D. Phillips");

	var ogDescEl = document.getElementById("ogDescription");
	if (ogDescEl) ogDescEl.setAttribute("content", metaDesc);

	var ogUrlEl = document.getElementById("ogUrl");
	if (ogUrlEl) ogUrlEl.setAttribute("content", pageUrl);

	var twitterTitleEl = document.getElementById("twitterTitle");
	if (twitterTitleEl) twitterTitleEl.setAttribute("content", exp.company + " | Joshua D. Phillips");

	var twitterDescEl = document.getElementById("twitterDescription");
	if (twitterDescEl) twitterDescEl.setAttribute("content", metaDesc);

	// Inject JSON-LD structured data
	var jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BreadcrumbList",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://joshuadarron.com/"
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "Experience",
						"item": "https://joshuadarron.com/#experience"
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": exp.company,
						"item": pageUrl
					}
				]
			},
			{
				"@type": "WebPage",
				"name": exp.company + " | Joshua D. Phillips",
				"url": pageUrl,
				"isPartOf": { "@id": "https://joshuadarron.com/#website" },
				"breadcrumb": { "@type": "BreadcrumbList" }
			},
			{
				"@type": "OrganizationRole",
				"roleName": exp.title,
				"startDate": exp.period.split(" - ")[0],
				"endDate": exp.period.split(" - ")[1] === "Current" ? undefined : exp.period.split(" - ")[1],
				"description": exp.description,
				"memberOf": {
					"@type": "Organization",
					"name": exp.company,
					"address": {
						"@type": "PostalAddress",
						"addressLocality": exp.location.split(", ")[0],
						"addressRegion": exp.location.split(", ")[1]
					}
				}
			}
		]
	};

	var scriptEl = document.createElement("script");
	scriptEl.type = "application/ld+json";
	scriptEl.textContent = JSON.stringify(jsonLd);
	document.head.appendChild(scriptEl);

	// Highlights
	const highlightsList = document.getElementById("highlights");
	exp.highlights.forEach(function (item) {
		const li = document.createElement("li");
		li.textContent = item;
		highlightsList.appendChild(li);
	});

	// Tech tags
	const techContainer = document.getElementById("techTags");
	exp.technologies.forEach(function (tech) {
		const span = document.createElement("span");
		span.textContent = tech;
		techContainer.appendChild(span);
	});

	// Render cards into a grid
	function renderCards(items, gridEl, sectionId) {
		if (items && items.length > 0) {
			items.forEach(function (item, index) {
				var card = document.createElement("div");
				card.className = "project-card reveal";
				card.style.setProperty("--delay", (index * 0.08) + "s");

				var a = document.createElement("a");
				if (item.link) {
					a.href = item.link;
					a.target = "_blank";
				}

				var imgWrap = document.createElement("div");
				imgWrap.className = "img-wrap";
				if (item.image) {
					var isExternal = item.image.startsWith("http");
					if (isExternal) {
						var img = document.createElement("img");
						img.src = item.image;
						img.alt = item.name;
						imgWrap.appendChild(img);
					} else {
						var picture = document.createElement("picture");
						var webpSrc = item.image.replace(/\.(png|jpg|jpeg)$/i, ".webp");
						var source = document.createElement("source");
						source.srcset = webpSrc;
						source.type = "image/webp";
						picture.appendChild(source);
						var img = document.createElement("img");
						img.src = item.image;
						img.alt = item.name;
						picture.appendChild(img);
						imgWrap.appendChild(picture);
					}
				}
				a.appendChild(imgWrap);

				var body = document.createElement("div");
				body.className = "card-body";

				var h3 = document.createElement("h3");
				h3.textContent = item.name;
				body.appendChild(h3);

				var p = document.createElement("p");
				p.textContent = item.description;
				body.appendChild(p);

				if (item.tech && item.tech.length > 0) {
					var tags = document.createElement("div");
					tags.className = "project-tags";
					item.tech.forEach(function (t) {
						var span = document.createElement("span");
						span.textContent = t;
						tags.appendChild(span);
					});
					body.appendChild(tags);
				}

				a.appendChild(body);
				card.appendChild(a);
				gridEl.appendChild(card);
			});
		} else {
			document.getElementById(sectionId).style.display = "none";
		}
	}

	// Videos
	renderCards(exp.videos, document.getElementById("videoGrid"), "videosSection");

	// Projects
	renderCards(exp.projects, document.getElementById("projectGrid"), "projectsSection");

	// Initialize reveal observer for dynamically created cards
	var revealEls = document.querySelectorAll(".reveal");
	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);
	revealEls.forEach(function (el) {
		observer.observe(el);
	});

	// Initialize card tilt + glow for dynamically created cards
	var isTouchDevice =
		"ontouchstart" in window || navigator.maxTouchPoints > 0;
	if (!isTouchDevice) {
		var cards = document.querySelectorAll(".project-card");
		cards.forEach(function (card) {
			card.addEventListener("mousemove", function (e) {
				var rect = card.getBoundingClientRect();
				var x = e.clientX - rect.left;
				var y = e.clientY - rect.top;
				var cx = rect.width / 2;
				var cy = rect.height / 2;
				var rotateX = ((y - cy) / cy) * -3;
				var rotateY = ((x - cx) / cx) * 3;
				card.style.transform =
					"perspective(600px) rotateX(" +
					rotateX +
					"deg) rotateY(" +
					rotateY +
					"deg)";
				card.style.setProperty("--mouse-x", x + "px");
				card.style.setProperty("--mouse-y", y + "px");
			});
			card.addEventListener("mouseleave", function () {
				card.style.transform = "";
			});
		});
	}
}

document.addEventListener("DOMContentLoaded", renderExperience);
