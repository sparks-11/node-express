module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "userTest",
    {
      userId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id",
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "user_name",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "user_password",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    {
      freezeTableName: true,
      tableName: "user_test",
      timestamps: true,
      underscored: true,
    }
  );
};
