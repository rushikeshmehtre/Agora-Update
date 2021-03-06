import { DialogCategory } from 'agora-edu-core';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { ReactNode } from 'react';
import { CloudDriverContainer } from '~containers/cloud-driver';
import { RoomDeviceSettingContainer } from '~containers/device-setting';
import { useStore } from '~hooks/use-edu-stores';
import { RosterContainer } from '../roster/user-list';
import { LectureRosterContainer } from '../roster/lecture-user-list';
import { Confirm } from './confirm';
import { GenericErrorDialog } from './error-generic';
import { KickOut } from './kick-out';
import { ScreenPickerDialog } from './screen-picker';

const getDialog = (category: DialogCategory, id: string, props?: any): ReactNode => {
  switch (category) {
    case DialogCategory.CloudDriver:
      return <CloudDriverContainer {...props} id={id} />;
    case DialogCategory.Roster:
      return <RosterContainer {...props} id={id} />;
    case DialogCategory.LectureRoster:
      return <LectureRosterContainer {...props} id={id} />;
    case DialogCategory.KickOut:
      return <KickOut {...props} id={id} />;
    case DialogCategory.ErrorGeneric:
      // props should come after id so that props can override id
      return <GenericErrorDialog id={id} {...props} />;
    case DialogCategory.Confirm:
      return <Confirm {...props} id={id} />;
    case DialogCategory.DeviceSetting:
      return <RoomDeviceSettingContainer {...props} id={id} />;
    case DialogCategory.ScreenPicker:
      return <ScreenPickerDialog {...props} id={id} />;
  }
};

export type BaseDialogProps = {
  id: string;
};

export const DialogContainer: React.FC<unknown> = observer(() => {
  const { shareUIStore } = useStore();
  const { dialogQueue } = shareUIStore;

  const cls = classnames({
    [`rc-mask`]: !!dialogQueue.length,
  });

  return (
    <div className={cls}>
      {dialogQueue.map(({ id, category, props }) => (
        <div key={id} className="fixed-container">
          {getDialog(category, id, props)}
        </div>
      ))}
    </div>
  );
});
