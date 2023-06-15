# POLAR

## Mobile (packages/mobile)
### Dev
- ```cd packages/mobile```
### Todo
- [X] Design

## Api (packages/api)
### Dev
- ```cd packages/api```
- ```pnpm i``` (using pnpm)
- ```pnpm dev``` (using pnpm start dev)
### Todo
- [ ] Auth
  - [ ] Login
  - [ ] Register

- [X] Session
  - [X] Create  
    url: `/api/session`  
    method: `POST`  
    body: `see in ./packages/api/example-data/session.json`
  - [X] Get  
    url: `/api/session/:id  `
    method: `GET`

- [X] Exercise
  - [X] Create  
    url: `/api/exercise`  
    method: `POST`  
    body: `see in ./packages/api/example-data/exercise.json`
  - [X] List  
    url: `/api/exercise`  
    method: `GET`
  - [x] Get  
    url: `/api/exercise/:id`  
    method: `GET`
