
document.addEventListener('copy', function (e) {

    let data = e.clipboardData.getData('application/json')
    console.log(data)
    let jsObject = JSON.parse(data);

})
