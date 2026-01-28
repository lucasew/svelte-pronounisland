import { derived, writable } from 'svelte/store';
import { page } from '$app/stores';
import pronounsDatabase from '$lib/data/pronouns.tab?raw';

/**
 * Represents a single entry in the pronoun database.
 * Each field corresponds to a grammatical form of the pronoun set.
 */
interface DatabaseEntry {
	subject_pronoun: string;
	object_pronoun: string;
	possessive_determiner: string;
	possessive_pronoun: string;
	reflexive: string;
}

/**
 * A database entry with an added score.
 * The score indicates how well this entry matches the user's input parameters.
 */
interface DatabaseEntryScored extends DatabaseEntry {
	score: number;
}

/**
 * The source of truth for pronoun data.
 * Initializes by parsing the raw TSV file (`pronouns.tab`) and filtering out any invalid rows
 * (rows that do not have exactly 5 columns).
 */
const database = writable<DatabaseEntry[]>(
	pronounsDatabase
		.split('\n')
		.map((s) => {
			const parts = s.split('\t');
			if (parts.length != 5) {
				return null;
			}
			return {
				subject_pronoun: parts[0],
				object_pronoun: parts[1],
				possessive_determiner: parts[2],
				possessive_pronoun: parts[3],
				reflexive: parts[4]
			};
		})
		.filter((v) => v !== null) as DatabaseEntry[]
);

/**
 * Derived store that computes a list of potential pronoun sets based on the URL parameters.
 *
 * Logic flow:
 * 1. Checks `page.params.pronouns` from the URL.
 * 2. **Explicit Mode:** If 5 parts are provided (e.g., `she/her/her/hers/herself`), it treats it as a full custom set
 *    and returns it with a high priority score (9999).
 * 3. **Fuzzy Match Mode:** If fewer than 5 parts are provided, it scores every entry in the `database`
 *    based on how many of its fields match the provided parts.
 *
 * Returns a list of candidates sorted by score (descending).
 */
const pronounCandidates = derived([database, page], ([database, page]) => {
	const pronouns = page.params.pronouns || '';
	const pronounsParts = pronouns.split('/').map((p) => p.trim());
	const pronounsSet = new Set(pronounsParts);

	if (pronounsParts.length == 5) {
		// all the parts
		const [subject_pronoun, object_pronoun, possessive_determiner, possessive_pronoun, reflexive] =
			pronounsParts;
		return [
			{
				subject_pronoun,
				object_pronoun,
				possessive_determiner,
				possessive_pronoun,
				reflexive,
				score: 9999
			}
		];
	}

	const databaseScored: DatabaseEntryScored[] = database.map((item) => {
		return {
			...item,
			score: Object.values(item).filter((item) => pronounsSet.has(item)).length
		};
	});
	return databaseScored.sort((a, b) => b.score - a.score);
});

/**
 * Derived store that selects the best matching pronoun set.
 *
 * Selection Logic:
 * - Returns `null` if no candidates exist.
 * - **Ambiguity Check:** Returns `null` if the top two candidates have the same score
 *   (prevents guessing when the user's input is ambiguous).
 * - Otherwise, returns the top-scoring candidate.
 */
const pronoun = derived([pronounCandidates], ([candidates]) => {
	if (candidates.length == 0) {
		return null;
	}
	if (candidates.length > 1 && candidates[0].score == candidates[1].score) {
		return null;
	}
	return candidates[0];
});

export { database, pronounCandidates, pronoun };
