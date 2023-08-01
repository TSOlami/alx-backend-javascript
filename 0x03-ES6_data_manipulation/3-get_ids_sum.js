export default function getStudentIdsSum(list) {
  // return an array of students for a specific city with their new grade
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
