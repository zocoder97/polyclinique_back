const Patient = require('../models/Patient');
const Personnel = require('../models/Personnel');
const RendezVous = require('../models/RendezVous');

// Ajouter un rendez-vous
const ajouterRendezVous = async (req, res) => {
  try {
    const rendezVous = await RendezVous.create(req.body);
    return res.status(201).json(rendezVous);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllRendezVous = async (req, res) => { 
  try {
    const rendezVous = await RendezVous.findAll({
      include: [
        { model: Patient, as: 'patient', attributes: ['id', 'nom', 'prenom', 'email','numeroTelephone'] },
        { model: Personnel, as: 'personnel', attributes: ['id', 'nom', 'prenom', 'specialite'] }
      ]
    });
    return res.json(rendezVous);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteRendezVous = async (req, res) => {
  const { idRendezVous } = req.params;
  try {
    const deleted = await RendezVous.destroy({
      where: { id: idRendezVous }
    });

    if (deleted) {
      return res.status(200).json({ message: "RendezVous supprimé avec succès" });
    } else {
      return res.status(404).json({ message: "RendezVous introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




module.exports={getAllRendezVous,ajouterRendezVous,deleteRendezVous}