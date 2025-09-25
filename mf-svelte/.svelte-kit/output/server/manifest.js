export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.D1OkWpRv.js",app:"_app/immutable/entry/app.DPcxMclb.js",imports:["_app/immutable/entry/start.D1OkWpRv.js","_app/immutable/chunks/FS8Is1AC.js","_app/immutable/chunks/DOdexuEM.js","_app/immutable/chunks/DBUHywIO.js","_app/immutable/chunks/2BQ64Kpd.js","_app/immutable/entry/app.DPcxMclb.js","_app/immutable/chunks/DBUHywIO.js","_app/immutable/chunks/2BQ64Kpd.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DOdexuEM.js","_app/immutable/chunks/DoVGgqwx.js","_app/immutable/chunks/DGmOwPvt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/contact","/crypto-intro","/grant-ai","/landing","/nfts","/quizgen","/trading-intro"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
