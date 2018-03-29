#  Semillas App
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Social Currency


It is a transparent, nonprofit platform for the exchange of goods and services in which participation don't require legal tender involvement.

It is based on the abundancy of resources, in the creative, artistic, manual and intelectual capacity of members. They could be children, elder people, teenagers, workers, housewives, unemployed, etc.

We are a community of developers willing to learn. Join us and we will give you fully support.

* **Website:** https://www.semillasocial.org
* **API Rest Endpoints:** https://www.semillasocial.org/docs (You should be registered and signed-in for some endpoints)
* **Write us**: info.semillasocial@gmail.com


## :arrow_up: Development. 

This repository is a fork of [AlterntiveCurrencyApp](https://www.semillasocial.org/docs/). Check it for more info. 

Changes flow from AltenativeCurrencyApp to the rest of children repos. If you are thinking of adding a new feature to this product (Semillas), make it over AlternativeCurrencyApp repository instead so changes can be propagated to the rest of products using the same software. Remember to have a feature disabling in the App/Config/AppConfig.js file. 

## :arrow_forward: How to run the App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`


### :arrow_up: Retrieve changes from [AlterntiveCurrencyApp](https://www.semillasocial.org/docs/)

AlternativeCurrencyApp doesn't have a android or ios folders, because they will be created when creating a new product and setting up the new app name.

When a file inside AlternatieCurrencyApp is changed, it should be copied into BuiltFiles. 

So for retrieving changes from AlternativeCurrencyApp repo the following steps must be followed:

 
**Step 1:** `$ git pull git@github.com:Semillas/AlternativeCurrencyApp.git`

**Step 2:** `$ cp -r BuildFiles/android/* android`

**Step 3:** `$ cp -r BuildFiles/ios/* ios`

**Step 4:** Build it: `$ react-native run-android`
