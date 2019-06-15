/*******************************************************************************
 * FILE: User
 * DESCRIPTION:
 *  A User Entity
 ******************************************************************************/

import {Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Snowflake} from "discord.js";
import {School} from "./School";


@Entity("users")
export class User {

    @PrimaryColumn({ name: "user_id", type: "bigint" })
    id!: Snowflake;

    @CreateDateColumn({ name: "join_date", type: "timestamptz" })
    joinDate!: Date;

    @ManyToOne(type => School, school => school.students)
    @JoinColumn({ name: "school_id" })
    school!: School;

}