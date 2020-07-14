<script>
import sessionKeys from '../configuration/session/sessionKeys';
export default {
  data() {
    return {
      isAuthenticated: false,
      sessionKeys
    }
  },
  methods: {
    checkAuthentication() {
      this.isAuthenticated = this.$session.exists();
    },
    startSession() {
      this.$session.start();
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
