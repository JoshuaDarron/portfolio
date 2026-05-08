// Blog post data + rendering
var blogPosts = {
	'example-post': {
		title: 'Building Privacy-First AI Systems',
		date: '2026-03-01',
		excerpt: 'Exploring the principles and patterns behind designing AI systems that prioritize user privacy and data ownership.',
		content: [
			{ type: 'p', text: 'Privacy-first AI is more than a buzzword. It is a fundamental shift in how we think about data and machine learning systems. In this post, I walk through the key principles I have learned building data-intensive platforms.' },
			{ type: 'h2', text: 'Why Privacy Matters in AI' },
			{ type: 'p', text: 'As AI systems become more prevalent, the question of who owns the data, and who benefits from it, becomes increasingly important. Users deserve transparency and control over how their information is used.' },
			{ type: 'h2', text: 'Practical Patterns' },
			{ type: 'p', text: 'Local-first architectures, federated learning, and differential privacy are all tools in the privacy-first toolkit. The key is choosing the right approach for your specific use case and constraints.' },
			{ type: 'h2', text: 'Looking Ahead' },
			{ type: 'p', text: 'The future of AI is one where powerful capabilities and strong privacy guarantees coexist. It\'s an exciting time to be building in this space.' }
		]
	}
};

(function () {
	// Render blog listing on index page
	var grid = document.getElementById('blogGrid');
	if (grid) {
		Object.keys(blogPosts).forEach(function (slug) {
			var post = blogPosts[slug];
			var card = document.createElement('div');
			card.className = 'blog-card reveal';

			var a = document.createElement('a');
			a.href = '/blog/' + slug + '/';

			var h3 = document.createElement('h3');
			h3.textContent = post.title;
			a.appendChild(h3);

			var date = document.createElement('p');
			date.className = 'blog-date';
			date.textContent = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
			a.appendChild(date);

			var p = document.createElement('p');
			p.textContent = post.excerpt;
			a.appendChild(p);

			card.appendChild(a);
			grid.appendChild(card);
		});
	}

	// Render blog post detail on blog-post.html
	var articleEl = document.getElementById('blogArticle');
	if (articleEl) {
		var slug = new URLSearchParams(window.location.search).get('slug');
		if (!slug) {
			var m = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
			if (m) slug = m[1];
		}

		if (!slug || !blogPosts[slug]) {
			articleEl.innerHTML = '<h1>Post not found</h1><p>The requested blog post doesn\'t exist.</p><a href="./index.html#blog" class="btn-outline">Back to Blog</a>';
			return;
		}

		var post = blogPosts[slug];
		document.title = post.title + ' | Joshua D. Phillips';

		var titleEl = document.createElement('h1');
		titleEl.textContent = post.title;
		articleEl.appendChild(titleEl);

		var dateEl = document.createElement('p');
		dateEl.className = 'blog-date';
		dateEl.textContent = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
		articleEl.appendChild(dateEl);

		post.content.forEach(function (block) {
			var el = document.createElement(block.type);
			el.textContent = block.text;
			articleEl.appendChild(el);
		});
	}
})();
