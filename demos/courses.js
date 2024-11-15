// example 1
const steps = ["one", "two", "three"];
const listTemplate(step) => {`<li>${step}</li>`};
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();