// Central content store — copy lives here, separate from markup.
// Bilingual (ID default — confirmed audience is Indonesian travelers — with an EN
// toggle for international visitors). Add new copy to both `id` and `en` together.

export const site = {
  defaultLang: 'id',
  brand: {
    name: 'Japanscape.travel'
  },
  nav: {
    id: ['Beranda', 'Tur', 'Tentang', 'Testimoni', 'Kontak'],
    en: ['Home', 'Tours', 'About', 'Testimonials', 'Contact']
  },
  hero: {
    id: {
      eyebrow: 'Tur Privat ke Jepang',
      headline: 'Jepang, dijalani dengan tenang.',
      sub: 'Itinerary fleksibel, dipandu langsung oleh pemandu berpengalaman — dari mekarnya sakura hingga ketenangan salju Niigata.',
      cta: 'Rencanakan Perjalanan Anda',
      scrollCue: 'Gulir'
    },
    en: {
      eyebrow: 'Private Tours to Japan',
      headline: 'Japan, at a quieter pace.',
      sub: 'Flexible itineraries, led by an experienced private guide — from sakura in full bloom to the stillness of Niigata snow.',
      cta: 'Plan Your Journey',
      scrollCue: 'Scroll'
    }
  },
  intro: {
    id: {
      eyebrow: 'Escape Pribadi Anda ke Jepang',
      body: 'Japanscape.travel merancang perjalanan privat ke Jepang untuk Anda yang ingin menikmati negeri ini tanpa terburu-buru — rombongan sendiri, tempo sendiri, dan pemandu yang sudah hafal setiap musimnya.'
    },
    en: {
      eyebrow: 'Your Private Escape to Japan',
      body: "Japanscape.travel designs private journeys through Japan for travelers who'd rather take their time — your own group, your own pace, guided by someone who knows every season of the country."
    }
  },
  tours: {
    id: {
      eyebrow: 'Jelajahi Pilihan Tur',
      title: 'Rute yang sudah teruji, tempo yang Anda tentukan.',
      cta: 'Lihat Semua Tur',
      items: [
        { region: 'Tokyo & Sekitarnya', desc: 'Kota modern, kuil bersejarah, dan sudut-sudut tenang di luar jalur wisata utama.' },
        { region: 'Kansai (Kyoto, Osaka, Nara)', desc: 'Jantung budaya Jepang — kuil kuno, rusa Nara, dan kuliner jalanan Osaka.' },
        { region: 'Hokkaido', desc: 'Salju Hokkaido, onsen, dan ketenangan pedesaan Jepang utara.' },
        { region: 'Itinerary Kustom', desc: 'Rancang rute Anda sendiri — kami sesuaikan dengan minat dan waktu Anda.' }
      ]
    },
    en: {
      eyebrow: 'Explore the Routes',
      title: 'Routes we know well, on a pace you set.',
      cta: 'View All Tours',
      items: [
        { region: 'Tokyo & Around', desc: 'Modern city energy, historic shrines, and quiet corners off the usual tourist path.' },
        { region: 'Kansai (Kyoto, Osaka, Nara)', desc: "The cultural heart of Japan — ancient temples, Nara's deer, and Osaka street food." },
        { region: 'Hokkaido', desc: 'Hokkaido snow, onsen, and the stillness of rural northern Japan.' },
        { region: 'Custom Itinerary', desc: "Design your own route — we'll tailor it to your interests and your time." }
      ]
    }
  },
  whyUs: {
    id: {
      eyebrow: 'Kenapa Tur Privat',
      title: 'Dirancang di sekitar Anda, bukan sebaliknya.',
      points: [
        { title: 'Itinerary Fleksibel', desc: 'Ubah rencana kapan saja — tidak ada rombongan lain yang menahan Anda.' },
        { title: 'Pemandu Berpengalaman', desc: 'Dipandu langsung oleh pemandu yang memahami budaya dan bahasa setempat.' },
        { title: 'Bantuan Menyeluruh', desc: 'JR Pass, bantuan visa, dan penerjemah — semua diurus untuk Anda.' }
      ]
    },
    en: {
      eyebrow: 'Why Go Private',
      title: 'Built around you, not the other way around.',
      points: [
        { title: 'Flexible Itinerary', desc: 'Change plans anytime — no other group holding you back.' },
        { title: 'Experienced Guide', desc: 'Led directly by a guide who knows the local culture and language.' },
        { title: 'End-to-End Support', desc: 'JR Pass, visa help, and translation — all handled for you.' }
      ]
    }
  },
  testimonials: {
    id: {
      eyebrow: 'Testimoni',
      title: 'Cerita dari perjalanan sebelumnya.',
      note: 'Placeholder — menunggu testimoni asli dari klien Japanscape.',
      quote: '"Perjalanan yang benar-benar terasa milik kami sendiri — tempo, rute, semuanya menyesuaikan."',
      attribution: 'Nama Klien, Kota Asal'
    },
    en: {
      eyebrow: 'Testimonials',
      title: 'Stories from past journeys.',
      note: "Placeholder — awaiting Japanscape's real client testimonials.",
      quote: '"A trip that genuinely felt like our own — the pace, the route, everything adjusted to us."',
      attribution: 'Client Name, Hometown'
    }
  },
  ctaBanner: {
    id: {
      title: 'Mulai rencanakan perjalanan Anda ke Jepang.',
      sub: 'Ceritakan tanggal dan minat Anda — kami susun itinerary privat yang sesuai.',
      cta: 'Hubungi Kami'
    },
    en: {
      title: 'Start planning your journey to Japan.',
      sub: 'Tell us your dates and interests — we’ll put together a private itinerary to match.',
      cta: 'Get in Touch'
    }
  },
  footer: {
    id: {
      tagline: 'Escape Pribadi Anda ke Jepang',
      navTitle: 'Navigasi',
      contactTitle: 'Kontak',
      email: 'zefanyadriel@gmail.com',
      social: 'Instagram @japanscape.travel',
      credit: 'Dibuat oleh Kriyator'
    },
    en: {
      tagline: 'Your Private Escape to Japan',
      navTitle: 'Navigate',
      contactTitle: 'Contact',
      email: 'zefanyadriel@gmail.com',
      social: 'Instagram @japanscape.travel',
      credit: 'Created by Kriyator'
    }
  }
};
