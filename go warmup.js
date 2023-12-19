window.loadedimgs = 5;
window.audioInstances = {};

window.loadAudio = function (url) {
    const audio = new Audio(url);

    audio.addEventListener('canplay', () => {
        loadedimgs++;
        if (loadedimgs >= 14) {
            clearInterval(audioLoader);
            alert('Absolute Beast is ready. Please don\'t switch tabs. Buckle up and enjoy the next few minutes...')
        }
    }, { once: true })
    audioInstances[url] = audio;
}

window.getAudio = function (url) {
    return audioInstances[url];
}

window.preload = function (link) {
    const img = new Image();
    img.src = link;
    img.onerror = didntGoSoWell;
    img.addEventListener('load', () => {
        loadedimgs++;
        if (loadedimgs >= 14) {
            clearInterval(audioLoader);
            alert('Absolute Beast is ready. Please don\'t switch tabs. Buckle up and enjoy the next few minutes...')
        }
    }, { once: true });

}

window.didntGoSoWell = function () {
    if (window.didntwork) return;
    window.didntwork = true;
    alert('Error warming up Absolute Beast. Opening Glow to try and run it there. Please don\'t switch tabs. Buckle up and enjoy the next few minutes...');
    open('https://glow.rmunify.com');
}
preload('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/brojo.png');
preload('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/prutin.png');
preload('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/mrbeast.jpg', '0.5');
preload('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/samshamwilson.png', '1');
preload('https://media0.giphy.com/media/nr9fJiqSuXCaQ/giphy.gif?cid=6c09b9520joq237qkzujms6aa4c5ous2s4oak796z32cikw8&ep=v1_stickers_related&rid=giphy.gif&ct=s');
preload('https://yt3.googleusercontent.com/ytc/APkrFKb2SX90ud6mPbdKSHN3xltGPXWmcPOo4zxN3O2L=s900-c-k-c0x00ffffff-no-rj');
preload('https://johnlewis.scene7.com/is/image/JohnLewis/110397716?$rsp-pdp-port-640-82$');
preload('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/LordDarius.png');
preload('https://media.giphy.com/media/rEaIcIBQ4QeGY/giphy.gif');

window.loadAudios = function () {
    loadedimgs -= 5;
    loadAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/ambient2.mp3');
    loadAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/error.mp3');
    loadAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/android.mp3');
    loadAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/mrbeast.mp3');
    loadAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/hits/Rule Britannia.mp3');
}

window.audioLoader = setInterval(loadAudios, 1000);
loadAudios();

