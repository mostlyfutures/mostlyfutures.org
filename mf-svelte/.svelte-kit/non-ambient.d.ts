
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
		RouteId(): "/" | "/contact" | "/crypto-intro" | "/grant-ai" | "/landing" | "/nfts" | "/quizgen" | "/trading-intro";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contact": Record<string, never>;
			"/crypto-intro": Record<string, never>;
			"/grant-ai": Record<string, never>;
			"/landing": Record<string, never>;
			"/nfts": Record<string, never>;
			"/quizgen": Record<string, never>;
			"/trading-intro": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/contact/" | "/crypto-intro" | "/crypto-intro/" | "/grant-ai" | "/grant-ai/" | "/landing" | "/landing/" | "/nfts" | "/nfts/" | "/quizgen" | "/quizgen/" | "/trading-intro" | "/trading-intro/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}