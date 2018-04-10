let input = document.getElementById('input');
let output = document.getElementById('output');
let base64Encode = document.getElementById('base64Encode');
let base64Decode = document.getElementById('base64Decode');
let urlEncode = document.getElementById('urlEncode');
let urlDecode = document.getElementById('urlDecode');

base64Encode.onclick = function(e) {
    output.value = btoa(input.value);
};
base64Decode.onclick = function(e) {
    output.value = atob(input.value);
};

urlEncode.onclick = function(e) {
    output.value = encodeURI(input.value);
};

urlDecode.onclick = function(e) {
    output.value = decodeURI(input.value);
};