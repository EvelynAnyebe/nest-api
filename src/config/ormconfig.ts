import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
  } from '@nestjs/typeorm';
  import { ConfigModule, ConfigService } from '@nestjs/config';
  
  export default class TypeOrmConfig {
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
  