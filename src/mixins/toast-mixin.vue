<script>
export default {
  methods: {
    showToast(type, message) {
      this.$toast.open({
        message: message,
        type: type,
        position: "top-right",
        duration: 5000
      });
    },
    showErrorToast() {
      this.$toast.open({
        message: "Something went wrong! Please try again!",
        type: "error",
        position: "top-right",
        duration: 5000
      });
    }
  }
};
</script>
