// 1-question---Find Grades

let marks = 1;
let grade;

switch (true) {
    case marks >= 41 && marks <= 50 :
        grade = 'A';
        break;
    case marks >= 31 && marks <= 40 :
        grade = 'B';
        break;
    case marks >= 21 && marks <= 30 :
        grade = 'C';
        break;
    case marks >= 11 && marks <= 20 :
        grade = 'D';
        break;
    case marks >= 0 && marks <= 10 :
        grade = 'E';
        break;


    default: grade ('invalid');
        break;
}
console.log ( grade);





// 2-question

// let p = "Prep Bytes";
// let z = "Zenith";
// let e = "Expert Coder";
// let d = "Data Structure";
// let P = "Prep Bytes";
// let Z = "Zenith";
// let E = "Expert Coder";
// let D = "Data Structure";


// console.log (E);
// console.log (e);


// 2-question..find value;

// 1-first find small 'e'.

let n = 'e';
switch (true) {
    case n == 'p' || n == 'P':
        console.log('PrepBytes');
        break;
    case n == 'z' || n == 'Z':
        console.log('Zenith');
        break;
    case n == 'e' || n == 'E':
        console.log('Expert Coder');
        break;
    case n == 'd' || n == 'D':
        console.log('Data Structure');
        break;
}


// 2-second step capital 'E'.


let m = 'E';
switch (true) {
    case m == 'p' || m == 'P':
        console.log('PrepBytes');
        break;
    case m == 'z' || m == 'Z':
        console.log('Zenith');
        break;
    case m == 'e' || m == 'E':
        console.log('Expert Coder');
        break;
    case m == 'd' || m == 'D':
        console.log('Data Structure');
        break;
}



// Q.3 - Maximum out of three numbers

let a = 10;
let b = 9;
let c = 15;
if (a > b && a > c && b%c) {
        console.log(a, 'is greater than', b, 'and', c);
}
else if (b > a && b > c && a%c) {
    console.log(b, 'is greater than', a, 'and', c);
}
else if (c > a && c > b && a%b) {
    console.log(c, 'is greater than', a, 'and', b);
}
else if (a == b && a == c) {
    console.log(a, b, c, 'are equal');
}
else {
    console.log(a, b, c, 'two numbers are equal');
}

// Q.4 - Second smallest number

let a = 10;
let b = 15;
let c = 13;

let secSmallest;

if (( a>b && a<c ) || (a<b && a>c)) {
     console.log (a, '2nd smallest number');

}else if ( (b>a && b<c ) || (b<a && b>c) ) {
    console.log (b, '2nd smallest number');
}else if ((c>a && c<b) || (c<a && c>b)){ 
    console.log (c, '2nd smallest number');
}else if (a==b & a==c) {
    console.log ('all number equal');

}else {
    console.log (a,b,c,'two number same ');
}

// 5-question--Triangle is acute or obtuse.


// 1-for acute angle means all angle less than 90;

let d=80;
let e=60;
let f=40;
let Abtuse;
let Acute;

if ( d > 90 || e > 90 || f > 90) {
    console.log ('abtuse');
}else {
    console.log ('acute');
};



// 2-for abtuse angle means one more than 90;

let g=100;
let h=60;
let i=20;
let Abtuses;
let Acutes;

if ( g < 90 || h < 90 || i < 90) {
    console.log ('abtuses');
}else {
    console.log ('acutes');
}

