import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.DEVELOPMENT === "true" ? ".env.test" : ".env",
    }),
    // TypeOrmModule.forRoot({
    //   type: "postgres",
    //   host: process.env.DB_HOST,
    //   port: Number(process.env.DB_PORT),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   entities: [UserEntity, "dist/**/*.entity.js"],
    //   synchronize: process.env.DEVELOPMENT === "true",
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
