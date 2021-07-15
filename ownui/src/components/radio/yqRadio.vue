<template>
	<div class="yq-radio" @click="handleRadio">
		<div class="yq-radio-icon">
			<i class="yq-icon yq-icon-tick"></i>
		</div>
		<span class="yq-radio_label">
			<slot></slot>
		</span>
	</div>
</template>
<script>
export default {
	name:"yqRadio",
	props:{
		name:String,
	},
	data(){
		return{

		}
	},
	created(){
		//console.log(this.checkIndex,'radio')
	},
	methods:{
		handleRadio(){

		}
	}
}
</script>
<style lang="scss" scoped>

</style>