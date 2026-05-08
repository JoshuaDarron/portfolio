// Case study data + rendering
var caseStudies = {
	aparavi: {
		name: 'Aparavi',
		tagline: 'Data intelligence automation platform',
		overview: 'Aparavi is a data intelligence platform that helps organizations discover, classify, and manage their unstructured data at scale. As a Software Engineer, I contributed to building core platform features across the full stack.',
		challenge: 'Organizations struggle to understand what data they have, where it lives, and how to protect it. The challenge was building a platform that could scan, classify, and manage petabytes of data across distributed environments while maintaining performance and reliability.',
		approach: 'Built new features end-to-end using Node.js, React, and SQL. Collaborated cross-functionally with product and design teams to deliver customer-driven features. Implemented data classification and protection capabilities at enterprise scale using Agile methodologies.',
		outcome: 'Delivered key platform features that helped organizations worldwide optimize and safeguard their data. Improved team productivity through process improvements and workflow changes.',
		tech: ['Node.js', 'React', 'SQL', 'AWS', 'TypeScript'],
		image: './assets/img/portfolio/aparavi.png',
		link: 'https://www.aparavi.com/'
	},
	'ga-era': {
		name: 'Georgia Rental Assistance',
		tagline: 'Government COVID-19 financial relief platform',
		overview: 'A government assistance application facilitating COVID-19 financial relief for Georgia residents, handling transactions up to $15,000 per household.',
		challenge: 'Building a secure, scalable platform capable of processing high-value financial transactions for government assistance programs during the COVID-19 pandemic, with strict compliance and security requirements.',
		approach: 'Developed the full-stack application using Node.js, React, and SQL with AWS infrastructure. Implemented secure transaction processing, user verification workflows, and compliance reporting.',
		outcome: 'Successfully launched the platform to serve Georgia residents in need of financial assistance during the pandemic, processing thousands of applications and distributing millions in relief funds.',
		tech: ['Node.js', 'React', 'SQL', 'AWS'],
		image: './assets/img/portfolio/ga-era.png',
		link: 'https://georgiarentalassistance.ga.gov/'
	},
	corecompli: {
		name: 'CoreCompli',
		tagline: 'Enterprise compliance platform',
		overview: 'CoreCompli is an enterprise compliance platform that helps organizations manage regulatory requirements, track compliance activities, and generate reports.',
		challenge: 'Enterprises need to track complex regulatory requirements across departments while maintaining audit trails and generating compliance reports on demand.',
		approach: 'Built the platform using Node.js and SQL with AWS hosting. Designed REST APIs for data management and implemented reporting dashboards for compliance tracking.',
		outcome: 'Delivered a robust compliance tracking system used by enterprise organizations to streamline their regulatory processes.',
		tech: ['Node.js', 'SQL', 'AWS'],
		image: './assets/img/portfolio/corecompli.png',
		link: 'https://hotbsoftware.com/corecompli/'
	},
	mongooq: {
		name: 'MongoOQ',
		tagline: 'NPM package for simplified MongoDB queries',
		overview: 'MongoOQ is an open-source NPM package that simplifies building MongoDB queries with a clean, chainable API.',
		challenge: 'Building complex MongoDB queries often involves verbose, nested objects that are hard to read and maintain. Developers needed a simpler way to construct queries programmatically.',
		approach: 'Designed a fluent, chainable API that maps to MongoDB query operators. Published as an open-source NPM package with comprehensive documentation and test coverage.',
		outcome: 'Published on NPM and adopted by developers for simplifying MongoDB query construction in Node.js applications.',
		tech: ['MongoDB', 'Node.js', 'NPM'],
		image: './assets/img/portfolio/mongooq.png',
		link: 'https://www.npmjs.com/package/mongooq'
	},
	'nk-lab': {
		name: 'NK Lab',
		tagline: 'Medical data waveform visualization',
		overview: 'A real-time medical data visualization application for Nihon Kohden, displaying waveform data from medical monitoring equipment.',
		challenge: 'Medical monitoring equipment generates continuous streams of waveform data that needs to be captured, stored, and displayed in real-time with high fidelity for clinical use.',
		approach: 'Architected streaming APIs for continuous data ingestion into MSSQL. Built Node.js APIs to serve data and designed Vue.js frontends for real-time waveform visualization.',
		outcome: 'Delivered a real-time data visualization system that enabled clinicians to monitor patient data streams effectively.',
		tech: ['Node.js', 'Vue.js', 'SQL'],
		image: './assets/img/portfolio/nk-lab.png',
		link: 'https://www.nkdhs.com/products.pl?waveform=true'
	},
	csviewer: {
		name: 'CSViewer',
		tagline: 'Chrome extension for viewing CSV files',
		overview: 'A Chrome browser extension that transforms raw CSV files into formatted, readable tables directly in the browser.',
		challenge: 'Opening CSV files in the browser shows raw comma-separated text that is difficult to read and analyze without a dedicated spreadsheet application.',
		approach: 'Built a Chrome extension that detects CSV files and automatically renders them as formatted HTML tables with sorting and search capabilities.',
		outcome: 'Published on the Chrome Web Store, providing users with a quick way to view and interact with CSV data without leaving the browser.',
		tech: ['JavaScript', 'Chrome Extension API'],
		image: './assets/img/portfolio/csviewer.png',
		link: 'https://chromewebstore.google.com/detail/csviewer/khfkmjdhickeapmgolpnmebpppdjffnl'
	}
};

(function () {
	var container = document.getElementById('caseStudyContent');
	if (!container) return;

	var slug = new URLSearchParams(window.location.search).get('project');
	if (!slug) {
		var m = window.location.pathname.match(/^\/portfolio\/([^/]+)\/?$/);
		if (m) slug = m[1];
	}

	if (!slug || !caseStudies[slug]) {
		container.innerHTML = '<div class="fallback-message" style="display:flex"><div class="container"><h2>Case study not found</h2><p>The requested case study doesn\'t exist.</p><a href="./index.html#portfolio" class="btn-outline">Back to Portfolio</a></div></div>';
		return;
	}

	var study = caseStudies[slug];
	document.title = study.name + ' | Case Study | Joshua D. Phillips';

	var html = '';
	html += '<section class="case-study-header"><h1>' + study.name + '</h1>';
	html += '<p class="case-study-tagline">' + study.tagline + '</p></section>';

	html += '<section class="case-study-section"><h2>Overview</h2><p>' + study.overview + '</p></section>';
	html += '<section class="case-study-section"><h2>The Challenge</h2><p>' + study.challenge + '</p></section>';
	html += '<section class="case-study-section"><h2>The Approach</h2><p>' + study.approach + '</p></section>';
	html += '<section class="case-study-section"><h2>The Outcome</h2><p>' + study.outcome + '</p></section>';

	if (study.image) {
		html += '<section class="case-study-section"><h2>Screenshots</h2>';
		html += '<div class="case-study-screenshot"><picture>';
		html += '<source srcset="' + study.image.replace(/\.(png|jpg|jpeg)$/i, '.webp') + '" type="image/webp">';
		html += '<img src="' + study.image + '" alt="' + study.name + ' screenshot" loading="lazy">';
		html += '</picture></div></section>';
	}

	html += '<section class="case-study-section"><h2>Technologies</h2><div class="tech-tags">';
	study.tech.forEach(function (t) {
		html += '<span>' + t + '</span>';
	});
	html += '</div></section>';

	if (study.link) {
		html += '<div class="case-study-cta"><a href="' + study.link + '" target="_blank" class="btn-outline">Visit Site <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></a></div>';
	}

	container.innerHTML = html;
})();
