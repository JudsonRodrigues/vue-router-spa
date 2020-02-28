<template>
	<li>
		<router-link class="btn btn-info btn-sm float-right" :to="`/contatos/${contato.id}`">Detalhes</router-link>
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