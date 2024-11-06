// let obj = {}


// obj.name = "khue";
// obj.age = 23;
// obj.weight=51;
// obj.height= 1.63;
// obj.gender = 'female'

// let self = {
//     name :'khue',
//     age:  23,
//     weight : 51,
//     height : 1.63,
//     gender : 'Male',
// };
// console.log(self)

// //truy cap du lieu
// console.log(self.name)
// console.log(self.age)

// console.log(self['weight']);
// console.log(self['height']);

// let key = 'grender';
// console.log(self[key]);


// //Thay doi / gan du lieu
// self.name = 'Duc';
// self.age = 23;
// self['weight'] = 71;
// self['height'] = 1.75;
// self[key] = 'Male'

// console.log(self);

// // xoa du lieu khoi obj


// delete self.name;
// delete self.age;
// delete self['weight'];
// delete self['height'];
// delete self[key];

// console.log(self);

// let self = {
//   name: "khue",
//   age: 23,
//   weight: 51,
//   height: 1.63,
//   gender: "Male",

//   speak() {
//     console.log('Say something')
//   },
// };
// self.speak();

// let khue = {
//     name : 'khue',
//     age : 23,
// }


// function Person (name , age , weight , height , gender) {
//     // this 
//     this.name = name ;
//     this.age = age ;
//     this.weight = weight;
//     this.height = height;
//     this.gender = gender;
// }


// //Prototype
// Person.prototype.speak = function(){
//     console.log('Say something');
// }
// const duc = new Person('duc', 23 , 71 , 1.75 , 'Male');
// const khue = new Person("khue", 23, 51, 1.63, "female");

// duc.speak;

// console.log(duc)



//lap
// let obj = {
//     x : 1,
//     y : 2,
//     z : 3,
// };

// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }


//baitap: cho 1 obj chua cac thong tin ve don hang
// const order = {
//     tv : 1000,
//     lattop : 2000,
//     dieuhoa: 5500,
//     tulanh: 7000,
//     maygiat:12000,
// };


// let total = 0
// for(let items in order){
//    total += order[items];
// }
// // tinh tong gia tri hoa don 
// console.log(total);

//cho 1 obj contact luu danh ba nguoi dung
const contacts = {};

//Viet ham addcontact de them 1 contact
//ham nhan cac tham so :
//-ten nguoi lien he 
//- so dien thoai 
// function addcontact(name,phoneNumber){
//     const existingContact = contacts.find(
//       (contact) => contact.phoneNumber === phoneNumber
//     );
//     if (existingContact) {
//       console.log(`Số điện thoại ${phoneNumber} đã tồn tại.`);
//       return;
//     }
//     contacts.push({ name, phoneNumber });
//     console.log(`Đã thêm liên hệ: ${name}, Số điện thoại: ${phoneNumber}`);
// }
// addcontact('Duc', '0353708776')

//c2
// 
function addcontact(name,phoneNumber){
    if(name in contacts){
        console.log('Danh ba da ton tai')
    }else {
        contacts[name] = phoneNumber;
    }
}
addcontact('Duc','0353708776');
addcontact("Khue", "0374850347");
findContactByName("chuan bi cuoi", "0222939293");
console.log(contacts)

//viet ham findcontactByname de tim contact theo ten 
//ham nhan vao tham so :
//- ten nguoi lien he
// ket qua : so dien thoai hoac "khong co lien he "
function findContactByName(name) {
    if(name in contacts){
        console.log(contacts[name])
    }else{
        console.log('khong co lien he');
    }
};


findContactByName('Duc','0353708776');
findContactByName('Khue','0374850347');



//viet ham deletecontact de xoa danh ba
//ham nhan vao tham so :
//-ten nguoi lien he
//ket qua :Xoa contact hoac in ra "khong co lien he"

function deletecontact(name){
    if(name in contacts){
        delete contacts[name];
    }else{
        console.log('danh ba khong ton tai');
    }
}
deletecontact('Duc');
console.log(contacts)

//viet ham tinh tong so so contact

function sumContacts(){
    let sum =0
    for(let key in contacts){
         sum++;
    }
    return sum;
}
console.log(sumContacts());
//viet ham tim cac contatc trung lap (phoneNumber)

addcontact('chuan bi cuoi','0222939293');

console.log(contacts);
//goi y :
// cach 1:  dung 2 vong lap long nhau 
//- 
//cach  2 : dung 1 obj khac de luu
//- dung 1 obj khac de luu lai 
//  + khi qua 1 obj moi se tu luu lai va kiem tra