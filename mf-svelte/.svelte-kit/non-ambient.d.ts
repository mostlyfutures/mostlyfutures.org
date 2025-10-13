
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
<<<<<<< HEAD
		RouteId(): "/" | "/contact" | "/crypto-intro" | "/dashboard" | "/features" | "/landing" | "/nfts" | "/pricing" | "/trading-intro";
=======
		RouteId(): "/" | "/ai-agent" | "/blog" | "/community" | "/contact" | "/crypto-intro" | "/dashboard" | "/data" | "/education" | "/features" | "/landing" | "/markets" | "/nfts" | "/peers" | "/pricing" | "/tools" | "/trading-intro";
>>>>>>> 910f9999 (Nav Bar Updated)
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/crypto-intro": Record<string, never>;
			"/dashboard": Record<string, never>;
<<<<<<< HEAD
=======
			"/data": Record<string, never>;
			"/education": Record<string, never>;
>>>>>>> 910f9999 (Nav Bar Updated)
			"/features": Record<string, never>;
			"/landing": Record<string, never>;
			"/nfts": Record<string, never>;
			"/peers": Record<string, never>;
			"/pricing": Record<string, never>;
			"/tools": Record<string, never>;
			"/trading-intro": Record<string, never>
		};
<<<<<<< HEAD
		Pathname(): "/" | "/contact" | "/contact/" | "/crypto-intro" | "/crypto-intro/" | "/dashboard" | "/dashboard/" | "/features" | "/features/" | "/landing" | "/landing/" | "/nfts" | "/nfts/" | "/pricing" | "/pricing/" | "/trading-intro" | "/trading-intro/";
=======
		Pathname(): "/" | "/ai-agent" | "/ai-agent/" | "/blog" | "/blog/" | "/community" | "/community/" | "/contact" | "/contact/" | "/crypto-intro" | "/crypto-intro/" | "/dashboard" | "/dashboard/" | "/data" | "/data/" | "/education" | "/education/" | "/features" | "/features/" | "/landing" | "/landing/" | "/markets" | "/markets/" | "/nfts" | "/nfts/" | "/peers" | "/peers/" | "/pricing" | "/pricing/" | "/tools" | "/tools/" | "/trading-intro" | "/trading-intro/";
>>>>>>> 910f9999 (Nav Bar Updated)
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}