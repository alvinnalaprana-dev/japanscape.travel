/* Japanscape — shared chrome (nav, menu, footer), bilingual copy, interactions.
   All copy lives in T (id/en). Pages mark text slots with data-i="key" and lists with data-list="key". */
const WA_NUMBER = '6282123565441';
const PAGES = [['about','about.html'],['journey','journey.html'],['seasons','seasons.html'],['contact','contact.html']];

const T = {
id:{
 /* chrome */
 nav_about:'About',nav_journey:'Journey',nav_seasons:'Seasons',nav_contact:'Contact',navcta:'Rancang Perjalanan',
 waMsg:'Halo Japanscape, saya ingin merencanakan perjalanan ke Jepang.',
 footTag:'Your Private Escape to Japan',footNav:'Navigasi',footContact:'Kontak',footSince:'Berdiri sejak 2024',
 /* shared blocks */
 ctaEyebrow:'Mulai Merencanakan',ctaTitle:'Ceritakan Jepang <em>yang ingin Anda jelajahi.</em>',
 ctaSub:'Kirimkan rencana tanggal, jumlah peserta, dan minat perjalanan Anda. Kami akan kembali dengan rancangan itinerary pertama.',
 ctaWa:'Chat via WhatsApp',ctaForm:'Isi Formulir Perjalanan',
 priceEyebrow:'Investasi Perjalanan',priceFrom:'Mulai dari',
 term1:'untuk 5 Hari 4 Malam',tnc:'*Syarat & ketentuan berlaku',term2:'Minimum 4 Pax',term3:'Hotel Standar',term4:'Tidak Termasuk Tiket Pesawat',
 priceVariesLong:'Harga disesuaikan dengan itinerary — rute, hotel, dan pengalaman yang Anda pilih.',
 inclTitle:'Sudah Termasuk',
 inclList:[['Mobil privat & driver','Setiap hari'],['Pemandu perjalanan','Setiap hari'],['Tiket masuk atraksi','Sesuai itinerary']],
 inclExtra:'Layanan tambahan: hotel premium, kendaraan premium, tiket pesawat, pengurusan JR Pass, panduan visa, dan dukungan penerjemah.',
 priceVaries:'Harga disesuaikan dengan itinerary',tripCta:'Rancang perjalanan serupa',seeDetail:'Lihat detail',

 /* PRIVACY + 404 */
 footPrivacy:'Kebijakan Privasi',
 pvEyebrow:'Kebijakan Privasi',pvTitle:'Privasi Anda <em>di Japanscape.</em>',pvUpdated:'Terakhir diperbarui: 5 Oktober 2026',
 pvBody:'<h3>Siapa kami</h3><p>Website ini dikelola oleh Japanscape.travel, penyedia perjalanan privat ke Jepang. Untuk pertanyaan seputar privasi, hubungi kami melalui WhatsApp +62 821-2356-5441 atau email zefanyadriel@gmail.com.</p>'+
  '<h3>Data yang kami terima</h3><p>Website ini tidak memiliki akun, tidak menyimpan formulir di server, dan tidak memasang cookie maupun alat analitik. Formulir di halaman Contact hanya menyusun pesan di perangkat Anda lalu membukanya di WhatsApp — pesan baru terkirim jika Anda sendiri menekan kirim. Data yang Anda kirimkan lewat WhatsApp atau email (misalnya nama, jumlah peserta, tanggal, dan preferensi perjalanan) kami terima langsung.</p>'+
  '<h3>Untuk apa data digunakan</h3><p>Data tersebut hanya kami gunakan untuk membalas pertanyaan Anda, merancang itinerary, dan mengurus pemesanan perjalanan. Kami tidak menjual data Anda dan tidak menggunakannya untuk iklan.</p>'+
  '<h3>Dengan siapa data dibagikan</h3><p>Bila Anda memesan perjalanan, detail yang diperlukan dapat kami teruskan kepada mitra yang menjalankan perjalanan Anda — misalnya hotel, penyedia transportasi, pemandu, dan perusahaan tur mitra kami di Jepang. Pesan WhatsApp diproses oleh WhatsApp (Meta) sesuai kebijakan privasinya sendiri.</p>'+
  '<h3>Data teknis</h3><p>Website ini di-hosting oleh Netlify, yang mencatat data teknis standar (seperti alamat IP dan jenis browser) untuk keamanan dan operasional server. Pilihan bahasa Anda (ID/EN) disimpan di browser Anda sendiri dan tidak dikirim kepada kami.</p>'+
  '<h3>Hak Anda</h3><p>Sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda yang ada pada kami. Hubungi kami melalui kontak di atas.</p>'+
  '<h3>Perubahan</h3><p>Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terakhir tercantum di bagian atas halaman ini.</p>',
 nfEyebrow:'404',nfTitle:'Halaman ini <em>tidak ditemukan.</em>',nfSub:'Mungkin tautannya sudah berubah. Mari kembali ke beranda, atau langsung ceritakan rencana perjalanan Anda.',nfHome:'Kembali ke Beranda',
 /* HOME */
 heroEyebrow:'Perjalanan Privat ke Jepang · Tailor-made',
 heroTitle:'Jepang, dirancang <em>khusus untuk Anda.</em>',
 heroSub:'Setiap itinerary dikurasi dari pengalaman langsung menjelajahi Jepang, kemudian disesuaikan dengan ritme, minat, dan kenyamanan rombongan Anda.',
 ctaPrimary:'Rancang Perjalanan',ctaSecondary:'Lihat Contoh Itinerary',heroMeta:'Lake Saiko · Yamanashi',
 introEyebrow:'Tentang Japanscape',
 introLead:'Bukan sekadar tur, melainkan cara menikmati Jepang yang tenang, autentik, dan sepenuhnya personal.',
 introBody:'Japanscape menghadirkan perjalanan privat ke Jepang, dirancang khusus untuk wisatawan Indonesia. Setiap destinasi dikurasi langsung dari pengalaman Zefanya Adriel, founder kami, menjelajahi Jepang — dari tempat-tempat ikonik hingga sudut yang jarang dikunjungi.',
 introSig:'Dikurasi oleh Zefanya Adriel, Founder',introLink:'Mengenal Japanscape',
 procEyebrow:'Cara Kami Bekerja',procTitle:'Dari konsultasi pertama <em>hingga keberangkatan.</em>',
 procIntro:'Tidak ada paket jadi. Setiap perjalanan dimulai dari Anda — tanggal, minat, dan cara Anda ingin menikmati Jepang.',
 steps:[['Konsultasi','Ceritakan rencana tanggal, jumlah peserta, dan pengalaman yang Anda harapkan di Jepang.'],['Rancangan Itinerary','Kami menyusun rute hari demi hari, lengkap dengan hotel, transportasi, dan tiket.'],['Penyempurnaan','Itinerary dapat diubah, ditambah, atau diperlambat hingga sesuai dengan keinginan Anda.'],['Keberangkatan','Mobil privat, driver, dan pemandu mendampingi Anda sejak tiba di Jepang.']],
 tripEyebrow:'Contoh Itinerary',tripTitle:'Perjalanan yang telah <em>kami rancang.</em>',
 tripIntro:'Dua contoh dari perjalanan klien sebelumnya, sebagai gambaran dan bukan paket. Rute perjalanan Anda akan disusun secara khusus.',
 t1tag:'Musim Panas',t1days:'10 Hari',t1style:'Private · Full Service',t1title:'Hokkaido hingga Kansai',t1route:'Sapporo · Furano · Tokyo · Kyoto · Nara · Osaka',
 t1list:['Ladang bunga Furano & Biei, Blue Pond','Mount Moiwa Ropeway saat senja','Tokyo DisneySea & Harry Potter Studio Tour','Sagano Romantic Train & teamLab Kyoto','Kiyomizu-dera, Gion, dan Nara Park'],
 t2tag:'Musim Dingin',t2days:'5 Hari',t2style:'Private · Alphard',t2title:'Tokyo di Musim Dingin',t2route:'Tokyo · Nikko · Fuji-Q · Mitaka',
 t2list:['Edo Wonderland & Kegon Falls, Nikko','Satu hari penuh di Fuji-Q Highland','Ghibli Museum, Mitaka','Harajuku, Omotesando & Shibuya Sky'],
 tripNote:'Itinerary di atas berasal dari perjalanan klien kami dan ditampilkan tanpa nama klien.',
 seaEyebrow:'Jepang Sepanjang Tahun',seaTitle:'Setiap musim, <em>Jepang yang berbeda.</em>',
 seaIntro:'Kami menyesuaikan rute dengan musim kedatangan Anda, agar setiap hari dinikmati pada waktu terbaiknya.',seaLink:'Panduan musim selengkapnya',
 s1l:'Maret – Mei',s1t:'Musim Semi',s1p:'Sakura di sepanjang kanal dan taman kuil.',
 s2l:'Juni – Agustus',s2t:'Musim Panas',s2p:'Pegunungan yang hijau dan ladang bunga Hokkaido.',
 s3l:'September – November · Favorit Founder',s3t:'Musim Gugur',s3p:'Cuaca yang nyaman, langit cerah, alam yang paling indah, dan wisatawan yang tidak terlalu ramai.',
 s4l:'Desember – Februari',s4t:'Musim Dingin',s4p:'Salju, pegunungan putih, dan kota yang berkilau.',
 ownerEyebrow:'Catatan dari Founder',
 ownerQuote:'Saya sering bertemu wisatawan yang tersesat di stasiun. Dari sanalah Japanscape lahir — bukan sekadar pemandu, melainkan pendamping perjalanan yang membantu Anda sejenak lepas dari rutinitas di Jepang.',
 ownerSig:'Zefanya Adriel, Founder',f1:'Tinggal & menjelajahi Jepang sejak kuliah',f2:'Japanscape mulai beroperasi',f3:'Tempatnya membangun karier',

 /* JOURNEY */
 jEyebrow:'Journey',jTitle:'Itinerary yang dirancang, <em>bukan dipilih dari katalog.</em>',
 jSub:'Setiap perjalanan Japanscape disusun dari awal. Dua contoh di bawah ini merupakan perjalanan yang telah kami rancang dan dapat menjadi inspirasi bagi Anda.',
 jIntroEyebrow:'Tailor-made',jIntroTitle:'Rute Anda, <em>ritme Anda.</em>',
 jIntroBody:'Ceritakan siapa saja yang ikut, kapan Anda tiba, dan pengalaman yang Anda harapkan. Kami merancang rute hari demi hari — lengkap dengan hotel, transportasi privat, pemandu, dan tiket — kemudian menyempurnakannya bersama Anda hingga sesuai.',
 ex1Eyebrow:'Contoh 01 · Musim Panas',ex1Title:'Hokkaido hingga Kansai',ex1Meta:['10 Hari','4 Pax','Private · Full Service'],
 ex1Days:[['Hari 1','Tiba di Sapporo','Odori Park, Sapporo TV Tower, Clock Tower, berbelanja di Tanukikoji, dan makan malam di Susukino.'],
  ['Hari 2','Furano & Biei','Sarapan hidangan laut di Nijo Market, Farm Tomita, Shikisai no Oka, Blue Pond, dan Shirahige Waterfall.'],
  ['Hari 3','Sisi Lain Sapporo','Hill of the Buddha, Shiroi Koibito Park, kemudian Mount Moiwa Ropeway saat matahari terbenam.'],
  ['Hari 4','Sapporo → Tokyo','Penerbangan domestik ke Tokyo, Akihabara, kemudian sore hingga malam di Ginza.'],
  ['Hari 5','Tokyo DisneySea','Satu hari penuh di DisneySea, termasuk Fantasy Springs.'],
  ['Hari 6','Harry Potter & Shibuya','Warner Bros. Studio Tour Tokyo – The Making of Harry Potter, kemudian Shibuya.'],
  ['Hari 7','Tokyo → Kyoto','Shinkansen menuju Kyoto, Kiyomizu-dera, Yasaka Shrine, dan berjalan kaki di Gion.'],
  ['Hari 8','Arashiyama & Kyoto','Sagano Romantic Train, Nishiki Market, dan teamLab Biovortex Kyoto.'],
  ['Hari 9','Nara → Osaka','Nara Park, kemudian Dotonbori dan Shinsaibashi untuk berbelanja.'],
  ['Hari 10','Kepulangan','Transfer menuju Kansai International Airport.']],
 ex1Chips:['Hotel bintang 4–5','Penerbangan domestik','Shinkansen','Tiket atraksi','Mobil privat & pemandu'],
 ex2Eyebrow:'Contoh 02 · Musim Dingin',ex2Title:'Tokyo di Musim Dingin',ex2Meta:['5 Hari','3 Pax','Private · Alphard'],
 ex2Days:[['Hari 1','Tiba di Tokyo','Penjemputan di Bandara Haneda, check-in hotel di Shinjuku, dan malam hari bebas di Shinjuku.'],
  ['Hari 2','Nikko','Edo Wonderland — kota bernuansa zaman Edo — dan Kegon Falls.'],
  ['Hari 3','Fuji-Q Highland','Satu hari penuh di taman hiburan di kaki Gunung Fuji.'],
  ['Hari 4','Ghibli, Harajuku & Shibuya','Ghibli Museum di Mitaka, Takeshita Street, Omotesando, kemudian senja di Shibuya Sky.'],
  ['Hari 5','Kepulangan','Transfer menuju Bandara Haneda.']],
 ex2Chips:['Hotel premium di Shinjuku','Alphard privat','Driver & pemandu','Tiket atraksi'],
 exNote:'Contoh ditampilkan tanpa nama klien. Jadwal, hari operasional atraksi, dan harga selalu disesuaikan pada tahap perencanaan.',
 destEyebrow:'Inspirasi Destinasi',destTitle:'Dari yang ikonik <em>hingga yang tersembunyi.</em>',
 destIntro:'Beberapa destinasi yang sering kami rancang, dan dapat dikombinasikan sesuai keinginan Anda.',
 d1t:'Tokyo',d1p:'Dinamika kota, kuliner, dan sudut-sudut tenang di antara gedung tinggi.',
 d2t:'Kyoto',d2p:'Kuil, gang kayu bersejarah, dan ritme yang lebih tenang.',
 d3t:'Fuji & Yamanashi',d3p:'Danau, desa kecil, dan pemandangan gunung paling terkenal di Jepang.',
 d4t:'Hidden Gems',d4p:'Tempat-tempat yang jarang tercantum dalam daftar wisata — keahlian founder kami.',

 /* SEASONS */
 sEyebrow:'Seasons',tb1:'Semi',tb2:'Panas',tb3:'Gugur',tb4:'Dingin',sTitle:'Jepang, <em>musim demi musim.</em>',
 sSub:'Musim menentukan banyak hal — mulai dari rute, pakaian, hingga tingkat keramaian. Berikut panduan singkat kami untuk memilih waktu yang tepat.',
 spMonths:'Maret – Mei',spTitle:'Musim <em>Semi</em>',
 spBody:'Musim sakura. Di Tokyo dan Kyoto, sakura umumnya mekar sekitar akhir Maret hingga awal April, kemudian bergerak ke utara — di Hokkaido, sakura umumnya baru mekar sekitar awal Mei.',
 spTips:'<b>Catatan:</b> Golden Week (akhir April – awal Mei) merupakan periode libur panjang di Jepang, sehingga suasana lebih ramai dan tarif hotel meningkat. Kami menyarankan pemesanan jauh hari.',
 suMonths:'Juni – Agustus',suTitle:'Musim <em>Panas</em>',
 suBody:'Alam yang hijau, festival musim panas, dan pertunjukan kembang api. Juli merupakan musim ladang lavender di Furano, Hokkaido, yang juga berhawa lebih sejuk dibandingkan Tokyo atau Kyoto.',
 suTips:'<b>Catatan:</b> Juni merupakan musim hujan di sebagian besar wilayah Jepang (Hokkaido umumnya tidak terlalu terdampak). Tokyo dan Kyoto dapat sangat panas dan lembap pada Juli–Agustus.',
 auMonths:'September – November',auTitle:'Musim <em>Gugur</em>',auPick:'Favorit Founder',
 auBody:'Daun momiji dan ginkgo berubah warna menjadi merah keemasan — dimulai dari Hokkaido sekitar Oktober, kemudian bergerak ke Tokyo dan Kyoto yang umumnya mencapai puncaknya pada pertengahan hingga akhir November.',
 auQuote:'“Saya sangat menyukai musim gugur — cuacanya nyaman, langit sering cerah, alamnya sangat indah, dan wisatawan mancanegara tidak terlalu banyak.” — Zefanya Adriel',
 auTips:'<b>Catatan:</b> awal September masih berpotensi membawa musim topan. Untuk menikmati warna daun terbaik di Kyoto, rencanakan perjalanan jauh hari.',
 wiMonths:'Desember – Februari',wiTitle:'Musim <em>Dingin</em>',
 wiBody:'Salju di Hokkaido dan pegunungan, ski, onsen, serta iluminasi kota. Sapporo Snow Festival umumnya berlangsung pada awal Februari.',
 wiTips:'<b>Catatan:</b> sekitar akhir Desember hingga awal Januari, banyak museum dan atraksi tutup selama libur tahun baru. Kami menyusun rute dengan mempertimbangkan hal tersebut.',
 calEyebrow:'Sekilas Sepanjang Tahun',calTitle:'Kapan waktu terbaik <em>bagi Anda?</em>',
 calSub:'Tidak ada musim yang keliru — yang ada hanyalah musim yang sesuai dengan apa yang ingin Anda saksikan.',
 months:['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
 calFine:'Waktu mekarnya bunga dan perubahan warna daun berbeda setiap tahun. Kami memantau prakiraan terbaru saat merancang perjalanan Anda.',

 /* ABOUT */
 aEyebrow:'About',aTitle:'Pendamping perjalanan Anda <em>di Jepang.</em>',
 aSub:'Japanscape lahir dari empat tahun pengalaman menjelajahi Jepang, serta keinginan sederhana: membantu orang lain menikmati Jepang tanpa tersesat.',
 a1Eyebrow:'Awal Perjalanan',a1Lead:'Zefanya Adriel pertama kali datang ke Jepang pada tahun 2022 untuk menempuh pendidikan, sembari menjelajahi berbagai penjuru negeri.',
 a1Body1:'Baginya, Jepang selalu punya tempat istimewa karena selalu ada tempat baru untuk dikunjungi. Tokyo menjadi tempatnya membangun karier, sementara Kyoto menyimpan banyak kenangan.',
 a1Body2:'Selama bertahun-tahun di Jepang, ia sering bertemu wisatawan — baik dari Indonesia maupun negara lain — yang tersesat di stasiun atau kesulitan menemukan arah.',
 a2Eyebrow:'Mengapa Japanscape',a2Lead:'Bukan sekadar pemandu wisata, melainkan pendamping perjalanan yang membantu Anda <em>sejenak lepas dari rutinitas</em> di Jepang.',
 a2Body:'Berangkat dari pengalaman tersebut, Japanscape mulai beroperasi pada tahun 2024: menghadirkan perjalanan privat yang dirancang khusus bagi wisatawan Indonesia, dengan pendampingan yang hangat dan personal.',
 valEyebrow:'Prinsip Kami',valTitle:'Tiga hal yang <em>membedakan kami.</em>',
 v1t:'Hidden Gems',v1p:'Kami mengajak Anda ke tempat-tempat yang jarang dikunjungi, tidak hanya destinasi populer.',
 v2t:'Pendamping Perjalanan',v2p:'Pendampingan yang hangat, nyaman, dan selalu siap membantu.',
 v3t:'Tailor-made',v3p:'Tidak ada paket jadi. Setiap itinerary dirancang dari awal untuk rombongan Anda.',
 guideEyebrow:'Siapa yang Mendampingi Anda',guideLead:'Zefanya Adriel sendiri, bersama sejumlah mitra pemandu berpengalaman di Jepang — semuanya fasih berbahasa Indonesia, Inggris, dan Jepang.',
 guideBody:'Japanscape didukung oleh mitra perusahaan tur yang berpengalaman, sehingga setiap perjalanan — mulai dari transportasi hingga tiket — ditangani dengan cermat.',
 aQuote:'Japanscape takes you beyond the famous — to the hidden gems of Japan most visitors never find.',

 /* CONTACT */
 cEyebrow:'Contact',cTitle:'Mari merancang <em>perjalanan Anda.</em>',
 cSub:'Isi formulir singkat di bawah ini — pesan Anda akan terbuka di WhatsApp, siap dikirim ke tim kami.',
 fName:'Nama',fPax:'Jumlah Peserta',fPaxHint:'Harga mulai 30 juta berlaku untuk min. 4 pax. Rombongan lebih kecil tetap bisa — harga disesuaikan.',fDate:'Perkiraan Tanggal Keberangkatan',fDays:'Durasi',
 fDaysOpts:['Pilih durasi','5 hari','6–7 hari','8–10 hari','Lebih dari 10 hari','Belum ditentukan'],
 fDest:'Destinasi yang Diminati',fDestOpts:['Tokyo','Kyoto & Kansai','Hokkaido','Fuji & Yamanashi','Hidden Gems','Belum ditentukan'],
 fHotel:'Kategori Hotel',fHotelOpts:['Standar','Premium','Luxury'],
 fNotes:'Informasi tambahan',fNotesPh:'Contoh: perjalanan keluarga, ingin melihat sakura, bepergian bersama orang tua, minat kuliner…',
 fSubmit:'Kirim via WhatsApp',fErr:'Mohon lengkapi nama dan jumlah peserta.',fErrMin:'Mohon isi jumlah peserta yang valid.',
 waIntro:'Halo Japanscape, saya ingin merencanakan perjalanan ke Jepang.',
 wName:'Nama',wPax:'Jumlah peserta',wDate:'Tanggal',wDays:'Durasi',wDest:'Destinasi',wHotel:'Hotel',wNotes:'Catatan',
 dirTitle:'Hubungi Kami',dirList:[['WhatsApp','+62 821-2356-5441'],['Instagram','@japanscape.travel'],['Email','zefanyadriel@gmail.com']],
 dirNote:'Kami akan membalas dengan beberapa pertanyaan lanjutan beserta rancangan itinerary awal.',
 faqEyebrow:'Pertanyaan Umum',faqTitle:'Sebelum <em>Anda bertanya.</em>',
 faq:[['Berapa biaya perjalanan bersama Japanscape?','Mulai dari IDR 30.000.000/peserta untuk 5 hari 4 malam. *Syarat & ketentuan berlaku — harga akhir disesuaikan dengan itinerary yang kami rancang bersama Anda.'],
  ['Apakah tiket pesawat sudah termasuk?','Belum. Harga awal tidak termasuk tiket pesawat, namun kami dapat menambahkan tiket pesawat ke dalam perjalanan Anda.'],
  ['Mengapa harga dapat berbeda-beda?','Karena setiap itinerary dirancang secara khusus — rute, jumlah hari, kategori hotel, kendaraan, dan pengalaman yang Anda pilih menentukan harga akhir.'],
  ['Apakah pemandunya bisa berbahasa Indonesia?','Bisa. Seluruh pemandu kami fasih berbahasa Indonesia, Inggris, dan Jepang.'],
  ['Apakah bisa dibantu untuk visa dan JR Pass?','Bisa. Kami menyediakan panduan visa, pengurusan JR Pass, dan dukungan penerjemah sebagai layanan tambahan.']]
},
en:{
 nav_about:'About',nav_journey:'Journey',nav_seasons:'Seasons',nav_contact:'Contact',navcta:'Plan a Journey',
 waMsg:'Hello Japanscape, I would like to plan a journey to Japan.',
 footTag:'Your Private Escape to Japan',footNav:'Navigation',footContact:'Contact',footSince:'Established 2024',
 ctaEyebrow:'Begin Planning',ctaTitle:'Share the Japan <em>you wish to discover.</em>',
 ctaSub:'Send us your preferred dates, group size, and interests. We will respond with an initial itinerary proposal.',
 ctaWa:'Chat on WhatsApp',ctaForm:'Fill in the Journey Form',
 priceEyebrow:'Journey Investment',priceFrom:'Starting from',
 term1:'for 5 Days 4 Nights',tnc:'*Terms & conditions apply',term2:'Minimum 4 Pax',term3:'Standard Hotel',term4:'Flights Not Included',
 priceVariesLong:'Pricing is tailored to each itinerary — the route, hotels, and experiences you select.',
 inclTitle:'Included',
 inclList:[['Private car & driver','Daily'],['Travel guide','Daily'],['Attraction admission','As per itinerary']],
 inclExtra:'Available on request: premium hotels, premium vehicles, flights, JR Pass arrangements, visa guidance, and interpreter support.',
 priceVaries:'Pricing tailored to each itinerary',tripCta:'Design a similar journey',seeDetail:'View details',

 /* PRIVACY + 404 */
 footPrivacy:'Privacy Policy',
 pvEyebrow:'Privacy Policy',pvTitle:'Your privacy <em>at Japanscape.</em>',pvUpdated:'Last updated: 5 October 2026',
 pvBody:'<h3>Who we are</h3><p>This website is run by Japanscape.travel, a provider of private journeys in Japan. For any privacy question, contact us on WhatsApp at +62 821-2356-5441 or by email at zefanyadriel@gmail.com.</p>'+
  '<h3>What we receive</h3><p>This website has no accounts, stores no form submissions on a server, and sets no cookies or analytics. The form on the Contact page only composes a message on your device and opens it in WhatsApp — nothing is sent unless you press send yourself. Whatever you send us by WhatsApp or email (for example your name, group size, dates, and travel preferences) reaches us directly.</p>'+
  '<h3>How we use it</h3><p>We use it only to reply to you, design your itinerary, and arrange your booking. We do not sell your data or use it for advertising.</p>'+
  '<h3>Who we share it with</h3><p>If you book a journey, we may pass the necessary details to the partners who deliver it — such as hotels, transport providers, guides, and our partner tour company in Japan. WhatsApp messages are processed by WhatsApp (Meta) under its own privacy policy.</p>'+
  '<h3>Technical data</h3><p>This website is hosted by Netlify, which records standard technical data (such as IP address and browser type) for security and to operate its servers. Your language choice (ID/EN) is stored in your own browser and is not sent to us.</p>'+
  '<h3>Your rights</h3><p>Under Indonesia’s Personal Data Protection Law (Law No. 27 of 2022), you may ask to access, correct, or delete the personal data we hold about you. Contact us using the details above.</p>'+
  '<h3>Changes</h3><p>We may update this policy from time to time. The date of the latest update is shown at the top of this page.</p>',
 nfEyebrow:'404',nfTitle:'This page <em>could not be found.</em>',nfSub:'The link may have changed. Head back to the home page, or tell us about the journey you have in mind.',nfHome:'Back to Home',
 heroEyebrow:'Private Journeys in Japan · Tailor-made',
 heroTitle:'Japan, composed <em>around you.</em>',
 heroSub:'Every itinerary is curated from first-hand travel throughout Japan, then tailored to the pace, interests, and comfort of your group.',
 ctaPrimary:'Plan Your Journey',ctaSecondary:'View Sample Itineraries',heroMeta:'Lake Saiko · Yamanashi',
 introEyebrow:'About Japanscape',
 introLead:'More than a tour — a way of experiencing Japan that is serene, authentic, and entirely personal.',
 introBody:'Japanscape offers private journeys through Japan, designed especially for Indonesian travellers. Every destination is curated from the travels of our founder, Zefanya Adriel — from Japan’s most celebrated sights to places few visitors ever reach.',
 introSig:'Curated by Zefanya Adriel, Founder',introLink:'Discover Japanscape',
 procEyebrow:'How It Works',procTitle:'From the first consultation <em>to departure.</em>',
 procIntro:'We do not offer ready-made packages. Every journey is shaped around you — your dates, your interests, and the Japan you wish to experience.',
 steps:[['Consultation','Share your preferred dates, group size, and the experiences you hope to have in Japan.'],['Itinerary Proposal','We plan each day in detail, including hotels, transport, and tickets.'],['Refinement','The itinerary may be adjusted, extended, or paced more gently until it meets your expectations.'],['Departure','A private car, driver, and guide accompany you from the moment you arrive.']],
 tripEyebrow:'Sample Itineraries',tripTitle:'Journeys we have <em>designed.</em>',
 tripIntro:'Two examples from previous client journeys, offered as an illustration rather than a package. Your itinerary will be designed specifically for you.',
 t1tag:'Summer',t1days:'10 Days',t1style:'Private · Full Service',t1title:'Hokkaido to Kansai',t1route:'Sapporo · Furano · Tokyo · Kyoto · Nara · Osaka',
 t1list:['Furano & Biei flower fields, the Blue Pond','Mount Moiwa Ropeway at sunset','Tokyo DisneySea & the Harry Potter Studio Tour','Sagano Romantic Train & teamLab Kyoto','Kiyomizu-dera, Gion, and Nara Park'],
 t2tag:'Winter',t2days:'5 Days',t2style:'Private · Alphard',t2title:'Tokyo in Winter',t2route:'Tokyo · Nikko · Fuji-Q · Mitaka',
 t2list:['Edo Wonderland & Kegon Falls, Nikko','A full day at Fuji-Q Highland','The Ghibli Museum, Mitaka','Harajuku, Omotesando & Shibuya Sky'],
 tripNote:'These itineraries are drawn from journeys we have arranged and are presented without client names.',
 seaEyebrow:'Japan Throughout the Year',seaTitle:'Every season, <em>a different Japan.</em>',
 seaIntro:'We plan each route around the season of your arrival, so that every day is experienced at its finest.',seaLink:'Complete seasonal guide',
 s1l:'March – May',s1t:'Spring',s1p:'Cherry blossoms along canals and temple gardens.',
 s2l:'June – August',s2t:'Summer',s2p:'Verdant mountains and the flower fields of Hokkaido.',
 s3l:'September – November · Our Founder’s Favourite',s3t:'Autumn',s3p:'Pleasant weather, clear skies, nature at its most beautiful, and fewer crowds.',
 s4l:'December – February',s4t:'Winter',s4p:'Snow, white peaks, and illuminated cities.',
 ownerEyebrow:'A Note from the Founder',
 ownerQuote:'I often encountered travellers who had lost their way in train stations. That is how Japanscape began — not just as a guide, but as a travel companion who helps you take a pause from everyday life, in Japan.',
 ownerSig:'Zefanya Adriel, Founder',f1:'Living in and exploring Japan since university',f2:'Japanscape established',f3:'Where he built his career',

 jEyebrow:'Journey',jTitle:'Itineraries designed, <em>not chosen from a catalogue.</em>',
 jSub:'Every Japanscape journey is designed from the ground up. The two examples below are journeys we have arranged, offered here as inspiration.',
 jIntroEyebrow:'Tailor-made',jIntroTitle:'Your route, <em>your rhythm.</em>',
 jIntroBody:'Share who will be travelling, when you plan to arrive, and the experiences you hope to have. We design the route day by day — including hotels, private transport, a guide, and tickets — and refine it with you until it is right.',
 ex1Eyebrow:'Sample 01 · Summer',ex1Title:'Hokkaido to Kansai',ex1Meta:['10 Days','4 Pax','Private · Full Service'],
 ex1Days:[['Day 1','Arrival in Sapporo','Odori Park, Sapporo TV Tower, the Clock Tower, shopping at Tanukikoji, and dinner in Susukino.'],
  ['Day 2','Furano & Biei','Seafood breakfast at Nijo Market, Farm Tomita, Shikisai no Oka, the Blue Pond, and Shirahige Waterfall.'],
  ['Day 3','Another Side of Sapporo','Hill of the Buddha, Shiroi Koibito Park, followed by the Mount Moiwa Ropeway at sunset.'],
  ['Day 4','Sapporo → Tokyo','Domestic flight to Tokyo, Akihabara, followed by an evening in Ginza.'],
  ['Day 5','Tokyo DisneySea','A full day at DisneySea, including Fantasy Springs.'],
  ['Day 6','Harry Potter & Shibuya','Warner Bros. Studio Tour Tokyo – The Making of Harry Potter, followed by Shibuya.'],
  ['Day 7','Tokyo → Kyoto','Shinkansen to Kyoto, Kiyomizu-dera, Yasaka Shrine, and a walk through Gion.'],
  ['Day 8','Arashiyama & Kyoto','Sagano Romantic Train, Nishiki Market, and teamLab Biovortex Kyoto.'],
  ['Day 9','Nara → Osaka','Nara Park, followed by Dotonbori and Shinsaibashi for final shopping.'],
  ['Day 10','Departure','Transfer to Kansai International Airport.']],
 ex1Chips:['4–5 star hotels','Domestic flight','Shinkansen','Attraction tickets','Private car & guide'],
 ex2Eyebrow:'Sample 02 · Winter',ex2Title:'Tokyo in Winter',ex2Meta:['5 Days','3 Pax','Private · Alphard'],
 ex2Days:[['Day 1','Arrival in Tokyo','Pick-up at Haneda Airport, hotel check-in in Shinjuku, and a free evening in Shinjuku.'],
  ['Day 2','Nikko','Edo Wonderland — a recreated Edo-period town — and Kegon Falls.'],
  ['Day 3','Fuji-Q Highland','A full day at the theme park at the foot of Mount Fuji.'],
  ['Day 4','Ghibli, Harajuku & Shibuya','The Ghibli Museum in Mitaka, Takeshita Street, Omotesando, followed by dusk at Shibuya Sky.'],
  ['Day 5','Departure','Transfer to Haneda Airport.']],
 ex2Chips:['Premium hotel in Shinjuku','Private Alphard','Driver & guide','Attraction tickets'],
 exNote:'Samples are presented without client names. Schedules, attraction operating days, and prices are always confirmed during planning.',
 destEyebrow:'Destination Inspiration',destTitle:'From the iconic <em>to the hidden.</em>',
 destIntro:'A selection of destinations we frequently design around, which may be combined as you wish.',
 d1t:'Tokyo',d1p:'The energy of the city, its cuisine, and quiet corners among the towers.',
 d2t:'Kyoto',d2p:'Temples, historic wooden lanes, and a more measured pace.',
 d3t:'Fuji & Yamanashi',d3p:'Lakes, small towns, and Japan’s most celebrated mountain view.',
 d4t:'Hidden Gems',d4p:'Places seldom found on tourist lists — our founder’s speciality.',

 sEyebrow:'Seasons',tb1:'Spring',tb2:'Summer',tb3:'Autumn',tb4:'Winter',sTitle:'Japan, <em>season by season.</em>',
 sSub:'The season shapes every part of a journey — the route, what to pack, and how busy it gets. Here is our short guide to choosing the right time.',
 spMonths:'March – May',spTitle:'<em>Spring</em>',
 spBody:'Cherry blossom season. In Tokyo and Kyoto, the blossoms typically open from late March to early April, then move northward — Hokkaido usually blooms around early May.',
 spTips:'<b>Note:</b> Golden Week (late April – early May) is a major Japanese holiday period, with larger crowds and higher hotel rates. We recommend booking well in advance.',
 suMonths:'June – August',suTitle:'<em>Summer</em>',
 suBody:'Lush greenery, summer festivals, and fireworks. July is lavender season in Furano, Hokkaido, which is also cooler than Tokyo or Kyoto.',
 suTips:'<b>Note:</b> June is the rainy season across most of Japan (Hokkaido is generally less affected). Tokyo and Kyoto can be very hot and humid in July and August.',
 auMonths:'September – November',auTitle:'<em>Autumn</em>',auPick:'Our Founder’s Favourite',
 auBody:'Momiji and ginkgo leaves turn red and gold — beginning in Hokkaido around October, then moving south to Tokyo and Kyoto, which usually reach their peak from mid to late November.',
 auQuote:'“I am especially fond of autumn — the weather is pleasant, the skies are often clear, nature is beautiful, and there are fewer international visitors.” — Zefanya Adriel',
 auTips:'<b>Note:</b> early September may still bring typhoons. To enjoy the finest autumn colours in Kyoto, we recommend planning well in advance.',
 wiMonths:'December – February',wiTitle:'<em>Winter</em>',
 wiBody:'Snow in Hokkaido and the mountains, skiing, onsen, and city illuminations. The Sapporo Snow Festival is usually held in early February.',
 wiTips:'<b>Note:</b> from late December to early January, many museums and attractions close for the New Year holidays. We plan the route accordingly.',
 calEyebrow:'The Year at a Glance',calTitle:'When is the ideal time <em>for you?</em>',
 calSub:'There is no wrong season — only the season that best suits what you wish to see.',
 months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
 calFine:'Blossom and foliage timing varies from year to year. We monitor the latest forecasts when designing your journey.',

 aEyebrow:'About',aTitle:'Your travel companion <em>in Japan.</em>',
 aSub:'Japanscape was born from four years of exploring Japan, and from a simple aspiration: to help others enjoy the country without losing their way.',
 a1Eyebrow:'Our Beginnings',a1Lead:'Zefanya Adriel first came to Japan in 2022 to pursue his studies, travelling throughout the country along the way.',
 a1Body1:'For him, Japan has always held a special place, as there is always somewhere new to discover. Tokyo is where he built his career, and Kyoto holds many of his memories.',
 a1Body2:'During his years in Japan, he frequently encountered travellers — from Indonesia and elsewhere — who had lost their way in train stations or were uncertain of their route.',
 a2Eyebrow:'Why Japanscape',a2Lead:'Not just a tour guide, but a travel companion who helps you <em>take a pause from everyday life</em> in Japan.',
 a2Body:'Drawing on that experience, Japanscape began operating in 2024, offering private journeys designed especially for Indonesian travellers, with attentive and personal guidance.',
 valEyebrow:'Our Principles',valTitle:'Three things that <em>set us apart.</em>',
 v1t:'Hidden Gems',v1p:'We take you to places that few people visit, not only to the well-known destinations.',
 v2t:'Travel Companion',v2p:'Guidance that is warm, attentive, and always ready to assist.',
 v3t:'Tailor-made',v3p:'We do not offer ready-made packages. Every itinerary is designed from the ground up for your group.',
 guideEyebrow:'Who Accompanies You',guideLead:'Zefanya Adriel personally, together with a number of experienced partner guides in Japan — all fluent in Indonesian, English, and Japanese.',
 guideBody:'Japanscape is supported by an experienced partner tour company, so every journey — from transport to tickets — is handled with care.',
 aQuote:'Japanscape takes you beyond the famous — to the hidden gems of Japan most visitors never find.',

 cEyebrow:'Contact',cTitle:'Let us design <em>your journey.</em>',
 cSub:'Fill in the short form below. Your message will open in WhatsApp, ready to be sent to our team.',
 fName:'Name',fPax:'Number of Guests',fPaxHint:'The from-price applies to a minimum of 4 guests. Smaller groups are welcome — pricing is adjusted.',fDate:'Estimated Departure Date',fDays:'Duration',
 fDaysOpts:['Select duration','5 days','6–7 days','8–10 days','More than 10 days','To be decided'],
 fDest:'Destinations of Interest',fDestOpts:['Tokyo','Kyoto & Kansai','Hokkaido','Fuji & Yamanashi','Hidden Gems','To be decided'],
 fHotel:'Hotel Category',fHotelOpts:['Standard','Premium','Luxury'],
 fNotes:'Additional information',fNotesPh:'For example: family journey, cherry blossom viewing, travelling with elderly parents, culinary interests…',
 fSubmit:'Send via WhatsApp',fErr:'Please provide your name and the number of guests.',fErrMin:'Please enter a valid number of guests.',
 waIntro:'Hello Japanscape, I would like to plan a journey to Japan.',
 wName:'Name',wPax:'Number of guests',wDate:'Date',wDays:'Duration',wDest:'Destinations',wHotel:'Hotel',wNotes:'Notes',
 dirTitle:'Contact Us Directly',dirList:[['WhatsApp','+62 821-2356-5441'],['Instagram','@japanscape.travel'],['Email','zefanyadriel@gmail.com']],
 dirNote:'We will respond with a few follow-up questions and an initial itinerary proposal.',
 faqEyebrow:'Frequently Asked Questions',faqTitle:'Before <em>you ask.</em>',
 faq:[['How much does a Japanscape journey cost?','Starting from IDR 30,000,000 per guest for 5 days 4 nights. *Terms & conditions apply — the final price depends on the itinerary we design with you.'],
  ['Are flights included?','Flights are not included in the starting price, but we can arrange them as part of your journey.'],
  ['Why do prices vary?','Because every itinerary is designed individually — the route, number of days, hotel category, vehicle, and experiences you select determine the final price.'],
  ['Do your guides speak Indonesian?','Yes. All of our guides are fluent in Indonesian, English, and Japanese.'],
  ['Can you assist with visas and the JR Pass?','Yes. We offer visa guidance, JR Pass arrangements, and interpreter support as additional services.']]
}};

/* ---------- chrome ---------- */
const page = document.body.dataset.page || 'home';
const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3Z"/></svg>';
function chrome(){
  const links = PAGES.map(([k,h])=>`<a href="${h}" data-nav="${k}" data-i="nav_${k}"${k===page?' class="active" aria-current="page"':''}></a>`).join('');
  const mlinks = PAGES.map(([k,h])=>`<a class="m${k===page?' active':''}" href="${h}" data-nav="${k}" data-i="nav_${k}"></a>`).join('');
  document.body.insertAdjacentHTML('afterbegin',`
  <nav class="top" id="nav" aria-label="Main">
    <a href="index.html" class="logo" data-nav="home" aria-label="Japanscape — Home">Japan<i>scape</i></a>
    <div class="navlinks">${links}</div>
    <div class="navright">
      <div class="lang" role="group" aria-label="Language"><button data-l="id" aria-label="ID — Bahasa Indonesia"><span>ID</span></button><button data-l="en" aria-label="EN — English"><span>EN</span></button></div>
      <a href="contact.html" data-nav="contact" class="btn navcta" data-i="navcta"></a>
      <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </nav>
  <div class="mobile-menu" id="mmenu">${mlinks}<div class="mfoot"><a class="wa" href="#">WhatsApp +62 821-2356-5441</a><a href="https://instagram.com/japanscape.travel" target="_blank" rel="noopener">Instagram @japanscape.travel</a></div></div>`);
  document.body.insertAdjacentHTML('beforeend',`
  <footer><div class="wrap">
    <div class="top">
      <div><a href="index.html" data-nav="home" class="flogo"><img src="assets/logo/japanscape-logo-white.svg" alt="Japanscape — Your Private Escape to Japan" width="260"></a><p style="margin-top:18px" data-i="footSince"></p></div>
      <div><p class="label fh" data-i="footNav"></p><ul>${PAGES.map(([k,h])=>`<li><a href="${h}" data-nav="${k}" data-i="nav_${k}"></a></li>`).join('')}</ul></div>
      <div><p class="label fh" data-i="footContact"></p><ul><li><a class="wa" href="#" target="_blank" rel="noopener">WhatsApp +62 821-2356-5441</a></li><li><a href="https://instagram.com/japanscape.travel" target="_blank" rel="noopener">Instagram @japanscape.travel</a></li><li><a href="mailto:zefanyadriel@gmail.com">zefanyadriel@gmail.com</a></li></ul></div>
    </div>
    <div class="bot"><span>© 2026 Japanscape.travel · <a href="privacy.html" data-nav="privacy" data-i="footPrivacy" style="color:inherit"></a></span><a href="https://kriyator.com" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">Created by Kriyator</a></div>
  </div></footer>
  <a class="wa wa-float" href="#" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>`);
  const burger=document.querySelector('.burger');
  burger.onclick=()=>{const o=document.body.classList.toggle('menu-open');burger.setAttribute('aria-expanded',o)};
}

/* ---------- language ---------- */
function getLang(){
  const q=new URLSearchParams(location.search).get('lang');
  if(q==='id'||q==='en') return q;
  try{return localStorage.getItem('js-lang')||'id'}catch(e){return 'id'}
}
function setLang(l){
  const d=T[l];document.documentElement.lang=l;
  document.querySelectorAll('[data-i]').forEach(e=>{const v=d[e.dataset.i];if(v!=null)e.innerHTML=v});
  document.querySelectorAll('[data-ph]').forEach(e=>{const v=d[e.dataset.ph];if(v!=null)e.placeholder=v});
  document.querySelectorAll('[data-list]').forEach(u=>{
    const v=d[u.dataset.list]; if(!v) return; const kind=u.dataset.kind||'li';
    if(kind==='rows') u.innerHTML=v.map(x=>`<li><span>${x[0]}</span><span>${x[1]}</span></li>`).join('');
    else if(kind==='days') u.innerHTML=v.map(x=>`<li><div class="d">${x[0]}</div><div><h4>${x[1]}</h4><p>${x[2]}</p></div></li>`).join('');
    else if(kind==='span') u.innerHTML=v.map(x=>`<span>${x}</span>`).join('');
    else if(kind==='steps') u.innerHTML=v.map((s,i)=>`<div class="step"><div class="n">0${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
    else if(kind==='faq') u.innerHTML=v.map(x=>`<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('');
    else if(kind==='months') u.innerHTML=v.map((m,i)=>`<${u.closest('.stage')?'button type="button"':'div'} class="${['wi','wi','sp','sp','sp','su','su','su','au','au','au','wi'][i]}"><b>${m}</b> ${(l==='id'?['Dingin','Dingin','Semi','Semi','Semi','Panas','Panas','Panas','Gugur','Gugur','Gugur','Dingin']:['Winter','Winter','Spring','Spring','Spring','Summer','Summer','Summer','Autumn','Autumn','Autumn','Winter'])[i]}</${u.closest('.stage')?'button':'div'}>`).join('');
    else if(kind==='options') u.innerHTML=v.map((x,i)=>`<option value="${i?x:''}">${x}</option>`).join('');
    else if(kind==='checks'||kind==='radios') u.innerHTML=v.map((x,i)=>`<label><input type="${kind==='checks'?'checkbox':'radio'}" name="${u.dataset.name}" value="${x}"${kind==='radios'&&i===0?' checked':''}><span>${x}</span></label>`).join('');
    else u.innerHTML=v.map(x=>`<li>${x}</li>`).join('');
  });
  const wa='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(d.waMsg);
  document.querySelectorAll('a.wa').forEach(a=>{a.href=wa;a.target='_blank';a.rel='noopener'});
  document.querySelectorAll('[data-nav]').forEach(a=>{const u=new URL(a.getAttribute('href').split('?')[0],document.baseURI);u.searchParams.set('lang',l);a.href=u.href});
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  try{localStorage.setItem('js-lang',l)}catch(e){}
  try{const u=new URL(location.href);if(u.searchParams.has('lang')){u.searchParams.set('lang',l);history.replaceState(null,'',u)}}catch(e){}
  current=l;
  if(window.__seasonRefresh) window.__seasonRefresh();
}
let current='id';

/* ---------- contact form → WhatsApp ---------- */
function initForm(){
  const f=document.getElementById('planForm'); if(!f) return;
  f.addEventListener('submit',e=>{
    e.preventDefault(); const d=T[current]; const v=n=>(f.elements[n]&&f.elements[n].value||'').trim();
    const err=f.querySelector('.err');
    if(!v('name')||!v('pax')){err.textContent=d.fErr;return}
    if(!(parseInt(v('pax'),10)>=1)){err.textContent=d.fErrMin;f.elements.pax.focus();return} err.textContent='';
    const dest=[...f.querySelectorAll('input[name=dest]:checked')].map(i=>i.value).join(', ');
    const hotel=(f.querySelector('input[name=hotel]:checked')||{}).value||'';
    const lines=[d.waIntro,'',`${d.wName}: ${v('name')}`,`${d.wPax}: ${v('pax')}`];
    if(v('date'))lines.push(`${d.wDate}: ${v('date')}`);
    if(v('days'))lines.push(`${d.wDays}: ${v('days')}`);
    if(dest)lines.push(`${d.wDest}: ${dest}`);
    if(hotel)lines.push(`${d.wHotel}: ${hotel}`);
    if(v('notes'))lines.push(`${d.wNotes}: ${v('notes')}`);
    window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
  });
}

/* ---------- motion ---------- */
function initMotion(){
  const nav=document.getElementById('nav');
  const hasHero=document.querySelector('.hero,.page-head,.stage');
  if(!hasHero) document.body.classList.add('light-nav');
  const onScroll=()=>nav.classList.toggle('solid',scrollY>(hasHero?hasHero.offsetHeight*.8:0));
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  const fontsReady=Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,1500))]);
  document.querySelectorAll('.reveal').forEach((el,i)=>{ if(el.closest('.hero,.page-head,.stage')) fontsReady.then(()=>setTimeout(()=>el.classList.add('in'),200+i*160)); else io.observe(el)});
  const P=document.getElementById('petals');
  if(P) for(let i=0;i<7;i++){const p=document.createElement('span');p.className='petal';p.style.left=(10+Math.random()*90)+'%';p.style.animationDuration=(14+Math.random()*10)+'s';p.style.animationDelay=(-Math.random()*20)+'s';P.appendChild(p)}
}


