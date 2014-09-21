(function() {
    "use strict";

    var $requestApp = function(name, opts, callback) {
        opts = opts || {};
        if(!name) return;
        this.$options = opts;
        this.$name = name || opts.name || 'none';
    }
})();
