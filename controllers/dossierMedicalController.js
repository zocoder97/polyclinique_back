const DossierMedical = require('../models/DossierMedical');
const Patient = require('../models/Patient');

// Ajouter un dossier médical
const ajouterDossierMedical = async (req, res) => {
  try {
    const dossier = await DossierMedical.create(req.body);
    res.status(201).json(dossier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les dossiers médicaux
const getAllDossiers = async (req, res) => { 
  try {
    const dossierMedical = await DossierMedical.findAll({
      include: [
        { model: Patient, as: 'patient', attributes: ['id', 'nom', 'prenom', 'email','numeroTelephone'] },
      ]
    });
    return res.json(dossierMedical);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const deleteDossier = async (req, res) => {
  const { idDossier } = req.params;
  try {
    const deleted = await DossierMedical.destroy({
      where: { id: idDossier }
    });

    if (deleted) {
      return res.status(200).json({ message: "Dossier supprimé avec succès" });
    } else {
      return res.status(404).json({ message: "Dossier introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const getDossierById = async (req, res) => { 
  const { idDossier } = req.params;
  try {
    const dossierMedical = await DossierMedical.findOne({
      include: [
        { model: Patient, as: 'patient', attributes: ['id', 'nom', 'prenom', 'email','numeroTelephone'] },
      ],
      where:{ id: idDossier }
    });
    return res.json(dossierMedical);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports={getAllDossiers,ajouterDossierMedical,deleteDossier,getDossierById}