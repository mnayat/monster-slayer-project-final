<script>
export default {
  data() {
    return {
      toastDuration: 5000,
      toastPosition: "top-right"
    }
  },
  methods: {
    showToast(type, message) {
      this.$toast.open({
        message: message,
        type: type,
        position: "top-right",
        duration: this.toastDuration
      });
    },
    showErrorToast() {
      this.$toast.open({
        message: "Something went wrong! Please try again!",
        type: "error",
        position: this.toastPosition,
        duration: this.toastDuration
      });
    }
  }
};
</script>
