/* Centralized AUPES interface translations. Add matching keys to each locale as content is localized. */
export type LanguageCode = "en" | "am" | "om" | "ti";

export const LANGUAGE_OPTIONS:{code:LanguageCode;native:string;english:string;htmlLang:string}[]=[
 {code:"en",native:"English",english:"English",htmlLang:"en"},
 {code:"am",native:"አማርኛ",english:"Amharic",htmlLang:"am"},
 {code:"om",native:"Afaan Oromoo",english:"Afaan Oromo",htmlLang:"om"},
 {code:"ti",native:"ትግርኛ",english:"Tigrinya",htmlLang:"ti"}
];

export const UI_TRANSLATIONS:Record<LanguageCode,Record<string,string>>={
 en:{},
 am:{
  "Home":"መነሻ","About":"ስለ እኛ","Academics":"አካዳሚክ","Research":"ምርምር","News":"ዜና","Contact":"ያግኙን",
  "Sign in":"ግባ","Settings":"ቅንብሮች","Site settings":"የገጽ ቅንብሮች","Appearance":"ገጽታ","Light":"ብርሃን","Dark":"ጨለማ",
  "Language":"ቋንቋ","Choose a language":"ቋንቋ ይምረጡ","Changes apply immediately.":"ለውጦቹ ወዲያውኑ ይተገበራሉ።",
  "Close":"ዝጋ","Welcome back.":"እንኳን ደህና መጡ።","Reset your password.":"የይለፍ ቃልዎን ዳግም ያስጀምሩ።",
  "YOUR UNIVERSITY WORKSPACE":"የዩኒቨርሲቲ የሥራ ቦታዎ","ACCOUNT RECOVERY":"መለያ መመለስ",
  "Sign in with the account provided by your AUPES administrator.":"በAUPES አስተዳዳሪዎ የተሰጠዎትን መለያ በመጠቀም ይግቡ።",
  "Enter your university email to receive password-reset instructions.":"የይለፍ ቃል መመለሻ መመሪያ ለመቀበል የዩኒቨርሲቲ ኢሜይልዎን ያስገቡ።",
  "Email address":"የኢሜይል አድራሻ","Password":"የይለፍ ቃል","Enter your password":"የይለፍ ቃልዎን ያስገቡ",
  "Forgot your password?":"የይለፍ ቃልዎን ረሱ?","Return to sign in":"ወደ መግቢያ ተመለስ","Send reset link":"የመመለሻ ሊንክ ላክ",
  "Please wait…":"እባክዎ ይጠብቁ…","Back to the public site":"ወደ ዋናው ድረ-ገጽ ተመለስ",
  "Accounts are provisioned by AUPES administrators. There is no public self-registration.":"መለያዎች በAUPES አስተዳዳሪዎች ይፈጠራሉ። ለሁሉም የሚከፈት ራስ-ምዝገባ የለም።",
  "Amharic":"አማርኛ","Afaan Oromo":"አፋን ኦሮሞ","Tigrinya":"ትግርኛ"
 },
 om:{
  "Home":"Fuula jalqabaa","About":"Waa'ee","Academics":"Barnoota","Research":"Qorannoo","News":"Oduu","Contact":"Nu qunnamaa",
  "Sign in":"Seeni","Settings":"Qindaa'inoota","Site settings":"Qindaa'inoota marsariitichaa","Appearance":"Bifa","Light":"Ifaa","Dark":"Dukkana",
  "Language":"Afaan","Choose a language":"Afaan filadhu","Changes apply immediately.":"Jijjiiramoonni battalumatti hojii irra oolu.",
  "Close":"Cufi","Welcome back.":"Baga nagaan deebite.","Reset your password.":"Jecha iccitii kee haaromsi.",
  "YOUR UNIVERSITY WORKSPACE":"Iddoo hojii yunivarsiitii kee","ACCOUNT RECOVERY":"Herrega deebisanii argachuu",
  "Sign in with the account provided by your AUPES administrator.":"Herrega bulchaan AUPES siif kenneen seeni.",
  "Enter your university email to receive password-reset instructions.":"Qajeelfama jecha iccitii haaromsuu argachuuf imeelii yunivarsiitii kee galchi.",
  "Email address":"Teessoo imeelii","Password":"Jecha iccitii","Enter your password":"Jecha iccitii kee galchi",
  "Forgot your password?":"Jecha iccitii kee irraanfatte?","Return to sign in":"Gara seenuutti deebi'i","Send reset link":"Geessituu haaromsaa ergi",
  "Please wait…":"Maaloo eegii…","Back to the public site":"Gara marsariitii uummataatti deebi'i",
  "Accounts are provisioned by AUPES administrators. There is no public self-registration.":"Herregawwan bulchitoota AUPES tiin qophaa'u. Ofumaan galmaa'uun hin jiru.",
  "Amharic":"Afaan Amaaraa","Afaan Oromo":"Afaan Oromoo","Tigrinya":"Afaan Tigraay"
 },
 ti:{
  "Home":"መበገሲ","About":"ብዛዕባ","Academics":"ትምህርቲ","Research":"ምርምር","News":"ዜና","Contact":"ርኸቡና",
  "Sign in":"እቶ","Settings":"ቅንብራት","Site settings":"ቅንብራት መርበብ","Appearance":"መልክዕ","Light":"ብሩህ","Dark":"ጸልማት",
  "Language":"ቋንቋ","Choose a language":"ቋንቋ ምረጽ","Changes apply immediately.":"ለውጢ ብቕጽበት ይትግበር።",
  "Close":"ዕጸው","Welcome back.":"እንኳዕ ብደሓን ተመለስካ።","Reset your password.":"መሕለፊ ቃልካ ኣሐድስ።",
  "YOUR UNIVERSITY WORKSPACE":"ናይ ዩኒቨርሲቲ መስርሒ ቦታ","ACCOUNT RECOVERY":"ምምላስ ሕሳብ",
  "Sign in with the account provided by your AUPES administrator.":"ምስ ኣብ ዝተዋህበካ ናይ AUPES ሕሳብ እቶ።",
  "Enter your university email to receive password-reset instructions.":"መምርሒ መሕለፊ ቃል ንምቕባል ኢመይል ዩኒቨርሲቲኻ ኣእቱ።",
  "Email address":"ኣድራሻ ኢመይል","Password":"መሕለፊ ቃል","Enter your password":"መሕለፊ ቃልካ ኣእቱ",
  "Forgot your password?":"መሕለፊ ቃልካ ረሲዕካ?","Return to sign in":"ናብ ምእታው ተመለስ","Send reset link":"መላግቦ ምሕዳስ ስደድ",
  "Please wait…":"በጃኻ ተጸበ…","Back to the public site":"ናብ ህዝባዊ መርበብ ተመለስ",
  "Accounts are provisioned by AUPES administrators. There is no public self-registration.":"ሕሳባት ብምምሕዳር AUPES ይዳለዉ። ህዝባዊ ርእሰ-ምዝገባ የለን።",
  "Amharic":"ኣማርኛ","Afaan Oromo":"ኣፋን ኦሮሞ","Tigrinya":"ትግርኛ"
 }
};


