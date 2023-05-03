/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://web3camp.us',
    generateRobotsTxt: true, // (optional)
    // ...other options
    additionalPaths: async (config) => {
        const result = []

        // just add path here when you have new page
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/multisender' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/chainlist' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/Polkadot-Wallet-Generator' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/ETH-Wallet-Generator' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/oneclick-dapp' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/batch-query' });

        return result
    },
}