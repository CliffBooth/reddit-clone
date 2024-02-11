import { Entity, Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
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
    @Property({ columnType: 'text' })
    title!: string;

    constructor(title: string) {
        this.title = title;
    }
}
