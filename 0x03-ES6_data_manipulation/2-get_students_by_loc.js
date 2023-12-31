export default function getStudentsByLocation(list, city) {
  // Filter out where the location is the same as the city
  return list.filter((obj) => obj.location === city);
}
