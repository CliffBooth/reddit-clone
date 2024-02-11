import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER, __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/postgresql";
import path from 'path'
import { Migrator } from "@mikro-orm/migrations";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pathTs: path.join("src", "./migrations"),
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post],
    dbName: DATABASE_NAME,
    user: DATABASE_USER, 
    password: DATABASE_PASSWORD,
    debug: !__prod__,
    driver: PostgreSqlDriver,
    extensions: [Migrator],
} as Parameters<typeof MikroORM.init>[0]