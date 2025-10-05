
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
		RouteId(): "/" | "/ai-agent" | "/blog" | "/community" | "/contact" | "/crypto-intro" | "/dashboard" | "/education" | "/features" | "/landing" | "/nfts" | "/pricing" | "/trading-intro";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/ai-agent": Record<string, never>;
			"/blog": Record<string, never>;
			"/community": Record<string, never>;
			"/contact": Record<string, never>;
			"/crypto-intro": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/education": Record<string, never>;
			"/features": Record<string, never>;
			"/landing": Record<string, never>;
			"/nfts": Record<string, never>;
			"/pricing": Record<string, never>;
			"/trading-intro": Record<string, never>
		};
		Pathname(): "/" | "/ai-agent" | "/ai-agent/" | "/blog" | "/blog/" | "/community" | "/community/" | "/contact" | "/contact/" | "/crypto-intro" | "/crypto-intro/" | "/dashboard" | "/dashboard/" | "/education" | "/education/" | "/features" | "/features/" | "/landing" | "/landing/" | "/nfts" | "/nfts/" | "/pricing" | "/pricing/" | "/trading-intro" | "/trading-intro/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | string & {};
	}
}