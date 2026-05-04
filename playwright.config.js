// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000, // modificar timeouts generales
  expect:{
    timeout:40*1000,// wait para los asserts.
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false, // Propiedad para que siempre abra el navegador.


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

 
});

module.exports = config;