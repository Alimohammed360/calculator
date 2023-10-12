function display(value){
    document.getElementById("cal").value += value
}
function ac() {
    document.getElementById("cal").value = ""
}
function equal() {
    let input = document.getElementById("cal")
    input.value = eval(input.value)
}