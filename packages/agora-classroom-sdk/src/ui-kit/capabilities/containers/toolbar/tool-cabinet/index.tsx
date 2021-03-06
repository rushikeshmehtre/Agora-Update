import { observer } from 'mobx-react';
import { useStore } from '~hooks/use-edu-stores';
import { SvgImg, t, ToolCabinet } from '~ui-kit';

export const ToolCabinetContainer = observer(() => {
  const { toolbarUIStore } = useStore();
  const { cabinetItems, activeCabinetItem, handleCabinetItem } = toolbarUIStore;

  let mappedItems = cabinetItems.map((item) => {
    const { id, icon, iconType, name } = item;
    return {
      id,
      icon: icon ? (
        icon
      ) : (
        <SvgImg
          style={{ marginBottom: 12, transform: 'translateY(5px)' }}
          type={iconType}
          size={24}
        />
      ),
      name,
    };
  });

  return (
    <ToolCabinet
      value="tools"
      label={t('scaffold.tools')}
      icon="tools"
      cabinetList={mappedItems}
      onClick={handleCabinetItem}
      activeItem={activeCabinetItem}
    />
  );
});
