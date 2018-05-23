importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/20101013_coho_138.jpg",
    "revision": "ec0d6f2574d9d6a32090340913744729"
  },
  {
    "url": "assets/20111114_arboretum_034.jpg",
    "revision": "c6d0de79304352205137422956eb1184"
  },
  {
    "url": "assets/20120106_students_center_8459.jpg",
    "revision": "1ff7f4a3f31732f3b96b96dc60df0429"
  },
  {
    "url": "assets/20120613_devon_lambert_0080_0.jpg",
    "revision": "7f2fbda9b1ac45c62c8d1ada35a270e5"
  },
  {
    "url": "assets/20120928_tercero_120.jpg",
    "revision": "56b42674792de846b0b46288420633e8"
  },
  {
    "url": "assets/20121005_pajamarino_288.jpg",
    "revision": "a88cde4da93bcd55d5ff9cc08230e87f"
  },
  {
    "url": "assets/20130612_segundodc_017.jpg",
    "revision": "ccec7b64a8d6c028d1f7a9ab62413aa4"
  },
  {
    "url": "assets/20130927_buzz_154.jpg",
    "revision": "7824535c4520ebda59f1dc6c83033648"
  },
  {
    "url": "assets/activityi.html",
    "revision": "6e31d48f7ca074b0121c16a01694f5f6"
  },
  {
    "url": "assets/activityi(1).html",
    "revision": "05361aa486186189a1db19b98992a4b0"
  },
  {
    "url": "assets/ag-ranking-badge91916_0.png",
    "revision": "29790d70e067ee6cb80cc500e5726b37"
  },
  {
    "url": "assets/ajax-loader.gif",
    "revision": "c5cd7f5300576ab4c88202b42f6ded62"
  },
  {
    "url": "assets/analytics.js",
    "revision": "c212c589a418eb1aa6a6453832a4bd7f"
  },
  {
    "url": "assets/arc_0.jpg",
    "revision": "184499a9994f0f9dfd4076e4b7a9f4ff"
  },
  {
    "url": "assets/as-thumbnail.jpg",
    "revision": "a25a7ffe983e741a042d2eedecbab34a"
  },
  {
    "url": "assets/awards-combo7tb.jpg",
    "revision": "0ae409dce80397702e1c621126b35824"
  },
  {
    "url": "assets/badge-veterinary_0.png",
    "revision": "d26a691080a0e11d0ff622a9b26ab073"
  },
  {
    "url": "assets/banduh.jpg",
    "revision": "2db61f2099f353e6f5de4d317fa67a6a"
  },
  {
    "url": "assets/banner-gold.png",
    "revision": "3f6aca7df0d749add01411e0b92ae05d"
  },
  {
    "url": "assets/bkh4ofy.js",
    "revision": "be832c3986ad339d4ee7eca8545e67cf"
  },
  {
    "url": "assets/brand-arrows.svg",
    "revision": "1b86f5becff742ea238763397abee748"
  },
  {
    "url": "assets/c-horse.svg",
    "revision": "d49e002e68064998d24e89df0099912a"
  },
  {
    "url": "assets/cal-aggie-band-uh-2.jpg",
    "revision": "092bf4dff062be73b609d46377e69bf1"
  },
  {
    "url": "assets/carlito-lebrilla-925.jpg",
    "revision": "bfadaeba99d3c0b6a58f08e370bd891a"
  },
  {
    "url": "assets/checkbox_icon.svg",
    "revision": "f5ccadf6d1eb0f01c8c7628da0ed37e7"
  },
  {
    "url": "assets/chevron.svg",
    "revision": "0228f807b9e69bb13b8ac3f4ed7792dd"
  },
  {
    "url": "assets/core.js",
    "revision": "f7dfc0c72cb0ce7842698de61e86c1ae"
  },
  {
    "url": "assets/css_9Oz-w3KnMy8Oxu4PzQtLK3PPI4xrAZ2DSwsWwNJFl5w.css",
    "revision": "a1c64e51a3702da75155a4468717576c"
  },
  {
    "url": "assets/css_IhoUiTSixGex6d1R9-HP1I8fKOzQQATGkCCVJILOsDU.css",
    "revision": "70f6dee19c9dc66c4c6c66e127415bfd"
  },
  {
    "url": "assets/css_PxsPpITToy8ZnO0bJDA1TEC6bbFpGTfSWr2ZP8LuFYo.css",
    "revision": "578f64b61cf47b7083e8d4c95638007c"
  },
  {
    "url": "assets/css_Xq2-pW4hw3lF2pMiRK7V0FA-1P6QAYIjTIERD9uuKTI.css",
    "revision": "89cd1935829cbaa4d43cd7d7c9c0847d"
  },
  {
    "url": "assets/davis_west_village-46.jpg",
    "revision": "b049155b1918538a0e8d048a791d6a41"
  },
  {
    "url": "assets/DgDVANl3ALyZA6mNpyVBCh-R.jpg",
    "revision": "47118be0e494aa0667249a193a18271c"
  },
  {
    "url": "assets/dwib-thumbnail.jpg",
    "revision": "42214f46d547dd75c0904a88d323a522"
  },
  {
    "url": "assets/espn_basketball_crowdshot.jpeg",
    "revision": "66b89ef3359a78c56ea229f3275303f1"
  },
  {
    "url": "assets/farmar.jpg",
    "revision": "f9b8a06c23d8a67277040da26158fdcd"
  },
  {
    "url": "assets/fashion-design-class-uc-davis_0.jpg",
    "revision": "48cd406051281c3a8b9a1cad7a05a0cc"
  },
  {
    "url": "assets/fbevents.js",
    "revision": "2691c204326da500bcbd0a6133e9600b"
  },
  {
    "url": "assets/first-frame-ambient_2.jpg",
    "revision": "9d7ee2941ada1585f45a544b793f5e6d"
  },
  {
    "url": "assets/gift_icon.svg",
    "revision": "2b4673cee313e952c6e8b294ee2ede65"
  },
  {
    "url": "assets/gift-grass.png",
    "revision": "8434823f3c0f4a7707ccb97ecb6b2cbe"
  },
  {
    "url": "assets/global-header-bg.svg",
    "revision": "a892fc7634c6a8ee20ac41eb78648391"
  },
  {
    "url": "assets/gtm.js",
    "revision": "4a7783c2d54a1d0807a15c4d76b6240c"
  },
  {
    "url": "assets/gunrock-linework.svg",
    "revision": "0aece0fb0bbe4ddc627b06361e2dbfdc"
  },
  {
    "url": "assets/hen_housing_cage_freeedit.jpg",
    "revision": "840cee55d1d9e180fbc6ec18bbcebb38"
  },
  {
    "url": "assets/hotjar-653936.js",
    "revision": "1350988758ca343da4eb1d6834416004"
  },
  {
    "url": "assets/icon-search.svg",
    "revision": "6ddb30955871d7e1b185e3d7df8562c4"
  },
  {
    "url": "assets/icons-priority-links.svg",
    "revision": "95a8c430c352e67343d07afab67a9e49"
  },
  {
    "url": "assets/icons-social-follow.svg",
    "revision": "9c039db490fd7bca8d6bab79e28503b0"
  },
  {
    "url": "assets/insight.min.js",
    "revision": "7a63c43ba6bc304978d9866a1f9ca3d3"
  },
  {
    "url": "assets/jquery-ui.min.js",
    "revision": "3e6acb1e6426ef90d2e786a006a4ea28"
  },
  {
    "url": "assets/jquery.min.js",
    "revision": "e0e0559014b222245deb26b6ae8bd940"
  },
  {
    "url": "assets/js_0adIFQivvBhMIOeto8NpVsWNquecN3Am8auxxfbigHk.js",
    "revision": "4ccf54e50a71035040be771f6fc73d26"
  },
  {
    "url": "assets/js_ALflW1qsV-wPL6o1rSDEQRU4nUcXy95j4wWybir5MUc.js",
    "revision": "6c214862896e128356f8d3a2bd117755"
  },
  {
    "url": "assets/js_EVKJFuDIq_mG8TCOk6rL5W8NHj4V5IHzXrPUcc_7JfM.js",
    "revision": "bc9e44a1a1eb9fbf5ed677d7a757925d"
  },
  {
    "url": "assets/js_fa78OyYHRCmIHcmbx7ar1tE_wrFMD7AWaTUweeJKXLo.js",
    "revision": "7e2500ea86b9808cd456c5e93dd44595"
  },
  {
    "url": "assets/js_fkKBAGPp1l2O2xv4WHDe0wg667t70p8Sn5vMoJxWBX0.js",
    "revision": "a4dfeff62d06282416882ccf2d1acf0a"
  },
  {
    "url": "assets/js_gEAI37pYu31lMn5VuD7D-K1d35pFKvXfTbTPULfYJF4.js",
    "revision": "1e0e719097e516784a9b7f9971156666"
  },
  {
    "url": "assets/js_hzkZwubNj59ODRIywCI1LpUBX-kBmsXJmfAytqWntjw.js",
    "revision": "6e5ede088a0387a9872462d17f741c8d"
  },
  {
    "url": "assets/js_I8FnZS9Hl2noKqTZhcdV2BE0294H4Uve_lveO7gxsy0.js",
    "revision": "066fc97bd943ae64a75127de7812f344"
  },
  {
    "url": "assets/js_ZAKh7mwVPAiABQlKJQyv6Pm7ZpksUotuqotnDTeOtZ4.js",
    "revision": "c588747cad24810a3db06a402993defa"
  },
  {
    "url": "assets/linkid.js",
    "revision": "0cc3a63fe10060af4a349e5df666eefe"
  },
  {
    "url": "assets/logo.svg",
    "revision": "fbd021eb0796d84efaf2467c48e9b8f5"
  },
  {
    "url": "assets/mail-poppy.png",
    "revision": "ba1b5d6e86c6682c9f9cc683ccf49457"
  },
  {
    "url": "assets/modules-7db4e11cd0f1a212e60496331688330e.js",
    "revision": "7db4e11cd0f1a212e60496331688330e"
  },
  {
    "url": "assets/nkomCc3znx-Y45_0PQ9TlhpBELZbFiE9JPG9huGRwjM.js",
    "revision": "2403fb0e2b5689d45c33c2ea1ca24309"
  },
  {
    "url": "assets/nr-1071.js",
    "revision": "a27a31d1df2d4d3f4d83607cd418ad29"
  },
  {
    "url": "assets/nr-1071.min.js",
    "revision": "a1a545c95f313a230157b47dca555c25"
  },
  {
    "url": "assets/placeholder/20101013_coho_138.jpg",
    "revision": "10177d89bfdb977e80e1af47229e3429"
  },
  {
    "url": "assets/placeholder/20111114_arboretum_034.jpg",
    "revision": "454bb86964e66c54f815bab062d8dd7d"
  },
  {
    "url": "assets/placeholder/20120106_students_center_8459.jpg",
    "revision": "7c56dd97e4a4c348d3f0165364248720"
  },
  {
    "url": "assets/placeholder/20120613_devon_lambert_0080_0.jpg",
    "revision": "a9307d5002d856cd9f8d203ef6a4e71c"
  },
  {
    "url": "assets/placeholder/20120928_tercero_120.jpg",
    "revision": "67eb05dc6a7307df74a4d343b132987d"
  },
  {
    "url": "assets/placeholder/20121005_pajamarino_288.jpg",
    "revision": "48e1d0a5c06cac74b507da5f4bc8158f"
  },
  {
    "url": "assets/placeholder/20130612_segundodc_017.jpg",
    "revision": "1207b2747c1143c72c3e0d53e1df50fc"
  },
  {
    "url": "assets/placeholder/20130927_buzz_154.jpg",
    "revision": "c0a821a2aa09b321fce91fa1b9d18ccf"
  },
  {
    "url": "assets/placeholder/arc_0.jpg",
    "revision": "80bc8402195504241214589c1c43021d"
  },
  {
    "url": "assets/placeholder/as-thumbnail.jpg",
    "revision": "f150390b7b69c36c3196b3bd83c93f23"
  },
  {
    "url": "assets/placeholder/awards-combo7tb.jpg",
    "revision": "1818420d4c04427dc5eb44f82aa464e8"
  },
  {
    "url": "assets/placeholder/banduh.jpg",
    "revision": "e6f7d575d3769f5d34828ea2a9776177"
  },
  {
    "url": "assets/placeholder/cal-aggie-band-uh-2.jpg",
    "revision": "44a33e1f6ad186e3350cba5c46e9eeeb"
  },
  {
    "url": "assets/placeholder/carlito-lebrilla-925.jpg",
    "revision": "6d4cba72c0a26f5fa8a426acd03208b4"
  },
  {
    "url": "assets/placeholder/davis_west_village-46.jpg",
    "revision": "0336bec08f73dd085ad480b3ea73c17e"
  },
  {
    "url": "assets/placeholder/DgDVANl3ALyZA6mNpyVBCh-R.jpg",
    "revision": "10e56f47820b419b4c1cfe85c2b80efb"
  },
  {
    "url": "assets/placeholder/dwib-thumbnail.jpg",
    "revision": "c98ef968a2c28f8668510952d17e5bb2"
  },
  {
    "url": "assets/placeholder/espn_basketball_crowdshot.jpg",
    "revision": "84ad86f37ed1726ea02a0f5f02b25580"
  },
  {
    "url": "assets/placeholder/farmar.jpg",
    "revision": "b533562d27a756541f982172e3ce46b0"
  },
  {
    "url": "assets/placeholder/fashion-design-class-uc-davis_0.jpg",
    "revision": "67333546e042574cf5d7bdbb1214e886"
  },
  {
    "url": "assets/placeholder/first-frame-ambient_2.jpg",
    "revision": "7422800af9e75c87b41faa9d00155385"
  },
  {
    "url": "assets/placeholder/hen_housing_cage_freeedit.jpg",
    "revision": "542bb16d51eded8d08246e49832f4858"
  },
  {
    "url": "assets/placeholder/stadium.jpg",
    "revision": "97b3ebb1d744eebebad647df85d91b47"
  },
  {
    "url": "assets/placeholder/susan-williams-beach-925.jpg",
    "revision": "f6f40a19453204764c1a020f46c79b33"
  },
  {
    "url": "assets/placeholder/thumbnail-ext.jpg",
    "revision": "0cd6a79428c1050683b7635263925335"
  },
  {
    "url": "assets/placeholder/welcome-uc-davis-transfer-class-2020.jpg",
    "revision": "87d08883cec70277aa1d58eadad14416"
  },
  {
    "url": "assets/proximanova-bold-webfont.woff",
    "revision": "188400923fb387808b000f6a23c659a3"
  },
  {
    "url": "assets/proximanova-regular-webfont.ttf",
    "revision": "c9531d96a63330d45af763038df8f465"
  },
  {
    "url": "assets/proximanova-regular-webfont.woff",
    "revision": "a58c0527711b4f00c4d1bdf97e3d5001"
  },
  {
    "url": "assets/purified.css",
    "revision": "d638cd524109cb0e9326e5cc67613b9a"
  },
  {
    "url": "assets/rcj-99d43ead6bdf30da8ed5ffcb4f17100c.html",
    "revision": "fe7be717f741259e2bd92f8390e43ae9"
  },
  {
    "url": "assets/read-arrow.svg",
    "revision": "ab806c4c2196d67580f470a467337c81"
  },
  {
    "url": "assets/remote.js",
    "revision": "7a23ef980e0a7e8f89a41c644c0c24c0"
  },
  {
    "url": "assets/saved_resource.html",
    "revision": "50243463a227565806a83b83a7c2bfd9"
  },
  {
    "url": "assets/saved_resource(1).html",
    "revision": "3e948a3c2741826eba9e36957de3a08e"
  },
  {
    "url": "assets/slick.eot",
    "revision": "ced611daf7709cc778da928fec876475"
  },
  {
    "url": "assets/slick.svg",
    "revision": "b9d19d67df2b38513bfae28542797b85"
  },
  {
    "url": "assets/slick.ttf",
    "revision": "d41f55a78e6f49a5512878df1737e58a"
  },
  {
    "url": "assets/slick.woff",
    "revision": "b7c9e1e479de3b53f1e4e30ebac2403a"
  },
  {
    "url": "assets/slideshow-buttons.svg",
    "revision": "d10a00737c1024c8dfd3a1089688c0f2"
  },
  {
    "url": "assets/sobaxlhfv.js",
    "revision": "4cc6006f3a8aae40b94d4be7321c02d9"
  },
  {
    "url": "assets/spuds.js",
    "revision": "3e15822705baed4ab5befdeb9d0a18ed"
  },
  {
    "url": "assets/stadium.jpg",
    "revision": "c806a4d90e31fb99547269c8cae1e6c8"
  },
  {
    "url": "assets/susan-williams-beach-925.jpg",
    "revision": "0ec3602014e70dbb3579a7d20d3d8482"
  },
  {
    "url": "assets/thumbnail-ext.jpg",
    "revision": "1feb8d30ab80ffb3f1595d38ed08a212"
  },
  {
    "url": "assets/title-icons.svg",
    "revision": "eaa020840d0edc0809e70d449bdea44b"
  },
  {
    "url": "assets/tr.gif",
    "revision": "b798f4ce7359fd815df4bdf76503b295"
  },
  {
    "url": "assets/uc-davis-ranked-six-public-university.png",
    "revision": "ba80b30ca2ac64d78fc574b586b5681f"
  },
  {
    "url": "assets/uc-logo-gold.svg",
    "revision": "7a9b3b356050168d4c8687bbc9b1bc40"
  },
  {
    "url": "assets/user_icon.svg",
    "revision": "a8ac8a64479dd6f1965210f3d47d03ef"
  },
  {
    "url": "assets/uwt.js",
    "revision": "b7b33882a4f3ffd5cbf07434f3137166"
  },
  {
    "url": "assets/vtour-redbud.png",
    "revision": "2b5387614280b6d171fc6cf2b9c2ea43"
  },
  {
    "url": "assets/welcome-uc-davis-transfer-class-2020.jpg",
    "revision": "9fdc36c1de3a9228001048eafa43ae83"
  },
  {
    "url": "assets/where-is-uc-davis-icon_0.png",
    "revision": "881cd6f32518ded05bb2474db69c8963"
  },
  {
    "url": "assets/www-embed-player.js",
    "revision": "3393fc36be1b4cadf7f95f5d3460b662"
  },
  {
    "url": "assets/www-player-2x-webp-vflwpqwKi.css",
    "revision": "c29ab02a24ec77dc27af60cf76cf7b39"
  },
  {
    "url": "assets/www-widgetapi.js",
    "revision": "48a31d5bfc7c8731451b51ac8f6491c1"
  },
  {
    "url": "homescreen.jpg",
    "revision": "13658c496eb32633a9946ce0e552f8a0"
  },
  {
    "url": "index.html",
    "revision": "293771a31adbdda7241b5e865b9e433c"
  },
  {
    "url": "manifest.json",
    "revision": "d96b10bc23a5c7a74fafcc3d6fdc0894"
  },
  {
    "url": "sw.js",
    "revision": "cd9ba9cd6575684498de612c0d0e400c"
  }
]);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'static-resources',
    }),
);

workbox.routing.registerRoute(
    /.*(?:googleapis)\.com.*$/,
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
    }),
);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);