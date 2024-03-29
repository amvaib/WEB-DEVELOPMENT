async function amvaib(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve("27 DEGREE");
        },2000)
    })
    let mumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve("30 DEGREE");
        },5000)
    })

    console.log("Fetching Delhi Weather Please wait....");
    let delhiW = await delhiWeather;
    console.log(`Fetched Delhi Weather: ${delhiW}`);
    console.log("Fetching Mumbai Weather Please wait....");
    let mumbaiW = await mumbaiWeather;
    console.log(`Fetched Mumbai Weather: ${mumbaiW}`);

    return[delhiW,mumbaiW];

}


const cherry = async ()=>{
    console.log("Hey i am cherry and i am waiting");

}

const main1 = async()=> {
    console.log("Welcome to weather Control room");
    let a = await amvaib();
    let b = await cherry();
}

main1();