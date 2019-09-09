const bodyParser = require("body-parser");
const axios = require("axios");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public")); //Allows Access to The Static Files Inside "Public" Folder
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("App is Running on Port: " + 3000);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/searchPickupPoints", (req, res) => {
	//Data Received After Filling Search Form
	const Country_Code_Received = req.body.country_code;
	const Postal_Code_Received = req.body.postal_code;
	
	var String_API ="https://api.bring.com/pickuppoint/api/pickuppoint/" + Country_Code_Received + "/postalCode/" + Postal_Code_Received + ".json";
	axios
	.get(String_API)
	.then(response => { //If no Errors Are Found
		console.log("--------------------");
		console.log("Country Code:"+Country_Code_Received+" | Postal Code:"+Postal_Code_Received);
		console.log("Pickup Points Found:"+response.data.pickupPoint.length);
		res.render("search_results", {
			PickupPoints: response.data.pickupPoint,
			Error: null
		});
	})
	.catch(err => { //If an Error is Found
		console.log("--------------------");
		console.log("Country Code:"+Country_Code_Received+" | Postal Code:"+Postal_Code_Received);
		console.log("Error: "+err);
		res.render("search_results", {
			PickupPoints: null,
			Error: err
		});
	});
});
