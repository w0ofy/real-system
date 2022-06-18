# Contributing

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

## **Packages**

### **Libraries**

Libraries are deemed libraries if they are used system-wide and primarily export a series of functions or react components (e.g. css, styled, ThemeProvider, constate). They do not primarily export elementals (e.g. div, input, textarea).

- All `library` packages and their directory names should be suffixed with `-library`

---

### **Primitives**

Primitives are deemed primitives if they are elemental and are used system-wide. Primitive component API's should remain dry.

- All `primitive` packages and their directory names should be suffixed with `-primitive`

---

### **Components**

Components are deemed components if they are elemental and can be composed with other Real System components to compose UI's.

- All `component` packages names must be reviewed by all Real System maintainers

---

## **Core**

Core is the culmination of all the above packages and provides consumers with the entire Real System library. Core is automatically generated based on the packages co-located in `components/`, `libraries/` and `primitives/`. Contributors shouldn't generally modify Core's `src/` directory. From time to time, Core's `tools/` may need updating.

## **Contributing a new package**

The `generate:pkg` script will create a templated package which will guarantee that your new package meets the Real System [Package Requirements](#package-requirements).

```sh
# run
$ yarn generate:pkg

# then walk through the CLI prompts to add a new package.

```

## **Package Requirements**

- [ ] a `package.json` file with the following sub-requirements:
  - The following scripts: `build, build:js, dev, types, types:watch`.
  - Author must be your `first name` and `last name`
  - You must define the `main`, `module`, `types`, and `main:dev` (src entrypoint file for storybook to find and hot-reload on changes)
  - You package should be sideEffects free (`"sideEffects": false,`). A "side effect" is defined as code that performs a special behavior when imported, other than exposing one or more exports. An example of this is a polyfill, which affect the global scope and usually do not provide an export. This allows tree-shaking to work. [Additional reading](https://webpack.js.org/guides/tree-shaking/).
  - You must define the `"status"` of the component to be one of (run `yarn productionize` to update the status)
    - `"production"`
    - `"development"`
- [ ] a `tsconfig.json` file (they're all the same/similar).
- [ ] a `src/` folder with all your package's code.
- [ ] a `stories/` folder with your storybook stories named as `*.stories.tsx`. Give your stories knobs and make them cover all use-cases.
- [ ] a `__tests__` folder with your package's tests.
- [ ] a `build.js` file defining how to build the package. Similar to other packages usually.
- [ ] a `CHANGELOG.md`. Note: this is kept up to date automatically so you don't need to manually add or edit it.
- [ ] a `README.md` to detail more information about working on that package's code, if necessary. This is automatically generated but may need some tweaking.
