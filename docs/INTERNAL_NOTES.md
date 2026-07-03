# Internal Developer Notes

- Reviewed gas price oracle behavior on Celo. Since the Gingerbread upgrade, EIP-1559 is the default.
- Noticed the useBalance hook refetches on every block. Consider adding staleTime to reduce RPC load.
- The escrow contract refund timeout (7 days) seems appropriate for freelance gig markets.
- Checked backward compatibility with older Celo RPC responses. The L2 migration changed some receipt fields.
- Tested cUSD approve + deposit flow on Celo mainnet. Gas estimates stable at ~45k per tx.
- Tested cUSD approve + deposit flow on Celo mainnet. Gas estimates stable at ~45k per tx.
- Framer Motion animations perform well on low-end Android devices commonly used with MiniPay.
- Reviewed component tree performance after adding MiniPayBar, no measurable regression.
