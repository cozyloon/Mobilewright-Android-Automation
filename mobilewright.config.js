const { defineConfig } = require('mobilewright');

module.exports = defineConfig({
  platform: 'android',
  deviceName: /Pixel/,
  bundleId :  "com.androidsample.generalstore",
  installApps: './apk/General-Store.apk',
  timeout: 120_000,
  testDir: './tests',
  reporter: 'html',
});
