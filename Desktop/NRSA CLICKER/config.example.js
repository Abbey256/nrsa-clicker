const CONFIG = {
    // Determine Environment
    REDIRECT_URL: window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'YOUR_PRODUCTION_URL',

    // Supabase Secrets (DO NOT COMMIT REAL KEYS)
    SUPABASE_URL: 'YOUR_SUPABASE_URL',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY'
};
