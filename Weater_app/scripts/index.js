 //https://api.openweathermap.org/data/2.5/forecast?q=indore&cnt=7&appid=b7f4b70c4cb1a3ab125da81f5fdc993e&units=metric
  //for 7 days
  let key='b7f4b70c4cb1a3ab125da81f5fdc993e';
  let container = document.getElementById("constainer"); 
  let right = document.getElementById("right"); 
    

  async function getWether(){
      try{
          let city =document.getElementById("city").value;
          let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

          let data = await res.json();
          console.log("data:",data);
         showData(data)
      }
     catch(err){
         console.log("err:",err);
     }  
   

   }

function showData(d){
  
container.innerHTML = null;
right.innerHTML = null;



let name = document.createElement("h1");
name.innerText = ` ${d.name}  ${d.sys.country}`;

let temp = document.createElement("p");
temp.innerText = `⛈ Temptrature -${d.main.temp}°`;

let hum = document.createElement("p");
hum.innerText =`💧 Humnity - ${d.main.humidity}`;

let pressure = document.createElement("p");
pressure.innerText =`💨 Pressure - ${d.main.pressure}`;

let minT = document.createElement("p");
minT.innerText = ` ☃ Minimum Tempreture - ${d.main.temp_min}°`

let maxT = document.createElement("p");
maxT.innerText = `🌤 Maximum Tempreture - ${d.main.temp_max}°`

let deg= document.createElement("p");
deg.innerText = `💨 Deg- ${d.wind.deg}` ;

let speed= document.createElement("p");
speed.innerText =`🌪 speed- ${d.wind.speed}`

let rise= document.createElement("p");
rise.innerText =`☀ Sun Rise- ${d.sys.sunrise}`

let set= document.createElement("p");
set.innerText =`🌞 Sun Set- ${d.sys.sunset}`

let iframe = document.createElement("iframe");
iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

iframe.height =`100%`;
iframe.width =`100%`;

container.append(name,temp,hum,pressure,minT , maxT , deg , speed ,rise,set);
//document.getElementById("right").append(iframe);
right.append(iframe);
}