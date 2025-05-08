import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE users
      ADD COLUMN user_type_id INT NULL;
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE users
      ADD CONSTRAINT fk_user_type_id FOREIGN KEY (user_type_id)
      REFERENCES user_types(id)
      ON DELETE SET NULL
      ON UPDATE CASCADE;
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE users
      DROP FOREIGN KEY fk_user_type_id;
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE users
      DROP COLUMN user_type_id;
    `);
  },
};
