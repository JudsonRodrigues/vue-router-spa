<template>
	<h3 class="font-weight-light">Detalhes sobre o contato</h3>
</template>

<script>
export default {
	created() {
		console.log("Parâmetros da rota", this.$route.params);
	}
};
</script>