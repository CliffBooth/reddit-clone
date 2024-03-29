import "reflect-metadata";

import { MikroORM } from "@mikro-orm/core"
import configs from './mikro-orm.config'
import express from 'express'
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloReslover } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
    const orm = await MikroORM.init(configs);
    await orm.getMigrator().up();

    const app: any = express()
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloReslover, PostResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em.fork() })
    });
    await apolloServer.start()

    apolloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('server started')
    })
}

main()