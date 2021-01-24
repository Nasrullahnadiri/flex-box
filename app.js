function calculate() {

    var hour = document.getElementById("hour").value;
    hour = parseInt(hour);
    var senf = document.getElementById("senf").value;
    senf = parseInt(senf);

    var sph;


    switch (senf) {
        case 13:
            sph = 60;
            break;
        case 47:
            sph = 70;
            break;
        case 812:
            sph = 90;
            break;
        default:
            alert("An Error accured please try again.");
    }

    var result = hour * sph;

    alert("Your salary is: " + result + " AFN")
}