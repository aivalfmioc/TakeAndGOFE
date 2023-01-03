import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'take-and-go-fe',
  webDir: 'dist/take-and-go-fe',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.137.1:4200',
    cleartext: true,
  }
};

export default config;
