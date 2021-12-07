import { EduStoreBase } from '../base';
import { AGEduErrorCode, EduErrorCenter } from '../../../../utils/error';
import { EduClassroomConfig } from '../../../..';
import { bound } from 'agora-rte-sdk';

export class HandUpStore extends EduStoreBase {
  @bound
  async onPodium(userUuid: string) {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.acceptHandsUp({
        roomUuid: sessionInfo.roomUuid,
        toUserUuid: userUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_ACCEPT_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async offPodium(userUuid: string) {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.revokeCoVideo({
        roomUuid: sessionInfo.roomUuid,
        toUserUuid: userUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_OFF_PODIUM_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async offPodiumAll() {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.revokeAllCoVideo({
        roomUuid: sessionInfo.roomUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_OFF_PODIUM_ALL_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async rejectHandUp(userUuid: string) {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.refuseHandsUp({
        roomUuid: sessionInfo.roomUuid,
        toUserUuid: userUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_REJECT_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async cancelHandUp() {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.cancelHandsUp({
        roomUuid: sessionInfo.roomUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_CANCEL_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async handUp(teacherUuid: string) {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.startHandsUp({
        roomUuid: sessionInfo.roomUuid,
        toUserUuid: teacherUuid,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_HAND_UP_FAIL,
        err as Error,
      );
    }
  }

  @bound
  async waveArm(teacherUuid: string, duration: -1 | 3) {
    const { sessionInfo } = EduClassroomConfig.shared;
    try {
      await this.api.waveArm({
        roomUuid: sessionInfo.roomUuid,
        toUserUuid: teacherUuid,
        timout: duration,
        retry: true,
      });
    } catch (err) {
      EduErrorCenter.shared.handleThrowableError(
        AGEduErrorCode.EDU_ERR_HAND_UP_WAVE_FAIL,
        err as Error,
      );
    }
  }

  onInstall() {}
  onDestroy() {}
}