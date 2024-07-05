import {test} from "@playwright/test"
import {BatchInfo, Target, BrowserType, Configuration, DeviceName, Eyes, EyesRunner, VisualGridRunner, ScreenOrientation} from"@applitools/eyes-playwright";
let Batch: BatchInfo;
let Config: Configuration;
let Runner: EyesRunner
test.describe('Visual testing with applitools', ()=>{
    test.beforeAll('Applitools configuration', async ()=> {
        Runner = new VisualGridRunner();
        Batch = new BatchInfo('Visual test starter')
        Config = new Configuration();
        Config.setBatch(Batch);
        Config.addBrowsers({name: BrowserType.CHROME, width: 800, height: 600},
            {chromeEmulationInfo: {
                deviceName:DeviceName.iPhone_11, screenOrientation: ScreenOrientation.PORTRAIT
            }},
            {chromeEmulationInfo: {
                deviceName:DeviceName.Galaxy_S10_Plus, screenOrientation: ScreenOrientation.LANDSCAPE
            }}
        )
        })
    });
    //eyes will be opened before every test in suit
    let eyes: Eyes;
    test.beforeEach(async({page})=>{
        //Start visual testing with applitools and eyes
        eyes = new Eyes(Runner, Config);
        // Arguments: page instance, 'Your application name', viewport resolution
        await eyes.open(page, 'Applitools sandbox', 'Initial applitools test', {width: 800, height:600});
    
        test('Visual test with applitools', async({page})=>{
            await eyes.check("Login page", Target.window().fully());
            //navigation to the page
            await page.goto('https://sandbox.applitools.com/bank?layoutAlgo=true');
            await page.locator('#username').fill('user');
            await page.locator('#password').fill('password');
            await page.locator('#log-in').click();
            await page.locator('div .dashboard_dashboardContent_BUrjL').waitFor({state: 'attached'})
            //take a screenshot of login page
            //login to the application
            //take screenshot of main page
            await eyes.check('Main page', Target.window().fully());
            await eyes.close();    
    })
});