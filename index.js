const bodyParser = require("body-parser");
const axios = require("axios");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public')); //Permite Aceder aos Ficheiros Estáticos Dentro do Folder "Public"
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("App Corre Porta: " + 3000);
});

app.get("/",(req,res)=>{
    //res.send('Home Page');
	res.render('index');
});





app.get("/searchPickupPoints",(req,res)=>{
    //const Postal_Code_Received = req.params.nome_evento_filtro;
	//const Postal_Code_Received = req.params.short_name_filtro;
	//var =;
	//var String_API="https://api.bring.com/pickuppoint/api/pickuppoint/"++"/postalCode/"+Postal_Code_Received+".json";
	//axios.get("")
});



app.post("/searchPickupPoints",(req,res)=>{
    const Country_Code_Received = req.body.country_code;
	const Postal_Code_Received = req.body.postal_code;
	var String_API="https://api.bring.com/pickuppoint/api/pickuppoint/"+Country_Code_Received+"/postalCode/"+Postal_Code_Received+".json";
	//axios.get(String_API).then(res=>{console.log(res);});
	//var PointsRead=null;
	//var ErrorRead=null;
	axios.get(String_API)
	.then(response=>{/*console.log(res.data); var PointsRead=response.data;*/ console.log(response.data.pickupPoint.length); res.render('search_results',{PickupPoints:response.data.pickupPoint,Error:null});})
	.catch(err=>{console.log(err); /*ErrorRead=err;*/ res.render('search_results',{PickupPoints:null,Error:err});});

	//res.render('search_results',{PickupPoints:PointsRead,Error:ErrorRead});
	//res.render('search_results');
	
	//console.log("PickupPoints="+PointsRead);//.length);
});




















