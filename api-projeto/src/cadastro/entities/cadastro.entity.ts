import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_cadastro'})
export class Cadastro{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    nome: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    email: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    genero: string

    @IsNotEmpty()
    @Column()
    dataNasc: Date

    @IsNotEmpty()
    @MaxLength(8)
    @Column({nullable: false, length: 8})
    senha: string

}