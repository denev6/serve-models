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
		client: {start:"_app/immutable/entry/start.CdjJqyQF.js",app:"_app/immutable/entry/app.CeYCKcpM.js",imports:["_app/immutable/entry/start.CdjJqyQF.js","_app/immutable/chunks/BXTzUivX.js","_app/immutable/chunks/q-7iqr8h.js","_app/immutable/chunks/mM23yhBs.js","_app/immutable/entry/app.CeYCKcpM.js","_app/immutable/chunks/q-7iqr8h.js","_app/immutable/chunks/D6ngW7ju.js","_app/immutable/chunks/BaJEzMtw.js","_app/immutable/chunks/BwwZvEgN.js","_app/immutable/chunks/XhzqXTBR.js","_app/immutable/chunks/l2ZCfdtI.js","_app/immutable/chunks/KC7yPoGF.js","_app/immutable/chunks/mM23yhBs.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
