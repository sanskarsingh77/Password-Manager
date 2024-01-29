// var,let,const
// let a= "suraj";
// var name ="moye moye";
// let age =18;
// const height = 1.88;
// let name ="suraj";
// DATATYPE
// 1.string
// let name ="suraj";
// ek variable ko 2 baar store nhii kra skate
// 2.NUMBER
// let age =23;

// 3.BOOLEAN -decesion making ke liye use hota hai ya to true hota hai ya to false hota hai true ki value 1 aur false ki 0
// let isapproved = true;

// 4.NULL-:
// null mtlb koi value nhi
// 5.undefined-:
// let lastName = undefined;

// 6.Symbol:
// let sym = Symbol;


// operators
// 1.arihtmetic operators:(+,-,*,/,%,**,++,--)
// let x =10 ;
// x++;
// console.log(x);

// let x = 10;
// let y = 20;
// console.log(x + y);
// COMPARISOIN operator(>,<,>=,<=,==,===,!=,!==)
// console.log(x>y);
// == yeh sirff value check krta hai aur === yeh value ke sath datatype bhi check krta hai
// logical operator-(&&(and) , ||(or), !(not))

// loops:
// for(let number=1;  number<=10; number++){
//     console.log(number);
// }
// add eventlistener to the button

document.querySelector(".form-section-content-form-group-button").addEventListener("click", (e) => {

    e.preventDefault();
    // get all the feilds value✅
    let WebsiteName = document.getElementById("website").value;
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;


    // add validation✅
    if (!WebsiteName || !UserName || !Password) {
        alert("Bhai saare feilds bharna hai😴");
        return;
    }

    // if validation is true then send the data to the localstorage.
    
    // if empty then we create a empty array. push data into it.
    if(localStorage.getItem("Password_data")===null)
    {
        let emptyArray=[];
        let data = {
            "WebsiteName": WebsiteName,
            "UserName": UserName,
            "Password": Password
        }
        emptyArray.push(data);
        localStorage.setItem("Password_data", JSON.stringify(emptyArray));
    }
    // else we get the data from the localstorage and push the new data into it.
    else{
        let Newdata = {
            "WebsiteName": WebsiteName,
            "UserName": UserName,
            "Password": Password
        }

        let oldData = JSON.parse(localStorage.getItem("Password_data"));
        oldData.push(Newdata);
        localStorage.setItem("Password_data", JSON.stringify(oldData));

    }
   
    document.getElementById("website").value="";
    document.getElementById("username").value="";
    document.getElementById("password").value="";

})

