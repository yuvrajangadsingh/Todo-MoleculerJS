"use strict";
module.exports = (sequelize, DataTypes) => {
	const Todos = sequelize.define(
		"todos",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
      },
      completed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
      },
      createdAt: {
          type: DataTypes.DATE,
      },
      updatedAt: {
          type: DataTypes.DATE,
      }
		},
		{}
	);
	
	return Todos;
};
