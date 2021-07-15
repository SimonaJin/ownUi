<template>
  <div class="yq-radio-group">
  
  </div>
</template>
<script>
export default {
  name: "radioGruoup",
  props: {
    checked: {
      type: Number,
      default: 0,
    },
  },
  model: {
    prop: "checked",
    event: "change",
	},
	data(){
		return{
			checkIndex:this.checked
		}
	},
	created(){
		console.log(this.checked,'radio group')
	}
};
</script>
<style lang="scss" scoped>
</style>