Object.assign(UI_TRANSLATIONS.am,{
 "Open navigation":"የአሰሳ ምናሌ ክፈት","Close navigation":"የአሰሳ ምናሌ ዝጋ","Main navigation":"ዋና አሰሳ",
 "AMBO UNIVERSITY · AUPES":"አምቦ ዩኒቨርሲቲ · AUPES",
 "Better teaching begins with honest feedback.":"የተሻለ ትምህርት በቅን ግብረመልስ ይጀምራል።",
 "Return to your assigned evaluations, submit thoughtful feedback and review the insights available to your role.":"የተመደቡልዎትን ግምገማዎች ይመለሱ፣ ጠቃሚ ግብረመልስ ያቅርቡ እና ለሚናዎ የተፈቀዱ ውጤቶችን ይመልከቱ።",
 "Structured evaluation forms":"የተደራጁ የግምገማ ቅጾች","Defined scoring weights":"ግልጽ የውጤት ክብደቶች",
 "Role-aware access to results":"በሚና ላይ የተመሠረተ የውጤት መዳረሻ","Academic quality is built one useful insight at a time.":"የትምህርት ጥራት በእያንዳንዱ ጠቃሚ ግንዛቤ ይገነባል።"
});
Object.assign(UI_TRANSLATIONS.om,{
 "Open navigation":"Menyu bana","Close navigation":"Menyu cufi","Main navigation":"Menyu ijoo",
 "AMBO UNIVERSITY · AUPES":"YUNIVARSIITII AMBOO · AUPES",
 "Better teaching begins with honest feedback.":"Barsiisni gaariin yaada dhugaa irraa jalqaba.",
 "Return to your assigned evaluations, submit thoughtful feedback and review the insights available to your role.":"Gamaaggama siif ramadame deebi'ii ilaali, yaada ijaarsaa dhiyeessi, odeeffannoo gahee keetiif hayyamameenis ilaali.",
 "Structured evaluation forms":"Unkaalee gamaaggamaa qindaa'an","Defined scoring weights":"Ulfaatina qabxii ifa ta'e",
 "Role-aware access to results":"Bu'aa gahee irratti hundaa'e argachuu","Academic quality is built one useful insight at a time.":"Qulqullinni barnootaa hubannoo faayidaa qabu tokkoon tokkoon ijaarama."
});
Object.assign(UI_TRANSLATIONS.ti,{
 "Open navigation":"መርበብ ክፈት","Close navigation":"መርበብ ዕጸው","Main navigation":"ቀንዲ መርበብ",
 "AMBO UNIVERSITY · AUPES":"ኣምቦ ዩኒቨርሲቲ · AUPES",
 "Better teaching begins with honest feedback.":"ዝሓሸ ትምህርቲ ብቅኑዕ ርእይቶ ይጅምር።",
 "Return to your assigned evaluations, submit thoughtful feedback and review the insights available to your role.":"ናብ ዝተመደቡልካ ገምጋማት ተመለስ፣ ጠቓሚ ርእይቶ ኣቕርብ፣ ንሓላፍነትካ ዝፍቀዱ ሓበሬታታት እውን ርአ።",
 "Structured evaluation forms":"ዝተዋደዱ ቅጥዕታት ገምጋም","Defined scoring weights":"ግልጺ ክብደታት ነጥቢ",
 "Role-aware access to results":"ብሓላፍነት ዝተመርኮሰ መእተዊ ውጽኢት","Academic quality is built one useful insight at a time.":"ጽሬት ትምህርቲ ብነፍሲ ወከፍ ጠቓሚ ሓሳብ ይህነጽ።"
});


