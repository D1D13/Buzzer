import et from './et.js'
import nft_id from './nft-id.js'
import creatr from './creatr.js'

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.buzzer-content', true);
    setVisible('#loading', false);
});
$(document).ready(() => {
    et();
    nft_id();
    creatr();
})