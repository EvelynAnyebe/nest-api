import {MigrationInterface, QueryRunner} from "typeorm";

export class petMigration1629777649869 implements MigrationInterface {
    name = 'petMigration1629777649869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nest-api-db\`.\`pet\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`ownerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`nest-api-db\`.\`pet\` ADD CONSTRAINT \`FK_20acc45f799c122ec3735a3b8b1\` FOREIGN KEY (\`ownerId\`) REFERENCES \`nest-api-db\`.\`user_orm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`nest-api-db\`.\`pet\` DROP FOREIGN KEY \`FK_20acc45f799c122ec3735a3b8b1\``);
        await queryRunner.query(`DROP TABLE \`nest-api-db\`.\`pet\``);
    }

}
