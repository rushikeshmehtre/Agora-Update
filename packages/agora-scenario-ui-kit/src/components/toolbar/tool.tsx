import React, { FC, ReactEventHandler } from 'react';
import { t } from '~components/i18n';
import { IconTypes } from '~components/icon';
import { Tooltip } from '~components/tooltip';
import { SvgIcon } from '~components/svg-img';

export interface ToolItem {
  value: string;
  label: any;
  icon: IconTypes;
  isActive?: boolean;
  hover?: boolean;
  component?: React.FC<{
    isActive: boolean;
    onClick: ReactEventHandler<any>;
    hover?: boolean;
  }>;
}
export interface ToolProps extends ToolItem {
  onClick?: (value: string) => void;
}

export const Tool: FC<ToolProps> = (props) => {
  const {
    hover,
    value,
    label,
    icon,
    isActive = false,
    onClick = console.log.bind(`click ${props.value}`),
    component: Component,
  } = props;

  const handleToolClick = (value: any) => {
    onClick(value);
  };

  return (
    <>
      {Component ? (
        <Component isActive={isActive} hover={hover} onClick={handleToolClick} />
      ) : (
        <Tooltip
          title={t(label)}
          placement="bottomLeft"
          overlayClassName="translated-tooltip"
          align={{
            offset: [30, 0],
          }}>
          <div className={`tool`}>
            {icon ? (
              <SvgIcon
                type={isActive ? icon + '-active' : icon}
                hoverType={icon + '-active'}
                canHover
                onClick={() => handleToolClick && handleToolClick(value)}
              />
            ) : null}
          </div>
        </Tooltip>
      )}
    </>
  );
};
