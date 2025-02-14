import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumYearnV2VaultTokenFetcher } from './arbitrum/yearn.v2-vault.token-fetcher';
import { YearnVaultTokenDefinitionsResolver } from './common/yearn.vault.token-definitions-resolver';
import { YearnContractFactory } from './contracts';
import { EthereumYearnGovernanceContractPositionFetcher } from './ethereum/yearn.governance.contract-position-fetcher';
import { EthereumYearnV1VaultTokenFetcher } from './ethereum/yearn.v1-vault.token-fetcher';
import { EthereumYearnV2VaultTokenFetcher } from './ethereum/yearn.v2-vault.token-fetcher';
import { EthereumYearnYCrvTokenTokenFetcher } from './ethereum/yearn.y-crv.token-fetcher';
import { EthereumYearnYieldTokenFetcher } from './ethereum/yearn.yield.token-fetcher';
import { FantomYearnV2VaultTokenFetcher } from './fantom/yearn.v2-vault.token-fetcher';
import { OptimismYearnV2VaultTokenFetcher } from './optimism/yearn.v2-vault.token-fetcher';

@Module({
  providers: [
    YearnContractFactory,
    // Helpers
    YearnVaultTokenDefinitionsResolver,
    // Arbitrum
    ArbitrumYearnV2VaultTokenFetcher,
    // Ethereum
    EthereumYearnGovernanceContractPositionFetcher,
    EthereumYearnV1VaultTokenFetcher,
    EthereumYearnV2VaultTokenFetcher,
    EthereumYearnYieldTokenFetcher,
    EthereumYearnYCrvTokenTokenFetcher,
    // Fantom
    FantomYearnV2VaultTokenFetcher,
    // Optimism
    OptimismYearnV2VaultTokenFetcher,
  ],
})
export class YearnAppModule extends AbstractApp() {}
