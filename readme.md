# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Getting Started

### Things to install

1. Node 16
2. Docker
3. docker-compose

### Setup steps

Note these are steps that worked for me; if you find that some of these steps are not necessary or clear, please help me update this readme. These steps are done in a linux/unix terminal.

1. Running the shell script start_quest.sh helped me setup my local branch. You made need to make this file executable using `chmod +x start_quest.sh`

```sh
  $ ./start_quest.sh
```

2. Change to the backend directory and run the `seeds.sh` the same way the `start_quest.sh` script was run
3. Change back to the Anythink-Market directory (`cd ..`) and run `docker-compose up`
4. In your browser visit `localhost:3001`

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_
