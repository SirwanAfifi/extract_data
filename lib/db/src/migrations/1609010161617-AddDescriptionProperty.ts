import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionProperty1609010161617 implements MigrationInterface {
  name = "AddDescriptionProperty1609010161617";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `coffee` ADD `description` text NOT NULL"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `coffee` DROP COLUMN `description`");
  }
}
