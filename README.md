This is a repository for TemanStartup Academy Test.

## Task

You are required to fetch all the data that we provide from API Mock and create the best looking Single Page Web page with Teman Startup Academy Logo.
Only develop mobile version for this project. You can ignore the styling on the Desktop size/version.

Page Purpose:

```bash
This page purpose is to display the course detail and embed the video that provided with video player widget.
```

You can use CSS Library that you confident with (e.g., Bootstrap, TailwindCSS)

Mock API: https://61790482aa7f3400174046cc.mockapi.io/tsa/courseItem
This API will resulted in JSON Object as response:

```bash
[{"videoDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","videoTitle":"How to Build Business","video":"https://academytemanstartup-testbucket.s3.ap-southeast-1.amazonaws.com/testfolder/Lei+trailer+fix.mp4","id":"1"}]
```

## How To

You are required to clone and create a new branch with your name on this repository.
After you've done with the task, the project must be pushed back to your branch for our scoring purpose.

Scoring parameter would be:

- Clean and Tidy Code
- Interface Development
- Time needed on the project

## To Run the Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
