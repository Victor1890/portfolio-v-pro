namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_SITE_URL?: string;

        NEXT_PUBLIC_VERCEL_URL?: string;

        EMAILJS_YOUR_SERVICE_ID?: string;
        EMAILJS_YOUR_TEMPLATE_ID?: string;
        EMAILJS_YOUR_USER_ID?: string;

        NEXT_PUBLIC_DEVTO_API?: string;
        NEXT_PUBLIC_DEVTO_API_KEY?: string;
        NEXT_PUBLIC_DEVTO_USERNAME?: string;

        SPOTIFY_API?: string;
        SPOTIFY_API_TOKEN?: string;
        SPOTIFY_CLIENT_ID?: string;
        SPOTIFY_CLIENT_SECRET?: string;
        SPOTIFY_REFRESH_TOKEN?: string;

        NEXT_PUBLIC_GITHUB_API?: string;
        NEXT_PUBLIC_GITHUB_USERNAME?: string;
        GITHUB_TOKEN?: string;
    }
}