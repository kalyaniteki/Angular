//console.log("hello world");
// let mystring:string;
// let mynumber:number;
// mystring="typescript";
// mynumber=450;
// let mystatus:boolean;
// mystatus=true;
// console.log(mystring);
// console.log(mynumber);
// console.log(mystatus);
// let mydata:string;
// mydata="Undipooradey dda dadfraef";
// //mydata=true;
// //console.log(mydata);
// var string:any;
// console.log(mydata.slice(0,3));
// console.log(mynumber.toString()+"my result");
// let mysArray:Array<string>
// let mysArr:any[];
// mysArr=[12,"sfsf",4564]
// let myArr:string[];
// let mynArr:number[];
// myArr=["Hello","Ananya"];
// mynArr=[34,54,343,35435,343]
// console.log(myArr);
// console.log(mynArr[2])
// for(var n=0;n<mynArr.length;n++){
//     console.log(mynArr[n])
// }
// for(var n=0;n<mysArr.length;n++){
//     console.log(mysArr[n])
// }
// mynArr.forEach(function(value)
// {
//     console.log(value);
// })
// let mytup:[number,string]
// mytup=[34,"Poyavvaaa"];
// console.log(mytup);
// let myvar:void;
// myvar=undefined;
// console.log(myvar);
// let myvars:null;
// myvars=null;
// console.log(myvars);
// mytup.push(45)
// mytup.push("Chubss");
// mytup.push("sipsss");
// console.log(mytup);
// enum myenum{sunday=0,monday,tue=4,wed,thurs};
// console.log(myenum.wed);
// for( var n=0;n<myenum.thurs;n++) {
//     console.log(myenum[n]);
// }
// function myfuc(num1:number,num2:number)
// {
//     return(num1+num2);
// }
// function myfuct(num1:any,num2:any):any{
// if(typeof num1=='string'&& typeof num2=='string')
// {
//     let x:number;
//     let y:number;
//     x=parseInt(num1);
//     y=parseInt(num2);
//     return(x+y);
// }
// else
// return(num1+num2);
// }
// console.log(myfuct(34,56));
// console.log(myfuct("34","45"));
// interface myInterface
// {
//     Name:string;
//     Title:string;

// }
// function Ifunc(mydata:myInterface):string
// {
//     return(mydata.Name+" "+mydata.Title);
// }
// let dat={Name:"jigel",Title:"Associate"}
// console.log(Ifunc(dat));
// class User
// {
//     Id:number;
//     Name:string;
//     Email:string;
//     Age:number;
//     constructor(id:number,name:string,email:string,age:number)
//     {
//         this.Id=id;
//         this.Name=name;
//         this.Email=email;
//         this.Age=age;
//         console.log("User Created");
//     }

// }
// let firstuser=new User(1,"chubs","chubs@gmail.com",22);
// console.log(firstuser.Id+" "+firstuser.Name+" "+firstuser.Email+" "+firstuser.Age)
// let seconduser=new User(1,"jigel","jiljil@jil.com",90);
// console.log(seconduser.Id+" "+seconduser.Name+" "+seconduser.Email+" "+seconduser.Age);
class User
{
    protected Id:number;
    protected  Name:string;
    protected  Email:string;
    protected   Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User Created");
    }

    register()
    {
        console.log(this.Name+" sussessfully registered");
        console.log(firstuser.Id+" "+firstuser.Name+" "+firstuser.Email+" "+firstuser.Age)

    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else
        return 0;

    }

}

let firstuser=new User(1,"chubs","chubs@gmail.com",22);
firstuser.register();
console.log(firstuser.getAge(1));
class Admin extends User
{
     Type:string;
    constructor(id:number,name:string,email:string,age:number,type:string)
    {
        super(id,name,email,age);
        this.Type=type;
    }
    display()
    {
       console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age+this.Type);
    }
}
let first=new Admin(5,"fdfg","cfg@gmail.com",87,"jhd");
first.display();
console.log(first.getAge(5));
interface IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
   // Type:string;
   Register():void;
   getAge(id:number):number;

}
class User1 implements IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number,type:string)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User Created");
        
    }
    Register()
    {
        console.log(this.Name+" sussessfully registered");
        console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age)

    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else
        return 0;

    }


}
let first1=new User1(5,"fdfg","cfg@gmail.com",87,"jhd");
first1.Register();
console.log(first1.getAge(5));
