import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function EditAccount({
  color = '#080808',
  strokeWidth = 1.5,
}: {
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg width={16} height={15} viewBox="0 0 16 15" fill="none">
      <Path d="M9.38215 2.09022C9.87894 1.55197 10.1273 1.28285 10.3913 1.12587C11.0282 0.747091 11.8124 0.735313 12.4599 1.0948C12.7283 1.24379 12.9843 1.50533 13.4964 2.02843C14.0084 2.55152 14.2645 2.81307 14.4103 3.0872C14.7622 3.74866 14.7507 4.54978 14.3799 5.20039C14.2262 5.47002 13.9628 5.72377 13.4359 6.23126L7.16676 12.2694C6.16826 13.2312 5.66901 13.712 5.04505 13.9557C4.42109 14.1995 3.73514 14.1815 2.36325 14.1456L2.17659 14.1408C1.75894 14.1298 1.55012 14.1244 1.42873 13.9866C1.30734 13.8489 1.32392 13.6361 1.35706 13.2107L1.37506 12.9797C1.46835 11.7823 1.51499 11.1836 1.74881 10.6454C1.98263 10.1072 2.38596 9.67023 3.19263 8.79625L9.38215 2.09022Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <Path d="M8.6665 2.1665L13.3332 6.83317" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />  
      <Path d="M9.33301 14.1665L14.6663 14.1665" stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

