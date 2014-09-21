(function() {
    "use strict";

    $deviceData = {
        // Check if the application runs in the standalone mode
        standalone: window.navigator.standalone || false,

        // Check for iOS device
        ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),

        // Check for android device
        android = !ios
    }

})();
