import Svg, { Path } from 'react-native-svg';
import React from 'react';

export function HomeIcon({
  color = '#292929',
  strokeWidth = 1.5,
}: {
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path d="M11.0002 17L11.0002 14" stroke={color} strokeLinecap="round" strokeWidth={strokeWidth} />
      <Path
        d="M1.35164 12.2135C0.998615 9.91624 0.822105 8.76763 1.25641 7.74938C1.69071 6.73112 2.65427 6.03443 4.58138 4.64106L6.02123 3.6C8.41853 1.86667 9.61718 1 11.0002 1C12.3833 1 13.582 1.86667 15.9793 3.6L17.4191 4.64106C19.3462 6.03443 20.3098 6.73112 20.7441 7.74938C21.1784 8.76763 21.0019 9.91624 20.6489 12.2135L20.3478 14.1724C19.8474 17.4289 19.5972 19.0572 18.4292 20.0286C17.2613 21 15.5539 21 12.1391 21H9.86143C6.44658 21 4.73915 21 3.57124 20.0286C2.40333 19.0572 2.15311 17.4289 1.65267 14.1724L1.35164 12.2135Z"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

