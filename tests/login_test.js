Feature('login');

Scenario('test something', ({ I }) => {
    I.amOnPage('/my-account');
    I.fillField('//input[@id="username"]', 'customer');
    I.fillField('//input[@id="password"]', secret('123456'));
    I.click('Login');
});
