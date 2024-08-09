;(async ()=>{
    l = await(await fetc("https://irmapserver.ir/ex/users,json")).json()
    console.log(l);

})()