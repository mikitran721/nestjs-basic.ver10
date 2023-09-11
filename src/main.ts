import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void>{
  const PORT = 3333;
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT,()=>{
    console.log(`App start with port ${PORT}`)
  })
}

bootstrap();