import React, { FC } from 'react';
import classnames from 'classnames';
import { BaseProps } from '~ui-kit/components/interface/base-props';
import { Progress } from '~components/progress';
import { Icon } from '~components/icon';
import { transI18n } from '../i18n';
import './index.css';

import loadingGif from './assets/loading.gif';
import circleLoadingGif from './assets/circle-loading.gif';
import { SvgImg } from '~ui-kit';

export interface UploadItem {
  iconType?: string;
  fileName?: string;
  fileSize?: string;
  uploadComplete?: boolean;
  currentProgress?: number; // 当uploadComplete为true时生效
}

export interface LoadingProps extends BaseProps {
  hasLoadingGif?: boolean;
  loadingText?: string;
  hasProgress?: boolean;
  currentProgress?: number; // 当hasProgress为true时生效
  footer?: React.ReactNode[];
  uploadItemList?: UploadItem[];
  onClick?: (id: string, type: 'delete' | 'click') => void;
  noCloseBtn?: boolean;
}

export interface CircleLoadingProps extends BaseProps {
  width?: string;
  height?: string;
}

export const Loading: FC<LoadingProps> = ({
  hasLoadingGif = true,
  loadingText = '',
  hasProgress = false,
  currentProgress = 50,
  footer = [],
  uploadItemList = [],
  className,
  onClick,
  noCloseBtn,
  ...restProps
}) => {
  const cls = classnames({
    [`loading`]: 1,
    [`${className}`]: !!className,
  });
  return (
    <div className={cls} {...restProps}>
      {hasLoadingGif ? (
        <img
          src={loadingGif}
          width="60"
          height="60"
          style={{ marginBottom: 4 }}
          alt="loading gif"
        />
      ) : (
        ''
      )}
      {loadingText ? <span className="loading-text">{loadingText}</span> : ''}
      {hasProgress ? (
        <div className="loading-progress">
          <Progress width={160} type="download" progress={currentProgress} />
          <span className="loading-progress-number">{currentProgress}%</span>
        </div>
      ) : (
        ''
      )}
      {uploadItemList && uploadItemList.length ? (
        <div className="loading-upload-list">
          {uploadItemList.map((item, index) => (
            <div className="loading-upload-item" key={index}>
              <div>
                <SvgImg type={item.iconType as any} style={{ color: '#F6B081' }} />
              </div>
              <div className="loading-file-name">{item.fileName}</div>
              <div className="loading-file-size">{item.fileSize}</div>
              <div>
                {item.uploadComplete ? (
                  <div className="loading-progress">
                    <Progress
                      width={60}
                      type="download"
                      progress={item.currentProgress as number}
                    />
                    <span className="upload-pending-text">{item.currentProgress}%</span>
                    <span className="upload-success-text">
                      {transI18n('whiteboard.converting')}
                    </span>
                  </div>
                ) : (
                  <div className="loading-progress">
                    <Progress
                      width={60}
                      type="download"
                      progress={item.currentProgress as number}
                    />
                    <span className="upload-pending-text">{item.currentProgress}%</span>
                  </div>
                )}
              </div>
              <div>
                {noCloseBtn ? (
                  ''
                ) : (
                  <SvgImg
                    type="delete"
                    style={{
                      marginLeft: 60,
                      cursor: 'pointer',
                      color: '#273D75',
                    }}
                    onClick={() => onClick && onClick(index.toString(), 'delete')}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {footer && footer.length ? (
        <div className="loading-btn-line">
          {footer.map((item: any, index) => (
            <span key={index} style={{ margin: '0px 5px' }}>
              {React.cloneElement(item, {})}
            </span>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export const CircleLoading: FC<CircleLoadingProps> = ({ width = '60', height = '60' }) => {
  return <img src={circleLoadingGif} width={width} height={height} style={{}} alt="loading gif" />;
};
