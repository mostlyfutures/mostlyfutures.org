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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/crypto-intro",
				pattern: /^\/crypto-intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/grant-ai",
				pattern: /^\/grant-ai\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/landing",
				pattern: /^\/landing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/nfts",
				pattern: /^\/nfts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/quizgen",
				pattern: /^\/quizgen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/trading-intro",
				pattern: /^\/trading-intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
