<template>
  <div class="about">
    <h1>This is an about page</h1>

    <form>
      <input type="text" value="NAME" v-model="name">
      <input type="text" value="FAMILY" v-model="family">
      <br />
      <button @click="saveBtn">SAVE</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      family: null,
    }
  },

  methods: {
    saveBtn(){
      let name = this.name;
      let family = this.family;
      this.$store.commit("SET_USER", {name, family});
    }
  },
}
</script>
