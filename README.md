## Tools Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)

- **Animations**: [Framer Motion](https://framer.com/motion)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Plugins**: [rehype](https://github.com/rehypejs/rehype)
- [SWR](https://swr.vercel.app/)
- [Email.js](https://www.emailjs.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

## Project Setup and Configuration

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Victor1890/portfolio-v-pro.git
```

2. Navigate to the project directory:

```bash
cd portfolio-v-pro
```

Install dependencies

```bash
pnpm
# or
pnpm install
```

Start the server:

```bash
pnpm dev
# or
npm run dev
```

After that server should be running on [localhost:3000](http://localhost:3000)

> I am using [pnpm](https://pnpm.io/) you can use [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

> Warning: You could run into errors if you don't populate the `.env.local` with the correct values

## Setting up the Environment

This project requires several environment variables to be set. These are stored in a `.env.local` file at the root of the project. You can create this file and add the following variables:

Rename [`.env.example`](/.env.example) to `.env.local` and then you need to populate that with the respective values.

### NEXT_PUBLIC_SITE_URL

- Description: The base URL for the site.
- Example: `http://localhost:3000`

---

### Email Js

2. ### EMAILJS_YOUR_SERVICE_ID

   - Description: Service ID associated with your application.
   - Example: service_myzf7l8

3. ### EMAILJS_YOUR_TEMPLATE_ID

   - Description: Template ID associated with your application.
   - Example: template_5pp5g2a

4. ### EMAILJS_YOUR_USER_ID
   - Description: User ID associated with your application.
   - Example: rgJ-TH58E0M8qTkRT

---

## Dev.to Integration

1. ### NEXT_PUBLIC_DEVTO_API

   - Description: Base URL for the Dev.to API.
   - Example: `https://dev.to/api`

2. ### NEXT_PUBLIC_DEVTO_API_KEY

   - Description: API key for Dev.to authentication.
   - Example: `Your_DevTo_API_Key`

3. ### NEXT_PUBLIC_DEVTO_USERNAME
   - Description: Your Dev.to username.
   - Example: `victor1890`

---

## Spotify Integration

1. ### SPOTIFY_API

   - Description: Base URL for the Spotify API.
   - Example: `https://api.spotify.com`

2. ### SPOTIFY_API_TOKEN

   - Description: Token URL for Spotify API authentication.
   - Example: `https://accounts.spotify.com/api/token`

3. ### SPOTIFY_CLIENT_ID

   - Description: Your Spotify client ID.
   - Example: `Your_Spotify_Client_ID`

4. ### SPOTIFY_CLIENT_SECRET

   - Description: Your Spotify client secret.
   - Example: `Your_Spotify_Client_Secret`

5. ### SPOTIFY_REFRESH_TOKEN
   - Description: Your Spotify refresh token.
   - Example: `Your_Spotify_Refresh_Token`

---

## GitHub Integration

1. ### NEXT_PUBLIC_GITHUB_API

   - Description: Base URL for the GitHub API.
   - Example: `https://api.github.com`

2. ### NEXT_PUBLIC_GITHUB_USERNAME

   - Description: Your GitHub username.
   - Example: `Victor1890`

3. ### GITHUB_TOKEN
   - Description: Your GitHub personal access token.
   - Example: `Your_Github_Token`
