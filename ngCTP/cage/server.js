const data = require("./config.json");
const process = require("process");
const fileSystem = require("fs");
const excludeExtensions = [".ts", ".css", ".html"];
getAutocomponentGenerate = function () {
  if (data != null) {
    //Path Setting logic
    let applicationPath = process.cwd() + "\\" + data.path;
   
    fileSystem.readdir(applicationPath, function (error, files) {
        let tempArray = [];
        files.map((item) => {
                let a =item.match(/\.[0-9a-z]+$/i);
                if(a==null){
                    tempArray.push(item);
                }
        });
        console.log(tempArray);
    });
   
    //Path setting logic end
    if (
      data["Folderstructure"] != undefined &&
      data["Folderstructure"] != null
    ) {
      //ng g c finny
      data["Folderstructure"].forEach(
        // if(){
        //1-if  node modeule then module
        //2-module component
        ///3-module and compoent it will skip

        // }
        //createModule command
        (element) => console.log(element)
        //
      );
    }
  }
};
getAutocomponentGenerate();
//module.exports =data;

// Algorithim
//get a node function that gives a details of existing fil directory
//step1 need to check do  moduleName and component name exists
// setp2 if exist skip
//step 2.1
//step 3 else generate
//step 4 module with routing
//
