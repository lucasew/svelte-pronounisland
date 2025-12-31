<script>
	import Footer from '../components/Footer.svelte';
	export const ssr = false;
	import { database } from '../lib/database';
</script>

<div class="section title">
	<a href="/">
		<h1>Pronoun Island</h1>
	</a>
</div>
<div class="section table">
	<p>All pronouns the site knows about:</p>
	<ul>
		{#each $database as item}
			<li>
				<a
					href="/{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}"
					>{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}</a
				>
			</li>
		{/each}
	</ul>
</div>
<Footer />
