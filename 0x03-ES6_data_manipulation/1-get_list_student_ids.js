export default function getListStudentIds(list) {
  // Check if the list is an array and
  // return the id of each object
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  // Return an empty array
  return [];
}
