import React from 'react';
import { LeaderboardTable } from '../components/LeaderboardTable';

export const Leaderboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4 max-w-3xl mx-auto w-full">
      <header className="text-center mb-6 w-full">
        <h1 className="pixel-subtitle mb-3">Global&nbsp;ranking</h1>
        <p className="text-white/65 mb-3" style={{ fontSize: '15px', lineHeight: 1.35, maxWidth: '48ch', marginLeft: 'auto', marginRight: 'auto' }}>
          Scores verified by the GasGobblerScoreRegistry smart contract on the Celo blockchain.
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="sega-badge sega-badge--verified">
            <span aria-hidden="true">✓</span>
            <span>On-chain</span>
          </span>
          <a
            href="https://celoscan.io/address/0xf26ed81d52ae4a106344f5739d767e3d603f8370"
            target="_blank" rel="noopener noreferrer"
            className="sega-badge hover:border-secondary"
            aria-label="View registry contract on CeloScan"
          >
            <span aria-hidden="true">↗</span>
            <span>Celoscan</span>
          </a>
        </div>
      </header>

      <LeaderboardTable />
    </div>
  );
};
