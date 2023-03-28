'use strict'

let myFunction =  (sequelize,DataTypes) => {
  let Doc = sequelize.define('docs',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name_original: {
      type:DataTypes.STRING,
      allowNull:false
    },
    name_personalizado: {
      type:DataTypes.STRING,
      allowNull:false
    },
    extension: {
      type:DataTypes.STRING,
      allowNull:false
    },
    mimetype: {
      type:DataTypes.STRING,
      allowNull:false
    }
  })
  return Doc
};

let name = "docs"
export { myFunction, name };