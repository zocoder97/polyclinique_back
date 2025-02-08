const Personnel = require('../models/Personnel');

// Ajouter un personnel
const ajouterPersonnel = async (req, res) => {
  try {
    const personnel = await Personnel.create(req.body);
    return res.status(201).json(personnel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les personnels
const getAllPersonnel = async (req, res) => {
  try {
    const personnels = await Personnel.findAll();
    return res.status(200).json(personnels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const getPersonnelById = async (req, res) => {
  const { idPersonnel } = req.params;
  try {
    const personnel = await Personnel.findOne({ where: { id: idPersonnel } });

    if (personnel) {
      return res.status(200).json(personnel);
    } else {
      return res.status(404).json({ message: "Personnel introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const modifierPersonnel = async (req, res) => {
  const { idPersonnel } = req.params;
  try {
    const [updated] = await Personnel.update(req.body, {
      where: { id: idPersonnel },
    });

    if (updated) {
      const personnelUpdated = await Personnel.findOne({ where: { id: idPersonnel } });
      return res.status(200).json(personnelUpdated);
    } else {
      return res.status(404).json({ message: "Personnel introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const deletePersonnel = async (req, res) => {
  const { idPersonnel } = req.params;
  try {
    const deleted = await Personnel.destroy({
      where: { id: idPersonnel }
    });

    if (deleted) {
      return res.status(200).json({ message: "Personnel supprimé avec succès" });
    } else {
      return res.status(404).json({ message: "Personnel introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { getAllPersonnel, ajouterPersonnel, modifierPersonnel, deletePersonnel, getPersonnelById };