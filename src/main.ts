import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap(): Promise<void>{
  const PORT = 3333;
  const app = await NestFactory.create(AppModule)
  
  // use global validation
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT,()=>{
    console.log(`App start with port ${PORT}`)
  })
}

bootstrap();