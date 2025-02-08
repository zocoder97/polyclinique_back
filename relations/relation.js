
const Personnel = require('./../models/Personnel');
const Patient = require('./../models/Patient');
const DossierMedical = require('./../models/DossierMedical');
const Traitement = require('./../models/Traitement');
const RendezVous = require('./../models/RendezVous');

// Un patient peut avoir plusieurs dossiers médicaux
Patient.hasMany(DossierMedical, { foreignKey: 'patientId', as: 'dossiers' });
DossierMedical.belongsTo(Patient, { foreignKey: 'patientId', as: 'patient' });

// Un dossier médical peut avoir plusieurs traitements
DossierMedical.hasMany(Traitement, { foreignKey: 'dossierId', as: 'traitements' });
Traitement.belongsTo(DossierMedical, { foreignKey: 'dossierId', as: 'dossier' });

// Un patient peut prendre plusieurs rendez-vous
Patient.hasMany(RendezVous, { foreignKey: 'patientId', as: 'rendezVous' });
RendezVous.belongsTo(Patient, { foreignKey: 'patientId', as: 'patient' });

// Un personnel peut avoir plusieurs rendez-vous
Personnel.hasMany(RendezVous, { foreignKey: 'personnelId', as: 'rendezVous' });
RendezVous.belongsTo(Personnel, { foreignKey: 'personnelId', as: 'personnel' });