Object.assign(UI_TRANSLATIONS.am,{
 "Performance Evaluation System":"የአፈጻጸም ግምገማ ሥርዓት","A thoughtful approach to teaching evaluation, meaningful feedback and academic growth.":"የትምህርት ግምገማን፣ ጠቃሚ ግብረመልስን እና የአካዳሚክ እድገትን የሚያገናኝ አቀራረብ።",
 "Discover":"ያግኙ","About AUPES":"ስለ AUPES","Academic areas":"የአካዳሚክ መስኮች","Research & community":"ምርምር እና ማህበረሰብ","News & stories":"ዜና እና ታሪኮች","Evaluation":"ግምገማ","How it works":"እንዴት እንደሚሰራ","Scoring model":"የውጤት አሰጣጥ ሞዴል","Privacy & confidentiality":"ግላዊነት እና ምስጢራዊነት","Terms of use":"የአጠቃቀም ውሎች","Get support":"ድጋፍ ያግኙ","Contact & support":"ግንኙነት እና ድጋፍ","Sign in to AUPES":"ወደ AUPES ይግቡ","Evaluation guide":"የግምገማ መመሪያ","Ambo University Performance Evaluation System":"የአምቦ ዩኒቨርሲቲ የአፈጻጸም ግምገማ ሥርዓት","Responsible evaluation":"ኃላፊነት ያለው ግምገማ",
 "THE UNIVERSITY IN MOTION":"ዩኒቨርሲቲው በእንቅስቃሴ ላይ","Learn":"ተማር","Explore":"አስስ","Create":"ፍጠር","Serve":"አገልግል","Innovate":"አዲስ ነገር ፍጠር","Collaborate":"ተባበር","Reflect":"አስብ","Grow":"እደግ",
 "Build knowledge and skills":"እውቀትና ችሎታ ገንባ","Ask questions and discover":"ጥያቄዎችን ጠይቅ እና አግኝ","Turn ideas into solutions":"ሀሳቦችን ወደ መፍትሄ ቀይር","Contribute to communities":"ለማህበረሰብ አስተዋጽኦ አድርግ","Imagine what comes next":"የሚቀጥለውን አስብ","Make progress together":"በጋራ እድገት አድርግ","Learn from every experience":"ከእያንዳንዱ ልምድ ተማር","Keep reaching forward":"ወደፊት መጓዝህን ቀጥል",
 "LEARNING · DISCOVERY · COMMUNITY":"መማር · ግኝት · ማህበረሰብ","Where knowledge":"እውቀት የሚያብብበት","takes root and":"ሥር የሚሰድድ እና","possibility grows.":"ዕድሎች የሚያድጉበት።",
 "A university community shaped by curiosity, thoughtful teaching, research and a shared commitment to meaningful progress.":"በጉጉት፣ በጥራት ትምህርት፣ በምርምር እና በጋራ እድገት ቁርጠኝነት የተቀረጸ የዩኒቨርሲቲ ማህበረሰብ።",
 "Discover our university":"ዩኒቨርሲቲያችንን ያግኙ","Learning for impact":"ለተግባራዊ ተፅዕኖ መማር","Rooted in Ethiopia":"ሥር የሰደደ በኢትዮጵያ","WELCOME TO AMBO":"ወደ አምቦ እንኳን በደህና መጡ","A UNIVERSITY WITH DEEP ROOTS":"ጥልቅ መሠረት ያለው ዩኒቨርሲቲ","Built on history.":"በታሪክ ላይ የተመሠረተ።","Open to what’s next.":"ለወደፊቱ ክፍት።","Explore our story":"ታሪካችንን ይወቁ","EXPLORE ACADEMIC LIFE":"የአካዳሚክ ሕይወትን ያስሱ","Many paths.":"ብዙ መንገዶች።","One community of discovery.":"አንድ የግኝት ማህበረሰብ።","Explore the academic areas that connect practical skills, science, creative thinking and the needs of a changing world.":"ተግባራዊ ክህሎትን፣ ሳይንስን፣ ፈጠራዊ አስተሳሰብን እና የሚለወጥ ዓለም ፍላጎቶችን የሚያገናኙ የአካዳሚክ መስኮችን ያስሱ።","Curiosity can take many directions.":"ጉጉት ወደ ብዙ አቅጣጫዎች ሊመራ ይችላል።"
});
Object.assign(UI_TRANSLATIONS.om,{
 "Performance Evaluation System":"Sirna Madaallii Raawwii","A thoughtful approach to teaching evaluation, meaningful feedback and academic growth.":"Madaallii barsiisuu, yaada bu'a qabeessa fi guddina barnootaa walitti fidu.",
 "Discover":"Barbaadi","About AUPES":"Waa'ee AUPES","Academic areas":"Damee barnootaa","Research & community":"Qorannoo fi hawaasa","News & stories":"Oduu fi seenaa","Evaluation":"Madaallii","How it works":"Akkaataa itti hojjetu","Scoring model":"Sirna qabxii","Privacy & confidentiality":"Iccitii fi eegumsa odeeffannoo","Terms of use":"Ulaagaalee itti fayyadamaa","Get support":"Deeggarsa argadhu","Contact & support":"Nu qunnami fi deeggarsa","Sign in to AUPES":"AUPES seeni","Evaluation guide":"Qajeelfama madaallii","Ambo University Performance Evaluation System":"Sirna Madaallii Raawwii Yunivarsiitii Amboo","Responsible evaluation":"Madaallii itti gaafatamummaa qabu",
 "THE UNIVERSITY IN MOTION":"YUNIVARSIITIIN SOCHII IRRA JIRA","Learn":"Baradhu","Explore":"Qoradhu","Create":"Uumi","Serve":"Tajaajili","Innovate":"Kalaqi","Collaborate":"Waliin hojjedhu","Reflect":"Xiinxali","Grow":"Guddisi",
 "Build knowledge and skills":"Beekumsa fi dandeettii ijaari","Ask questions and discover":"Gaaffii gaafadhu, argadhu","Turn ideas into solutions":"Yaada gara furmaataatti jijjiiri","Contribute to communities":"Hawaasaaf gumaachi","Imagine what comes next":"Waan itti aanu tilmaami","Make progress together":"Waliin guddadhu","Learn from every experience":"Muuxannoo hunda irraa baradhu","Keep reaching forward":"Fuulduratti tarkaanfadhu",
 "LEARNING · DISCOVERY · COMMUNITY":"BARUMSA · ARGATUU · HAWAASA","Where knowledge":"Bakka beekumsi","takes root and":"hidda gadi fageeffatu fi","possibility grows.":"carraan itti guddatu.",
 "A university community shaped by curiosity, thoughtful teaching, research and a shared commitment to meaningful progress.":"Hawaasa yunivarsiitii fedhii barachuu, barsiisa gaarii, qorannoo fi guddina waliinii irratti hundaa'e.",
 "Discover our university":"Yunivarsiitii keenya baradhu","Learning for impact":"Bu'aa fiduuf barachuu","Rooted in Ethiopia":"Itoophiyaa keessatti hundeeffame","WELCOME TO AMBO":"BAGA AMBOO DHUFTAN","A UNIVERSITY WITH DEEP ROOTS":"Yunivarsiitii hundee jabaa qabu","Built on history.":"Seenaa irratti ijaarame.","Open to what’s next.":"Waan dhufuuf banaa.","Explore our story":"Seenaa keenya qoradhu","EXPLORE ACADEMIC LIFE":"Jireenya barnootaa qoradhu","Many paths.":"Karaa hedduu.","One community of discovery.":"Hawaasa argannoo tokko.","Explore the academic areas that connect practical skills, science, creative thinking and the needs of a changing world.":"Dameewwan dandeettii hojii, saayinsii, yaada kalaqaa fi fedhii addunyaa jijjiiramaa walitti hidhan qoradhu.","Curiosity can take many directions.":"Fedhiin beekumsaa gara kallattii hedduutti nama geessa."
});
Object.assign(UI_TRANSLATIONS.ti,{
 "Performance Evaluation System":"ስርዓት ገምጋም ኣፈጻጽማ","A thoughtful approach to teaching evaluation, meaningful feedback and academic growth.":"ንገምጋም ምምህርና፣ ትርጉም ዘለዎ ርእይቶን ኣካዳሚያዊ ዕቤትን ዘተኣሳስር ኣቀራርባ።",
 "Discover":"ርኸብ","About AUPES":"ብዛዕባ AUPES","Academic areas":"ኣካዳሚያዊ ዓውድታት","Research & community":"ምርምርን ማሕበረሰብን","News & stories":"ዜናን ታሪኻትን","Evaluation":"ገምጋም","How it works":"ብኸመይ ይሰርሕ","Scoring model":"ኣገባብ ነጥቢ","Privacy & confidentiality":"ምስጢራዊነትን ሓለዋ ሓበሬታን","Terms of use":"ስምምዕ ኣጠቓቕማ","Get support":"ሓገዝ ርኸብ","Contact & support":"ርክብን ሓገዝን","Sign in to AUPES":"ናብ AUPES እቶ","Evaluation guide":"መምርሒ ገምጋም","Ambo University Performance Evaluation System":"ስርዓት ገምጋም ኣፈጻጽማ ዩኒቨርሲቲ ኣምቦ","Responsible evaluation":"ሓላፍነታዊ ገምጋም",
 "THE UNIVERSITY IN MOTION":"እቲ ዩኒቨርሲቲ ኣብ ምንቅስቓስ","Learn":"ተማሃር","Explore":"መርምር","Create":"ፍጠር","Serve":"ኣገልግል","Innovate":"ሓድሽ ነገር ፍጠር","Collaborate":"ተሓባበር","Reflect":"ኣስተንትን","Grow":"ዕበ",
 "Build knowledge and skills":"ፍልጠትን ክእለትን ህነጽ","Ask questions and discover":"ሕቶታት ሕተት እሞ ርኸብ","Turn ideas into solutions":"ሓሳባት ናብ ፍታሕ ቀይር","Contribute to communities":"ንማሕበረሰብ ኣበርክት","Imagine what comes next":"ቀጺሉ እንታይ ከም ዝመጽእ ሕሰብ","Make progress together":"ብሓባር ተማዕብል","Learn from every experience":"ካብ ነፍሲ ወከፍ ተሞክሮ ተማሃር","Keep reaching forward":"ናብ ቅድሚት ምምራሽ ቀጽል",
 "LEARNING · DISCOVERY · COMMUNITY":"ትምህርቲ · ምርምር · ማሕበረሰብ","Where knowledge":"ፍልጠት ዝዓብየሉ","takes root and":"ሱር ዝሰድድን","possibility grows.":"ዕድል ዝዓብየሉ።",
 "A university community shaped by curiosity, thoughtful teaching, research and a shared commitment to meaningful progress.":"ብህንጸት ፍልጠት፣ ጽቡቕ ምምህርና፣ ምርምርን ናይ ሓባር ዕቤትን ዝተቐርጸ ማሕበረሰብ ዩኒቨርሲቲ።",
 "Discover our university":"ዩኒቨርሲቲና ፍለጥ","Learning for impact":"ንተጽዕኖ ምምሃር","Rooted in Ethiopia":"ኣብ ኢትዮጵያ ሱር ዝሰደደ","WELCOME TO AMBO":"እንቋዕ ናብ ኣምቦ ብደሓን መጻእኩም","A UNIVERSITY WITH DEEP ROOTS":"ዓሚቕ ሱር ዘለዎ ዩኒቨርሲቲ","Built on history.":"ኣብ ታሪኽ ዝተመስረተ።","Open to what’s next.":"ንዝመጽእ ድሉው።","Explore our story":"ታሪኽና ፍለጥ","EXPLORE ACADEMIC LIFE":"ኣካዳሚያዊ ህይወት መርምር","Many paths.":"ብዙሓት መንገድታት።","One community of discovery.":"ሓደ ማሕበረሰብ ምርምር።","Explore the academic areas that connect practical skills, science, creative thinking and the needs of a changing world.":"ክእለት ተግባር፣ ሳይንስ፣ ፈጠራዊ ኣተሓሳስባን ናይ ዝቕየር ዓለም ድሌታትን ዘተኣሳስሩ ኣካዳሚያዊ ዓውድታት መርምር።","Curiosity can take many directions.":"ህንጸት ፍልጠት ናብ ብዙሓት ኣንፈታት ክወስድ ይኽእል።"
});


