import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`CREATE TABLE IF NOT EXISTS centers(
      id INT PRIMARY KEY AUTO_INCREMENT,
      address VARCHAR(50) NOT NULL,
      state VARCHAR(20) NOT NULL,
      pincode VARCHAR(10) NOT NULL,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
      `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS centers`);
  },
};
