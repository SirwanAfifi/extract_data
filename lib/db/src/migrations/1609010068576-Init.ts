import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1609010068576 implements MigrationInterface {
  name = "Init1609010068576";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `coffee` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `category` varchar(255) NOT NULL, `recipe` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `coffee`");
  }
}
