var webdriverio = require('webdriverio')

describe('Test Suite', function() {
    it('should <test case>', function() {
        return browser
            .url('/')
            .waitForVisible('.css-selector')
        .isVisible('.css-selector').should.eventually.be.true
    });

    it('should <test case>', function() {

        var savedTop1;
        var savedTop2;

        return browser
            //pre-move
            .getLocationInView('.css-selector', 'y').then(function(top1) {
                savedTop1 = top1
                    //console.log(savedTop1)
            })
            .moveToObject('.css-selector')
            .buttonDown(0)
            .pause(2500)
            .moveToObject('.css-selector', 0, 400)
            .buttonUp(0)
            .pause(2500)
            //post-move
            .getLocationInView('.css-selector', 'y').then(function(top2) {
                savedTop2 = top2
                    //console.log(savedTop2)
                var diffRow = (savedTop2) - (savedTop1);
                console.log(diffRow)
                expect(diffRow).to.be.above(200);

            })


    });

    it('should <test case>', function() {

        var savedTop1;
        var savedTop2;

        return browser
            //pre-move
            .getLocationInView('..css-selector', 'y').then(function(top1) {
                savedTop1 = top1
                    //console.log(savedTop1)
            })
            .moveToObject('.css-selector')
            .buttonDown(0)
            .pause(2500)
            .moveToObject('.css-selector', 0, -400)
            .buttonUp(0)
            .pause(2500)
            //post-move
            .getLocationInView('.css-selector', 'y').then(function(top2) {
                savedTop2 = top2
                    //console.log(savedTop2)
                var diffRow = (savedTop2) - (savedTop1);
                diffRow = Math.abs(diffRow);
                console.log(diffRow)
                expect(diffRow).to.be.above(200);

            })


    });    

    it('should <test case>', function() {
        var savedLeft1;
        var savedLeft2;

        return browser
            //pre-move
            .getLocationInView('.css-selector', 'x').then(function(Left1) {
                savedLeft1 = Left1
                    //console.log(savedLeft1)
            })
            .moveToObject('.css-selector')
            .buttonDown(0)
            .pause(2500)
            .moveToObject('.css-selector', 400, 0)
            .buttonUp(0)
            .pause(2500)
            //post-move
            .getLocationInView('.css-selector', 'x').then(function(Left1) {
                savedLeft2 = Left1
                    //console.log(savedLeft2)
                var diffCol = (savedLeft2) - (savedLeft1);
                console.log(diffCol)
                expect(diffCol).to.be.above(200);

            })


    });

    it('should <test case>', function() {
        var savedLeft1;
        var savedLeft2;

        return browser
            //pre-move
            .getLocationInView('.css-selector', 'x').then(function(Left1) {
                savedLeft1 = Left1
                    //console.log(savedLeft1)
            })
            .moveToObject('.css-selector')
            .buttonDown(0)
            .pause(2500)
            .moveToObject('.css-selector', -400, 0)
            .buttonUp(0)
            .pause(2500)
            //post-move
            .getLocationInView('.css-selector', 'x').then(function(Left1) {
                savedLeft2 = Left1
                    //console.log(savedLeft2)
                var diffCol = (savedLeft2) - (savedLeft1);
                diffCol = Math.abs(diffCol);
                console.log(diffCol)
                expect(diffCol).to.be.above(200);

            })


    });
});
