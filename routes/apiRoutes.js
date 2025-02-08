const express = require("express");
const router = express.Router();
const { ajouterPatient, getAllPatients, deletePatient, modifierPatient, getPatientById } = require("../controllers/patientController");
const { ajouterPersonnel, getAllPersonnel, deletePersonnel, modifierPersonnel, getPersonnelById } = require("../controllers/personnelController");
const { ajouterDossierMedical, getAllDossiers, deleteDossier, getDossierById } = require("../controllers/dossierMedicalController");
const { getAllTraitements, ajouterTraitement, deleteTraitement } = require("../controllers/traitementController");
const { ajouterRendezVous, getAllRendezVous, deleteRendezVous } = require("../controllers/rendezVousController");

router.get("",(req,res)=>{
    res.send("Hello api polyclinique");
});


/*  --------------------Personell----------------*/
router.post('/personnel', ajouterPersonnel);
router.get('/personnels', getAllPersonnel);
router.delete('/personnel/:idPersonnel', deletePersonnel);
router.put('/personnel/:idPersonnel', modifierPersonnel);
router.get('/personnel/:idPersonnel', getPersonnelById);


/*  --------------------Patient----------------*/
router.post('/patient',ajouterPatient);
router.get('/patients', getAllPatients);
router.delete('/patient/:idPatient', deletePatient);
router.put('/patient/:idPatient', modifierPatient);
router.get('/patient/:idPatient', getPatientById);

/*  --------------------DossierMedical----------------*/
router.post('/dossier_medical', ajouterDossierMedical);
router.get('/dossier_medical', getAllDossiers);
router.get('/dossier_medical/:idDossier', getDossierById);
router.delete('/dossier_medical/:idDossier', deleteDossier);


/*  --------------------Traitement----------------*/
router.post('/traitement', ajouterTraitement);
router.delete('/traitement/:idTraitement', deleteTraitement);
router.get('/traitements', getAllTraitements);

/*  --------------------RendezVous----------------*/
router.post('/rendez_vous', ajouterRendezVous);
router.delete('/rendez_vous/:idRendezVous', deleteRendezVous);
router.get('/rendez_vous', getAllRendezVous);


module.exports = router;

