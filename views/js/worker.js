self.onMessage = function(e) {

    try {
        for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
        }
    }
    catch(e) {
        console.log("Error");
    }
};
