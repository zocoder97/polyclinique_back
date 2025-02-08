const { DataTypes } = require('sequelize');
const sequelize = require('./../db/db');
const DossierMedical=require("./DossierMedical");

const Traitement = sequelize.define('Traitement', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dossierId: { type: DataTypes.INTEGER, references: { model: DossierMedical, key: 'id' }, allowNull: false },
    medicament: { type: DataTypes.STRING, allowNull: false },
    dosage: { type: DataTypes.STRING, allowNull: false },
    frequence: { type: DataTypes.STRING, allowNull: false },
    dateDebut: { type: DataTypes.DATEONLY, allowNull: false },
    dateFin: { type: DataTypes.DATEONLY, allowNull: false }
  }, { timestamps: false });

  //dossierId,medicament,dosage,frequence,dateDebut,dateFin
  
  module.exports = Traitement;