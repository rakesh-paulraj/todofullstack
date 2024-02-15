const  express=require("express"); 
const mainrouter=require("../backend/routes/mainrouter");
const cors=require("cors");


const app = express(); 



app.use (express.json());
app.use(cors()); 

app.use("/api/v1/",mainrouter);
console.log("Before server starts");
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
console.log("After server starts");