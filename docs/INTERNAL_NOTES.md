# Internal Developer Notes

- Reviewed gas price oracle behavior on Celo. Since the Gingerbread upgrade, EIP-1559 is the default.
- Noticed the useBalance hook refetches on every block. Consider adding staleTime to reduce RPC load.
- The escrow contract refund timeout (7 days) seems appropriate for freelance gig markets.
