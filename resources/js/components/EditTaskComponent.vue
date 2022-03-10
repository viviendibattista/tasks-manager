<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="editTaskModal"
      tabindex="-1"
      aria-labelledby="editTaskModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="edit-modal-title" id="editTaskModalLabel">
              Editer une tache
            </h5>
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
                  v-model="taskToEdit.name"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success"
              data-bs-dismiss="modal"
              @click="update"
            >
              Enregistrer
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
  name: "EditTaskComponent",
  props: ["taskToEdit"],
  methods: {
    update() {
      axios
        .patch("http://example-app/tasks/edit/" + this.taskToEdit.id, {
          name: this.taskToEdit.name,
        })
        .then((response) => this.$emit("task-updated", response))
        .catch((error) => console.log(response));
    },
  },
};
</script>