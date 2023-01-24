import { CapacitorConfig } from '@capacitor/cli';
import { AppConst } from 'src/app/constants';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'take-and-go-fe',
  webDir: 'dist/take-and-go-fe',
  bundledWebRuntime: false,
  server: {
    url: 'http://'+AppConst.IP+':4200',
    androidScheme: 'http',
    cleartext: true,
  }
};

export default config;
