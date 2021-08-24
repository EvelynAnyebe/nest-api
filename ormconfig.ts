import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions"

const config: MysqlConnectionOptions={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'P@ssword',    
    database: 'nest-api-db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli:{
        migrationsDir: 'src/db/migrations'
    }
}

export default config