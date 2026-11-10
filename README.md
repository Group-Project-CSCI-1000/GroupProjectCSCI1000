# GroupProjectCSCI1000

# Welcome!

## Introduction

In this project, you'll form groups of 3–5 students, and each member will create a personal web page, often referred to as an "About Me" page, to share fun and interesting information about themselves. If you're uncomfortable creating a personal page, you're also welcome to choose a different topic, ensuring it complies with university guidelines.

The primary goal is not to build a fancy website but to get hands-on experience using Git and GitHub in a collaborative environment. You'll learn essential Git commands and gain basic skills in creating a static web page using HTML, CSS, and JavaScript.

Your group has the freedom to decide how to style your web pages. You can use simple CSS or explore styling libraries like Styled Components, Tailwind CSS, or MUI.

## University Guidelines

Please make sure that the information shared on the website follows university policies.

## Objectives

- Develop proficiency using GitHub and collaborating in a group.
- Practice essential Git commands, including `add`, `commit`, `status`, `branch`, `merge`, `push`, and `pull`.
- Build a static website using HTML, CSS, and JavaScript.

## Steps to Get Started

### 1. Install Git and Node.js

Make sure Git and npm are installed. Check by running:

```bash
node -v
npm -v
```

If needed, download Node.js from [nodejs.org](https://nodejs.org/en/download/).

### 2. Create a GitHub Organization

Each team creates a GitHub organization and invites all team members.

Follow the [GitHub organization setup instructions](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

### 3. Create a Shared Repository

Create an empty public repository in your team's GitHub organization.

### 4. Set Up the Project Template

One team member clones the original project template:

```bash
git clone https://github.com/vedant29/Project-CSCI-1000.git
cd Project-CSCI-1000
```

Connect the project to your team's repository:

```bash
git remote set-url origin YOUR-GROUP-REPOSITORY-URL
```

Verify the remote:

```bash
git remote -v
```

Then push the project:

```bash
git branch -M main
git push -u origin main
```

### 5. Clone the Group Repository

Each team member clones the shared repository:

```bash
git clone YOUR-GROUP-REPOSITORY-URL
cd Project-CSCI-1000
```

Install the project dependencies:

```bash
npm install
```

For help installing npm, visit the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 6. Run the Website Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Deploy the Website Using Netlify

1. Create a Netlify account or log in.
2. Select **New site from Git**.
3. Connect your GitHub account.
4. Select your group's repository.
5. Configure the build settings.
6. Click **Deploy**.
7. Once deployed, copy the generated website URL and add it to the appropriate comment in `index.js`, as instructed by the project directions.

## Git Collaboration

Always run `git pull` before starting a new feature so you have the latest project changes.

After making changes, use:

```bash
git status
git add .
git commit -m "Describe your changes"
git push
```

If merge conflicts occur, communicate with your teammates and resolve them together.

## Git Cheat Sheet

For additional help, refer to the [Git Cheat Sheet](https://git-cheatsheet.com/).
