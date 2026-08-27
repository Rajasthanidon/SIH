const app = require("./app")
const createtable = require("./database/db");
const PORT = process.env.PORT || 5500;
async function start(){
    await createtable();
    app.listen(PORT,()=>{
      console.log(`Server is started on port ${PORT}`);
});};
start();