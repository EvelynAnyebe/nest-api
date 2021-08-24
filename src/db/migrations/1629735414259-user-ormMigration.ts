import {MigrationInterface, QueryRunner} from "typeorm";

export class userOrmMigration1629735414259 implements MigrationInterface {
    name = 'userOrmMigration1629735414259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nest-api-db\`.\`user_orm\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nest-api-db\`.\`user_orm\``);
    }

}
