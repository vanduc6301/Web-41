let arr = ['ba','binh','tram','duc','nam','hung'];
for (let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

// console.log(arr.indexOf('duc'));
// console.log(arr.includes('duc'));
// console.log(arr.includes('thuc'));
// // console.log(arr.unshift('khue'));// tra ve do dai moi sau khi tren
// console.log(arr.shift());
// // console.log(arr.find());
// console.log(arr.lastIndexOf('nam'));
console.log(arr.slice(0,3));




// xoa
let index = arr.indexOf('tram');
arr.splice(index,1);
console.log(arr);

//chen vao giua
arr.splice(index , 0 , 'tram');
console.log((arr));

//thay the 
arr.splice(index , 1 , 'khue');
console.log(arr);



// console.log(arr);

// console.log(arr.length);

// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);

// console.log(arr[arr.length -1]);

// console.log(arr[-1])


// let arr = ['ba' , 0 ,{ name : 'Khue xinh' , age : 23}, [1,2], true , null]

// console.log(arr[2].name)
// console.log(arr[5][0]);
// console.log(arr.length);
// console.log(arr[2].name);



