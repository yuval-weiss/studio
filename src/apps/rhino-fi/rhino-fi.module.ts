import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { RhinoFiApiClient } from './common/rhino-fi.api-client';
import { RhinoFiCacheManager } from './common/rhino-fi.cache-manager';
import { RhinoFiContractFactory } from './contracts';
import { EthereumRhinoFiBridgeContractPositionFetcher } from './ethereum/rhino-fi.bridge.contract-position-fetcher';
import { EthereumRhinoFiDepositContractPositionFetcher } from './ethereum/rhino-fi.deposit.contract-position-fetcher';

@Module({
  providers: [
    RhinoFiContractFactory,
    RhinoFiCacheManager,
    RhinoFiApiClient,
    EthereumRhinoFiBridgeContractPositionFetcher,
    EthereumRhinoFiDepositContractPositionFetcher,
  ],
})
export class RhinoFiAppModule extends AbstractApp() {}
