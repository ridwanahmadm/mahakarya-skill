# Objection ladder and placeholder protocol

## The ladder

Before acting, every audience climbs the same five rungs (after the Big 5 objections of CRO practice: trust, fit, price, timing, effort). Write each rung as the visitor's own question, then name the section that answers it. A rung without a section is a leak; a section without a rung is decoration.

| Rung | Generic question | Investor in a property group | Section type that answers it |
|---|---|---|---|
| 1. Who | "Who are you and what do you do?" | "Is this a real company with real assets?" | Hero with a real photo, the group structure |
| 2. Fit | "Is this for me?" | "What exactly can I invest in, and where?" | Lines of business, portfolio, location |
| 3. Trust | "Why believe you?" | "Who manages it after I buy? What's the contract? Is it legal?" | Operating model, written principles, legal status per project, FAQ |
| 4. Price and return | "What does it cost, what do I get?" | "What will it earn?" | Honest: assumptions the visitor controls (a simulator elsewhere), never a promised number |
| 5. Effort and timing | "What happens next, how hard is it?" | "How do I start, can I see the site?" | Step-by-step journey, consultation, site visit, one form |

For a holding company, rung 1 also carries **structure**: the parent, each subsidiary, what each does and where to go for it, in one screen.

## Placeholder protocol

The user may ask for "placeholder information that strengthens the company's position". Do it this way:

1. **Derive before you invent.** Counts of projects, properties, rooms and articles come from the CMS. Names, statuses and types come from records. These need no tag.
2. **The company's own claims** (from its flyers, social posts, existing site) may be shown as its claims, worded plainly, without superlatives.
3. **Everything else is a placeholder.** It lives in one content module (e.g. `content.ts`) with `contoh: true`, renders with a small visible "Contoh" tag in the label face, and disappears once the CMS field is filled. The reference sites themselves do this ("Example", "Sample editorial"): it costs nothing in polish.
4. **Never, even as placeholders:** return or yield percentages, guaranteed income, testimonials with a person's name, partner or press logos, awards, licence numbers, legal entity names, addresses. Leave the slot out and list it in the hand-over instead.
5. **Stock stand-ins** (library photos for things the client has no photo of yet) carry "Foto ilustrasi" in their alt or caption and a credit line in the footer.
6. The hand-over lists every placeholder: where it renders, where to fill it (CMS field or file), and who can confirm it.

## Section anatomy for an investor-facing group site

Hero (who + promise + one action) → operating idea in one statement → lines of business (what you can invest in) → the investor journey as a sequence (how it works, step by step) → subsidiaries (who does what, with links) → proof of scale (own portfolio names, derived counts) → written principles (contract, sharia or legal stance) → portfolio and location → news → questions investors ask → contact with consent → footer with every subsidiary.
