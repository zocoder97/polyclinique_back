const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes=require("./routes/apiRoutes.js")
const Db=require("./db/db.js");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Middleware pour gérer les erreurs JSON mal formées
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({ error: "JSON mal formé" });
    }
    next();
});

app.use('/polynique_api', apiRoutes);
require('./relations/relation.js');

Db.sync()
    .then(() => {
        console.log("--------La base de donnée polyclinique est prête.---------");
    })
    .catch(() => console.log("-------La base de donnée polyclinique ne marche pas.---------"));

const PORT = 3010;

app.listen(PORT, () => {
    console.log(`Api polyclinique marche bien sur: ${PORT}`);
});
