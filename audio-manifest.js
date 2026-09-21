// English and Japanese plus selected localized audio use Piper; earlier multilingual clips retain OpenAI TTS metadata.
export default {
  "version": 2,
  "provider": "Piper + OpenAI",
  "config": {
    "model": "en_GB-vctk-medium",
    "lengthScale": 1.15,
    "noiseScale": 0.333,
    "noiseW": 0.333,
    "voices": {
      "dad": "p226",
      "son": "p227",
      "roxy": "p225",
      "zoya": "p228",
      "chad": "p232",
      "krinzh": "p229",
      "max": "p236",
      "narrator": "p230"
    },
    "modelSha256": "4e9fc85ab9009385319fc6bae7f55577f8a2d7ee77fd9159a5500eb6531f41e6",
    "configSha256": "7f85e6391ed0f7f46e4abd19345929a16be931a0c9945086f96692dce2087fa8",
    "openai": {
      "model": "gpt-4o-mini-tts-2025-12-15",
      "voices": {
        "narrator": "cedar",
        "max": "ash",
        "zoya": "marin",
        "dad": "onyx",
        "son": "echo",
        "roxy": "coral",
        "chad": "ballad",
        "krinzh": "nova"
      },
      "languages": [
        "ru",
        "es",
        "zh",
        "uk"
      ]
    },
    "piperMultilingual": {
      "version": "1.8.0",
      "models": {
        "ru_RU-denis-medium": {
          "sha256": "15fab56e11a097858ee115545d0f697fc2a316c41a291a5362349fb870411b0a",
          "config_sha256": "831c860dac0b5073eaa81610a0a638ec23d90a6cf8e5f871b4485c2cec3767c8"
        },
        "ru_RU-irina-medium": {
          "sha256": "8ff38212d23da300bbe3705c645e6e5b9475f0bfde01558eb17813e22acaaaaa",
          "config_sha256": "c2ec28bb38e2b59e93b959b3e40348c1afebbd272f30fed5d41205d08e98a9d7"
        },
        "es_ES-sharvard-medium": {
          "sha256": "40febfb1679c69a4505ff311dc136e121e3419a13a290ef264fdf43ddedd0fb1",
          "config_sha256": "7438c9b699c72b0c3388dae1b68d3f364dc66a2150fe554a1c11f03372957b2c"
        },
        "ja_JA-hi_fi_captain-medium": {
          "sha256": "5eafa1610fc7a0ff2e7fde9cbe0972d876266e23d8db331727eb2466f19460eb",
          "config_sha256": "542eb0b6389cd89ca02ae662700e1dec49ebf1b612821c4ed2e1d1ca4e0d257c"
        },
        "zh_CN-huayan-medium": {
          "sha256": "9929917bf8cabb26fd528ea44d3a6699c11e87317a14765312420be230be0f3d",
          "config_sha256": "d521dc45504a8ccc99e325822b35946dd701840bfb07e3dbb31a40929ed6a82b"
        },
        "uk_UA-ukrainian_tts-medium": {
          "sha256": "7920419ac5f6fd8b6450520f24b52ed5a319cb53dd018fbcd71c9e079cbac84f",
          "config_sha256": "4e96e72917ca9b94edc77d6ccfee03a73f450ba2fc1ca93c2e562bc014e5aa55"
        }
      },
      "story": "size-isnt-the-point",
      "languages": [
        "es",
        "ja",
        "ru",
        "uk",
        "zh"
      ],
      "stories": [
        "change-mind",
        "compliment",
        "dad",
        "dad-dating",
        "hot-mic",
        "netflix",
        "return-hoodie",
        "size-isnt-the-point",
        "translator"
      ]
    }
  },
  "clips": {
    "dad:1": {
      "text": "So. Did you sleep with Anna?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/6acf9534894dcf90c4fd33fa9482e18cafe7059e284ae6affc53728c5a7a3bda.mp3",
      "duration": 1.9673469387755103,
      "sha256": "ee2dbe65ad49ad2d2bfa74c2b75bc6526990c375c9402adbc172c137ef8b0eee"
    },
    "dad:2": {
      "text": "Yeah. Eight hours. Fantastic mattress.",
      "who": "son",
      "voice": "p227",
      "src": "audio/15eebc28f94254fd1eae93d87e3c0ffbd29a1a5dfe6e73e5f93b3968cd0ab9ab.mp3",
      "duration": 3.2122448979591836,
      "sha256": "5c82e26dce6707a4a8a8e948a4ebc04487ceaadf1884a38d5099737c2607996a"
    },
    "dad:3": {
      "text": "Don’t be a smartass. Did you get laid?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/3ef20fea719fc7b9b2e0d0b37f0fa86606c91973f291fb69287b49e40251871b.mp3",
      "duration": 2.582675736961451,
      "sha256": "c5a76deedd56b1a67470d24e51acf93bd79e7587b465a82e691ea739009bccd3"
    },
    "dad:4": {
      "text": "Yes, Dad. Horizontally. On the mattress.",
      "who": "son",
      "voice": "p227",
      "src": "audio/534033bbc9ad427ba01de8bb2751883b0ca88a737456afcb0b662801a927e5d1.mp3",
      "duration": 3.270294784580499,
      "sha256": "d42caa2d4aedb1fc41ee7fe70cdebf3fa4ae3a4769e11e133aafdbf04beff5b0"
    },
    "dad:5": {
      "text": "Your dick. Her pussy. Am I being clear enough?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/d382edac783e7544033de93af53d920030b9b8c114a0e70a8810aabcb097bf6c.mp3",
      "duration": 3.339954648526077,
      "sha256": "fad26bb620a4a3934decd9a120e6965aceaf911f5469cb503bca9c0f81504fde"
    },
    "dad:6": {
      "text": "Anna doesn’t have a cat.",
      "who": "son",
      "voice": "p227",
      "src": "audio/5206b218b5f798fa85a2988b72275fab22510386f70b2f34ab1498c677bc9946.mp3",
      "duration": 1.5003174603174603,
      "sha256": "74f5f4615056cc07ef974f09761141e998a7f786bbcfc1eebb20480c32cf811e"
    },
    "dad:7": {
      "text": "Not a cat. Pussy. Twat. Cunt. The downstairs department!",
      "who": "dad",
      "voice": "p226",
      "src": "audio/4ebe643dc38bc13f2be49f4e9590f67371d02eaf0dbbb131989279d5c72b5859.mp3",
      "duration": 5.260861678004535,
      "sha256": "18c1fa9a8459f38f78efbd7abceb6d6c419669220b97f8f5cfc790a42d636a73"
    },
    "dad:8": {
      "text": "Dad, she lives on the ground floor.",
      "who": "son",
      "voice": "p227",
      "src": "audio/e7d0fe5cbfabe10892ceee1eac857e73301af11a836de72d4647ec6efc7e396f.mp3",
      "duration": 2.022766439909297,
      "sha256": "93bc770b6f1266e8e7939bf02d93ffdbf15c7375e5d3cfa898fc65c5f5bcf308"
    },
    "dad:9": {
      "text": "Fine. Her vagina. There. A proper word.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/47f8c0cfe289a90a01dcbc8da0da4b7e8370f4c8377748c25ddac6beeda73f34.mp3",
      "duration": 3.7489342403628116,
      "sha256": "5302b7a50f302aff5b0a96af6c9f4efadcc003827a4de30d3cbf8d7409c60f13"
    },
    "dad:10": {
      "text": "If you mean the outside, that’s the vulva.",
      "who": "son",
      "voice": "p227",
      "src": "audio/c706e299a9b43ddcdf30b7182b7d67754991666565390f6238b119c3065cab92.mp3",
      "duration": 2.289795918367347,
      "sha256": "493babc5c4c059d6ea1e2da22d35bfac774cea6aed9807eaff726ff6d6566742"
    },
    "dad:11": {
      "text": "I’m trying to have a father-son talk, not pass a fucking medical exam.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/3353d42d2f3a71d1dfded096eac6e2cbaff52b050e25ae717541ca84081719a8.mp3",
      "duration": 4.100952380952381,
      "sha256": "f873b2edf9d4452190e40212c03d54d0a1afd66b246c64bba93746fd078b8e5c"
    },
    "dad:12": {
      "text": "Vulva outside, vagina inside. Your turn, Professor.",
      "who": "son",
      "voice": "p227",
      "src": "audio/0d974890b87df26c8ab34290e52733ac8ecb965117e1b27b1719446f1adc9dee.mp3",
      "duration": 4.06875283446712,
      "sha256": "64695bf25045401086db7d7ef6be504d023460f2cd8187e355b5990b406a4e08"
    },
    "dad:13": {
      "text": "When I was your age, we just called it a fanny.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/1aecfc9ecbaf7c9e21a197fdc76688f89765e02aa8d7298d45f163272ff876e8.mp3",
      "duration": 2.614875283446712,
      "sha256": "e9709e3bc7118b310a921a58176027cd392513f68ea10e1faeb3e43cfd0ad709"
    },
    "dad:14": {
      "text": "In Britain, maybe. In America, that’s a butt.",
      "who": "son",
      "voice": "p227",
      "src": "audio/b087267859f0d788ea7fd9f01cbba8d68dacb96b42d3eb38ed1616a6b10086ef.mp3",
      "duration": 3.674013605442177,
      "sha256": "eab7c6d16a7b77af0bbdc4cd2d7da9df0750d105a64c55c558d02ea0b6c1becb"
    },
    "dad:15": {
      "text": "So the same word changes body parts at passport control?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/099680a92fadbd073e76a298680ad0860243cb4f1f24e35ee8be50b63daebeb9.mp3",
      "duration": 3.2766439909297054,
      "sha256": "33b037238128eafeb21b7615c084a5740def8ebca00343e3af00077c29701b37"
    },
    "dad:16": {
      "text": "Anyway, my sex life is none of your business.",
      "who": "son",
      "voice": "p227",
      "src": "audio/b91cb423953e34d8f53fea26c8abb2352f731ed2a40a44613ae7c7ba7c958467.mp3",
      "duration": 3.0328344671201815,
      "sha256": "59d149be3b39259b9fe4d51ae4453ec5fa8f22ae045a39063c94c30082e9b1b1"
    },
    "dad:17": {
      "text": "Fine. How was the tea?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/ea4fc48872b58d1cb8d7ce4565d2fe2dcfaf821b729b76512034f8c9275933b8.mp3",
      "duration": 1.9441269841269841,
      "sha256": "62b0554f53614809f854a48bf3a63ee52ff916b10043ea359bd42823c336760c"
    },
    "dad:18": {
      "text": "Hot. But don’t get excited.",
      "who": "son",
      "voice": "p227",
      "src": "audio/b246b81a734641189a17b943b5c83ad7ad33648c9efb26fe99c93115612f29af.mp3",
      "duration": 2.0718367346938775,
      "sha256": "e49354a87f0cbeb8f0128c0f0d7d77d7f245a84b5dd2fa6bcfa7be42ef8aa103"
    },
    "change-mind:1": {
      "text": "He was nice. I went back to his place. Then I changed my mind.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/96c152112a44d57025566b769c84a7f1a6bd53805280c99341799cb47c3a615d.mp3",
      "duration": 3.966893424036281,
      "sha256": "1180edd82fd2d972611fe16268c06165a84e694dbd3ca62e94ebd81bd37faf1b"
    },
    "change-mind:2": {
      "text": "And?",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/946326a7364a6d24026b54a3178e57f261d7f086af6c04fccf9efa3f14a60ee6.mp3",
      "duration": 0.6992290249433106,
      "sha256": "38b8252ac0cfebbd168cbbcbf00edaaf8a938485d3df191ea9bbde64d37d7b68"
    },
    "change-mind:3": {
      "text": "Can I just leave? Even then?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/fb23f926970e3b6ecc10a047c651f2ac21b6d06cd9e9c203d07cfc5d1e533d16.mp3",
      "duration": 2.0950566893424036,
      "sha256": "a5302d1e1a68907110ae71ef6cfdf02bde5583609c28ad8fa2c5b51f79737258"
    },
    "change-mind:4": {
      "text": "Yes. You can change your mind at any point.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/609f71e6e92f146988c4c15c0fb9f038d1c9fc041d4ac3db29a8a76aafac23df.mp3",
      "duration": 2.7568253968253966,
      "sha256": "d6dfefba13b9f9a342e0540985e157d63281b25b67740e7dc7cd087e9bdef6b2"
    },
    "change-mind:5": {
      "text": "If his dick is crooked and you don’t want to fuck him, don’t.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/29b729fd494c601b7d30c4fe05317bcd6cdd322a22d10443a10a35a4d37a4f5f.mp3",
      "duration": 2.9515646258503403,
      "sha256": "6837ce1ceca7009b1a0ea95c702e3e389212da5858dc2cd1734a43f23936efdd"
    },
    "change-mind:6": {
      "text": "What if his dick is perfectly straight?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/070439d8b6cc61365bbcad1d5599dcad3f148f722d3672145d388c4e0217276c.mp3",
      "duration": 1.999546485260771,
      "sha256": "23a754abc3069eafc8515e2675b7517a35f03a268bc470cd5fdddb046470b8b9"
    },
    "change-mind:7": {
      "text": "Still not a fucking obligation. You’re not a building inspector.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/8dc65d1a6d7ecd7777cfd8bca1b039f7caf473cb8c8a03c33ff6612f3726bf81.mp3",
      "duration": 3.720453514739229,
      "sha256": "9dfe151725ea38cafdbdb34ca5fe0f20151a6b2720adde974534bb3bb2e1a842"
    },
    "change-mind:8": {
      "text": "So I don’t need an excuse?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/8d4dd79efb3f58c1987e05cb78db202fe706546ebc8f9560440b111ebf5701c0.mp3",
      "duration": 1.5699773242630386,
      "sha256": "cbbbd8d5dd7378765527ad4a79ade8427a797811f9c6e6d890e5d064ed17fb52"
    },
    "change-mind:9": {
      "text": "Exactly. Maybe you’re tired. Maybe the mood’s gone. Maybe his pillow says “ALPHA”.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/a42e2612d41183ab21fe044645deffff1a3458eabcdd55d599f8b51e6f0fa18c.mp3",
      "duration": 5.606530612244898,
      "sha256": "471173585dac333c43923f2aaeeb3d44dc7ae7736f6cf21db9513f29669300a0"
    },
    "change-mind:10": {
      "text": "His pillow DID say ALPHA.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/f91159f0194a4fcdb6854c3d34bf7322111a75018a63a5d4dc54141376642e82.mp3",
      "duration": 1.5931972789115647,
      "sha256": "35a7539b3b27eb026713bfbf767839bd464fd57d6ca7d76763a788ef957777fb"
    },
    "change-mind:11": {
      "text": "Jesus. Even the bedding is a red flag.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/c26c4e126766737f112aceb7f166545d7af16a8ed01128841dd3f543dd0ba01d.mp3",
      "duration": 3.058684807256236,
      "sha256": "bf15ca210b9c5a11c4d118cf8497cb70d90c4653082117fb3dd8137adfcd3a06"
    },
    "change-mind:12": {
      "text": "I’m not in the mood anymore. I’m going home.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/73baf5192237cbdc7826642e316f02c3ff77e49650101de1454eb82850b8be5b.mp3",
      "duration": 2.408526077097506,
      "sha256": "de0df3d315383c5ca4be2ce462dfff9a1f465efad6ba87566426f2e18f513429"
    },
    "change-mind:13": {
      "text": "He said, “But I bought dinner.”",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/d8c40d95cdad694a6adcc0ac869cac1521474fa2973efea093d3b234e4a001a1.mp3",
      "duration": 2.0718367346938775,
      "sha256": "7b32b21722abefb931cfdd14c540d67a3ae6ce4e3c97f566c4388a614a3ba687"
    },
    "change-mind:14": {
      "text": "Congratulations to him. He understands how restaurants work.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/38d70c7f127ee239512bb004a6c762881d6610c44f8f8f1b6c2679bb587ea9e2.mp3",
      "duration": 3.6159637188208618,
      "sha256": "275c11462092cde68791b5862ce717575cb1e05afeace32f0de144dcbfa432f3"
    },
    "change-mind:15": {
      "text": "Dinner isn’t a down payment on sex.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/8df9bed458fd36b5392aad9c25fadfcc540986871b4c428e3e570285ab0f8f32.mp3",
      "duration": 2.533605442176871,
      "sha256": "0485fbeec1259fbc2115e08ebda74b511fa83c110e029cad04d774dfcb74b8b0"
    },
    "change-mind:16": {
      "text": "I left. He called me a bitch.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/20375cc9c79c620cf6da91b78f3fa55eb3df3fa2585c34b0bfdd92b85504dee4.mp3",
      "duration": 2.2343764172335603,
      "sha256": "eef43c105418cea936bcc8e4c5f400284af82bb0fb8af4e647b3634d81feaa14"
    },
    "change-mind:17": {
      "text": "And you called a taxi. Excellent division of labour.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/773c362ed8779dc7ce785f12a0cde7dc244088dfa962f0a113284ac9ea9376cf.mp3",
      "duration": 3.3489342403628117,
      "sha256": "22cc9e623ae51327bdf1cff60cf36025b6bac9f4cd37d9b0c28845a63d01f898"
    },
    "compliment:1": {
      "text": "Your playlist is shit.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/0e1bc9e67a31cc185151514e0c3db1cc379056e2b2f3e7be6dabc3351a82e5fe.mp3",
      "duration": 1.3377777777777777,
      "sha256": "e370845cf22d1946ae4afe4d5a30694acd06ed4ae12eb0c2ec763b88573d0ec1"
    },
    "compliment:2": {
      "text": "Sorry. My playlist is WHAT?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/3ae22e50de2f61192542b6ba4cea8fe76a5ed7c7885e5743dadf4ce133c11cfe.mp3",
      "duration": 2.304036281179138,
      "sha256": "c8adaf95a6d2abf8dfb20e154b43278acb7735b18f46fb04ab28ab3adc0699e4"
    },
    "compliment:3": {
      "text": "Shit! Like, really good shit!",
      "who": "chad",
      "voice": "p232",
      "src": "audio/80ff185baa5a9afc189fdacce72a6e941233eef1fed9703d9a19b5be470e6dc0.mp3",
      "duration": 2.0950566893424036,
      "sha256": "9d25f9247f2336646c6262ca0d2c85b42bc5581e89cceec2e3ac69d1ec38feda"
    },
    "compliment:4": {
      "text": "Your playlist is the shit!",
      "who": "chad",
      "voice": "p232",
      "src": "audio/156d44d3799cc76f376271f5162e2f44f3e44100d6e03ced4aff3327ac0190b1.mp3",
      "duration": 1.5235374149659864,
      "sha256": "a0b0ed22935878d80d30de1064224b6a07c957612ae2aa2330ad96fc8eb6388d"
    },
    "compliment:5": {
      "text": "One tiny word. Huge fucking difference.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/579adbb9c2e6e04223925468dd330cf03b75680bb0c7939a27007776847b2fcc.mp3",
      "duration": 2.6291156462585032,
      "sha256": "1e80ba100eb337140750cd73f4201e04f3ca33c0217a9474db288c5c71515d4b"
    },
    "compliment:6": {
      "text": "Okay. You’re a bitch.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/30c94bb25ef101df2c86f56089ae2ec8c0c9f490d5bbdbede5ac6157f82ca061.mp3",
      "duration": 1.8744671201814058,
      "sha256": "2384c3e1b5d0f81812e9ab6cce1db6308cad37e2d319d0d3d1a25e013425c693"
    },
    "compliment:7": {
      "text": "Do you have a death wish or a broken dictionary?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/0c97cdde62538defbb5a255383503063c4427259f83042a10c3b7e6df9abd161.mp3",
      "duration": 2.823854875283447,
      "sha256": "b739e0309b6ea248c3a56d7adad0ef243251a31cb426763be94e91b8baf9e297"
    },
    "compliment:8": {
      "text": "I meant it as a compliment. That came out wrong. Sorry.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/13623607d403b4871c8102433f1286a316bbc0530602751d619b35693ba14867.mp3",
      "duration": 3.2122448979591836,
      "sha256": "672d49284fd7ba3f9da7bf1a441d3844db9b82814e7136c1a8c89e7c2643608e"
    },
    "compliment:9": {
      "text": "A rapper called herself a bad bitch. She seemed happy.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/804e5534f1673595159733a9aaaa62ddb63843aa4d77b2a0a5daf69599145f22.mp3",
      "duration": 2.9890249433106577,
      "sha256": "148bebd3ac821ac563971fabbe11a651ea402efc6d4c8c590052c40133b03b54"
    },
    "compliment:10": {
      "text": "She called HERSELF that. You called your hostess a bitch.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/89c21fe3253cf97e3926ee603c40c1d3128640cf4cf1f0a51e769190a2a4ed9c.mp3",
      "duration": 3.232834467120181,
      "sha256": "58ff252745489bceb977bde7259db90eaad628a01bb7595304ff2a124856cf6a"
    },
    "compliment:11": {
      "text": "Context. My natural enemy.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/0ec9bbd112ab19c8fabf4bad3cc5965a0f6e15cc5cfb92ed44b0d878f7ee2e5c.mp3",
      "duration": 2.222766439909297,
      "sha256": "0a1c44c5fc01682c759216011364e51985d2eda14910cab3865874320e974fcf"
    },
    "compliment:12": {
      "text": "Try: ‘You’ve got amazing taste in music.’",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/84f6f1772cdcbaf8e5bb6a95ad25c8cf22ad06be1f4595f6559dea787ca66cf7.mp3",
      "duration": 2.6523356009070294,
      "sha256": "de9a33222fb52fe3c988afdc77f83866e4510a78b200390048d39eb76825ebdf"
    },
    "compliment:13": {
      "text": "You’ve got amazing taste in music.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/1e44023630ffe73718368e9f7ddb7640bd9b28634a906a83d64836989cd6330b.mp3",
      "duration": 1.7325170068027211,
      "sha256": "ad3f03cb4e0f1735e382118329ec0c058ed16c94bd39684382c60563c56de70e"
    },
    "compliment:14": {
      "text": "Thank you. See? No casualties.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/22a102344fdb3ef61fd3cdd7b661f7733c2b87c982243e16eeba0c11b8c240c2.mp3",
      "duration": 2.9916553287981857,
      "sha256": "72cd1c9b32dbcf1be5144cf82add98f789fb2011f4a34e2c11de6278461126fd"
    },
    "compliment:15": {
      "text": "So ‘you killed it’ can mean ‘you did brilliantly’?",
      "who": "chad",
      "voice": "p232",
      "src": "audio/04a88c368cfbff04d1acde303635797301ceda3bfcc98f33ba6d8978c9097241.mp3",
      "duration": 1.8021768707482992,
      "sha256": "18e4dbbb1d0b09b3e7f783cceefe710c7a71b996223fcb2dea4860a2e42b8edc"
    },
    "compliment:16": {
      "text": "Yes. And “please leave” means please leave.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/bcf546b08a1c6da571b620d6b3a6617614d65c33dcbf6aa8a750b221b236e75c.mp3",
      "duration": 2.6407256235827665,
      "sha256": "fc5eba19237420bbdb98a19c36e00207190f9a6c738fde845572a3675a353543"
    },
    "compliment:17": {
      "text": "Finally. An expression I can’t fuck up.",
      "who": "chad",
      "voice": "p232",
      "src": "audio/ecfc1b130c275e0a87535608897cf82888e46b0cc61c0a761630f30f850aa9ef.mp3",
      "duration": 2.4549659863945577,
      "sha256": "f64221c3cedfad103388f7d657c478539b4a355d9c66961721e30aa4cb227047"
    },
    "netflix:1": {
      "text": "So… Netflix and chill?",
      "who": "max",
      "voice": "p236",
      "src": "audio/b2f734f454678582cfb173fa11af90e28b1be032644e686b3d6ba1fc237216f1.mp3",
      "duration": 1.4190476190476191,
      "sha256": "d3e0fb854fb6b014d936a763fb7c95bd9967d0c144c3acd21bb1883774652e63"
    },
    "netflix:2": {
      "text": "Absolutely. I found a documentary about sewers.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/d4654baa856045b56a1bcb1fab7931cf52b5e0b9e8aec5075bd4f016efedc611.mp3",
      "duration": 3.174784580498866,
      "sha256": "1a6b33219b1551da194e49127953f7b3f8f9e251b5eb115938edf02f2dc88e22"
    },
    "netflix:3": {
      "text": "That’s not quite what I had in mind.",
      "who": "max",
      "voice": "p236",
      "src": "audio/481a80ce77ca358beb3a4715e5d1f607a741b78f29d2514ddc2ea69166288aab.mp3",
      "duration": 1.8718367346938776,
      "sha256": "5ead7900805e1c40e4fe6e4a43df4c01ddcb1bbb18285e5c6fe38d828b420262"
    },
    "netflix:4": {
      "text": "You mean… a documentary about septic tanks?",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/023074a903b3e4580aeda42e5c23cbe67627f1bcd00dad47d7dad12fdd72961d.mp3",
      "duration": 2.30140589569161,
      "sha256": "75c130aeb92f36e8ba441f1f3cd6bb9cd462a0b18fd915416176d5ec784e4714"
    },
    "netflix:5": {
      "text": "I was trying to make a move.",
      "who": "max",
      "voice": "p236",
      "src": "audio/33751a49f5be41af833a68ea1e0b5ac9650dd8b34d0c0bcdb2c1422d682875b3.mp3",
      "duration": 1.5119274376417233,
      "sha256": "242e7cc7e80408bd896eba0d7199a944f2882c3059e0caa978ff7583a33394c4"
    },
    "netflix:6": {
      "text": "There’s room on the other side of the sofa.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/8052571d1f0dff0c9f0b4f60550f0de29a1174c07a7b47e85f58cd9c54ed6570.mp3",
      "duration": 1.9531065759637187,
      "sha256": "c5cfef991a42e6f5baa20a0f22da17f316ca4a9abe1ad035fcb235fcf33ab5fd"
    },
    "netflix:7": {
      "text": "Not a furniture move. A romantic move.",
      "who": "max",
      "voice": "p236",
      "src": "audio/9d721bb2d92b05aae30ec58fb56fa52bf64783d99de6c97005ab193317213664.mp3",
      "duration": 2.7568253968253966,
      "sha256": "019764c9ebc74df1a0311c25e4f70bb8835d48720e783aaa7b8ec0597b9bfc88"
    },
    "netflix:8": {
      "text": "Oh. I’m only here for the film.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/47beff7a57ff3011575ad1caa34bb6f0697db6e2897c70c7612733b0f2d5f39b.mp3",
      "duration": 2.176326530612245,
      "sha256": "55f5261789d0d6a5d6aac5600fafb611cc20a4a3ea231519a9d31de73d1340d1"
    },
    "netflix:9": {
      "text": "Fair enough. No pressure.",
      "who": "max",
      "voice": "p236",
      "src": "audio/41dab2e286c8ac2cc54d78794cc4279a54cb9e34eb1faa0e77e6c5f3b92b018d.mp3",
      "duration": 2.0137868480725625,
      "sha256": "db10dbc1f89a119f8371ecbd93bbcd53ba944efd3a84ef3b025b307e19b82e91"
    },
    "netflix:10": {
      "text": "Good. The sewers have enough pressure already.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/8b78d783e9a684f134a0155d19ab5be4e9bc9a07c34374ca327b87572c52a344.mp3",
      "duration": 2.6523356009070294,
      "sha256": "131c8b75ef3c71c86a17e2fd4907e83adf4b1e3a9eeb5e722ea2f5f7700c6172"
    },
    "netflix:11": {
      "text": "Are you seriously into this shit?",
      "who": "max",
      "voice": "p236",
      "src": "audio/9d09d2574445754c8ad8b5b18c76011e67a0368a0edf26f09871655ae4d2535f.mp3",
      "duration": 1.5699773242630386,
      "sha256": "8e28a4cd654ba04a1fb5f9407a5ab83f75e1b14316996423b29753a78af42c5a"
    },
    "netflix:12": {
      "text": "Yes. Literally. That’s what the film is about.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/e23839c9192114f8bcc12bb891349fef13080adcfa2ddff8b63b8af74f695d54.mp3",
      "duration": 3.9785034013605443,
      "sha256": "ed5b0638dfda65ee9686dfd40966be8c1c85d9c94fbaaaae17dcaaac83c85379"
    },
    "netflix:13": {
      "text": "I even changed the bedsheets.",
      "who": "max",
      "voice": "p236",
      "src": "audio/a73c669d9c384e535aedb7cef20c18d286614cf481ea6318c1fec4a1a9338c9e.mp3",
      "duration": 1.6280272108843536,
      "sha256": "fdaa46116423a28ebf9a13af50ec0604e8251271946f469542df780895c8e3d2"
    },
    "netflix:14": {
      "text": "Good for you. Hygiene isn’t foreplay.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/b5af506d9cd16b1fbf2bf388e6b2a64c4e4208080059d5f5844766a7e5c3c151.mp3",
      "duration": 2.3853061224489798,
      "sha256": "210d6b0b6ee72b98d97634bfcee4335a1e9f448723c482e907825d37034f29a4"
    },
    "netflix:15": {
      "text": "Fine. Pass the popcorn. What’s a fatberg?",
      "who": "max",
      "voice": "p236",
      "src": "audio/64adad2820ce8bb10712d24ed39783546ce07b87317e44664de39b116099d11d.mp3",
      "duration": 3.1658049886621313,
      "sha256": "cb9791d70a6351f6a5e556347d826bce9e6df8dc25e5a21767720ebf1d1f4435"
    },
    "netflix:16": {
      "text": "Finally, a man asking the right questions.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/90860a44555a9dec2c9e372ff59e39188c8c322e9be2c5817824be8fadc0e74f.mp3",
      "duration": 2.336235827664399,
      "sha256": "5b5b7031f4b9989cc222d4112e1d847838fa6e04373dc4cc32184537916fc872"
    },
    "netflix:17": {
      "text": "This date went down the drain.",
      "who": "max",
      "voice": "p236",
      "src": "audio/38c0b1fbc17941bd32c0b6e3e810ebb97221617c9f7a591e16180ee3970daf8d.mp3",
      "duration": 1.5351473922902494,
      "sha256": "3bd3c8a7d574f550c94f1127da9bfa8bacf3e1ab677553dcb957747de9ea8d0b"
    },
    "translator:1": {
      "text": "Draft one: “Fuck off, you self-obsessed prick.”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/1395a8545fab7a3bc7b52c6c7e2f6f661acc24602c7f72eb0287296b843ab820.mp3",
      "duration": 2.2692063492063492,
      "sha256": "534a338436f2b7dc6a6512e7cc239e038ed373203acdc606d5a4778442162a6b"
    },
    "translator:2": {
      "text": "Clear. Concise. Possibly not the tone you asked for.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/db9defe034dfc8750fa709e9cd463e2aeef454b7a4f218793807ae80e3c5189d.mp3",
      "duration": 3.665034013605442,
      "sha256": "e755ef381a1bc26a2e9382e3c2da73903fa8d58d7a548c4dda60177143c87bce"
    },
    "translator:3": {
      "text": "I asked the translator to make it warmer.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/4c884909284f09057f707ffd287366cde8b8af9962ca9c2aaeed0882cb0153b9.mp3",
      "duration": 2.069206349206349,
      "sha256": "d3692c290f33e9d2b08243b07bac838c3609459d1d39ddb4ecd76a2843433135"
    },
    "translator:4": {
      "text": "Did it say ‘Fuck off, please’?",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/c800398ea7496a4d9a0ef25469ac6d614778ca95ab58dfc7586c393eaf0fd059.mp3",
      "duration": 1.8370068027210884,
      "sha256": "5ab094c89cff214c12785be6de8a1bae7580e4f7fb9721febfc52a426465f59e"
    },
    "translator:5": {
      "text": "“Dear self-obsessed prick, kindly fuck off.”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/14249ac46243bb964de596a7a12d46476b0ea91f9627f8c13d52525fd8433685.mp3",
      "duration": 2.571065759637188,
      "sha256": "ca75253dc9eeee8bb1719326a29954c72df3b6c819f17fdbc5f41529331f09ef"
    },
    "translator:6": {
      "text": "Ah. Corporate hostility.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/8084c8c511807bf73ffc4337fb49d1919c26d38ea90e0ce95b1e9aa9a924c2e3.mp3",
      "duration": 2.1066666666666665,
      "sha256": "9b05c26ba8e5b25c538d13838490bcf3b3d4905d2fd2678cea564734d63358e1"
    },
    "translator:7": {
      "text": "I’m not interested. Please stop messaging me.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/492da4179599adf9566df5516a5716858cc0d46f38f9d7d4b978d97b5c108023.mp3",
      "duration": 2.5594557823129254,
      "sha256": "6636734d579624544d29edb1f9a75323db714ed2ed89d40e20f5b089d33986a8"
    },
    "translator:8": {
      "text": "That one. Send that one. Delete the others.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/1c3d551706e1f65bbaf25ad12a3881baad813d8970fee8721adc8b2dc1dc4558.mp3",
      "duration": 3.1193650793650796,
      "sha256": "5a95a4663c39307502f7562b30d7f5d6777a6ca9eb9055612b26a69f92d54682"
    },
    "translator:9": {
      "text": "There’s a button that says “Send all”.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/e5700b2ea3f15bb98f1cbcc0761b633f5cb614dbe0cfdeb4d627635b72e5168a.mp3",
      "duration": 1.720907029478458,
      "sha256": "5d6fa7dfc351199f2d924ddd7d42089792cf3e8326984217b82a9340f2ef5977"
    },
    "translator:10": {
      "text": "No! Send only the last draft!",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/b3ae25ce41224dd1e8abcd0cd0a45f1f7db2200d731e3c8cdbff86628a76dc5b.mp3",
      "duration": 2.513015873015873,
      "sha256": "65cdcf65170dd82d1998489e3c07c8c7fe4f7c4f70b5d7b7f83eea580ec54c8c"
    },
    "translator:12": {
      "text": "Too late. He’s reading my entire character development.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/c61d87d88c119ac2c021357f07ae6aaa3be5cdea1461afbf1c0ce5d8b70651a1.mp3",
      "duration": 3.058684807256236,
      "sha256": "970ad5149b9f0493f124519d2cf17c16837545ccd833bf2dc07b4a68b19ffe47"
    },
    "translator:13": {
      "text": "From “prick” to “please”. A moving journey.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/d60f3da05d45563a9cf3b4865ef24a97e241e6a9f3c3e5d7c7a80e12ddae8e5a.mp3",
      "duration": 2.6639455782312926,
      "sha256": "d68500b68a81ee5e697844c19f37f6d407f88b8d11cba65f475bfe248865a0c7"
    },
    "translator:14": {
      "text": "He replied: “So… is that a maybe?”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/300370659aee7baa2eeb186cb83eba8459df8662a83cd478c1cfcf9275dd01d2.mp3",
      "duration": 2.0370068027210886,
      "sha256": "90567b4e6f674dbd79a3a5d779b6080b32bfe463803854e40d953c0dcef9be09"
    },
    "translator:15": {
      "text": "No. It’s a no. Don’t contact me again.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/121525a1ec3d113d4676fcb98ce22182f7daef73cf918823b31a39dfffbc4216.mp3",
      "duration": 3.293514739229025,
      "sha256": "e3782afb716b3cec94d7596e10a5a3668faf7434fc3a0b7c620bde8333579b1d"
    },
    "translator:16": {
      "text": "No translation needed.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/cae6e0ca22416d7305c57b679dc750568e8d0d58f865b102f396791e63a63c68.mp3",
      "duration": 1.6164172335600906,
      "sha256": "a21b732ad49adec32cccc5ea9f8e306bea3f86b61acca37f0ed364f8b107e619"
    },
    "translator:17": {
      "text": "For once, my English isn’t the fucking problem.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/a24ee15dd19aeca16a1271fcd258a31069b3f80a4dd36448f3e285299c50f477.mp3",
      "duration": 2.1504761904761907,
      "sha256": "2eddec4cd5e73040443a10029626b3aaf6fe851bc791bc79a60fc5d71a1680ed"
    },
    "hot-mic:1": {
      "text": "This meeting could have been a fucking email.",
      "who": "max",
      "voice": "p236",
      "src": "audio/e3593d62064acd6eb2431e346cea7fe51681e7fd0299a521bae95f962773d85a.mp3",
      "duration": 2.022766439909297,
      "sha256": "ef0646492df28f57e44d58e80a44dc1b45caf57633e350baf654806bc7dc8b8f"
    },
    "hot-mic:2": {
      "text": "Max. Your microphone.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/9b928d9cbd39b60df7f77f332c5d1c916fb0bbd597a0a85c61fb2065db736607.mp3",
      "duration": 2.1066666666666665,
      "sha256": "aa7b9cc27183effc8f4f20c448bb718d35f61da8e7e9d67a583beee2573a5da6"
    },
    "hot-mic:3": {
      "text": "Relax. I muted it.",
      "who": "max",
      "voice": "p236",
      "src": "audio/dc6ab0cd5d668df6a519ddbc2543b312d4e7de8e06791640d476b6dfaaeb02b2.mp3",
      "duration": 2.1182766439909297,
      "sha256": "48063490f0a68a8e2ddf71f52e7fa4973190211dac275f65e9cb0036a8b953cf"
    },
    "hot-mic:4": {
      "text": "Your mic is still on.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/e64363ed977f8fddc554065013601087d84dc2e673246163bebe133dc12a43f6.mp3",
      "duration": 1.3029478458049886,
      "sha256": "3a7191cae8b7a2a07a3927605bf4b2b41d2c73bcffc3db9115d9a91074721257"
    },
    "hot-mic:5": {
      "text": "Then why is the little speaker crossed out?",
      "who": "max",
      "voice": "p236",
      "src": "audio/b6d9889b7df0236a92bda62c568c242d635fc670d701e0aa701dc6b3feeefcba.mp3",
      "duration": 2.1156462585034013,
      "sha256": "eb98ffb2c5b3eeb2f7cc3e3c3a9994a2aa64af9f8430d8e0070c2893ed568ba2"
    },
    "hot-mic:6": {
      "text": "You muted your speakers. You can’t hear us. We can hear you.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/8777461fbed19c3ac7dadcb452e2faa9c5b73df68472f8cb818006f387d02d67.mp3",
      "duration": 3.874013605442177,
      "sha256": "641ca8757cf1f629c44aa7ad32d0b32dee3ed8594146e5425989a59e6586e1f9"
    },
    "hot-mic:7": {
      "text": "Oh, shit. How much did you hear?",
      "who": "max",
      "voice": "p236",
      "src": "audio/244f7ab0a4899cb2af2416d2a3515a4db02146fc83b82a711fe0e25460027125.mp3",
      "duration": 2.141496598639456,
      "sha256": "347fd521a4fb19a60a87fa9bbae88495f42becfccf9edb46c6652a3d844aee16"
    },
    "hot-mic:8": {
      "text": "Your audio cut out for a second.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/0bf1c6962be80723890de524e8412579fbef3661edfd61e8bbc447523be37968.mp3",
      "duration": 1.9066666666666667,
      "sha256": "f12c4b8c343308b743068c4866cf9fd2ca3d2a560709a5b78b396112739d153c"
    },
    "hot-mic:9": {
      "text": "Which second? My career depends on it.",
      "who": "max",
      "voice": "p236",
      "src": "audio/4022445ab5f311acdac6a7e11ad1106e8163c508f8b6a6be97a9a2acac5580a4.mp3",
      "duration": 2.6175056689342404,
      "sha256": "4a5467e073fe1c92a6762b985b82dea0593b36c7b5533422cb09c547d7a92d06"
    },
    "hot-mic:10": {
      "text": "We heard “full of shit”. Then you froze.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/ed336401685f06ef635f48979550649e868de4eb4f82e876d000dc6c7d76cda4.mp3",
      "duration": 2.605895691609977,
      "sha256": "c7ade92c2e98a0b901181cbe74d672d3d9b1b7d840c25c1ec005f9639924c0ed"
    },
    "hot-mic:11": {
      "text": "Maybe I meant the spreadsheet.",
      "who": "max",
      "voice": "p236",
      "src": "audio/8e7af19277e3887b568a27eab6515c1da62d33e951955788643fa28609d071ac.mp3",
      "duration": 1.5467573696145125,
      "sha256": "7c1be11a5ee76476a7ea4e54257017d8de0d59065640f85c08a07b61d96e2328"
    },
    "hot-mic:12": {
      "text": "You said he was talking bullshit.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/d0bb4ecf162a7e97943258361ec488e28e1f18bd3e28eb11b4e2e2d78b9ed6e7.mp3",
      "duration": 1.8950566893424037,
      "sha256": "e70ca1bfe9bf6a8f008cdbf614722959fc8c44779cb05623a0ad29dfd212846c"
    },
    "hot-mic:14": {
      "text": "Brilliant presentation. Visionary. Life-changing.",
      "who": "max",
      "voice": "p236",
      "src": "audio/335916c3de3f86d535fd00ac7051273fbecf5862f9de95c186f35baca12122c0.mp3",
      "duration": 3.8275736961451248,
      "sha256": "240610b2166ab92f63f6c596e122ead722e4d73b5488f8b0a11e2243d6095bf6"
    },
    "hot-mic:15": {
      "text": "You don’t have to kiss his ass.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/c718ac3c02bcf83b80bf5273ddf48605f64b959b141557dd199ccbb2978c8b0e.mp3",
      "duration": 1.6512471655328798,
      "sha256": "a12e166c04fdd55196f2d66b80757dc99f096dafade435fc322aa85bb35ff5c7"
    },
    "hot-mic:16": {
      "text": "I’m trying to keep my job, Zoya.",
      "who": "max",
      "voice": "p236",
      "src": "audio/0f70be7e9bf7038b4d581eef7b029594236359ca8d333de9c3f0bbc82fe84db5.mp3",
      "duration": 1.7905668934240362,
      "sha256": "8302d5cb899fde632db43417d54f25feef1f6a93623218a516a294c83e5f67d5"
    },
    "hot-mic:17": {
      "text": "I think we could make the presentation shorter.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/7eb437eb264dbb2d417e40f1c9c9df1aaf0575e963a61e6e353c1d3a5daa89ba.mp3",
      "duration": 2.4291156462585035,
      "sha256": "a8bfaf94d6bc4c014b4cc2dc44156ac33726692eb79692f436e112cad5b94a46"
    },
    "hot-mic:19": {
      "text": "Fuck.",
      "who": "max",
      "voice": "p236",
      "src": "audio/83f3f893cf563a4c3c713e857ecf38cef5da9b219b6a97f22418027c1f1ca6d3.mp3",
      "duration": 0.6411791383219955,
      "sha256": "51537ef353a17096a4a41e8501b71d48420bcdc126f22817f45643386c83d3d6"
    },
    "hot-mic:20": {
      "text": "Still on the call, Max.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/de9f824dd1a525ed399e744543d76e03c14bd8398c02ff0dfd653de56b4fb669.mp3",
      "duration": 1.6280272108843536,
      "sha256": "94f787b34d63b070c280c6b6da60731e717fbd12e6a879165b86a45be03fd95e"
    },
    "hot-mic:21": {
      "text": "That was my feedback on the deadline.",
      "who": "max",
      "voice": "p236",
      "src": "audio/58d79ce10ff989694e1457e3e56500581a18429ca5cbff612307c96d85927ff1.mp3",
      "duration": 1.9182766439909298,
      "sha256": "1df0f0a477bd24b5c76fc23229afe9bca64bcb94dea0ef626d077d18ca3bac33"
    },
    "dad-dating:1": {
      "text": "Experienced daddy looking for a partner.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/a4951d2ac707afc3ee57ffd7be82fa404cf4ad72eacbc36005811afe482c3929.mp3",
      "duration": 2.2665759637188208,
      "sha256": "03ccf0fc26ab8e829fa1a681dfacf2520142fe6e5fff37f5c74d645ae9c45206"
    },
    "dad-dating:2": {
      "text": "Dad. Why “daddy”?",
      "who": "son",
      "voice": "p227",
      "src": "audio/cf68e5268a3d85b20c354b899802ef0fea58a0f99db83ce859c930c9d840452a.mp3",
      "duration": 1.7815873015873016,
      "sha256": "4329c1f67dcc2c43111974f304fdf8e9557997a9ce8ed8d63aacac06e18518b6"
    },
    "dad-dating:3": {
      "text": "Twenty-three years of experience. You’re my reference.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/7822191da6b0a9a3ec0be090be16e58fbe0c9438c17ed3f37c9348c94c56e41e.mp3",
      "duration": 3.232834467120181,
      "sha256": "c370c5b1bae1276723e4e06d57cfed51f0524e816c409fc41b2e106cd253533c"
    },
    "dad-dating:4": {
      "text": "It can sound sexual here, not just parental.",
      "who": "son",
      "voice": "p227",
      "src": "audio/f3643bb629478491b2de97003559787e547dbc963466fabfd8f9856701cd6758.mp3",
      "duration": 2.916734693877551,
      "sha256": "233d326b5b670b41841dea08def83c557db8c0f784f3f08ffd9ddbb118553190"
    },
    "dad-dating:5": {
      "text": "Fine. “Single dad. Good cook. Own teeth.”",
      "who": "dad",
      "voice": "p226",
      "src": "audio/dde5b2a97b14a4782f2d50f32ff48541390ddce31984c50cd72b0ec1cf20e62d.mp3",
      "duration": 4.134693877551021,
      "sha256": "dbba0ae36c0dad412e415c294abb4d7fb94db9f9844e9ace3dfde524dc1bcc6e"
    },
    "dad-dating:6": {
      "text": "Keep the first two.",
      "who": "son",
      "voice": "p227",
      "src": "audio/0f9979da0b95cdd98e17c9b94ab85147304805149a564b7cfd63a3261b9c1209.mp3",
      "duration": 1.2448979591836735,
      "sha256": "f8c3ea721dd7be5216e178f095a29910e8ceeb5b7d87a556ad3858fa06488c07"
    },
    "dad-dating:8": {
      "text": "Yes. My son. He’s right here.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/0aac5c55a3375b3550bbda77e72239eedf72374e4b1da335846d4eedd9a3bc5d.mp3",
      "duration": 2.8987755102040818,
      "sha256": "bf6c328e35a195c0090a205fbb537f9f113e1c07c7b4d7649f2c372d39cae497"
    },
    "dad-dating:9": {
      "text": "No, I’m single.",
      "who": "son",
      "voice": "p227",
      "src": "audio/cf3b66df7acd06d471cd2132f49c9dfc3e1a10484f07e17976d0704a1c0d1bde.mp3",
      "duration": 2.1272562358276645,
      "sha256": "57e727a0a8486abd765c2d3804a5d6d31cfd682668917b94c773625bf0197761"
    },
    "dad-dating:10": {
      "text": "She says she isn’t looking for anything casual. I have a jacket.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/9754762c3004464f63ba95a78e638469d39a19c66998a57d1b4b6917f93055ea.mp3",
      "duration": 3.674013605442177,
      "sha256": "3ccb7c91d480b70a36b6fb7e6e9eb084b28b04a136bdc1735791f7b7a1648334"
    },
    "dad-dating:11": {
      "text": "She’s not asking about your clothes.",
      "who": "son",
      "voice": "p227",
      "src": "audio/dd0915473a9ac676e626cee6a277c5d22d1b178d9fd177dc994bda4da18586d0.mp3",
      "duration": 2.092426303854875,
      "sha256": "95c874b8a4080365c42b41d14bf3800d82139de00f01f0d7cd4979c45dc27289"
    },
    "dad-dating:12": {
      "text": "I’m looking for something serious too.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/091133689299b4bc3ce434b5067000a7e7f8aad26ad6f83b1d02383c3f79b5ab.mp3",
      "duration": 2.1040362811791384,
      "sha256": "08ea25007601083b12f86d4f1be149e8a6685a1c85786227ce37aa58f7d3a088"
    },
    "dad-dating:13": {
      "text": "Can I add that I’m good in bed?",
      "who": "dad",
      "voice": "p226",
      "src": "audio/22e47263c473092da53f916bf54c3d6159db91ff64c24d6d58f22863e1d5ee8d.mp3",
      "duration": 1.686077097505669,
      "sha256": "6c19fcba9f898ce97ee9a1438de2744c00e660af8de269d8303cc0120d868c98"
    },
    "dad-dating:14": {
      "text": "Are you about to tell me you sleep for eight hours?",
      "who": "son",
      "voice": "p227",
      "src": "audio/cc9eebab0431417b66dc072406ba131240c3e6de30209a3a5d21c119a8143f1a.mp3",
      "duration": 2.289795918367347,
      "sha256": "734500e4fe202e419b8de1aaf44fa2f77fb4f49db57d65d8052cc766e285b00e"
    },
    "dad-dating:15": {
      "text": "Nine. And I don’t steal the blanket.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/5b63bbf79e87f8bbf6045fc041cf023b6221f05ac63ea7fcb0a58e79da0d5276.mp3",
      "duration": 2.489795918367347,
      "sha256": "0b3f49de54f94957cb15dcfa821880267b6b04ef4df32032a2a7509ced806c64"
    },
    "dad-dating:16": {
      "text": "Let’s save that for the second date.",
      "who": "son",
      "voice": "p227",
      "src": "audio/8788370874fa7213a749172493770b75f94170313aba86627ef5e52499453b90.mp3",
      "duration": 1.9182766439909298,
      "sha256": "c66f6ee48fb40bfb1a20d7180a0046f850a2672e0a070017ce63a3eb8e7e4690"
    },
    "dad-dating:18": {
      "text": "Coffee sounds good. How about eleven?",
      "who": "son",
      "voice": "p227",
      "src": "audio/d5f3a0e455adb772e0acc3498bdf50f712274e9f47fa2f34cd24cc15ff747e87.mp3",
      "duration": 2.6291156462585032,
      "sha256": "440d1bbf5fc09462663162902c4d01cedc391b65dcd233120ebd6ac0ebc17443"
    },
    "dad-dating:19": {
      "text": "Done. She sent a heart.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/a2ec731fe73823e8e08a3077eb4b975b034102e517f91e8607deead1c62d1f84.mp3",
      "duration": 1.8048072562358277,
      "sha256": "3478e4cde8e40bf8d4eeedc45ede251ba3d3d8cfe643708a36cb46c0d441c12f"
    },
    "dad-dating:20": {
      "text": "See? You didn’t need “experienced daddy”.",
      "who": "son",
      "voice": "p227",
      "src": "audio/bca6917eaee5a7423161dd95cdb9afbccf7325428315f8a304b87fe98ae816e1.mp3",
      "duration": 2.547845804988662,
      "sha256": "0e587c63b95192ace927561737c5c98d71e3d4059e8d42494b7832f5fb22ea7e"
    },
    "dad-dating:21": {
      "text": "She hasn’t seen the drill yet.",
      "who": "dad",
      "voice": "p226",
      "src": "audio/52b6ad1c8dc67de64265588f8b25f83e2759e832badd75d0ff59375050647127.mp3",
      "duration": 1.5583673469387755,
      "sha256": "7cdfe9826b0efe3e8c657a797dd8c958d0ff4dcb315dd6eccbf88dfabdb9e8ca"
    },
    "return-hoodie:1": {
      "text": "He says, “I miss us.”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/a3a6b37b80fbe5668928ceb8162e4493208e879976ddae24ec1c6c2f97ba7bcb.mp3",
      "duration": 1.7235374149659863,
      "sha256": "dc1e0b99da48bf17506ec71c64577b04641a386aff10331efe57e3e494707659"
    },
    "return-hoodie:2": {
      "text": "And what do you miss?",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/25b9b750fd467d1c54c9bf3079580ee686a77ae5a6171e2409d7a6e6741181d1.mp3",
      "duration": 1.2100680272108844,
      "sha256": "d77df0bad7c6a3c310dd31b95f894b027424cd0be6a497b90f3790c226aab88d"
    },
    "return-hoodie:3": {
      "text": "My hoodie. It had pockets and emotional stability.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/28185054c233c963c568d81a78458017210513fd80bcb0e2000a19b9b4f01ec6.mp3",
      "duration": 3.174784580498866,
      "sha256": "1db3dc63ea13b718403d51c135c31d1c49fa304ff6a41dae60df99d77f923a74"
    },
    "return-hoodie:4": {
      "text": "I want my hoodie back. I don’t want to get back together.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/e7cc83adce31faf1690ea6498e2ce253d9ba49ffd49f5663f7e90932f83d98e9.mp3",
      "duration": 2.872925170068027,
      "sha256": "350f0eb3c8c3f7fe296fea3298eb02c64b1c4d235b132a96323660c897e55e06"
    },
    "return-hoodie:5": {
      "text": "Now he says, “Can I come over?”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/7d3a6fe08d33cfebca76b6765931be045dae541bee29d3f8e51e6dcb987309e8.mp3",
      "duration": 1.932517006802721,
      "sha256": "d85ba19206e86d695c3e55ba2ac572efb9fb776d7b7751a42d4d5eb2f93b1b9b"
    },
    "return-hoodie:6": {
      "text": "At two in the morning. Very efficient delivery service.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/970d32659ee3b4d7337ea0cc8830244d93ca0e91fe7f792667908944a9765d03.mp3",
      "duration": 3.337324263038549,
      "sha256": "a72deefa12ffeac040e3df324105ef1a2c0f51dfa5bf6d4448a7594af5990789"
    },
    "return-hoodie:7": {
      "text": "He wants to visit. At this hour, there may be a hint.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/2d490e718a74572c3d1d7f43b9878687df102e4873fc8543d38333c64507c8ae.mp3",
      "duration": 3.360544217687075,
      "sha256": "c16b7506e3a1cf8dbad13c8d09873ac3a4d1b6c9fcde60696aae31a7669ed6bf"
    },
    "return-hoodie:8": {
      "text": "I’ll say, “Leave it with the concierge tomorrow.”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/3c8da6ae32867e741ce5d8a03bcebddae30e3dedf2737a79e56275d7c840a2ce.mp3",
      "duration": 2.0718367346938775,
      "sha256": "9bb5da5080bd7d5cd431cea6524aa8cc783b9ca064e5f3385f757e8691a7658a"
    },
    "return-hoodie:9": {
      "text": "Good. A location, a day, and no sofa.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/69a00990681d5483f3bd390c3bcbd079ba989c7c2726e54e410aa93c530fd1a1.mp3",
      "duration": 3.453424036281179,
      "sha256": "8f3d725d92c5e09dbb7125b6aa037f09e9cbce6803f073167323b2a997c2a560"
    },
    "return-hoodie:10": {
      "text": "He says he needs closure.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/72f049fc238d2a085cccf29fe038d0f2ad756e0345c66bc1ddf6b07867a65abb.mp3",
      "duration": 1.5003174603174603,
      "sha256": "8a2cde23c8c87a27736a0490a3e3e6a847bd93a1bb12a6efe6e533f67aa47ffb"
    },
    "return-hoodie:11": {
      "text": "Does he think your hoodie is a counselling service?",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/2fa5bce76e57b7eb861d9e649fac256579950b712da78aaa7faa9e6586e6553b.mp3",
      "duration": 2.7309750566893425,
      "sha256": "817949364de3d4dda7366c7281f75227ec2773946c105745e03567721e124bb7"
    },
    "return-hoodie:12": {
      "text": "I understand, but I’m not meeting tonight. Please return the hoodie tomorrow.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/3e610143fda607248fff5b61b3312846e41651513bb7dce565e7181922860504.mp3",
      "duration": 4.115192743764172,
      "sha256": "5b05f8dc8b0a75ff58f79983bede24eda4f4cb0debcadaf61db0ec9a03291fac"
    },
    "return-hoodie:13": {
      "text": "I also want to write, “My hoodie has a zipper. Start with that.”",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/defa987d3472f354c241e016c2af97c4ee7fce362854a9ec7f324a93d2e4d921.mp3",
      "duration": 3.4444444444444446,
      "sha256": "2f7fa2759a1d9d88ff1001500c90c6e7fa6049e489fce32676232f34a196d402"
    },
    "return-hoodie:14": {
      "text": "Excellent joke. Terrible logistics. Send the address.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/1d1da883ad88bc71b3436980ed6b31df1980ad0137d1aa1f546529c967889de3.mp3",
      "duration": 4.00172335600907,
      "sha256": "2020a244cb2a93f57cad544d6dc2a8cd029b5b44521314f386b9f53b77d6bd66"
    },
    "return-hoodie:16": {
      "text": "He’s asking for another season.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/e2cfb29e0eb7cdaaeaf6b3bb794be9a9abcaea572446058ecc73a69b941ad61a.mp3",
      "duration": 1.7905668934240362,
      "sha256": "afe37efbc17e88eb4eab5236431684d91dc86508690ca2a0aad95c05a66e153e"
    },
    "return-hoodie:17": {
      "text": "Thanks for returning it. I’m ready to move on.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/eff514428deefdd605fb43c5c322ba531ec0958a0f5ef501f30fb119df99b817.mp3",
      "duration": 2.6755555555555555,
      "sha256": "cd033313d481e5a438e2a91e6db56ab2136cccdb37e570ac767d2df9f6249cd3"
    },
    "return-hoodie:18": {
      "text": "How does it feel?",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/36817aa55b264cc953969faaef264841613d751379cd40aad7843916cdaac867.mp3",
      "duration": 1.1752380952380952,
      "sha256": "09e9bd0187801e8a5ce3888303303583c85a9f1731083d32e9454f52d6925c99"
    },
    "return-hoodie:19": {
      "text": "Warm. Slightly smells of bullshit.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/62dfb1f10642dba2040cda350d1241421a73f6144f1e435472fbadb344d27b3a.mp3",
      "duration": 2.3388662131519276,
      "sha256": "f0da64a8d7b0907565953db2e5d3b177bb9ee8875a8f2f810bf6bd849b773453"
    },
    "return-hoodie:20": {
      "text": "That washes out.",
      "who": "zoya",
      "voice": "p228",
      "src": "audio/03a61c17051e95da946c7bcdc5667a78ded4f8b2c82cf5a1426f8e2ad10bd162.mp3",
      "duration": 1.2797278911564627,
      "sha256": "2b2a7945ab0cb4674f324667c8dc0dfeddb81a0a3afeca136db2c9d9a8be7170"
    },
    "return-hoodie:21": {
      "text": "Finally. A problem with clear instructions on the label.",
      "who": "krinzh",
      "voice": "p229",
      "src": "audio/a729cbbd96ddb6bf957495c3d47051fb8de80e057088c7ae3db8c621309f979e.mp3",
      "duration": 3.128344671201814,
      "sha256": "474325ee56b3ffedd02d488a1f8ddc19d04da9bdcb9e5d7ccb08e0cee04159ae"
    },
    "hot-mic:0": {
      "text": "Max, 28, and Zoya, 31, are on a work call. Their manager is presenting his twelfth slide about keeping things brief.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/471a3f6f56be1f8a5543cfb4b31d8e3e85f83e452f546975ab39356d451c3aeb.mp3",
      "duration": 8.085804988662131,
      "sha256": "1e5dbf3b87f3c7de39ff854cf8221bc86d3a1e2c192aa66f45f9767c1ae87580"
    },
    "hot-mic:13": {
      "text": "A message from the manager appears: “Max, any feedback?” Max turns his speakers back on.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/3cb603838fea824f552a7d58249aeb93a96b138402ebf853e52b4df7f57846dd.mp3",
      "duration": 5.461950113378685,
      "sha256": "703143ecdbea51187ab7b7edaa16213f478e0379d10e6531e5b03e3914d2f4d0"
    },
    "hot-mic:18": {
      "text": "The manager replies: “Great. Send us your shorter version by lunch.”",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/458954fc9de60612c91bbfe5b9fd24e33b628d405b0f1d2fc5a14c5f0b57ecc8.mp3",
      "duration": 4.2339229024943315,
      "sha256": "18e63645a00c68ad860a759b391dd9f2626e83b1346c678823ca4970ed3eaa57"
    },
    "dad-dating:0": {
      "text": "Dad, 52, is single and ready to try dating apps. His son Lyosha, 23, offers to check his English profile.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/7258ffa3fbd07b1803c7122d581a9ff9c81506a376cd9af60ab9bf8e2f456df4.mp3",
      "duration": 8.852063492063492,
      "sha256": "f50c31601602322fc5356b6720ae587b036ca416ab4e51a785922c7614c88c35"
    },
    "dad-dating:7": {
      "text": "A woman named Helen, 49, sends him a message: “Are you seeing anyone?”",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/20ebd5f3cc6a17112183c71f70265a690cd51252e394f8d9073a158c2ef9a495.mp3",
      "duration": 5.6709297052154195,
      "sha256": "fcb3436ce342a958761b2bb760038c7801efac0a4aec1336d3f827678a6da606"
    },
    "dad-dating:17": {
      "text": "Helen writes: “Coffee on Saturday?” Dad starts typing about his pension.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/3f5a0eda86a99620f3d5353572efec6f2da05ee5d2aad3271b41a54e0b6fbf03.mp3",
      "duration": 4.544761904761905,
      "sha256": "9beafdbd4ad7a5dff6e68ac4fa7f07932b461bf24be518c0f0c36b9ce3cbee05"
    },
    "return-hoodie:0": {
      "text": "Krinzhina, 26, gets a late-night message from her ex, 30. Zoya, 31, is helping her stay focused on retrieving an expensive hoodie.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/0385c225b4e8691f08816e38bc54adfb06c2b4d006adb521e36ff69a95a02357.mp3",
      "duration": 9.885351473922903,
      "sha256": "44cdea03a89346b07e65fa4d3d6ba41b93750dc2826ebeebb1283eef7bb914a1"
    },
    "return-hoodie:15": {
      "text": "The next afternoon, the concierge hands over a bag. There is a note: “Maybe we can start over.”",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/837fa57c66e32c30c518704d1fe214ac8aef1f165ee42c5f7b4713d69b6fe2f9.mp3",
      "duration": 5.952199546485261,
      "sha256": "e50a3a20fe277c61c33bf46d1854b81688ea93db1caf0df783e1e66f515dd946"
    },
    "dad:19": {
      "text": "The kettle whistles. For the first time all morning, someone has something useful to say.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/7fc45048f5deb0ff00610cd0fd84bfc7b9118fea9e259c964ff1cc8d368d2f05.mp3",
      "duration": 5.357460317460317,
      "sha256": "b5bf0e2306d736140e14c9d784040aece876f18357b5db5b4d42a88482b1560f"
    },
    "change-mind:18": {
      "text": "Zoya slides the fries over. The fries come with no fine print.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/99258b92e9874e27c78352b12de7ea022d92594175d22d61c90d35b9b0fd1de7.mp3",
      "duration": 3.8946031746031746,
      "sha256": "d02a0118a3585d15d2998cafbdb1573e35adb8cfadfd60a06cddd1c754d43f77"
    },
    "compliment:18": {
      "text": "He pushes a door marked “PULL”.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/e07c4d4e233b7e4e2a13d0ec1c326ca6c6ea81459c1258e5ab3aa0535254c51c.mp3",
      "duration": 1.9414965986394557,
      "sha256": "4ef2c1bd33aa17fbe0f8e18999b44646402bc772ca5bcbc11a91adeebd436086"
    },
    "netflix:18": {
      "text": "A pipe appears on screen. Krinzhina asks to watch that bit again. For the first time all evening, Max is actually intrigued.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/e4b204dfc1d1494af6e889016119aa0cbfc5cc14aa8a93907020fe9fdfcc50e9.mp3",
      "duration": 7.519546485260771,
      "sha256": "bff71ba3da0fb28537ce8eef33502ba3d790580ea2812fb30652f13d1ef306a2"
    },
    "translator:18": {
      "text": "She blocks the contact. The translator suggests: “Make the text friendlier?”",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/1fd033a2b8603b305d5673b98abd1ec1f0044a45a42ee02332e5710b5f0c1eb0.mp3",
      "duration": 4.593832199546485,
      "sha256": "b927e5bed74d8d7b20a89db7da3dcd0b87fcef94613781c415dcf68ac58b0acf"
    },
    "ru:hot-mic:0": {
      "text": "Макс, 28, и Зоя, 31, на рабочем созвоне. Начальник показывает двенадцатый слайд о том, как важно говорить кратко.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7157dd397f7257cae2c5525a831aab848913e31521b25ed2458e8a7d2c483bb3.mp3",
      "duration": 11.4,
      "sha256": "7157dd397f7257cae2c5525a831aab848913e31521b25ed2458e8a7d2c483bb3"
    },
    "ru:hot-mic:1": {
      "text": "Этот созвон можно было заменить ёбаным письмом.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/88e2f0a9fa9e40d61f91b1619c124fcc3eeda6bec3aa260875f9be5efa221b2c.mp3",
      "duration": 4.656,
      "sha256": "88e2f0a9fa9e40d61f91b1619c124fcc3eeda6bec3aa260875f9be5efa221b2c"
    },
    "ru:hot-mic:2": {
      "text": "Макс. Твой микрофон.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/afed5d05a6822d67ecf784300504bbd5621d987e0c416ad6e28d52c27ec40d5c.mp3",
      "duration": 2.568,
      "sha256": "afed5d05a6822d67ecf784300504bbd5621d987e0c416ad6e28d52c27ec40d5c"
    },
    "ru:hot-mic:3": {
      "text": "Расслабься. Я его выключил.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4b24164e84b5d72cec2286e7a42b9c36de7f43f4d416bef317e68a33ccb6d0f5.mp3",
      "duration": 3.6,
      "sha256": "4b24164e84b5d72cec2286e7a42b9c36de7f43f4d416bef317e68a33ccb6d0f5"
    },
    "ru:hot-mic:4": {
      "text": "У тебя всё ещё включён микрофон.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/85aa289e23b82b4ea99d7c914473608a5a0c869893bc7d9efc616820599267cc.mp3",
      "duration": 3.264,
      "sha256": "85aa289e23b82b4ea99d7c914473608a5a0c869893bc7d9efc616820599267cc"
    },
    "ru:hot-mic:5": {
      "text": "А почему тогда маленький динамик перечёркнут?",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2d67f94ffbcbc6e0475ac4e1df1660f31bd04dcb3323c2e1f3ecd3fd85afab31.mp3",
      "duration": 4.464,
      "sha256": "2d67f94ffbcbc6e0475ac4e1df1660f31bd04dcb3323c2e1f3ecd3fd85afab31"
    },
    "ru:hot-mic:6": {
      "text": "Ты выключил звук у себя. Ты нас не слышишь. А мы тебя слышим.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/472571c7156abb199026f8607ac74f551ce98f1a180d2f292b081ebdaa83827b.mp3",
      "duration": 5.76,
      "sha256": "472571c7156abb199026f8607ac74f551ce98f1a180d2f292b081ebdaa83827b"
    },
    "ru:hot-mic:7": {
      "text": "Бля. И сколько вы слышали?",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/95849a958d5e40bf71ea205da1fd07d49674d3f3b96cf9de0ebd7047146871df.mp3",
      "duration": 3.864,
      "sha256": "95849a958d5e40bf71ea205da1fd07d49674d3f3b96cf9de0ebd7047146871df"
    },
    "ru:hot-mic:8": {
      "text": "У тебя звук на секунду пропал.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/99842f2c16d237a8deb0aea186c1bb8a590e216021cf23355de2880a8bb557ea.mp3",
      "duration": 2.616,
      "sha256": "99842f2c16d237a8deb0aea186c1bb8a590e216021cf23355de2880a8bb557ea"
    },
    "ru:hot-mic:9": {
      "text": "Какая именно секунда? От этого зависит моя карьера.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a95de907980badeb6d3e0d577a6f4a32ccba26501a97e1503e20ee58985a6bb8.mp3",
      "duration": 5.16,
      "sha256": "a95de907980badeb6d3e0d577a6f4a32ccba26501a97e1503e20ee58985a6bb8"
    },
    "ru:hot-mic:10": {
      "text": "Мы услышали «несёт полную херню». Потом ты завис.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ba764a5e91a937d7ed215286e81b8e3cceb0c13add81c777ce63fe2e3861b700.mp3",
      "duration": 5.16,
      "sha256": "ba764a5e91a937d7ed215286e81b8e3cceb0c13add81c777ce63fe2e3861b700"
    },
    "ru:hot-mic:11": {
      "text": "Может, я имел в виду таблицу.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c41da6c977f49bf952a7037aef38f5f66cefd9771c7fea8b0187e6a0e070b426.mp3",
      "duration": 2.952,
      "sha256": "c41da6c977f49bf952a7037aef38f5f66cefd9771c7fea8b0187e6a0e070b426"
    },
    "ru:hot-mic:12": {
      "text": "Ты сказал, что он несёт херню.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4ad0001d1d6f2f2f7ac087b2e02b36f81c6ba6969f66d64364e6192bd789822b.mp3",
      "duration": 3,
      "sha256": "4ad0001d1d6f2f2f7ac087b2e02b36f81c6ba6969f66d64364e6192bd789822b"
    },
    "ru:hot-mic:13": {
      "text": "Появляется сообщение начальника: «Макс, есть обратная связь?» Макс включает звук.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/dd4b071da18c55a58c697a4c3ad24dd65426980744a962dc828862d93245d2c0.mp3",
      "duration": 6.768,
      "sha256": "dd4b071da18c55a58c697a4c3ad24dd65426980744a962dc828862d93245d2c0"
    },
    "ru:hot-mic:14": {
      "text": "Блестящая презентация. Прорывная. Изменила мою жизнь.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a2c2881b8c69a3d255458713c140f78522131e591b10696337e6686ed7949d3c.mp3",
      "duration": 5.808,
      "sha256": "a2c2881b8c69a3d255458713c140f78522131e591b10696337e6686ed7949d3c"
    },
    "ru:hot-mic:15": {
      "text": "Не обязательно лизать ему жопу.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1b22bf27eb275b93f76050a4747f6ef924d48588f3f8d718ef1ff6c22c6fbc6f.mp3",
      "duration": 3.216,
      "sha256": "1b22bf27eb275b93f76050a4747f6ef924d48588f3f8d718ef1ff6c22c6fbc6f"
    },
    "ru:hot-mic:16": {
      "text": "Я пытаюсь сохранить работу, Зоя.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d1b378ef07e7a4c6479cd52a1915c7850574db2be6ef52e315dfa12f81ede683.mp3",
      "duration": 3.768,
      "sha256": "d1b378ef07e7a4c6479cd52a1915c7850574db2be6ef52e315dfa12f81ede683"
    },
    "ru:hot-mic:17": {
      "text": "Думаю, презентацию можно сделать короче.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/dce84bd6c297711de155482f00d3e483d2dd011bdbd8f64e5d15ded4a78cf468.mp3",
      "duration": 3.456,
      "sha256": "dce84bd6c297711de155482f00d3e483d2dd011bdbd8f64e5d15ded4a78cf468"
    },
    "ru:hot-mic:18": {
      "text": "Начальник отвечает: «Отлично. Пришли сокращённую версию к обеду».",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7438d9e19d38b80f2438ed24b80af00f108facee187bf34488e318c6a66644ca.mp3",
      "duration": 5.952,
      "sha256": "7438d9e19d38b80f2438ed24b80af00f108facee187bf34488e318c6a66644ca"
    },
    "ru:hot-mic:19": {
      "text": "Бля.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8bea7ca71071ea6f38f6c6752c28e3cfcdb4168d1c02633da4168adda7ff67be.mp3",
      "duration": 1.464,
      "sha256": "8bea7ca71071ea6f38f6c6752c28e3cfcdb4168d1c02633da4168adda7ff67be"
    },
    "ru:hot-mic:20": {
      "text": "Ты всё ещё на созвоне, Макс.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4c135b512a22dda33ddf0b8b1d6af8c0c1dfb143c9e0c174dfc48cfe9c778e6b.mp3",
      "duration": 3.12,
      "sha256": "4c135b512a22dda33ddf0b8b1d6af8c0c1dfb143c9e0c174dfc48cfe9c778e6b"
    },
    "ru:hot-mic:21": {
      "text": "Это была моя обратная связь по срокам.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0638e101c7f209ce6b04de2a4bec80cae1c761bd78596285959eea3d11110ca2.mp3",
      "duration": 4.416,
      "sha256": "0638e101c7f209ce6b04de2a4bec80cae1c761bd78596285959eea3d11110ca2"
    },
    "ru:dad-dating:0": {
      "text": "Батя, 52, свободен и решил попробовать приложения для знакомств. Лёша, 23, предлагает проверить английский в анкете.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/16661a0e16f4dbeca436322815c8e1a5802009012fd6bcddec03d81253277b92.mp3",
      "duration": 10.248,
      "sha256": "16661a0e16f4dbeca436322815c8e1a5802009012fd6bcddec03d81253277b92"
    },
    "ru:dad-dating:1": {
      "text": "Опытный папочка ищет партнёршу.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/cbb28e780055a211bf763dfac156f1dc1006209ef256235d1abe262f416c7b43.mp3",
      "duration": 3.12,
      "sha256": "cbb28e780055a211bf763dfac156f1dc1006209ef256235d1abe262f416c7b43"
    },
    "ru:dad-dating:2": {
      "text": "Пап. Почему daddy?",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0235079396e2b6a18ce6e6651d9dca98de9083fc15ddb272a4ae0c848c7a4b96.mp3",
      "duration": 3,
      "sha256": "0235079396e2b6a18ce6e6651d9dca98de9083fc15ddb272a4ae0c848c7a4b96"
    },
    "ru:dad-dating:3": {
      "text": "Двадцать три года опыта. Ты моя рекомендация.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4d1368913e534f6658b128e1212f8bb8975dbc8f38c30b327d45dba648c7c5a4.mp3",
      "duration": 5.208,
      "sha256": "4d1368913e534f6658b128e1212f8bb8975dbc8f38c30b327d45dba648c7c5a4"
    },
    "ru:dad-dating:4": {
      "text": "Здесь это может звучать сексуально, а не просто по-родительски.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ec719603670b1b2e28d45977fa3dda479f731940bd9fb12482ea9e6072c02b93.mp3",
      "duration": 5.664,
      "sha256": "ec719603670b1b2e28d45977fa3dda479f731940bd9fb12482ea9e6072c02b93"
    },
    "ru:dad-dating:5": {
      "text": "Ладно. «Свободный отец. Хорошо готовлю. Зубы свои».",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e3bb0b561ecf425f6864d57cd993b13cd5468e5eb404b80076f32f31c6fc95f6.mp3",
      "duration": 5.448,
      "sha256": "e3bb0b561ecf425f6864d57cd993b13cd5468e5eb404b80076f32f31c6fc95f6"
    },
    "ru:dad-dating:6": {
      "text": "Первые два пункта оставь.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/75eb3042abd3d6816e279ec16194c39e003af2d74b3c6246563f30a8545b3f21.mp3",
      "duration": 3,
      "sha256": "75eb3042abd3d6816e279ec16194c39e003af2d74b3c6246563f30a8545b3f21"
    },
    "ru:dad-dating:7": {
      "text": "Хелен, 49, пишет ему: «Are you seeing anyone?»",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/16cd2208e785ed683e43cbb76235f9b9b7acd3a7f0a1b0fba7f33bd35a800be4.mp3",
      "duration": 4.848,
      "sha256": "16cd2208e785ed683e43cbb76235f9b9b7acd3a7f0a1b0fba7f33bd35a800be4"
    },
    "ru:dad-dating:8": {
      "text": "Да. Сына. Он прямо тут.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/93c2a87ffd4ae638a86538e96ea5369793a4761934a101bdae544b01bc44cfd4.mp3",
      "duration": 3.768,
      "sha256": "93c2a87ffd4ae638a86538e96ea5369793a4761934a101bdae544b01bc44cfd4"
    },
    "ru:dad-dating:9": {
      "text": "Нет, я свободен.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4f40f4e61422e56c74ae595b347fe8e551e651c5d528e96b697fcb574159dc14.mp3",
      "duration": 3.168,
      "sha256": "4f40f4e61422e56c74ae595b347fe8e551e651c5d528e96b697fcb574159dc14"
    },
    "ru:dad-dating:10": {
      "text": "Она пишет, что не ищет ничего casual. У меня есть пиджак.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e8973f5a6d6e14f7aec2b0f75d04c7935183902b32ef72f1c5bcdf840e3ad138.mp3",
      "duration": 4.32,
      "sha256": "e8973f5a6d6e14f7aec2b0f75d04c7935183902b32ef72f1c5bcdf840e3ad138"
    },
    "ru:dad-dating:11": {
      "text": "Она не про одежду спрашивает.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b60c7f0533150817d6f13975ec2e0ffd4b9a7c918e2f70b0b0e9dd696c7b07a6.mp3",
      "duration": 2.712,
      "sha256": "b60c7f0533150817d6f13975ec2e0ffd4b9a7c918e2f70b0b0e9dd696c7b07a6"
    },
    "ru:dad-dating:12": {
      "text": "Я тоже ищу серьёзные отношения.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ff08dd3ec49ca2116727b8a7f43960b630f9088e11ec05168ec8a3228d268be1.mp3",
      "duration": 3.72,
      "sha256": "ff08dd3ec49ca2116727b8a7f43960b630f9088e11ec05168ec8a3228d268be1"
    },
    "ru:dad-dating:13": {
      "text": "Можно добавить, что я хорош в постели?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/102fe1e10fa74d7e94d97d7eef1750cb575c739f8333555e5c8cce315af68c46.mp3",
      "duration": 3.6,
      "sha256": "102fe1e10fa74d7e94d97d7eef1750cb575c739f8333555e5c8cce315af68c46"
    },
    "ru:dad-dating:14": {
      "text": "Ты сейчас скажешь, что спишь по восемь часов?",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c12c131378d0b0d82d7d9a1e854cd932ce24e8904e620b65e0b11b69d8f0e0b9.mp3",
      "duration": 3.504,
      "sha256": "c12c131378d0b0d82d7d9a1e854cd932ce24e8904e620b65e0b11b69d8f0e0b9"
    },
    "ru:dad-dating:15": {
      "text": "По девять. И одеяло не отбираю.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/47e847552b7f841a27a06859144fbf4f1899309579841f88beebfe8d0aafec93.mp3",
      "duration": 3.264,
      "sha256": "47e847552b7f841a27a06859144fbf4f1899309579841f88beebfe8d0aafec93"
    },
    "ru:dad-dating:16": {
      "text": "Давай оставим это для второго свидания.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/af1df3413162b69e343a7398a0025f353e3c1cf44fe3bf99a8260d00b3b938ff.mp3",
      "duration": 4.464,
      "sha256": "af1df3413162b69e343a7398a0025f353e3c1cf44fe3bf99a8260d00b3b938ff"
    },
    "ru:dad-dating:17": {
      "text": "Хелен пишет: «Кофе в субботу?» Батя начинает печатать про свою пенсию.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a07f95699e86d40392e001f79cf0a0d6ef2a1cff65975da4464d063a3cab3589.mp3",
      "duration": 5.616,
      "sha256": "a07f95699e86d40392e001f79cf0a0d6ef2a1cff65975da4464d063a3cab3589"
    },
    "ru:dad-dating:18": {
      "text": "Кофе — отлично. Как насчёт одиннадцати?",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f2d6d5f7afeb7e83f0ff6b100c08ee03fb69247a2665ad2a298f185bec292206.mp3",
      "duration": 3.864,
      "sha256": "f2d6d5f7afeb7e83f0ff6b100c08ee03fb69247a2665ad2a298f185bec292206"
    },
    "ru:dad-dating:19": {
      "text": "Готово. Она прислала сердечко.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8651a826296d3b13b4c219b4ef6e006393c4a93bfeb145ba6a065e3e36155efb.mp3",
      "duration": 3.768,
      "sha256": "8651a826296d3b13b4c219b4ef6e006393c4a93bfeb145ba6a065e3e36155efb"
    },
    "ru:dad-dating:20": {
      "text": "Видишь? «Опытный папочка» не понадобился.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6f567909c7371a98b0aecfe7a36c4de6f1ed84b416280ae44b4c82b33d68dda6.mp3",
      "duration": 3.816,
      "sha256": "6f567909c7371a98b0aecfe7a36c4de6f1ed84b416280ae44b4c82b33d68dda6"
    },
    "ru:dad-dating:21": {
      "text": "Она ещё дрель не видела.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5191ec44e35dafd977cd410e47908e74656d2d76a0005e9283e74fb4eff7d69e.mp3",
      "duration": 3,
      "sha256": "5191ec44e35dafd977cd410e47908e74656d2d76a0005e9283e74fb4eff7d69e"
    },
    "ru:return-hoodie:0": {
      "text": "Кринжине, 26, ночью пишет бывший, 30. Зоя, 31, помогает ей сосредоточиться на возвращении дорогого худи.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0393e139342f201354f72f043f7b3859656fa810e69f35f0d191e7d78559938b.mp3",
      "duration": 9.552,
      "sha256": "0393e139342f201354f72f043f7b3859656fa810e69f35f0d191e7d78559938b"
    },
    "ru:return-hoodie:1": {
      "text": "Он пишет: «Я скучаю по нам».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/360c59374c297f8f69f6eadd868115af513748737b02f7f96cce054690998a0e.mp3",
      "duration": 2.568,
      "sha256": "360c59374c297f8f69f6eadd868115af513748737b02f7f96cce054690998a0e"
    },
    "ru:return-hoodie:2": {
      "text": "А ты по чему скучаешь?",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8022c6df290785f98e3b78e5030b461cf8b8d6b2c24a221e2f36f6bbbb64c89f.mp3",
      "duration": 2.904,
      "sha256": "8022c6df290785f98e3b78e5030b461cf8b8d6b2c24a221e2f36f6bbbb64c89f"
    },
    "ru:return-hoodie:3": {
      "text": "По худи. У него были карманы и эмоциональная стабильность.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/84418161f8abc846abae1ca0ab3e968b8e33ba17c23b801287bf17cc9bf24208.mp3",
      "duration": 4.512,
      "sha256": "84418161f8abc846abae1ca0ab3e968b8e33ba17c23b801287bf17cc9bf24208"
    },
    "ru:return-hoodie:4": {
      "text": "Я хочу вернуть худи. Я не хочу снова сходиться.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7fa004a309a0071807bcbe053e5ca72dffc019ce323bedb752af161f7098a7ac.mp3",
      "duration": 4.152,
      "sha256": "7fa004a309a0071807bcbe053e5ca72dffc019ce323bedb752af161f7098a7ac"
    },
    "ru:return-hoodie:5": {
      "text": "Теперь пишет: «Можно зайти к тебе?»",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/44d52d5976dbf0af9dbba4537bb3b7338ce03f57d4cf87d838491daff3ce055d.mp3",
      "duration": 3.12,
      "sha256": "44d52d5976dbf0af9dbba4537bb3b7338ce03f57d4cf87d838491daff3ce055d"
    },
    "ru:return-hoodie:6": {
      "text": "В два часа ночи. Очень оперативная доставка.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/52a2fdf208c707c229e77b9be0f29cfc26776a9331478728c7b024c296b3bd4c.mp3",
      "duration": 4.56,
      "sha256": "52a2fdf208c707c229e77b9be0f29cfc26776a9331478728c7b024c296b3bd4c"
    },
    "ru:return-hoodie:7": {
      "text": "Он хочет зайти. В такой час тут может быть намёк.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f5eb8f2054ccdde28749921d6b3c022ed8e78401353af2d728f48fa3d71eaf03.mp3",
      "duration": 4.608,
      "sha256": "f5eb8f2054ccdde28749921d6b3c022ed8e78401353af2d728f48fa3d71eaf03"
    },
    "ru:return-hoodie:8": {
      "text": "Напишу: «Оставь его завтра у консьержа».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c63ccb055168400c61425c71941e98ce1460a06fba1fdefa656667b54972c876.mp3",
      "duration": 3.768,
      "sha256": "c63ccb055168400c61425c71941e98ce1460a06fba1fdefa656667b54972c876"
    },
    "ru:return-hoodie:9": {
      "text": "Отлично. Место, день и никакого дивана.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1d705b6847227d08a8567a02832b05b00207aa758a8dd6fdb8b53cabc52128cf.mp3",
      "duration": 4.2,
      "sha256": "1d705b6847227d08a8567a02832b05b00207aa758a8dd6fdb8b53cabc52128cf"
    },
    "ru:return-hoodie:10": {
      "text": "Пишет, что ему нужно поставить точку.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9a2bb7a4a2d671abedf7b2063d42192796ec738c5dde72408678857e502ec404.mp3",
      "duration": 3.456,
      "sha256": "9a2bb7a4a2d671abedf7b2063d42192796ec738c5dde72408678857e502ec404"
    },
    "ru:return-hoodie:11": {
      "text": "Он считает твоё худи психологической службой?",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e7278d19231ac3af2622567b0a4fe99be54a7f0453630dfb9f7cc76cb7ed6bfd.mp3",
      "duration": 4.2,
      "sha256": "e7278d19231ac3af2622567b0a4fe99be54a7f0453630dfb9f7cc76cb7ed6bfd"
    },
    "ru:return-hoodie:12": {
      "text": "Я понимаю, но сегодня ночью не встречаюсь. Пожалуйста, верни худи завтра.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0ab440329143ed24eb6cf05ed850179554c6a08d1ab25609a26ea21608e1be95.mp3",
      "duration": 6.048,
      "sha256": "0ab440329143ed24eb6cf05ed850179554c6a08d1ab25609a26ea21608e1be95"
    },
    "ru:return-hoodie:13": {
      "text": "Ещё хочу написать: «У моего худи есть молния. Начни с неё».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3e8cf7cb08176b6fd6df64916a3aaf1ea60d76b362de8dc04eee9dc6cdbc2bdd.mp3",
      "duration": 5.712,
      "sha256": "3e8cf7cb08176b6fd6df64916a3aaf1ea60d76b362de8dc04eee9dc6cdbc2bdd"
    },
    "ru:return-hoodie:14": {
      "text": "Отличная шутка. Ужасная логистика. Отправь адрес.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9f6426e81ca3f339eada1bb6a7e70314108b335866c4abdde37263ad57e7dcdf.mp3",
      "duration": 5.016,
      "sha256": "9f6426e81ca3f339eada1bb6a7e70314108b335866c4abdde37263ad57e7dcdf"
    },
    "ru:return-hoodie:15": {
      "text": "На следующий день консьерж отдаёт пакет. Внутри записка: «Может, начнём сначала?»",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/861771415a5e0e8d70f8b64d8867e607bf074ee73aecd8d75667dbdff1eb5b3a.mp3",
      "duration": 6.72,
      "sha256": "861771415a5e0e8d70f8b64d8867e607bf074ee73aecd8d75667dbdff1eb5b3a"
    },
    "ru:return-hoodie:16": {
      "text": "Он просит ещё один сезон.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ccc1a899c027f8c3d8b34405019e42175bb1f29aca76884d87068ad7f04419b7.mp3",
      "duration": 2.808,
      "sha256": "ccc1a899c027f8c3d8b34405019e42175bb1f29aca76884d87068ad7f04419b7"
    },
    "ru:return-hoodie:17": {
      "text": "Спасибо, что вернул. Я готова идти дальше.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/11e6ab3dc545fb5c24842651b07a30241a6e4dfe22f6edcce891ca0a4fb8a38e.mp3",
      "duration": 4.512,
      "sha256": "11e6ab3dc545fb5c24842651b07a30241a6e4dfe22f6edcce891ca0a4fb8a38e"
    },
    "ru:return-hoodie:18": {
      "text": "Ну как ощущения?",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9ff72dbd8a1ac5d35f8cf8de569dbbbc126db8673495c4173e66cb5ff7a90122.mp3",
      "duration": 2.52,
      "sha256": "9ff72dbd8a1ac5d35f8cf8de569dbbbc126db8673495c4173e66cb5ff7a90122"
    },
    "ru:return-hoodie:19": {
      "text": "Тепло. Слегка пахнет пиздежом.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d43b871d47dce2f9f94a18bf2c9584f40b98f77eb64ab2f14eea8b0de6c692a7.mp3",
      "duration": 3.648,
      "sha256": "d43b871d47dce2f9f94a18bf2c9584f40b98f77eb64ab2f14eea8b0de6c692a7"
    },
    "ru:return-hoodie:20": {
      "text": "Это отстирается.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c39d9345360456792fef8aee513535df3a426985a452030c6256a69e35947a81.mp3",
      "duration": 1.92,
      "sha256": "c39d9345360456792fef8aee513535df3a426985a452030c6256a69e35947a81"
    },
    "ru:return-hoodie:21": {
      "text": "Наконец-то проблема с понятной инструкцией на ярлыке.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7dde1cea210ab43d204a641cbdead2e4201ce067a637b8c48461223457e06a10.mp3",
      "duration": 4.512,
      "sha256": "7dde1cea210ab43d204a641cbdead2e4201ce067a637b8c48461223457e06a10"
    },
    "ru:dad:0": {
      "text": "Субботнее утро. Лёша, 23 года, вернулся от своей девушки Ани, 24. Батя, 52, уже поставил чайник и приготовил бестактный вопрос.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d48148b44a79bbee040b73491cb56e2d32d23c7ba0eec7db16a4bcfe90b288de.mp3",
      "duration": 12.6,
      "sha256": "d48148b44a79bbee040b73491cb56e2d32d23c7ba0eec7db16a4bcfe90b288de"
    },
    "ru:dad:1": {
      "text": "Ну что. Ты с Аней спал?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/76c7d44177ca3707038bd605358ea9d616e48a13d1153b3d770c65af4d278af2.mp3",
      "duration": 2.808,
      "sha256": "76c7d44177ca3707038bd605358ea9d616e48a13d1153b3d770c65af4d278af2"
    },
    "ru:dad:2": {
      "text": "Да. Восемь часов. Охрененный матрас.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1e9deebf608c37678a862d5327c1f56ad0cb862f8763aec8dbf0fb213d45e9c9.mp3",
      "duration": 4.416,
      "sha256": "1e9deebf608c37678a862d5327c1f56ad0cb862f8763aec8dbf0fb213d45e9c9"
    },
    "ru:dad:3": {
      "text": "Не умничай. Потрахался-то?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/34d1c46649fbc1b529782059ab6217d317c055d0bfca73cb0dabc72d44e7ac60.mp3",
      "duration": 3.168,
      "sha256": "34d1c46649fbc1b529782059ab6217d317c055d0bfca73cb0dabc72d44e7ac60"
    },
    "ru:dad:4": {
      "text": "Да, пап. Горизонтально. На матрасе.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2b843f0f487f58e0b285caf11a7ed5384b5f73bbe5cfdbed0aece8b62cf4f12b.mp3",
      "duration": 3.36,
      "sha256": "2b843f0f487f58e0b285caf11a7ed5384b5f73bbe5cfdbed0aece8b62cf4f12b"
    },
    "ru:dad:5": {
      "text": "Твой хуй. Её пизда. Теперь достаточно понятно?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/105c70d45c959a3c4c55a913c61cb1123cf2b604d4250f0e920856d2874f64a6.mp3",
      "duration": 5.352,
      "sha256": "105c70d45c959a3c4c55a913c61cb1123cf2b604d4250f0e920856d2874f64a6"
    },
    "ru:dad:6": {
      "text": "У Ани нет кошки.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/07e26458746ae2160fdfca0f56f31355626d73480a0847852622fd64685acddc.mp3",
      "duration": 2.52,
      "sha256": "07e26458746ae2160fdfca0f56f31355626d73480a0847852622fd64685acddc"
    },
    "ru:dad:7": {
      "text": "Не кошка. Киска. Манда. Пизда. Отдел на нижнем этаже!",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4d13960c2e13fc72e337d06b968f0be606f5b599a9b4c7da68c5c9652db1a3ef.mp3",
      "duration": 7.512,
      "sha256": "4d13960c2e13fc72e337d06b968f0be606f5b599a9b4c7da68c5c9652db1a3ef"
    },
    "ru:dad:8": {
      "text": "Батя, она живёт на первом этаже.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6902bb7a313dfbd9da93772d9c7c9fa4a44ad1d69802b6651b179cc4ebef5011.mp3",
      "duration": 4.008,
      "sha256": "6902bb7a313dfbd9da93772d9c7c9fa4a44ad1d69802b6651b179cc4ebef5011"
    },
    "ru:dad:9": {
      "text": "Ладно. Её влагалище. Вот. Нормальное слово.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6460700d5c84c0383e2e0e315f2b4a63f9cc14fddc0f71c438ef301a268d5c0b.mp3",
      "duration": 6.12,
      "sha256": "6460700d5c84c0383e2e0e315f2b4a63f9cc14fddc0f71c438ef301a268d5c0b"
    },
    "ru:dad:10": {
      "text": "Если ты про наружную часть — это вульва.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/730a97e63dde159921f44279b14a3b023ecb0e678c4a0aaad5a44db37f8d2faf.mp3",
      "duration": 4.752,
      "sha256": "730a97e63dde159921f44279b14a3b023ecb0e678c4a0aaad5a44db37f8d2faf"
    },
    "ru:dad:11": {
      "text": "Я пытаюсь поговорить с сыном, а не сдать ебучий экзамен по анатомии.",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5731c0120a40456f2b376e0eb09cb18099bd6f5118dc884d47d99f7a9855c96d.mp3",
      "duration": 5.52,
      "sha256": "5731c0120a40456f2b376e0eb09cb18099bd6f5118dc884d47d99f7a9855c96d"
    },
    "ru:dad:12": {
      "text": "Вульва снаружи, влагалище внутри. Теперь ты, профессор.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f686c26a4ad97aecebdfe0dcd2c0415c88fe1aef0ef0a3c912aab65ce7e8a583.mp3",
      "duration": 5.712,
      "sha256": "f686c26a4ad97aecebdfe0dcd2c0415c88fe1aef0ef0a3c912aab65ce7e8a583"
    },
    "ru:dad:13": {
      "text": "Когда я был в твоём возрасте, мы просто называли это fanny — «пизда».",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e06821131d4707a972890c7c815ef598f1e4c32315936fc8537a81cd8eade694.mp3",
      "duration": 6,
      "sha256": "e06821131d4707a972890c7c815ef598f1e4c32315936fc8537a81cd8eade694"
    },
    "ru:dad:14": {
      "text": "В Британии — возможно. В Америке это задница.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7d0df5ba02f5f8f4a03ccc1e8693b8cbe1362a877b70836ebc2d800fffb2ed5c.mp3",
      "duration": 4.8,
      "sha256": "7d0df5ba02f5f8f4a03ccc1e8693b8cbe1362a877b70836ebc2d800fffb2ed5c"
    },
    "ru:dad:15": {
      "text": "То есть слово меняет часть тела на паспортном контроле?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/56f1daf6fdd8dce972d873521ae34a29bcadf05f9fdc17ec6ccd2a075d9b1726.mp3",
      "duration": 5.304,
      "sha256": "56f1daf6fdd8dce972d873521ae34a29bcadf05f9fdc17ec6ccd2a075d9b1726"
    },
    "ru:dad:16": {
      "text": "Короче, моя сексуальная жизнь — не твоё дело.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c71f619b7cb46591c1c0c75c47dcbcf4bea5614061cdc3f20523241a03447f77.mp3",
      "duration": 5.16,
      "sha256": "c71f619b7cb46591c1c0c75c47dcbcf4bea5614061cdc3f20523241a03447f77"
    },
    "ru:dad:17": {
      "text": "Ладно. Как чай?",
      "who": "dad",
      "lang": "ru",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a794e4a8ae9283ec083c69006051e76b5c29c2f71a76aa00ab7620e86ad0df2b.mp3",
      "duration": 2.568,
      "sha256": "a794e4a8ae9283ec083c69006051e76b5c29c2f71a76aa00ab7620e86ad0df2b"
    },
    "ru:dad:18": {
      "text": "Горячий. Только не возбуждайся.",
      "who": "son",
      "lang": "ru",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2d2e6fff1e0447b04d1683dd041177760daee14d8b5fa1430ab4d4109bdf7cfe.mp3",
      "duration": 3.864,
      "sha256": "2d2e6fff1e0447b04d1683dd041177760daee14d8b5fa1430ab4d4109bdf7cfe"
    },
    "ru:dad:19": {
      "text": "Чайник свистит. Впервые за всё утро — кто-то по делу.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/45c9528f2aee192d4bd26262b3293a0593843e85253b67ac8ae259eef7784146.mp3",
      "duration": 5.304,
      "sha256": "45c9528f2aee192d4bd26262b3293a0593843e85253b67ac8ae259eef7784146"
    },
    "ru:change-mind:0": {
      "text": "Рокси, 29, пришла в бар после свидания с Максом, 28. Зоя, 31, заказала картошку и готова к разбору полётов.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/98d9d727350c072da8017fbc810e038708757cae8ee204d5781a8fe9f1843410.mp3",
      "duration": 10.848,
      "sha256": "98d9d727350c072da8017fbc810e038708757cae8ee204d5781a8fe9f1843410"
    },
    "ru:change-mind:1": {
      "text": "Он был милый. Я поехала к нему. А потом передумала.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/37dddacbebdddcead042d1250c0c1daf8be398f48ced0ccefd59a198c478c02d.mp3",
      "duration": 6.12,
      "sha256": "37dddacbebdddcead042d1250c0c1daf8be398f48ced0ccefd59a198c478c02d"
    },
    "ru:change-mind:2": {
      "text": "И?",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7bca232181cdcfd58e42f7fcb0621e705c24f76a4b38bb54b459df413cd8aafa.mp3",
      "duration": 0.912,
      "sha256": "7bca232181cdcfd58e42f7fcb0621e705c24f76a4b38bb54b459df413cd8aafa"
    },
    "ru:change-mind:3": {
      "text": "Можно просто уйти? Даже в этот момент?",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4089d26ec65640a4a40ec04d6189c10d6b062b879ec32a1a18e31c8f672d97a9.mp3",
      "duration": 4.848,
      "sha256": "4089d26ec65640a4a40ec04d6189c10d6b062b879ec32a1a18e31c8f672d97a9"
    },
    "ru:change-mind:4": {
      "text": "Да. Ты можешь передумать в любой момент.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2211a97737ae6d4a97a0eacc6aa2e374d7b2fa2ecc4d0987fa4f1711c0954519.mp3",
      "duration": 3.048,
      "sha256": "2211a97737ae6d4a97a0eacc6aa2e374d7b2fa2ecc4d0987fa4f1711c0954519"
    },
    "ru:change-mind:5": {
      "text": "Если у него кривой хуй и ты не хочешь с ним ебаться — не ебись.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/74836210305fd9854925cea4b4d7705259abb5e8f5ec096bad3220afe6ab249c.mp3",
      "duration": 4.848,
      "sha256": "74836210305fd9854925cea4b4d7705259abb5e8f5ec096bad3220afe6ab249c"
    },
    "ru:change-mind:6": {
      "text": "А если у него идеально прямой хуй?",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ab82463bb17313901c77fcbe0cd5becbe48929d910bae6373ef9e376ee8783c1.mp3",
      "duration": 4.752,
      "sha256": "ab82463bb17313901c77fcbe0cd5becbe48929d910bae6373ef9e376ee8783c1"
    },
    "ru:change-mind:7": {
      "text": "Это всё ещё не ебучая обязанность. Ты не строительный инспектор.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a1070491b35828e88b39b738abdf5b19336279a740ecf96a820b4033414d4ece.mp3",
      "duration": 6.408,
      "sha256": "a1070491b35828e88b39b738abdf5b19336279a740ecf96a820b4033414d4ece"
    },
    "ru:change-mind:8": {
      "text": "То есть мне не нужно оправдание?",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8aefad2fb656999449bb463215433d0a5d66e0c521ef371b54c9813e00e6e3c1.mp3",
      "duration": 3.864,
      "sha256": "8aefad2fb656999449bb463215433d0a5d66e0c521ef371b54c9813e00e6e3c1"
    },
    "ru:change-mind:9": {
      "text": "Именно. Может, ты устала. Может, настроение прошло. Может, у него на подушке написано «АЛЬФА».",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/68b90458616b3696ab4b76caca888c1f102893803b67ce49599c6f9d7656d2f7.mp3",
      "duration": 8.712,
      "sha256": "68b90458616b3696ab4b76caca888c1f102893803b67ce49599c6f9d7656d2f7"
    },
    "ru:change-mind:10": {
      "text": "У него на подушке И БЫЛО написано «АЛЬФА».",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d105add003b488f955be70d521b6c964be03584b939a54759c412ed197d4afb7.mp3",
      "duration": 4.104,
      "sha256": "d105add003b488f955be70d521b6c964be03584b939a54759c412ed197d4afb7"
    },
    "ru:change-mind:11": {
      "text": "Господи. Даже постельное бельё — красный флаг.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0e83c5b8d781135273f41741276b51d828031ced954714eadc0127335d432d5a.mp3",
      "duration": 4.32,
      "sha256": "0e83c5b8d781135273f41741276b51d828031ced954714eadc0127335d432d5a"
    },
    "ru:change-mind:12": {
      "text": "Я больше не в настроении. Я еду домой.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/08b8a583b6701481cb5c7a3c5db1c3e7a04ba89af1409dacd617199179413e77.mp3",
      "duration": 5.016,
      "sha256": "08b8a583b6701481cb5c7a3c5db1c3e7a04ba89af1409dacd617199179413e77"
    },
    "ru:change-mind:13": {
      "text": "Он сказал: «Но я же оплатил ужин».",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e485756c672b278376b7b7f8189f2cf95561982ada920ac6628f1b6469771214.mp3",
      "duration": 3.768,
      "sha256": "e485756c672b278376b7b7f8189f2cf95561982ada920ac6628f1b6469771214"
    },
    "ru:change-mind:14": {
      "text": "Поздравляю его. Он понимает, как работают рестораны.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/87328e8a8bc874b616d9b6b73f1bea54f270d102b17201738366c48991680f13.mp3",
      "duration": 4.92,
      "sha256": "87328e8a8bc874b616d9b6b73f1bea54f270d102b17201738366c48991680f13"
    },
    "ru:change-mind:15": {
      "text": "Ужин — не первоначальный взнос за секс.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ed6a350276b03754e847db05ef2170ca57355f3caf135411a66af2f25bdb2bbb.mp3",
      "duration": 3.36,
      "sha256": "ed6a350276b03754e847db05ef2170ca57355f3caf135411a66af2f25bdb2bbb"
    },
    "ru:change-mind:16": {
      "text": "Я ушла. Он назвал меня сукой.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c05931bd454173eb28c7f1124a0b784060928b1a2483cfe570dc515df83ae4f5.mp3",
      "duration": 3.768,
      "sha256": "c05931bd454173eb28c7f1124a0b784060928b1a2483cfe570dc515df83ae4f5"
    },
    "ru:change-mind:17": {
      "text": "А ты вызвала такси. Отличное разделение труда.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e7989a5143e6a001f44b2a91dc980ea0463dfb79e328417d9d08e6c6cb09ea6b.mp3",
      "duration": 5.568,
      "sha256": "e7989a5143e6a001f44b2a91dc980ea0463dfb79e328417d9d08e6c6cb09ea6b"
    },
    "ru:change-mind:18": {
      "text": "Зоя подвигает картошку. У картошки нет условий мелким шрифтом.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/dded4db376f50983d94d8e6b494bc7b5d7a61ce046186ee5b8b64db9a212cd66.mp3",
      "duration": 6.648,
      "sha256": "dded4db376f50983d94d8e6b494bc7b5d7a61ce046186ee5b8b64db9a212cd66"
    },
    "ru:compliment:0": {
      "text": "Чедрик, 27, пришёл в гости к Рокси, 29. Она включает свой новый диджейский сет. Он решил звучать как носитель.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/972e749fdfdc46661ededb5adf351450bf2db76089133c01e20c732b6bdc8ad3.mp3",
      "duration": 9.96,
      "sha256": "972e749fdfdc46661ededb5adf351450bf2db76089133c01e20c732b6bdc8ad3"
    },
    "ru:compliment:1": {
      "text": "Твой плейлист — говно.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ae926be90e8b2df3443ada4807bf578d80e776eaf28018e117d4d9aef6c87402.mp3",
      "duration": 2.616,
      "sha256": "ae926be90e8b2df3443ada4807bf578d80e776eaf28018e117d4d9aef6c87402"
    },
    "ru:compliment:2": {
      "text": "Прости. Мой плейлист — ЧТО?",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/966d2c58496a4c3f106625dcade466e4e80307b571217e56c941e97a71cc1ea6.mp3",
      "duration": 3.456,
      "sha256": "966d2c58496a4c3f106625dcade466e4e80307b571217e56c941e97a71cc1ea6"
    },
    "ru:compliment:3": {
      "text": "Говно! Ну, типа, очень хорошее говно!",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ad8897e2abe7b3f2e320793a9b4eb73c410bbb956d608b89fd63d35df23c551a.mp3",
      "duration": 3.96,
      "sha256": "ad8897e2abe7b3f2e320793a9b4eb73c410bbb956d608b89fd63d35df23c551a"
    },
    "ru:compliment:4": {
      "text": "Твой плейлист — это охуенно!",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/aabc85f92b09782f2d80418d992ecf9a96af65004c1b4fa4256566a1e0c09e66.mp3",
      "duration": 3.456,
      "sha256": "aabc85f92b09782f2d80418d992ecf9a96af65004c1b4fa4256566a1e0c09e66"
    },
    "ru:compliment:5": {
      "text": "Одно крошечное слово. Охуенно большая разница.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f6b80f2c9437fcd11ee1d7213bf7a68e9b9f048d202e670c3e1413e7642639bd.mp3",
      "duration": 5.256,
      "sha256": "f6b80f2c9437fcd11ee1d7213bf7a68e9b9f048d202e670c3e1413e7642639bd"
    },
    "ru:compliment:6": {
      "text": "Ладно. Ты сука.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5b38858eb3dd7a44b7c519099a09d1ef4eb1878c66f1d4f82b473c8ed7f9b0a7.mp3",
      "duration": 2.568,
      "sha256": "5b38858eb3dd7a44b7c519099a09d1ef4eb1878c66f1d4f82b473c8ed7f9b0a7"
    },
    "ru:compliment:7": {
      "text": "Ты смерти ищешь или у тебя словарь сломан?",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/97eca5d3c0a926a05e5f4e316b92ef21eb2256c7ee7fe1d23148d03c06e79a2d.mp3",
      "duration": 3.552,
      "sha256": "97eca5d3c0a926a05e5f4e316b92ef21eb2256c7ee7fe1d23148d03c06e79a2d"
    },
    "ru:compliment:8": {
      "text": "Я хотел сделать комплимент. Неудачно выразился. Прости.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a52e1c294c8d8f08a856600d72d45a959d8b2747b401899b5d5a1a1fa049f8d7.mp3",
      "duration": 5.76,
      "sha256": "a52e1c294c8d8f08a856600d72d45a959d8b2747b401899b5d5a1a1fa049f8d7"
    },
    "ru:compliment:9": {
      "text": "Рэперша назвала себя bad bitch. Она вроде была довольна.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/900cdb99a4a9f944570f15159af249d48bd16853170f3936fd9ed46feb0f58b0.mp3",
      "duration": 5.952,
      "sha256": "900cdb99a4a9f944570f15159af249d48bd16853170f3936fd9ed46feb0f58b0"
    },
    "ru:compliment:10": {
      "text": "Она СЕБЯ так назвала. А ты назвал хозяйку дома сукой.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/75f641620da872a0d672c63a8fd62482bd9c18992695596dc90288d78492403f.mp3",
      "duration": 6.96,
      "sha256": "75f641620da872a0d672c63a8fd62482bd9c18992695596dc90288d78492403f"
    },
    "ru:compliment:11": {
      "text": "Контекст. Мой природный враг.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/697f9d0ea4e5fc7777bcd3b4ba6a5bf571f5d25e763abc96c88a068647c4225b.mp3",
      "duration": 3.648,
      "sha256": "697f9d0ea4e5fc7777bcd3b4ba6a5bf571f5d25e763abc96c88a068647c4225b"
    },
    "ru:compliment:12": {
      "text": "Попробуй: «У тебя потрясающий музыкальный вкус».",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/68a8037b44cfd309e6a10d13041324b4c0b9a1d2c0739d4557b349624995093d.mp3",
      "duration": 5.712,
      "sha256": "68a8037b44cfd309e6a10d13041324b4c0b9a1d2c0739d4557b349624995093d"
    },
    "ru:compliment:13": {
      "text": "У тебя потрясающий музыкальный вкус.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4e9c6495649318f445ea48a0e64e563235c89e038faecf35d9a096b047dd2d29.mp3",
      "duration": 4.512,
      "sha256": "4e9c6495649318f445ea48a0e64e563235c89e038faecf35d9a096b047dd2d29"
    },
    "ru:compliment:14": {
      "text": "Спасибо. Видишь? Обошлось без жертв.",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c580a00b0c7ef2ab4c394eed936932b581f498f8e583410b71ea93a2d86d2f51.mp3",
      "duration": 4.752,
      "sha256": "c580a00b0c7ef2ab4c394eed936932b581f498f8e583410b71ea93a2d86d2f51"
    },
    "ru:compliment:15": {
      "text": "То есть «ты убила наповал» может значить «ты шикарно справилась»?",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/82d1ba1e5ee0a0b489129afcc5b2f8fb03b71f16a6c43d8a98fc60d3bcc091ba.mp3",
      "duration": 7.704,
      "sha256": "82d1ba1e5ee0a0b489129afcc5b2f8fb03b71f16a6c43d8a98fc60d3bcc091ba"
    },
    "ru:compliment:16": {
      "text": "Да. А please leave означает «пожалуйста, уходи».",
      "who": "roxy",
      "lang": "ru",
      "voice": "coral",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b469dd027cfa5101c858b5545d726347b5a6304b4fb70a1ba8c3eb0084f62179.mp3",
      "duration": 4.968,
      "sha256": "b469dd027cfa5101c858b5545d726347b5a6304b4fb70a1ba8c3eb0084f62179"
    },
    "ru:compliment:17": {
      "text": "Наконец-то. Выражение, с которым я не накосячу.",
      "who": "chad",
      "lang": "ru",
      "voice": "ballad",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/470ed4811b90696a35d0c4398ffe5bb254c9cf51da92586e6c2d9aa836d434fa.mp3",
      "duration": 5.712,
      "sha256": "470ed4811b90696a35d0c4398ffe5bb254c9cf51da92586e6c2d9aa836d434fa"
    },
    "ru:compliment:18": {
      "text": "Он толкает дверь с надписью «НА СЕБЯ».",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4fab68b5646601e1cd8b95ca438d443e1024065a718a3c915d97247f3d41f4a9.mp3",
      "duration": 4.56,
      "sha256": "4fab68b5646601e1cd8b95ca438d443e1024065a718a3c915d97247f3d41f4a9"
    },
    "ru:netflix:0": {
      "text": "Макс, 28, пригласил Кринжину, 26, на Netflix and chill. Она принесла блокнот с надписью «ГОРОДСКАЯ ИНФРАСТРУКТУРА».",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/438f6fde88df0ad3d2094c1f628cdb00025d868a1ad9aa369b2c424bb48a9c57.mp3",
      "duration": 10.512,
      "sha256": "438f6fde88df0ad3d2094c1f628cdb00025d868a1ad9aa369b2c424bb48a9c57"
    },
    "ru:netflix:1": {
      "text": "Ну что… Netflix and chill?",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/440240cc1c8e50da944fd24e8838f131769cd158a035cbb763194e456605dac2.mp3",
      "duration": 3.552,
      "sha256": "440240cc1c8e50da944fd24e8838f131769cd158a035cbb763194e456605dac2"
    },
    "ru:netflix:2": {
      "text": "Конечно. Я нашла документалку про канализацию.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/72121afcd616aba321800589350364298e7193b124d1c385d36e1047fe0d8364.mp3",
      "duration": 4.104,
      "sha256": "72121afcd616aba321800589350364298e7193b124d1c385d36e1047fe0d8364"
    },
    "ru:netflix:3": {
      "text": "Я немного другое имел в виду.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/33c791a631a98846bdfe0af1ea1ed4567a854bf22f0482c66303470f3df330a8.mp3",
      "duration": 3.648,
      "sha256": "33c791a631a98846bdfe0af1ea1ed4567a854bf22f0482c66303470f3df330a8"
    },
    "ru:netflix:4": {
      "text": "Ты имеешь в виду… документалку про септики?",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/880a495dff31806adee911c9b49d8dc05ee370de8963925a398ccba24a6efd2c.mp3",
      "duration": 3.768,
      "sha256": "880a495dff31806adee911c9b49d8dc05ee370de8963925a398ccba24a6efd2c"
    },
    "ru:netflix:5": {
      "text": "Я пытался подкатить.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/244cc74263e688636081a0386fb5195055e4ed6e0009ccbf07b5c0d74f758d50.mp3",
      "duration": 2.52,
      "sha256": "244cc74263e688636081a0386fb5195055e4ed6e0009ccbf07b5c0d74f758d50"
    },
    "ru:netflix:6": {
      "text": "На другом конце дивана есть место.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9b585741738008018cd5f29bb17a3772a1440a8ec6b4266e5f15a6bacf718d8d.mp3",
      "duration": 3.048,
      "sha256": "9b585741738008018cd5f29bb17a3772a1440a8ec6b4266e5f15a6bacf718d8d"
    },
    "ru:netflix:7": {
      "text": "Не мебельный манёвр. Романтический.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/38c3e32599a2f458b874abf25aad2cf01413929911f88a35abd0685942c24842.mp3",
      "duration": 4.2,
      "sha256": "38c3e32599a2f458b874abf25aad2cf01413929911f88a35abd0685942c24842"
    },
    "ru:netflix:8": {
      "text": "А. Я здесь только ради фильма.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f19d81fc8857b905fc66867fc7c0da9f66b7a959cabc635374b11575c2ca7363.mp3",
      "duration": 3.864,
      "sha256": "f19d81fc8857b905fc66867fc7c0da9f66b7a959cabc635374b11575c2ca7363"
    },
    "ru:netflix:9": {
      "text": "Ладно, понимаю. Без давления.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/fd06ce8e3f53aed42972c43a5276456ab15834b5369d7f5be10adf15d39ab595.mp3",
      "duration": 3.96,
      "sha256": "fd06ce8e3f53aed42972c43a5276456ab15834b5369d7f5be10adf15d39ab595"
    },
    "ru:netflix:10": {
      "text": "Отлично. В канализации и так давления хватает.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/26dd820651f99b01d5442aee35449dfd948c9d9fda697ccf522a586ff201b188.mp3",
      "duration": 4.152,
      "sha256": "26dd820651f99b01d5442aee35449dfd948c9d9fda697ccf522a586ff201b188"
    },
    "ru:netflix:11": {
      "text": "Тебя серьёзно увлекает это дерьмо?",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/250d37d770b04802d31995c4d22ed84343db5e89548bc7e79d90edfb43005af1.mp3",
      "duration": 4.92,
      "sha256": "250d37d770b04802d31995c4d22ed84343db5e89548bc7e79d90edfb43005af1"
    },
    "ru:netflix:12": {
      "text": "Да. Буквально. Фильм именно об этом.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/aae7b4784403a88d019937e104e1b4f31bfc68060edbec207c4b9c659406c596.mp3",
      "duration": 5.016,
      "sha256": "aae7b4784403a88d019937e104e1b4f31bfc68060edbec207c4b9c659406c596"
    },
    "ru:netflix:13": {
      "text": "Я даже постельное бельё поменял.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/962a9da4dc5b92c2988feac08b428290926000949af8c6bbda79b6d0eddc90a2.mp3",
      "duration": 3.864,
      "sha256": "962a9da4dc5b92c2988feac08b428290926000949af8c6bbda79b6d0eddc90a2"
    },
    "ru:netflix:14": {
      "text": "Молодец. Гигиена — не прелюдия.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e659ae19705d5a96e5944cdeb3608cb69c09f4115ad4866822da38b1b64713b7.mp3",
      "duration": 3.168,
      "sha256": "e659ae19705d5a96e5944cdeb3608cb69c09f4115ad4866822da38b1b64713b7"
    },
    "ru:netflix:15": {
      "text": "Ладно. Передай попкорн. Что такое жировая глыба в канализации?",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/962688f0b2ddbc6eec8784d39ee8d9b2200e960d66e43263f1738f242e722966.mp3",
      "duration": 7.704,
      "sha256": "962688f0b2ddbc6eec8784d39ee8d9b2200e960d66e43263f1738f242e722966"
    },
    "ru:netflix:16": {
      "text": "Наконец-то мужчина задаёт правильные вопросы.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a0c545344daf4efc0bd0b01db603aa19f628570007f93456354928aef752aa46.mp3",
      "duration": 4.248,
      "sha256": "a0c545344daf4efc0bd0b01db603aa19f628570007f93456354928aef752aa46"
    },
    "ru:netflix:17": {
      "text": "Это свидание пошло коту под хвост.",
      "who": "max",
      "lang": "ru",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/735db292b03d65a966099563ee983869b0f7ec05d71f272caed029b1b2609cf5.mp3",
      "duration": 3.72,
      "sha256": "735db292b03d65a966099563ee983869b0f7ec05d71f272caed029b1b2609cf5"
    },
    "ru:netflix:18": {
      "text": "На экране показывают трубу. Кринжина просит перемотать назад. Макс впервые за вечер действительно заинтригован.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7089b464af4ea72e40c009fbea922756b444653de64b8ea69824a1ae42069f71.mp3",
      "duration": 9.504,
      "sha256": "7089b464af4ea72e40c009fbea922756b444653de64b8ea69824a1ae42069f71"
    },
    "ru:translator:0": {
      "text": "Кринжина, 26, хочет отказать настойчивому знакомому, 30. Зоя, 31, помогает сделать английское сообщение менее взрывоопасным.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8d72c97b934b6b0744dc7b67fa0c2b58ff43216e910b8f6feef112f70ff4eb12.mp3",
      "duration": 12.12,
      "sha256": "8d72c97b934b6b0744dc7b67fa0c2b58ff43216e910b8f6feef112f70ff4eb12"
    },
    "ru:translator:1": {
      "text": "Черновик первый: «Отъебись, самовлюблённый мудак».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0c5d3526d2a9d6797c3c75c24ebd4cfea5a7394ae9a5597b68b757bfc92c41e8.mp3",
      "duration": 3.816,
      "sha256": "0c5d3526d2a9d6797c3c75c24ebd4cfea5a7394ae9a5597b68b757bfc92c41e8"
    },
    "ru:translator:2": {
      "text": "Ясно. Кратко. Возможно, не совсем тот тон, который ты просила.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4527bea6f766313ef0a21076876bf1b063921aa9910038982a9a3f2fba932861.mp3",
      "duration": 5.112,
      "sha256": "4527bea6f766313ef0a21076876bf1b063921aa9910038982a9a3f2fba932861"
    },
    "ru:translator:3": {
      "text": "Я попросила переводчик сделать потеплее.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/41f49baab34a6561c330b355d29ace6a2680c07ec168b4f320fcd92bd519d4ac.mp3",
      "duration": 3.648,
      "sha256": "41f49baab34a6561c330b355d29ace6a2680c07ec168b4f320fcd92bd519d4ac"
    },
    "ru:translator:4": {
      "text": "Он написал «Отъебись, пожалуйста»?",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3c37dcc5d5c4378f235505f40ec4825393977631a96fc81f654a294c419bf512.mp3",
      "duration": 4.32,
      "sha256": "3c37dcc5d5c4378f235505f40ec4825393977631a96fc81f654a294c419bf512"
    },
    "ru:translator:5": {
      "text": "«Дорогой самовлюблённый мудак, будьте любезны отъебаться».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/677cf50297dc5ef1ea87e611d83b5e6e61cce7427c299708546404cd3a6ebf6a.mp3",
      "duration": 4.8,
      "sha256": "677cf50297dc5ef1ea87e611d83b5e6e61cce7427c299708546404cd3a6ebf6a"
    },
    "ru:translator:6": {
      "text": "А. Корпоративная враждебность.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2379a9f40893c1d47eb720509675804e3370c23039ca3d4a86068cc0257e6256.mp3",
      "duration": 3.12,
      "sha256": "2379a9f40893c1d47eb720509675804e3370c23039ca3d4a86068cc0257e6256"
    },
    "ru:translator:7": {
      "text": "Я не заинтересована. Пожалуйста, перестань мне писать.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/71547f9729467c6a5a7fe945f69f1cf8bebb229c8e03937ba4dbaf58d8db7ee3.mp3",
      "duration": 4.2,
      "sha256": "71547f9729467c6a5a7fe945f69f1cf8bebb229c8e03937ba4dbaf58d8db7ee3"
    },
    "ru:translator:8": {
      "text": "Вот это. Отправь вот это. Остальные удали.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9264759f3c43083eacded0da74fb12d92072691ea96bd51cd71dd67f16a53464.mp3",
      "duration": 4.608,
      "sha256": "9264759f3c43083eacded0da74fb12d92072691ea96bd51cd71dd67f16a53464"
    },
    "ru:translator:9": {
      "text": "Тут кнопка «Отправить всё».",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2df2f47f8f890cf493379abd3928bf5bd456d75518f4b18849ffb454296bbd57.mp3",
      "duration": 2.904,
      "sha256": "2df2f47f8f890cf493379abd3928bf5bd456d75518f4b18849ffb454296bbd57"
    },
    "ru:translator:10": {
      "text": "Нет! Отправь только последний черновик!",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/45ea8c1afce5d46a45056313d9a45ae6ea05abfd1f0d87952fd3ad7ff1a7ca0f.mp3",
      "duration": 3.504,
      "sha256": "45ea8c1afce5d46a45056313d9a45ae6ea05abfd1f0d87952fd3ad7ff1a7ca0f"
    },
    "ru:translator:11": {
      "text": "Кринжина смотрит на пять синих галочек.",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a99baf0958ff1eed201d0ed85773104dde834f08f9c16cac8b1e53cfb26fe6fb.mp3",
      "duration": 4.656,
      "sha256": "a99baf0958ff1eed201d0ed85773104dde834f08f9c16cac8b1e53cfb26fe6fb"
    },
    "ru:translator:12": {
      "text": "Поздно. Он читает всю эволюцию моей личности.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/97496aca2a2105938c39dc000bfc4047fba53d5f4f55d2c96e9db10ae18cd5a8.mp3",
      "duration": 4.608,
      "sha256": "97496aca2a2105938c39dc000bfc4047fba53d5f4f55d2c96e9db10ae18cd5a8"
    },
    "ru:translator:13": {
      "text": "От «мудака» до «пожалуйста». Трогательный путь.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/131fc2ae39781d9844513693ffb9aa5bee5accfe15dd87924c0cb3a61036ac78.mp3",
      "duration": 4.92,
      "sha256": "131fc2ae39781d9844513693ffb9aa5bee5accfe15dd87924c0cb3a61036ac78"
    },
    "ru:translator:14": {
      "text": "Он ответил: «То есть… это может быть?»",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0fa5794304a9143688c9c66a2f28db151f664628f85e9e1f234df7b491a961d2.mp3",
      "duration": 4.2,
      "sha256": "0fa5794304a9143688c9c66a2f28db151f664628f85e9e1f234df7b491a961d2"
    },
    "ru:translator:15": {
      "text": "Нет. Это нет. Больше со мной не связывайся.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e7041c08c505b0bf7b34ae54d0835715b1b7df500a48e7d331a8d2af83fd4885.mp3",
      "duration": 4.92,
      "sha256": "e7041c08c505b0bf7b34ae54d0835715b1b7df500a48e7d331a8d2af83fd4885"
    },
    "ru:translator:16": {
      "text": "Перевод не требуется.",
      "who": "zoya",
      "lang": "ru",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/085c1c6deee0dbef3d0ec95a78477caf6b918e160af4fa3673df3ae4ec609b35.mp3",
      "duration": 1.656,
      "sha256": "085c1c6deee0dbef3d0ec95a78477caf6b918e160af4fa3673df3ae4ec609b35"
    },
    "ru:translator:17": {
      "text": "Хоть раз проблема, блядь, не в моём английском.",
      "who": "krinzh",
      "lang": "ru",
      "voice": "nova",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/fbed1b42a98c1aceffa77c38e904ccdd0ffc9584de6ee9f04f0a423b83f3bfc1.mp3",
      "duration": 4.464,
      "sha256": "fbed1b42a98c1aceffa77c38e904ccdd0ffc9584de6ee9f04f0a423b83f3bfc1"
    },
    "ru:translator:18": {
      "text": "Она блокирует контакт. Переводчик предлагает: «Сделать текст дружелюбнее?»",
      "who": "narrator",
      "lang": "ru",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/30b5f14b673c42e93d8383dcfae8d82db09d197dcb02f11d375c6ccffc820fc6.mp3",
      "duration": 5.808,
      "sha256": "30b5f14b673c42e93d8383dcfae8d82db09d197dcb02f11d375c6ccffc820fc6"
    },
    "es:hot-mic:0": {
      "text": "Max, 28, y Zoya, 31, están en una llamada de trabajo. Su jefe presenta la diapositiva número doce sobre hablar con brevedad.",
      "who": "narrator",
      "lang": "es",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9e6c768780659a9fa0486b0013e4b6a86db8d0f7a83803543ba5f7bd867e7fab.mp3",
      "duration": 10.56,
      "sha256": "9e6c768780659a9fa0486b0013e4b6a86db8d0f7a83803543ba5f7bd867e7fab"
    },
    "es:hot-mic:1": {
      "text": "Esta reunión podría haber sido un puto correo.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/456ea2145ae71bb1190207d317199ff38901fa90cce17c214262605351151c40.mp3",
      "duration": 2.705124716553288,
      "sha256": "456ea2145ae71bb1190207d317199ff38901fa90cce17c214262605351151c40"
    },
    "es:hot-mic:2": {
      "text": "Max. Tu micrófono.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3a9bdc706c478ef9f8510f7a14466df7c79fb9adbe7a6cadd55f99b1842c75c9.mp3",
      "duration": 2.856,
      "sha256": "3a9bdc706c478ef9f8510f7a14466df7c79fb9adbe7a6cadd55f99b1842c75c9"
    },
    "es:hot-mic:3": {
      "text": "Tranquila. Lo silencié.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7e03e5a10bda63319ee4ece5586389d2e0c7babeeb33803c98648915452ba122.mp3",
      "duration": 2.664,
      "sha256": "7e03e5a10bda63319ee4ece5586389d2e0c7babeeb33803c98648915452ba122"
    },
    "es:hot-mic:4": {
      "text": "Tu micrófono sigue encendido.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c7abe7b8ee7e882e94514b17ac4e444c8954352cb2763af3a0f1362858d9b157.mp3",
      "duration": 2.616,
      "sha256": "c7abe7b8ee7e882e94514b17ac4e444c8954352cb2763af3a0f1362858d9b157"
    },
    "es:hot-mic:5": {
      "text": "Entonces, ¿por qué el altavoz pequeño está tachado?",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b864586b68a7e19f7771d7c658456a052fbd8aef18d726e3a16da38f65c149ac.mp3",
      "duration": 4.704,
      "sha256": "b864586b68a7e19f7771d7c658456a052fbd8aef18d726e3a16da38f65c149ac"
    },
    "es:hot-mic:6": {
      "text": "Silenciaste tus altavoces. Tú no nos oyes. Nosotros sí te oímos.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/56ca36120758abfc7f7b2cebdd49115cd366c7dcad35a84c23610a819eb020d0.mp3",
      "duration": 6.168,
      "sha256": "56ca36120758abfc7f7b2cebdd49115cd366c7dcad35a84c23610a819eb020d0"
    },
    "es:hot-mic:7": {
      "text": "Mierda. ¿Cuánto oyeron?",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/34dafdd52b456e24c7124436dfab116b6972eae89e2f0d1e04d8598961518cc3.mp3",
      "duration": 1.555736961451247,
      "sha256": "34dafdd52b456e24c7124436dfab116b6972eae89e2f0d1e04d8598961518cc3"
    },
    "es:hot-mic:8": {
      "text": "Tu audio se cortó un segundo.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/58e18e26d06888eb5e09415d40f1b93256f10d5a64cc467d4185f630d30c2609.mp3",
      "duration": 3.312,
      "sha256": "58e18e26d06888eb5e09415d40f1b93256f10d5a64cc467d4185f630d30c2609"
    },
    "es:hot-mic:9": {
      "text": "¿Qué segundo? Mi carrera depende de eso.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0b7c9e3813760c231e5983064a70251700cad5b594dc0b948a1fbd1d6b8ff787.mp3",
      "duration": 4.464,
      "sha256": "0b7c9e3813760c231e5983064a70251700cad5b594dc0b948a1fbd1d6b8ff787"
    },
    "es:hot-mic:10": {
      "text": "Oímos: “Está diciendo puras mierdas”. Luego te congelaste.",
      "who": "zoya",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/5a2a66a0a7125d5b01eecd933b07005bab98cc795c8a9656aa33e0cbaa9050be.mp3",
      "duration": 3.5526530612244898,
      "sha256": "5a2a66a0a7125d5b01eecd933b07005bab98cc795c8a9656aa33e0cbaa9050be"
    },
    "es:hot-mic:11": {
      "text": "Quizá hablaba de la hoja de cálculo.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3d6fca3a36d04b8b84a60da2f84c29b998f62b828e02ebb184c9dc117882b8cf.mp3",
      "duration": 3.456,
      "sha256": "3d6fca3a36d04b8b84a60da2f84c29b998f62b828e02ebb184c9dc117882b8cf"
    },
    "es:hot-mic:12": {
      "text": "Dijiste que estaba diciendo puras mierdas.",
      "who": "zoya",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/9cbb275ca9810c9530a43fda87417e6403b5ff310c490a00bad2dae3acc4240b.mp3",
      "duration": 2.507755102040816,
      "sha256": "9cbb275ca9810c9530a43fda87417e6403b5ff310c490a00bad2dae3acc4240b"
    },
    "es:hot-mic:13": {
      "text": "Aparece un mensaje del jefe: “Max, ¿algún comentario?” Max vuelve a encender los altavoces.",
      "who": "narrator",
      "lang": "es",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/738b715c263e008ef064a785fb18836191342d4303738cecefda3739836116ab.mp3",
      "duration": 7.968,
      "sha256": "738b715c263e008ef064a785fb18836191342d4303738cecefda3739836116ab"
    },
    "es:hot-mic:14": {
      "text": "Presentación brillante. Visionaria. Me cambió la vida.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5dcaa7b548f5e1b8378c24c2a41a629b0a6c607dce23453f37184d5a2aa1333d.mp3",
      "duration": 5.568,
      "sha256": "5dcaa7b548f5e1b8378c24c2a41a629b0a6c607dce23453f37184d5a2aa1333d"
    },
    "es:hot-mic:15": {
      "text": "No tienes que lamerle el culo.",
      "who": "zoya",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/fb5a2f5659b99efaba3cbac07b492e04ebb23bfbc543e1357281adcc846cd51f.mp3",
      "duration": 1.5789569160997732,
      "sha256": "fb5a2f5659b99efaba3cbac07b492e04ebb23bfbc543e1357281adcc846cd51f"
    },
    "es:hot-mic:16": {
      "text": "Estoy intentando conservar mi trabajo, Zoya.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a41913bcce4d9f6fb8c4e88a70cef6cd8d9d82cc079123acccf78d206ca3d00b.mp3",
      "duration": 4.848,
      "sha256": "a41913bcce4d9f6fb8c4e88a70cef6cd8d9d82cc079123acccf78d206ca3d00b"
    },
    "es:hot-mic:17": {
      "text": "Creo que podríamos hacer la presentación más corta.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/38e623210193374164f5c93d14c5331b9a8ff8bc8d780164211f2125b3028a4e.mp3",
      "duration": 4.056,
      "sha256": "38e623210193374164f5c93d14c5331b9a8ff8bc8d780164211f2125b3028a4e"
    },
    "es:hot-mic:18": {
      "text": "El jefe responde: “Genial. Envíennos tu versión más corta antes del almuerzo.”",
      "who": "narrator",
      "lang": "es",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0e5026217fbae26e4a8131e383c85e8426dbd69259e1247540fff08c2e69f03f.mp3",
      "duration": 6.408,
      "sha256": "0e5026217fbae26e4a8131e383c85e8426dbd69259e1247540fff08c2e69f03f"
    },
    "es:hot-mic:19": {
      "text": "Joder.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/3f769a9df1856826bb0bb1c6ae45ff36c8aa371004cae4020c833b7a4791bdb6.mp3",
      "duration": 0.3947392290249433,
      "sha256": "3f769a9df1856826bb0bb1c6ae45ff36c8aa371004cae4020c833b7a4791bdb6"
    },
    "es:hot-mic:20": {
      "text": "Sigues en la llamada, Max.",
      "who": "zoya",
      "lang": "es",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/44113375365dc50e0e16ee04cfc4d87b3f412a91047b1075796314ebea79f75f.mp3",
      "duration": 3.048,
      "sha256": "44113375365dc50e0e16ee04cfc4d87b3f412a91047b1075796314ebea79f75f"
    },
    "es:hot-mic:21": {
      "text": "Era mi comentario sobre el plazo.",
      "who": "max",
      "lang": "es",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b9fbb26d787a957bf5f6fe1eeeffbb719b10bfcc8b0b7b39a16d72605c1e2775.mp3",
      "duration": 3.648,
      "sha256": "b9fbb26d787a957bf5f6fe1eeeffbb719b10bfcc8b0b7b39a16d72605c1e2775"
    },
    "es:dad-dating:0": {
      "text": "Papá, 52, está soltero y listo para probar apps de citas. Su hijo Lyosha, 23, ofrece revisar su perfil en inglés.",
      "who": "narrator",
      "lang": "es",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/152a6812687a7c20242d5f40a0b7d19ad8d2e673c63e11a71950ff59a0cd2e94.mp3",
      "duration": 11.016,
      "sha256": "152a6812687a7c20242d5f40a0b7d19ad8d2e673c63e11a71950ff59a0cd2e94"
    },
    "es:dad-dating:1": {
      "text": "Papi con experiencia busca pareja.",
      "who": "dad",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/5fabe442b91530f3e7179f4e761c93f1dc92e87afa8249efcab0c2227706d2b7.mp3",
      "duration": 2.0317460317460316,
      "sha256": "5fabe442b91530f3e7179f4e761c93f1dc92e87afa8249efcab0c2227706d2b7"
    },
    "es:dad-dating:2": {
      "text": "Papá. ¿Por qué “papi”?",
      "who": "son",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/7854db5d4235720b5267f5df7f2979062d9b22db9f65d2c02e5284a024df28f0.mp3",
      "duration": 1.0681179138321995,
      "sha256": "7854db5d4235720b5267f5df7f2979062d9b22db9f65d2c02e5284a024df28f0"
    },
    "es:dad-dating:3": {
      "text": "Veintitrés años de experiencia. Tú eres mi referencia.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a50c184f3162dc3fc4c0b21cec5758135f637acd59048ef75eeb5d52e3215755.mp3",
      "duration": 5.52,
      "sha256": "a50c184f3162dc3fc4c0b21cec5758135f637acd59048ef75eeb5d52e3215755"
    },
    "es:dad-dating:4": {
      "text": "Aquí puede sonar sexual, no solo paternal.",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ebbf50b2511de5b05082a15c5c99f7e01114c3412bd217080160c34e7182f54c.mp3",
      "duration": 4.512,
      "sha256": "ebbf50b2511de5b05082a15c5c99f7e01114c3412bd217080160c34e7182f54c"
    },
    "es:dad-dating:5": {
      "text": "Bien. “Padre soltero. Buen cocinero. Dientes propios.”",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3255389260f715df1dbe5406a0ac1dd6d50b5ea83c3f6173895ae14e54f500aa.mp3",
      "duration": 5.304,
      "sha256": "3255389260f715df1dbe5406a0ac1dd6d50b5ea83c3f6173895ae14e54f500aa"
    },
    "es:dad-dating:6": {
      "text": "Deja los dos primeros.",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/df1d9105adbab963383edb41413a108d409b1dbdea7b20325da4555aee3fac9d.mp3",
      "duration": 2.52,
      "sha256": "df1d9105adbab963383edb41413a108d409b1dbdea7b20325da4555aee3fac9d"
    },
    "es:dad-dating:7": {
      "text": "Una mujer llamada Helen, 49, le escribe: “¿Estás saliendo con alguien?”",
      "who": "narrator",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/d8b20675c7432d916ff3341ee17b23a1046772617c1723eff4f44701a15901ff.mp3",
      "duration": 4.6788208616780045,
      "sha256": "d8b20675c7432d916ff3341ee17b23a1046772617c1723eff4f44701a15901ff"
    },
    "es:dad-dating:8": {
      "text": "Sí. A mi hijo. Está aquí mismo.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1d5a22f74b93b496751916cbb136c1a6775152cb596886aa0ae401c3e719d165.mp3",
      "duration": 4.968,
      "sha256": "1d5a22f74b93b496751916cbb136c1a6775152cb596886aa0ae401c3e719d165"
    },
    "es:dad-dating:9": {
      "text": "No, estoy soltero.",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/af16a62ee9893db9b0d4af0b04bfb689a554fc8ccf57ff2234ab220dfdb590e3.mp3",
      "duration": 1.968,
      "sha256": "af16a62ee9893db9b0d4af0b04bfb689a554fc8ccf57ff2234ab220dfdb590e3"
    },
    "es:dad-dating:10": {
      "text": "Dice que no busca nada informal. Tengo chaqueta.",
      "who": "dad",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/21217fe82bc5a9a09b267b4e0e53abd440ee8e51d34ae10feb768ea46b6e821e.mp3",
      "duration": 2.9257142857142857,
      "sha256": "21217fe82bc5a9a09b267b4e0e53abd440ee8e51d34ae10feb768ea46b6e821e"
    },
    "es:dad-dating:11": {
      "text": "No está preguntando por tu ropa.",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ed6e2a5d27cc4588e0c7e9ebc292fd3a0f650b461ffd54c8c55ad234ec79af6b.mp3",
      "duration": 3.768,
      "sha256": "ed6e2a5d27cc4588e0c7e9ebc292fd3a0f650b461ffd54c8c55ad234ec79af6b"
    },
    "es:dad-dating:12": {
      "text": "Yo también busco algo serio.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e832f62588a59d605a34b4333a5313305920dc63c8c0bbeea44a0d1dc0010f53.mp3",
      "duration": 3.12,
      "sha256": "e832f62588a59d605a34b4333a5313305920dc63c8c0bbeea44a0d1dc0010f53"
    },
    "es:dad-dating:13": {
      "text": "¿Puedo añadir que soy bueno en la cama?",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6020aa616b05a4142902cead24f7b58c288cccf4b47dcff4fd4dc2dd837882cd.mp3",
      "duration": 3.72,
      "sha256": "6020aa616b05a4142902cead24f7b58c288cccf4b47dcff4fd4dc2dd837882cd"
    },
    "es:dad-dating:14": {
      "text": "¿Vas a decirme que duermes ocho horas?",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/529d4ef45be5905eb581aab096a00dc6db63b5b45edef1f15fd77008ba2b6a97.mp3",
      "duration": 4.848,
      "sha256": "529d4ef45be5905eb581aab096a00dc6db63b5b45edef1f15fd77008ba2b6a97"
    },
    "es:dad-dating:15": {
      "text": "Nueve. Y no robo la manta.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8b46eb9fa5e654e0b33ed02206778e36b6bf4c67dba550382188a1c0dc7325ce.mp3",
      "duration": 3.168,
      "sha256": "8b46eb9fa5e654e0b33ed02206778e36b6bf4c67dba550382188a1c0dc7325ce"
    },
    "es:dad-dating:16": {
      "text": "Guardemos eso para la segunda cita.",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3b9b7d23adfe1af8e6119b2168179f9e5fdeab9fc33ae235a6c9174a48c35933.mp3",
      "duration": 3.048,
      "sha256": "3b9b7d23adfe1af8e6119b2168179f9e5fdeab9fc33ae235a6c9174a48c35933"
    },
    "es:dad-dating:17": {
      "text": "Helen escribe: “¿Café el sábado?” Papá empieza a escribir sobre su pensión.",
      "who": "narrator",
      "lang": "es",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/265b161c409c4e9f76937c0ce2f1f3fb599a0c7eacca16f82955589da3e3b335.mp3",
      "duration": 5.856,
      "sha256": "265b161c409c4e9f76937c0ce2f1f3fb599a0c7eacca16f82955589da3e3b335"
    },
    "es:dad-dating:18": {
      "text": "Café suena bien. ¿Qué tal a las once?",
      "who": "son",
      "lang": "es",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/049c06f92f27222e7c17083af905fe0f22b6690e491cc34607614cd53072e66e.mp3",
      "duration": 3.72,
      "sha256": "049c06f92f27222e7c17083af905fe0f22b6690e491cc34607614cd53072e66e"
    },
    "es:dad-dating:19": {
      "text": "Listo. Me mandó un corazón.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7a0be9052fa7df7eb366fdddd03e9f76cce9e1687dd652c56f552fbd8693c896.mp3",
      "duration": 3.552,
      "sha256": "7a0be9052fa7df7eb366fdddd03e9f76cce9e1687dd652c56f552fbd8693c896"
    },
    "es:dad-dating:20": {
      "text": "¿Ves? No necesitabas “papi con experiencia”.",
      "who": "son",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/1ea1eb2f8f2675b09629e1afa2ef7b414126cc83f247612344dea690d572ae4f.mp3",
      "duration": 2.728344671201814,
      "sha256": "1ea1eb2f8f2675b09629e1afa2ef7b414126cc83f247612344dea690d572ae4f"
    },
    "es:dad-dating:21": {
      "text": "Todavía no ha visto el taladro.",
      "who": "dad",
      "lang": "es",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5ccf954cd5c2f4914bf7bf04391a5bea48fedb597b9613abfd9886e226ed0596.mp3",
      "duration": 2.904,
      "sha256": "5ccf954cd5c2f4914bf7bf04391a5bea48fedb597b9613abfd9886e226ed0596"
    },
    "zh:hot-mic:0": {
      "text": "28岁的马克斯和31岁的卓娅正在参加工作会议。经理正在展示第十二张关于“说话要简短”的幻灯片。",
      "who": "narrator",
      "lang": "zh",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8cb85ea55b03144918ee51acd19e518dc0b5bc4a84902391f06c51f0448c2da6.mp3",
      "duration": 11.256,
      "sha256": "8cb85ea55b03144918ee51acd19e518dc0b5bc4a84902391f06c51f0448c2da6"
    },
    "zh:hot-mic:1": {
      "text": "这他妈的会议明明可以变成一封邮件。",
      "who": "max",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/2fd2779232295e3a896ea918f4bc9390d780105a51beaf0578bcf771940ed8fc.mp3",
      "duration": 3.622312925170068,
      "sha256": "2fd2779232295e3a896ea918f4bc9390d780105a51beaf0578bcf771940ed8fc"
    },
    "zh:hot-mic:2": {
      "text": "马克斯。你的麦克风。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/591baf129ce00e40d83b2355252ad0ecb85151889b2082ba8d5f413f886fa52d.mp3",
      "duration": 3.12,
      "sha256": "591baf129ce00e40d83b2355252ad0ecb85151889b2082ba8d5f413f886fa52d"
    },
    "zh:hot-mic:3": {
      "text": "放松。我静音了。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/fc900a16bc077c02c585597044d9cef9384e0aca0b0593eaeb1140397e674b6d.mp3",
      "duration": 4.512,
      "sha256": "fc900a16bc077c02c585597044d9cef9384e0aca0b0593eaeb1140397e674b6d"
    },
    "zh:hot-mic:4": {
      "text": "你的麦克风还开着。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ee1ad238ddc7409d6ab98d95abf347466668ed8e7657f1253ed2a0cb7c803f50.mp3",
      "duration": 3.048,
      "sha256": "ee1ad238ddc7409d6ab98d95abf347466668ed8e7657f1253ed2a0cb7c803f50"
    },
    "zh:hot-mic:5": {
      "text": "那为什么小喇叭上有一条斜线？",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/bfe2622f9a54325cc7f705a088befbdb328a4a14fbd9b0cab859911cc9443354.mp3",
      "duration": 5.448,
      "sha256": "bfe2622f9a54325cc7f705a088befbdb328a4a14fbd9b0cab859911cc9443354"
    },
    "zh:hot-mic:6": {
      "text": "你关掉的是你自己的扬声器。你听不到我们。我们听得到你。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/138f91e06f1e428ad2caa591888ca91a49fe5ca4d183693ddfc2e1c4d5c0ab7b.mp3",
      "duration": 5.664,
      "sha256": "138f91e06f1e428ad2caa591888ca91a49fe5ca4d183693ddfc2e1c4d5c0ab7b"
    },
    "zh:hot-mic:7": {
      "text": "操。你们听到了多少？",
      "who": "max",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/2507d5366c3471f91d84d8e384346251a20024ba06171e3c4f20902fcb70cf1e.mp3",
      "duration": 2.0085260770975055,
      "sha256": "2507d5366c3471f91d84d8e384346251a20024ba06171e3c4f20902fcb70cf1e"
    },
    "zh:hot-mic:8": {
      "text": "你的声音断了一秒。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a4546064fff1eb8dc55c2f085664423a75af9975b5293c18d1feba47e9f5e5e2.mp3",
      "duration": 2.664,
      "sha256": "a4546064fff1eb8dc55c2f085664423a75af9975b5293c18d1feba47e9f5e5e2"
    },
    "zh:hot-mic:9": {
      "text": "哪一秒？我的职业生涯就靠它了。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ce4d3f05ac65bd3711a221e4741d9407d6620b35b58a3deb4570e773aeb86ff3.mp3",
      "duration": 5.016,
      "sha256": "ce4d3f05ac65bd3711a221e4741d9407d6620b35b58a3deb4570e773aeb86ff3"
    },
    "zh:hot-mic:10": {
      "text": "我们听到“他满嘴喷粪”。然后你卡住了。",
      "who": "zoya",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/f41b4d6e78b109be2219b1a32bdc4569dc1acb677125794da9c028d8f921f89d.mp3",
      "duration": 3.680362811791383,
      "sha256": "f41b4d6e78b109be2219b1a32bdc4569dc1acb677125794da9c028d8f921f89d"
    },
    "zh:hot-mic:11": {
      "text": "也许我说的是电子表格。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6dcb3a873a63e0d2c9f0c4e9cc2df161d2b8b32a103756a9d5f8e0c3a9810fee.mp3",
      "duration": 3.6,
      "sha256": "6dcb3a873a63e0d2c9f0c4e9cc2df161d2b8b32a103756a9d5f8e0c3a9810fee"
    },
    "zh:hot-mic:12": {
      "text": "你说他满嘴喷粪。",
      "who": "zoya",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/e0e13b554534a576bba72f191e07408058689b2db301dbdf52cecf5b1f2531fa.mp3",
      "duration": 1.5905668934240362,
      "sha256": "e0e13b554534a576bba72f191e07408058689b2db301dbdf52cecf5b1f2531fa"
    },
    "zh:hot-mic:13": {
      "text": "经理发来消息：“Max，有什么反馈吗？”马克斯重新打开扬声器。",
      "who": "narrator",
      "lang": "zh",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/06297b4296e063c06ae77ffededaf962b70ecb747ce97694812769810c957553.mp3",
      "duration": 7.368,
      "sha256": "06297b4296e063c06ae77ffededaf962b70ecb747ce97694812769810c957553"
    },
    "zh:hot-mic:14": {
      "text": "精彩的演示。有远见。改变了我的人生。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/76032edd87c81975fdb81b6ab2f90e0861fe48f1ec3498f9b8273ecc90e4b200.mp3",
      "duration": 5.856,
      "sha256": "76032edd87c81975fdb81b6ab2f90e0861fe48f1ec3498f9b8273ecc90e4b200"
    },
    "zh:hot-mic:15": {
      "text": "你没必要舔他屁股。",
      "who": "zoya",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8c3b1d9da372be975740fcf96f86b29131a2250762130d21bc22d9ba27831cdc.mp3",
      "duration": 1.7182766439909296,
      "sha256": "8c3b1d9da372be975740fcf96f86b29131a2250762130d21bc22d9ba27831cdc"
    },
    "zh:hot-mic:16": {
      "text": "我只是想保住工作，卓娅。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a61bd9c18225e3fd94a57b7f0e839c8b101aa695c14f625202b1774a38312a14.mp3",
      "duration": 3.456,
      "sha256": "a61bd9c18225e3fd94a57b7f0e839c8b101aa695c14f625202b1774a38312a14"
    },
    "zh:hot-mic:17": {
      "text": "我觉得我们可以把演示做短一点。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/faaf7dcdfe391be9bd4fb7e5c8f362484997cc3938ed4f92765935cdeddec0ad.mp3",
      "duration": 3.456,
      "sha256": "faaf7dcdfe391be9bd4fb7e5c8f362484997cc3938ed4f92765935cdeddec0ad"
    },
    "zh:hot-mic:18": {
      "text": "经理回复：“很好。午饭前把你的精简版发给我们。”",
      "who": "narrator",
      "lang": "zh",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/66cbfb25ade830ce632a15a65d91837ad631461900e90a0c996861fb9a308d5b.mp3",
      "duration": 5.448,
      "sha256": "66cbfb25ade830ce632a15a65d91837ad631461900e90a0c996861fb9a308d5b"
    },
    "zh:hot-mic:19": {
      "text": "操。",
      "who": "max",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/1e13475d923509462d1e562411252cdd0bb742a7088e6fc001e0d91b336cbb38.mp3",
      "duration": 0.4992290249433107,
      "sha256": "1e13475d923509462d1e562411252cdd0bb742a7088e6fc001e0d91b336cbb38"
    },
    "zh:hot-mic:20": {
      "text": "马克斯，你还在通话里。",
      "who": "zoya",
      "lang": "zh",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/89b65b3a8de6df312d9f5098baf0c8a5a08e78a8565091eec2b0e36cf652bdfa.mp3",
      "duration": 3.168,
      "sha256": "89b65b3a8de6df312d9f5098baf0c8a5a08e78a8565091eec2b0e36cf652bdfa"
    },
    "zh:hot-mic:21": {
      "text": "那是我对截止日期的反馈。",
      "who": "max",
      "lang": "zh",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5f094c0f7174c66b4db74c76ede3a467b18bc12e8decb3d83e0e477abae1a4cf.mp3",
      "duration": 5.064,
      "sha256": "5f094c0f7174c66b4db74c76ede3a467b18bc12e8decb3d83e0e477abae1a4cf"
    },
    "zh:dad-dating:0": {
      "text": "52岁的爸爸单身，准备尝试约会软件。23岁的儿子廖沙主动帮他检查英文资料。",
      "who": "narrator",
      "lang": "zh",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3f40c02f95b2d3d2018c856826bc685aa03fc1afaf4d6ba3e993b0030963ef1d.mp3",
      "duration": 9.264,
      "sha256": "3f40c02f95b2d3d2018c856826bc685aa03fc1afaf4d6ba3e993b0030963ef1d"
    },
    "zh:dad-dating:1": {
      "text": "有经验的爸爸寻找伴侣。",
      "who": "dad",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f987c853eeb331915c79f50277057b033a69956874ebeb32c7106223be02ccae.mp3",
      "duration": 2.2058956916099772,
      "sha256": "f987c853eeb331915c79f50277057b033a69956874ebeb32c7106223be02ccae"
    },
    "zh:dad-dating:2": {
      "text": "爸。为什么写“爸爸”？",
      "who": "son",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/e24e0e235208f7b866091b532888dde50efce00f5260c90daa26a60e947ab5a9.mp3",
      "duration": 1.7531065759637188,
      "sha256": "e24e0e235208f7b866091b532888dde50efce00f5260c90daa26a60e947ab5a9"
    },
    "zh:dad-dating:3": {
      "text": "二十三年的经验。你就是我的推荐人。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a4cde727d6a3b9781a529909f57958cc65834efa36364ebf33d35939c43da526.mp3",
      "duration": 4.104,
      "sha256": "a4cde727d6a3b9781a529909f57958cc65834efa36364ebf33d35939c43da526"
    },
    "zh:dad-dating:4": {
      "text": "这里听起来可能带有性暗示，不只是父亲。",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d979dc5d0f509b85ab8bd2a38ea4e888f14ae89a5e57d8724704b411ddc3a04c.mp3",
      "duration": 5.76,
      "sha256": "d979dc5d0f509b85ab8bd2a38ea4e888f14ae89a5e57d8724704b411ddc3a04c"
    },
    "zh:dad-dating:5": {
      "text": "好吧。“单身父亲。会做饭。牙是自己的。”",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8876d1115be416572bab1d75ce3adab3d6ac2f181157009da8d0af2f4e354986.mp3",
      "duration": 5.4,
      "sha256": "8876d1115be416572bab1d75ce3adab3d6ac2f181157009da8d0af2f4e354986"
    },
    "zh:dad-dating:6": {
      "text": "前两条留下。",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/63806cc5e60c79c4c2050aeb1aca7ad0c552495d9fc8a525b08e298d6f6b8704.mp3",
      "duration": 1.92,
      "sha256": "63806cc5e60c79c4c2050aeb1aca7ad0c552495d9fc8a525b08e298d6f6b8704"
    },
    "zh:dad-dating:7": {
      "text": "一位名叫 Helen 的49岁女士发来消息：“你在和谁交往吗？”",
      "who": "narrator",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2c7a5f2bacc2904b1df962402dde9f0dd119c4567b85f37e45bc9ee8da212ba6.mp3",
      "duration": 4.748480725623582,
      "sha256": "2c7a5f2bacc2904b1df962402dde9f0dd119c4567b85f37e45bc9ee8da212ba6"
    },
    "zh:dad-dating:8": {
      "text": "有。我儿子。他就在这儿。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/6dd7cdb2ed0c9049ee31a0362c77eb4552b33c4d8531cf7884bbe9a5b8e7b39f.mp3",
      "duration": 3.048,
      "sha256": "6dd7cdb2ed0c9049ee31a0362c77eb4552b33c4d8531cf7884bbe9a5b8e7b39f"
    },
    "zh:dad-dating:9": {
      "text": "没有，我单身。",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/3e9de80ba5063d3bc4f7f8d435018741ffb581172c062da35cde075367b5f2b5.mp3",
      "duration": 1.968,
      "sha256": "3e9de80ba5063d3bc4f7f8d435018741ffb581172c062da35cde075367b5f2b5"
    },
    "zh:dad-dating:10": {
      "text": "她说她不想要随意关系。我有夹克。",
      "who": "dad",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f232bf8140d1e4e12fb3963cc0963f4c9ca279a76d84f14600648cb0a0feacc3.mp3",
      "duration": 3.4946031746031747,
      "sha256": "f232bf8140d1e4e12fb3963cc0963f4c9ca279a76d84f14600648cb0a0feacc3"
    },
    "zh:dad-dating:11": {
      "text": "她不是在问你的衣服。",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/23082786b8ce1ee908d7fbca1450759e92d78da5d8b46014f9032ebc60bcea63.mp3",
      "duration": 2.904,
      "sha256": "23082786b8ce1ee908d7fbca1450759e92d78da5d8b46014f9032ebc60bcea63"
    },
    "zh:dad-dating:12": {
      "text": "我也想找认真的关系。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/80990d784934b86b7e47698ae49173030b103c3672c9da17eb7548aa48f1b7c1.mp3",
      "duration": 2.856,
      "sha256": "80990d784934b86b7e47698ae49173030b103c3672c9da17eb7548aa48f1b7c1"
    },
    "zh:dad-dating:13": {
      "text": "我可以加一句我在床上很厉害吗？",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7d60a47706b7646ff164caae3803ca6c6e3655c74648f07f3f3ce573ad1a948f.mp3",
      "duration": 4.32,
      "sha256": "7d60a47706b7646ff164caae3803ca6c6e3655c74648f07f3f3ce573ad1a948f"
    },
    "zh:dad-dating:14": {
      "text": "你是不是想说你能睡八小时？",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/45a7bcc74c6b7207d238c419ee7b11f4cd7490744400277d01baed985cbc5c9e.mp3",
      "duration": 4.416,
      "sha256": "45a7bcc74c6b7207d238c419ee7b11f4cd7490744400277d01baed985cbc5c9e"
    },
    "zh:dad-dating:15": {
      "text": "九小时。而且我不抢被子。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5c15112d987bc14aa1fd6c313a45c4a793f6846a61ac230fa40ca150c94e47f7.mp3",
      "duration": 3.552,
      "sha256": "5c15112d987bc14aa1fd6c313a45c4a793f6846a61ac230fa40ca150c94e47f7"
    },
    "zh:dad-dating:16": {
      "text": "这个留到第二次约会再说吧。",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/cd68ba9cbbf239170536f173c35e0ef602b1f24d4a01218ee768d457eb9c9f6f.mp3",
      "duration": 4.248,
      "sha256": "cd68ba9cbbf239170536f173c35e0ef602b1f24d4a01218ee768d457eb9c9f6f"
    },
    "zh:dad-dating:17": {
      "text": "Helen 写道：“周六喝咖啡？”爸爸开始输入关于养老金的内容。",
      "who": "narrator",
      "lang": "zh",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d934a0a29adbb04ffc133790d9a902e3b0ef4eacb59831b07e373ff36091a816.mp3",
      "duration": 5.76,
      "sha256": "d934a0a29adbb04ffc133790d9a902e3b0ef4eacb59831b07e373ff36091a816"
    },
    "zh:dad-dating:18": {
      "text": "咖啡听起来不错。十一点怎么样？",
      "who": "son",
      "lang": "zh",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/a934b56acc150338f3f6aafa2fa1e9b4c277174c486a144675555679b8b3cece.mp3",
      "duration": 5.352,
      "sha256": "a934b56acc150338f3f6aafa2fa1e9b4c277174c486a144675555679b8b3cece"
    },
    "zh:dad-dating:19": {
      "text": "好了。她发了一个爱心。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b4ae94f3ba33814c66cd85dd6f769d00b25fec4420b2def8dc2e283328c11b8f.mp3",
      "duration": 3.168,
      "sha256": "b4ae94f3ba33814c66cd85dd6f769d00b25fec4420b2def8dc2e283328c11b8f"
    },
    "zh:dad-dating:20": {
      "text": "看吧？你不需要“有经验的爸爸”。",
      "who": "son",
      "lang": "zh",
      "provider": "Piper",
      "voice": "zh_CN-huayan-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/3e63e4855bf94cec614d0a464cd795521aec76a98f4c9b84ce15835d64217a5e.mp3",
      "duration": 2.5541950113378684,
      "sha256": "3e63e4855bf94cec614d0a464cd795521aec76a98f4c9b84ce15835d64217a5e"
    },
    "zh:dad-dating:21": {
      "text": "她还没见过电钻呢。",
      "who": "dad",
      "lang": "zh",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b2fa931eaa67255b638d399a5b83f72943d1a333cef79706c31525fa96da6b02.mp3",
      "duration": 2.904,
      "sha256": "b2fa931eaa67255b638d399a5b83f72943d1a333cef79706c31525fa96da6b02"
    },
    "uk:hot-mic:0": {
      "text": "Макс, 28, і Зоя, 31, на робочому дзвінку. Керівник показує дванадцятий слайд про те, як важливо говорити коротко.",
      "who": "narrator",
      "lang": "uk",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/bc0d012ac49e23a2e955eaa710630a1bda58a5d1ac54c338359144092101e612.mp3",
      "duration": 11.856,
      "sha256": "bc0d012ac49e23a2e955eaa710630a1bda58a5d1ac54c338359144092101e612"
    },
    "uk:hot-mic:1": {
      "text": "Цю довбану нараду можна було замінити листом.",
      "who": "max",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/0834a9283039285f0396f64588234832d39a1e06524d86d9feb13c3d77ddfe64.mp3",
      "duration": 4.08671201814059,
      "sha256": "0834a9283039285f0396f64588234832d39a1e06524d86d9feb13c3d77ddfe64"
    },
    "uk:hot-mic:2": {
      "text": "Максе. Твій мікрофон.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/74149cbcf4feec1f1c4ee7b4164a746bd7f5f2e7c45d2fd5effbbe3cd2bfa9f5.mp3",
      "duration": 2.448,
      "sha256": "74149cbcf4feec1f1c4ee7b4164a746bd7f5f2e7c45d2fd5effbbe3cd2bfa9f5"
    },
    "uk:hot-mic:3": {
      "text": "Спокійно. Я його вимкнув.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2b9889839c894cc0551cc19c2275351a79f5a1eabb96b38afa2083899bc5c4c6.mp3",
      "duration": 3.504,
      "sha256": "2b9889839c894cc0551cc19c2275351a79f5a1eabb96b38afa2083899bc5c4c6"
    },
    "uk:hot-mic:4": {
      "text": "Твій мікрофон усе ще ввімкнений.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/9ed7f682abfca377b10dd1ee973f0fa336177cff08d98b019863c2b8528d2b20.mp3",
      "duration": 3.552,
      "sha256": "9ed7f682abfca377b10dd1ee973f0fa336177cff08d98b019863c2b8528d2b20"
    },
    "uk:hot-mic:5": {
      "text": "Тоді чому маленький динамік перекреслений?",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2bb63ac3efa2725a866e4fd28e255a9bba7dcb8e830c1319e6c268b34ce66293.mp3",
      "duration": 4.968,
      "sha256": "2bb63ac3efa2725a866e4fd28e255a9bba7dcb8e830c1319e6c268b34ce66293"
    },
    "uk:hot-mic:6": {
      "text": "Ти вимкнув звук у себе. Ти нас не чуєш. А ми тебе чуємо.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ad45be568b11f291bc2c4ffc4118dc34bce7f71646dbbcf4b244d27488ab3de7.mp3",
      "duration": 6,
      "sha256": "ad45be568b11f291bc2c4ffc4118dc34bce7f71646dbbcf4b244d27488ab3de7"
    },
    "uk:hot-mic:7": {
      "text": "Бля. І скільки ви почули?",
      "who": "max",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/8c9ab38f7d3f2d8990a75588934a03ec28a64944e70d2a233029d5905f73e08d.mp3",
      "duration": 2.426485260770975,
      "sha256": "8c9ab38f7d3f2d8990a75588934a03ec28a64944e70d2a233029d5905f73e08d"
    },
    "uk:hot-mic:8": {
      "text": "У тебе звук на секунду зник.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5acc2228e65defe4c602f982b2285f94af1bd7b59d7bfb00333a557815b7fe43.mp3",
      "duration": 3.504,
      "sha256": "5acc2228e65defe4c602f982b2285f94af1bd7b59d7bfb00333a557815b7fe43"
    },
    "uk:hot-mic:9": {
      "text": "Яка саме секунда? Від цього залежить моя кар’єра.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/8bd78b236f4a03d1396e28c492b83eafe46501a43bda1c5c65c3bd8b4fc0bb37.mp3",
      "duration": 6.048,
      "sha256": "8bd78b236f4a03d1396e28c492b83eafe46501a43bda1c5c65c3bd8b4fc0bb37"
    },
    "uk:hot-mic:10": {
      "text": "Ми почули: «Він несе хуйню». Потім ти завис.",
      "who": "zoya",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:tetiana",
      "model": "piper-tts-1.8.0",
      "src": "audio/7e0f9b7a180a4e366dac6cb4bbf8d320003d8538d7a3929e6fdb2431a854b9f8.mp3",
      "duration": 3.912562358276644,
      "sha256": "7e0f9b7a180a4e366dac6cb4bbf8d320003d8538d7a3929e6fdb2431a854b9f8"
    },
    "uk:hot-mic:11": {
      "text": "Може, я мав на увазі таблицю.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b1b7b515f17e4480b4f2d4cf97180e199d907ad0a28e83eafa76ef38ee1ee7e5.mp3",
      "duration": 3.264,
      "sha256": "b1b7b515f17e4480b4f2d4cf97180e199d907ad0a28e83eafa76ef38ee1ee7e5"
    },
    "uk:hot-mic:12": {
      "text": "Ти сказав, що він несе хуйню.",
      "who": "zoya",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:tetiana",
      "model": "piper-tts-1.8.0",
      "src": "audio/23363c610c26f2052bc171a321a66a8ed472bdf3c4ccc8409586bfb9de367ae7.mp3",
      "duration": 1.9736961451247166,
      "sha256": "23363c610c26f2052bc171a321a66a8ed472bdf3c4ccc8409586bfb9de367ae7"
    },
    "uk:hot-mic:13": {
      "text": "З’являється повідомлення керівника: “Максе, є відгуки?” Макс вмикає звук.",
      "who": "narrator",
      "lang": "uk",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/4786e5bb2e7d0f4fec6e893d80641160d4879fab2a925ee1be4ae69c3f26f580.mp3",
      "duration": 6.96,
      "sha256": "4786e5bb2e7d0f4fec6e893d80641160d4879fab2a925ee1be4ae69c3f26f580"
    },
    "uk:hot-mic:14": {
      "text": "Блискуча презентація. Візіонерська. Змінила моє життя.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/30c0a9dfb6984cbbb4cb6976436f54595b0f332ce6e76287796c4c630b604721.mp3",
      "duration": 5.448,
      "sha256": "30c0a9dfb6984cbbb4cb6976436f54595b0f332ce6e76287796c4c630b604721"
    },
    "uk:hot-mic:15": {
      "text": "Не обов’язково лизати йому сраку.",
      "who": "zoya",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:tetiana",
      "model": "piper-tts-1.8.0",
      "src": "audio/ef2117941ecc9dac67c2fb00cbb0be45224c16e47291c7a2379446a1685ccd1f.mp3",
      "duration": 2.2058956916099772,
      "sha256": "ef2117941ecc9dac67c2fb00cbb0be45224c16e47291c7a2379446a1685ccd1f"
    },
    "uk:hot-mic:16": {
      "text": "Я намагаюся зберегти роботу, Зоє.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/28d0923988d5e0b3866f355ccb45e645f8b148c9cdcb791a29d59aa246856066.mp3",
      "duration": 5.016,
      "sha256": "28d0923988d5e0b3866f355ccb45e645f8b148c9cdcb791a29d59aa246856066"
    },
    "uk:hot-mic:17": {
      "text": "Думаю, презентацію можна зробити коротшою.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ea35c2d875272ceb0dea1c3b390c714a64137d42707ec2102bcfdfea3695042a.mp3",
      "duration": 4.512,
      "sha256": "ea35c2d875272ceb0dea1c3b390c714a64137d42707ec2102bcfdfea3695042a"
    },
    "uk:hot-mic:18": {
      "text": "Керівник відповідає: “Чудово. Надішли скорочену версію до обіду.”",
      "who": "narrator",
      "lang": "uk",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/2446258b2d0e98cc024624753b3256831ace2d75ea998c14586ab83d56f5e6ef.mp3",
      "duration": 6.816,
      "sha256": "2446258b2d0e98cc024624753b3256831ace2d75ea998c14586ab83d56f5e6ef"
    },
    "uk:hot-mic:19": {
      "text": "Бля.",
      "who": "max",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/7994d1b233a2de01495b629372cf0c12d7184c62b4678ee2412f25ef69b6b1bb.mp3",
      "duration": 0.7430385487528345,
      "sha256": "7994d1b233a2de01495b629372cf0c12d7184c62b4678ee2412f25ef69b6b1bb"
    },
    "uk:hot-mic:20": {
      "text": "Ти все ще на дзвінку, Максе.",
      "who": "zoya",
      "lang": "uk",
      "voice": "marin",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1f5fa40d2da9a2e80f4a6799d86a8a8ddd53e6000238260ca111785b5b88f273.mp3",
      "duration": 2.856,
      "sha256": "1f5fa40d2da9a2e80f4a6799d86a8a8ddd53e6000238260ca111785b5b88f273"
    },
    "uk:hot-mic:21": {
      "text": "Це був мій відгук щодо дедлайну.",
      "who": "max",
      "lang": "uk",
      "voice": "ash",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/30e4fedbd484f8efe42f945b16948985a2121fe846bca5375eed9ecef3bdf42d.mp3",
      "duration": 3.648,
      "sha256": "30e4fedbd484f8efe42f945b16948985a2121fe846bca5375eed9ecef3bdf42d"
    },
    "uk:dad-dating:0": {
      "text": "Батя, 52, вільний і готовий спробувати додатки для знайомств. Його син Льоша, 23, пропонує перевірити англійську в анкеті.",
      "who": "narrator",
      "lang": "uk",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/58acca972b2c7e05035df918be000d73262c335b456cacb1f7ab6d131197deae.mp3",
      "duration": 10.2,
      "sha256": "58acca972b2c7e05035df918be000d73262c335b456cacb1f7ab6d131197deae"
    },
    "uk:dad-dating:1": {
      "text": "Досвідчений татусь шукає партнерку.",
      "who": "dad",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/2e25d26260b14db8d9cde8ee6faca7b22fd6c13c43b2bb6551211d16e40ebeb4.mp3",
      "duration": 3.1695238095238096,
      "sha256": "2e25d26260b14db8d9cde8ee6faca7b22fd6c13c43b2bb6551211d16e40ebeb4"
    },
    "uk:dad-dating:2": {
      "text": "Тату. Чому «татусь»?",
      "who": "son",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/671e992e40d76c20ca4f3de5008546fc87fac783f8c8e76020f75546a9e4955e.mp3",
      "duration": 1.9853061224489796,
      "sha256": "671e992e40d76c20ca4f3de5008546fc87fac783f8c8e76020f75546a9e4955e"
    },
    "uk:dad-dating:3": {
      "text": "Двадцять три роки досвіду. Ти моя рекомендація.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/c585c121cf2c3b9ef1cdd51f8d9d25b6eb7c4bc38508512c94bb467b8eefa89e.mp3",
      "duration": 4.464,
      "sha256": "c585c121cf2c3b9ef1cdd51f8d9d25b6eb7c4bc38508512c94bb467b8eefa89e"
    },
    "uk:dad-dating:4": {
      "text": "Тут це може звучати сексуально, не лише по-батьківськи.",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/0a1ca0d8f2b72638bb40c1cb17c03a30405d80016b3014cf61043e217aa5aa79.mp3",
      "duration": 5.664,
      "sha256": "0a1ca0d8f2b72638bb40c1cb17c03a30405d80016b3014cf61043e217aa5aa79"
    },
    "uk:dad-dating:5": {
      "text": "Добре. “Самотній батько. Добре готую. Зуби свої.”",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/7fea18ea1f19bb8c55e08c960725c0863fc2cf9ba5fe91c4f441873e0a6316eb.mp3",
      "duration": 6.264,
      "sha256": "7fea18ea1f19bb8c55e08c960725c0863fc2cf9ba5fe91c4f441873e0a6316eb"
    },
    "uk:dad-dating:6": {
      "text": "Перші два пункти залиш.",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/b9f8e708df587d2fb8a6f30b48134df61d5ec4a831aa93508b9789d4e7686857.mp3",
      "duration": 2.664,
      "sha256": "b9f8e708df587d2fb8a6f30b48134df61d5ec4a831aa93508b9789d4e7686857"
    },
    "uk:dad-dating:7": {
      "text": "Жінка на ім’я Helen, 49, пише йому: «Ти з кимось зустрічаєшся?»",
      "who": "narrator",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:tetiana",
      "model": "piper-tts-1.8.0",
      "src": "audio/2ed749b201978e88a535a7a8524a0e2caf1a7d71c09eda77bcb29e2b7b0dc29c.mp3",
      "duration": 5.201269841269841,
      "sha256": "2ed749b201978e88a535a7a8524a0e2caf1a7d71c09eda77bcb29e2b7b0dc29c"
    },
    "uk:dad-dating:8": {
      "text": "Так. Сина. Він прямо тут.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/191541453769ab8119b6f1cb64c461ab0e924fd00bfa6c0760e420be1b70d838.mp3",
      "duration": 4.056,
      "sha256": "191541453769ab8119b6f1cb64c461ab0e924fd00bfa6c0760e420be1b70d838"
    },
    "uk:dad-dating:9": {
      "text": "Ні, я вільний.",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/81aac159a1470ea73075e09f1cf2566ebdca9b428658ec5cd9f58db1f60baa2a.mp3",
      "duration": 2.352,
      "sha256": "81aac159a1470ea73075e09f1cf2566ebdca9b428658ec5cd9f58db1f60baa2a"
    },
    "uk:dad-dating:10": {
      "text": "Вона пише, що не шукає стосунків без зобов’язань. У мене є піджак.",
      "who": "dad",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/45d590cd45280c6f621b004fc464110e6a42f5e25c64351a2d86d34690255c07.mp3",
      "duration": 5.630839002267574,
      "sha256": "45d590cd45280c6f621b004fc464110e6a42f5e25c64351a2d86d34690255c07"
    },
    "uk:dad-dating:11": {
      "text": "Вона не про одяг питає.",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/f2d1d738323665849d390f775002f31afd8796f66cfd501b8829a2377cfc8ef5.mp3",
      "duration": 2.352,
      "sha256": "f2d1d738323665849d390f775002f31afd8796f66cfd501b8829a2377cfc8ef5"
    },
    "uk:dad-dating:12": {
      "text": "Я теж шукаю щось серйозне.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d99b4a552e8b383e2c3bf0e0e8d7c3d6bc191a80ea1f4c4b589c41c2deebb20d.mp3",
      "duration": 3.768,
      "sha256": "d99b4a552e8b383e2c3bf0e0e8d7c3d6bc191a80ea1f4c4b589c41c2deebb20d"
    },
    "uk:dad-dating:13": {
      "text": "Можна додати, що я хороший у ліжку?",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/fcfcadfc1b3bbbde1bcaea1cb8c95ee54b250bc8e1ed28ea942489f2d34888a0.mp3",
      "duration": 4.92,
      "sha256": "fcfcadfc1b3bbbde1bcaea1cb8c95ee54b250bc8e1ed28ea942489f2d34888a0"
    },
    "uk:dad-dating:14": {
      "text": "Ти зараз скажеш, що спиш по вісім годин?",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/e2b7d9b4a12cf53d7013d76ebee505bd2565ed981ddbf120870b8a958a36754e.mp3",
      "duration": 3.768,
      "sha256": "e2b7d9b4a12cf53d7013d76ebee505bd2565ed981ddbf120870b8a958a36754e"
    },
    "uk:dad-dating:15": {
      "text": "Дев’ять. І ковдру не забираю.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/ae9059a9906e29ddad4226c29d6ad649162e34e014534acf86b2df3fbfae6e31.mp3",
      "duration": 4.248,
      "sha256": "ae9059a9906e29ddad4226c29d6ad649162e34e014534acf86b2df3fbfae6e31"
    },
    "uk:dad-dating:16": {
      "text": "Давай залишимо це для другого побачення.",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1c9c698f6abbf4c8df9473bfc1b1b6de0f17ced6a8c6fb0f3a8e9e5d6854d8bf.mp3",
      "duration": 3.864,
      "sha256": "1c9c698f6abbf4c8df9473bfc1b1b6de0f17ced6a8c6fb0f3a8e9e5d6854d8bf"
    },
    "uk:dad-dating:17": {
      "text": "Helen пише: “Кава в суботу?” Батя починає друкувати про свою пенсію.",
      "who": "narrator",
      "lang": "uk",
      "voice": "cedar",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/68d22fbd3c72cc491a35026193b7f23c6bf5133ec0a38f6b1e4b88c8c173804f.mp3",
      "duration": 6.168,
      "sha256": "68d22fbd3c72cc491a35026193b7f23c6bf5133ec0a38f6b1e4b88c8c173804f"
    },
    "uk:dad-dating:18": {
      "text": "Кава — чудово. Як щодо одинадцятої?",
      "who": "son",
      "lang": "uk",
      "voice": "echo",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/5365b5f7b0834a14c366887c24fb12aed45acbe89e6db6ff8c1b30dcb02f74dc.mp3",
      "duration": 4.464,
      "sha256": "5365b5f7b0834a14c366887c24fb12aed45acbe89e6db6ff8c1b30dcb02f74dc"
    },
    "uk:dad-dating:19": {
      "text": "Готово. Вона надіслала сердечко.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/d915dcd3e660aeb02d268dad2824f98b78f09f1625c78417c39629b729e1dd4c.mp3",
      "duration": 3.648,
      "sha256": "d915dcd3e660aeb02d268dad2824f98b78f09f1625c78417c39629b729e1dd4c"
    },
    "uk:dad-dating:20": {
      "text": "Бачиш? «Досвідчений татусь» не знадобився.",
      "who": "son",
      "lang": "uk",
      "provider": "Piper",
      "voice": "uk_UA-ukrainian_tts-medium:mykyta",
      "model": "piper-tts-1.8.0",
      "src": "audio/4aefd6d58c36d288cba5545493c043dc846b093c427b964e536220efc293ee04.mp3",
      "duration": 3.9938321995464854,
      "sha256": "4aefd6d58c36d288cba5545493c043dc846b093c427b964e536220efc293ee04"
    },
    "uk:dad-dating:21": {
      "text": "Вона ще дриль не бачила.",
      "who": "dad",
      "lang": "uk",
      "voice": "onyx",
      "model": "gpt-4o-mini-tts-2025-12-15",
      "src": "audio/1a6700b743521d156601e3ef637abb397b8c0ce0b1705a9dcc58f21331e68cce.mp3",
      "duration": 2.856,
      "sha256": "1a6700b743521d156601e3ef637abb397b8c0ce0b1705a9dcc58f21331e68cce"
    },
    "size-isnt-the-point:0": {
      "text": "Max, 28, and Roxy, 29, have been together for six months. Tonight Max finally admits what has been worrying him.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/70022758aa81153310629023f467c14819ee4b802aa4ea1134196add87aad057.mp3",
      "duration": 8.016145124716553,
      "sha256": "0c648f4716c805e46a4b5b451b50f4c9668318dac093e46054b6e763c7237777"
    },
    "size-isnt-the-point:1": {
      "text": "I keep thinking my dick is too small.",
      "who": "max",
      "voice": "p236",
      "src": "audio/331b6de82e330b6f96853e3aebe7d27b319e6471d50ab909aa7a6cee8fbb8309.mp3",
      "duration": 2.011156462585034,
      "sha256": "23dd3121daa6243ed926141266c5edca448ec27a65e85d14e108bcbaa660ac7d"
    },
    "size-isnt-the-point:2": {
      "text": "Too small for what?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/fabf2a64ac6258d840a5114e571eedecb0294ab7fa1b0f4f642f6d4c32344f9b.mp3",
      "duration": 1.3029478458049886,
      "sha256": "f63f75e1c46a3e80fa5f5f37d0f9296ee0f0c4c2917dbcbfb1d7b0c160ee2510"
    },
    "size-isnt-the-point:3": {
      "text": "To make you come from penetration.",
      "who": "max",
      "voice": "p236",
      "src": "audio/a3e3131e7d6916ec19df74c6fe8aec06b058bdcc4315ab3ccde140aea46c3b3c.mp3",
      "duration": 1.9066666666666667,
      "sha256": "c979bb6614dae75166bd29c1cb1c218c9f6485aa09f6ef2bf84bb75481f252a4"
    },
    "size-isnt-the-point:4": {
      "text": "I usually don’t come from penetration. That’s about what my body likes, not your size.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/0f75f7d7a7e93719a92fd1b72ad5bee2e2f5e2ab4f82d5557c08cafb470f1073.mp3",
      "duration": 4.509931972789116,
      "sha256": "a96d1c46f7eb26f871215ed18f76b592a81b71a28e7fcbbf8542d55ac7eba04b"
    },
    "size-isnt-the-point:5": {
      "text": "You could have told me.",
      "who": "max",
      "voice": "p236",
      "src": "audio/d23212ec922578179e0edad3b0be2c87275c371f9e19529919f2003dac0be226.mp3",
      "duration": 1.2448979591836735,
      "sha256": "581934ee5c920aafefd1d06c4238fa6b9d924eb1590562d886ac8c2fb0ca96f4"
    },
    "size-isnt-the-point:6": {
      "text": "I’m telling you now. I really like it when you go down on me.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/93e2d850a9cb2962ef32fe1e1b1d6c12f72c1a1cfd2edf3363a6fab3efe3c916.mp3",
      "duration": 3.012244897959184,
      "sha256": "309a9218e26b0e26d8d59a78f21ae021b5cf9555ea3cd73396fa8d482b9c59b1"
    },
    "size-isnt-the-point:7": {
      "text": "Go down? Under the blanket?",
      "who": "max",
      "voice": "p236",
      "src": "audio/5dfb9b4077d8f1368aa1e9f6a14690989fcb0b485e79886ee05ff36746f783db.mp3",
      "duration": 2.164716553287982,
      "sha256": "2cc2e6f6048dab9f41e33beb107da306d5b81e9096de5fe8912ea57fb38c4210"
    },
    "size-isnt-the-point:8": {
      "text": "Give someone oral sex.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/013aac5b513dd305608d73e7a8abb2d713c1a7496b27adab422be0c830a6e9bc.mp3",
      "duration": 1.6396371882086167,
      "sha256": "03b1bd06224db3f8c3c7c972bf8cdfca2006e91bdde249e82572398b492e8b83"
    },
    "size-isnt-the-point:9": {
      "text": "Okay. Show me what you like, and tell me if I miss.",
      "who": "max",
      "voice": "p236",
      "src": "audio/7c58985ac2881de6bba3b8d4fbcfa4dd0b38d60a7f2a5413a131b2fb9bc3e172.mp3",
      "duration": 3.058684807256236,
      "sha256": "8ec8abccf9266024d378cef2dc30de7f081395ba39597ad22ac329af91ead588"
    },
    "size-isnt-the-point:10": {
      "text": "Deal. No mind reading, no performance review.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/ae691ca9824b724816946aa01e3a911b0ecfb062ab0acdaa7a33167714c54170.mp3",
      "duration": 3.5230839002267573,
      "sha256": "6d3c4320e49bb83b6f411c7c030f9a43550b503eccec312830c17da564d949c2"
    },
    "size-isnt-the-point:11": {
      "text": "Some time later, Max emerges from under the blanket looking surprised and extremely pleased with himself.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/861ca58981ce2efe257fd7720eb411a46c5cfe5f62d67e5d3e149887f165a52d.mp3",
      "duration": 6.144308390022676,
      "sha256": "d95de1cba26003b9acb0269fede9bc00cade34555ffbbf6e50fe72f11b965f5b"
    },
    "size-isnt-the-point:12": {
      "text": "That was much better than trying to prove something with my dick.",
      "who": "max",
      "voice": "p236",
      "src": "audio/c6c88098be14d0398f8ad528abf3453b1d569522fc5b70e2c0c55a97e9cd99a8.mp3",
      "duration": 2.719365079365079,
      "sha256": "0073da1dc244bd177cacbb8e798ac6eaf067211d348f95d8b0b8f5aa202dd984"
    },
    "size-isnt-the-point:13": {
      "text": "It was much better for me too.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/4f1148000b01675a08b114330e09f5ec0c1fa789761d8e753b7de943ff2ca749.mp3",
      "duration": 1.697687074829932,
      "sha256": "4267a3348430bf9713a7de8b9578cad883420850122bfd69d3ba393ad6e483fa"
    },
    "size-isnt-the-point:14": {
      "text": "I’m glad. I liked it more too.",
      "who": "max",
      "voice": "p236",
      "src": "audio/d737a83dc6d18e22a2cfe3197addc6a9ad19cb37b8e7f2892610436afb3a9872.mp3",
      "duration": 2.4317460317460315,
      "sha256": "c0546ad870c8d3677673c279667711e540f980772e73137e28dffc3278a0323c"
    },
    "size-isnt-the-point:15": {
      "text": "Want to try sixty-nine sometime?",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/5982bb578dcd5d9f72f2d8760eb6c8b4f1097b69b31883ed454512ff5ad8b4fe.mp3",
      "duration": 1.7789569160997731,
      "sha256": "0eae7f2fe7d5b32bd838514c430a1b8bbc1e34f058d2bff6e76d750df8292ed5"
    },
    "size-isnt-the-point:16": {
      "text": "At 6:09? Very specific, but I’m free.",
      "who": "max",
      "voice": "p236",
      "src": "audio/77f1390095f1a7664287a922a40d6c96b0a6d19d8d3a03c7db18d660d4476a75.mp3",
      "duration": 3.2444444444444445,
      "sha256": "cd5f8846b5398ad700feec9221f6b9cd51f71cf1e32f371cc4174f3c96634327"
    },
    "size-isnt-the-point:17": {
      "text": "A position where partners give each other oral sex at the same time.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/08f4636d44dd4c4cb0b2df885dee2553f9cf9af048252eda35c4d70c6510b71f.mp3",
      "duration": 3.3463038548752833,
      "sha256": "918ccb525bc2e3c5ea8b66c9ededb76cc7cb61738e1b1360cec45bfabed1193f"
    },
    "size-isnt-the-point:18": {
      "text": "They try it after a brief discussion of knees, pillows, and emergency hand signals. Both start laughing, then quickly stop laughing.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/6d2e85e31e68ac9def16dda692580d9bbf1530570c3f3658f65903cf276a6572.mp3",
      "duration": 8.259954648526078,
      "sha256": "dd74e98ceb0f967cb3d3093450c3406a141292d2fff0443d5902843e3c291654"
    },
    "size-isnt-the-point:19": {
      "text": "I think I like this more than the classic version.",
      "who": "max",
      "voice": "p236",
      "src": "audio/2c85e325fecf8e534b6b842b699b70587d085964fa06388d58611f3dd1dafa5e.mp3",
      "duration": 2.4407256235827663,
      "sha256": "ca8893f5a212b5b5a562d6f10f58ae0d4f9a1fe5bcd22bdae67bd5240d5f0cfc"
    },
    "size-isnt-the-point:20": {
      "text": "Same. Also, no one is grading your penis.",
      "who": "roxy",
      "voice": "p225",
      "src": "audio/426238ab42659c5a7859eb764974fb9837d3983336ca9b2675352069f642385b.mp3",
      "duration": 3.372154195011338,
      "sha256": "22a5a9959dc671366249e4a55d95c8aca0b56f692c0fcd0d79c61dc8128d77f2"
    },
    "size-isnt-the-point:21": {
      "text": "Good. It failed the written exam.",
      "who": "max",
      "voice": "p236",
      "src": "audio/ba3d103a292fbedf0319f89b7af8502bab5c709a706dc778d65d6ef2b624970c.mp3",
      "duration": 2.245986394557823,
      "sha256": "5e65533b2996c774091a7d32b9a0e0715e71bfcbb6ff7666e912639fcfaf4ef7"
    },
    "size-isnt-the-point:22": {
      "text": "They kept talking, experimenting, and choosing what felt good instead of what was supposedly “normal”. They were very glad they had found each other.",
      "who": "narrator",
      "voice": "p230",
      "src": "audio/c1d7f2fc612979bdb44bc93fa130a5d1a86e86d0a895172eb70c37e30a6c4279.mp3",
      "duration": 8.03936507936508,
      "sha256": "680b62151d2a76310621376e912279f19ff2defe704c533b8a30389e563c7971"
    },
    "ru:size-isnt-the-point:0": {
      "text": "Максу, 28, и Рокси, 29, вместе уже полгода. Сегодня Макс наконец признаётся, что его тревожит.",
      "who": "narrator",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/2ae095dbdb895a37fcdf640f54ccf96d8124d3a67e501b1657c8259b5fa94619.mp3",
      "duration": 10.27482993197279,
      "sha256": "2ae095dbdb895a37fcdf640f54ccf96d8124d3a67e501b1657c8259b5fa94619"
    },
    "ru:size-isnt-the-point:1": {
      "text": "Я всё думаю, что у меня слишком маленький член.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/b0fab55898888f2757c3e4a4b4d55a6a272f125a3508ebf1dd472e03035873de.mp3",
      "duration": 2.8908843537414968,
      "sha256": "b0fab55898888f2757c3e4a4b4d55a6a272f125a3508ebf1dd472e03035873de"
    },
    "ru:size-isnt-the-point:2": {
      "text": "Слишком маленький для чего?",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/61ecc477b838695325b4a42564408713e5b3c5c4bfe2b13bf83002d12adbd3e0.mp3",
      "duration": 1.8692063492063493,
      "sha256": "61ecc477b838695325b4a42564408713e5b3c5c4bfe2b13bf83002d12adbd3e0"
    },
    "ru:size-isnt-the-point:3": {
      "text": "Чтобы ты кончила от проникновения.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/e100bc911097bae16207c2a6493043574621983a83420559410268f7a053e1dd.mp3",
      "duration": 2.159455782312925,
      "sha256": "e100bc911097bae16207c2a6493043574621983a83420559410268f7a053e1dd"
    },
    "ru:size-isnt-the-point:4": {
      "text": "Я обычно не кончаю от проникновения. Дело в том, что нравится моему телу, а не в твоём размере.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/fe7c0b1725b57b3e0d835293fff7324b0153a51105abccd18e70d408ea71e76d.mp3",
      "duration": 6.757006802721088,
      "sha256": "fe7c0b1725b57b3e0d835293fff7324b0153a51105abccd18e70d408ea71e76d"
    },
    "ru:size-isnt-the-point:5": {
      "text": "Ты могла сказать.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/18d06e4199248221149e272732893f77085f74f50de71e7e9993912ee2a5e85b.mp3",
      "duration": 1.230657596371882,
      "sha256": "18d06e4199248221149e272732893f77085f74f50de71e7e9993912ee2a5e85b"
    },
    "ru:size-isnt-the-point:6": {
      "text": "Вот сейчас и говорю. Мне очень нравится, когда ты делаешь мне куннилингус.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/0bb1bcacb9799ea083c352ba50b5273fca275b130c16dedea2678c6a012b665b.mp3",
      "duration": 5.932698412698413,
      "sha256": "0bb1bcacb9799ea083c352ba50b5273fca275b130c16dedea2678c6a012b665b"
    },
    "ru:size-isnt-the-point:7": {
      "text": "Go down? Под одеяло?",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/5a78fef4b0cd47d0a705bd8f4d8881e6b916a8dff2517be238a32c005fd3a35e.mp3",
      "duration": 1.8692063492063493,
      "sha256": "5a78fef4b0cd47d0a705bd8f4d8881e6b916a8dff2517be238a32c005fd3a35e"
    },
    "ru:size-isnt-the-point:8": {
      "text": "Сделать человеку оральные ласки.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/8e81922c62be9bef1e7bdaecb30ea7dfd03321931e751c055fb7a3d68ca0dd15.mp3",
      "duration": 2.426485260770975,
      "sha256": "8e81922c62be9bef1e7bdaecb30ea7dfd03321931e751c055fb7a3d68ca0dd15"
    },
    "ru:size-isnt-the-point:9": {
      "text": "Ладно. Покажи, что тебе нравится, и говори, если я промахиваюсь.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/c4cb2bc1ce98fe2dd1da51d80cad7c7670ff67e86026527b92e46dca21ad0410.mp3",
      "duration": 4.388571428571429,
      "sha256": "c4cb2bc1ce98fe2dd1da51d80cad7c7670ff67e86026527b92e46dca21ad0410"
    },
    "ru:size-isnt-the-point:10": {
      "text": "Договорились. Без чтения мыслей и годовой оценки эффективности.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/d1f898dfb95109fd7e09178c7c7ac11bb1ffc2354d1d5321df1f6d3f1f8d7440.mp3",
      "duration": 4.806530612244898,
      "sha256": "d1f898dfb95109fd7e09178c7c7ac11bb1ffc2354d1d5321df1f6d3f1f8d7440"
    },
    "ru:size-isnt-the-point:11": {
      "text": "Некоторое время спустя Макс появляется из-под одеяла — удивлённый и чрезвычайно довольный собой.",
      "who": "narrator",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/f81c96f359155e1b6d3b3b80aed9fdd3cd89660cb4a63e12f6c450eaf4e740c0.mp3",
      "duration": 7.058866213151927,
      "sha256": "f81c96f359155e1b6d3b3b80aed9fdd3cd89660cb4a63e12f6c450eaf4e740c0"
    },
    "ru:size-isnt-the-point:12": {
      "text": "Это было гораздо лучше, чем пытаться что-то доказать членом.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/aa6e676cacb3d62119dd7a6262a5e78cd95ad64fb9baf1fa9ebcde8375c564c6.mp3",
      "duration": 3.7035827664399092,
      "sha256": "aa6e676cacb3d62119dd7a6262a5e78cd95ad64fb9baf1fa9ebcde8375c564c6"
    },
    "ru:size-isnt-the-point:13": {
      "text": "Для меня тоже было гораздо лучше.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/4271b558905442dfd0932e1d6c87ed06457773e211aeb6418c71a1f990f0917c.mp3",
      "duration": 2.2639455782312927,
      "sha256": "4271b558905442dfd0932e1d6c87ed06457773e211aeb6418c71a1f990f0917c"
    },
    "ru:size-isnt-the-point:14": {
      "text": "Я рад. Мне тоже так понравилось больше.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/166fb4492acb02e17fdd5103e44da53558115013fd4a1b212dd098d9b5f1d189.mp3",
      "duration": 3.0418140589569163,
      "sha256": "166fb4492acb02e17fdd5103e44da53558115013fd4a1b212dd098d9b5f1d189"
    },
    "ru:size-isnt-the-point:15": {
      "text": "Хочешь как-нибудь попробовать шестьдесят девять?",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/7009054bf4994678282bb3039732302ab6bfc01de356aa74bc5dad9d989a9007.mp3",
      "duration": 3.4481632653061225,
      "sha256": "7009054bf4994678282bb3039732302ab6bfc01de356aa74bc5dad9d989a9007"
    },
    "ru:size-isnt-the-point:16": {
      "text": "В 6:09? Очень конкретно, но я свободен.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/ac2ec2554f514cf4a4d32d65b6eac558f9d3df15ba6f9ce9e15080a11559f401.mp3",
      "duration": 3.355283446712018,
      "sha256": "ac2ec2554f514cf4a4d32d65b6eac558f9d3df15ba6f9ce9e15080a11559f401"
    },
    "ru:size-isnt-the-point:17": {
      "text": "Поза, в которой партнёры одновременно делают друг другу оральные ласки.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/da3fed095539bae3d3d21555655dcf94919843745480c79db28ca08c1b367315.mp3",
      "duration": 4.806530612244898,
      "sha256": "da3fed095539bae3d3d21555655dcf94919843745480c79db28ca08c1b367315"
    },
    "ru:size-isnt-the-point:18": {
      "text": "После короткого обсуждения коленей, подушек и аварийных жестов они пробуют. Оба начинают смеяться, а потом очень быстро перестают.",
      "who": "narrator",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/72f1c4ad79c752255c6703a88c8b28f90d2df3064ff8125e98bafe90cff9fb6e.mp3",
      "duration": 9.160272108843538,
      "sha256": "72f1c4ad79c752255c6703a88c8b28f90d2df3064ff8125e98bafe90cff9fb6e"
    },
    "ru:size-isnt-the-point:19": {
      "text": "Кажется, мне это нравится больше классики.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/c59bd411d04bbf06f631b7de4fa64d1a5a257c8ee4a5251a21471425970d6030.mp3",
      "duration": 2.8908843537414968,
      "sha256": "c59bd411d04bbf06f631b7de4fa64d1a5a257c8ee4a5251a21471425970d6030"
    },
    "ru:size-isnt-the-point:20": {
      "text": "Мне тоже. И вообще, твой член никто не оценивает.",
      "who": "roxy",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/63ad96912206d661f3b81d99813b54dc6cd5804a2bf067dad598ede83ead6792.mp3",
      "duration": 3.81968253968254,
      "sha256": "63ad96912206d661f3b81d99813b54dc6cd5804a2bf067dad598ede83ead6792"
    },
    "ru:size-isnt-the-point:21": {
      "text": "Отлично. Письменный экзамен он провалил.",
      "who": "max",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-denis-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/ee532f0cb8a48e06e89bbb006f5be3efe109b73bf5e86a61c64ff4ac555ff097.mp3",
      "duration": 2.9257142857142857,
      "sha256": "ee532f0cb8a48e06e89bbb006f5be3efe109b73bf5e86a61c64ff4ac555ff097"
    },
    "ru:size-isnt-the-point:22": {
      "text": "Они продолжали разговаривать, пробовать новое и выбирать то, что приятно им, а не то, что якобы «нормально». И очень радовались, что нашли друг друга.",
      "who": "narrator",
      "lang": "ru",
      "provider": "Piper",
      "voice": "ru_RU-irina-medium",
      "model": "piper-tts-1.8.0",
      "src": "audio/190bb05e9c516eb1cee34ae12504427e8e285fd9914e80010409b9baee012718.mp3",
      "duration": 9.97297052154195,
      "sha256": "190bb05e9c516eb1cee34ae12504427e8e285fd9914e80010409b9baee012718"
    },
    "es:size-isnt-the-point:0": {
      "text": "Max, 28, y Roxy, 29, llevan seis meses juntos. Esta noche Max por fin confiesa lo que le preocupa.",
      "who": "narrator",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/0ab0a1013b2cd214de60fafd447493905e816fdb02335175d37b94be28888ac2.mp3",
      "duration": 7.047256235827664,
      "sha256": "0ab0a1013b2cd214de60fafd447493905e816fdb02335175d37b94be28888ac2"
    },
    "es:size-isnt-the-point:1": {
      "text": "No dejo de pensar que tengo el pene demasiado pequeño.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/3c2665b9a5f5dff5bd379425f0e919afd6cf523603b4e3645f8e0ab6592bdf23.mp3",
      "duration": 2.9837641723356008,
      "sha256": "3c2665b9a5f5dff5bd379425f0e919afd6cf523603b4e3645f8e0ab6592bdf23"
    },
    "es:size-isnt-the-point:2": {
      "text": "¿Demasiado pequeño para qué?",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8ee9fd4586ec9e029f6b5a461858ff3f61c60927c50870aeb98926cb9704ab7c.mp3",
      "duration": 1.7182766439909296,
      "sha256": "8ee9fd4586ec9e029f6b5a461858ff3f61c60927c50870aeb98926cb9704ab7c"
    },
    "es:size-isnt-the-point:3": {
      "text": "Para hacer que te corras con la penetración.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/9e170895fb908dc8ac44563963276b98a9d1c6b005e6ee0b106a93bd64fef3e5.mp3",
      "duration": 2.391655328798186,
      "sha256": "9e170895fb908dc8ac44563963276b98a9d1c6b005e6ee0b106a93bd64fef3e5"
    },
    "es:size-isnt-the-point:4": {
      "text": "Normalmente no me corro con la penetración. Se trata de lo que le gusta a mi cuerpo, no de tu tamaño.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/22e579abe84d3abc12ab3e2c8190ca23143a497c599085d667ca686572595d83.mp3",
      "duration": 5.630839002267574,
      "sha256": "22e579abe84d3abc12ab3e2c8190ca23143a497c599085d667ca686572595d83"
    },
    "es:size-isnt-the-point:5": {
      "text": "Podrías habérmelo dicho.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/dfa5cd239d3a451004caf6d8ef9f811935ec18083ec68d9285c6df6a8f07626b.mp3",
      "duration": 1.3235374149659864,
      "sha256": "dfa5cd239d3a451004caf6d8ef9f811935ec18083ec68d9285c6df6a8f07626b"
    },
    "es:size-isnt-the-point:6": {
      "text": "Te lo estoy diciendo ahora. Me encanta cuando me comes el coño.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/3690efbd446f0f1de1a40ca872f0bdfed8449395b846ef9599e34ac626930a24.mp3",
      "duration": 3.2856235827664397,
      "sha256": "3690efbd446f0f1de1a40ca872f0bdfed8449395b846ef9599e34ac626930a24"
    },
    "es:size-isnt-the-point:7": {
      "text": "¿Comértelo? ¿Con cubiertos?",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/786cf9475c0ed323c6862013621ac0da5def3f8eb52c24b629ffadc79439da0f.mp3",
      "duration": 1.4512471655328798,
      "sha256": "786cf9475c0ed323c6862013621ac0da5def3f8eb52c24b629ffadc79439da0f"
    },
    "es:size-isnt-the-point:8": {
      "text": "Practicarle sexo oral a una mujer.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/cfddcd8f6f3821fb6c2fa5db37aab162e23178918a904657df0622518688e8de.mp3",
      "duration": 1.9620861678004535,
      "sha256": "cfddcd8f6f3821fb6c2fa5db37aab162e23178918a904657df0622518688e8de"
    },
    "es:size-isnt-the-point:9": {
      "text": "Vale. Enséñame lo que te gusta y dime si no acierto.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/999800a10be483bc75f177745c7e015d3ae308617e420ba8f7930c8b2155efe6.mp3",
      "duration": 3.0882539682539685,
      "sha256": "999800a10be483bc75f177745c7e015d3ae308617e420ba8f7930c8b2155efe6"
    },
    "es:size-isnt-the-point:10": {
      "text": "Trato hecho. Nada de leer la mente ni de evaluaciones de rendimiento.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/effd03242a1d5759b094aca467fe579f9d088f0469a49f680bf7cba996e5991b.mp3",
      "duration": 3.7151927437641725,
      "sha256": "effd03242a1d5759b094aca467fe579f9d088f0469a49f680bf7cba996e5991b"
    },
    "es:size-isnt-the-point:11": {
      "text": "Un rato después, Max sale de debajo de la manta sorprendido y tremendamente satisfecho consigo mismo.",
      "who": "narrator",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/26f45c97f95ae159984f436e90809546587808ebd63987349ca2c4ac71259de7.mp3",
      "duration": 6.0836281179138325,
      "sha256": "26f45c97f95ae159984f436e90809546587808ebd63987349ca2c4ac71259de7"
    },
    "es:size-isnt-the-point:12": {
      "text": "Eso ha sido mucho mejor que intentar demostrar algo con el pene.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/90c80557bb99b31279f8a028ad65823cf84f9a4892939c27ddc9399bc9a805c6.mp3",
      "duration": 3.4946031746031747,
      "sha256": "90c80557bb99b31279f8a028ad65823cf84f9a4892939c27ddc9399bc9a805c6"
    },
    "es:size-isnt-the-point:13": {
      "text": "Para mí también ha sido mucho mejor.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/db6db2526d5417d148daa0b808c33cb3f113156c2ac1ff42d536ec3c14b273a4.mp3",
      "duration": 1.9272562358276644,
      "sha256": "db6db2526d5417d148daa0b808c33cb3f113156c2ac1ff42d536ec3c14b273a4"
    },
    "es:size-isnt-the-point:14": {
      "text": "Me alegro. A mí también me ha gustado más.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c226d50441674af6e758c3d5eb2e8ad4a2481804025ae5032afb8bba7cd6a1bd.mp3",
      "duration": 2.48453514739229,
      "sha256": "c226d50441674af6e758c3d5eb2e8ad4a2481804025ae5032afb8bba7cd6a1bd"
    },
    "es:size-isnt-the-point:15": {
      "text": "¿Quieres probar el sesenta y nueve algún día?",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2729b97bcc2bcb209c66f03d453d75900c254fe48fdbc5b91569d384b77b304b.mp3",
      "duration": 2.6122448979591835,
      "sha256": "2729b97bcc2bcb209c66f03d453d75900c254fe48fdbc5b91569d384b77b304b"
    },
    "es:size-isnt-the-point:16": {
      "text": "¿A las 6:09? Muy concreto, pero estoy libre.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/e75af63b08c2c11ffe0afbff1a354f620b1b56a4311e200add979d8c0b4727a8.mp3",
      "duration": 3.355283446712018,
      "sha256": "e75af63b08c2c11ffe0afbff1a354f620b1b56a4311e200add979d8c0b4727a8"
    },
    "es:size-isnt-the-point:17": {
      "text": "Una postura en la que dos personas se practican sexo oral al mismo tiempo.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/768fa72de1c9bc89aa367d129235566151c4b51f877cc6b778133a216f911256.mp3",
      "duration": 4.051882086167801,
      "sha256": "768fa72de1c9bc89aa367d129235566151c4b51f877cc6b778133a216f911256"
    },
    "es:size-isnt-the-point:18": {
      "text": "Lo prueban después de hablar brevemente de rodillas, almohadas y señales de emergencia. Los dos empiezan a reírse y dejan de hacerlo muy pronto.",
      "who": "narrator",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/fa276f49b8b61bf59e25f727a66ed85cc821d2c10f0f253f9ea63869c2c284cd.mp3",
      "duration": 7.87156462585034,
      "sha256": "fa276f49b8b61bf59e25f727a66ed85cc821d2c10f0f253f9ea63869c2c284cd"
    },
    "es:size-isnt-the-point:19": {
      "text": "Creo que esto me gusta más que la versión clásica.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/7754d44662f833832e8030d70112d459553d9f9c17090267ecbd5426922828cd.mp3",
      "duration": 2.693514739229025,
      "sha256": "7754d44662f833832e8030d70112d459553d9f9c17090267ecbd5426922828cd"
    },
    "es:size-isnt-the-point:20": {
      "text": "A mí también. Además, nadie está puntuando tu pene.",
      "who": "roxy",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/04ddc4da3bd04e2befdcda8d3e1b8458fed0fea459a0fe157d3f30a37f125d82.mp3",
      "duration": 3.355283446712018,
      "sha256": "04ddc4da3bd04e2befdcda8d3e1b8458fed0fea459a0fe157d3f30a37f125d82"
    },
    "es:size-isnt-the-point:21": {
      "text": "Bien. Suspendió el examen escrito.",
      "who": "max",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a4cdbc5e32b32902a3367899f69bfd5dc7b2cd6df3c5935bad96441d07fdba5b.mp3",
      "duration": 2.2407256235827666,
      "sha256": "a4cdbc5e32b32902a3367899f69bfd5dc7b2cd6df3c5935bad96441d07fdba5b"
    },
    "es:size-isnt-the-point:22": {
      "text": "Siguieron hablando, experimentando y eligiendo lo que les daba placer en vez de lo que supuestamente era “normal”. Estaban muy felices de haberse encontrado.",
      "who": "narrator",
      "lang": "es",
      "provider": "Piper",
      "voice": "es_ES-sharvard-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/75e97f744fc62a5cf20fd461c0e2dd89bf0a5d30906d4619e3a17b1a8c9f18f3.mp3",
      "duration": 8.649433106575964,
      "sha256": "75e97f744fc62a5cf20fd461c0e2dd89bf0a5d30906d4619e3a17b1a8c9f18f3"
    },
    "ja:hot-mic:0": {
      "text": "28 歳のマックスと 31 歳のゾーヤは仕事の電話中です。彼らのマネージャーは、物事を簡潔にすることに関する 12 番目のスライドを提示しています。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b47557e02b39f39c2cc9b9d79cc10123d91b8a177b08fc8411c1395408556393.mp3",
      "duration": 11.853786848072563,
      "sha256": "b47557e02b39f39c2cc9b9d79cc10123d91b8a177b08fc8411c1395408556393"
    },
    "ja:hot-mic:1": {
      "text": "この会議はただのメールだったかもしれない。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/635c73fd19eb4a4939abc4aa07097a92ff62f71044ac7c31437a1c5049b3d83d.mp3",
      "duration": 3.1927437641723357,
      "sha256": "635c73fd19eb4a4939abc4aa07097a92ff62f71044ac7c31437a1c5049b3d83d"
    },
    "ja:hot-mic:2": {
      "text": "マックス。マイク。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/62d69364881acb93a3537ba392edcaf678d69041de1f99d9a6e2c8d1a23bcec0.mp3",
      "duration": 1.8808163265306121,
      "sha256": "62d69364881acb93a3537ba392edcaf678d69041de1f99d9a6e2c8d1a23bcec0"
    },
    "ja:hot-mic:3": {
      "text": "リラックス。ミュートにしました。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/ed0612de45bbf22b09b5b3be885d26f016be49f441cfba675f808c7a550afd8d.mp3",
      "duration": 2.5658049886621317,
      "sha256": "ed0612de45bbf22b09b5b3be885d26f016be49f441cfba675f808c7a550afd8d"
    },
    "ja:hot-mic:4": {
      "text": "マイクはまだオンになっています。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2064691504a4143fcc5d561ef75bc29472e02f02843f2d86cfe7e6650930c7a3.mp3",
      "duration": 2.2755555555555556,
      "sha256": "2064691504a4143fcc5d561ef75bc29472e02f02843f2d86cfe7e6650930c7a3"
    },
    "ja:hot-mic:5": {
      "text": "では、なぜ小さなスピーカーに取り消し線が付いているのでしょうか?",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f9a87636fec7c8b951ed60cd6bbbeab0ef84b17059f0edbe98b18da85704aa12.mp3",
      "duration": 4.342131519274377,
      "sha256": "f9a87636fec7c8b951ed60cd6bbbeab0ef84b17059f0edbe98b18da85704aa12"
    },
    "ja:hot-mic:6": {
      "text": "スピーカーをミュートにしました。私たちの声が聞こえません。あなたの声が聞こえます。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/91d5eb666f97580d2e197b755d51c38c5e1e2321b6e2ab59821df3398bafbd04.mp3",
      "duration": 6.362267573696145,
      "sha256": "91d5eb666f97580d2e197b755d51c38c5e1e2321b6e2ab59821df3398bafbd04"
    },
    "ja:hot-mic:7": {
      "text": "ああ、くそ。どのくらい聞きましたか？",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/8f726fd62e643bc63c476ff660e6157c9f6bb9d1db0b258807d02affcd8159fd.mp3",
      "duration": 2.8328344671201813,
      "sha256": "8f726fd62e643bc63c476ff660e6157c9f6bb9d1db0b258807d02affcd8159fd"
    },
    "ja:hot-mic:8": {
      "text": "音声が一瞬途切れました。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/582cdab15671506d520daaf2d1944db7306f01c481bbf7e6784a46b5ce0f09ad.mp3",
      "duration": 2.2639455782312927,
      "sha256": "582cdab15671506d520daaf2d1944db7306f01c481bbf7e6784a46b5ce0f09ad"
    },
    "ja:hot-mic:9": {
      "text": "何秒目？私のキャリアはそれにかかっています。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/ae9dc29cdd68d36cba7855b035983369b5549ebf7cd9483f7d18438e62f6217c.mp3",
      "duration": 3.7384126984126986,
      "sha256": "ae9dc29cdd68d36cba7855b035983369b5549ebf7cd9483f7d18438e62f6217c"
    },
    "ja:hot-mic:10": {
      "text": "「full of shit」って聞こえた。そのあと固まった。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b13b128c0edb731386c66acee002c36c0188d2e94a3881f7d53637f93368b38c.mp3",
      "duration": 4.760090702947846,
      "sha256": "b13b128c0edb731386c66acee002c36c0188d2e94a3881f7d53637f93368b38c"
    },
    "ja:hot-mic:11": {
      "text": "おそらくスプレッドシートのことを言ったのでしょう。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/24d06594d3be4c75ef508de8824869b4b9ea1a11b00ad35e0616a30fb7e63868.mp3",
      "duration": 2.8560544217687074,
      "sha256": "24d06594d3be4c75ef508de8824869b4b9ea1a11b00ad35e0616a30fb7e63868"
    },
    "ja:hot-mic:12": {
      "text": "あなたは彼がでたらめを言っていると言った。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/ad370b16c86f1b6890f598464f0e073f468b44f37f03c32bbf11547ca6fccf72.mp3",
      "duration": 3.564263038548753,
      "sha256": "ad370b16c86f1b6890f598464f0e073f468b44f37f03c32bbf11547ca6fccf72"
    },
    "ja:hot-mic:13": {
      "text": "マネージャーからのメッセージが表示されます。「マックス、フィードバックはありますか?」マックスはスピーカーを再びオンにします。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/fb07640a6983b62de03f7f43506f39b1bd1b3a27551859825a4873b04b622f42.mp3",
      "duration": 8.55655328798186,
      "sha256": "fb07640a6983b62de03f7f43506f39b1bd1b3a27551859825a4873b04b622f42"
    },
    "ja:hot-mic:14": {
      "text": "素晴らしいプレゼンテーション。ビジョナリー。人生を変える。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/766cb981d393b1a97b38ca9cc7b94d7609208f6a96e9ee5c62a70b98ead7283a.mp3",
      "duration": 4.481451247165533,
      "sha256": "766cb981d393b1a97b38ca9cc7b94d7609208f6a96e9ee5c62a70b98ead7283a"
    },
    "ja:hot-mic:15": {
      "text": "彼のお尻にキスする必要はありません。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6b1d846504ea4c476bbcbca8af9a078e4eea8585faed7a5b3f0c784754ffa4c9.mp3",
      "duration": 3.2624036281179136,
      "sha256": "6b1d846504ea4c476bbcbca8af9a078e4eea8585faed7a5b3f0c784754ffa4c9"
    },
    "ja:hot-mic:16": {
      "text": "私は仕事を続けようと思っています、ゾーヤ。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/fd7cbfeffb5089baeb94eb13d6ced3a06fbbdde529987e7ba988c8bbc8e4934f.mp3",
      "duration": 3.7151927437641725,
      "sha256": "fd7cbfeffb5089baeb94eb13d6ced3a06fbbdde529987e7ba988c8bbc8e4934f"
    },
    "ja:hot-mic:17": {
      "text": "プレゼンテーションをもっと短くしてもいいと思います。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/50080c99e6fbcb8f42b42751af8a0e0c4282663f1de30b51cc68c4ea477f9754.mp3",
      "duration": 3.8545124716553287,
      "sha256": "50080c99e6fbcb8f42b42751af8a0e0c4282663f1de30b51cc68c4ea477f9754"
    },
    "ja:hot-mic:18": {
      "text": "マネージャーは「わかりました。昼食までに短いバージョンを送ってください。」と答えました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/03d6d3b14883597f4e938ade7bdd78b6cddb6772fa87b2eba88f28751d485c8f.mp3",
      "duration": 6.861496598639456,
      "sha256": "03d6d3b14883597f4e938ade7bdd78b6cddb6772fa87b2eba88f28751d485c8f"
    },
    "ja:hot-mic:19": {
      "text": "くそ。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/d8de648eb1a127c7b9be1debf20672ea8f6ea9e4a1dddf00d01052a7802d4235.mp3",
      "duration": 0.6501587301587302,
      "sha256": "d8de648eb1a127c7b9be1debf20672ea8f6ea9e4a1dddf00d01052a7802d4235"
    },
    "ja:hot-mic:20": {
      "text": "まだ電話中です、マックス。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/aecc7536b1fff0a3587aa7d40d1af380d61361b705cd196440a755bd5dfcda67.mp3",
      "duration": 2.5309750566893423,
      "sha256": "aecc7536b1fff0a3587aa7d40d1af380d61361b705cd196440a755bd5dfcda67"
    },
    "ja:hot-mic:21": {
      "text": "以上が締め切りに関する私のフィードバックでした。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/ed07d09062c61093f6bfad95bd3014a4df37d2514d6b19d14f4d29ec75f222b3.mp3",
      "duration": 3.6687528344671203,
      "sha256": "ed07d09062c61093f6bfad95bd3014a4df37d2514d6b19d14f4d29ec75f222b3"
    },
    "ja:dad-dating:0": {
      "text": "52歳の父親は独身で、出会い系アプリを試す準備ができています。彼の息子リョーシャさん（23）は、英語のプロフィールを確認したいと申し出た。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/d1384f2ce2f3c2ac941962ef057e434637c90182579d1563cf46c1bf1bc64278.mp3",
      "duration": 12.515555555555556,
      "sha256": "d1384f2ce2f3c2ac941962ef057e434637c90182579d1563cf46c1bf1bc64278"
    },
    "ja:dad-dating:1": {
      "text": "パートナーを探している経験豊富なパパ。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/76496f50f8bdf1db7113eebf3f9c5d5971fb0d3f79c1ee751bb8be3bb28a4d00.mp3",
      "duration": 2.8328344671201813,
      "sha256": "76496f50f8bdf1db7113eebf3f9c5d5971fb0d3f79c1ee751bb8be3bb28a4d00"
    },
    "ja:dad-dating:2": {
      "text": "お父さん。なぜ「パパ」なのか？",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/78031737ee889eea1cd8a5b3f0138b182c534270537417b82190ddaf95cbcadb.mp3",
      "duration": 2.670294784580499,
      "sha256": "78031737ee889eea1cd8a5b3f0138b182c534270537417b82190ddaf95cbcadb"
    },
    "ja:dad-dating:3": {
      "text": "23年の経験だ。お前が証人だ。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/fab1895595c3ae64266df043fb27e9cedbd27575cea224d69d2ce2a4facc2970.mp3",
      "duration": 3.4713832199546486,
      "sha256": "fab1895595c3ae64266df043fb27e9cedbd27575cea224d69d2ce2a4facc2970"
    },
    "ja:dad-dating:4": {
      "text": "ここでは親のことだけでなく、性的なものに聞こえる可能性があります。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/2adbe7b82fa19dc274b2527c2bfdedf22310ba7dc8322fe8056f28c246b05d95.mp3",
      "duration": 5.027120181405896,
      "sha256": "2adbe7b82fa19dc274b2527c2bfdedf22310ba7dc8322fe8056f28c246b05d95"
    },
    "ja:dad-dating:5": {
      "text": "大丈夫。 「シングルファーザー。料理が上手。自分の歯を持っている。」",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a9cab5c8d2cde58b8525da285eeaac807aa8dd3c270eb01a4e953a5f9abdabe5.mp3",
      "duration": 5.584399092970521,
      "sha256": "a9cab5c8d2cde58b8525da285eeaac807aa8dd3c270eb01a4e953a5f9abdabe5"
    },
    "ja:dad-dating:6": {
      "text": "最初の 2 つはそのままにしておきます。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/506fcd512c75979e1889f5edda3e6c870360357d18fd3659b6085e7e993239d5.mp3",
      "duration": 2.914104308390023,
      "sha256": "506fcd512c75979e1889f5edda3e6c870360357d18fd3659b6085e7e993239d5"
    },
    "ja:dad-dating:7": {
      "text": "ヘレン（49）という女性が彼に「誰か会っている人はいますか？」というメッセージを送った。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/20f0032f5e5cbb649d9812d655d39156761bab0d9b695eea5b7520e6f43f4b3d.mp3",
      "duration": 7.604535147392291,
      "sha256": "20f0032f5e5cbb649d9812d655d39156761bab0d9b695eea5b7520e6f43f4b3d"
    },
    "ja:dad-dating:8": {
      "text": "はい。息子よ。彼はここにいるよ。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a08ffcea3676cdf92ad1bcc34dff3e1dbb02d80a970eec8a2926b4c0deec825e.mp3",
      "duration": 3.378503401360544,
      "sha256": "a08ffcea3676cdf92ad1bcc34dff3e1dbb02d80a970eec8a2926b4c0deec825e"
    },
    "ja:dad-dating:9": {
      "text": "いいえ、私は独身です。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/35dae580c71edad4a87a0466e18ef3659457f9ee38a0b823901ee3fe47cf98e5.mp3",
      "duration": 2.589024943310658,
      "sha256": "35dae580c71edad4a87a0466e18ef3659457f9ee38a0b823901ee3fe47cf98e5"
    },
    "ja:dad-dating:10": {
      "text": "彼女はカジュアルなものは求めていないと言います。ジャケットを持っています。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c1be5c9e60ad550d5f25957232044dbc6a1f281d77f16ec2417eafde68d20ab7.mp3",
      "duration": 5.491519274376417,
      "sha256": "c1be5c9e60ad550d5f25957232044dbc6a1f281d77f16ec2417eafde68d20ab7"
    },
    "ja:dad-dating:11": {
      "text": "彼女はあなたの服装について聞いているわけではありません。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/eaca28eb67af62527d1125010aeb0d43451938a2cb9d0212af1c494f4795b6b6.mp3",
      "duration": 4.133151927437642,
      "sha256": "eaca28eb67af62527d1125010aeb0d43451938a2cb9d0212af1c494f4795b6b6"
    },
    "ja:dad-dating:12": {
      "text": "私も本格的なものを探しています。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/8d50d900d79d00ba5d8d5ad3685d424ef9c65471ceaaa4ce8f24afdb80dac34a.mp3",
      "duration": 2.75156462585034,
      "sha256": "8d50d900d79d00ba5d8d5ad3685d424ef9c65471ceaaa4ce8f24afdb80dac34a"
    },
    "ja:dad-dating:13": {
      "text": "私はベッドでは大丈夫だと付け加えてもいいですか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/09a34a9c69b9c1676f628b3f44a0c43848b211cd61314a8fd25f6d3491558f3f.mp3",
      "duration": 3.866122448979592,
      "sha256": "09a34a9c69b9c1676f628b3f44a0c43848b211cd61314a8fd25f6d3491558f3f"
    },
    "ja:dad-dating:14": {
      "text": "8時間寝てるって言おうとしてるの？",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c0da9b4e99a46aecd42a73d895b94cc498da09ee809df7b8e6bd35d2de34c438.mp3",
      "duration": 2.426485260770975,
      "sha256": "c0da9b4e99a46aecd42a73d895b94cc498da09ee809df7b8e6bd35d2de34c438"
    },
    "ja:dad-dating:15": {
      "text": "九。そして私は毛布を盗みません。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/63a15b377332898b990a6f8c14a96b41e6f4eb1c634eddc3ae08d7478d3659d7.mp3",
      "duration": 3.2856235827664397,
      "sha256": "63a15b377332898b990a6f8c14a96b41e6f4eb1c634eddc3ae08d7478d3659d7"
    },
    "ja:dad-dating:16": {
      "text": "それは2回目のデートのために取っておきましょう。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/75e1f441a3ec752ecb9a2908985ad2c07523f746372f4d132e709cca31dd9516.mp3",
      "duration": 3.4829931972789114,
      "sha256": "75e1f441a3ec752ecb9a2908985ad2c07523f746372f4d132e709cca31dd9516"
    },
    "ja:dad-dating:17": {
      "text": "ヘレンは「土曜日にコーヒー？」と書いています。お父さんは自分の年金について入力し始めました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8a02ca0bfc10c9044f13cdf15e7d02288c684db7d19fea3340eaac88cf52450a.mp3",
      "duration": 7.697414965986394,
      "sha256": "8a02ca0bfc10c9044f13cdf15e7d02288c684db7d19fea3340eaac88cf52450a"
    },
    "ja:dad-dating:18": {
      "text": "コーヒーがいいですね。 11はどうですか？",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/41a5ee1e95077f7599b8b8e0896799bf096c75a1fb1fd9fee57389d6b92dadf0.mp3",
      "duration": 3.215963718820862,
      "sha256": "41a5ee1e95077f7599b8b8e0896799bf096c75a1fb1fd9fee57389d6b92dadf0"
    },
    "ja:dad-dating:19": {
      "text": "終わり。彼女はハートを送りました。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/55f3730177639565a30cbf9491a4d70cb2bccbc3bde0ade79a38e9e84728c182.mp3",
      "duration": 2.8212244897959184,
      "sha256": "55f3730177639565a30cbf9491a4d70cb2bccbc3bde0ade79a38e9e84728c182"
    },
    "ja:dad-dating:20": {
      "text": "見る？ 「経験豊富なパパ」は必要ありませんでした。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/9dd700249ae2e922ceb10560075ac66748ae55aae9a205c422eadffd6d150a32.mp3",
      "duration": 4.2260317460317465,
      "sha256": "9dd700249ae2e922ceb10560075ac66748ae55aae9a205c422eadffd6d150a32"
    },
    "ja:dad-dating:21": {
      "text": "彼女はまだドリルの腕前を見ていない。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f655e685938eeb432d132eedc6cf2a9515c69828bdcb4058489a5b9bbde72bb8.mp3",
      "duration": 2.647074829931973,
      "sha256": "f655e685938eeb432d132eedc6cf2a9515c69828bdcb4058489a5b9bbde72bb8"
    },
    "ja:return-hoodie:0": {
      "text": "26 歳のクリンジナさんは、元恋人の 30 歳さんから深夜にメッセージを受け取りました。31 歳のゾーヤさんは、彼女が高価なパーカーを取り戻すことに集中できるように手伝ってくれています。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8fed0b8c27d87265fbbb6fbe48d2708c8e611d6be4c45d9f9a300562c7636692.mp3",
      "duration": 15.139410430839002,
      "sha256": "8fed0b8c27d87265fbbb6fbe48d2708c8e611d6be4c45d9f9a300562c7636692"
    },
    "ja:return-hoodie:1": {
      "text": "彼は「僕たちのことが恋しい」と言ってる。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/abe3339d2d48775039c26b2bee9adc0d8445edf64403b8477f00ed155b8074c9.mp3",
      "duration": 3.4017233560090703,
      "sha256": "abe3339d2d48775039c26b2bee9adc0d8445edf64403b8477f00ed155b8074c9"
    },
    "ja:return-hoodie:2": {
      "text": "そして、何が恋しいですか？",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/741ec6410ca762d4afd43f2692ed7e31ee655a6c97b4b362cf999c6672bc4a58.mp3",
      "duration": 2.4961451247165534,
      "sha256": "741ec6410ca762d4afd43f2692ed7e31ee655a6c97b4b362cf999c6672bc4a58"
    },
    "ja:return-hoodie:3": {
      "text": "私のパーカー。ポケットがあり、精神的に安定していました。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a81fa431fe25142399aecde31f0ebe185b9d64e4e7d6c7eb604a6b1ca1943e6d.mp3",
      "duration": 5.027120181405896,
      "sha256": "a81fa431fe25142399aecde31f0ebe185b9d64e4e7d6c7eb604a6b1ca1943e6d"
    },
    "ja:return-hoodie:4": {
      "text": "パーカーを返してほしい。一緒に戻りたくない。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/0b1b3910fa8615af679c08029658c0831ad1945829db7d066c477c714f79bf3b.mp3",
      "duration": 3.575873015873016,
      "sha256": "0b1b3910fa8615af679c08029658c0831ad1945829db7d066c477c714f79bf3b"
    },
    "ja:return-hoodie:5": {
      "text": "今、彼は「来てもいいですか？」と言いました。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a41de71ca66a3deb388486820bae58545e51ab0ff265a27900d92f37e8fcd13d.mp3",
      "duration": 3.633922902494331,
      "sha256": "a41de71ca66a3deb388486820bae58545e51ab0ff265a27900d92f37e8fcd13d"
    },
    "ja:return-hoodie:6": {
      "text": "午前2時。非常に効率的な配送サービス。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/06f93601798f10a7d74232285381852c69e550fcceff685870e17c50cba82845.mp3",
      "duration": 3.959002267573696,
      "sha256": "06f93601798f10a7d74232285381852c69e550fcceff685870e17c50cba82845"
    },
    "ja:return-hoodie:7": {
      "text": "彼は訪問したいと思っています。この時間にヒントがあるかもしれません。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/ce98274282138322da640e2eee9906067a399b0d22acf0949a6bb0b2485bd441.mp3",
      "duration": 5.270929705215419,
      "sha256": "ce98274282138322da640e2eee9906067a399b0d22acf0949a6bb0b2485bd441"
    },
    "ja:return-hoodie:8": {
      "text": "「明日はコンシェルジュに預けてください」と言います。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/9649d37f0af556420605ef9468ba960a6853bd84eb8e4da9c1c9e3ece5f7abd7.mp3",
      "duration": 3.5062131519274375,
      "sha256": "9649d37f0af556420605ef9468ba960a6853bd84eb8e4da9c1c9e3ece5f7abd7"
    },
    "ja:return-hoodie:9": {
      "text": "良い。場所、日、そしてソファなし。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/01dbcb13a69565187a13813e30294651a41ebb6937d397a56eb01d3d9502fd72.mp3",
      "duration": 3.599092970521542,
      "sha256": "01dbcb13a69565187a13813e30294651a41ebb6937d397a56eb01d3d9502fd72"
    },
    "ja:return-hoodie:10": {
      "text": "彼は、ちゃんと区切りをつけたいって。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/11ccb8bdc9a24c0c993b756ed5e5090747924d3117fe462a507c38915b19eab5.mp3",
      "duration": 2.9257142857142857,
      "sha256": "11ccb8bdc9a24c0c993b756ed5e5090747924d3117fe462a507c38915b19eab5"
    },
    "ja:return-hoodie:11": {
      "text": "彼はあなたのパーカーがカウンセリングサービスだと思っているのでしょうか？",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/9f20a9710c1cdb6ee7ca0f100144244e68d6398ac50bc35dc67c9939a06f7596.mp3",
      "duration": 5.201269841269841,
      "sha256": "9f20a9710c1cdb6ee7ca0f100144244e68d6398ac50bc35dc67c9939a06f7596"
    },
    "ja:return-hoodie:12": {
      "text": "わかっていますが、今夜は会いません。明日パーカーを返してください。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8edffa72befc14268ff98dc6b7ad9e987bab5a947c39849dbecfd92a8fde238e.mp3",
      "duration": 4.922630385487528,
      "sha256": "8edffa72befc14268ff98dc6b7ad9e987bab5a947c39849dbecfd92a8fde238e"
    },
    "ja:return-hoodie:13": {
      "text": "「私のパーカーにはジッパーが付いています。まずはそこから始めてください。」とも書きたいです。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/f29e153fe67aa4859d0352134f3b87a1587f56edbfb99cccb242a6590610fad4.mp3",
      "duration": 7.279455782312925,
      "sha256": "f29e153fe67aa4859d0352134f3b87a1587f56edbfb99cccb242a6590610fad4"
    },
    "ja:return-hoodie:14": {
      "text": "素晴らしいジョーク。ひどい物流。アドレスを送信します。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/517d2337ecbcce1fa36830f8bfa4c14e79096d0b85c9dac24084853fa80e6392.mp3",
      "duration": 4.829750566893424,
      "sha256": "517d2337ecbcce1fa36830f8bfa4c14e79096d0b85c9dac24084853fa80e6392"
    },
    "ja:return-hoodie:15": {
      "text": "翌日の午後、コンシェルジュがバッグを渡します。 「最初からやり直せるかもしれない」というメモがあります。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/556702f195f3f7a05fb67f096c7a4dbb526171d79627dfcc90a63efe93c35a02.mp3",
      "duration": 7.790294784580499,
      "sha256": "556702f195f3f7a05fb67f096c7a4dbb526171d79627dfcc90a63efe93c35a02"
    },
    "ja:return-hoodie:16": {
      "text": "彼は別のシーズンを求めている。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6721b195d2ed673a0b0aa7f59e9043c7a277d7f763c78f22bacf1ad03ba1e8de.mp3",
      "duration": 2.914104308390023,
      "sha256": "6721b195d2ed673a0b0aa7f59e9043c7a277d7f763c78f22bacf1ad03ba1e8de"
    },
    "ja:return-hoodie:17": {
      "text": "返品してくれてありがとう。次に進む準備はできています。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b1515017acf391928dc7c49f39afdf9860e53c7dc9ebcfc96faa57e1a118d105.mp3",
      "duration": 4.330521541950113,
      "sha256": "b1515017acf391928dc7c49f39afdf9860e53c7dc9ebcfc96faa57e1a118d105"
    },
    "ja:return-hoodie:18": {
      "text": "それはどんな感じですか？",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/0566be2fbfa43aa47bf9e595195afe1c278e42493ed75de51aa6cf80df02a859.mp3",
      "duration": 2.089795918367347,
      "sha256": "0566be2fbfa43aa47bf9e595195afe1c278e42493ed75de51aa6cf80df02a859"
    },
    "ja:return-hoodie:19": {
      "text": "暖かい。ほんのりクソ臭い。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/d4f83354ccbaa840900adc8ceeb4f2935f2277d5ecff826264b86a0c475d3713.mp3",
      "duration": 2.693514739229025,
      "sha256": "d4f83354ccbaa840900adc8ceeb4f2935f2277d5ecff826264b86a0c475d3713"
    },
    "ja:return-hoodie:20": {
      "text": "それは洗い流されます。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/86cf8fda1e90fde3e3e9c23bb2fd66a12a0d0312770b462bb5224970a39a3d8d.mp3",
      "duration": 2.043356009070295,
      "sha256": "86cf8fda1e90fde3e3e9c23bb2fd66a12a0d0312770b462bb5224970a39a3d8d"
    },
    "ja:return-hoodie:21": {
      "text": "ついに。ラベル上の明確な指示に問題があります。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b3a78e765a2c36c087b85bdfc774a90753564c3e102c770d3f3b97362ed2294c.mp3",
      "duration": 3.9938321995464854,
      "sha256": "b3a78e765a2c36c087b85bdfc774a90753564c3e102c770d3f3b97362ed2294c"
    },
    "ja:size-isnt-the-point:0": {
      "text": "マックス（28）とロキシー（29）は付き合って6か月です。今夜、マックスはついに自分を心配させてきたことを認めた。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/c8fc058ac5943e18ffdad298feb19a7f4ae1ac54b589797b6782d510f6a815b2.mp3",
      "duration": 10.332879818594105,
      "sha256": "c8fc058ac5943e18ffdad298feb19a7f4ae1ac54b589797b6782d510f6a815b2"
    },
    "ja:size-isnt-the-point:1": {
      "text": "自分のペニスは小さすぎると常々思っています。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/fd231ba5418f485aeb88e0c8f033e49fc34f9c7868ac8e8054228b0fc12a96ef.mp3",
      "duration": 3.657142857142857,
      "sha256": "fd231ba5418f485aeb88e0c8f033e49fc34f9c7868ac8e8054228b0fc12a96ef"
    },
    "ja:size-isnt-the-point:2": {
      "text": "何のために小さすぎるのでしょうか？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8e6a61cf3053d02beff69cac6ca0b03399d478fab583f63e54968cfc8eead86b.mp3",
      "duration": 2.4961451247165534,
      "sha256": "8e6a61cf3053d02beff69cac6ca0b03399d478fab583f63e54968cfc8eead86b"
    },
    "ja:size-isnt-the-point:3": {
      "text": "挿入だけで君をイかせるには。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/3e59ce2f82b30ee7d1531e36a3f75b41c1063525f3955b1363b247f75d157655.mp3",
      "duration": 2.3568253968253967,
      "sha256": "3e59ce2f82b30ee7d1531e36a3f75b41c1063525f3955b1363b247f75d157655"
    },
    "ja:size-isnt-the-point:4": {
      "text": "私は挿入だけではあまりイかないの。あなたのサイズじゃなくて、私の体が何を好むかの話よ。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/0bfc4cf8c21168de8a3ef190a2ed53741c4ac27d493eff08887f91343ffc6c88.mp3",
      "duration": 8.13859410430839,
      "sha256": "0bfc4cf8c21168de8a3ef190a2ed53741c4ac27d493eff08887f91343ffc6c88"
    },
    "ja:size-isnt-the-point:5": {
      "text": "言ってくれればよかったのに。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f25b68e6b7eeb22721756311aeafe4154439b2b93e2a4d845dfe7b742484da33.mp3",
      "duration": 1.8924263038548752,
      "sha256": "f25b68e6b7eeb22721756311aeafe4154439b2b93e2a4d845dfe7b742484da33"
    },
    "ja:size-isnt-the-point:6": {
      "text": "今言ってる。あなたが私を舐めてくれるの、本当に好き。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/4702c719c9bf04d8aca0cac8dbcbc17a7793d98c59f64d7ceb63b70ce50c65f2.mp3",
      "duration": 4.609160997732427,
      "sha256": "4702c719c9bf04d8aca0cac8dbcbc17a7793d98c59f64d7ceb63b70ce50c65f2"
    },
    "ja:size-isnt-the-point:7": {
      "text": "下に行きますか？布団の下？",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/192e8c773cbac762e364c656e358bee3b67ca04939e02d998c8e43282b8cf6c1.mp3",
      "duration": 2.5309750566893423,
      "sha256": "192e8c773cbac762e364c656e358bee3b67ca04939e02d998c8e43282b8cf6c1"
    },
    "ja:size-isnt-the-point:8": {
      "text": "誰かにオーラルセックスをしてください。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/78b0d764137b46bf4a8a8fffdeb8b2042c6c8287d45dc0d1a67d1096fff85f9d.mp3",
      "duration": 2.5658049886621317,
      "sha256": "78b0d764137b46bf4a8a8fffdeb8b2042c6c8287d45dc0d1a67d1096fff85f9d"
    },
    "ja:size-isnt-the-point:9": {
      "text": "わかった。あなたの好きなものを見せて、見逃したら言ってください。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/921d6b2ef42179f2fe5d60221082330c579da9bce6a39a2784afb874cdd10a61.mp3",
      "duration": 4.6439909297052155,
      "sha256": "921d6b2ef42179f2fe5d60221082330c579da9bce6a39a2784afb874cdd10a61"
    },
    "ja:size-isnt-the-point:10": {
      "text": "決まり。察してもらおうとしない、出来を採点しない。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b08c187fce593ecaa47c0b9d9769a50810700fc653305b9134acdad1411db809.mp3",
      "duration": 4.295691609977324,
      "sha256": "b08c187fce593ecaa47c0b9d9769a50810700fc653305b9134acdad1411db809"
    },
    "ja:size-isnt-the-point:11": {
      "text": "しばらくして、マックスが毛布の下から出てきて、驚きながらも非常に満足している様子でした。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/80aa7d8d4de75d2789900c8ddec1ca80e880b641ce3db5ec49d6ff67f92d338d.mp3",
      "duration": 6.896326530612245,
      "sha256": "80aa7d8d4de75d2789900c8ddec1ca80e880b641ce3db5ec49d6ff67f92d338d"
    },
    "ja:size-isnt-the-point:12": {
      "text": "それは私のペニスで何かを証明しようとするよりもはるかに優れていました。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/8898061dc00cf926a9bf2e259c4270e1feac02217faf271d90421aefb0fea06b.mp3",
      "duration": 5.723718820861678,
      "sha256": "8898061dc00cf926a9bf2e259c4270e1feac02217faf271d90421aefb0fea06b"
    },
    "ja:size-isnt-the-point:13": {
      "text": "私にとってもそれはずっと良かったです。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/ebe443f77f5652632695f924032af30e013e442740ff0e07b65e180ed698da07.mp3",
      "duration": 3.378503401360544,
      "sha256": "ebe443f77f5652632695f924032af30e013e442740ff0e07b65e180ed698da07"
    },
    "ja:size-isnt-the-point:14": {
      "text": "私は嬉しい。私ももっと気に入りました。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/16e0c3f0683c29ab1b46d246fbc5715f7694e23437d6e6df94681a0229c8b8eb.mp3",
      "duration": 3.4249433106575964,
      "sha256": "16e0c3f0683c29ab1b46d246fbc5715f7694e23437d6e6df94681a0229c8b8eb"
    },
    "ja:size-isnt-the-point:15": {
      "text": "いつかシックスナインを試してみたいですか？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/3150dcddeb9c49583bc93e1e4e5c39fbf05fdaa3fb74b9b4917b811e860d728b.mp3",
      "duration": 3.3436734693877552,
      "sha256": "3150dcddeb9c49583bc93e1e4e5c39fbf05fdaa3fb74b9b4917b811e860d728b"
    },
    "ja:size-isnt-the-point:16": {
      "text": "6時9分？ずいぶん細かいけど、空いてるよ。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/5b1b122c76ce872810019e365c8164b6a303f4d87b2fdb39d46125772a8fad5c.mp3",
      "duration": 3.924172335600907,
      "sha256": "5b1b122c76ce872810019e365c8164b6a303f4d87b2fdb39d46125772a8fad5c"
    },
    "ja:size-isnt-the-point:17": {
      "text": "パートナーが同時にお互いにオーラルセックスをする体位。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/81742a19b493925571d334bcb697a4d2c245403a0ed53c0c1f1cba91f9048e8d.mp3",
      "duration": 3.7151927437641725,
      "sha256": "81742a19b493925571d334bcb697a4d2c245403a0ed53c0c1f1cba91f9048e8d"
    },
    "ja:size-isnt-the-point:18": {
      "text": "彼らは、膝、枕、緊急の手信号について簡単に話し合った後、それを試します。二人とも笑い始めますが、すぐに笑いをやみます。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/476959dcd43db4204a6479c86c59262845bccf55117d07985b574ebe993d30b2.mp3",
      "duration": 11.493877551020407,
      "sha256": "476959dcd43db4204a6479c86c59262845bccf55117d07985b574ebe993d30b2"
    },
    "ja:size-isnt-the-point:19": {
      "text": "私はクラシックバージョンよりもこちらの方が好きだと思います。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/4eae7994f358a796244273c704910a544524cac4d531288c1d49ee6aa1a46d3a.mp3",
      "duration": 4.295691609977324,
      "sha256": "4eae7994f358a796244273c704910a544524cac4d531288c1d49ee6aa1a46d3a"
    },
    "ja:size-isnt-the-point:20": {
      "text": "同じ。また、あなたのペニスを採点する人は誰もいません。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2ee126b5b1ae82b3685047203fe61d5c0c8224cfdb5d1e01e15880a7de83b173.mp3",
      "duration": 5.108390022675737,
      "sha256": "2ee126b5b1ae82b3685047203fe61d5c0c8224cfdb5d1e01e15880a7de83b173"
    },
    "ja:size-isnt-the-point:21": {
      "text": "良い。筆記試験に不合格でした。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/7ef66debf098f05bc645933a3bd4240ea939fa91c6b72411b36dcf44bd4083a9.mp3",
      "duration": 2.8792743764172335,
      "sha256": "7ef66debf098f05bc645933a3bd4240ea939fa91c6b72411b36dcf44bd4083a9"
    },
    "ja:size-isnt-the-point:22": {
      "text": "二人は話し、試し、「普通」とされるものではなく、自分たちが気持ちいいと思うことを選び続けた。出会えたことを心から喜んだ。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/28df33d72cc7e44ffd338afba040922cbd978702268751dd12a1b9b29142efa3.mp3",
      "duration": 10.228390022675738,
      "sha256": "28df33d72cc7e44ffd338afba040922cbd978702268751dd12a1b9b29142efa3"
    },
    "ja:dad:0": {
      "text": "土曜日の朝。リョーシャさん（23歳）はガールフレンドのアンナさん（24歳）から帰ってきた。父親（52歳）はすでにやかんをかけて、立ち入った質問を準備していた。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7961f885552792f4bdfabf8b6865c6e4941cd66c97fde5ff8b909f49ed9eaf7d.mp3",
      "duration": 15.603809523809524,
      "sha256": "7961f885552792f4bdfabf8b6865c6e4941cd66c97fde5ff8b909f49ed9eaf7d"
    },
    "ja:dad:1": {
      "text": "それで。アンナと一緒に寝ましたか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f78c4e966d013276f52e9ba0c5ce1409544e9f86710cc2c7e104aa0b5dfea2c1.mp3",
      "duration": 2.8444444444444446,
      "sha256": "f78c4e966d013276f52e9ba0c5ce1409544e9f86710cc2c7e104aa0b5dfea2c1"
    },
    "ja:dad:2": {
      "text": "うん。 8時間。素晴らしいマットレス。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/0e81404f8958ceef267484a0fa5ac1141b7059e649aafc32e45896d07ec68329.mp3",
      "duration": 3.1811337868480725,
      "sha256": "0e81404f8958ceef267484a0fa5ac1141b7059e649aafc32e45896d07ec68329"
    },
    "ja:dad:3": {
      "text": "屁理屈はいい。ヤッたのか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/35442f3caf2171e16fdc51b50ab07bc45facc5f407444c94aeb18af38263ac68.mp3",
      "duration": 2.426485260770975,
      "sha256": "35442f3caf2171e16fdc51b50ab07bc45facc5f407444c94aeb18af38263ac68"
    },
    "ja:dad:4": {
      "text": "はい、お父さん。水平方向。マットレスの上。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/3804f725d9715901dabae5fa6af33c1d8bb97ba2c2f7fd5c717f3c3bbfcd603a.mp3",
      "duration": 4.493061224489796,
      "sha256": "3804f725d9715901dabae5fa6af33c1d8bb97ba2c2f7fd5c717f3c3bbfcd603a"
    },
    "ja:dad:5": {
      "text": "あなたのペニス。彼女のマンコ。私は十分に明確ですか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/1185e5e904db4c2bc29769424a38c08896bcaa2bcce59af1ea55fe1c1553960e.mp3",
      "duration": 5.061950113378685,
      "sha256": "1185e5e904db4c2bc29769424a38c08896bcaa2bcce59af1ea55fe1c1553960e"
    },
    "ja:dad:6": {
      "text": "アンナは猫を飼っていません。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a7bedc7339d848857588cb23254e996c6415f8f0eba224da7b3614d09067e800.mp3",
      "duration": 1.9853061224489796,
      "sha256": "a7bedc7339d848857588cb23254e996c6415f8f0eba224da7b3614d09067e800"
    },
    "ja:dad:7": {
      "text": "猫じゃない。pussy。twat。cunt。下半身の部署だ！",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/9424fa4d872e28b5fbb519fbcc5fbd1a48c9fbdeacb9e143a8743b17c62ca08a.mp3",
      "duration": 6.768616780045352,
      "sha256": "9424fa4d872e28b5fbb519fbcc5fbd1a48c9fbdeacb9e143a8743b17c62ca08a"
    },
    "ja:dad:8": {
      "text": "お父さん、彼女は一階に住んでいます。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/99f5af2fd645cd3be406a558e3d82822ea45baceba4efe0c1c12e68954d8af3c.mp3",
      "duration": 3.297233560090703,
      "sha256": "99f5af2fd645cd3be406a558e3d82822ea45baceba4efe0c1c12e68954d8af3c"
    },
    "ja:dad:9": {
      "text": "大丈夫。彼女の膣。そこには。適切な言葉です。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/ab030c1fdcd6b46f9a9dda0eb2d5cecd3ce97b98eb6d909c23c3b9f593b29ec2.mp3",
      "duration": 5.143219954648526,
      "sha256": "ab030c1fdcd6b46f9a9dda0eb2d5cecd3ce97b98eb6d909c23c3b9f593b29ec2"
    },
    "ja:dad:10": {
      "text": "外側というと外陰部です。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/93ed6b60549ce41e90faa7eb811d10f72936f3abe5cd7ef54d9bfa85bc5858b9.mp3",
      "duration": 2.5193650793650795,
      "sha256": "93ed6b60549ce41e90faa7eb811d10f72936f3abe5cd7ef54d9bfa85bc5858b9"
    },
    "ja:dad:11": {
      "text": "私は父と息子の会話をしたいのですが、クソみたいな健康診断に合格するつもりはありません。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/99e16b1bf63109c49fded04bcb3b0d179cf06de2de5390f2b8ea34d6db3da0c1.mp3",
      "duration": 6.443537414965986,
      "sha256": "99e16b1bf63109c49fded04bcb3b0d179cf06de2de5390f2b8ea34d6db3da0c1"
    },
    "ja:dad:12": {
      "text": "外陰部、内側の膣。あなたの番です、教授。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c3ebbd86dbb9635b5cf9c9fd205ef294367568daa76e1c0e5bdb51e325f25bc0.mp3",
      "duration": 4.307301587301588,
      "sha256": "c3ebbd86dbb9635b5cf9c9fd205ef294367568daa76e1c0e5bdb51e325f25bc0"
    },
    "ja:dad:13": {
      "text": "私があなたの年齢の頃は、それを単にファニーと呼んでいました。",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/4332d3ed0485ae1d5a0681026e7cebb9c59fa5fb1b08b35b00e70404bf3a52b8.mp3",
      "duration": 4.388571428571429,
      "sha256": "4332d3ed0485ae1d5a0681026e7cebb9c59fa5fb1b08b35b00e70404bf3a52b8"
    },
    "ja:dad:14": {
      "text": "イギリスでは、たぶん。アメリカではそれはお尻だ。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/8625b50aa1d1132e7af9007562000e10c02fcad778eb0166f922f62965be440d.mp3",
      "duration": 3.599092970521542,
      "sha256": "8625b50aa1d1132e7af9007562000e10c02fcad778eb0166f922f62965be440d"
    },
    "ja:dad:15": {
      "text": "では、同じ言葉でパスポート審査で体の部位が変わるということですか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a042c25bbed64d3a0f40bac8f6405dafa72efc45cd30f8a4035fbc09ede196a0.mp3",
      "duration": 5.979138321995465,
      "sha256": "a042c25bbed64d3a0f40bac8f6405dafa72efc45cd30f8a4035fbc09ede196a0"
    },
    "ja:dad:16": {
      "text": "とにかく、私の性生活はあなたには関係ありません。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c669263d5b2a5a7a34a275c047dedb0649e7f7276daae30c5889f1ddec4b4d4c.mp3",
      "duration": 3.912562358276644,
      "sha256": "c669263d5b2a5a7a34a275c047dedb0649e7f7276daae30c5889f1ddec4b4d4c"
    },
    "ja:dad:17": {
      "text": "大丈夫。お茶はどうでしたか？",
      "who": "dad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/e72d2ccb924b3f8e36776f77a167d4d1d3e8467cf3fd92de2b5a513b4c76c86f.mp3",
      "duration": 2.6006349206349206,
      "sha256": "e72d2ccb924b3f8e36776f77a167d4d1d3e8467cf3fd92de2b5a513b4c76c86f"
    },
    "ja:dad:18": {
      "text": "熱い。でも興奮しないでください。",
      "who": "son",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/f9180d1db12701a08ba2edd91e0fa95eb5447875f22da4a71e0144e713a5f431.mp3",
      "duration": 2.914104308390023,
      "sha256": "f9180d1db12701a08ba2edd91e0fa95eb5447875f22da4a71e0144e713a5f431"
    },
    "ja:dad:19": {
      "text": "やかんが笛を鳴らします。午前中初めて、誰かが有益なことを言いました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/d59dbcf19280d66a91da06cb8170b685b18efd6ac21f0dce03b562e9e439ed61.mp3",
      "duration": 6.002358276643991,
      "sha256": "d59dbcf19280d66a91da06cb8170b685b18efd6ac21f0dce03b562e9e439ed61"
    },
    "ja:change-mind:0": {
      "text": "29歳のロキシーは、28歳のマックスとデートした後、バーに到着する。31歳のゾーヤはフライドポテトを注文し、報告会の準備ができている。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/fbbe4623f7c2894228c3da893fc30b948d8328b8f111e10bf23375e1e28a0ed8.mp3",
      "duration": 12.271746031746032,
      "sha256": "fbbe4623f7c2894228c3da893fc30b948d8328b8f111e10bf23375e1e28a0ed8"
    },
    "ja:change-mind:1": {
      "text": "彼は親切でした。私は彼のところに戻りました。それから私は考えを変えました。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/95b30c17958fe0e496ca8bb57ca98852833ac0e2bf7513c37ed9e43f4848fdd9.mp3",
      "duration": 7.4071655328798185,
      "sha256": "95b30c17958fe0e496ca8bb57ca98852833ac0e2bf7513c37ed9e43f4848fdd9"
    },
    "ja:change-mind:2": {
      "text": "そして？",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8689dbcead85e8c10ee4b1c71c6c8e6531daf63d27b3057c6ba7a66547cd8e39.mp3",
      "duration": 0.9868480725623583,
      "sha256": "8689dbcead85e8c10ee4b1c71c6c8e6531daf63d27b3057c6ba7a66547cd8e39"
    },
    "ja:change-mind:3": {
      "text": "そのまま帰ってもいいですか？それでも？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b1dce90261b408a823a86fd701242eba185e19fd0ddaf2a4911474a4a4a291ed.mp3",
      "duration": 3.2275736961451247,
      "sha256": "b1dce90261b408a823a86fd701242eba185e19fd0ddaf2a4911474a4a4a291ed"
    },
    "ja:change-mind:4": {
      "text": "はい。いつでも考えを変えることができます。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/83c85dda3bbbd0b05a582d4178965567f5b9072b39b9bee57e951a2ca62d84eb.mp3",
      "duration": 3.4597732426303853,
      "sha256": "83c85dda3bbbd0b05a582d4178965567f5b9072b39b9bee57e951a2ca62d84eb"
    },
    "ja:change-mind:5": {
      "text": "彼のペニスが曲がっていてセックスしたくないなら、やめてください。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/4c3dd0bd8fda380811703ccdfe308dbff9c9a7de30d85fa5a07ecf5959fff8d8.mp3",
      "duration": 4.179591836734694,
      "sha256": "4c3dd0bd8fda380811703ccdfe308dbff9c9a7de30d85fa5a07ecf5959fff8d8"
    },
    "ja:change-mind:6": {
      "text": "彼のペニスが完全に真っ直ぐだったらどうなるでしょうか？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7a319096a81cf4f0ac566bc3e58ad1e941d60dcf56781c7f3baddb26e1b6edc7.mp3",
      "duration": 4.307301587301588,
      "sha256": "7a319096a81cf4f0ac566bc3e58ad1e941d60dcf56781c7f3baddb26e1b6edc7"
    },
    "ja:change-mind:7": {
      "text": "それでも義務なんかじゃない。あなたは建物検査官じゃないんだから。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6817c9da64d5be7106340dbbe98c331f8973021d83d6e70de988dfd10d35c1b3.mp3",
      "duration": 5.0967800453514736,
      "sha256": "6817c9da64d5be7106340dbbe98c331f8973021d83d6e70de988dfd10d35c1b3"
    },
    "ja:change-mind:8": {
      "text": "じゃあ言い訳は要らないのかな？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/18db86f8799cc95608b20820804e6661cb027b0f5f8996ac59971a7b795fb360.mp3",
      "duration": 2.3103854875283445,
      "sha256": "18db86f8799cc95608b20820804e6661cb027b0f5f8996ac59971a7b795fb360"
    },
    "ja:change-mind:9": {
      "text": "その通り。たぶんあなたは疲れています。もしかしたら雰囲気がなくなってしまったのかもしれません。おそらく彼の枕には「ALPHA」と書かれているでしょう。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b89b5d4b7458292ab243af3ac3bb2faa720acde54ce8f5bedfd0644ca5514d1a.mp3",
      "duration": 12.364625850340136,
      "sha256": "b89b5d4b7458292ab243af3ac3bb2faa720acde54ce8f5bedfd0644ca5514d1a"
    },
    "ja:change-mind:10": {
      "text": "彼の枕にはALPHAと書かれていました。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/1b8454ed74337df784e1edbbd0486cd413ca4a3ce09466ce8b3a2fca15c14dbd.mp3",
      "duration": 3.889342403628118,
      "sha256": "1b8454ed74337df784e1edbbd0486cd413ca4a3ce09466ce8b3a2fca15c14dbd"
    },
    "ja:change-mind:11": {
      "text": "イエス。寝具でさえ危険信号です。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8652d37c353f1f26c1a6ee39b027c570163b8bcb60a27270bb5139f0da80044b.mp3",
      "duration": 3.0998639455782313,
      "sha256": "8652d37c353f1f26c1a6ee39b027c570163b8bcb60a27270bb5139f0da80044b"
    },
    "ja:change-mind:12": {
      "text": "もう気分が良くない。家に帰ります。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/1dc031aab964722425a87dee598dd627b3a93161163ce58343c47de29a081c78.mp3",
      "duration": 3.250793650793651,
      "sha256": "1dc031aab964722425a87dee598dd627b3a93161163ce58343c47de29a081c78"
    },
    "ja:change-mind:13": {
      "text": "彼は「でも夕食は買ってきたよ」と言いました。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/afcb8e227e7a2e08b18964f21b8a8d3161c35b36dde7480a317ab46c535331e4.mp3",
      "duration": 4.051882086167801,
      "sha256": "afcb8e227e7a2e08b18964f21b8a8d3161c35b36dde7480a317ab46c535331e4"
    },
    "ja:change-mind:14": {
      "text": "彼におめでとう。彼はレストランがどのように機能するかを理解しています。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7f36f0754e0eb808ebd49c126271b6aadb0b8281e6f45bf79b08b59b49d21bed.mp3",
      "duration": 5.2477097505668935,
      "sha256": "7f36f0754e0eb808ebd49c126271b6aadb0b8281e6f45bf79b08b59b49d21bed"
    },
    "ja:change-mind:15": {
      "text": "ディナーはセックスの頭金ではありません。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/8d62ba01f571befa9a2c1b505311de554434c20afe94255afad9c9392eebb0d6.mp3",
      "duration": 3.2275736961451247,
      "sha256": "8d62ba01f571befa9a2c1b505311de554434c20afe94255afad9c9392eebb0d6"
    },
    "ja:change-mind:16": {
      "text": "帰ったわ。彼にはビッチって呼ばれた。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/148e7d5c6f406dfa0c8ec5001d3f06b4267c9558504d42f43e4a0f5da44c3190.mp3",
      "duration": 3.1927437641723357,
      "sha256": "148e7d5c6f406dfa0c8ec5001d3f06b4267c9558504d42f43e4a0f5da44c3190"
    },
    "ja:change-mind:17": {
      "text": "そしてあなたはタクシーを呼びました。素晴らしい分業。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7363505d40930dd6142f8f6541dc6930faf784ab5ed9202d17f17448040401b2.mp3",
      "duration": 4.551111111111111,
      "sha256": "7363505d40930dd6142f8f6541dc6930faf784ab5ed9202d17f17448040401b2"
    },
    "ja:change-mind:18": {
      "text": "ゾーヤはフライドポテトを滑らせます。フライドポテトには細かい文字はありません。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a16314a3d2ed21fde7ebeb54ae9151e7b7e297482d4fac0ff491f93e1aed80f3.mp3",
      "duration": 5.851428571428571,
      "sha256": "a16314a3d2ed21fde7ebeb54ae9151e7b7e297482d4fac0ff491f93e1aed80f3"
    },
    "ja:compliment:0": {
      "text": "27 歳のチャドが 29 歳のロキシーを訪ねます。彼女は新しい DJ セットをプレイします。彼はネイティブスピーカーのように話すことに決めました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/4fb13e7395164eb516f27058c4bf97ed6e08a9f1e48497d965cd583b61383456.mp3",
      "duration": 11.354557823129252,
      "sha256": "4fb13e7395164eb516f27058c4bf97ed6e08a9f1e48497d965cd583b61383456"
    },
    "ja:compliment:1": {
      "text": "君のプレイリスト、shitだね。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/e3f5d4913e84958441de32124a66409595e8d8328fcac3e0ef82087f0ffb2dd7.mp3",
      "duration": 3.076643990929705,
      "sha256": "e3f5d4913e84958441de32124a66409595e8d8328fcac3e0ef82087f0ffb2dd7"
    },
    "ja:compliment:2": {
      "text": "ごめん。私のプレイリストは何ですか?",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/4d25c9c69924d5b1510ecec8871a6788142e8822b08b9d3d9a5f2caf393939d1.mp3",
      "duration": 3.4017233560090703,
      "sha256": "4d25c9c69924d5b1510ecec8871a6788142e8822b08b9d3d9a5f2caf393939d1"
    },
    "ja:compliment:3": {
      "text": "the shit！つまり最高ってこと！",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/db82418fcbd48e13639b09160acbbd2bb56cf381fd4549bc0a6cc8451fce2612.mp3",
      "duration": 3.297233560090703,
      "sha256": "db82418fcbd48e13639b09160acbbd2bb56cf381fd4549bc0a6cc8451fce2612"
    },
    "ja:compliment:4": {
      "text": "君のプレイリストは『the shit』だ！",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/bd0c55e998d2dbc632befac8d3b01df2ded25cf5be817a44581a10a39bf454f2.mp3",
      "duration": 3.610702947845805,
      "sha256": "bd0c55e998d2dbc632befac8d3b01df2ded25cf5be817a44581a10a39bf454f2"
    },
    "ja:compliment:5": {
      "text": "ほんの一語で、とんでもない違い。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/841c919e3901d5114fd7d661f9bfe3b1a7929dfe57951198798088d8cfdf0145.mp3",
      "duration": 2.693514739229025,
      "sha256": "841c919e3901d5114fd7d661f9bfe3b1a7929dfe57951198798088d8cfdf0145"
    },
    "ja:compliment:6": {
      "text": "わかった。君はビッチだ。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c1ec69cb1fef0fa06bb22e81c3760f3292985f806da40e273476b767f91d3f87.mp3",
      "duration": 2.380045351473923,
      "sha256": "c1ec69cb1fef0fa06bb22e81c3760f3292985f806da40e273476b767f91d3f87"
    },
    "ja:compliment:7": {
      "text": "死にたい願望や壊れた辞書はありますか？",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6e1412520be84cce9bf8ab73dd5166774d2c7a2fa958ee7b5313a94631fb89df.mp3",
      "duration": 3.3436734693877552,
      "sha256": "6e1412520be84cce9bf8ab73dd5166774d2c7a2fa958ee7b5313a94631fb89df"
    },
    "ja:compliment:8": {
      "text": "褒め言葉のつもりで言いました。それは間違っていました。ごめん。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/eb27c0a6fe60febde32b034e2c8b7d279e02245664f859f74d5ffb1ea79ce9c4.mp3",
      "duration": 4.73687074829932,
      "sha256": "eb27c0a6fe60febde32b034e2c8b7d279e02245664f859f74d5ffb1ea79ce9c4"
    },
    "ja:compliment:9": {
      "text": "ラッパーが自分を『bad bitch』って呼んでた。うれしそうだったよ。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/18b829e11f681a55c18c58918bd388ed3616eaaa72fb8a1d9d16b48e34f994da.mp3",
      "duration": 5.027120181405896,
      "sha256": "18b829e11f681a55c18c58918bd388ed3616eaaa72fb8a1d9d16b48e34f994da"
    },
    "ja:compliment:10": {
      "text": "彼女は自分でそう呼んだの。あなたは家に招いた相手をビッチと呼んだ。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/1282307e5013adbc7b4bfbf1b424fbef8ca3c2f44136886aa14a28b46937b256.mp3",
      "duration": 6.362267573696145,
      "sha256": "1282307e5013adbc7b4bfbf1b424fbef8ca3c2f44136886aa14a28b46937b256"
    },
    "ja:compliment:11": {
      "text": "コンテクスト。私の天敵。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/b5712df0599c80178ff99711d470beea4f3e4e1fdbc0bbcd806ec19ee187435c.mp3",
      "duration": 2.681904761904762,
      "sha256": "b5712df0599c80178ff99711d470beea4f3e4e1fdbc0bbcd806ec19ee187435c"
    },
    "ja:compliment:12": {
      "text": "「あなたは素晴らしい音楽センスをお持ちですね。」と言ってみましょう。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7d842d3287d96376454ad6c58903dbde504d90e0a38413b07c94055a5c8353b2.mp3",
      "duration": 4.713650793650793,
      "sha256": "7d842d3287d96376454ad6c58903dbde504d90e0a38413b07c94055a5c8353b2"
    },
    "ja:compliment:13": {
      "text": "あなたは素晴らしい音楽センスをお持ちです。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/215d071c27ea8e3fb419ed0112c59ff125ac0e1f3153bdf3914d0dafa90ac139.mp3",
      "duration": 2.8676643990929707,
      "sha256": "215d071c27ea8e3fb419ed0112c59ff125ac0e1f3153bdf3914d0dafa90ac139"
    },
    "ja:compliment:14": {
      "text": "ありがとう。見る？死傷者はいない。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2582f9dfaa5d3f62d216854c350f0d4a940cafb25ab7b13365e68b1d7cc08d7d.mp3",
      "duration": 3.4713832199546486,
      "sha256": "2582f9dfaa5d3f62d216854c350f0d4a940cafb25ab7b13365e68b1d7cc08d7d"
    },
    "ja:compliment:15": {
      "text": "じゃあ『you killed it』は『最高にうまくやった』って意味にもなる？",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/bcc780aacbd02c98457e6df5ded55b4655f6ee17a3b75b062d0df779b946f694.mp3",
      "duration": 7.267845804988662,
      "sha256": "bcc780aacbd02c98457e6df5ded55b4655f6ee17a3b75b062d0df779b946f694"
    },
    "ja:compliment:16": {
      "text": "そう。そして『please leave』は『出ていってください』って意味。",
      "who": "roxy",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/2dc2d4a5413f62c512065094912c571fa55c4a0e541233a02dd8c9f828257dcf.mp3",
      "duration": 5.828208616780046,
      "sha256": "2dc2d4a5413f62c512065094912c571fa55c4a0e541233a02dd8c9f828257dcf"
    },
    "ja:compliment:17": {
      "text": "ついに。めちゃくちゃできない表現。",
      "who": "chad",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/9765fb35e29598dbba5e9ed0b297aa5811b4f7f1794332faa23218b8926e7b31.mp3",
      "duration": 2.75156462585034,
      "sha256": "9765fb35e29598dbba5e9ed0b297aa5811b4f7f1794332faa23218b8926e7b31"
    },
    "ja:compliment:18": {
      "text": "彼は「PULL」と書かれたドアを押します。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/5a61022eaff13bdc58863f93cf1860dfc7020e3590bd38f88269cd3d93f3d25d.mp3",
      "duration": 3.6919727891156464,
      "sha256": "5a61022eaff13bdc58863f93cf1860dfc7020e3590bd38f88269cd3d93f3d25d"
    },
    "ja:netflix:0": {
      "text": "28 歳のマックスは、26 歳のクリンジナを Netflix とチルに招待しました。彼女は「URBAN INFRASTRUCTURE」と書かれたノートを持ってきました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/7a10454339082378429cd08ff05c4dab781ffe138e4d6317fb028c7cf4ff5673.mp3",
      "duration": 12.097596371882085,
      "sha256": "7a10454339082378429cd08ff05c4dab781ffe138e4d6317fb028c7cf4ff5673"
    },
    "ja:netflix:1": {
      "text": "それで…Netflixとリラックス？",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/41d7eb63069e65098f5a3cd1bfbe21a770bf0c9dc6d15ad0575c63c692dca53c.mp3",
      "duration": 2.6354648526077096,
      "sha256": "41d7eb63069e65098f5a3cd1bfbe21a770bf0c9dc6d15ad0575c63c692dca53c"
    },
    "ja:netflix:2": {
      "text": "絶対に。下水道に関するドキュメンタリーを見つけました。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/f8a8ef0a5067c19d0a7f2aaac95b1b9ab6a666466ab302061a2801e0f33fb56e.mp3",
      "duration": 4.85297052154195,
      "sha256": "f8a8ef0a5067c19d0a7f2aaac95b1b9ab6a666466ab302061a2801e0f33fb56e"
    },
    "ja:netflix:3": {
      "text": "それは私が念頭に置いていたものとはまったく異なります。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/2fbbcef9b141fd8393f7bcac6bb615e2023ed3f2fb7e745e69cf4c90f103ddd9.mp3",
      "duration": 4.4117913832199545,
      "sha256": "2fbbcef9b141fd8393f7bcac6bb615e2023ed3f2fb7e745e69cf4c90f103ddd9"
    },
    "ja:netflix:4": {
      "text": "つまり…浄化槽についてのドキュメンタリー？",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/129085a5eb366966013bc0e3e5ebaec75df8b9cfdd05cd512a6bd9de0bf027c8.mp3",
      "duration": 3.3668934240362813,
      "sha256": "129085a5eb366966013bc0e3e5ebaec75df8b9cfdd05cd512a6bd9de0bf027c8"
    },
    "ja:netflix:5": {
      "text": "私は行動を起こそうとしていました。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/1b1ae2fd8cd29319327b98a9f6d9aff2ea86692c9754c496d60f2e0228112fe8.mp3",
      "duration": 2.9024943310657596,
      "sha256": "1b1ae2fd8cd29319327b98a9f6d9aff2ea86692c9754c496d60f2e0228112fe8"
    },
    "ja:netflix:6": {
      "text": "ソファの反対側にもスペースがあります。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a5581133d421134cae163c1c0e65d88b90a4afaaf22c44e83edd9a4b0612140f.mp3",
      "duration": 2.7399546485260773,
      "sha256": "a5581133d421134cae163c1c0e65d88b90a4afaaf22c44e83edd9a4b0612140f"
    },
    "ja:netflix:7": {
      "text": "家具の移動ではありません。ロマンチックな動き。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/874e5c3172903fef272ac7725677dcee12abf78aabf223ed571458b485ed5e19.mp3",
      "duration": 3.378503401360544,
      "sha256": "874e5c3172903fef272ac7725677dcee12abf78aabf223ed571458b485ed5e19"
    },
    "ja:netflix:8": {
      "text": "おお。私は映画のためだけにここにいます。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6a4efb3b424952ea0d9fdbbfa7a54b254273ad83ac2dcd432c581a498d39f82a.mp3",
      "duration": 3.4597732426303853,
      "sha256": "6a4efb3b424952ea0d9fdbbfa7a54b254273ad83ac2dcd432c581a498d39f82a"
    },
    "ja:netflix:9": {
      "text": "けっこうだ。プレッシャーはありません。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/20becf7eff6f79a06812e6957db1f8a9ae9b27a372117f8f35d0f3ec63708720.mp3",
      "duration": 2.414875283446712,
      "sha256": "20becf7eff6f79a06812e6957db1f8a9ae9b27a372117f8f35d0f3ec63708720"
    },
    "ja:netflix:10": {
      "text": "良い。下水道にはすでに十分な圧力がかかっています。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/1a73c8602925592e60447659d50beefae6908e37a74f4c971e4c76a8ab6fa7fd.mp3",
      "duration": 4.783310657596372,
      "sha256": "1a73c8602925592e60447659d50beefae6908e37a74f4c971e4c76a8ab6fa7fd"
    },
    "ja:netflix:11": {
      "text": "本気でこんなことに興味あるの？",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/a13c19f4a229fef63c6051c11769c71e6eadfa5b03102f7b8527c8dc7db803df.mp3",
      "duration": 2.2407256235827666,
      "sha256": "a13c19f4a229fef63c6051c11769c71e6eadfa5b03102f7b8527c8dc7db803df"
    },
    "ja:netflix:12": {
      "text": "はい。文字通り。それがこの映画の内容です。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/b59e306afc081481519eb2ee49be1b8df3c292bb66ccfe94ac126bb38e2a6473.mp3",
      "duration": 4.4117913832199545,
      "sha256": "b59e306afc081481519eb2ee49be1b8df3c292bb66ccfe94ac126bb38e2a6473"
    },
    "ja:netflix:13": {
      "text": "ベッドのシーツも変えました。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/69a2042251a604bf74473b952817ebb28c439b2aa13249032c2bd5233ade34e6.mp3",
      "duration": 1.9272562358276644,
      "sha256": "69a2042251a604bf74473b952817ebb28c439b2aa13249032c2bd5233ade34e6"
    },
    "ja:netflix:14": {
      "text": "よかったね。衛生は前戯ではありません。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/e50d1b779636b1b3149691a7df37fa386ecc0e952d77e2195c1b80988b9bd23a.mp3",
      "duration": 3.517823129251701,
      "sha256": "e50d1b779636b1b3149691a7df37fa386ecc0e952d77e2195c1b80988b9bd23a"
    },
    "ja:netflix:15": {
      "text": "大丈夫。ポップコーンを渡します。ファットバーグとは何ですか？",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/19c99207a18883c95ec5fb14baac9a96d6929eeff5d64e525420bba1dd9d09e7.mp3",
      "duration": 4.725260770975057,
      "sha256": "19c99207a18883c95ec5fb14baac9a96d6929eeff5d64e525420bba1dd9d09e7"
    },
    "ja:netflix:16": {
      "text": "最後に、適切な質問をする男性が現れました。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/c05ae3099c076a94f8d91614ae074366e00b98ea1e778bf09b41fff3c012650d.mp3",
      "duration": 4.1099319727891155,
      "sha256": "c05ae3099c076a94f8d91614ae074366e00b98ea1e778bf09b41fff3c012650d"
    },
    "ja:netflix:17": {
      "text": "このデート、完全に水に流れたな。",
      "who": "max",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:M",
      "model": "piper-tts-1.8.0",
      "src": "audio/c9188aef51c2147ca88489e03a59c9a7e1ec6670d3fa3c1655faace3f646da95.mp3",
      "duration": 3.0418140589569163,
      "sha256": "c9188aef51c2147ca88489e03a59c9a7e1ec6670d3fa3c1655faace3f646da95"
    },
    "ja:netflix:18": {
      "text": "画面にパイプが表示されます。クリンジナはその部分をもう一度見るように頼みます。マックスは初めて、一晩中本当に興味をそそられました。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/935ed4d544385038ad5edf4648f52b326b72c10d1b42c798e6180380848ed0ea.mp3",
      "duration": 10.692789115646258,
      "sha256": "935ed4d544385038ad5edf4648f52b326b72c10d1b42c798e6180380848ed0ea"
    },
    "ja:translator:0": {
      "text": "26歳のクリンジナさんは、しつこい知人（30歳）を拒否したいと考えている。ゾーヤさん（31歳）は、英語のメッセージの爆発力を弱めるのに協力している。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/377951eace8dca3f40e034e1b9515f3a4561e178fce04857e74673c4a8633ba1.mp3",
      "duration": 13.305034013605443,
      "sha256": "377951eace8dca3f40e034e1b9515f3a4561e178fce04857e74673c4a8633ba1"
    },
    "ja:translator:1": {
      "text": "草稿 1: 「くたばれ、自己執着の野郎。」",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/367d4b8fd2f2927bceb807849c75fd9952e2a16582a9866c50f2e80470e6de54.mp3",
      "duration": 3.4481632653061225,
      "sha256": "367d4b8fd2f2927bceb807849c75fd9952e2a16582a9866c50f2e80470e6de54"
    },
    "ja:translator:2": {
      "text": "クリア。簡潔。もしかしたら、あなたが求めていたトーンではないかもしれません。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/6859d538d3dc782db17fcf86fcf0d9b05220b69b2a076e81e6587563d1c1c20f.mp3",
      "duration": 6.397097505668934,
      "sha256": "6859d538d3dc782db17fcf86fcf0d9b05220b69b2a076e81e6587563d1c1c20f"
    },
    "ja:translator:3": {
      "text": "翻訳者に暖かくしてほしいとお願いしました。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/cba1aeb916eec632f05e36c38dacd8dd32954e45c3888cfa5a88378066c58661.mp3",
      "duration": 3.633922902494331,
      "sha256": "cba1aeb916eec632f05e36c38dacd8dd32954e45c3888cfa5a88378066c58661"
    },
    "ja:translator:4": {
      "text": "『Fuck off, please』ってなった？",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/52f00677899053b877143c8db66c45876329c7183558916030715ad87b70c044.mp3",
      "duration": 2.647074829931973,
      "sha256": "52f00677899053b877143c8db66c45876329c7183558916030715ad87b70c044"
    },
    "ja:translator:5": {
      "text": "「自己中心的なクソ野郎、もうやめてください。」",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/d226755a17c38d2131bc4f43b09fde15b46ec505aa79ea2909cbd499aaa96a74.mp3",
      "duration": 3.436553287981859,
      "sha256": "d226755a17c38d2131bc4f43b09fde15b46ec505aa79ea2909cbd499aaa96a74"
    },
    "ja:translator:6": {
      "text": "ああ。企業の敵意。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/cf7f66f7250c2d671acfde5642d05e66076f4b67e397884988d78bac68b435c4.mp3",
      "duration": 1.6950566893424037,
      "sha256": "cf7f66f7250c2d671acfde5642d05e66076f4b67e397884988d78bac68b435c4"
    },
    "ja:translator:7": {
      "text": "興味ないです。私にメッセージを送るのはやめてください。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/059da74a57e612dd2a9103db390ff1710a88369349079e6f5879af5a1d252022.mp3",
      "duration": 4.260861678004535,
      "sha256": "059da74a57e612dd2a9103db390ff1710a88369349079e6f5879af5a1d252022"
    },
    "ja:translator:8": {
      "text": "それです。それを送ってください。他のものは削除してください。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/f34522f6da3b62760c361fc4c7488e4088de25ea2abccc17375d2b1e3e6fc53c.mp3",
      "duration": 5.154829931972789,
      "sha256": "f34522f6da3b62760c361fc4c7488e4088de25ea2abccc17375d2b1e3e6fc53c"
    },
    "ja:translator:9": {
      "text": "「すべて送信」というボタンがあります。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/9b83842b9254fbd4fe8e60ab78b1b54a2d12dfc03513f8aef074a383b974e6bd.mp3",
      "duration": 2.647074829931973,
      "sha256": "9b83842b9254fbd4fe8e60ab78b1b54a2d12dfc03513f8aef074a383b974e6bd"
    },
    "ja:translator:10": {
      "text": "いいえ！最終ドラフトのみを送信してください。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/64c4ed52809c51cef2db1579a818582baafe33985639a9789fe553b16a28b5b2.mp3",
      "duration": 3.6687528344671203,
      "sha256": "64c4ed52809c51cef2db1579a818582baafe33985639a9789fe553b16a28b5b2"
    },
    "ja:translator:11": {
      "text": "クリンジナは 5 つの青いチェック マークを見つめます。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a92024554cddb6c9f5fceeadb065bfade5ee01e0a89a6c5aee0054cf649f6c4a.mp3",
      "duration": 4.028662131519274,
      "sha256": "a92024554cddb6c9f5fceeadb065bfade5ee01e0a89a6c5aee0054cf649f6c4a"
    },
    "ja:translator:12": {
      "text": "遅すぎる。彼は私の性格形成をすべて読んでいます。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/399ae280fc4d6515c49fa6fdb9b5a1aa909dd15d4938777fc8a930860a823a1f.mp3",
      "duration": 5.050340136054421,
      "sha256": "399ae280fc4d6515c49fa6fdb9b5a1aa909dd15d4938777fc8a930860a823a1f"
    },
    "ja:translator:13": {
      "text": "『prick』から『please』へ。感動の旅ね。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a0c34580f3f8ba71ef0b1ffad265e31edde345559420e2e9778c73ddce599ac5.mp3",
      "duration": 4.864580498866213,
      "sha256": "a0c34580f3f8ba71ef0b1ffad265e31edde345559420e2e9778c73ddce599ac5"
    },
    "ja:translator:14": {
      "text": "彼はこう答えました。「それで…それはもしかしたら？」",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/a38fb9f219c98f3d6ea3929fd6125e815a7f842ee824bcb9a4fac8c1d06465a6.mp3",
      "duration": 4.017052154195011,
      "sha256": "a38fb9f219c98f3d6ea3929fd6125e815a7f842ee824bcb9a4fac8c1d06465a6"
    },
    "ja:translator:15": {
      "text": "いいえ、それは違います。もう連絡しないでください。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/c66e7aaaaae2a440842c410821614a323b8b2229e73bae2ae1db5475d3e9c61d.mp3",
      "duration": 4.260861678004535,
      "sha256": "c66e7aaaaae2a440842c410821614a323b8b2229e73bae2ae1db5475d3e9c61d"
    },
    "ja:translator:16": {
      "text": "翻訳は必要ありません。",
      "who": "zoya",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/373656062b44a810f00c538d77fc1d461238afd055e8e648a9f7f95f29d04edc.mp3",
      "duration": 2.1710657596371883,
      "sha256": "373656062b44a810f00c538d77fc1d461238afd055e8e648a9f7f95f29d04edc"
    },
    "ja:translator:17": {
      "text": "今回ばかりは、私の英語が問題なんじゃない。",
      "who": "krinzh",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/97435563590c13e5c29f8f6980956435f172d88d61a990e3eba1bfd78228f5ac.mp3",
      "duration": 3.7151927437641725,
      "sha256": "97435563590c13e5c29f8f6980956435f172d88d61a990e3eba1bfd78228f5ac"
    },
    "ja:translator:18": {
      "text": "彼女は連絡をブロックします。翻訳者は「文章をもっと親しみやすいものにしますか?」と提案します。",
      "who": "narrator",
      "lang": "ja",
      "provider": "Piper",
      "voice": "ja_JA-hi_fi_captain-medium:F",
      "model": "piper-tts-1.8.0",
      "src": "audio/fad43c9b1e0204be5d23caecf7f89d02195f49988b120a7a176aa6764d83f304.mp3",
      "duration": 8.103764172335602,
      "sha256": "fad43c9b1e0204be5d23caecf7f89d02195f49988b120a7a176aa6764d83f304"
    }
  }
};
