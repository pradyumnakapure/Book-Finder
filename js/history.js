var clear_search = document.getElementById("clear_search");
var values = document.getElementById("values");
var clear  = document.getElementById("clear_search")

values.textContent =" "+ 1 + "." +" " + localStorage.getItem("name");

// document.addEventListener("click" , clean)

function clean() {
    window.localStorage.clear()
    document.getElementById("box2").style.cssText = 'display : none'
}

function on() {
    var x = "https://www.googleapis.com/books/v1/volumes?q=" + localStorage.getItem("name")
    window.open(x)
}