/* ---------- seasons: four-stage viewer ---------- */
function initSeasons(){
  const stage=document.getElementById('stage'); if(!stage) return;
  const scenes=[...stage.querySelectorAll('.scene')]; const ids=scenes.map(s=>s.id);
  const cls={spring:'sp',summer:'su',autumn:'au',winter:'wi'};
  let idx=Math.max(0,ids.indexOf(location.hash.slice(1)));
  function go(i){
    idx=(i+ids.length)%ids.length; const sc=scenes[idx];
    const load=s=>{const im=s&&s.querySelector('img[data-src]');if(im){im.src=im.dataset.src;im.removeAttribute('data-src')}};
    load(sc);setTimeout(()=>{load(scenes[(idx+1)%ids.length]);load(scenes[(idx+ids.length-1)%ids.length])},1200);
    scenes.forEach(s=>s.classList.toggle('active',s===sc));
    stage.style.setProperty('--acc',sc.dataset.acc);
    stage.querySelectorAll('.tabs button').forEach(b=>{const on=b.dataset.go===sc.id;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1});
    stage.querySelectorAll('.year > *').forEach(d=>{const on=d.classList.contains(cls[sc.id]);d.classList.toggle('on',on);d.setAttribute('aria-pressed',on)});
    const u=new URL(location.href);u.hash=sc.id;history.replaceState(null,'',u);
  }
  stage.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>go(ids.indexOf(b.dataset.go))));
  stage.querySelector('.prev').onclick=()=>go(idx-1);
  stage.querySelector('.next').onclick=()=>go(idx+1);
  stage.querySelector('.year').addEventListener('click',e=>{const d=e.target.closest('button[class],div[class]');if(!d)return;const k=Object.keys(cls).find(k=>d.classList.contains(cls[k]));if(k)go(ids.indexOf(k))});
  addEventListener('keydown',e=>{if(stage.getBoundingClientRect().bottom<innerHeight*.5)return;if(e.key==='ArrowRight')go(idx+1);if(e.key==='ArrowLeft')go(idx-1)});
  let x0=null;stage.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
  stage.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(idx+(dx<0?1:-1));x0=null});
  addEventListener('hashchange',()=>{const i=ids.indexOf(location.hash.slice(1));if(i>-1)go(i)});
  window.__seasonGo=go; window.__seasonRefresh=()=>go(idx);
  go(idx);
}

chrome();
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
setLang(getLang());
initForm();
initSeasons();
initMotion();
