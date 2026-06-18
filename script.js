// ==================== 🛠️ 以后换课文，只改这里的数据 ====================
const lessonTitle = "长河落日扁";

const lessonData = [
    // 第 1 段
    ["王维", "Wáng Wéi", "Wang Wei (famous Tang Dynasty poet)", "Wang Wei (penyair terkenal Dinasti Tang)"],
    ["《", "", "", ""],
    ["使至塞上", "Shǐ Zhì Sài Shàng", "Passing by the Frontier (poem title)", "Passing by the Frontier (tajuk puisi)"],
    ["》", "", "", ""],
    ["中", "zhōng", "in / inside", "dalam"],
    ["有", "yǒu", "has / have", "ada"],
    ["两", "liǎng", "two", "dua"],
    ["句", "jù", "sentences / lines of poem", "baris / ayat"],
    ["流传千古", "liú chuán qiān gǔ", "passed down through the ages", "diwarisi turun-temurun"],
    ["的", "de", "of", "yang / punya"],
    ["诗句", "shī jù", "poetic lines", "baris puisi"],
    ["：", "", "", ""],
    ["“", "", "", ""],
    ["大漠", "dà mò", "vast desert", "gurun luas"],
    ["孤烟", "gū yān", "solitary smoke", "asap tunggal"],
    ["直", "zhí", "straight", "lurus"],
    ["，", "", "", ""],
    ["长河", "cháng hé", "long river", "sungai panjang"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["圆", "yuán", "round", "bulat"],
    ["。", "", "", ""],
    ["”", "", "", ""],
    ["诗", "shī", "poem", "puisi"],
    ["中", "zhōng", "in", "dalam"],
    ["运用", "yùn yòng", "use / apply", "menggunakan"],
    ["了", "le", "particle", "sudah"],
    ["精炼", "jīng liàn", "concise / refined", "ringkas dan padat"],
    ["的", "de", "of", "yang"],
    ["笔墨", "bǐ mò", "words / writing style", "penulisan / kata-kata"],
    ["，", "", "", ""],
    ["勾画", "gōu huà", "draw / sketch", "melakar / menggambarkan"],
    ["出", "chū", "out", "keluar"],
    ["大漠", "dà mò", "vast desert", "gurun luas"],
    ["奇特", "qí tè", "peculiar / unique", "unik / pelik"],
    ["壮观", "zhuàng guān", "magnificent / spectacular", "hebat / tersergam indah"],
    ["的", "de", "of", "yang"],
    ["景色", "jǐng sè", "scenery", "pemandangan"],
    ["。", "", "", ""],
    ["圆圆的", "yuán yuán de", "round", "bulat-bulat"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["，", "", "", ""],
    ["在", "zài", "at / on", "di"],
    ["大漠", "dà mò", "vast desert", "gurun luas"],
    ["的", "de", "of", "punya"],
    ["长河", "cháng hé", "long river", "sungai panjang"],
    ["之上", "zhī shàng", "above", "di atas"],
    ["，", "", "", ""],
    ["显得", "xiǎn de", "appear / look", "kelihatan"],
    ["格外", "gé wài", "especially", "amat / sangat"],
    ["醒目", "xǐng mù", "eye-catching", "menarik perhatian"],
    ["。", "", "", ""],
    ["但是", "dàn shì", "but", "tetapi"],
    ["，", "", "", ""],
    ["你", "nǐ", "you", "awak / anda"],
    ["可曾", "kě céng", "ever", "pernahkah"],
    ["想到", "xiǎng dào", "thought of", "terfikir"],
    ["，", "", "", ""],
    ["在", "zài", "in / under", "dalam / di bawah"],
    ["某种", "mǒu zhǒng", "certain / some", "sesuatu / sejenis"],
    ["特定", "tè dìng", "specific", "tertentu"],
    ["的", "de", "of", "yang"],
    ["环境", "huán jìng", "environment / circumstances", "keadaan / persekitaran"],
    ["下", "xià", "under", "di bawah"],
    ["，", "", "", ""],
    ["这", "zhè", "this", "ini"],
    ["红彤彤", "hóng tōng tōng", "bright red", "merah menyala"],
    ["的", "de", "of", "yang"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["，", "", "", ""],
    ["并不一定", "bìng bù yí dìng", "not necessarily at all", "tidak semestinya"],
    ["是", "shì", "is", "adalah"],
    ["圆", "yuán", "round", "bulat"],
    ["的", "de", "particle", "yang"],
    ["。", "", "", ""],

    ["\n", "", "", ""], 

    // 第 2 段
    ["其实", "qí shí", "actually / in fact", "sebenarnya"],
    ["，", "", "", ""],
    ["我们", "wǒ men", "we", "kami / kita"],
    ["在", "zài", "at", "di"],
    ["海边", "hǎi biān", "seaside / beach", "tepi pantai"],
    ["、", "", "", ""],
    ["沙漠", "shā mò", "desert", "gurun"],
    ["中", "zhōng", "in", "dalam"],
    ["或", "huò", "or", "atau"],
    ["平原", "píng yuán", "plain", "dataran rendah"],
    ["上", "shàng", "on", "di atas"],
    ["，", "", "", ""],
    ["在", "zài", "at", "pada masa"],
    ["日出", "rì chū", "sunrise", "matahari terbit"],
    ["或", "huò", "or", "atau"],
    ["日落", "rì luò", "sunset", "matahari terbenam"],
    ["时", "shí", "when / time", "ketika / waktu"],
    ["，", "", "", ""],
    ["有时", "yǒu shí", "sometimes", "kadang-kadang"],
    ["也会", "yě huì", "will also", "juga akan"],
    ["看到", "kàn dào", "see", "melihat"],
    ["扁圆形", "biǎn yuán xíng", "flat oval / oblate shape", "bentuk bujur leper"],
    ["的", "de", "of", "yang"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["。", "", "", ""],
    ["早在", "zǎo zài", "as early as", "seawal / sejak awal"],
    ["两千多", "liǎng qiān duō", "more than two thousand", "lebih daripada dua ribu"],
    ["年前", "nián qián", "years ago", "tahun lalu"],
    ["，", "", "", ""],
    ["中国", "Zhōng guó", "China", "China"],
    ["古代", "gǔ dài", "ancient times", "zaman purba / zaman dahulu"],
    ["的", "de", "of", "punya"],
    ["诗人", "shī rén", "poet", "penyair"],
    ["就曾", "jiù céng", "once", "pernah"],
    ["敏锐", "mǐn ruì", "keen / sharp / perceptive", "tajam / peka"],
    ["地", "de", "adverbial particle", "dengan"],
    ["观察", "guān chá", "observe", "memerhati"],
    ["到", "dào", "verb complement (achieved)", "sampai / dapat"],
    ["这一", "zhè yī", "this", "ini"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["。", "", "", ""],
    ["例如", "lì rú", "for example", "sebagai contoh / misalnya"],
    ["，", "", "", ""],
    ["汉代", "Hàn dài", "Han Dynasty", "Dinasti Han"],
    ["苏武", "Sū Wǔ", "Su Wu (historical figure)", "Su Wu"],
    ["的", "de", "of", "punya"],
    ["“", "", "", ""],
    ["日出", "rì chū", "sunrise", "matahari terbit"],
    ["如", "rú", "like / as", "seperti"],
    ["破镜", "pò jìng", "broken mirror", "cermin retak / pecah"],
    ["”", "", "", ""],
    ["，", "", "", ""],
    ["南朝", "Nán cháo", "Southern Dynasties", "Dinasti Selatan"],
    ["鲍照", "Bào Zhào", "Bao Zhao (poet)", "Bao Zhao"],
    ["的", "de", "of", "punya"],
    ["“", "", "", ""],
    ["平原", "píng yuán", "plain", "dataran rendah"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["扁", "biǎn", "flat", "leper / pipih"],
    ["”", "", "", ""],
    ["等", "děng", "etc / and so on", "dan sebagainya"],
    ["。", "", "", ""],
    ["那么", "nà me", "then / so", "jadi / kalau begitu"],
    ["，", "", "", ""],
    ["为什么", "wèi shén me", "why", "mengapa"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["会", "huì", "will / would", "akan / boleh"],
    ["变", "biàn", "become / change", "menjadi / berubah"],
    ["“", "", "", ""],
    ["扁", "biǎn", "flat", "leper / pipih"],
    ["”", "", "", ""],
    ["呢", "ne", "question particle", "kah"],
    ["？", "", "", ""],

    ["\n", "", "", ""], 

    // 第 3 段
    ["原来", "yuán lái", "turn out to be / originally", "rupanya / asalnya"],
    ["，", "", "", ""],
    ["这", "zhè", "this", "ini"],
    ["主要", "zhǔ yào", "mainly / chiefly", "utamanya / terutamanya"],
    ["是", "shì", "is", "adalah"],
    ["大气", "dà qì", "atmosphere", "atmosfera"],
    ["的", "de", "of", "punya"],
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["。", "", "", ""],
    ["我们", "wǒ men", "we", "kita / kami"],
    ["知道", "zhī dào", "know", "tahu / mengetahui"],
    ["，", "", "", ""],
    ["地球", "dì qiú", "Earth", "Bumi"],
    ["大气层", "dà qì céng", "atmosphere layer", "lapisan atmosfera"],
    ["是", "shì", "is", "adalah"],
    ["不", "bù", "not", "tidak"],
    ["均匀", "jūn yún", "uniform / even", "sekata / seragam"],
    ["的", "de", "adjective particle", "yang"],
    ["，", "", "", ""],
    ["越", "yuè", "the more", "semakin"],
    ["靠近", "kào jìn", "close to / near", "hampir dengan / mendekati"],
    ["地面", "dì miàn", "ground", "permukaan bumi"],
    ["，", "", "", ""],
    ["大气", "dà qì", "atmosphere", "atmosfera"],
    ["的", "de", "of", "punya"],
    ["密度", "mì dù", "density", "ketumpatan"],
    ["越大", "yuè dà", "the bigger / greater", "semakin besar"],
    ["，", "", "", ""],
    ["折射率", "zhé shè lǜ", "refractive index", "indeks biasan"],
    ["也就", "yě jiù", "also", "juga / pun"],
    ["越大", "yuè dà", "the bigger", "semakin besar"],
    ["。", "", "", ""],
    ["当", "dāng", "when", "apabila / ketika"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["落向", "luò xiàng", "fall towards", "terbenam ke arah"],
    ["地平线", "dì píng xiàn", "horizon", "ufuk / garisan ufuk"],
    ["时", "shí", "when", "waktu / masa"],
    ["，", "", "", ""],
    ["太阳光", "tài yáng guāng", "sunlight", "cahaya matahari"],
    ["是", "shì", "is", "adalah"],
    ["通过", "tōng guò", "through / via", "melalui"],
    ["大气层", "dà qì céng", "atmosphere layer", "lapisan atmosfera"],
    ["进入", "jìn rù", "enter", "masuk ke dalam"],
    ["我们的", "wǒ men de", "our", "kita punya"],
    ["眼睛", "yǎn jing", "eyes", "mata"],
    ["的", "de", "particle", ""],
    ["。", "", "", ""],
    ["由于", "yóu yú", "due to / because of", "disebabkan oleh / kerana"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["下部", "xià bù", "lower part", "bahagian bawah"],
    ["光线", "guāng xiàn", "light rays", "sinar cahaya"],
    ["比", "bǐ", "than / compare to", "berbanding / daripada"],
    ["上部", "shàng bù", "upper part", "bahagian atas"],
    ["光线", "guāng xiàn", "light rays", "sinar cahaya"],
    ["所", "suǒ", "particle used before verb", ""],
    ["经过", "jīng guò", "pass through", "melalui"],
    ["的", "de", "of", "yang"],
    ["大气", "dà qì", "atmosphere", "atmosfera"],
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["作用", "zuò yòng", "effect / action", "kesan / tindakan"],
    ["更强", "gèng qiáng", "stronger", "lebih kuat"],
    ["，", "", "", ""],
    ["这", "zhè", "this", "ini"],
    ["就使得", "jiù shǐ de", "makes / causes", "menyebabkan"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["下部", "xià bù", "lower part", "bahagian bawah"],
    ["向上", "xiàng shàng", "upward", "ke atas"],
    ["弯曲", "wān qū", "bend / curve", "bengkok / melengkung"],
    ["得", "de", "degree particle", "dengan"],
    ["比", "bǐ", "than", "berbanding"],
    ["上部", "shàng bù", "upper part", "bahagian atas"],
    ["多一些", "duō yì xiē", "a bit more", "lebih sedikit"],
    ["。", "", "", ""],
    ["结果", "jié guǒ", "as a result / result", "kemudiannya / hasilnya"],
    ["，", "", "", ""],
    ["在", "zài", "in", "dalam"],
    ["我们的", "wǒ men de", "our", "pandangan kita"],
    ["视线", "shì xiàn", "line of sight / vision", "pandangan / penglihatan"],
    ["中", "zhōng", "in", "dalam"],
    ["，", "", "", ""],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["垂直", "chuí zhí", "vertical", "menegak"],
    ["直径", "zhí jìng", "diameter", "diameter"],
    ["缩短", "suō duǎn", "shortened", "memendek / berkurang"],
    ["了", "le", "particle", "sudah"],
    ["，", "", "", ""],
    ["而", "ér", "but / while", "manakala / tetapi"],
    ["水平", "shuǐ píng", "horizontal", "mendatar"],
    ["直径", "zhí jìng", "diameter", "diameter"],
    ["并", "bìng", "emphatic negation particle", "sama sekali"],
    ["没有", "méi yǒu", "did not", "tidak ada / tidak"],
    ["改变", "gǎi biàn", "change", "berubah"],
    ["。", "", "", ""],
    ["因此", "yīn cǐ", "therefore", "oleh itu"],
    ["，", "", "", ""],
    ["圆形", "yuán xíng", "round shape", "bentuk bulat"],
    ["就", "jiù", "then / exactly", "pun / lalu"],
    ["变成", "biàn chéng", "become", "menjadi"],
    ["了", "le", "particle", "sudah"],
    ["扁圆形", "biǎn yuán xíng", "flat oval / oblate", "bujur leper"],
    ["。", "", "", ""],

    ["\n", "", "", ""], 

    // 第 4 段
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["不仅", "bù jǐn", "not only", "bukan sahaja"],
    ["会", "huì", "will", "akan"],
    ["改变", "gǎi biàn", "change", "mengubah"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["形状", "xíng zhuàng", "shape", "bentuk"],
    ["，", "", "", ""],
    ["还会", "hái huì", "will also", "malah akan / juga akan"],
    ["改变", "gǎi biàn", "change", "mengubah"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["位置", "wèi zhí", "position", "kedudukan"],
    ["。", "", "", ""],
    ["当", "dāng", "when", "apabila"],
    ["太阳", "tài yáng", "sun", "matahari"],
    ["的", "de", "of", "punya"],
    ["下边缘", "xià biān yuán", "lower edge", "tepi bawah / pinggir bawah"],
    ["刚", "gāng", "just", "baru sahaja"],
    ["触及", "chù jí", "touch / reach", "menyentuh"],
    ["地平线", "dì píng xiàn", "horizon", "garisan ufuk / ufuk"],
    ["时", "shí", "when", "waktu / masa"],
    ["，", "", "", ""],
    ["由于", "yóu yú", "due to", "disebabkan oleh"],
    ["大气", "dà qì", "atmosphere", "atmosfera"],
    ["的", "de", "of", "punya"],
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["，", "", "", ""],
    ["实际上", "shí jì shang", "actually / in reality", "pada hakikatnya / sebenarnya"],
    ["它", "tā", "it", "ia"],
    ["已经", "yǐ jīng", "already", "sudah"],
    ["在", "zài", "at / in", "di"],
    ["地平线", "dì píng xiàn", "horizon", "garisan ufuk / ufuk"],
    ["之下", "zhī xià", "below", "bawah / di bawah"],
    ["了", "le", "particle", "sudah"],
    ["。", "", "", ""],
    ["也就是说", "yě jiù shì shuō", "that is to say / in other words", "ini bermakna / dengan kata lain"],
    ["，", "", "", ""],
    ["我们", "wǒ men", "we", "kita"],
    ["所", "suǒ", "particle used before verb", ""],
    ["看到", "kàn dào", "see", "melihat"],
    ["的", "de", "particle", "yang"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["，", "", "", ""],
    ["其实", "qí shí", "actually / in fact", "sebenarnya"],
    ["只是", "zhǐ shì", "only / just", "hanyalah"],
    ["它", "tā", "it", "ia punya"],
    ["虚像", "xū xiàng", "virtual image", "imej maya"],
    ["。", "", "", ""],
    ["这种", "zhè zhǒng", "this kind of", "fenomena jenis ini"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["在", "zài", "in", "di"],
    ["气温", "qì wēn", "air temperature", "suhu udara"],
    ["差异", "chā yì", "difference", "perbezaan / jurang"],
    ["极大", "jí dà", "extremely large", "sangat besar"],
    ["的", "de", "of", "yang"],
    ["地方", "dì fang", "places", "tempat"],
    ["，", "", "", ""],
    ["如", "rú", "such as", "seperti"],
    ["大沙漠", "dà shā mò", "vast desert", "gurun besar"],
    ["中", "zhōng", "in", "dalam"],
    ["更为", "gèng wéi", "even more", "lebih lagi"],
    ["明显", "míng xiǎn", "obvious / clear", "ketara / jelas"],
    ["。", "", "", ""],

    ["\n", "", "", ""], 

    // 第 5 段
    ["其实", "qí shí", "actually / in fact", "sebenarnya"],
    ["，", "", "", ""],
    ["这种", "zhè zhǒng", "this kind of", "jenis ini"],
    ["大气", "dà qì", "atmosphere", "atmosfera"],
    ["的", "de", "of", "punya"],
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["在", "zài", "in", "dalam"],
    ["日常生活", "rì cháng shēng huó", "daily life", "kehidupan harian"],
    ["中", "zhōng", "in", "dalam"],
    ["也", "yě", "also", "juga"],
    ["随处可见", "suí chù kě jiàn", "can be seen everywhere", "boleh dilihat di mana-mana"],
    ["。", "", "", ""],
    ["当", "dāng", "when", "apabila"],
    ["你", "nǐ", "you", "awak / anda"],
    ["把", "bǎ", "disposal particle", ""],
    ["一支", "yì zhī", "a (measure word for stick-like things)", "sebatang"],
    ["筷子", "kuài zi", "chopstick", "chopstick / sepit"],
    ["斜插进", "xié chā jìn", "insert obliquely into", "mencucuk condong ke dalam"],
    ["装满", "zhuāng mǎn", "filled with", "diisi penuh dengan"],
    ["水", "shuǐ", "water", "air"],
    ["的", "de", "of", "punya"],
    ["杯子", "bēi zi", "cup / glass", "cawan / gelas"],
    ["里", "lǐ", "inside", "dalam"],
    ["时", "shí", "when", "ketika / waktu"],
    ["，", "", "", ""],
    ["你", "nǐ", "you", "awak"],
    ["会", "huì", "will", "akan"],
    ["发现", "fā xiàn", "find / discover", "mendapati / perasan"],
    ["筷子", "kuài zi", "chopstick", "chopstick"],
    ["好像", "hǎo xiàng", "seem / as if", "kelihatan seperti / seolah-olah"],
    ["折断", "zhé duàn", "broken / snapped", "patah"],
    ["了", "le", "particle", "sudah"],
    ["。", "", "", ""],
    ["当", "dāng", "when", "apabila"],
    ["你", "nǐ", "you", "awak"],
    ["站在", "zhàn zài", "standing at / on", "berdiri di tepi"],
    ["清澈", "qīng chè", "clear / limpid", "jernih"],
    ["的", "de", "of", "yang"],
    ["池塘", "chí táng", "pond", "kolam"],
    ["边", "biān", "side / edge", "tepi"],
    ["向", "xiàng", "towards", "ke arah"],
    ["水里", "shuǐ lǐ", "into the water", "dalam air"],
    ["看", "kàn", "look", "melihat"],
    ["时", "shí", "when", "ketika / waktu"],
    ["，", "", "", ""],
    ["你", "nǐ", "you", "awak"],
    ["会", "huì", "will", "akan"],
    ["发现", "fā xiàn", "find / notice", "mendapati"],
    ["池底", "chí dǐ", "bottom of the pond", "dasar kolam"],
    ["好像", "hǎo xiàng", "seem / look like", "kelihatan seolah-olah"],
    ["变浅", "biàn qiǎn", "become shallower", "menjadi cetek"],
    ["了", "le", "particle", "sudah"],
    ["。", "", "", ""],
    ["这些", "zhè xiē", "these", "semua ini"],
    ["都是", "dōu shì", "are all", "adalah kerana / semuanya"],
    ["因为", "yīn wèi", "because", "kerana / disebabkan"],
    ["光", "guāng", "light", "cahaya"],
    ["在", "zài", "while / at", "ketika / di"],
    ["通过", "tōng guò", "passing through", "melalui"],
    ["密度", "mì dù", "density", "ketumpatan"],
    ["不同", "bù tóng", "different", "berbeza"],
    ["的", "de", "of", "yang"],
    ["介质", "jiè zhì", "medium", "medium"],
    ["时", "shí", "when", "waktu / masa"],
    ["，", "", "", ""],
    ["发生", "fā shēng", "happen / occur", "berlaku"],
    ["了", "le", "particle", "sudah"],
    ["折射", "zhé shè", "refraction", "pembiasan"],
    ["。", "", "", ""],

    ["\n", "", "", ""], 

    // 第 6 段
    ["由此可见", "yóu cǐ kě jiàn", "thus it can be seen", "oleh itu dapat dilihat"],
    ["，", "", "", ""],
    ["大自然", "dà zì rán", "nature", "alam semula jadi"],
    ["中", "zhōng", "in", "dalam"],
    ["处处", "chù chù", "everywhere", "di mana-mana jua"],
    ["充满了", "chōng mǎn le", "full of", "penuh dengan"],
    ["科学", "kē xué", "science", "sains / saintifik"],
    ["的", "de", "of", "yang"],
    ["奥秘", "ào mì", "mystery / secret", "misteri / rahsia"],
    ["。", "", "", ""],
    ["只有", "zhǐ yǒu", "only if / only", "hanya dengan"],
    ["通过", "tōng guò", "through / by means of", "melalui"],
    ["细致", "xì zhì", "detailed / meticulous", "teliti / terperinci"],
    ["的", "de", "of", "yang"],
    ["观察", "guān chá", "observation", "pemerhatian"],
    ["和", "hé", "and", "dan"],
    ["科学", "kē xué", "science / scientific", "sains / saintifik"],
    ["的", "de", "of", "yang"],
    ["分析", "fēn xī", "analysis", "analisis"],
    ["，", "", "", ""],
    ["我们", "wǒ men", "we", "kita"],
    ["才能", "cái néng", "can then", "baru dapat"],
    ["揭开", "jiē kāi", "unveil / uncover", "membuka / mendedahkan"],
    ["大自然", "dà zì rán", "nature", "alam semula jadi"],
    ["的", "de", "of", "punya"],
    ["神秘", "shén mì", "mysterious", "misteri"],
    ["面纱", "miàn shā", "veil", "tirai / selubung"],
    ["。", "", "", ""],
    ["王维", "Wáng Wéi", "Wang Wei", "Wang Wei"],
    ["的", "de", "of", "punya"],
    ["“", "", "", ""],
    ["长河", "cháng hé", "long river", "sungai panjang"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["圆", "yuán", "round", "bulat"],
    ["”", "", "", ""],
    ["，", "", "", ""],
    ["固然", "gù rán", "admittedly / no doubt", "memang / sememangnya"],
    ["是", "shì", "is", "adalah"],
    ["艺术", "yì shù", "art / artistic", "seni / artistik"],
    ["上", "shàng", "in / on", "secara / dari segi"],
    ["的", "de", "of", "yang"],
    ["升华", "shēng huá", "sublimation / elevation", "sublimasi / peningkatan"],
    ["和", "hé", "and", "dan"],
    ["美化", "měi huà", "beautification", "pengindahan / pengelokan"],
    ["，", "", "", ""],
    ["但", "dàn", "dàn", "tetapi"],
    ["苏武", "Sū Wǔ", "Su Wu", "Su Wu"],
    ["的", "de", "of", "punya"],
    ["“", "", "", ""],
    ["日出", "rì chū", "sunrise", "matahari terbit"],
    ["如", "rú", "like", "seperti"],
    ["破镜", "pò jìng", "broken mirror", "cermin retak"],
    ["”", "", "", ""],
    ["和", "hé", "and", "dan"],
    ["鲍照", "Bào Zhào", "Bao Zhao", "Bao Zhao"],
    ["的", "de", "of", "punya"],
    ["“", "", "", ""],
    ["平原", "píng yuán", "plain", "dataran rendah"],
    ["落日", "luò rì", "setting sun", "matahari terbenam"],
    ["扁", "biǎn", "flat", "leper / pipih"],
    ["”", "", "", ""],
    ["，", "", "", ""],
    ["却", "què", "however / yet", "namun / sebaliknya"],
    ["更", "gèng", "more", "lebih"],
    ["真实", "zhēn shí", "truly / realistically", "benar / realistik"],
    ["地", "de", "adverbial particle", "dengan"],
    ["反映", "fǎn yìng", "reflect", "mencerminkan"],
    ["了", "le", "particle", "sudah"],
    ["自然界", "zì rán jiè", "nature / natural world", "alam semula jadi"],
    ["中", "zhōng", "in", "dalam"],
    ["的", "de", "of", "yang"],
    ["光学", "guāng xué", "optics", "optik"],
    ["现象", "xiàn xiàng", "phenomenon", "fenomena"],
    ["。", "", "", ""]
];
// =====================================================================

// ==================== ⚙️ 下面是运行逻辑代码 ============================
let currentIdx = -1; 
let saved = JSON.parse(localStorage.getItem('saved_104')) || [];
let quizData = [];
let currentQuizIdx = 0;
let isLocked = false;

window.onload = function() {
    // 动态渲染标题
    document.getElementById('articleTitle').innerText = lessonTitle;
    document.title = lessonTitle;

    if (typeof lessonData !== 'undefined') { 
        render(); 
        renderNB(); 
    }
    document.body.appendChild(document.getElementById('buddyPopover'));
    document.addEventListener('click', () => { 
        document.getElementById('buddyPopover').style.display = 'none'; 
        document.querySelectorAll('ruby').forEach(r => r.classList.remove('is-active'));
    });
};

function render() {
    const cnt = document.getElementById('content'); 
    cnt.innerHTML = "";
    let pNum = 1; 
    let p = createP(pNum);
    lessonData.forEach((d, i) => {
        if (d[0] === "\n") { 
            if(p.childNodes.length > 1) { 
                cnt.appendChild(p); 
                pNum++; 
            } 
            p = createP(pNum); 
        }
        else if (d[1] === "") { 
            let s = document.createElement("span"); 
            s.innerText = d[0]; 
            p.appendChild(s); 
        }
        else {
            let r = document.createElement("ruby"); 
            r.setAttribute("data-word-index", i);
            r.onclick = (e) => { 
                e.stopPropagation(); 
                document.querySelectorAll('ruby').forEach(x=>x.classList.remove('is-active')); 
                r.classList.add('is-active'); 
                openPop(e.currentTarget, i); 
            };
            r.innerHTML = `${d[0]}<rt>${d[1]}</rt>`; 
            p.appendChild(r);
        }
    });
    cnt.appendChild(p);
}

function createP(n) { 
    let p = document.createElement("p"); 
    let s = document.createElement("span"); 
    s.className = "p-index"; 
    s.innerText = "第" + n + "段"; 
    p.appendChild(s); 
    return p; 
}

function openPop(el, i) {
    currentIdx = i; 
    const d = lessonData[i];
    document.getElementById('popWord').innerText = d[0];
    document.getElementById('popPinyin').innerText = `[${d[1]}]`;
    document.getElementById('popEn').innerText = d[2];
    document.getElementById('popBm').innerText = d[3];
    
    const pop = document.getElementById('buddyPopover');
    const arrow = document.getElementById('popArrow');
    pop.style.display = 'block';
    
    const rect = el.getBoundingClientRect();
    const popRect = pop.getBoundingClientRect();
    let top = rect.top - popRect.height - 15;
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    const margin = 15;
    
    if (left + popRect.width > window.innerWidth - margin) left = window.innerWidth - popRect.width - margin;
    if (left < margin) left = margin;
    
    arrow.style.left = `${(rect.left + rect.width / 2) - left}px`;
    pop.style.top = `${top}px`;
    pop.style.left = `${left}px`;
}

function saveToNotebook(e) {
    e.stopPropagation();
    if (!saved.includes(currentIdx)) { 
        saved.push(currentIdx); 
        localStorage.setItem('saved_104', JSON.stringify(saved)); 
        renderNB(); 
    }
    const btn = e.target; 
    btn.innerText = "✓ 已存";
    setTimeout(() => btn.innerText = "Copy 📋", 1000);
}

function renderNB() {
    const list = document.getElementById('notebookList');
    if (saved.length === 0) { 
        list.innerHTML = "<span style='color:#999; font-size:13px;'>点击词语 Copy 记录生词</span>"; 
    } 
    else {
        list.innerHTML = "";
        saved.forEach(idx => {
            const item = lessonData[idx]; 
            if(!item) return;
            const div = document.createElement("div"); 
            div.className = "notebook-item"; 
            div.innerText = item[0];
            div.onclick = (e) => {
                e.stopPropagation();
                const target = document.querySelector(`ruby[data-word-index="${idx}"]`);
                if(target) {
                    target.scrollIntoView({behavior: "smooth", block: "center"});
                    document.querySelectorAll('ruby').forEach(r => r.classList.remove('is-active'));
                    setTimeout(() => { 
                        target.classList.add('is-active'); 
                        openPop(target, idx); 
                    }, 500);
                }
            };
            list.appendChild(div);
        });
    }
}

function forceClearNotebook() { 
    localStorage.removeItem('saved_104'); 
    saved = []; 
    renderNB(); 
    document.getElementById('gameContainer').style.display = 'none'; 
    document.getElementById('gameToggleBtn').innerText = "🎯 生词测试"; 
}

function toggleGameMode() {
    const container = document.getElementById('gameContainer');
    const btn = document.getElementById('gameToggleBtn');
    if (container.style.display === 'block') { 
        container.style.display = 'none'; 
        btn.innerText = "🎯 生词测试"; 
    }
    else {
        if (saved.length < 1) { 
            alert("生词本是空的哦！"); 
            return; 
        }
        container.style.display = 'block'; 
        btn.innerText = "📖 返回课文";
        startQuizGame();
        container.scrollIntoView({behavior: "smooth"});
    }
}

function startQuizGame() {
    quizData = [...saved].sort(() => Math.random() - 0.5);
    currentQuizIdx = 0;
    loadQuestion();
}

function loadQuestion() {
    isLocked = false;
    const targetIdx = quizData[currentQuizIdx];
    const data = lessonData[targetIdx];
    
    document.getElementById('quizProgress').innerText = `第 ${currentQuizIdx + 1} / ${quizData.length} 题`;
    document.getElementById('quizQuestion').innerText = data[0];
    document.getElementById('quizPinyin').innerText = `[${data[1]}]`;
    
    const correctStr = (data[2].trim() + "；" + data[3].trim());
    let options = [correctStr];
    
    let others = lessonData
        .filter(d => d[1] !== "" && d[0] !== data[0])
        .map(d => (d[2].trim() + "；" + d[3].trim()));
    
    others = [...new Set(others)].filter(s => s !== correctStr).sort(() => Math.random() - 0.5);
    
    for(let i=0; i<3; i++) { 
        if(others[i]) options.push(others[i]); 
    }
    options.sort(() => Math.random() - 0.5);

    const optDiv = document.getElementById('quizOptions');
    optDiv.innerHTML = "";
    options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'quiz-opt-btn';
        b.innerText = opt;
        b.onclick = () => {
            if(isLocked || b.classList.contains('wrong')) return;
            if(opt.trim() === correctStr.trim()) {
                isLocked = true;
                b.classList.add('correct');
                setTimeout(() => {
                    currentQuizIdx++;
                    if(currentQuizIdx < quizData.length) loadQuestion();
                    else { 
                        alert("🎉 完成测试！你真棒！"); 
                        toggleGameMode(); 
                    }
                }, 800);
            } else {
                b.classList.add('wrong');
            }
        };
        optDiv.appendChild(b);
    });
}

function togglePinyin() { 
    document.getElementById('content').classList.toggle('hide-pinyin'); 
    document.getElementById('pyToggle').classList.toggle('active'); 
}

function toggleTheme() { 
    document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme')==='dark'?'':'dark'); 
}
