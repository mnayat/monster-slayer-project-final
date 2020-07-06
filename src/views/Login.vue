<template>
  <div>
     
      <button @click.prevent="loginPlayer">Login</button>
  </div>
</template>

<script>
import {  mapActions } from 'vuex';
export default {
 name:'Login',
 data(){
     return {
         account: {
         username:'pedring',
         password:'pedring',
         }
      
     }
 },

 methods: {
     ...mapActions('accountModule', ['login']),

     loginPlayer(){
        
          this.login(this.account).then(resp => {
              console.log(resp);
              console.log( 'store '+ this.$store.state.accountModule.player.accountId)
              this.$session.start();
              this.$session.set('account-id',this.$store.state.accountModule.player.accountId)
          });
            
     }
 }
}
</script>

<style>

</style>