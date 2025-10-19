---
title: "Extra challenge"
description: "Extra challenge"
id: task-github
---

## Your first Git project

### Step 1: Install Git

**Check if Git is installed:**
```bash
git --version
```

**If not installed:**
- Windows: Download from [git-scm.com](https://git-scm.com/)
- Mac: Install via Homebrew: `brew install git` or download from [git-scm.com](https://git-scm.com/)
- Linux: `sudo apt install git` (Ubuntu/Debian)

### Step 2: Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Create a repository

```bash
# Navigate to your project folder
cd my-first-webpage

# Initialize Git
git init
```

You should see: `Initialized empty Git repository`

### Step 4: Make your first commit

```bash
# Check status
git status

# Stage all files
git add .

# Commit with message
git commit -m "Initial commit - my first webpage"
```

### Step 5: Create GitHub account

1. Go to [github.com](https://github.com)
2. Sign up for free account
3. Verify your email

### Step 6: Create a repository on GitHub

1. Click the **+** icon in top right
2. Select **New repository**
3. Name it `my-first-webpage`
4. Keep it public (or private if you prefer)
5. Don't initialize with README (you already have files)
6. Click **Create repository**

### Step 7: Connect local repo to GitHub

GitHub will show you commands. Run these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-webpage.git
git branch -M main
git push -u origin main
```

**What these do:**
- `git remote add origin` - connects your local repo to GitHub
- `git branch -M main` - renames default branch to "main"
- `git push -u origin main` - uploads your code to GitHub

### Step 8: Verify on GitHub

Refresh your GitHub repository page - you should see your files!

---

## Making changes and pushing updates

### The daily workflow:

**1. Make changes to your code**
- Edit files as usual

**2. Check what changed:**
```bash
git status
```

**3. Stage changes:**
```bash
git add .
```

**4. Commit with descriptive message:**
```bash
git commit -m "Add contact form to homepage"
```

**5. Push to GitHub:**
```bash
git push
```

---

## Working with branches

### Why branches matter:

Imagine you're building a website:
- `main` branch - the live, working site
- `feature-contact-form` - adding contact form
- `redesign-homepage` - experimenting with new design

If something breaks in `redesign-homepage`, your `main` branch is safe!

### Creating and using branches:

```bash
# Create new branch
git checkout -b feature-contact-form

# Make your changes
# ... edit files ...

# Commit changes
git add .
git commit -m "Add contact form"

# Push branch to GitHub
git push origin feature-contact-form

# Switch back to main
git checkout main

# Merge feature into main
git merge feature-contact-form

# Push updated main
git push
```

---

## Understanding merge conflicts

A **merge conflict** happens when:
1. You change line 10 in `index.html`
2. Your teammate also changes line 10 in `index.html`
3. You both try to merge your changes

### Git can't decide which version to keep, so it asks you!

### What a conflict looks like:

```html
<<<<<<< HEAD
<h1>Welcome to my website!</h1>
=======
<h1>Welcome to our awesome site!</h1>
>>>>>>> feature-branch
```

- `<<<<<<< HEAD` - your version
- `=======` - divider
- `>>>>>>> feature-branch` - their version

### How to resolve:

1. Open the file
2. Decide which version to keep (or combine both)
3. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Save the file
5. Stage and commit:

```bash
git add index.html
git commit -m "Resolve merge conflict in heading"
git push
```

---

## Best practices

### Commit messages

**Good:**
- "Add login functionality to user page"
- "Fix typo in navigation menu"
- "Update README with installation instructions"

**Bad:**
- "changes"
- "stuff"
- "asdfasdf"
- "Update"

### Commit frequency

- Commit after completing a small logical change
- Don't commit broken code
- Don't wait too long between commits

**Rule of thumb:** If you can describe the change in one sentence, it's probably ready to commit!

### Branch naming

**Good:**
- `feature-user-authentication`
- `bugfix-login-error`
- `update-documentation`

**Bad:**
- `mybranch`
- `test`
- `new`

---

## GitHub features

### README.md

The README is the first thing people see in your repository. It should include:
- What the project does
- How to install it
- How to use it
- How to contribute

**Example README:**

```markdown
# My First Webpage

A simple personal website built with HTML, CSS, and JavaScript.

## How to run

1. Clone this repository
2. Open `index.html` in your browser

## Features

- Responsive design
- Interactive button
- Contact form
```

### Issues

Track bugs and feature requests:
1. Go to **Issues** tab
2. Click **New Issue**
3. Describe the bug or feature
4. Assign to team members
5. Link commits that fix the issue

### Pull requests

A **pull request** (PR) is a way to propose changes:
1. Create a branch with changes
2. Push to GitHub
3. Open a pull request
4. Team reviews your code
5. Make requested changes
6. PR gets merged into main

---

