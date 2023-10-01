import { Track } from './Track';
export default abstract class RemoteTrack extends Track {
    /** @internal */
    receiver?: RTCRtpReceiver;
    constructor(mediaTrack: MediaStreamTrack, sid: string, kind: Track.Kind, receiver?: RTCRtpReceiver);
    /** @internal */
    setMuted(muted: boolean): void;
    /** @internal */
    setMediaStream(stream: MediaStream): void;
    start(): void;
    stop(): void;
    /**
     * Gets the RTCStatsReport for the RemoteTrack's underlying RTCRtpReceiver
     * See https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport
     *
     * @returns Promise<RTCStatsReport> | undefined
     */
    getRTCStatsReport(): Promise<RTCStatsReport | undefined>;
    startMonitor(): void;
    protected abstract monitorReceiver(): void;
}
//# sourceMappingURL=RemoteTrack.d.ts.map
