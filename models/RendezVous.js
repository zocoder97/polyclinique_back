const { DataTypes } = require('sequelize');
const sequelize = require('./../db/db');
const Patient=require("./Patient");
const Personnel=require("./Personnel")

const RendezVous = sequelize.define('RendezVous', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    patientId: { type: DataTypes.INTEGER, references: { model: Patient, key: 'id' }, allowNull: false },
    personnelId: { type: DataTypes.INTEGER, references: { model: Personnel, key: 'id' }, allowNull: false },
    dateHeure: { type: DataTypes.DATE, allowNull: false },
    heure:{ type: DataTypes.STRING },
    motif: { type: DataTypes.TEXT }
  }, { timestamps: false }); 
  
  module.exports = RendezVous;
