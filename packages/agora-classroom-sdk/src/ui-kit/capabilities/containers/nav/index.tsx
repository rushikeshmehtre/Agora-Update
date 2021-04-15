import { useRoomStore, useUIStore } from '@/hooks'
import { BizHeader } from '~ui-kit'
import { observer } from 'mobx-react'
import React, { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRecordingContext } from '~capabilities/hooks'
import { Exit, Record } from '~capabilities/containers/dialog'
import { SettingContainer } from '~capabilities/containers/setting'

export const NavigationBar: React.FC<any> = observer(() => {

  const roomStore = useRoomStore()

  const navigationState = roomStore.navigationState

  const uiStore = useUIStore()

  const {
    isRecording
  } = useRecordingContext()

  const handleClick = useCallback(async (type: string) => {
    switch (type) {
      case 'exit': {
        uiStore.addDialog(Exit)
        break
      }
      case 'record': {
        uiStore.addDialog(Record, {id: uuidv4(), starting: !isRecording})
        break
      }
      case 'setting': {
        uiStore.addDialog(SettingContainer)
        // uiStore.setVisibleSetting(true)
        break
      }
      case 'courseControl': {
        console.log('courseControl')
        break
      }
    }
  }, [navigationState.isStarted, uiStore, isRecording])

  return (
    <BizHeader
      isNative={navigationState.isNative}
      classStatusText={navigationState.classTimeText}
      isStarted={navigationState.isStarted}
      isRecording={isRecording}
      title={navigationState.title}
      signalQuality={navigationState.signalQuality}
      monitor={{
        cpuUsage: navigationState.cpuUsage,
        networkLatency: navigationState.networkLatency,
        networkQuality: navigationState.networkQuality,
        packetLostRate: navigationState.packetLostRate,
      }}
      onClick={handleClick}
    />
  )
})