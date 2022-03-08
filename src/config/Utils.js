export const timeConverter = (UNIX_timestamp, type) => {
  const d = new Date(UNIX_timestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // const year = d.getFullYear();
  const month = months[d.getMonth()];
  const date = d.getDate();
  const hours = d.getHours();
  const minutes = '0' + d.getMinutes();
  const seconds = '0' + d.getSeconds();
  const formattedTime = hours + ':' + minutes.substr(-2); // + ':' + seconds.substr(-2);

  //const date = date + ' ' + month;

  const time = date + ' ' + month + ' ' + formattedTime;
  if (type === 'hours') {
    return formattedTime;
  }
  return time;
};
