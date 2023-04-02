function wide(){
    const a = parseFloat(document.getElementById("pad").value);
    const b = parseFloat(document.getElementById("height").value);
    const c = 0.5 * a * b;
    document.getElementById("result-triangle-wide").textContent = c;
}