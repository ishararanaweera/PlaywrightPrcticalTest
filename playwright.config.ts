import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ['selectElementsOfHerokuapp.spec.ts'],
  use: {
      headless:false,
      screenshot: 'only-on-failure'
  },
  reporter: [['dot'],['json',{
    outputFile: 'jsonReports/jsonReport.json'

  }], ['html',{
    open: 'never'
  }]]
}

export default config;