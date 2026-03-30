/**
 * Splits a string into word spans wrapped in overflow-hidden containers.
 * GSAP animates `.gsap-word` elements (yPercent: 110 → 0) for a
 * "words slide up from beneath" reveal — the same technique used on
 * premium agency sites like digitalpresent.io.
 *
 * @param {string} text - The text to split
 * @param {string} [wordClass] - Extra classes applied to each inner word span
 */
export function splitWords(text, wordClass = '') {
  return text.split(' ').map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden"
      style={{ verticalAlign: 'bottom', lineHeight: 'inherit' }}
    >
      <span className={`gsap-word inline-block${wordClass ? ' ' + wordClass : ''}`}>
        {word}
        {/* non-breaking space keeps word spacing */}
        &nbsp;
      </span>
    </span>
  ))
}
