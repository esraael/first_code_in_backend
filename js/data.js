const fs=require("fs")
// ---------------------additem------------------------------
const addperson=(id,fname,lname,age,city)=>{
    const alldata=loaddata()
    const duplicatedid=alldata.filter((obj)=>{
        return obj.id==id
    })
    if(duplicatedid.length==0){
        alldata.push({
            id:id,
            fname:fname,
            lname:lname,
            age,
            city:city
        })
        savealldata(alldata)
    }
    else{
        console.log("error duplicateddata")
    }
}
// -------------------------alldata-----------------------------
const loaddata=()=>{
    try{
        const datajson=fs.readFileSync('dataa.json').toString()
        return JSON.parse(datajson)
    }
    catch{
        return []
    }
}
// --------------------------savealldata--------------------------
const savealldata=(alldata)=>{
    const savealldatajson=JSON.stringify(alldata)
    fs.writeFileSync('dataa.json' , savealldatajson )
}
// ------------deleteitem-------------------------
const deleteperson=(id)=>{
    const alldata=loaddata()
    const datatokeep=alldata.filter((obj)=>{
        return obj.id!==id
    })
    savealldata(datatokeep)
}
// ------------list data-------------------------
const listdata=()=>{
    const alldata=loaddata();
    alldata.forEach(obj => {
        console.log(obj.fname , obj.lname , obj.city)
    });    
}
// -------------readdata-------------------------
const readdata=(id)=>{
    const alldata=loaddata()
    const itemneeded=alldata.find((obj)=>{
        return obj.id==id
    })
    if(itemneeded){
        console.log(itemneeded.id)
    }
    else{
        console.log("id item needed not found")
    }
}


module.exports={
    addperson,
    deleteperson,
    listdata,
    readdata
}