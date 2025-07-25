import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function LogoutIcon({
  color = '#080808',
  strokeWidth = 1.5,
}: {
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path d="M13 15.625C12.9264 17.4769 11.3831 19.0494 9.31564 18.9988C8.83465 18.987 8.24013 18.8194 7.05112 18.484C4.18961 17.6768 1.70555 16.3203 1.10956 13.2815C1 12.723 1 12.0944 1 10.8373L1 9.16274C1 7.90561 1 7.27705 1.10956 6.71846C1.70555 3.67965 4.18961 2.32316 7.05112 1.51603C8.24014 1.18064 8.83465 1.01295 9.31564 1.00119C11.3831 0.95061 12.9264 2.52307 13 4.37501" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <Path
        d="M19 10H8M19 10C19 9.29977 17.0057 7.99153 16.5 7.5M19 10C19 10.7002 17.0057 12.0085 16.5 12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
