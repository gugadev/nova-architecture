# Nova Architecture (In progress)

This frontend architecture was built based on Clean Architecture specifications and inspired on Android's MVVM design model.

## Dependency Injection

Dependency Injection is done using [tsyringe](https://github.com/microsoft/tsyringe).

## Packages

All our modules should be there. We understand as a _module_ as a _feature_ of the application. For example: _cartshop module_, _authentication module_, _core module_ and so on.

## Core module

This module stores all _core logic_ of the application. We can tell that there is the "heart" of the application.

## Application module

This module contains the app shell of the application. Resources like images, icons, base styles, etc. are located here.

## Infra module

This module has some "infrastructure" aspects of the application. For example de HttpProvider we use for HTTP requests, analysis tools like web vitals, dependency injection provider, caching system, etc.
