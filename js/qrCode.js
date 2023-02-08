function criarQRCode() {
    let googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=H&chl=https://github.com/NiltonSilva';
    document.querySelector('#qrCodeImage').src = googleChartAPI;
}