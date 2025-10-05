
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
		RouteId(): "/" | "/blog" | "/blog/[slug]" | "/contact" | "/crypto-intro" | "/dashboard" | "/features" | "/landing" | "/nfts" | "/pricing" | "/trading-intro";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/blog": { slug?: string };
			"/blog/[slug]": { slug: string };
			"/contact": Record<string, never>;
			"/crypto-intro": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/features": Record<string, never>;
			"/landing": Record<string, never>;
			"/nfts": Record<string, never>;
			"/pricing": Record<string, never>;
			"/trading-intro": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/contact" | "/contact/" | "/crypto-intro" | "/crypto-intro/" | "/dashboard" | "/dashboard/" | "/features" | "/features/" | "/landing" | "/landing/" | "/nfts" | "/nfts/" | "/pricing" | "/pricing/" | "/trading-intro" | "/trading-intro/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}