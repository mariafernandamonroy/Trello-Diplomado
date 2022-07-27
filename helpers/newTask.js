const form = document.querySelector("#formNewTask");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target;
  
  let today = new Date();

  let createDateTask = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const data = {
    title: formData.titleTask.value,
    person: formData.responsibleTask.value,
    details: formData.detailsTask.value,
    deadline: formData.deadLineTask.value,
    created: createDateTask,
    state: "to-do",
  };
  console.log(data);
  axios
    .post(`${API_URL}/tasks`, data)
    .then((result) => {
      createTask(result.data);
      formData.reset();
    })
    .catch((error = console.error(error)));
});
