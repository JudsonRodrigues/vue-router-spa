<template>
	<li>
		<!-- :to="`/contatos/${contato.id}`" -->
		<router-link
			class="btn btn-info btn-sm float-right"
			:to="{name:'contato', params: {id:contato.id}}"
		>Detalhes</router-link>
		<span>{{contato.nome}}</span>
	</li>
</template>


<script>
export default {
	props: {
		contato: {
			type: Object,
			required: true
		}
	}
};
</script>