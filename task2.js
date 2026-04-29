// let marks = 90
// if (marks===100){
//     console.log("Perfect Score!")
// }
// else if (marks===75){
//     console.log("Very Good")
// }
// else if (marks===50){
//     console.log("Just Passed")
// }
// else if(marks >=90){
//     console.log("Grade A")
// }
// else if(marks >=70){
//     console.log("Grade B")
// }
// else if(marks >=50){
//     console.log("Grade C")
// }
// else {
//     console.log("Grade F")
// }

let marks = 90
switch (true) {
    case marks===100:
    console.log("Perfect Score!")
    break
    case marks===75:
    console.log("Very Good");
    break
    case marks===50:
    console.log("Just Passed") 
    break
    case marks >=90:
    console.log("Grade A")
    break
    case marks >=70:
    console.log("Grade B")
    break
    case marks >=50:
    console.log("Grade C")  

  default:
    console.log("Grade F");
}

