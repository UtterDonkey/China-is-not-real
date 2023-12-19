getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/ambient2.mp3').play();
setInterval(() => {
    setTimeout(() => {
        getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/hits/Rule Britannia.mp3').play();
    }, 7000)

    setTimeout(() => {
        getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/hits/Rule Britannia.mp3').pause();
    }, 10000)
}, 5000)
setTimeout(() => {
    getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/mrbeast.mp3').play();
    setTimeout(() => {
        var spin = document.createElement("style"); spin.innerHTML = `@keyframes spin {from {rotate: 0deg}to {rotate: 360deg}}*{animation: spin 2s infinite;}`, document.head.appendChild(spin);
    }, 13200)
}, 7000)

setInterval(() => {
    getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/error.mp3').currentTime = 0.3;
    getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/error.mp3').play();
}, 700);

setInterval(() => {
    getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/android.mp3').currentTime = 1;
    getAudio('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/android.mp3').play();
}, 4000);


for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.src = 'https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/LordDarius.png'
    Object.assign(img.style, {
        position: 'fixed',
        zIndex: '9999999',
        maxWidth: '25vw',
        top: '0%',
        left: '0%',
        transition: 'top 1s ease, left 1s ease, filter 1s ease'
    });
    document.body.append(img)
    setInterval(() => {
        img.style.top = Math.random() * 100 + '%';
        img.style.left = Math.random() * 100 + '%';
        img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    }, 1000);
}
setTimeout(() => {

    const img = document.createElement('img');
    img.src = 'https://johnlewis.scene7.com/is/image/JohnLewis/110397716?$rsp-pdp-port-640-82$';
    Object.assign(img.style, {
        position: 'fixed',
        zIndex: '9999999',
        maxWidth: '50vw',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
        transition: 'top 1s ease, left 1s ease, filter 1s ease'
    });
    document.body.append(img)


}, 2000)



setTimeout(() => {
    const img = document.createElement('img');
    img.src = 'https://yt3.googleusercontent.com/ytc/APkrFKb2SX90ud6mPbdKSHN3xltGPXWmcPOo4zxN3O2L=s900-c-k-c0x00ffffff-no-rj'
    Object.assign(img.style, {
        position: 'fixed',
        zIndex: '9999999',
        maxWidth: '25vw',
        top: '0%',
        left: '0%',
        transition: 'top 1s linear, left 1s linear, filter 1s linear'
    });
    document.body.appendChild(img)
    setInterval(() => {
        img.style.top = Math.random() * 100 + '%';
        img.style.left = Math.random() * 100 + '%';

    }, 1000);
}, 2000)

function addPerson(link, scale) {
    const img = document.createElement('img');
    img.src = link;
    Object.assign(img.style, {
        position: 'fixed',
        zIndex: '9999999',
        maxWidth: '100vw',
        maxHeight: '100vh',
        top: '50%',
        left: '50%',
        scale: scale || '1.5'
    });
    document.body.appendChild(img)
    setInterval(() => {
        img.style.top = Math.random() * 80 + '%';
        img.style.left = Math.random() * 80 + '%';

    }, 1000);
}
setTimeout(() => {
    addPerson('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/brojo.png');
    addPerson('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/prutin.png');
    addPerson('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/mrbeast.jpg', '0.5');
    addPerson('https://raw.githubusercontent.com/UtterDonkey/China-is-not-real/main/samshamwilson.png', '1');
    for (let i = 0; i < 5; i++) {
        addPerson('https://media0.giphy.com/media/nr9fJiqSuXCaQ/giphy.gif?cid=6c09b9520joq237qkzujms6aa4c5ous2s4oak796z32cikw8&ep=v1_stickers_related&rid=giphy.gif&ct=s');
    }
    addPerson('https://media.giphy.com/media/rEaIcIBQ4QeGY/giphy.gif', '0.7');
}, 5000)
setInterval(() => {
    document.body.style.translate = `${Math.random() * 25}px ${Math.random() * 25}px`

});

setTimeout(() => {
    const img = document.createElement('h1');
    img.innerText = 'Darius Broke The Internet Again';
    Object.assign(img.style, {
        position: 'fixed',
        zIndex: '999999999999',
        width: '100vw',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
        fontSize: '6vw',
        textAlign: 'center',
        color: 'red',
        webkitTextStroke: '2px black'

    });
    document.body.appendChild(img);
    colours = ['red', 'yellow', 'green', 'blue', 'black']
    setInterval(() => {
        img.remove();
        setTimeout(() => {
            document.body.appendChild(img)
        }, 1000)
        img.style.color = colours[Math.floor(Math.random() * colours.length)]
    }, 2000);
}, 500)