Object.assign(UI_TRANSLATIONS.am,{
 "ABOUT AUPES":"ስለ AUPES","An academic community with room to grow.":"ለዕድገት ቦታ ያለው የአካዳሚክ ማህበረሰብ።","Learn about the university's learning culture and the purpose of the Ambo University Performance Evaluation System.":"ስለ ዩኒቨርሲቲው የመማር ባህል እና የአምቦ ዩኒቨርሲቲ የአፈጻጸም ግምገማ ሥርዓት ዓላማ ይወቁ።",
 "ACADEMIC LIFE":"የአካዳሚክ ሕይወት","Many disciplines. One shared purpose.":"ብዙ ዘርፎች። አንድ የጋራ ዓላማ።","Explore the broad fields of learning, from agriculture and technology to health, society and the humanities.":"ከግብርናና ቴክኖሎጂ እስከ ጤና፣ ማህበረሰብ እና ሰብዓዊ ሳይንሶች ያሉ የትምህርት መስኮችን ያስሱ።",
 "RESEARCH & COMMUNITY":"ምርምር እና ማህበረሰብ","Ideas become meaningful when they are shared.":"ሀሳቦች ሲጋሩ ትርጉም ያገኛሉ።","Research, innovation and community engagement bring academic knowledge into conversation with real-world needs.":"ምርምር፣ ፈጠራ እና የማህበረሰብ ተሳትፎ አካዳሚክ እውቀትን ከእውነተኛ ዓለም ፍላጎቶች ጋር ያገናኛሉ።",
 "CAMPUS STORIES":"የግቢ ታሪኮች","A place for ideas, people and progress.":"ለሀሳቦች፣ ሰዎች እና እድገት የተዘጋጀ ቦታ።","Editorial features celebrating learning, discovery, creativity and the people who shape academic life.":"መማርን፣ ግኝትን፣ ፈጠራን እና የአካዳሚክ ሕይወትን የሚቀርጹ ሰዎችን የሚያከብሩ ጽሑፎች።",
 "THE EVALUATION JOURNEY":"የግምገማ ሂደት","A clear path from assignment to insight.":"ከምደባ እስከ ግንዛቤ ግልጽ መንገድ።","A structured workflow helps evaluators complete assigned forms and gives authorized users a consistent view of results.":"የተደራጀ ሂደት ገምጋሚዎች የተመደቡላቸውን ቅጾች እንዲሞሉ ይረዳል።",
 "SCORING METHODOLOGY":"የውጤት አሰጣጥ ዘዴ","Consistent inputs. A transparent final score.":"ወጥ ግብዓቶች። ግልጽ የመጨረሻ ውጤት።","AUPES follows the supplied Form E weighting model and keeps missing components pending rather than treating them as zero.":"AUPES በተሰጠው የቅጽ E ክብደት ሞዴል ይሰራል፤ የጎደሉ ክፍሎችን ዜሮ ከማድረግ ይልቅ በመጠባበቅ ላይ ያስቀምጣል።",
 "PRIVACY & CONFIDENTIALITY":"ግላዊነት እና ምስጢራዊነት","Evaluation data deserves careful handling.":"የግምገማ መረጃ ጥንቃቄ ይፈልጋል።","Access controls and aggregate instructor summaries are designed to keep evaluation information in the right hands.":"የመዳረሻ ቁጥጥር እና የአጠቃላይ ማጠቃለያዎች የግምገማ መረጃን በተፈቀዱ እጆች ለማቆየት ተዘጋጅተዋል።",
 "AUPES HELP":"የAUPES እርዳታ","Get help with access or evaluation tasks.":"ስለ መዳረሻ ወይም የግምገማ ሥራዎች እርዳታ ያግኙ።","Use this guide for account access, role assignment, missing evaluations and other AUPES workspace questions.":"ስለ መለያ መዳረሻ፣ ሚና ምደባ፣ የጎደሉ ግምገማዎች እና ሌሎች የAUPES ጥያቄዎች ይህን መመሪያ ይጠቀሙ።",
 "RESPONSIBLE USE":"ኃላፊነት ያለው አጠቃቀም","Use feedback to improve, not to harm.":"ግብረመልስን ለመሻሻል እንጂ ለመጉዳት አይጠቀሙ።","AUPES is intended for responsible academic evaluation and constructive professional development.":"AUPES ለኃላፊነት ያለው አካዳሚክ ግምገማ እና ገንቢ ሙያዊ እድገት የተዘጋጀ ነው።"
});
Object.assign(UI_TRANSLATIONS.om,{
 "ABOUT AUPES":"WAA'EE AUPES","An academic community with room to grow.":"Hawaasa barnootaa guddataa deemuuf carraa qabu.","Learn about the university's learning culture and the purpose of the Ambo University Performance Evaluation System.":"Aadaa barnootaa yunivarsiitii fi kaayyoo Sirna Madaallii Raawwii Yunivarsiitii Amboo baradhu.",
 "ACADEMIC LIFE":"JIREENYA BARNOOTAA","Many disciplines. One shared purpose.":"Dameewwan hedduu. Kaayyoo waliinii tokko.","Explore the broad fields of learning, from agriculture and technology to health, society and the humanities.":"Damee barnootaa bal'aa, qonnaa fi teeknooloojii irraa kaasee hanga fayyaa, hawaasaa fi saayinsii namoomaatti qoradhu.",
 "RESEARCH & COMMUNITY":"QORANNOO FI HAWAASA","Ideas become meaningful when they are shared.":"Yaadni yeroo qoodamu hiika argata.","Research, innovation and community engagement bring academic knowledge into conversation with real-world needs.":"Qorannoon, kalaqni fi hirmaannaan hawaasaa beekumsa barnootaa fedhii jireenya dhugaa waliin walitti hidhu.",
 "CAMPUS STORIES":"SEENAA KAMPASII","A place for ideas, people and progress.":"Bakka yaadaa, namootaa fi guddinaaf.","Editorial features celebrating learning, discovery, creativity and the people who shape academic life.":"Barachuu, argannoo, kalaqa fi namoota jireenya barnootaa bocan kabaju.",
 "THE EVALUATION JOURNEY":"ADEEMSA MADAALLII","A clear path from assignment to insight.":"Karaa ifaa hojii irraa hubannootti.","A structured workflow helps evaluators complete assigned forms and gives authorized users a consistent view of results.":"Adeemsi qindaa'aan madaaltoonni unka ramadame guutuu fi fayyadamtoonni hayyamaman bu'aa sirnaan ilaaluu akka danda'an gargaara.",
 "SCORING METHODOLOGY":"MALA QABXII","Consistent inputs. A transparent final score.":"Galtee wal-fakkaataa. Qabxii xumuraa ifaa.","AUPES follows the supplied Form E weighting model and keeps missing components pending rather than treating them as zero.":"AUPES moodeela ulfaatina Unka E hordofa; kutaa hin jirre zeeroo gochuu mannaa eegumsa keessa tura.",
 "PRIVACY & CONFIDENTIALITY":"ICCIITII FI EEGUMSA ODEEFFANNOO","Evaluation data deserves careful handling.":"Odeeffannoon madaallii of eeggannoo barbaada.","Access controls and aggregate instructor summaries are designed to keep evaluation information in the right hands.":"To'annoon seensaa fi gabaasni waliigalaa odeeffannoo madaallii namoota hayyamaman biratti akka turu gargaaru.",
 "AUPES HELP":"DEEGGARSA AUPES","Get help with access or evaluation tasks.":"Seensaa yookaan hojii madaallii irratti gargaarsa argadhu.","Use this guide for account access, role assignment, missing evaluations and other AUPES workspace questions.":"Qajeelfama kana seensa herregaa, ramaddii gahee, madaallii dhabamee fi gaaffilee AUPES biroof fayyadami.",
 "RESPONSIBLE USE":"ITTIGAAMTUMMAAN FAYYADAMUU","Use feedback to improve, not to harm.":"Yaada fooyya'iinsaaf fayyadami, miidhaaf hin fayyadamin.","AUPES is intended for responsible academic evaluation and constructive professional development.":"AUPES madaallii barnootaa itti gaafatamummaa qabuuf fi guddina ogummaa ijaarsaa deeggaaruuf qophaa'e."
});
Object.assign(UI_TRANSLATIONS.ti,{
 "ABOUT AUPES":"ብዛዕባ AUPES","An academic community with room to grow.":"ንምዕባይ ቦታ ዘለዎ ኣካዳሚያዊ ማሕበረሰብ።","Learn about the university's learning culture and the purpose of the Ambo University Performance Evaluation System.":"ብዛዕባ ባህሊ ትምህርቲ ዩኒቨርሲቲን ዕላማ ስርዓት ገምጋም ኣፈጻጽማ ዩኒቨርሲቲ ኣምቦን ፍለጥ።",
 "ACADEMIC LIFE":"ኣካዳሚያዊ ህይወት","Many disciplines. One shared purpose.":"ብዙሓት ዓውድታት። ሓደ ሓባራዊ ዕላማ።","Explore the broad fields of learning, from agriculture and technology to health, society and the humanities.":"ካብ ሕርሻን ቴክኖሎጂን ክሳብ ጥዕና፣ ማሕበረሰብን ሰብኣዊ ሳይንስን ዘለዉ ዓውድታት ትምህርቲ መርምር።",
 "RESEARCH & COMMUNITY":"ምርምርን ማሕበረሰብን","Ideas become meaningful when they are shared.":"ሓሳባት ክካፈሉ እንከለዉ ትርጉም ይረኽቡ።","Research, innovation and community engagement bring academic knowledge into conversation with real-world needs.":"ምርምር፣ ምህዞን ተሳትፎ ማሕበረሰብን ኣካዳሚያዊ ፍልጠት ምስ ናይ ህይወት ተግባራዊ ድሌታት የተኣሳስሩ።",
 "CAMPUS STORIES":"ታሪኻት ካምፓስ","A place for ideas, people and progress.":"ንሓሳባት፣ ሰባትን ዕቤትን ዝኸውን ቦታ።","Editorial features celebrating learning, discovery, creativity and the people who shape academic life.":"ትምህርቲ፣ ምርምር፣ ፈጠራን ንኣካዳሚያዊ ህይወት ዝቐርጹ ሰባትን ዘብዕሉ ጽሑፋት።",
 "THE EVALUATION JOURNEY":"መስርሕ ገምጋም","A clear path from assignment to insight.":"ካብ ምደባ ክሳብ ሓሳብ ግልጺ መንገዲ።","A structured workflow helps evaluators complete assigned forms and gives authorized users a consistent view of results.":"ዝተዋደደ ስርሒት ገምገምቲ ዝተመደቡሎም ቅጥዕታት ክመልኡ ይሕግዝ፣ ፍቓድ ዘለዎም ተጠቀምቲ ድማ ውጽኢት ብስሩዕ ክርእዩ ይገብር።",
 "SCORING METHODOLOGY":"ኣገባብ ነጥቢ","Consistent inputs. A transparent final score.":"ወጥ ዝኾኑ ግብኣታት። ግልጺ መወዳእታ ነጥቢ።","AUPES follows the supplied Form E weighting model and keeps missing components pending rather than treating them as zero.":"AUPES ነቲ ዝተዋህበ ናይ ቅጥዒ E ሚዛን ይኽተል፤ ዝጎደሉ ክፋላት ከም ዜሮ ኣይቆጽሮምን፣ ኣብ ትጽቢት የቐምጦም።",
 "PRIVACY & CONFIDENTIALITY":"ግላዊነትን ምስጢራዊነትን","Evaluation data deserves careful handling.":"ሓበሬታ ገምጋም ብጥንቃቐ ክሕዝ ይግባእ።","Access controls and aggregate instructor summaries are designed to keep evaluation information in the right hands.":"ቁጽጽር መእተዊን ጠቕላላ ሓጺር ጸብጻብን ሓበሬታ ገምጋም ኣብ ተፈቐደሎም ኢድ ንምሕላው ተዳልዮም።",
 "AUPES HELP":"ሓገዝ AUPES","Get help with access or evaluation tasks.":"ብዛዕባ መእተዊ ወይ ስራሕ ገምጋም ሓገዝ ርኸብ።","Use this guide for account access, role assignment, missing evaluations and other AUPES workspace questions.":"ንመእተዊ ሕሳብ፣ ምደባ ሓላፍነት፣ ዝጎደሉ ገምጋማትን ካልኦት ሕቶታት AUPESን ነዚ መምርሒ ተጠቐም።",
 "RESPONSIBLE USE":"ሓላፍነታዊ ኣጠቓቕማ","Use feedback to improve, not to harm.":"ርእይቶ ንምምሕያሽ ተጠቐመሉ እምበር ንምጉዳእ ኣይኮነን።","AUPES is intended for responsible academic evaluation and constructive professional development.":"AUPES ንሓላፍነታዊ ኣካዳሚያዊ ገምጋምን ንገንቢ ሞያዊ ዕቤትን ተዳልዩ።"
});

