<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary my-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Ajouter une tache
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ajouter une tache</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="">Nom de la tache</label>
                <textarea
                  name="name"
                  id="name"
                  rows="4"
                  class="form-control"
                  v-model="name"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success"
              @click="taskStore"
              data-bs-dismiss="modal"
            >
              Créer ma tache
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTaskComponent",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    taskStore() {
      axios
        .post("http://example-app/tasksList", {
          name: this.name,
        })
        .then((response) => this.$emit("task-added", response))
        .catch((error) => console.log(error));
      this.name = "";
    },
  },
};
</script>