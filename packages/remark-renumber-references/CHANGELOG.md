# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1]; this project adheres to
[Semantic Versioning][2].

### [1.0.5][3] (2023-01-29)

#### ⚙️ Build System

- Stabilize build process ([6994784][4])

### [1.0.4][5] (2023-01-04)

#### ⚙️ Build System

- **packages:** update maintainence badge ([4cbf746][6])

#### 🔥 Reverted

- _"test: replace remark-remove-comments with
  @xunnamius/remark-remove-comments"_ ([2395903][7])

### [1.0.3][8] (2022-10-28)

#### 🪄 Fixes

- **packages:** ensure Options properties are optional ([48478e8][9])

#### ⚙️ Build System

- **packages/remark-renumber-references:** update dependency mdast-util-hidden
  to 1.1.2 ([0c0a9c4][10])
- **package:** update core npm format script ([c9d61ba][11])

### [1.0.2][12] (2022-10-22)

#### 🪄 Fixes

- **packages:** fix broken tables of contents in various readme files
  ([f666393][13])

#### ⚙️ Build System

- Add all-contributors ([84bff68][14])
- **packages/remark-renumber-references:** update dependency mdast-util-hidden
  to 1.1.1 ([fbf7f01][15])

### [1.0.1][16] (2022-10-22)

#### 🪄 Fixes

- **packages/remark-renumber-references:** ensure only owned Hidden nodes end up
  revealed ([9c2d55f][17])
- **readme.md:** make introduction more helpful ([9b07784][18])

#### ⚙️ Build System

- **packages/remark-renumber-references:** update dependency mdast-util-hidden
  to 1.1.0 ([08e25b3][19])

## [1.0.0][20] (2022-10-22)

#### ✨ Features

- **packages/remark-renumber-references:** add remark-renumber-references
  package ([f0a1e28][21])

#### ⚙️ Build System

- **lint-staged:** add doctoc to pre-commit build process ([fa4f9ee][22])
- **package:** add doctoc to npm format script ([112d42c][23])
- **package:** defer to jest.config.js for coverage options ([05cd09e][24])
- **package:** fix npm test script jest invocations ([a2ccf80][25])
- **packages/remark-renumber-references:** update dependency mdast-util-hidden
  to 1.0.2 ([8896140][26])
- **package:** use actual test ignore regex pattern ([6358888][27])
- Update core build toolchain ([19243d6][28])
- Update core lint npm script; add lint:all npm script ([bd84d8f][29])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]:
  https://github.com/Xunnamius/unified-utils/compare/remark-renumber-references@1.0.4...remark-renumber-references@1.0.5
[4]:
  https://github.com/Xunnamius/unified-utils/commit/69947844f42e618f336aeeb9af1d6c9f4ee1e82b
[5]:
  https://github.com/Xunnamius/unified-utils/compare/remark-renumber-references@1.0.3...remark-renumber-references@1.0.4
[6]:
  https://github.com/Xunnamius/unified-utils/commit/4cbf746b78c3bb369c3b27228ec582c3a3e47c54
[7]:
  https://github.com/Xunnamius/unified-utils/commit/23959035752e76f19ec4440cd762b4594fdb93bf
[8]:
  https://github.com/Xunnamius/unified-utils/compare/remark-renumber-references@1.0.2...remark-renumber-references@1.0.3
[9]:
  https://github.com/Xunnamius/unified-utils/commit/48478e8ea592171aadc86fe719310b50a2e6007e
[10]:
  https://github.com/Xunnamius/unified-utils/commit/0c0a9c46e22db310692202cd03fb6e56ac9b7206
[11]:
  https://github.com/Xunnamius/unified-utils/commit/c9d61bacbd52bc76b05abd3426474bf0176c3cd9
[12]:
  https://github.com/Xunnamius/unified-utils/compare/remark-renumber-references@1.0.1...remark-renumber-references@1.0.2
[13]:
  https://github.com/Xunnamius/unified-utils/commit/f6663933fe4a7d577956527efe752e18607262ba
[14]:
  https://github.com/Xunnamius/unified-utils/commit/84bff68339c7a742c104c0f2545fe62b28c8b473
[15]:
  https://github.com/Xunnamius/unified-utils/commit/fbf7f01de7ab7a9d4874ff6f57534c60394d82cb
[16]:
  https://github.com/Xunnamius/unified-utils/compare/remark-renumber-references@1.0.0...remark-renumber-references@1.0.1
[17]:
  https://github.com/Xunnamius/unified-utils/commit/9c2d55fb8055d70cc5fad3bdfce9872fa172acff
[18]:
  https://github.com/Xunnamius/unified-utils/commit/9b0778444b6cba8bc64e24521fbf7a669bc23bc6
[19]:
  https://github.com/Xunnamius/unified-utils/commit/08e25b33f42ca30d2410777570e6b6711d243d75
[20]:
  https://github.com/Xunnamius/unified-utils/compare/05cd09e0cf13f18fa56f6156516bcf546b1238e6...remark-renumber-references@1.0.0
[21]:
  https://github.com/Xunnamius/unified-utils/commit/f0a1e28a31e019f0feec5275f8a95e2ce981e845
[22]:
  https://github.com/Xunnamius/unified-utils/commit/fa4f9ee3f9cd922875cf077f6d8b74105f0ba55e
[23]:
  https://github.com/Xunnamius/unified-utils/commit/112d42c6999f758ff618f4e116eb7cf38c09f77c
[24]:
  https://github.com/Xunnamius/unified-utils/commit/05cd09e0cf13f18fa56f6156516bcf546b1238e6
[25]:
  https://github.com/Xunnamius/unified-utils/commit/a2ccf801276c84e54d3fc1afaad574f78408d86f
[26]:
  https://github.com/Xunnamius/unified-utils/commit/88961407d21fc2f4e1f9714bfbbbebe6de9357fb
[27]:
  https://github.com/Xunnamius/unified-utils/commit/63588887a7377f3ee7488b19c87f1f2bf1faa811
[28]:
  https://github.com/Xunnamius/unified-utils/commit/19243d623ba14cfd629c5e4632e6a75de508592b
[29]:
  https://github.com/Xunnamius/unified-utils/commit/bd84d8fc1fb5c4d1828a16a47214a6730f34899a
