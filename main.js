var iframe = document.getElementById('MyIFrame');
iframe.contentDocument.body.addEventListener('mouseup', Handler);

function Handler() {
    alert('works');
}
