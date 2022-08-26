function validateForm() {
    var id = document.querySelector("#id").value;
    if (id == null || id == "") {
        document.getElementById("id_span").innerHTML = "First name must be filled out";
        // alert("First name must be filled out");
        return false;
    }
}