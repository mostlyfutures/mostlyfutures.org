/**
 * Authentication Store
 * Manages wallet connection and user session
 */

import { writable } from 'svelte/store';
import { createPublicClient, http } from 'viem';
import { mainnet, polygon, arbitrum } from 'viem/chains';

export interface WalletState {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  chains: any[];
}

const initialState: WalletState = {
  address: null,
  chainId: null,
  isConnected: false,
  chains: [mainnet, polygon, arbitrum]
};

export const wallet = writable<WalletState>(initialState);

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
});

// Wallet connection functions
export async function connectWallet() {
  if (typeof window === 'undefined' || !window.ethereum) {
    alert('Please install MetaMask!');
    return;
  }

  try {
    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    const address = accounts[0] as string;

    // Get chain ID
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    wallet.set({
      address,
      chainId: parseInt(chainId, 16),
      isConnected: true,
      chains: initialState.chains
    });

    // Listen for account changes
    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        wallet.update(state => ({
          ...state,
          address: accounts[0]
        }));
      }
    });

    // Listen for chain changes
    window.ethereum.on('chainChanged', (chainId: string) => {
      wallet.update(state => ({
        ...state,
        chainId: parseInt(chainId, 16)
      }));
    });

  } catch (error) {
    console.error('Failed to connect wallet:', error);
    alert('Failed to connect wallet');
  }
}

export function disconnectWallet() {
  wallet.set(initialState);
  if (window.ethereum) {
    window.ethereum.removeAllListeners();
  }
}

// Check if wallet is already connected
export async function checkWalletConnection() {
  if (typeof window === 'undefined' || !window.ethereum) return;

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    });

    if (accounts.length > 0) {
      const address = accounts[0] as string;
      const chainId = await window.ethereum.request({
        method: 'eth_chainId'
      });

      wallet.set({
        address,
        chainId: parseInt(chainId, 16),
        isConnected: true,
        chains: initialState.chains
      });
    }
  } catch (error) {
    console.error('Error checking wallet connection:', error);
  }
}
