function validateForm() {
    var id = document.querySelector("#id").value;
    if (id == null || id == "") {
        document.getElementById("id_span").innerHTML = "Id must be filled out";
        // alert("First name must be filled out");
        return false;
    }

    var name = document.querySelector("#name").value;
    if (name == null || name == "") {
        document.getElementById("name_span").innerHTML = "Name must be filled out";
        // alert("First name must be filled out");
        return false;
    }
}