Object.assign(UI_TRANSLATIONS.am,{
 "Ambo University brings together learners, educators and researchers across academic disciplines and campuses. Its learning community connects teaching and learning with inquiry, innovation, knowledge sharing and community engagement.":"አምቦ ዩኒቨርሲቲ በተለያዩ የአካዳሚክ ዘርፎች ተማሪዎችን፣ አስተማሪዎችን እና ተመራማሪዎችን ያገናኛል። የመማር ማህበረሰቡ ትምህርትን ከጥናት፣ ከፈጠራ፣ ከእውቀት መጋራት እና ከማህበረሰብ አገልግሎት ጋር ያገናኛል።",
 "Explore academic areas":"የአካዳሚክ መስኮችን ያስሱ"
});

Object.assign(UI_TRANSLATIONS.om,{
 "Ambo University brings together learners, educators and researchers across academic disciplines and campuses. Its learning community connects teaching and learning with inquiry, innovation, knowledge sharing and community engagement.":"Yunivarsiitiin Amboo barattoota, barsiisota fi qorattoota dameewwan barnootaa adda addaa irraa walitti fida. Hawaasni barnootaa qorannoo, kalaqa, qoodinsa beekumsaa fi tajaajila hawaasaa waliin walitti hidha.",
 "Explore academic areas":"Dameewwan barnootaa qoradhu"
});

