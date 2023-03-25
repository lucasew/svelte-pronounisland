import { derived, writable } from "svelte/store";
import { page } from '$app/stores'
import pronounsDatabase from '$lib/data/pronouns.tab?raw';

interface DatabaseEntry {
    subject_pronoun: string
    object_pronoun: string
    possessive_determiner: string
    possessive_pronoun: string
    reflexive: string
}

interface DatabaseEntryScored extends DatabaseEntry {
    score: number
}

const database = writable<DatabaseEntry[]>(pronounsDatabase.split('\n').map(s => {
    const parts = s.split('\t')
    if (parts.length != 5) {
        return null
    }
    return {
        subject_pronoun: parts[0],
        object_pronoun: parts[1],
        possessive_determiner: parts[2],
        possessive_pronoun: parts[3],
        reflexive: parts[4]
    }
}).filter(v => v !== null) as DatabaseEntry[])

const pronounCandidates = derived([database, page], ([database, page]) => {
    const pronouns = page.params.pronouns || ''
    const pronounsParts = pronouns.split('/').map(p => p.trim())
    const pronounsSet = new Set(pronounsParts)

    if (pronounsParts.length == 5) { // all the parts
        const [
            subject_pronoun,
            object_pronoun,
            possessive_determiner,
            possessive_pronoun,
            reflexive
        ] = pronounsParts
        return [
            {
                subject_pronoun,
                object_pronoun,
                possessive_determiner,
                possessive_pronoun,
                reflexive,
                score: 9999
            }
        ]
    }

    const databaseScored: DatabaseEntryScored[] = database.map(item => {
        return {
            ...item,
            score: Object.values(item).filter(item => pronounsSet.has(item)).length
        }
    })
    return databaseScored.sort((a, b) => b.score - a.score)
})

const pronoun = derived([pronounCandidates], ([candidates]) => {
    if (candidates.length == 0) {
        return null
    }
    if (candidates.length > 1 && candidates[0].score == candidates[1].score) {
        return null
    }
    return candidates[0]
})

export {database, pronounCandidates, pronoun}