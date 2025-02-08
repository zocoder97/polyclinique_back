const {Sequelize}=require('sequelize');

module.exports=new Sequelize('polyclinique','root','',{
    dialect:'mysql',
    host:'localhost'
});