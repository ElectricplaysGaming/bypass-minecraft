var iframe = document.getElementById('MyIFrame');
iframe.contentDocument.body.addEventListener('keydown', Handler);

function Handler() {
    alert('works');
}
