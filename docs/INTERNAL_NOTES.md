# Internal Developer Notes

- Refactored the wallet connection hooks for cleaner state.
- Cleaned up some dead code in the utility helpers.
- Cleaned up some dead code in the utility helpers.
- Adjusting padding to align with design specs.
- Pushing work-in-progress state before context switch.
- Pushing work-in-progress state before context switch.
- Checked backward compatibility with older Celo RPC responses. The L2 migration changed some receipt fields.
- Checked backward compatibility with older Celo RPC responses. The L2 migration changed some receipt fields.
- Tested the NetworkEnforcer component with chain switching. Smooth on MiniPay, slight delay on MetaMask.
- Noticed the useBalance hook refetches on every block. Consider adding staleTime to reduce RPC load.
- The AppKit modal does not render in MiniPay WebView which is expected. Auto-connect via injected handles it.
- Tested cUSD approve + deposit flow on Celo mainnet. Gas estimates stable at ~45k per tx.
