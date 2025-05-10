document.getElementById("add_button").addEventListener('click', function () {
    const input_box = document.getElementById("input_box");
    const input_value = input_box.value.trim();

    if (input_value === "") return;

    const li = document.createElement("li");
    li.textContent = input_value;

    // Remove task on click
    li.addEventListener("click", function () {
        this.remove();
    });

    document.getElementById("task_list").appendChild(li);
    input_box.value = "";
});
