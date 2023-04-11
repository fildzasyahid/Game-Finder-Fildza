const games = [
  {
    name: 'Mobile Legends',
    fanArt: 'https://asset-a.grid.id/crop/85x11:892x513/x/photo/2021/05/28/mobile-legends-bang-bangjpg-20210528042158.jpg',
    description: 'Mobile Legends: Bang Bang adalah permainan video seluler ber-genre multiplayer online battle arena (MOBA) yang dikembangkan dan diterbitkan oleh Moonton, anak perusahaan dari ByteDance. Dirilis pada tahun 2016, game ini semakin populer di seluruh dunia, terutama di wilayah Asia Tenggara, dan sejak itu telah melampaui 1 miliar kali unduhan, dengan puncak pemain bulanan sebanyak 100 juta. Pada tahun 2021, "Mobile Legends: Bang Bang" mencapai pendapatan kotor sepanjang masa sebesar US$1 miliar dengan 44 persen pendapatannya berasal dari luar Asia, menjadikannya gim seluler teratas dari genre-nya dengan daya tarik paling global.',
  },
  {
    name: 'PUBG Mobile',
    fanArt: 'https://i0.wp.com/esportsnesia.com/wp-content/uploads/2020/10/Mengenal-PUBG-Mobile.jpg',
    description: 'PUBG Mobile adalah sebuah permainan video battle royale gratis dimainkan yang dikembangkan oleh LightSpeed & Quantum Studio, sebuah divisi dari Tencent Games. Ini merupakan adaptasi permainan piranti genggam dari PlayerUnknowns Battlegrounds yang dirilis untuk Android dan IOS pada 19 Maret 2018. Permainan ini diterbitkan oleh beberapa penerbit di berbagai wilayah, seperti Krafton, Tencent, dan VNG. Pada April 2022, PUBG Mobile telah mendapatkan lebih dari satu miliar unduhan dan menghasilkan lebih dari US$8,3 miliar, menjadikannya permainan piranti genggam terlaris keempat. Ini juga termasuk permainan piranti genggam yang paling sering dimainkan sepanjang masa. Pada 2021, permainan ini mengeluarkan versi India, Battlegrounds Mobile India, dan permainan yang terpisah dari Semesta PUBG, PUBG: New State.',
  },
  {
    name: 'Free Fire',
    fanArt: 'https://berita.yodu.id/wp-content/uploads/2022/04/0-pro-player-free-fire.jpeg',
    description: 'Garena Free Fire atau biasa disebut Free Fire (sering disingkat FF) adalah permainan battle royale yang dikembangkan oleh 111 Dots Studio dan diterbitkan oleh Garena untuk Android dan iOS. Itu menjadi permainan seluler yang paling banyak diunduh secara global pada tahun 2019. Karena popularitasnya, permainan ini menerima penghargaan untuk "Best Popular Vote Game" oleh Google Play Store pada tahun 2019. Pada Mei 2020, Free Fire telah mencetak rekor dengan lebih dari 80 juta pengguna aktif harian di seluruh dunia. Pada November 2019, Free Fire telah mendapat lebih dari US$1 miliar di seluruh dunia. Garena saat ini sedang mengerjakan versi Free Fire yang disempurnakan yang akan disebut Free Fire Max.',
  },
  {
    name: 'Call Of Duty',
    fanArt: 'https://vcgamers.com/news/wp-content/uploads/2022/03/COD-Mobile-1.jpg',
    description: 'Call of Duty: Mobile, biasa disingkat menjadi COD:M atau CODM adalah permainan video penembak orang pertama (POP) gratis yang dikembangkan oleh Timi Studio (anak perusahaan Tencent), dan diterbitkan oleh Activision dan Garena untuk serambi Android dan iOS. Dirilis pada 1 Oktober 2019, permainan ini melihat salah satu peluncuran permainan seluler terbesar dalam sejarah, menghasilkan lebih dari US$480 juta dengan 270 juta unduhan dalam setahun. Permainan ini diterbitkan di wilayah lain oleh Garena, Tencent Games, dan VNG Games. Sejak Juni 2020, Call of Duty: Mobile telah diunduh sebanyak 250 juta kali di seluruh dunia.',
  },
  {
    name: 'Valorant',
    fanArt: 'https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg',
    description: 'Valorant (bergaya sebagai VALORANT) adalah permainan video POP (penembak orang pertama) taktis multipemain gratis yang dikembangkan dan diterbitkan oleh Riot Games, untuk Microsoft Windows. Pertama kali menggoda dengan nama kode Project A pada Oktober 2019, permainan memulai periode beta tertutup dengan akses terbatas pada 7 April 2020, diikuti dengan perilisan resmi pada 2 Juni 2020. Pengembangan permainan dimulai pada 2014.',
  },
  {
    name: 'Genshin Impact',
    fanArt: 'https://play-lh.googleusercontent.com/fk-iAMyAk9U368YPMFfi5R7bnApOR2PBmj7y4noKZgcfsDaw7L9R3fbcais98O5oig=w526-h296-rw',
    description: 'Genshin Impact adalah gim open-world yang dikembangkan oleh pengembang asal China, miHoYo. Gim ini tersedia secara gratis dan menerapkan sistem gacha di dalamnya. Dalam gameplay-nya, Genshin Impact memiliki arena dunia fantasi terbuka. Gim ini juga hanya bisa dimainkan secara online saja dengan fitur mode multiplayer yang memungkinkan kamu untuk bermain dengan maksimal empat orang sekaligus. Genshin Impact diketahui menggunakan sistem gacha dan uang virtual di dalam gim. Hal ini membuat banyak gamers tertarik untuk langsung bermain di awal peluncurannya dan membagikan hasil gacha mereka ke media sosial. Alhasil, gim ini pun menjadi semakin viral. Sejauh ini Genshin Impact sudah menjadi salah satu gim tersukses di tahun 2020. Terhitung hingga akhir September 2020 lalu, gim ini telah menghasilkan pendapatan mencapai US$140 juta. Di tengah kesuksesannya, Genshin Impact selalu dikaitkan akan kemiripannya dengan Breath of the Wild (BOTW). Kedua gim tersebut memiliki visual yang bisa dikatakan sangat mirip. Mulai dari karakter, monster, hingga environment-nya memang sudah tidak terbantahkan lagi kemiripannya.',
  },
  {
    name: 'Clash Of Clans',
    fanArt: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2022/01/02/2788028171.jpg',
    description: 'Clash of Clans adalah permainan video strategi seluler freemium yang dikembangkan dan diterbitkan oleh pengembang permainan Finlandia, Supercell. Permainan ini dirilis untuk platform iOS pada 2 Agustus 2012, dan di Google Play untuk Android pada 7 Oktober 2013. Permainan ini berlatarkan tema fantasi dunia persistent dimana pemainnya adalah kepala desa. Clash of Clans menugaskan pemain untuk membangun desa mereka sendiri menggunakan sumber daya yang diperoleh dari menyerang desa pemain lain atau memproduksinya di desa sendiri. Untuk menyerang, pemain melatih berbagai jenis pasukan menggunakan sumber daya. Sumber daya utamanya adalah emas, elixir dan elixir hitam. Pemain dapat bergabung untuk membuat klan, grup hingga lima puluh orang, yang kemudian dapat berpartisipasi dalam Perang Klan bersama, menyumbang dan menerima pasukan, dan mengobrol satu sama lain. Empat permainan spin-off di dunia Clash of Clans yang sama dikembangkan oleh Supercell. Pertama, Clash Royale, dirilis pada 2016. Tiga lainnya, Clash Quest, Clash Minis, dan Clash Heroes, diumumkan pada bulan April 2021.',
  },
  {
    name: 'E-Football 2023',
    fanArt: 'https://www.konami.com/efootball/s/img/page/season3_2023/efootball-2023_season3_visual_16-9.jpg?v=325',
    description: 'eFootball adalah permainan video simulasi sepak bola yang dikembangkan dan diterbitkan oleh Konami . Ini adalah permainan gratis untuk dimainkan setelah sepenuhnya diganti namanya dari seri Pro Evolution Soccer asli(dikenal sebagai Winning Eleven di Jepang) menjadi seri eFootball . Tahun pertama game ini berjudul eFootball 2022 , dirilis pada 30 September 2021. Kemudian diubah menjadi tahun kedua game tersebut, eFootball 2023 , pada 25 Agustus 2022. Game ini merupakan bagian dari International Esports Federation World Championship dan Liga Eropa Utara dan Timur (NEEC).',
  },
  {
    name: 'Dota 2',
    fanArt: 'https://i.ytimg.com/vi/qdMTOvYBsPQ/maxresdefault.jpg',
    description: 'Dota 2 adalah sebuah permainan arena pertarungan daring multipemain, dan merupakan sekuel dari Defense of the Ancients mod pada Warcraft 3: Reign of Chaos dan Warcraft 3: The Frozen Throne. DotA 2 dikembangkan oleh Valve Corporation, terbit juli 2013 dota 2 dapat dimainkan secara gratis pada sistem operasi Microsoft Windows, OS X and Linux. Dota 2 dapat dimainkan secara eksklusif melalui distributor resmi valve, Steam. Dota 2 dimainkan oleh 2 tim yang beranggota 5 orang pemain, setiap tim memiliki markas yang berada dipojok peta, setiap markas memiliki satu bangunan bernama Ancient, Di mana tim harus berusaha menghancurkan Ancient tim lawan agar dapat memenangkan pertandingan. Setiap pemain hanya dapat mengontrol satu karakter Hero yang berfokus pada menaikan level, mengumpulkan gold, membeli item dan melawan tim lawan untuk menang.',
  },
  {
    name: 'Subway Surfers',
    fanArt: 'https://thumb.viva.co.id/media/frontend/thumbs3/2018/03/18/5aadd95a5b7d1-game-subway-surfers_1265_711.jpg',
    description: 'Subway Surfers adalah permainan melarikan diri yang diusung oleh Kiloo Games[1] dan Sybo Games, sebuah perusahaan swasta asal Denmark. Permainan ini tersedia untuk Android, iOS, Kindle, dan Windows Phone. Pemain berperan sebagai seorang remaja hooligan yang setelah tertangkap memasang grafiti ke sisi kereta api, berlari ke bawah trek untuk melarikan diri dari Inspektur dan anjingnya. Sebagai hooligan, pemain diminta untuk ambil koin emas sebanyak mungkin dari udara sekaligus menghindari tabrakan dengan kereta api dan benda-benda lainnya. Pada permainan ini terdapat benda khusus, seperti perburuan mingguan, yang dapat menambah penghargaan dalam permainan. Subway Surfers dirilis pada 24 Mei 2012 dengan pembaharuan berdasarkan libur musiman. Sejak 2 Januari 2013, pembaharuan telah didasarkan pada World Tour yang menempatkan permainan di kota baru setiap bulannya.',
  },
  {
    name: 'Ludo King',
    fanArt: 'https://zurapedia.org/wp-content/uploads/2022/04/permainan-ludo-king-online.jpg',
    description: 'Ludo King adalah aplikasi game seluler gratis yang dikembangkan oleh Gametion Technologies Pvt Ltd, sebuah studio game yang berbasis di Navi Mumbai , India. [1] [2] [3] Gametion dimiliki oleh Vikash Jaiswal . Gim ini dikembangkan di mesin gim Unity dan tersedia diplatform Android , iOS , Kindle , Windows Phone , dan Microsoft Windows . Gim ini merupakan modernisasi dari gim papan, Ludo , yang didasarkan pada zaman kuno Permainan India Pachisi . Ludo King dirilis pada 20 Februari 2016, di Apple App Store, dan sejak saat itu secara konsisten menduduki peringkat No. 1 di Bagian Game Gratis Teratas di Apple App Store dan Google Play Store. Ini adalah aplikasi game India pertama yang melewati 500 juta unduhan. Ludo King dimainkan di 30 negara dan tersedia dalam 15 bahasa.',
  }
];

export default games;