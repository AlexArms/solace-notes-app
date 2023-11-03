## About the App

This is a notes app with Nextjs, Typescript, MUI + styled components, Nextjs API, and MongoDB w/mongoose as the core tech. There is also an express server I created prior to swapping over to using Nextjs's server API. You can find that [here](https://github.com/AlexArms/old-solace-notes-app-server).

I spent some time working on implementing proper authentication using Google 0Auth, but ran in to a couple issues and decided to put it on the backburner and continue on without it. Nextjs did not like it when the imported script that inserted the login button caused initial renders client-side to be different from server-side. I am planning on troubleshooting this.

I started it with Tailwind as I wanted to learn to use it, but wasn't a big fan of it. It also would have slowed me down. It felt a little restrictive but perhaps I just didn't spend enough time with it.

I ended up swapping from a separate Nodejs server in the repo above to using Nextjs's server API for ease of deployment, and I wanted to learn how to use it as well as Vercel.

There is a lot of room for improvement as I believe a lot can still be structured far better (styled components in styles folders, better names for a lot of things, more reusability of components) but I wanted to make sure this was handed off on the earlier side today. There are a couple minor rendering or state-related bugs.


## Public Deployment

You can find this app deployed on Vercel [here](https://solace-notes-app-n5le.vercel.app/).

## Running Locally

1. Clone the repo on to your computer
2. cd into the folder
3. Run npm install
4. Ensure you have mongodb installed and running locally on its default port - 27017
5. Change .env.local.example to .env.local - it already has the mongo env variable configured for local development
6. Run npm run dev
7. Open localhost:3000 in your browser
