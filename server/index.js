import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            "https://hoppscotch.io",
            "https://hoppscotch.com",
            //add production url
             "http://20.255.60.10:5174",
        ],
        credentials : true,
    }
));

//API route

app.get("/api/message", (req,res)=>{
    res.json({message:"Hello from Deep Saha"});
});

const PORT =  4000;
app.listen(PORT ,"0.0.0.0", () => 
    console.log(`Server is running at http://localhost:${PORT}`)
)