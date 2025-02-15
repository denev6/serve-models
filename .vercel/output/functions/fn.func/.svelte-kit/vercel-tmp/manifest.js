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
		client: {start:"_app/immutable/entry/start.t49mYYko.js",app:"_app/immutable/entry/app.AnmrJzNG.js",imports:["_app/immutable/entry/start.t49mYYko.js","_app/immutable/chunks/DDEkrzKO.js","_app/immutable/chunks/BmosVzqU.js","_app/immutable/chunks/BWH4WX17.js","_app/immutable/entry/app.AnmrJzNG.js","_app/immutable/chunks/BmosVzqU.js","_app/immutable/chunks/BIkekS2W.js","_app/immutable/chunks/vMUy-l4-.js","_app/immutable/chunks/B-pjV1An.js","_app/immutable/chunks/BYI5g8cN.js","_app/immutable/chunks/B0byTeBw.js","_app/immutable/chunks/C6th5xYc.js","_app/immutable/chunks/BWH4WX17.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_server.js'))
			},
			{
				id: "/api/image",
				pattern: /^\/api\/image\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/image/_server.js'))
			},
			{
				id: "/api/text",
				pattern: /^\/api\/text\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/text/_server.js'))
			}
		],
		prerendered_routes: new Set(["/","/api-result","/api-result/__data.json","/elements","/img-post","/img-post/__data.json","/img-post/result","/test-log","/text-post","/text-post/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
