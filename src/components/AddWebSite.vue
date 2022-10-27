<script>
export default {
  name: "ToDo",
  data() {
    return {
      ToDo_list: [],
    };
  },
  mounted() {
    if (localStorage.getItem("allToDo")) {
      this.ToDo_list = JSON.parse(localStorage.getItem("allToDo"));
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