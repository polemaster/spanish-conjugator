# Spanish conjugator

## Description

This website was created to learn how to conjugate Spanish verbs. You are told the infinitive of the verb, the mood, tense and person and you need to type the correct conjugation.

## Notes for me

### Recommended Project Structure:

- /src
  - /components ← UI components (.tsx)
  - /pages ← Page-level components/routes (.tsx)
  - /hooks ← Custom React hooks (.ts or .tsx)
  - /lib ← Utilities, helpers, general-purpose logic (.ts)
  - /services ← API calls, storage handlers, data loaders/savers (.ts)
  - /models ← TypeScript types/interfaces (.ts)
  - /store ← State management (Redux/Zustand/etc.) (.ts)
  - /config ← App config, constants, env logic (.ts)
  - /assets ← Static files (images, fonts, etc.)
  - /styles ← CSS or Tailwind configs

### Where to put files:

- Business logic - _/lib_ - Pure logic, reusable, no React imports
- File loading/saving (e.g. localStorage, API) - _/services_ - Separation of side effects from logic
- TypeScript types/interfaces - _/models_ - Keeps types clean and centralized
- Utility/helper functions - _/lib_ or _/utils_ - Some devs prefer utils, same idea
- Constants/configs - _/config_ - For app-wide constants, settings

## Errors found in spanish verb db:

- fortalecer (to fortify, to strenthen) -> to strengthen
- prepararse (to get) -> to get ready, to prepare
