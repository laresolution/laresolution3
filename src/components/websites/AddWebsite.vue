<template>
  <form class="row container my-4">
      <div class="col-md-3"></div>
      <div class="col-md-6" style="text-align: left">
        <div class="Todo"> 
        <label for="todo">Nouveau Site</label>
        </div>
       <div class="Input">
        <input class="form-control" name="todo" id="todo" type="text" required v-model="todo"/>
       </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-6 my-2 d-grid gap-2">
      <div class="ButtonAdd">
        <button @click="save">Ajouter un site web</button>
      </div>
      </div>
      <div class="col-md-3"></div>
    </form>
</template>
<script>
export default {
  name: "AddWebsite",
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    save() {
      var existingTasks = JSON.parse(localStorage.getItem("allToDo"));
      if (existingTasks == null) existingTasks = [];
      localStorage.setItem(
        "ToDO",
        JSON.stringify({ todo: this.todo, done: false })
      );
      existingTasks.push({ todo: this.todo, done: false });
      localStorage.setItem("allToDo", JSON.stringify(existingTasks));
    },
  },
};
</script>
<style scoped>
.ButtonAdd {
    height: 48px;
    box-shadow: none;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 6px;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom:2px;
    cursor: pointer;
    background-color: #a0a4d9;
    border: 2px solid black;
    color: #1f2023;
    font-weight: 700;
}
</style>