import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
import { MyContext } from '../types';
import { User } from '../entities/User';

@InputType()
class UserNmaePasswordInput {
    @Field()
    username!: string;
    @Field()
    password!: string;
}

@Resolver()
export class UserResolver {
    @Mutation(() => String)
    async register(
        @Arg('options') options: UserNmaePasswordInput,
        @Ctx() { em }: MyContext
    ) {
        const user = em.create(User, { username: options.username });
        await em.persistAndFlush(user)
        return 'hello';
    }
}
