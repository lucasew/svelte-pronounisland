<script type="ts">
	import { pronoun, pronounCandidates } from "$lib/database";
	import titlecase from "$lib/titlecase";
	import Footer from "../../components/Footer.svelte";
</script>

{#if $pronoun == null}
    {#if $pronounCandidates.length > 0}
        <div class="section title">
            <a href="/">
                <h1>Pronoun Island</h1>
            </a>
        </div>
        <div class="section table">
            <p>Exact pronoun not found or ambiguous. Is it some of these?:</p>
            <ul>
                {#each $pronounCandidates.filter(candidate => candidate.score == $pronounCandidates[0].score) as item}
                    <li><a href="/{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}">{item.subject_pronoun}/{item.object_pronoun}/{item.possessive_determiner}/{item.possessive_pronoun}/{item.reflexive}</a></li> 
                {/each}
            </ul>
        </div>
    {:else}
        <div class="section title">
            <a href="/">
                <h1>Pronoun Island: no such pronoun</h1>
            </a>
        </div>
    {/if}
{:else}
<div class="section title">
    <a href="/"
    ><h1>Pronoun Island: {$pronoun.subject_pronoun}/{$pronoun.object_pronoun} examples</h1></a
    >
</div>
<div class="section examples">
    <h2>Here are some example sentences using my {$pronoun.subject_pronoun}/{$pronoun.object_pronoun} pronouns:</h2>
    <p></p>
    <p>
    <span class="sentence"><b>{titlecase($pronoun.subject_pronoun)}</b> went to the park.</span>
    </p>
    <p>
    <span class="sentence">I went with <b>{$pronoun.object_pronoun}</b>.</span>
    </p>
    <p>
    <span class="sentence"><b>{titlecase($pronoun.subject_pronoun)}</b> brought <b>{$pronoun.possessive_determiner}</b> frisbee.</span>
    </p>
    <p>
    <span class="sentence">At least I think it was <b>{$pronoun.possessive_pronoun}</b>.</span>
    </p>
    <p>
    <span class="sentence"><b>{titlecase($pronoun.subject_pronoun)}</b> threw the frisbee to <b>{$pronoun.reflexive}</b>.</span>
    </p>
    <p></p>
</div>

{/if}

<Footer/>