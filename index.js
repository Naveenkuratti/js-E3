

//1.arrow function
//2.!REST PARAMETER-->..ideftifer -->combine into array
//3.!SPRRED OPERATOR-->...identifer  -->ideftifer--> seperating
//used spread opertor 
 
//[10,20,30] =  spread OPERATOR -- 10,20,30
// 5 3 2 = REST PARAMETER --> [5,3,2]

////3.!SPRRED OPERATOR-->...identifer
//array is collection data
const spreadFun= (a,b,c)=>{
    console.log(a)
    console.log(b)
    console.log(c)

}
let array =[150,250,350]

spreadFun(...array)
//!4.Destructing
//?unpacking/remove each values of the array or properties of the obj


//1.Array destructing
let numbers=[10,20,30,40]
let[a,b,c,d] = numbers
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//?destructure only frist and last values of array
let students =["sujith", "guru","geetha","radhika","suresh","swati","venkatesh"]

//let [g,,,,,,h]= students
//console.log(g);
//console.log(h);
//?destructre only guru ,radhika,swati

let [,g,,h,,k,]=students
console.log(g);
console.log(h);
console.log(k);

    
//?destructure geetha and from suresh acess remaing values int the from "array"
let [, ,c1,,...c2]=students
console.log(c1);
console.log(c2);


//!2.object destructuring
let developer={
     dname:"nikhil",
     dsal : 45000
}
//objname.keyname
let {dname,dsal}=developer
console.log(dname);
console.log(dsal);
//?3.nested object
let student={
    sname:"naveen",
    side:10,
    address:{
        state: "karnataka",
        city:"hubli"
    }
}
let {sname,side,address:{state,city}}=student
console.log(sname);
console.log(side);

console.log(state);
console.log(city);


let students1={
    asname:"naveen",
    aside:10,
    address:{
       astate:"goa",
        acity:"bangaorle"
    }
}
let {asname,aside,address:{astate,acity}}=students1;
console.log(sname);
console.log(aside);
console.log(astate);
console.log(acity);
//console.log(address);//output -->error(Refernce error)-->after destructing a nested key,
//if we want tp print nexted key we will get reffernce error


let tech={
    db:{
        dbname:"mongodb",
        fees:"5000"
    }
}
//let {db:{dbname,fees}}=tech
//console.log(dbname+" "+fees);
//console.log(fees);




//!way2
//let {dbname,fees}= tech.db
//console.log(dbname+""+fees);



let libray={
    book:{
        b1:{
            bname:"pride and prejucide",
            cost:250,
        }
    },
    address:{
        state:{
            statename:"karnataka",
            city:{
                cname:"mangorle",
            pincode:123457
        }
    }
}
}



let {book:{b1:{bname,cost}},address:{state:{statename,city:{cname,pincode}}}}=libray









console.log(bname+" "+cost);
console.log(statename);
console.log(cname+"  "+pincode);


//!5.modules

//-->divide/split complex javascript coded into separate js file
//-->easy to maintain and manage
//ex :e- commerce website
//sturcture-->html-----script tag---->javascrpit(functionalities)
//style-->css                                    (payment,addtocart,order,search,filter,offers,whisherlist,categories)
//(static website)
//javaScript()

//!TAsk --> on or before 

let developers =["nidhada","devashish","radhika","naveen","suresh","hareesh","anusha","swetha"]

let[q,devashish,radhika,naveen,suresh,hareesh,anusha,swetha]=developers
console.log(q+" "+devashish+" "+radhika+" "+naveen+" "+suresh+" "+hareesh+" "+anusha+" "+swetha);

//1)destructure each and every value from array
//?2.destructure only devashish,suresh,anusha& swetha
//3.destructure nihada and radhika from surseh acees all the remaining values int the form of array

let[,w,,,i,,p,r]=developers
console.log(w);
console.log(i);
console.log(p);
console.log(r);
let []= developers
console.log(developers);



let institute={
    iname:"Qspiders",
    courses:{
        c1name:"Full Stack",
        tech1:{
            frontend:{
                webtech:{
                    sub1:"html",
                    sub2:"css",
                    sub3:"js"
                },
                jslibrary:"reatjs"
            },
            backend:{
                sub4:"core java",
                advance:{
                    sub5:"springboot",
                    sub6:"hibernate"
                }
            }
        }
     }
 }





let {iname,courses:{c1name,tech1:{frontend:{webtech:{sub1,sub2,sub3},jslibrary:{reatjs}},backend:{sub4,advance:{sub5,sub6}}}}}=institute
console.log(iname);
console.log(c1name);
//console.log(tech1);
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(reatjs);
console.log(sub4);
console.log(sub5);
console.log(sub6);