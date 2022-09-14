import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadastro } from './cadastro/entities/cadastro.entity';
import { cadastroModule } from './cadastro/modules/cadastro.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { postagemModule } from './postagem/modules/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { temaModule } from './tema/modules/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_projeto',
      entities: [Postagem, Tema, Cadastro],
      synchronize: true
    }),
postagemModule,
temaModule,
cadastroModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}