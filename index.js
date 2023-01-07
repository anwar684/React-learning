let result = 0;
const maxSubArray = (...nums) => {
    let maxSum = 0;
    let runningSum = 0;
    
    let commulator = 0;
    let subArray = [];
    let contgousArray = [];
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      runningSum = Math.max(runningSum + nums[i], nums[i]);
      maxSum = Math.max(maxSum, runningSum); 
      
    }
    result = maxSum;
    console.log(result)
    for(let j = 0; j < nums.length; j++) {
      commulator = commulator + nums[j];
      if(nums[j] >= commulator) {
          commulator = nums[j];
          subArray = [];
          subArray.push(nums[j]);
          if(nums[j] === maxSum)
          {
              contgousArray =  subArray;
              break;
          }
      }
      else {
          subArray.push(nums[j]);
          sum = subArray.reduce((total, currentValue) => {
              return total + currentValue;
          });
          if(sum === maxSum) {
              contgousArray = subArray;
              break;
          }
      }
    }
    return contgousArray;
  };
  
// let url = new URL('http://localhost:3000/contiguour?array=');
// let params = new URLSearchParams(url.search);
const array1 = window.location.search;
const urlParm = new URLSearchParams(array1);
const arr1 = urlParm.get('array');
//const array2 = parseInt(arr1);

//console.log(arr1)

let arr2 = arr1.split(',');

arr2[0] = arr2[0].split("[")[1];
arr2[arr2.length-1] = arr2[arr2.length-1].split("]")[0];
//console.log(arr2);

const arr3 = arr2.map((nums) => {
    return parseInt(nums)
});
//console.log(arr3);
console.log(maxSubArray(...arr3));
//maxSubArray(...[2, 5, 6, -9])
document.getElementById("result1").innerHTML = `<h5>Max SubArray = [${maxSubArray(...arr3)}]</h5>`;
document.getElementById("main1").innerHTML = `<h5>Maximum Sum = ${result}</h5>`;



// var http = require('http');
// var server = http.createServer((request, response) => {
//     if(request.method === 'GET' && request.url === '/contiguous?array=') {
//         response.writeHead(200, {'content-Type' : 'text/plain'});


        
//         response.end('hello....');
//     }
// })
// server.listen(3000, ()=>{
//     console.log("Server listning on port 3000");
// });




