const html5QrCode = new Html5Qrcode("reader");

const configuration = {
    videoConstraints: {
        facingMode: "environment",
        fps: 30,
        // width: { ideal: 4096 }, // Ancho ideal de la resolución
        // height: { ideal: 2160 }, // Alto ideal de la resolución
        width: { ideal: 3840 }, // Ancho ideal de la resolución
        height: { ideal: 2160 }, // Alto ideal de la resolución
        frameRate: { ideal: 30 } // Velocidad de cuadros por segundo
    }
};

const onScanSuccess = () => {
    window.location.href = './ar.html';

    history.pushState(null, '', './index.html');
}

html5QrCode.start({ facingMode: "environment" }, configuration, onScanSuccess)
    .catch((error) => alert(`${error}`));