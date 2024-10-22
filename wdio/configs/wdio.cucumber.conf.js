import {browser} from '@wdio/globals';
import * as dotenv from "dotenv";

dotenv.config({path: './wdio/configs/env/.env'});

export const config = {
    runner: 'local',
    maxInstances: 2,
    capabilities: [
        {
            'browserName': 'chrome',
            'goog:chromeOptions': {
                args: ['--headless=new', '--window-size=1280,800', '--no-sandbox'],
            },
        },
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://trello.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000, // browser.debug() timeout in milliseconds
        // retries: 1,
    },
    before: async function (capabilities, specs) {
        await browser.maximizeWindow();
    },
    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results-cucumber',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        useCucumberStepReporter: true,
    }]],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['wdio/test/steps/*.mjs'],
        timeout: 20000,
    },
    async beforeScenario(result) {
        await browser.maximizeWindow();
    },

    async afterScenario(result) {
        await browser.reloadSession();
    },
};
