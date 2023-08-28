export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","global.css","green_circle_192.png","green_circle_512.png","site.webmanifest","sw.dev.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".css":"text/css",".webmanifest":"application/manifest+json",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.83752d57.js","app":"_app/immutable/entry/app.741b8fb8.js","imports":["_app/immutable/entry/start.83752d57.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.a9296cf4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.741b8fb8.js","_app/immutable/chunks/scheduler.f585318a.js","_app/immutable/chunks/index.bc0e1543.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create",
				pattern: /^\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
