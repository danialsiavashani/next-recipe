/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'npdqegbalpirencneush.supabase.co'
            }
        ]
    }
};

export default nextConfig;
