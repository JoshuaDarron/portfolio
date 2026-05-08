// CloudFront Function (viewer-request).
// Constraints: ES5.1, no async, no fetch, no requires.
//   1) 301 legacy *.html?param=... URLs to clean paths.
//   2) Rewrite clean paths to existing *.html files at origin (browser bar stays clean).
//   3) Force trailing slash on directory-style URLs.

function handler(event) {
    var req = event.request;
    var uri = req.uri;
    var qs = req.querystring || {};

    function redirect(to) {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { location: { value: to } }
        };
    }

    // 1) Legacy query-string URLs → 301 to clean shape
    if (uri === '/index.html') return redirect('/');
    if (uri === '/experience.html' && qs.company) {
        return redirect('/experience/' + qs.company.value + '/');
    }
    if (uri === '/case-study.html' && qs.project) {
        return redirect('/portfolio/' + qs.project.value + '/');
    }
    if (uri === '/blog-post.html' && qs.slug) {
        return redirect('/blog/' + qs.slug.value + '/');
    }

    // 2) Clean URLs → rewrite origin path to existing HTML.
    //    The browser address bar is unchanged; only the request to S3 is.
    var expM = uri.match(/^\/experience\/([^/]+)\/?$/);
    if (expM) {
        if (!uri.endsWith('/')) return redirect('/experience/' + expM[1] + '/');
        req.uri = '/experience.html';
        return req;
    }

    var portM = uri.match(/^\/portfolio\/([^/]+)\/?$/);
    if (portM) {
        if (!uri.endsWith('/')) return redirect('/portfolio/' + portM[1] + '/');
        req.uri = '/case-study.html';
        return req;
    }

    var blogM = uri.match(/^\/blog\/([^/]+)\/?$/);
    if (blogM) {
        if (!uri.endsWith('/')) return redirect('/blog/' + blogM[1] + '/');
        req.uri = '/blog-post.html';
        return req;
    }

    return req;
}
