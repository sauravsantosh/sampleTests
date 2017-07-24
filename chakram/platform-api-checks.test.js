var chakram = require('chakram');
var expect = chakram.expect;
var requestDefault = chakram.setRequestDefaults({
    proxy: 'http://aws-proxy.uk.icap.com:8080'
});

describe("API Tests - Endpoint Validation (SP, IDP & User Manifest)", function() {

    var env = "uat";
    var channel = "fusion";
    this.timeout(5000);

    it("Validate Session - unauthorised SP session sends expected statusCode", function() {
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/sp/v1/saml2/" + channel + "/validateSession"
        var apiRequest = chakram.get(baseUrl);
        return apiRequest.then(function(res) {
            var status = res.response.statusCode;
            var statusMessage = res.response.statusMessage;
            var message = res.body.message;
            var nextState = res.body.nextState;

            expect(status).to.equal(401);
            expect(statusMessage).to.equal("Unauthorized");
            expect(message).to.equal("UNAUTHORIZED");
            expect(nextState).to.equal("IDP_AUTH");
        });
        return chakram.wait();
    });

    it("User Logout - when user have invalid SP session", function() {
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/sp/v1/saml2/" + channel + "/userLogout"
        var apiRequest = chakram.post(baseUrl);
        return apiRequest.then(function(res) {
            var status = res.response.statusCode;
            var statusMessage = res.response.statusMessage;
            var message = res.body.message;
            var nextState = res.body.nextState;

            expect(status).to.equal(200);
            expect(statusMessage).to.equal("OK");
            expect(message).to.equal("SUCCESS");
            expect(nextState).to.equal("LOGIN");
        });
        return chakram.wait();
    });

    it("Create Session - invalid request url", function() {
      var baseUrl = "https://" + env + ".icap" + channel + ".com/api/sp/v1/saml2/" + channel + "/validateSessionxx"
      var apiRequest = chakram.get(baseUrl);
        return apiRequest.then(function(res) {
            var status = res.response.statusCode;
            var statusMessage = res.response.statusMessage;
            var message = res.body.message;
            var nextState = res.body.nextState;

            expect(status).to.equal(404);
            expect(statusMessage).to.equal("Not Found");
            expect(message).to.equal("SERVER_ERROR");
            expect(nextState).to.equal("TERMINAL");
        });
        return chakram.wait();
    });

    it("Create Session - invalid SP session", function() {
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/sp/v1/saml2/" + channel + "/createSession"
        var apiRequest = chakram.post(baseUrl);
        return apiRequest.then(function(res) {
            var status = res.response.statusCode;
            var statusMessage = res.response.statusMessage;
            var message = res.body.message;
            var nextState = res.body.nextState;

            expect(status).to.equal(500);
            expect(statusMessage).to.equal("Internal Server Error");
            expect(message).to.equal("SERVER_ERROR");
            expect(nextState).to.equal("TERMINAL");
        });
        return chakram.wait();
    });

    it("Create Session - invalid SP session", function() {
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/sp/v1/saml2/" + channel + "/createSession"
        var apiRequest = chakram.post(baseUrl);
        return apiRequest.then(function(res) {
            var status = res.response.statusCode;
            var statusMessage = res.response.statusMessage;
            var message = res.body.message;
            var nextState = res.body.nextState;

            expect(status).to.equal(500);
            expect(statusMessage).to.equal("Internal Server Error");
            expect(message).to.equal("SERVER_ERROR");
            expect(nextState).to.equal("TERMINAL");
        });
        return chakram.wait();
    });

    it("IDP - User Recovery Validation AD user", function() {
        var payload = {
	                     "username": "saurav.santosh@icap.com",
	                      "emailTemplate": "hq",
	                       "env": "uat"
                       }
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/idp/v1/user/recovery"
        var apiRequest = chakram.post(baseUrl, payload);
        return apiRequest.then(function(res) {
             var status = res.response.statusCode;
             var statusMessage = res.response.statusMessage;
             var message = res.body.message;
             var nextState = res.body.nextState;

             expect(status).to.equal(202);
             expect(statusMessage).to.equal("Accepted");
             expect(message).to.equal("AD_MASTERED");
             expect(nextState).to.equal("TERMINAL");
        });
        return chakram.wait();
    });

    it("IDP - User Recovery Incorrect email address", function() {
        var payload = {
	                     "username": "abc@icap.com",
	                      "emailTemplate": "hq",
	                       "env": "uat"
                       }
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/idp/v1/user/recovery"
        var apiRequest = chakram.post(baseUrl, payload);
        return apiRequest.then(function(res) {
             var status = res.response.statusCode;
             var statusMessage = res.response.statusMessage;
             var message = res.body.message;
             var nextState = res.body.nextState;

             expect(status).to.equal(202);
             expect(statusMessage).to.equal("Accepted");
             expect(message).to.equal("UNAUTHORIZED");
             expect(nextState).to.equal("CURRENT");
        });
        return chakram.wait();
    });

    it("IDP - User Recovery Validation test user", function() {
        var payload = {
	                     "username": "ssqa_test25@icap.com",
	                      "emailTemplate": "hq",
	                       "env": "uat"
                       }
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/idp/v1/user/recovery"
        var apiRequest = chakram.post(baseUrl, payload);
        return apiRequest.then(function(res) {
             var status = res.response.statusCode;
             var statusMessage = res.response.statusMessage;
             var message = res.body.message;
             var nextState = res.body.nextState;

             expect(status).to.equal(200);
             expect(statusMessage).to.equal("OK");
             expect(message).to.equal("SUCCESS");
             expect(nextState).to.equal("RESET");
        });
        return chakram.wait();
    });

    it("User Manifest - Request and validation", function() {
        var baseUrl = "https://" + env + ".icap" + channel + ".com/api/bootstrap/v2/manifest/" + channel
        var apiRequest = chakram.get(baseUrl);
        return apiRequest.then(function(res) {
             var status = res.response.statusCode;
             var statusMessage = res.response.statusMessage;
             var staticUrl = res.body.baseUrl;
             var swfPath = res.body.swfPath;

             expect(status).to.equal(200);
             expect(statusMessage).to.equal("OK");
             expect(staticUrl).to.equal("https://" + env + "static.icap" + channel + ".com");
             expect(swfPath).to.equal("/modules");
        });
        return chakram.wait();
    });
});
