import { PrimaryKey, Property, Opt, Entity } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ columnType: 'timestamptz' })
    createdAt: Date & Opt = new Date();

    @Field(() => String)
    @Property({ columnType: 'timestamptz', onUpdate: () => new Date() })
    updatedAt: Date & Opt = new Date();

    @Field()
    @Property({ columnType: 'text', unique: true })
    username!: string;

    @Property({ columnType: 'text' })
    password!: string;
}
