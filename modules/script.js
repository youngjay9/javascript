import API from './API.js';


// API.getCountryInfo({countryName:'taiwan'})
//     .then(country => {
//         console.log(`countyry.capital: ${country.capital}`);
//     })
//     .catch(err => {
//         console.log(`API.getCountryInfo has error: ${err}`);
//     });


try{
    const countryIndo = await API.getCountryInfo({countryName:'taiwan'}); 
    
    console.log(`countryIndo.capital: ${countryIndo.capital}`);
}  
// 取得 API.getCountryInfo(...) 執行 reject 的回傳值   
catch(err){
    console.log(`API.getCountryInfo has error: ${err}`);
} 
