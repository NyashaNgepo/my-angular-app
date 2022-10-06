const Joi = require ('joi');
const express= require ('express');
const app = express();

app.use(express.json());

const SolarPanels = [
    {id: 1, name: "Early Dawn Solar Panel1" },
    {id: 2, name: "Sun shun Solar Panel2" },
    {id: 3, name: "Portable Solar Panel3" },
];


app.use('/',  (req, res) => {
     res.send('Welcome To Group B server');
});

app.get('/api/SolarPanels',  (req, res) => {
    res.send(SolarPanels);
});

app.post('/SolarPanels' , (req, res)=> {
    if (error) {
        req.status(404).send(error.details[0].message);
        return;
    }

    const SolarPanel = {
        id: SolarPanels.length +1,
        name: req.body.name 
    };

    SolarPanels.push(SolarPanel);
    res.send(SolarPanel);
});

app.put('/api/SolaPanels/id:', (req, res) => {
const SolarPanel = SolarPanels.find(S=> S.id === parseInt (req.params.id ));
if(!SolarPanel) res.sendStatus(404).send('the Solar panel with the given id was not found');
const {error} = ValidateSolarPanel(req.body); //validate SolarPanels 

const schama = {
    name: Joi.string().min(3).required
};

if (error) {
    req.status(404).send(error.details[0].message); //if the Solar is not Validated return error massage
    return;
}
SolarPanel.name = req.body.name;
res.send(SolarPanel);

function ValidateSolarPanel(SolarPanel){
   const schama = {
        name: Joi.string().min(3).required // funtion 
    };

    return Joi.validate(SolarPanel.schama);
}
// update the one SolarPanel

app.get('/api/SolarPanels/id:', (req, res) => {
const SolarPanel = SolarPanels.find(S=> S.id === parseInt (req.params.id ));
if(!SolarPanel) res.sendStatus(404).send('the Solar panel with the given id was not found')
res.send(SolarPanel)

});


app.listen(3000 ,() => {
    console.log('app is listening on port 3000'); 

})});
