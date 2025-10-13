export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
<<<<<<< HEAD
	() => import('./nodes/10')
=======
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
>>>>>>> 910f9999 (Nav Bar Updated)
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
<<<<<<< HEAD
		"/contact": [3],
		"/crypto-intro": [4],
		"/dashboard": [5],
		"/features": [6],
		"/landing": [7],
		"/nfts": [8],
		"/pricing": [9],
		"/trading-intro": [10]
=======
		"/ai-agent": [3],
		"/blog": [4],
		"/community": [5],
		"/contact": [6],
		"/crypto-intro": [7],
		"/dashboard": [8],
		"/data": [9],
		"/education": [10],
		"/features": [11],
		"/landing": [12],
		"/markets": [13],
		"/nfts": [14],
		"/peers": [15],
		"/pricing": [16],
		"/tools": [17],
		"/trading-intro": [18]
>>>>>>> 910f9999 (Nav Bar Updated)
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';