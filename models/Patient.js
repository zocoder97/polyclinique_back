const { DataTypes } = require('sequelize');
const sequelize = require('./../db/db');

const Patient = sequelize.define('Patient', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    dateNaissance: { type: DataTypes.DATEONLY, allowNull: false },
    adresse: { type: DataTypes.STRING, allowNull: false },
    numeroTelephone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    historiqueMedical: { type: DataTypes.TEXT }
  }, { timestamps: false });

  //nom,prenom,dateNaissance,adresse,numeroTelephone,email,historiqueMedical
  
  module.exports = Patient;
