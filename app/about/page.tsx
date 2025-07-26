// app/about/page.tsx

export default function AboutAmro() {
  return (
    <main className="prose mx-auto px-4 py-8">
      <h1>Introduction to the Ámro Language</h1>
      <p>
        Amro is a constructed language (or conlang) that I created in 2020, and have been slowly refining over the years.<br/>
        At the time I created it, I was still in high school and very new to the world of language and linguistics. 
        However, I knew that I deeply admired the aesthetic diversity of real-world human languages and writing systems - in fact, it all started when I experimented one night with a new writing system with which I could encode English.
        Then I realized I could just throw some sounds together and make a language to go with that writing system. I wasn't even aware of the concept of 'conlangs' at the time.<br/>
        As such, Amro (known as Moro at the time) was originally created as a test to see if I could create something unique, yet similar to a natural language (or natlang), with my main linguistic influences being Russian, Arabic, Korean, Spanish and of course, English.
        Over time, it grew into much more - a platform for me to experiment with a variety of personal and multimedia projects, including music, literature, visual art, and coding projects such as this.<br/>
        While I could likely create a 'better' conlang now if I were to start something new, something keeps me from simply moving on from Amro.
        It's not the coolest or craziest language from a purely aesthetic or even narrative standpoint, but it means a lot to me, and it represents my own growth over the past five years.
        I've even reflected my own development of the language into three chronological forms: Old Amomoro, Middle Ammro, and Neo-Amro.<br/>
        So thank you so much for checking it out with this little app! I hope you enjoy it, and I plan to continue using Amro for future creative projects.
      </p>

      <h2>Narrative Background</h2>
      <p>
        Ámro is spoken by the Kamám, a race of humanoids native to Romulus, a continent that existed in the North Pacific Ocean until around 180-200,000 years ago.
        It is unknown exactly when the Kamám first appeared on Romulus, but it's estimated they began keeping time around 12 million years ago.<br/>
        While the Kamám have several unique features (large eyes and grey skin with hints of red, blue, or yellow; tough, claw-like nails; and life expectancy of up to 120 years), they are remarkably similar to humans.
        Their vocal tracts are almost identical to ours (though their larger stature leads to slightly deeper voices), which allows us to reproduce their language.
        The connection between the Kamám and modern homo sapiens is unclear.<br/>
        The Kamám's territory, spanning from Central to Northeastern Romulus, was largely covered in windy grasslands.
        This has strong influence on their language and culture - the tall and sturdy <em>íphsa</em> grass is their near-universal crafting material, while wind power and flight helped their society progress technologically.
      </p>

      <h2>Basics</h2>
      <h3>Writing Systems & Phonology</h3>
      <p>
        Amro has iterated through three different writing systems, two of which you will see on this website - these are the <strong>Cecamro</strong> alphabet, which is the language's native writing system, and the <strong>Amro Standard Romanization (ASR)</strong>, which is written using the Latin script mainly to help modern humans learn the language.<br/>
        The third writing system, not included yet in this app, is a syllabic alphabet called <strong>Wolemoro</strong>. 
        Wolemoro is the oldest writing system used by the Kamám, and was used to write Old Amoromoro, the oldest form of the language.
        The letters from Wolemoro are what formed the basis of the Cecamro alphabet, in addition to three extra letters that were only used in Old Amomoro.<br/>
        The Cecamro alphabet (as well as ASR) contains 30 letters, with 5 vowels and 25 consonants. The 5 vowels each have accented forms, notated by an extra dot in Cecamro or an accent mark in ASR.
      </p>
      // TODO: Add an image of the letters and phonemes!!!
      <h3>Grammar & Syntax</h3>
      <p>
        Amro is quite unique in that it operates with an Object-Subject-Verb (OSV) word order, which is by far the rarest sentence structure in language - only a few human languages use this order by default.
        I was not aware of this when I gave this structure to Amro. 
        For those unfamiliar, the OSV word order is basically how Yoda speaks - for example, saying "the ball I throw" instead of "I throw the ball", or "bread I will eat tonight" instead of "I will eat bread tonight."<br/>
        Although, for that last sentence, in Amro it wouold actually be "Hánampya lomčá bám yanús," or "Tonight bread I will eat." 
        Descriptions of setting and situations always come first in Amro sentences, such as "yesterday", "afterwards", "this afternoon", etc.<br/>
        Another notable feature of Amro is its use of roots and suffixes. All verbs end in some form of the suffix <em>-ú</em>, and all adjectives end in the suffix -ŋ.
        In Old Amomoro, these suffixes were attached directly to base <em>root</em> words, usually based off of nouns. 
        Over time, the verb and adjective forms of these words evolved to be more different from the root noun, but the suffixes remain the same.
        So if you see a word where the accent is on a 'ú' vowel in the last syllable, then you know it's a verb! 
        And if you see a word that ends in the letter 'ŋ', then you know it's an adjective or adverb!<br/> Oh, that's another thing.
        In Amro, adjectives and adverbs are exactly the same. It wouldn't be accurate to say the language <em>doesn't</em> have adverbs, but these -ŋ words can be used to modify both nouns and verbs.
        It's like adjectives and adverbs are combined into one word class!<br/>
        Amro's use of roots and affixes is clearest with verbs and adjectives, but it goes further than that. 
        You might notice how the prefix <em>ha-</em> creates the opposite meaning of the attached word (órŋ = good, hanórŋ = bad), or how the suffix <em>-š</em> indicates a noun representing a part of the body.
        I won't go into everything here, but hopefully you'll notice some of these grammatical clues as you look through the dictionary.<br/>
        Now that you have a taste of Amro grammar, you're ready to learn some sentences and phrases that you can use to confuse unsuspecting strangers!
      </p>
      // TODO: Add a page with a grammar guide to Amro!!!
      <h3>Example Sentences</h3>
      <ul>
        <li>  = ór tišám. = Hello.</li>
        <li> = Orór. = Hi. (more casual/colloquial)</li>
        <li>   = Čón baml̠káro ún. = My name is Jon.</li>
      </ul>
      <h2>Resources</h2>
      <ul>
        <li><a href="/docs/phonology.pdf" target="_blank">Phonology (PDF)</a></li>
        <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">External Resource</a></li>
      </ul>

    </main>
  );
}
