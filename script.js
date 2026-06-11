// Dynamic Multi-Channel Database Matrix for 4 Types of Nutrition Processes
const stepData = {
    carbohydrate: [
        {
            organ: "অঙ্গ: মুখগহ্বর (Mouth)",
            title: "ধাপ ১: লালারস ও এনজাইম ক্ষরণ",
            desc: "মুখগহ্বরে থাকা লালাগ্রন্থি (Salivary Glands) সক্রিয় হয়ে ক্ষরণ শুরু করে। লালারসে থাকা 'টায়ালিন' বা অ্যামাইলেজ এনজাইম কার্বোহাইড্রেটের জটিল বন্ধন ভাঙার প্রাথমিক সংকেত দেয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-cookie"></i> মুখগহ্বর (Mouth)</div>
                   <div class="gland-container" style="border-color:var(--carb-theme)">লালাগ্রন্থি (Salivary Gland)</div>
                   <div class="juice-drop" style="background:var(--carb-theme); color:var(--carb-theme)"></div>`,
        },
        {
            organ: "অঙ্গ: মুখ ও ক্ষুদ্রান্ত্র (Mouth & Small Intestine)",
            title: "ধাপ ২: জটিল শর্করা রাসায়নিক পরিপাক",
            desc: "ক্ষুদ্রান্ত্রে অগ্ন্যাশয় থেকে নিঃসৃত শক্তিশালী অ্যামাইলেজ ও মলটেজ এনজাইম জটিল স্টার্চ বা পলিস্যাকারাইড চেইনগুলোকে পুঙ্খানুপুঙ্খভাবে ভেঙে একক সরল তরল অণু 'গ্লুকোজে' (Glucose) রূপান্তর করে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-capsules"></i> ক্ষুদ্রান্ত্র লুমেন (Intestine Lumen)</div>
                   <div class="chain-container break-animation">
                    <div class="atom" style="background:var(--carb-theme)">গ্লুকোজ</div>
                    <div class="atom" style="background:var(--carb-theme)">গ্লুকোজ</div>
                    <div class="atom" style="background:var(--carb-theme)">গ্লুকোজ</div>
                   </div>`,
        },
        {
            organ: "অঙ্গ: ক্ষুদ্রান্ত্র ভিলাই (Intestinal Villi)",
            title: "ধাপ ৩: রক্তকৈশিক নালীতে পুষ্টি শোষণ",
            desc: "পরিপাককৃত সরল গ্লুকোজ ক্ষুদ্রান্ত্রের দেয়ালের অত্যন্ত পাতলা আঙুলের মতো অভিক্ষেপ বা ভিলাইয়ের (Villi) মেমব্রেন ভেদ করে সরাসরি রক্তের কৈশিক জালিকা দিয়ে রক্তপ্রবাহে শোষিত হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-vials"></i> ভিলাই স্তর (Microvilli)</div>
                   <div class="absorb-particle" style="color:var(--carb-theme)"></div>
                   <div class="vessel blood-v"><i class="fa-solid fa-heart-pulse"></i> রক্তপ্রবাহ (Blood Stream)</div>`,
        },
        {
            organ: "অঙ্গ: যকৃৎ ও সাইটোপ্লাজম (Liver & Cytoplasm)",
            title: "ধাপ ৪: গ্লাইকোলাইসিস ও মেটাবলিজম (Metabolism)",
            desc: "রক্ত পরিবাহিত গ্লুকোজ যখন কোষে পৌঁছায়, তখন অক্সিজেনের উপস্থিতিতে সাইটোপ্লাজমে গ্লুকোজ ভেঙে পাইরুভিক এসিডে পরিণত হয়। এটিই হলো Glycolysis (ক্যাটাবলিজম)। উদ্বৃত্ত গ্লুকোজ লিভারে গ্লাইকোজেন আকারে জমা হয় (এনাবলিজম)।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-chart-line"></i> কোষের অভ্যন্তরীণ সাইটোপ্লাজম</div>
                   <div class="metabolic-circle" style="border-color:var(--carb-theme)"><span>Glycolysis</span><span style="color:var(--carb-theme)">ক্যাটাবলিজম</span></div>`,
        },
        {
            organ: "অঙ্গ: কোষের মাইটোকন্ড্রিয়া (Mitochondria)",
            title: "ধাপ ৫: কোষীয় শ্বসন ও ATP শক্তি উৎপাদন",
            desc: "উৎপন্ন পাইরুভিক এসিড মাইটোকন্ড্রিয়ার গভীর ম্যাট্রিক্সে প্রবেশ করে সম্পূর্ণ জারিত হয়। অক্সিডেটিভ ফসফোরাইলেশন ও ক্রেবস চক্রের নিখুঁত চেইন বিক্রিয়া শেষে কোষের মূল শক্তি মুদ্রা—৩৮টি উচ্চ ক্ষমতাসম্পন্ন ATP অণু জেনারেট করে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-bolt-lightning"></i> পাওয়ার হাউস (Mitochondria)</div>
                   <div class="text-center"><div class="atp-blast"><i class="fa-solid fa-charging-station"></i></div><h2 style="color:var(--carb-theme); font-weight:800; font-size:2rem; margin-top:0.5rem;">38 ATP</h2></div>`,
        }
    ],
    protein: [
        {
            organ: "অঙ্গ: পাকস্থলী (Stomach)",
            title: "ধাপ ১: গ্যাস্ট্রিক জুস ও HCl অ্যাসিড ক্ষরণ",
            desc: "আমিষ বা প্রোটিন জাতীয় খাবার পাকস্থলীতে আসার সাথে সাথেই ভেতরের গ্যাস্ট্রিক গ্ল্যান্ড থেকে তীব্র হাইড্রোক্লোরিক অ্যাসিড (HCl) এবং নিষ্ক্রিয় পেপসিনোজেন হরমোন ক্ষরিত হয়, যা প্রোটিন চেইন আলগা করে দেয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-pills"></i> পাকস্থলী গহ্বর (Stomach Wall)</div>
                   <div class="gland-container" style="border-color:var(--protein-theme)">গ্যাস্ট্রিক গ্রন্থি (HCl)</div>
                   <div class="juice-drop" style="background:var(--protein-theme); color:var(--protein-theme)"></div>`,
        },
        {
            organ: "অঙ্গ: পাকস্থলী ও ক্ষুদ্রান্ত্র (Stomach & Intestine)",
            title: "ধাপ ২: পেপটাইড বন্ড ভাঙন (আমিষ পরিপাক)",
            desc: "অ্যাসিডিক মাধ্যমে পেপসিন এবং পরবর্তী ধাপে অগ্ন্যাশয়ের ট্রিপসিন এনজাইম প্রোটিনের জটিল পেপটাইড বন্ডগুলোকে নিখুঁতভাবে কেটে ভেঙে তার সরলতম রূপ 'অ্যামিনো অ্যাসিডে' (Amino Acid) রূপান্তর করে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-scissors"></i> রাসায়নিক পাচন অঞ্চল</div>
                   <div class="chain-container break-animation">
                    <div class="atom" style="background:var(--protein-theme)">অ্যামিনো</div>
                    <div class="atom" style="background:var(--protein-theme)">অ্যামিনো</div>
                    <div class="atom" style="background:var(--protein-theme)">অ্যামিনো</div>
                   </div>`,
        },
        {
            organ: "অঙ্গ: ক্ষুদ্রান্ত্র রক্তজালক (Portal Vein)",
            title: "ধাপ ৩: হেপাটিক পোর্টাল তন্ত্রে শোষণ",
            desc: "ক্ষুদ্রান্ত্রের একক দেয়াল ভেদ করে অ্যামিনো অ্যাসিডগুলো রক্তের স্পেশাল ট্র্যাকিং পোর্টাল নালী (Hepatic Portal Vein) দ্বারা সরাসরি লিভার বা যকৃতে স্থানান্তরিত হওয়ার জন্য শোষিত হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-vial-circle-check"></i> পোর্টাল সার্কুলেশন</div>
                   <div class="absorb-particle" style="color:var(--protein-theme)"></div>
                   <div class="vessel blood-v"><i class="fa-solid fa-bezier-curve"></i> হেপাটিক পোর্টাল ভেন</div>`,
        },
        {
            organ: "অঙ্গ: যকৃৎ ও রাইবোজোম (Liver & Ribosome)",
            title: "ধাপ ৪: ইউরিয়া চক্র ও নতুন প্রোটিন সংশ্লেষণ",
            desc: "কোষীয় রাইবোজোমে এনাবলিজম প্রক্রিয়ায় এই অ্যামিনো অ্যাসিডগুলো জোড়া দিয়ে সম্পূর্ণ নতুন মানব হরমোন, এনজাইম ও পেশী কোষ তৈরি হয়। অতিরিক্ত ক্ষতিকারক অ্যামিনো গ্রুপ যকৃতে ক্যাটাবলিজমের (Deamination) মাধ্যমে ইউরিয়ায় রূপ নেয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-dna"></i> লিভার মেটাবলিক ইউনিট</div>
                   <div class="metabolic-circle" style="border-color:var(--protein-theme)"><span>Deamination</span><span style="color:var(--protein-theme)">এনাবলিজম</span></div>`,
        },
        {
            organ: "অঙ্গ: টিসূ কোশ (Body Tissue Cell)",
            title: "ধাপ ৫: প্রোটিন থেকে জরুরি শক্তি অবমুক্তকরণ",
            desc: "শরীরে কার্বোহাইড্রেটের তীব্র ঘাটতি হলে বা দীর্ঘ উপবাসের মতো বিশেষ আপদকালীন সময়ে অ্যামিনো অ্যাসিড গ্লুকোনিওজেনেসিস ক্যাটাবলিক পথে ঢুকে সীমিত পরিসরে কোষে প্রায় ১২টি ATP শক্তি তৈরি করতে পারে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-shield"></i> টিস্যু ইমার্জেন্সি রেসপন্স</div>
                   <div class="text-center"><div class="atp-blast" style="color:var(--protein-theme)"><i class="fa-solid fa-heart-pulse"></i></div><h2 style="color:var(--protein-theme); font-weight:800; font-size:2rem; margin-top:0.5rem;">12 ATP</h2></div>`,
        }
    ],
    fat: [
        {
            organ: "অঙ্গ: যকৃৎ ও পিত্তথলি (Liver & Gallbladder)",
            title: "ধাপ ১: পিত্তরস ক্ষরণ ও চর্বি অবক্ষেপণ",
            desc: "লিপিড বা চর্বিযুক্ত খাবার পাকস্থলী পার হওয়ার সময় যকৃতে প্রস্তুতকৃত এবং পিত্তথলিতে জমা থাকা ক্ষারীয় 'পিত্তরস' বা Bile ডুওডেনামে তীব্র বেগে স্প্রে বা ক্ষরিত হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-droplet-slash"></i> হেপাটো-বিলিয়ারি সিস্টেম</div>
                   <div class="gland-container" style="border-color:var(--fat-theme)">পিত্তথলি (Gallbladder)</div>
                   <div class="juice-drop" style="background:var(--fat-theme); color:var(--fat-theme)"></div>`,
        },
        {
            organ: "অঙ্গ: ক্ষুদ্রান্ত্র ডুওডেনাম (Duodenum)",
            title: "ধাপ ২: ইমালসিফিকেশন ও লাইপেজ বিক্রিয়া",
            desc: "পিত্তরস লিপিডের বড় বড় ফ্যাট ড্রপগুলোকে সাবানের ফেনার মতো অসংখ্য ক্ষুদ্রাতিক্ষুদ্র বিন্দুতে পরিণত করে (Emulsification)। এরপর অগ্ন্যাশয়ের লাইপেজ এনজাইম ম্যাজিকের মতো একে ফ্যাটি অ্যাসিড ও গ্লিসারলে ভেঙে ফেলে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-soap"></i> ডুওডেনাম পরিপাক ল্যাব</div>
                   <div class="chain-container break-animation">
                    <div class="atom" style="background:var(--fat-theme); border-radius:12px">ফ্যাটি এসিড</div>
                    <div class="atom" style="background:var(--fat-theme); border-radius:12px">গ্লিসারল</div>
                   </div>`,
        },
        {
            organ: "অঙ্গ: ক্ষুদ্রান্ত্র লসিকা তন্ত্র (Lacteal Vessel)",
            title: "ধাপ ৩: লসিকা নালী (Lacteal) দ্বারা বিশেষ শোষণ",
            desc: "ফ্যাট কণাগুলো পানিতে অদ্রবণীয় হওয়ার কারণে সরাসরি রক্তজালকে শোষণ করা সম্ভব হয় না। তাই ভিলাইয়ের একেবারে কেন্দ্রে অবস্থিত বিশেষ লসিকা নালী বা ল্যাকটিয়ালে (Lacteal) শোষিত হয়ে লসিকা প্রবাহের মাধ্যমে পরে হার্টে যায়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-network-wired"></i> লসিকা জালক অববাহিকা</div>
                   <div class="absorb-particle" style="color:var(--fat-theme)"></div>
                   <div class="vessel lymph-v"><i class="fa-solid fa-circle-nodes"></i> লসিকা প্রবাহ (Lacteal Vessel)</div>`,
        },
        {
            organ: "অঙ্গ: মেদ কলা ও মাইটোকন্ড্রিয়া (Adipose Tissue)",
            title: "ধাপ ৪: লিপোজেনেসিস ও বিটা-অক্সিডেশন",
            desc: "এনাবলিজম প্রক্রিয়ায় শরীরের বাড়তি চর্বি ত্বকের নিচের অ্যাডিপোজ টিস্যুতে (Adipose Tissue) শক্তি ব্যাংক হিসেবে জমা হয়। মেদ ক্ষয় বা শক্তির প্রয়োজনে ফ্যাট ভেঙে মাইটোকন্ড্রিয়ায় 'বিটা-অক্সিডেশন' (ক্যাটাবলিজম) বিক্রিয়া শুরু হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-box-archive"></i> লিপিড স্টোরেজ ব্যাংক</div>
                   <div class="metabolic-circle" style="border-color:var(--fat-theme)"><span>Beta-Oxidation</span><span style="color:var(--fat-theme)">লিপিড বিপাক</span></div>`,
        },
        {
            organ: "অঙ্গ: লিভার ও পেশী কোষের মাইটোকন্ড্রিয়া",
            title: "ধাপ ৫: ফ্যাটি এসিড থেকে উচ্চ মাত্রার ATP উৎপাদন",
            desc: "বিটা-অক্সিডেশনের প্রভাবে চর্বির কণা ভেঙে প্রচুর অ্যাসিটাইল-CoA তৈরি করে মাইটোকন্ড্রিয়ার ভেতরে প্রবেশ করে। কার্বোহাইড্রেটের তুলনায় ফ্যাট ভেঙে দীর্ঘস্থায়ী ও উচ্চ ঘনত্বের প্রায় ৪৪টি ATP শক্তি অণু সফলভাবে উৎপন্ন হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-battery-full"></i> ফ্যাটি এসিড মেটাবলিক কোর</div>
                   <div class="text-center"><div class="atp-blast" style="color:var(--fat-theme)"><i class="fa-solid fa-bolt"></i></div><h2 style="color:var(--fat-theme); font-weight:800; font-size:2rem; margin-top:0.5rem;">44 ATP</h2></div>`,
        }
    ],
    vitamin: [
        {
            organ: "অঙ্গ: পাকস্থলী গহ্বর (Stomach Cavity)",
            title: "ধাপ ১: খাদ্যমন্ড থেকে কোনো ক্ষরণ ছাড়াই অবমুক্তকরণ",
            desc: "ভিটামিন ও ক্ষুদ্রাতিক্ষুদ্র মাইক্রো-মিনারেলগুলো অত্যন্ত জটিলতাহীন ও সরল আণবিক গঠনে তৈরি। তাই এদের রাসায়নিক বন্ধন ভাঙার জন্য পাকস্থলী বা অগ্ন্যাশয় থেকে আলাদা কোনো পাচক রস বা এনজাইম নিঃসৃত হওয়ার প্রয়োজন পড়ে না।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-folder-open"></i> ডাইজেস্টিভ ট্রাক্ট লুমেন</div>
                   <div class="gland-container" style="border-color:var(--vitamin-theme); color:var(--text-muted)">পাচক রস মুক্ত জোন</div>`,
        },
        {
            organ: "অঙ্গ: পাকস্থলী ও অন্ত্র (Stomach & Intestine)",
            title: "ধাপ ২: পরিপাকবিহীন সরল বিযুক্তি অবস্থা",
            desc: "মূল খাদ্যের শর্করা বা চর্বি এনজাইম দ্বারা পরিপাক হওয়ার সময়েই ভিটামিন ও খনিজ লবণগুলো খুব সহজেই কোনো রাসায়নিক গঠন পরিবর্তন না করেই তাদের মূল উৎস থেকে বিযুক্ত হয়ে সরল উপাদান হিসেবে ভেসে ওঠে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-cubes"></i> প্রাকৃতিক উপাদান পৃথকীকরণ</div>
                   <div class="atom" style="background:var(--vitamin-theme); width:120px; height:45px; border-radius:30px;">মুক্ত ভিটামিন</div>`,
        },
        {
            organ: "অঙ্গ: ক্ষুদ্রান্ত্র ও বৃহদান্ত্র (Intestine Wall)",
            title: "ধাপ ৩: অন্ত্রের কোষ দ্বারা সরাসরি শোষণ প্রক্রিয়া",
            desc: "ভিটামিন-বি, সি (পানিতে দ্রবণীয়) এবং ভিটামিন-এ, ডি, ই, কে (চর্বিতে দ্রবণীয়) অন্ত্রের মিউকোসা মেমব্রেন এবং বৃহদান্ত্রের দেয়াল দ্বারা কোনো বলপ্রয়োগ ছাড়াই সরাসরি রক্তপ্রবাহে ও আন্তঃকোষীয় রসে শোষিত হয়।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-droplet"></i> ডাইরেক্ট সেলুলার মেমব্রেন</div>
                   <div class="absorb-particle" style="color:var(--vitamin-theme)"></div>
                   <div class="vessel blood-v" style="background:linear-gradient(90deg, #0284c7, #0369a1)"><i class="fa-solid fa-vials"></i> রক্ত ও প্লাজমা কোষ</div>`,
        },
        {
            organ: "অঙ্গ: সমগ্র দেহের কোষসমূহ (All Body Cells)",
            title: "ধাপ ৪: কো-এনজাইম গঠন ও বিপাক প্রক্রিয়া নিয়ন্ত্রণ",
            desc: "কোষীয় মেটাবলিজমে এরা নিজেরা সরাসরি শক্তি উৎপাদন না করলেও অত্যন্ত গুরুত্বপূর্ণ জৈব অনুঘটক বা কো-এনজাইম (যেমন: NAD, FAD) হিসেবে কাজ করে অন্যান্য গ্লুকোজ ও ফ্যাটের ক্যাটাবলিজম বিক্রিয়ার গতি ও চাবিকাঠি নিয়ন্ত্রণ করে।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-toggle-on"></i> কোষীয় মেটাবলিক রেগুলেটর</div>
                   <div class="metabolic-circle" style="border-color:var(--vitamin-theme)"><span>Co-Enzyme</span><span style="color:var(--vitamin-theme)">জৈব অনুঘটক</span></div>`,
        },
        {
            organ: "অঙ্গ: কোষীয় বায়ো-সিস্টেম (Cell Core)",
            title: "ধাপ ৫: শক্তি রূপান্তরে সহায়ক ভূমিকা (0 ATP)",
            desc: "ভিটামিন ও খনিজ লবণগুলো নিজে ক্যাটাবলিজমে ভেঙে কোনো ক্যালরি বা সরাসরি ATP তৈরি করতে সক্ষম নয়। তবে মাইটোকন্ড্রিয়ায় শর্করা বা ফ্যাট থেকে ATP এনার্জি জেনারেট করার ইঞ্জিনটিকে স্টার্ট করার জন্য এরা অপরিহার্য।",
            html: `<div class="organ-title-box"><i class="fa-solid fa-circle-info"></i> বায়ো এনার্জেটিক্স ফ্যাক্টর</div>
                   <div class="text-center"><div class="atp-blast" style="color:#475569"><i class="fa-solid fa-power-off"></i></div><h2 style="color:var(--text-muted); font-weight:800; font-size:1.8rem; margin-top:0.5rem;">0 ATP (Catalyst)</h2></div>`,
        }
    ]
};

let currentFood = 'carbohydrate';
let currentStep = 0;

// Function to handle switching between food tabs
function selectFood(foodType) {
    currentFood = foodType;
    currentStep = 0; // Reset back to step 1
    
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector('.nav-item.' + foodType);
    if(activeBtn) activeBtn.classList.add('active');
    
    updateSimulationUI();
}

// Function to step next or previous inside simulation channels
function changeStep(direction) {
    currentStep += direction;
    if (currentStep < 0) currentStep = 0;
    if (currentStep > 4) currentStep = 4;
    
    updateSimulationUI();
}

// Master Renderer Engine for UI sync and dynamic animation mounting
function updateSimulationUI() {
    const currentData = stepData[currentFood][currentStep];
    
    // Injecting string and object values into UI DOM Nodes
    document.getElementById('organ-name').innerText = currentData.organ;
    document.getElementById('step-title').innerText = currentData.title;
    document.getElementById('step-description').innerText = currentData.desc;
    document.getElementById('current-step-num').innerText = currentStep + 1;
    
    // Injecting customized active step graphics nodes
    const animationZone = document.getElementById('animation-zone');
    animationZone.innerHTML = currentData.html;
    
    // Fetch and bind inline dynamic accent coloring to active particle streams
    const activeParticle = animationZone.querySelector('.absorb-particle');
    if(activeParticle) {
        const themeColor = getComputedStyle(document.documentElement).getPropertyValue(`--${currentFood}-theme`).trim();
        activeParticle.style.color = themeColor;
    }
    
    // Syncing lock/unlock matrices for control button units
    document.getElementById('prev-btn').disabled = (currentStep === 0);
    document.getElementById('next-btn').disabled = (currentStep === 4);
    
    // Repainting and re-indexing target navigation segment nodes
    document.querySelectorAll('.timeline-node').forEach((el, index) => {
        if (index <= currentStep) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// Global initialization call once DOM pipeline triggers success 
document.addEventListener("DOMContentLoaded", () => {
    updateSimulationUI();
});
