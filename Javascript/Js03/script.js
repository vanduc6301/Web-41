
// //chi co  menh de if
// if (condition) {
// }

const battery= 10;
if (battery<= 20) {
    console.log('Pin yeu , vui long sac pin')
}

// //co menh de else 
const raning = true;
if (raning==true) {
    console.log('Duoc nghi hoc')
} else {
    console.log("Di hoc binh thuong")
}



//co menh de eles if
const age = 15 ;
if (age<3) {
    console.log("Duoc mien phi ")
    // chay code o day neu condition la true
} else if (3<= age && age <6){
    console.log("Duoc giam 80% ve vao ")
    //chay code o day neu otherCodition la true
}else if (6<= age && age < 12) {
    console.log("Duoc giam 20% ve vao ")
}else {
    console.log('khong duoc giam gia ')
    //chay code o day neu ta ca dieu kien la false 
}


// //menh de if else long nhau
const lightTraffic = "yellow";
const  isCrosstheline = true;

if (lightTraffic == 'red') {
    console.log(" dung lai ");
}else if (lightTraffic == 'yellow' && isCrosstheline) {
    console.log('di tiep');
}else if (lightTraffic == "yellow" && !isCrosstheline) {
    console.log('di cham va dung lai');
} else {
    console.log('di thoi');
}


// Dinh dang thu  trong tuan
const today = 2;
switch (today) {
  case 2:
    console.log("hom nay la thu hai");
    break;
  case 3:
    console.log("hom nay la thu ba");
    break;
  case 4:
    console.log("hom nay la thu tu");
    break;
  case 5:
    console.log("hom nay la thu nam");
    break;
  case 6:
    console.log("hom nay la thu sau");
    break;
  case 7: 
 case 8:
    console.log("hom nay la cuoi tuan");
    break;
  default:
    console.log("khon la ngay nao ");
    break;
}