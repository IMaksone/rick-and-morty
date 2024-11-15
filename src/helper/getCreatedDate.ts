export default function getCreatedDate(characterCreated: string) {
  const date = new Date(characterCreated);

  const params = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };

  return `${params.month}/${params.day}/${params.year} ${params.hours}:${params.minutes}`;
}
