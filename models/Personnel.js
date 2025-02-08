const { DataTypes } = require('sequelize');
const sequelize = require('./../db/db');

const Personnel = sequelize.define('Personnel', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  specialite: { type: DataTypes.STRING },
  numeroTelephone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

module.exports = Personnel;