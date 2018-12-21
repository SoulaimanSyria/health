import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config";


export const APP_CONFIG: InjectionToken<AppConfig>
  = new InjectionToken('app.config');

export const AppConfiguration: AppConfig = {
  apiBaseUrl: 'http://www.awbhealthsystem.somee.com/',
}
