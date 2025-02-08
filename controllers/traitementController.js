const Traitement = require('../models/Traitement');

// Ajouter un traitement
const ajouterTraitement = async (req, res) => {
  try {
    const traitement = await Traitement.create(req.body);
    res.status(201).json(traitement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les traitements
const getAllTraitements = async (req, res) => {
  try {
    const traitements = await Traitement.findAll();
    res.json(traitements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteTraitement = async (req, res) => {
  const { idTraitement } = req.params;
  try {
    const deleted = await Traitement.destroy({
      where: { id: idTraitement }
    });

    if (deleted) {
      return res.status(200).json({ message: "Traitement supprimé avec succès" });
    } else {
      return res.status(404).json({ message: "Traitementintrouvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports={getAllTraitements,ajouterTraitement,deleteTraitement}