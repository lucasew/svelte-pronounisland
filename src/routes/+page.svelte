<script>
	import Footer from '../components/Footer.svelte';
	import { database } from '../lib/database';
	import { base } from '$app/paths';
	/* eslint-disable svelte/no-navigation-without-resolve */
</script>

<div class="section title">
	<a href="{base}/">
		<h1>Pronoun Island</h1>
	</a>
</div>
<div class="section table">
	<p>All pronouns the site knows about:</p>
	<ul>
		{#each $database as item (item.subject_pronoun)}
			<li>
				<a
					href="{base}/{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}"
					>{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}</a
				>
			</li>
		{/each}
	</ul>
</div>
<Footer />
