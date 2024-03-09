

        let apikey='0909a8277f6342f9d2efd6ef42f4dfd0';
        let apiUrl=" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        
        const searchBox=document.querySelector('.inputdiv input');
        const searchBtn=document.querySelector('.inputdiv  button');
        const Icon=document.querySelector('.icon');
    const Weatherdesc=document.querySelector('.weatherdesc');
        
        
        async function weatherdetails(city){
            const response=await fetch(apiUrl+city +`&appid=${apikey}`);
            let data=await response.json();
            console.log(data);


            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=data.main.temp+'° c';
            document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
            document.querySelector(".windspeed").innerHTML=data.wind.speed+'km/hr';
        Weatherdesc.innerHTML=data.weather[0].description;
        

            if(data.weather[0].main=='Clouds'){
                Icon.src='weatherimages/ccloud.png';
            }
            else if(data.weather[0].main=='Rain'){
                Icon.src='weatherimages/rain.png';
        }
        else if(data.weather[0].main=='Clear'){
                Icon.src='weatherimages/clear.png';
        }

        else if(data.weather[0].main=='Mist'){
                Icon.src='weatherimages/Mist.png';
        }
        else if(data.weather[0].main=='snow'){
                Icon.src='weatherimages/snow.png';
        }

document.querySelector(".weathericon").style.display="block";


    }


        searchBtn.addEventListener("click",()=>{
                weatherdetails(searchBox.value);
            })

   
    
