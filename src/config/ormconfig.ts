import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
  } from '@nestjs/typeorm';
  import { ConfigModule, ConfigService } from '@nestjs/config';
  import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"
  
  export class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: ['dist/src/**/*.entity.js'],
        synchronize: false,
        migrations: ['dist/src/db/migrations/*.js'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      };
    }
  }
  
  export const configAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (
      ConfigService: ConfigService,
    ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(ConfigService),
    inject: [ConfigService],
  };


const config: MysqlConnectionOptions={
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
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
  