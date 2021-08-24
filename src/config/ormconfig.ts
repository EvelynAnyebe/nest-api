import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"
import {DBConfig} from "./configuration"

const config: MysqlConnectionOptions={
    type: 'mysql',
    ...DBConfig,
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