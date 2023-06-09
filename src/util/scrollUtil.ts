import { ScrollEventInfo } from "./../../types/component.d";

const ScrollEvent = (section_info: ScrollEventInfo, currentHeight: number, clientScrollY: number) => {
  // 현재 넓이의 이벤트 시작 값
  const eventStart = section_info[2].start * currentHeight;
  // 현재 넓이의 이벤트 끝 값
  const eventEnd = section_info[2].end * currentHeight;
  // 현재 넓이
  const eventHeight = eventEnd - eventStart;

  let rv = 0;
  if (clientScrollY >= eventStart && clientScrollY <= eventEnd) {
    rv = ((clientScrollY - eventStart) / eventHeight) * (section_info[1] - section_info[0]) + section_info[0];
  } else if (clientScrollY < eventStart) rv = section_info[0];
  else if (clientScrollY > eventEnd) rv = section_info[1];

  return rv;
};
export default ScrollEvent;
