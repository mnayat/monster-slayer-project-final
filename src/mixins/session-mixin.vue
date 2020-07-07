<script>
export default {
  data() {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    checkAuthentication() {
      this.isAuthenticated = this.$session.exists();
    },
    getSession(sessionKey) {
      return this.$session.get(sessionKey);
    },
    setSession(sessionKey, sessionValue) {
      this.$session.set(sessionKey, sessionValue);
    },
    destroySession() {
      this.$session.clear();
      this.$session.destroy();
    }
  }
};
</script>
