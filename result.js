
const getGpa = (marks) => {
    let gpa;
    let grade;

    if(marks >= 0 && marks < 33){
        gpa = 0;
        grade = 'F';
    }else if( marks >= 33 && marks < 40){
        gpa = 1;
        grade = 'D';
    }else if( marks >= 40 && marks < 50){
        gpa = 2;
        grade = 'C';
    }else if( marks >= 50 && marks < 60){
        gpa = 3;
        grade = 'B';
    }else if( marks >= 60 && marks < 70){
        gpa = 3.5;
        grade = 'A-';
    }else if( marks >= 70 && marks < 80){
        gpa = 4;
        grade = 'A';
    }else if( marks >= 80 && marks <= 100){
        gpa = 5;
        grade = 'A+';
    }else{
        gpa = 'invalied';
        grade = 'invalied';
    }

    return{
        gpacal : gpa,
        gradecal : grade
    }



}

/**
 * Get CGPA
 */

const cgpa = (bn, en, math, s, ss, rel) =>{

    let cgpa;
    let finalGrade;

    let totalGpa = (bn + en + math + s + ss + rel);

    cgpa = totalGpa / 6;

    if(bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
        finalGrade = 'F';
    }else if (cgpa >= 0 && cgpa < 1){
        finalGrade = 'F';
    }else if (cgpa >= 1 && cgpa < 2){
        finalGrade = 'D';
    }else if (cgpa >= 2 && cgpa < 3){
        finalGrade = 'C';
    }else if (cgpa >= 3 && cgpa < 3.5){
        finalGrade = 'B';
    }else if (cgpa >= 3.5 && cgpa < 4){
        finalGrade = 'A-';
    }else if (cgpa >= 4 && cgpa < 5){
        finalGrade = 'A';
    }else if (cgpa == 5){
        finalGrade = 'A+';
    }

    return{
        finalCgpa : finalGrade == 'F' ? 'Failed' : cgpa.toFixed(2),
        finalResult : finalGrade
    }
}
