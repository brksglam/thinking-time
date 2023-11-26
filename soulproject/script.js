let baslatDurdurBtn = document.getElementById("baslatDurdurBtn");
let zaman = document.getElementById("zaman");
let calisiyor = false;
let saniye = 0, dakika = 0, saat = 0;
let interval;

baslatDurdurBtn.onclick = function() {
    if (calisiyor) {
        clearInterval(interval);
        calisiyor = false;
    } else {
        interval = setInterval(zamanGuncelle, 1000);
        calisiyor = true;
    }
};

function zamanGuncelle() {
    saniye++;
    if (saniye >= 60) {
        saniye = 0;
        dakika++;
    }
    if (dakika >= 60) {
        dakika = 0;
        saat++;
    }
    zaman.innerText = (saat ? (saat > 9 ? saat : "0" + saat) : "00") + ":" +
                      (dakika ? (dakika > 9 ? dakika : "0" + dakika) : "00") + ":" +
                      (saniye > 9 ? saniye : "0" + saniye);
}
