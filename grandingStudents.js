function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
        
            return grade;
        }
    
        let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        
       
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5;
        }
        
       
        return grade;
    });
}


const inputGrades = [73, 67, 38, 33];
const roundedGrades = gradingStudents(inputGrades);

console.log(roundedGrades); // Saída: [75, 67, 40, 33]