const actualizar = () => {
    const text = document.querySelector("#text");
    const editor = document.querySelector("#editor");
    editor.srcdoc = text.value;

}