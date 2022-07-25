import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Account } from "../domain/account/account";
import { AbstractParser } from "../parser/base/abstract.parser";

const USER_CREDENTIAL_KEY = `user-credential-${environment.appName}`;

@Injectable()
export class AppContext {
    private userCredential: StorageEntry<Account>;
    constructor() {
        this.userCredential = new LocalStorageEntry<Account>(USER_CREDENTIAL_KEY);
    }

    public setUserCredential(credential: Account) {
        this.userCredential.set(credential);
    }

    public getUserCredential(): Account | null {
        return this.userCredential.get();
    }

    public getBackendUrl(): string {
        return environment.backendUrl;
    }

    public clearUserCredential() {
        this.userCredential.remove();
    }
}

abstract class StorageEntry<T> {
    protected constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null,
        private storage: Storage
    ) { }

    protected parse(entity): T | null {
        return this.parser.parse(entity);
    }

    get(): T | null {
        const entity = this.storage.getItem(this.key);
        if (entity) {
            const entityJson = JSON.parse(entity);
            if (this.parser) {
                return Array.isArray(entityJson)
                    ? this.parser.parseList(entityJson)
                    : this.parser.parse(entityJson);
            }
            return entityJson;
        }
        return null;
    }

    set(item: T) {
        this.storage.setItem(this.key, JSON.stringify(item));
    }

    remove() {
        this.storage.removeItem(this.key);
    }
}

class LocalStorageEntry<T> extends StorageEntry<T> {
    constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, localStorage);
    }
}

class SessionStorageEntry<T> extends StorageEntry<T> {
    constructor(
        protected key: string,
        protected parser: AbstractParser<T> | any = null
    ) {
        super(key, parser, sessionStorage);
    }
}
