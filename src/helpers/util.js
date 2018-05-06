class Util {
  static calculateProgress = (fast: Object) => {
    const differenceInMs = fast.currentTime - fast.startTime;
    // const differentInS = differenceInMs / 1000;
    // return differentInS / 10;
    const differenceInHr = differenceInMs / 3600000;
    return differenceInHr >= fast.length ? 1 : differenceInHr / fast.length;
  };

  static calculateTimeLeft = (fast: Object) => {
    const endTime = fast.startTime + 3600000 * fast.length;
    const timeLeftInMs = endTime - fast.currentTime;
    if (timeLeftInMs <= 0) {
      return 0;
    }
    return Util.msToTime(timeLeftInMs);
  };

  static msToTime = (duration: number) => {
    let seconds = parseInt((duration / 1000) % 60, 10);
    let minutes = parseInt((duration / (1000 * 60)) % 60, 10);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);

    hours = hours < 10 ? hours : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  static msToTimeSparse = (duration: number) => {
    let minutes = parseInt((duration / (1000 * 60)) % 60, 10);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24, 10);

    hours = hours < 10 ? hours : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  };

  static stringifyDate = (date: Date) => {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${year} / ${month} / ${day}`;
  };
}

export default Util;
