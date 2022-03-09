import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/crypto_tomb_cash.svg';
import tShareLogo from '../../assets/img/crypto_tomb_share.svg';
import tombLogoPNG from '../../assets/img/crypto_tomb_cash.f2b44ef4.png';
import tShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import tBondLogo from '../../assets/img/crypto_tomb_bond.svg';

import tombFtmLpLogo from '../../assets/img/tomb_ftm_lp.png';
import tshareFtmLpLogo from '../../assets/img/tshare_ftm_lp.png';

import wftmLogo from '../../assets/img/fantom-ftm-logo.png';
import usdcLogo from '../../assets/img/USDC.png';
import ethLogo from '../../assets/img/weth.png';
import guardianshieldLogo from '../../assets/img/comet-meteor-lp.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  GUARDIAN: tombLogo,
  GUARDIANPNG: tombLogoPNG,
  SHIELDPNG: tShareLogoPNG,
  SHIELD: tShareLogo,
  GBOND: tBondLogo,
  WFTM: wftmLogo,
  USDC: usdcLogo,
  ETH: ethLogo,
  'GUARDIAN-FTM-LP': tombFtmLpLogo,
  'SHIELD-FTM-LP': tshareFtmLpLogo,
  'GUARDIAN-SHIELD-LP': guardianshieldLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 110 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
