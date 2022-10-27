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
   
    delete_ToDo(index) {
      this.ToDo_list.splice(index, 1);
      localStorage.setItem("allToDo", JSON.stringify(this.ToDo_list));
    },
  },
};
</script>