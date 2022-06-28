import React from "react";

export function StudentCompByGradeAndColor(props){
 let color = ''
 let commment = ''

 if (props.studentGrade <= 56 && props.studentGrade >=0){
    color ='red'
    commment = '(poor)'
 }
 if (props.studentGrade >= 57 && props.studentGrade <=75){
    color ='yellow'
    commment = '(ok)'
 }
 if (props.studentGrade >= 76 && props.studentGrade <=85){
    color ='orange'
    commment = '(good)'
 }
 if (props.studentGrade >= 86 && props.studentGrade <=100){
    color ='green'
    commment = '(Exellent)'
 }

 return(
    <h2 style={{backgroundColor : color}}> {props.studentName} - {props.studentId} - {props.studentGrade} - {commment}</h2>
   
 );

}

export function ListStudentComp(){
    return(
<ul>
    <li><StudentCompByGradeAndColor studentName='Monkey D Luffy' studentId= {1} studentGrade={54}></StudentCompByGradeAndColor></li>
    <li><StudentCompByGradeAndColor studentName='Uzumaki Naruto' studentId= {2} studentGrade={70}></StudentCompByGradeAndColor></li>
    <li><StudentCompByGradeAndColor studentName='Natsu Dragonil' studentId= {3} studentGrade={78}></StudentCompByGradeAndColor></li>
    <li><StudentCompByGradeAndColor studentName='Kamado Tanjiro' studentId= {4} studentGrade={90}></StudentCompByGradeAndColor></li>
</ul>
    );
}