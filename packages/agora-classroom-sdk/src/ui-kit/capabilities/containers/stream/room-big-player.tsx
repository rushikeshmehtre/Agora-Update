import { useRef, useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { useLectureUIStores } from '~hooks/use-edu-stores';
import { EduRoleTypeEnum } from 'agora-edu-core';
import { EduLectureUIStore } from '@/infra/stores/lecture';
import { StreamPlayer, StreamPlaceholder, CarouselGroup, NavGroup } from '.';

export const RoomBigTeacherStreamContainer = observer(() => {
  const { streamUIStore } = useLectureUIStores() as EduLectureUIStore;
  const { teacherCameraStream, teacherVideoStreamSize } = streamUIStore;
  const teacherStreamContainer = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="teacher-stream-container flex flex-col"
      style={{
        marginBottom: -2,
      }}
      ref={teacherStreamContainer}>
      {teacherCameraStream ? (
        <StreamPlayer stream={teacherCameraStream} style={teacherVideoStreamSize}></StreamPlayer>
      ) : (
        <StreamPlaceholder role={EduRoleTypeEnum.teacher} style={teacherVideoStreamSize} />
      )}
    </div>
  );
});

export const RoomBigStudentStreamsContainer = observer(() => {
  const { streamUIStore } = useLectureUIStores() as EduLectureUIStore;
  const { studentVideoStreamSize, carouselNext, carouselPrev, scrollable, gap, carouselStreams } =
    streamUIStore;
  const [navigationVisible, setNavigationVisible] = useState(false);

  const mouseHandler = useCallback(
    (visible) => () => {
      setNavigationVisible(visible);
    },
    [],
  );

  return (
    <div
      className="flex-grow relative"
      onMouseEnter={mouseHandler(true)}
      onMouseLeave={mouseHandler(false)}
      style={{ marginTop: 2, marginBottom: 2, height: studentVideoStreamSize.height }}>
      {scrollable && (
        <NavGroup visible={navigationVisible} onPrev={carouselPrev} onNext={carouselNext} />
      )}
      <div className="flex-grow flex justify-center relative">
        <CarouselGroup
          gap={gap}
          videoWidth={studentVideoStreamSize.width}
          videoHeight={studentVideoStreamSize.height}
          carouselStreams={carouselStreams}
        />
      </div>
    </div>
  );
});
