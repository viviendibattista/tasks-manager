<template>
  <div class="container">
    <div class="form-row">
      <div class="col-row">
        <input
          type="text"
          class="form-control mt-2"
          @keyup="searchTask"
          v-model="q"
          placeholder="Rechercher une tache"
        />
      </div>
    </div>

    <add-task @task-added="refresh"></add-task>
    <ul class="list-group">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
        v-for="task in tasks.data"
        :key="task.id"
      >
        <a href="#">{{ task.name }}</a>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#editTaskModal"
            @click="getTask(task.id)"
          >
            Editer
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteTask(task.id)"
          >
            Supprimer
          </button>
        </div>
      </li>
      <edit-task :taskToEdit="taskToEdit" @task-updated="refresh"></edit-task>
    </ul>
    <pagination :data="tasks" @pagination-change-page="getResults" class="mt-5">
      <span slot="prev-nav">&lt; Précédent</span>
      <span slot="next-nav">Suivant &gt;</span>
    </pagination>
  </div>
</template>

<script>
import AddTaskComponent from "./AddTaskComponent.vue";
import EditTaskComponent from "./EditTaskComponent.vue";
export default {
  components: { AddTaskComponent, EditTaskComponent },
  name: "TaskComponent",
  data() {
    return {
      tasks: {},
      taskToEdit: "",
      q: "",
    };
  },
  created() {
    axios
      .get("http://example-app/tasksList")
      .then((response) => (this.tasks = response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    getResults(page = 1) {
      axios
        .get("http://example-app/tasksList?page=" + page)
        .then((response) => {
          this.tasks = response.data;
        });
    },
    getTask(id) {
      axios
        .get("http://example-app/tasks/edit/" + id)
        .then((response) => (this.taskToEdit = response.data))
        .catch((error) => console.log(error));
    },
    deleteTask(id) {
      axios
        .delete("http://example-app/tasks/" + id)
        .then((response) => (this.tasks = response.data))
        .catch((error) => console.log(error));
    },
    searchTask() {
      if (this.q.length > 3) {
        axios
          .get("http://example-app/tasksList/" + this.q)
          .then((response) => (this.tasks = response.data))
          .catch((error) => console.log(error));
      } else {
        axios.get("http://example-app/tasksList/").then((response) => {
          this.tasks = response.data;
        });
      }
    },

    refresh(tasks) {
      this.tasks = tasks.data;
    },
  },
};
</script>
