<script>
export default {
  name: "DoneWebsite",
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
   
    doneTodo(todo) {
        todo.done = !todo.done;
    },
  },
};
</script>