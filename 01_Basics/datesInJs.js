//-------------Date--------------

let myDate = new Date() // myDate is an object
console.log(myDate.toString()); //Sat Apr 11 2026 22:49:46 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sat Apr 11 2026
console.log(myDate.toISOString())   //2026-04-11T17:21:12.672Z
console.log(myDate.toJSON());   //2026-04-11T17:22:03.890Z
console.log(myDate.toLocaleDateString());   //11/4/2026
console.log(myDate.toLocaleString());   //11/4/2026, 10:53:20 pm
console.log(myDate.toLocaleTimeString())    //10:54:06 pm


let myCreatedDate1 = new Date(2026,0,16)    //(year,month,day)
console.log(myCreatedDate1)  //2026-01-15T18:30:00.000Z
console.log(myCreatedDate1.toDateString())   //Fri Jan 16 2026(months starts with 0 in javascript)
let myCreatedDate2 = new Date(2026,12,16);
console.log(myCreatedDate2.toDateString())  //Sat Jan 16 2027(After 11 the month will add to next year)

let anotherDate = new Date(2026,3,11,23,2,0)    //(year,month,time,hour,minute,seconds)
console.log(anotherDate.toLocaleString());  //11/4/2026, 11:02:00 pm

let otherDate = new Date("2026-04-11")  //YYYY-MM-DD format
console.log(otherDate.toLocaleString());    //11/4/2026, 5:30:00 am

let otherDate2 = new Date("11-04-2026")
console.log(otherDate2.toLocaleString());   //4/11/2026, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //1775929370907
console.log(otherDate2.getTime())   //1793730600000

console.log(Date.now()/1000);    //1775929472.501
console.log(Math.floor(Date.now()/1000));   //1775929518

let newDate = new Date()
console.log(newDate.getDate());  //11
console.log(newDate.getDay());  //6
console.log(newDate.getTime()); //1775929656876
console.log(newDate.getFullYear()); //2026

//-----------CUSTOMIZATION OF DATES------------

newDate.toLocaleString('default',{
    weekday:"long"
})
