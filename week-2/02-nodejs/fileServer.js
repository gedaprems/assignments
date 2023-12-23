/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();
    
    const dir = path.join(__dirname, './files');
    
    app.get('/files',(req,res)=>{
      fs.readdir(dir,(err,files)=>{
        if(err){
          return res.status(500).json({error:'Failed to retrive files'});
        }
    
        res.status(200).json(files);
      })
    })
    
    
    const readFilePromise = (filePath, encoding) =>{
      return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,data)=>{
          if(err){
            reject(err);
          }else{
    
            resolve(data);
          }
        })
      })
    }
    app.get('/file/:fileName',(req,res)=>{
      const name = req.params.fileName;
      const filePath = path.join(dir,name);
    
      readFilePromise(filePath, 'utf8')
      .then((data)=>{
        res.status(200).send(data);
      })
      .catch((err)=>{
        if(err.code === 'ENOENT'){
          //file not found
    
          res.status(404).send('File not found');
        }
        else{
          res.status(500).send("Intenal Server Error");
        }
      });
    });
    
    
    
    app.get('*',(req,res)=>{
      res.status(404).send("Route not found");
    });
    
    
    module.exports = app;
    
    // recursively adding all the files within subfolder
      /*
      let files = []
      const fileList = fs.readdirSync(dir+"/files/");
      for (const file of fileList) {
        const name = `${dir}/${file}`
        // Check if the current file/directory is a directory using fs.statSync
        if (fs.statSync(name).isDirectory()) {
          // If it is a directory, recursively call the getFiles function with the directory path and the files array
          getFiles(name, files)
        } else {
          // If it is a file, push the full path to the files array
          files.push(name)
        }
      }
      */