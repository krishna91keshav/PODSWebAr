AFRAME.registerComponent('compatibility-check', {
    init() {
        const REASONS = XR8.XrDevice.incompatibleReasons({allowedDevices: XR8.XrConfig.device().MOBILE});
        
        if(REASONS.length > 0 || !XR8.XrDevice.isDeviceBrowserCompatible({allowedDevices: XR8.XrConfig.device().MOBILE}))
        {
            handleError();
        }

    function handleError() {
        document.getElementsByClassName("landing-container")[0].classList.add("hidden");
        $("#desktop-screen").load("html/desktop-screen.html");
    }
},
})