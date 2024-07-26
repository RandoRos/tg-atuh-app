# Telegram Authentication Svelte App

This is a basic authentication app for Telegram users. New users can `signup` to be able to use app. Already registred user can `login` to be able to see profile page.

#### Implementation
### Stack

- Svelte with SvelteKit
- Typescript
- Prisma
- TailwindCSS
- daisyUI

This app is implemented using `SvelteKit` UI framework with `Typescript`. SQLite database is manged by `Prisma` framework which enables fast and easy database management without RDB complexity. UI styling is handled by `daisyUI` mainly because use of modals together with `TailwindCSS` which is next generation styling framework.

## Install project

To get this project up an running you first need to:

1. install dependencies `npm install`
2. initialize database `npx prisma db push`

## Running project

To run this project in **`local/dev`** environment:

1. run dev `npm run dev`
2. (optional) run db manager `npx prisma studio`

## Building for production

To create a production version of your app:

```bash
npm run build
```