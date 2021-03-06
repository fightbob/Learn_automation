/**
 * Created by rzeng on 7/22/15.
 */
describe('Protractor Demo App', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('https://localhost');
    });
    it('Send a message', function() {
        // Login as Administrator
        element(by.id('user_id')).sendKeys('administrator');
        element(by.id('password')).sendKeys('changeme');

        element(by.id('entry-login')).click();

        browser.sleep(3000);
        // expect(browser.getTitle()).toEqual('https://localhost/ultra/stream');

        browser.ignoreSynchronization = false;
        element(by.partialLinkText("Messages")).click();

        // Click on add message icon
        // TBD: need to find a way to click the specify course Add Message icon.
        var addMsgIcon = element(by.css('[aria-label="New Message"]'));
        addMsgIcon.click();

        // Add new message panel is opened and search specify recipient.
        var recipientInput = element(by.id('participant-list'));
        var messageTextarea = element(by.id('message-reply'));
        var sendButton = element(by.partialButtonText('Send'));
        var searchRecipient = "Liu";
        var recipient = 'benf Liu';

        recipientInput.clear();
        recipientInput.sendKeys(searchRecipient);

        var specifyRecipient = element(by.cssContainingText('.participant-name', recipient));
        specifyRecipient.click();

        // Input the Message
        messageTextarea.clear();
        messageTextarea.sendKeys("Automation Messages");

        // Click Send button
        sendButton.click();
        browser.sleep(2000);

        // Assert
        var newMessageUsername = element(by.css('ng-isolate-scope usernames'));
        var newMessageContent = element(by.css('preview ng-binding'));
        newMessageUsername.getText().then(function(val) {
            console.log("*******" + val);});

        newMessageContent.getText().then(function(val) {
            console.log("*******" + val);});

       browser.sleep(3000);
    });
});
