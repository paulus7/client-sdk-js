import type TypedEmitter from 'typed-emitter';
import { CheckInfo, CheckStatus, Checker, InstantiableCheck } from './checks/Checker';
export type { CheckInfo, CheckStatus };
declare const ConnectionCheck_base: new () => TypedEmitter<ConnectionCheckCallbacks>;
export declare class ConnectionCheck extends ConnectionCheck_base {
    token: string;
    url: string;
    private checkResults;
    constructor(url: string, token: string);
    private getNextCheckId;
    private updateCheck;
    isSuccess(): boolean;
    getResults(): CheckInfo[];
    createAndRunCheck<T extends Checker>(check: InstantiableCheck<T>): Promise<CheckInfo>;
    checkWebsocket(): Promise<CheckInfo>;
    checkWebRTC(): Promise<CheckInfo>;
    checkTURN(): Promise<CheckInfo>;
    checkReconnect(): Promise<CheckInfo>;
    checkPublishAudio(): Promise<CheckInfo>;
    checkPublishVideo(): Promise<CheckInfo>;
}
type ConnectionCheckCallbacks = {
    checkUpdate: (id: number, info: CheckInfo) => void;
};
//# sourceMappingURL=ConnectionCheck.d.ts.map