Object.assign(UI_TRANSLATIONS.ti,{
 "Ambo University brings together learners, educators and researchers across academic disciplines and campuses. Its learning community connects teaching and learning with inquiry, innovation, knowledge sharing and community engagement.":"ዩኒቨርሲቲ ኣምቦ ኣብ ዝተፈላለዩ ኣካዳሚያዊ ዓውድታት ዝርከቡ ተማሃሮ፣ መምህራንን መራሕቲ ምርምርን የራኽብ። ማሕበረሰብ ትምህርቲ ምስ ምርምር፣ ምህዞ፣ ምክፋል ፍልጠትን ኣገልግሎት ማሕበረሰብን የተኣሳስር።",
 "Explore academic areas":"ኣካዳሚያዊ ዓውድታት መርምር"
});

Object.assign(UI_TRANSLATIONS.am,{
 "Overview":"አጠቃላይ እይታ","My evaluations":"የእኔ ግምገማዎች","Performance results":"የአፈጻጸም ውጤቶች","Evaluation assignments":"የግምገማ ምደባዎች","Account management":"የመለያ አስተዳደር","Evaluation":"ግምገማ",
 "Academic affairs":"የአካዳሚክ ጉዳዮች","Evaluation portal":"የግምገማ መግቢያ","WORKSPACE":"የሥራ ቦታ","Need guidance?":"መመሪያ ይፈልጋሉ?","Contact your department administrator.":"የዲፓርትመንት አስተዳዳሪዎን ያግኙ።","Sign out":"ውጣ","Academic year 2026/27":"የትምህርት ዘመን 2026/27","University member":"የዩኒቨርሲቲ አባል","Secure academic evaluation":"ደህንነቱ የተጠበቀ አካዳሚክ ግምገማ",
 "Good afternoon, administrator.":"እንደምን ዋሉ፣ አስተዳዳሪ።","Welcome back, ":"እንኳን በደህና ተመለሱ፣ ","instructor":"አስተማሪ","Welcome":"እንኳን ደህና መጡ"," back":" እንኳን ተመለሱ",
 "YOUR ACADEMIC WORKSPACE":"የአካዳሚክ የሥራ ቦታዎ","Manage accounts, organize evaluation cycles and monitor university-wide progress.":"መለያዎችን ያስተዳድሩ፣ የግምገማ ዑደቶችን ያደራጁ እና የዩኒቨርሲቲውን እድገት ይከታተሉ።","Review your performance insights and track development throughout the academic year.":"የአፈጻጸም ግንዛቤዎችዎን ይመልከቱ እና በትምህርት ዘመኑ ውስጥ እድገትዎን ይከታተሉ።","Your contribution helps strengthen teaching quality at Ambo University.":"አስተዋጽኦዎ በአምቦ ዩኒቨርሲቲ የትምህርት ጥራትን ለማጠናከር ይረዳል።",
 "Add account":"መለያ ጨምር","Assign evaluation":"ግምገማ መድብ","Open my evaluations":"የእኔን ግምገማዎች ክፈት",
 "Registered accounts":"የተመዘገቡ መለያዎች","Assigned evaluations":"የተመደቡ ግምገማዎች","Across university roles":"በዩኒቨርሲቲው ሚናዎች ሁሉ","For your account":"ለመለያዎ","Open assignments":"ክፍት ምደባዎች","Awaiting completion":"መጠናቀቅን በመጠበቅ ላይ","Waiting for responses":"ምላሾችን በመጠበቅ ላይ","Keep the cycle moving":"ሂደቱን ይቀጥሉ","You’re all caught up":"ሁሉንም አጠናቀዋል","Submitted evaluations":"የቀረቡ ግምገማዎች","Completed":"ተጠናቋል","Submitted successfully":"በተሳካ ሁኔታ ቀርቧል","Instructors with results":"ውጤት ያላቸው አስተማሪዎች","Final result":"የመጨረሻ ውጤት","Summary data available":"የማጠቃለያ መረጃ አለ","Weighted score out of 100":"ከ100 የተመዘነ ውጤት","PRIORITY":"ቅድሚያ","Evaluation cycle":"የግምገማ ዑደት","Your results at a glance":"ውጤቶችዎ በአጭሩ","Evaluations to complete":"መጠናቀቅ ያለባቸው ግምገማዎች","View all":"ሁሉንም ይመልከቱ"
});

