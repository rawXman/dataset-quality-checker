const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
    const objectsCount = document.getElementById("objectsCount");
    const classesList = document.getElementById("classesList");

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {
        const data = JSON.parse(reader.result);

if (!data.objects || !Array.isArray(data.objects)) {
    classesList.innerHTML = "⚠ Invalid dataset structure";
    objectsCount.textContent = "";
    return;
}
        const classCounts = {};
        let missingClassCount = 0;
        let missingIdCount = 0;
        const objectIds = new Set();
        let duplicateCount = 0;
        const duplicateIds = [];

        for (const object of data.objects) {
            const className = object.class;

            if (!className) {
                missingClassCount++;
            } else {
                if (classCounts[className]) {
                    classCounts[className]++;
                } else {
                    classCounts[className] = 1;
                }
            }

if (object.id === undefined) {
    missingIdCount++;
} else {
    if (objectIds.has(object.id)) {
        duplicateCount++;
        duplicateIds.push(object.id);
    } else {
        objectIds.add(object.id);
    }
}
        }

        objectsCount.textContent = "Objects: " + data.objects.length;

        classesList.innerHTML = "Classes:<br>";

for (const className in classCounts) {
    const percentage =
        (classCounts[className] / data.objects.length * 100).toFixed(1);

    classesList.innerHTML +=
        className + ": " + classCounts[className] +
        " (" + percentage + "%)<br>";
}

        if (missingClassCount > 0) {
            classesList.innerHTML +=
                "<br>⚠ Missing class: " + missingClassCount;
        }
if (missingIdCount > 0) {
    classesList.innerHTML +=
        "<br>⚠ Missing ID: " + missingIdCount;
}
       if (duplicateCount > 0) {
    classesList.innerHTML +=
        "<br>⚠ Duplicate objects: " + duplicateCount;

    classesList.innerHTML +=
        "<br>Duplicate IDs: " + duplicateIds.join(", ");
}
const qualityIssues =
    missingClassCount + missingIdCount + duplicateCount;

classesList.innerHTML +=
    "<br><br>Quality issues: " + qualityIssues;

        console.log(data);
    };

    reader.readAsText(file);
});