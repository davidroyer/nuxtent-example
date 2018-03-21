# nuxtent-example

This repository is a minimal demo of using [Nuxt](https://nuxtjs.org/) 
with the [Nuxtent](https://github.com/nuxt-community/nuxtent-module) module.

## Help wanted

The Nuxtent module is lagging behind a bit, and it seems the maintainer is occupied with other things.

There's two problems:

 - It is not compatible with the new Nuxt hooks system
 - It is not compatible with the nuxt `generate` mode

The former has been fixed in [this pull request](https://github.com/nuxt-community/nuxtent-module/pull/135) so that's sorted.

The latter is an ongoing issue. Nuxtent does break the nuxt generate. 
That's a problem for people who (like me) want to generate a static site.

This repository is configured to use nuxtent with a bunch of Jekyll blog posts imported.


## Install

You'll need both this repository, and a version of nuxtent that has the latest changes in the PR I mentioned above included.  
To make it easy, I've setup a fork that has everything you need. 

This should do the trick:

```
git clone https://github.com/joostdecock/nuxtent-module
git clone https://github.com/joostdecock/nuxtent-example

cd nuxtent-module
yarn install
yarn build
yarn link

cd ..
cd nuxtent-example
yarn install
yarn link nuxtend-module
yarn add @nuxtjs/axios
yarn run dev
```

That should work if you open http://localhost:3000/

Then run:

```
yarn generate
```

Which will break
