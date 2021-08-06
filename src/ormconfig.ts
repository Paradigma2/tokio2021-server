import { ConnectionOptions } from 'typeorm';

export const ormConfig: ConnectionOptions = {
    cli: {
      migrationsDir: "src/migrations",
    },
    database: 'realties',
    entities: [
        __dirname + '/entities/*{.ts,.js}',
    ],
    host: 'localhost',
    password: 'VaIstinu911',
    port: 5432,
    synchronize: true,
    type: 'postgres',
    username: 'stevan',
};
