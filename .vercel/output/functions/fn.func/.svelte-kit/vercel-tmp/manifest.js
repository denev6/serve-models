export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.CUVt5vmt.js",app:"_app/immutable/entry/app.By4rQgCT.js",imports:["_app/immutable/entry/start.CUVt5vmt.js","_app/immutable/chunks/CcmEtpdP.js","_app/immutable/chunks/BWXxTf8G.js","_app/immutable/chunks/B5uyAoku.js","_app/immutable/entry/app.By4rQgCT.js","_app/immutable/chunks/BWXxTf8G.js","_app/immutable/chunks/BVVBNkK6.js","_app/immutable/chunks/DBumpeCZ.js","_app/immutable/chunks/Sh6D9Sbw.js","_app/immutable/chunks/Bn0vEv46.js","_app/immutable/chunks/CKbuhlrP.js","_app/immutable/chunks/OidFvExK.js","_app/immutable/chunks/B5uyAoku.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/test/api",
				pattern: /^\/test\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/test/api/_server.js'))
			},
			{
				id: "/test/api/image",
				pattern: /^\/test\/api\/image\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/test/api/image/_server.js'))
			},
			{
				id: "/test/api/text",
				pattern: /^\/test\/api\/text\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/test/api/text/_server.js'))
			}
		],
		prerendered_routes: new Set(["/","/mobilenet","/test/api-result","/test/api-result/__data.json","/test/elements","/test/img-post","/test/img-post/result","/test/log","/test/text-post"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
