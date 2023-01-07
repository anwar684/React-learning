var http = require('http');
var url = require('url');
var server = http.createServer((request, response) => {



    if(request.method === 'GET' && request.url.includes("/contacts")) {
        try{
           
            const queryString = request.url.split('?')[1];

            // Parse the query string into an object
            const queryParams = new URLSearchParams(queryString);
          
            // Get the value of the "name" query parameter
            const array = queryParams.get('array');
            console.log(array);
            console.log("----------")
            let arr2 = array.split(',');
            // console.log(arr2);
            arr2[0] = arr2[0].split("[")[1];
            arr2[arr2.length-1] = arr2[arr2.length-1].split("]")[0];
            console.log(arr2);

            const arr3 = arr2.map((nums) => {
                return parseInt(nums)
            });
            // console.log(arr3);
            response.writeHead(200, {'content-Type' : 'text/plain'});
            // console.log();
            const resp = maxSubArray(...arr3);
            
            response.end(`${resp}`);
        } catch(e){
            console.log("Error: ", e);
        }
        
    }
    if(request.method === 'GET' && request.url === '/messages') {
        response.writeHead(200, {'content-Type' : 'text/plain'});
       const resp = getmessagesfromDB()
        response.end(JSON.stringify(resp));
    }
})
server.listen(3000, ()=>{
    console.log("Server listning on port 3000");
});




// logic code

const maxSubArray = (...nums) => {
    let result = 0;
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


  const  getmessagesfromDB = () => {



    return  [{
        name: "anwar",
        phone: "20003232323"
    },
    {
        name: "Rizwan",
        phone: "20003232323"
    },
    {
        name: "anwar",
        phone: "20003232323"
    }]
  }