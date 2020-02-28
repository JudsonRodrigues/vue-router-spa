<template>
	<div id="app">
		<div class="jumbotron">
			<h1 class="display-4">Vue Router</h1>
			<p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
		</div>

		<div class="container">
			<router-link to="/" class="btn btn-info mb-4 mr-2">Home</router-link>
			<router-link :to="{ path:'/contatos'}" class="btn btn-info mb-4 mr-2">Contatos</router-link>

			<router-link to="/Contatos/1" class="btn btn-info mb-4 mr-2">Contato 1</router-link>

			<router-link to="/Contatos/2" class="btn btn-info mb-4 mr-2">Contato 2</router-link>

			<!-- <h3 class="font-weight-light">Contatos</h3> -->
			<router-view></router-view>
		</div>
	</div>
</template>