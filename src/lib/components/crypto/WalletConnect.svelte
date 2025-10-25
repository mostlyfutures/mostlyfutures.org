<script lang="ts">
	import { wallet, connectWallet, disconnectWallet, checkWalletConnection } from '$lib/stores/auth';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { truncateAddress } from '$lib/utils/format';
	import { onMount } from 'svelte';

	let isConnecting = false;

	onMount(() => {
		checkWalletConnection();
	});

	$: $wallet.isConnected;
	$: address = $wallet.address;
</script>

<Card class="w-full max-w-md">
	<CardHeader>
		<CardTitle class="text-center">Connect Wallet</CardTitle>
		<CardDescription class="text-center">
			{#if $wallet.isConnected}
				Connected to {address ? truncateAddress(address) : 'Unknown'}
			{:else}
				Connect your wallet to track portfolio and set alerts
			{/if}
		</CardDescription>
	</CardHeader>
	<CardContent class="space-y-4">
		{#if $wallet.isConnected}
			<div class="text-center space-y-2">
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Chain ID: {$wallet.chainId || 'N/A'}
				</p>
				<Button on:click={disconnectWallet} variant="outline" class="w-full">
					Disconnect
				</Button>
			</div>
		{:else}
			<Button 
				on:click={async () => {
					isConnecting = true;
					try {
						await connectWallet();
					} finally {
						isConnecting = false;
					}
				}} 
				disabled={isConnecting}
				class="w-full"
			>
				{#if isConnecting}
					<span class="flex items-center space-x-2">
						<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Connecting...
					</span>
				{:else}
					Connect Wallet
				{/if}
			</Button>
			<div class="text-xs text-center text-gray-500 dark:text-gray-400">
				<p>Supports MetaMask, WalletConnect, and other Ethereum wallets</p>
			</div>
		{/if}
	</CardContent>
</Card>
