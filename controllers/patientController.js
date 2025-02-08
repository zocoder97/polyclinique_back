const Patient = require('../models/Patient');

// Ajouter un patient
const ajouterPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const modifierPatient = async (req, res) => {
  const { idPatient } = req.params;
  try {
    const [updated] = await Patient.update(req.body, {
      where: { id: idPatient },
    });

    if (updated) {
      const patientUpdated = await Patient.findOne({ where: { id: idPatient } });
      return res.status(200).json(patientUpdated);
    } else {
      return res.status(404).json({ message: "Personnel introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  const { idPatient } = req.params;
  try {
    const deleted = await Personnel.destroy({
      where: { id: idPatient }
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

const getPatientById = async (req, res) => {
  const { idPatient } = req.params;
  try {
    const patient = await Patient.findOne({ where: { id: idPatient } });

    if (patient) {
      return res.status(200).json(patient);
    } else {
      return res.status(404).json({ message: "Personnel introuvable" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports={ajouterPatient,getAllPatients,modifierPatient,deletePatient,getPatientById}