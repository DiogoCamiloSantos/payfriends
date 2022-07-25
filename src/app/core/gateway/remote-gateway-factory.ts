import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RemoteGateway } from './remote.gateway';
import { AppContext } from '../context/app-context';

@Injectable()
export class RemoteGatewayFactory {

    constructor(
        private httpClient: HttpClient,
        private appContext: AppContext
    ) {
    }

    createDefaultRemoteGateway(): RemoteGateway {
        return new RemoteGateway(this.appContext.getBackendUrl(), this.httpClient);
    }

    createAuthRemoteGateway(): RemoteGateway {
        return null;
        // return new RemoteGateway(new AuthUrl('').getUrl(), this.httpClient);
    }
}