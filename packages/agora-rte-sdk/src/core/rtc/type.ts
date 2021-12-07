export enum AGNetworkQuality {
  unknown = 99,
  bad = 1,
  poor = 2,
  good = 3,
  great = 4,
}

export interface NetworkStats {
  packetLoss?: number;
  networkQuality?: AGNetworkQuality;
  cpu?: number;
  cpuTotal?: number;
  delay?: number;
}

export enum AGLocalTrackState {
  stopped,
  starting,
  started,
  error,
}

export enum RtcState {
  Idle = 0,
  Connecting = 1,
  Connected = 2,
  Reconnecting = 3,
}

export interface AGRtcDeviceInfo {
  deviceid: string;
  devicename: string;
}

export interface AGVideoEncoderConfigurations {
  width: number;
  height: number;
  frameRate: number;
  bitrate: number;
}

export enum AGMediaEncryptionMode {
  /** 1: (Default) 128-bit AES encryption, XTS mode.
   */
  AES_128_XTS = 1,
  /** 2: 128-bit AES encryption, ECB mode.
   */
  AES_128_ECB = 2,
  /** 3: 256-bit AES encryption, XTS mode.
   */
  AES_256_XTS = 3,
  /** 4: Reserved property.
   */
  SM4_128_ECB = 4,
  /** 5: 128-bit AES encryption, GCM mode.
   *
   * @since v3.3.1
   */
  AES_128_GCM = 5,
  /** 6: 256-bit AES encryption, GCM mode.
   *
   * @since v3.3.1
   */
  AES_256_GCM = 6,
}

export interface AGMediaEncryptionConfig {
  mode: AGMediaEncryptionMode;
  key: string;
}

export enum AGScreenShareType {
  Window = 0,
  Screen = 1,
}

export interface AGScreenShareDevice {
  id: string;
  title: string;
  type: AGScreenShareType;
  image: Uint8Array;
  //only available for window type
  isCurrent?: boolean;
}

export enum AGRenderMode {
  fit,
  fill,
}