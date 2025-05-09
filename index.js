const express= require('express');
const cors= require("cors");
const app=express();

app.use(cors({optionsSuccessStatus: 200}))
app.use(express.static('public'))

app.get("/", (req, res)=>{
  res.sendFile(__dirname+ '/views/index.html')

})

const isInvalidDate=(date)=>date.toUTCString()==="Invalid Date"

app.get("/api/:date", (req, res)=>{
    let date= new Date(req.params.date)

    if(isInvalidDate(date))
    {
      date= new Date(Number(req.params.date))
    }

    if(isInvalidDate(date))
    {
      res.json({error: "Invalid Date"})
      return;
    }

    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    })
});

app.get("/api", (req, res)=>{
  const date= new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  })
})

const listener= app.listen(process.env.PORT || 3000 ,()=>{
  console.log("App is listening on PORT: "+listener.address().port);
})