class API{

    static async getCountryInfo({countryName}){

        try{
            const countryResponse =  await fetch(`https://restcountries.com/v2/name/${countryName}`);
            
            // 將 response 格式轉成 json
            const data = await countryResponse.json();

             return new Promise(
                (resolve, reject) => {
                    if(countryResponse.ok){
                        // 取 jason array 第一個值
                        resolve(data[0]);
                    }
                    else{
                        console.log('execute reject!');
                        reject('call restcountries.com has error!');    
                    }
                    
                }
            );
        }
        catch(err){
           console.log(`unknown error: ${err.message}`);
           throw new Error(err.message);
        }    
    } 


}

// 一個 .js 檔案代表一個 module
// 使用 export default 代表整個 module 只匯出一個物件
export default API;