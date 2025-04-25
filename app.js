// Form submission handler
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const fatherName = document.getElementById('father-name').value;

    if (studentName && fatherName) {
        // Create a new student object
        const student = {
            studentName: studentName,
            fatherName: fatherName
        };

        // Get the existing students from localStorage or initialize as empty array
        let students = JSON.parse(localStorage.getItem('students')) || [];

        // Add new student to the array
        students.push(student);

        // Save the updated students list to localStorage
        localStorage.setItem('students', JSON.stringify(students));

        // Clear the form fields
        document.getElementById('student-name').value = '';
        document.getElementById('father-name').value = '';

        // Refresh the students list display
        displayStudents();
    }
});

// Display students from localStorage
function displayStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; // Clear existing list

    // Loop through students and create a list item for each
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `Student Name: ${student.studentName}, Father Name: ${student.fatherName}`;
        studentList.appendChild(li);
    });
}

// Display the list when the page loads
window.onload = displayStudents;
