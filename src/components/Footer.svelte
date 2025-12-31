<script>
	import hostname from '$lib/hostname';
</script>

<footer>
	<div class="section usage">
		<p>
			Full usage:
			<tt>{$hostname}/each/pronoun/word/divided/by/slash</tt>
			displays examples of your pronouns.
		</p>
		<p>
			This will mostly require one word. If there are not enough words to fix the ambiguity then the
			best matched options will be shown to be chosen.
		</p>
		<p>
			If you provide an url like <tt
				>{$hostname}/subject-pronoun/object-pronoun/possessive-determiner/possessive-pronoun/reflexive</tt
			> it will show the words you provided as the pronouns.
		</p>
	</div>
	<div class="section contact">
		<p>
			Written by <a href="https://github.com/lucasew">@lucasew</a>, whose
			<a href="{$hostname}/he">{$hostname}/he</a>, based on work from
			<a href="https://www.twitter.com/morganastra">@morganastra</a>
		</p>
		<p>
			{$hostname} is free software under the
			<a href="https://www.gnu.org/licenses/agpl.html">AGPLv3</a>! visit the project on
			<a href="https://github.com/lucasew/svelte-pronounisland">GitHub</a>
		</p>
		<p>&lt;3</p>
	</div>
</footer>
