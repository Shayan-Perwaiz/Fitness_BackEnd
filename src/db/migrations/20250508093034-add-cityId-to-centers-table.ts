import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
    ALTER TABLE centers 
    ADD COLUMN city_id INT,
    ADD CONSTRAINT fk_city FOREIGN KEY(city_id) REFERENCES city(id) ON UPDATE CASCADE ON DELETE SET NULL
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
    ALTER TABLE centers
    DROP FOREIGN KEY fk_city
    DROP COLUMN city_id
    `);
  },
};
