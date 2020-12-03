const getKoreanDateString = (date: Date): string => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export default getKoreanDateString;
