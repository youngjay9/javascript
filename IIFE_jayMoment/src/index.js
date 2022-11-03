;(
  /** 
   *  定義 IIFE 的 function；
   *  執行以後在全域可以使用 jayMoment function
   * @param global -- 在執行階段,會傳入瀏覽器的全域物件, 用來註冊 jayMoment function
   * @param factory -- function 物件, 回傳一個 function 物件給 jayMoment
   */
   
  function(global, factory){
        // global 物件在瀏覽器上執行就是 window 物件
        global.jayMoment = factory('Ha Ha!!');
 })
 /**
  * 執行 IIFE
  * @param this -- global 物件
  * @paream 定義factory function 再回傳一個 function 物件, 印出 factory execute: ...
  */
 (this, function(str){
    'use strict';
     
     return function(){
         
        console.log(`factory execute:${str}`);
     }
  });

// 經過上面的 IIFE, 呼叫自己定義的 function  
console.log(jayMoment());