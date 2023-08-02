// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create an array two student objects
const firstStudent: Student = {
	firstName: "Saheed",
	lastName: "Tijani",
	age: 22,
	location: "Lagos"
}

const secondStudent: Student = {
	firstName: "Olalekan",
	lastName: "Saheed",
	age: 21,
	location: "Abuja"
}

const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})