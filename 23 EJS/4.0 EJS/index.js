import express from "express"

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

var type = (new Date().getDay() < 6) ? "weekday" : "weekend";
var adv = (type === "weekday") ? "it's time to work hard" : "it's time to relax";

app.get('/', (req, res) => {
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});