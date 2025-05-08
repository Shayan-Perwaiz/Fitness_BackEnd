import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS booking(
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT,
      center_id INT,
      CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES USERS(id) ON UPDATE CASCADE ON DELETE SET NULL,
      CONSTRAINT fk_center FOREIGN KEY(center_id) REFERENCES CENTERS(id) ON UPDATE CASCADE ON DELETE SET NULL)
      `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS booking
      `);
  },
};
