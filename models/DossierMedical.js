const { DataTypes } = require('sequelize');
const sequelize = require('./../db/db');
const Patient=require("./Patient")

const DossierMedical = sequelize.define('DossierMedical', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    patientId: { type: DataTypes.INTEGER, references: { model: Patient, key: 'id' }, allowNull: false },
    diagnostic: { type: DataTypes.TEXT, allowNull: false },
    prescription: { type: DataTypes.TEXT },
    note: { type: DataTypes.TEXT }
  }, { timestamps: false });

  //diagnostic, prescription,note
  
  module.exports = DossierMedical;
  