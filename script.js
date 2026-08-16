const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
    const objectsCount = document.getElementById("objectsCount");
const classesList = document.getElementById("classesList");
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {

        const data = JSON.parse(reader.result);
        for (const object of data.objects) {
    console.log(object.class);
    classesList.innerHTML += "<br>" + object.class;
}
       objectsCount.textContent = "Objects: " + data.objects.length;

console.log(data);

    };

    reader.readAsText(file);

});