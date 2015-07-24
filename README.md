# Building an AngularJS SPA

This workshop is broken into 5 stages, with an accompanying presentation. It is a work in progress, and should be tracking Angular as it evolves, as this Intro to Angular topic is a popular one in my Coaching practice.

## To Do

1. Break up presentation and build into a more web friendly format (revealjs? impressjs? flowtimejs?)
1. Find nicer ways to move the up-front rules discussion into the body of the presentation

## Requirements

1. I chose to use NodeJS / npm for managing dependencies, most notably AngularJS and Karma. Just run 'npm install' in any of the stages to set up each stage's dependencies (they are not in this repo)

## Speaker Notes

These are my notes I use when going through this presentation. There is a separate snippets file for code copy/paste throughout the presentation, but I like to type this stuff out where possible.

### Stage 0 - Initializing

- starting bare, package.json to npm install AngularJS
- create blank html with ng-app, add angular, do simple {{}} calculation to confirm working

### Stage 1 - Getting Started

- add Karma to package.json
- add main.js
- create null filter
- add spec
- run karma
- make it pass
- show it in html
- paste in phone number data
- build empty controller
- add spec
- make it pass (add 'groups' to controller)

### Stage 2 - Bringing Structure

- split data apart

Promises
- use $http.get to pull down groups data structure (groupList.json)

Services
- introduce the data service for groups

Views & Directives
- add angular-route
- add ngRoute to main app module dependencies
- add App/Partials folder
- move to group-list.html
- add ng-view to container
- paste route directives to main.js - point out controller reference and alias
  - decoupled view html from specific controller
- refactor MainController as GroupListController / groupListCtrl
- create GroupDetailsController
- create route directive for group details
- add href to group list partial to navigate to details
  - note that we're using a navigable URL, supporting deep-linking
- SO WHERE SHOULD THIS DATA COME FROM?

### Stage 3 - Services

Services
- break out controllers and filters into their own files
- include them in the html
- include them as dependencies to main
- create a blank services file / module
- include services as dependency in main
  - note simplification of main
  - note controllers is still a bit messy
- note coupling between the promise and the data-binding in the controller
  - make our own promise
- add service factory structure
- modify controller to use service
- note how promises chain together

- turn function into a called closure

- set up a cache for loaded groups
- write a find function for a specific group
- illustrate it in the details view
- push group into $scope to avoid the controller reference

- fill in full form, pre-tabs (past in form)
- add tabs snippet
- make work with controller "tab" variable / ng-show / explicit set
- do awkward ng-class directive for selected panel
- note that it's dirty

- refactor logic into a tab panel controller
- fairly defined behaviour, let's test-first
- build empty tab controller test
- build tests, do sad path test, fix controller, refactor a little
- plug new controller structure into group-details page
