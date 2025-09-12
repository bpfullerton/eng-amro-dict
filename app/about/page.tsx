// app/about/page.tsx

/**
 * AboutAmro component
 * @returns A React component for the About Ámro page, providing information about the Ámro language, its background, and resources.
 */
export default function AboutAmro() {
  return (
    <main className="prose mx-auto px-4 py-8 space-y-6">
      <h1>Introduction to the Ámro Language</h1>
      <p>Ámro (<span className="font-cecamro"></span>) is a constructed language (&quot;conlang&quot;) that I created in 2020, and have been slowly refining over the years.</p>
      <p>At the time I created it, I was still in high school and very new to the world of language and linguistics.</p>
      <p>
        However, I knew that I deeply admired the aesthetic diversity of real-world human languages and writing systems - in fact, it all started when I experimented one night with a new writing system with which I could encode English.
        Then I realized I could just throw some sounds together and make a language to go with that writing system. I wasn&apos;t even aware of the concept of conlangs at the time.
      </p>
      <p>
        As such, Ámro (known as Moro at the time) was originally created as a test to see if I could create something unique, yet similar to a natural language (&quot;natlang&quot;), with my main linguistic influences being Russian, Arabic, Korean, Spanish and of course, English.
        Over time, it grew into much more - a platform for me to experiment with a variety of personal and multimedia projects, including music, literature, visual art, and coding projects such as this.
      </p>
      <p>While I could likely create a &apos;better&apos; conlang now if I were to start something new, something keeps me from simply moving on from Ámro.</p>
      <p>
        It&apos;s not the coolest or craziest language from a purely aesthetic or even narrative standpoint, but it means a lot to me, and it represents my own growth over the past five years.
        I&apos;ve even reflected my own development of the language into three chronological forms: Old Amomoro, Middle Ammro, and Neo-Ámro.
      </p>
      <p>So <strong>thank you so much</strong> for checking it out with this little app! I hope you enjoy it, and I plan to continue using Ámro for future creative projects.</p>
      <p>Read on to learn more about the background and inner workings of this language, and don&apos;t hesitate to reach out if you have any questions or feedback!</p>

      <hr className="my-8 border-gray-300" />

      <h2>Narrative Background</h2>
      <p>Ámro is spoken by the Kamám <span className="font-cecamro"></span>, a race of humanoids native to Romulus, a continent that existed in the North Pacific Ocean until around 180-200,000 years ago.</p>
      <p>It is unknown exactly when the Kamám first appeared on Romulus, but it&apos;s estimated they began keeping time around 12 million years ago.</p>
      <p>
        While the Kamám have several unique features (large eyes and grey skin with hints of red, blue, or yellow; tough, claw-like nails; and life expectancy of up to 120 years), they are remarkably similar to humans.
        Their vocal tracts are almost identical to ours (though their larger stature leads to slightly deeper voices), which allows us to reproduce their language.
        The connection between the Kamám and modern <em>homo sapiens</em> is unclear.
      </p>
      <p>
        The Kamám&apos;s territory, spanning from Central to Northeastern Romulus, was largely covered in windy grasslands.
        This has strong influence on their language and culture - the tall and sturdy <em>íphsa</em> <span className="font-cecamro"></span> grass is their near-universal crafting material, while wind power (<em>phwái</em> <span className="font-cecamro"></span>) and flight (<em>wačugú</em> <span className="font-cecamro"></span>) helped their society progress technologically.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2>Basics</h2>
      <h3>Writing Systems & Phonology</h3>
      <p>
        Ámro has iterated through three different writing systems, two of which you will see on this website - these are the <strong>Cécamro</strong> (<span className="font-cecamro"></span>) alphabet, which is the language&apos;s native writing system, and the <strong>Ámro Standard Romanization (ASR)</strong>, which is written using the Latin script to help modern humans learn the language.
      </p>
      <p>
        The third writing system, not yet included in this app, is a syllabic alphabet called <strong>Wolemoro</strong> (<span className="font-cecamro"></span>).
        Wolemoro is the oldest writing system used by the Kamám, and was used to write Old Amomoro, the oldest form of the language.
        The letters from Wolemoro are what formed the basis of the Cécamro alphabet, in addition to three extra letters that were only used in Old Amomoro.
      </p>
      <p>
        The Cécamro and ASR alphabets both contain 30 letters, with 5 vowels and 25 consonants. The 5 vowels each have accented forms, notated by an extra dot in Cécamro or an accent mark in ASR.
      </p>

      <h3>Grammar & Syntax</h3>
      <p>
        Ámro is quite unique in that it operates with an Object-Subject-Verb (OSV) word order, which is by far the rarest sentence structure in language - only a few human languages use this order by default.
        I was not aware of this when I gave this structure to Ámro.
      </p>
      <p>
        For those unfamiliar, the OSV word order is basically how Yoda speaks - for example, saying &quot;the ball I throw&quot; instead of &quot;I throw the ball&quot;, or &quot;bread I will eat tonight&quot; instead of &quot;I will eat bread tonight.&quot;
      </p>
      <p>
        Although, for that last sentence, in Ámro it would actually be &quot;Hánampya lomčá bám yanús,&quot; or &quot;Tonight bread I will eat.&quot;
        Descriptions of setting and situations always come first in Ámro sentences, such as &quot;yesterday&quot;, &quot;afterwards&quot;, &quot;this afternoon&quot;, etc.
      </p>
      <p>
        Another notable feature of Ámro is its use of roots and suffixes. All verbs end in some form of the suffix <em>-ú</em>, and all adjectives end in the suffix -ŋ.
        In Old Amomoro, these suffixes were attached directly to base <em>root</em> words, usually based off of nouns.
      </p>
      <p>
        Over time, the verb and adjective forms of these words evolved to be more different from the root noun, but the suffixes remain the same.
        So if you see a word where the accent is on a &apos;ú&apos; vowel in the last syllable, then you know it&apos;s a verb!
        And if you see a word that ends in the letter &apos;ŋ&apos;, then you know it&apos;s an adjective or adverb!
      </p>
      <p>
        Oh, that&apos;s another thing.
        In Amro, adjectives and adverbs are exactly the same. It wouldn&apos;t be accurate to say the language <em>doesn&apos;t</em> have adverbs, but these -ŋ words can be used to modify both nouns and verbs.
        It&apos;s like adjectives and adverbs are combined into one word class!
      </p>
      <p>
        Amro&apos;s use of roots and affixes is clearest with verbs and adjectives, but it goes further than that.
        You might notice how the prefix <em>ha-</em> creates the opposite meaning of the attached word (órŋ = good, hanórŋ = bad), or how the suffix <em>-š</em> indicates a noun representing a part of the body.
      </p>
      <p>
        I won&apos;t go into everything here, but hopefully you&apos;ll notice some of these grammatical clues as you look through the dictionary.
        Now that you have a taste of Amro grammar, you&apos;re ready to learn some sentences and phrases that you can use to confuse unsuspecting strangers!
      </p>
      <h3>Example Sentences</h3>
      <ul>
        <li><span className="font-cecamro"> .</span> = Ór tišám. = Hello.</li>
        <li><span className="font-cecamro">.</span> = Orór. = Hi. (more casual/colloquial)</li>
        <li><span className="font-cecamro">  .</span> = Čón baml̠akár ún. = My name is Jon.</li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2>Resources</h2>
      <ul>
        <li><a 
        href="../../public/AmroPhonology.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        >
          Ámro Phonology & Alphabets (PDF) ↗
        </a></li>
      </ul>

    </main>
  );
}