Object.assign(UI_TRANSLATIONS.om,{
 "Overview":"Cuunfaa","My evaluations":"Madaalliiwwan koo","Performance results":"Bu'aa raawwii","Evaluation assignments":"Ramaddii madaallii","Account management":"Bulchiinsa herregaa","Evaluation":"Madaallii",
 "Academic affairs":"Dhimmoota barnootaa","Evaluation portal":"Balbala madaallii","WORKSPACE":"IDDOO HOJII","Need guidance?":"Qajeelfama barbaaddaa?","Contact your department administrator.":"Bulchaa kutaa keessan qunnamaa.","Sign out":"Ba'i","Academic year 2026/27":"Bara barnootaa 2026/27","University member":"Miseensa yunivarsiitii","Secure academic evaluation":"Madaallii barnootaa nageenya qabu",
 "Good afternoon, administrator.":"Akkam ooltan, bulchaa.","Welcome back, ":"Baga nagaan deebitan, ","instructor":"barsiisaa","Welcome":"Baga nagaan dhuftan"," back":" deebitan",
 "YOUR ACADEMIC WORKSPACE":"IDDOO HOJII BARNOOTAA KEESSAN","Manage accounts, organize evaluation cycles and monitor university-wide progress.":"Herrega bulchaa, marsaa madaallii qindeessaa, guddina yunivarsiitii hordofaa.","Review your performance insights and track development throughout the academic year.":"Hubannoo raawwii keessanii ilaalaa fi guddina bara barnootaa keessatti hordofaa.","Your contribution helps strengthen teaching quality at Ambo University.":"Gumaachi keessan qulqullina barsiisuu Yunivarsiitii Amboo cimsuuf gargaara.",
 "Add account":"Herrega dabali","Assign evaluation":"Madaallii ramadi","Open my evaluations":"Madaalliiwwan koo bani",
 "Registered accounts":"Herrega galmaa'e","Assigned evaluations":"Madaallii ramadame","Across university roles":"Gahee yunivarsiitii hunda keessatti","For your account":"Herrega keetiif","Open assignments":"Ramaddiiwwan banaa","Awaiting completion":"Xumura eegaa jira","Waiting for responses":"Deebii eegaa jira","Keep the cycle moving":"Adeemsa itti fufi","You’re all caught up":"Hunda xumurtaniittu","Submitted evaluations":"Madaallii dhiyaate","Completed":"Xumurame","Submitted successfully":"Milkaa'inaan dhiyaate","Instructors with results":"Barsiisota bu'aa qaban","Final result":"Bu'aa xumuraa","Summary data available":"Odeeffannoon cuunfaa jira","Weighted score out of 100":"Qabxii ulfaatina qabu 100 keessaa","PRIORITY":"DURSA","Evaluation cycle":"Marsaa madaallii","Your results at a glance":"Bu'aa keessan gabaabinaan","Evaluations to complete":"Madaallii xumuramuu qabu","View all":"Hunda ilaali"
});

