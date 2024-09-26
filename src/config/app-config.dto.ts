import { IsEnum, IsNotEmpty } from 'class-validator';
import { Environment, EnvironmentKeys } from './environment.config';

export class AppConfig {
  @IsNotEmpty()
  @IsEnum([Environment.development, Environment.production])
  environment: EnvironmentKeys;
}
