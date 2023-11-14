// ------------------task_1-----------------------------
// ----------------create_obj---------------------------
const person={
    fname:"ahmed",
    lname:"hossam",
    age:"20",
    city:"alex"
}
// // --------------convert_to_json----------------------------
const personjson=JSON.stringify(person)
console.log(personjson)
// // ----------------store_in_file--------------------------
const fs=require("fs")
const { json } = require("node:stream/consumers")
fs.writeFileSync("data2.json" , personjson )
// // --------------read_in_file-----------------------------
fs.readFileSync("data2.json")
console.log(fs.readFileSync("data2.json").toString())
// // ----------------convert_to_obj-----------------------
const personobj=JSON.parse(personjson)
console.log(personobj)
// // ----------------update_data----------------------
const person2={
    fname:"adel",
    lname:"ahmed",
    age:"40",
    city:"cairo"
}
// // -----------------convert_to_json-----------------
const personjson2=JSON.stringify(person2)
// // --------------------store_in_file---------------
fs.appendFileSync("data2.json" , personjson2)
fs.readFileSync("data2.json")
console.log(fs.readFileSync("data2.json").toString())
// -------------------------------------task_2--------------------------------------------------
// ----------------additem-----------------------------
const data=require('./data.js')
const yargs=require("yargs")
yargs.command({
    command:"add",
    describe:"added your item",
    builder:{
        fname:{
            describe:"you must add your fname",
            demandoption:true,
            type:"string"
        },
        lname:{
            describe:"you must add your lname",
            demandoption:true,
            type:"string"
        }
    },
    handler :(x)=>{
        data.addperson(x.id , x.fname , x.lname , x.age , x.city)
    }
})
// -----------------------------------delete item--------------------------------------
yargs.command({
    command:"delete",
    describe:"delete your item",
    handler :(x)=>{
        data.deleteperson(x.id)
    }
})
// ----------------------------------listdata--------------------------
yargs.command({
    command:"list",
    describe:"list your data",
    handler :()=>{
        data.listdata()
    }
})
// ----------------------------------readdata----------------------------
yargs.command({
    command:"read",
    describe:"read  data",
    builder:{
        id:{
            describe:"you must add your id",
            demandoption:true,
            type:"string"
        },
    },
    handler :(x)=>{
        data.readdata(x.id)
    }
})

yargs.parse()























