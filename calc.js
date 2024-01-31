function calc(){
    const urlParams = new URLSearchParams(window.location.search);
    const myInputValue = urlParams.get('amtt');
    document.getElementById('amt').innerHTML = myInputValue;
}