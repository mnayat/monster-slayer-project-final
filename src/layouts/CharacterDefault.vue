<template>
  <div class="CharacterDefault">
    <div class="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <p>CharacterDefault</p>
    </div>
    <div class="main">
      <slot/>
    </div>
    <div class="footer">
      &copy; Awesome Company
    </div>
  </div>
</template>

<script>
export default {
  name: `CharacterDefault`,
}

</script>

<style>
.LayoutDefault {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
 
}
.nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }
 .user {
    float: right;
  }
.main {
    padding-top: 1.5em;
    padding-bottom: 2em;
  }
 .footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
</style>