Object.assign(UI_TRANSLATIONS.ti,{
 "Overview":"ሓፈሻዊ ርእይቶ","My evaluations":"ገምጋማተይ","Performance results":"ውጽኢት ኣፈጻጽማ","Evaluation assignments":"ምደባ ገምጋም","Account management":"ምምሕዳር ሕሳብ","Evaluation":"ገምጋም",
 "Academic affairs":"ኣካዳሚያዊ ጉዳያት","Evaluation portal":"መእተዊ ገምጋም","WORKSPACE":"ቦታ ስራሕ","Need guidance?":"መምርሒ የድልየካ?","Contact your department administrator.":"ንምምሕዳር ክፍልኻ ርኸብ።","Sign out":"ውጻእ","Academic year 2026/27":"ዓመተ ትምህርቲ 2026/27","University member":"ኣባል ዩኒቨርሲቲ","Secure academic evaluation":"ውሑስ ኣካዳሚያዊ ገምጋም",
 "Good afternoon, administrator.":"ደሓን ውዓሉ፣ ኣመሓዳሪ።","Welcome back, ":"እንቋዕ ተመለስካ፣ ","instructor":"መምህር","Welcome":"እንቋዕ ብደሓን መጻእካ"," back":" ተመለስካ",
 "YOUR ACADEMIC WORKSPACE":"ኣካዳሚያዊ ቦታ ስራሕካ","Manage accounts, organize evaluation cycles and monitor university-wide progress.":"ሕሳባት ኣመሓድር፣ ዑደት ገምጋም ኣዳሉ፣ ኣብ ምሉእ ዩኒቨርሲቲ ዘሎ ዕቤት ተኸታተል።","Review your performance insights and track development throughout the academic year.":"ሓበሬታ ኣፈጻጽማኻ ርአ እሞ ኣብ ዓመተ ትምህርቲ ምዕባለኻ ተኸታተል።","Your contribution helps strengthen teaching quality at Ambo University.":"ኣበርክቶኻ ኣብ ዩኒቨርሲቲ ኣምቦ ጽሬት ምምህርና ንምጽናዕ ይሕግዝ።",
 "Add account":"ሕሳብ ወስኽ","Assign evaluation":"ገምጋም መድብ","Open my evaluations":"ገምጋማተይ ክፈት",
 "Registered accounts":"ዝተመዝገቡ ሕሳባት","Assigned evaluations":"ዝተመደቡ ገምጋማት","Across university roles":"ኣብ ኩሉ ናይ ዩኒቨርሲቲ ሓላፍነታት","For your account":"ንሕሳብካ","Open assignments":"ክፉታት ምደባታት","Awaiting completion":"ምዝዛም ይጽበ","Waiting for responses":"መልሲ ይጽበ","Keep the cycle moving":"እቲ መስርሕ ቀጽል","You’re all caught up":"ኩሉ ወዲእካ","Submitted evaluations":"ዝቐረቡ ገምጋማት","Completed":"ተዛዚሙ","Submitted successfully":"ብዓወት ቀሪቡ","Instructors with results":"ውጽኢት ዘለዎም መምህራን","Final result":"መወዳእታ ውጽኢት","Summary data available":"ጠቕላላ ሓበሬታ ኣሎ","Weighted score out of 100":"ብሚዛን ዝተሰርሐ ነጥቢ ካብ 100","PRIORITY":"ቀዳምነት","Evaluation cycle":"ዑደት ገምጋም","Your results at a glance":"ውጽኢትካ ብሓጺሩ","Evaluations to complete":"ክዛዘሙ ዘለዎም ገምጋማት","View all":"ኩሉ ርአ"
});

/** Returns a localized string. Missing entries fall back to the English source copy. */
export function translate(language:LanguageCode,key:string):string{
 return UI_TRANSLATIONS[language][key]??UI_TRANSLATIONS.en[key]??key;
}
