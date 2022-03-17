import { FC } from 'react';

export const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0 ,0 ,.3)',
        borderRadius: '5px',
        boxShadow: '4px 2px 2px rgba(0, 0, 0, .3)'
      }}
    >
      {children}
    </div>
  );
};
