var iframe = document.getElementById('myIFrame');
iframe.contentDocument.body.addEventListener('mouseup', Handler);

function Handler() {
    alert('works');
}
