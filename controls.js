(function () {
    var Controls = function () {
        this.captureKeys = {
           
            "84": this.toggleTheatreMode, // t
            
        };
        this.registerEventListeners();
    }

    Controls.prototype.registerEventListeners = function() {
        var controls = this;
        document.body.onkeydown = function(e) {
            var trigger = controls.captureKeys[e.keyCode];
            if (! trigger || controls.isFocusingInput()) {
                return;
            }

            if (! e.metaKey) {
                e.preventDefault();
            }

            trigger.call(controls);
        };
    };

    Controls.prototype.isFocusingInput = function() {
        return -1 !== [
            'input',
            'textarea'
        ].indexOf(document.activeElement.tagName.toLowerCase());
    };

    Controls.prototype.isLive = function() {
        return null === location.pathname.match(new RegExp('/videos/*', 'iu'));
    };

   

    Controls.prototype.toggleTheatreMode = function() {
        this.theatreModeButton().click();
    };

 

    new Controls();
})();
