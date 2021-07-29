const fs = require('fs');
const request = require('request');
const input = process.argv;


const downloadFunction = function(){
  request(input[2], (error, response, body) => {
    
    if (error){
      console.log('error:', error); // Print the error if one occurred
    }  
    fs.writeFile(input[3], body, err => {
      if (err) {
        console.error(err)
        return
      }
      fs.stat(input[3], (err, stats) => {
        if (err) {
            console.log(`File doesn't exist.`);
        } else {
            console.log('File has been downloaded and the size is :'+ stats['size']);
        }
      });
      //file written successfully
    })
    // Read file stat


  });
  
}



downloadFunction();

