const data = require('./config.json');

getAutocomponentGenerate =function (){

    if(data !=null){
        console.log(data.path);
        if(data["Folderstructure"] != undefined && data["Folderstructure"] !=null){
                //ng g c finny
            data["Folderstructure"].forEach(
                // if(){
                        //1-if  node modeule then module
                        //2-module component
                        ///3-module and compoent it will skip

                // }
                //createModule command
                element => console.log(element)
                //
                )
        }
       
        
    }
}
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