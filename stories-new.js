// Hand-authored additions; the deployed legacy content remains unchanged.
const line = (who,en,ru) => ({type:'line',who,en,ru});
const scene = (en,ru) => ({type:'scene',en,ru});
const choice = (who,prompt,promptRu,options,optionsRu,correct,note) =>
  ({type:'choice',who,prompt,promptRu,options,optionsRu,correct,ru:optionsRu[correct],note});

export const newStories = [
  {
    id:'hot-mic', title:'Микрофон, сука', enTitle:'Still on the Call',
    subtitle:'Один созвон. Один микрофон. Ноль карьерных перспектив.',
    place:'Рабочий созвон, 09:07',color:'#a9cff4',cast:['max','zoya'],prop:'',
    topic:'Рабочие созвоны: mute, cut out, full of shit, kiss ass',
    ending:{en:'Max finally found the mute button. His boss found a volunteer to rewrite the presentation.',ru:'Макс наконец нашёл кнопку микрофона. Начальник нашёл добровольца переписать презентацию.'},
    nodes:[
      scene('Max, 28, and Zoya, 31, are on a work call. Their manager is presenting his twelfth slide about keeping things brief.','Макс, 28, и Зоя, 31, на рабочем созвоне. Начальник показывает двенадцатый слайд о том, как важно говорить кратко.'),
      line('max','This meeting could have been a fucking email.','Этот созвон можно было заменить ёбаным письмом.'),
      line('zoya','Max. Your microphone.','Макс. Твой микрофон.'),
      line('max','Relax. I muted it.','Расслабься. Я его выключил.'),
      choice('zoya','Warn Max that everyone can hear him.','Предупреди Макса, что его слышат все.',
        ['You’re on mute.','Your mic is still on.','Your camera is off.'],
        ['У тебя выключен микрофон.','У тебя всё ещё включён микрофон.','У тебя выключена камера.'],1,
        'Your mic is on — микрофон включён. You’re on mute означает обратное: собеседника не слышно.'),
      line('max','Then why is the little speaker crossed out?','А почему тогда маленький динамик перечёркнут?'),
      line('zoya','You muted your speakers. You can’t hear us. We can hear you.','Ты выключил звук у себя. Ты нас не слышишь. А мы тебя слышим.'),
      line('max','Oh, shit. How much did you hear?','Бля. И сколько вы слышали?'),
      line('zoya','Your audio cut out for a second.','У тебя звук на секунду пропал.'),
      choice('max','Ask which part they missed because of the connection.','Спроси, какой кусок они не услышали из-за связи.',
        ['So the meeting is over?','Why did you cut my salary?','Which second? My career depends on it.'],
        ['Значит, созвон закончен?','Зачем вы урезали мне зарплату?','Какая именно секунда? От этого зависит моя карьера.'],2,
        'Your audio cut out — звук пропал или прервался. Это не означает, что встреча закончилась или кого-то уволили.'),
      line('zoya','We heard “full of shit”. Then you froze.','Мы услышали «несёт полную херню». Потом ты завис.'),
      line('max','Maybe I meant the spreadsheet.','Может, я имел в виду таблицу.'),
      choice('zoya','Explain why the phrase sounded like an insult.','Объясни, почему фраза прозвучала как оскорбление.',
        ['You said he was talking bullshit.','You said he needed the bathroom.','You said the spreadsheet was full.'],
        ['Ты сказал, что он несёт херню.','Ты сказал, что ему нужно в туалет.','Ты сказал, что таблица заполнена.'],0,
        'He’s full of shit — грубое «он несёт херню / врёт». Здесь full не описывает заполненность таблицы.'),
      scene('A message from the manager appears: “Max, any feedback?” Max turns his speakers back on.','Появляется сообщение начальника: «Макс, есть обратная связь?» Макс включает звук.'),
      line('max','Brilliant presentation. Visionary. Life-changing.','Блестящая презентация. Прорывная. Изменила мою жизнь.'),
      line('zoya','You don’t have to kiss his ass.','Не обязательно лизать ему жопу.'),
      line('max','I’m trying to keep my job, Zoya.','Я пытаюсь сохранить работу, Зоя.'),
      choice('zoya','Help Max offer useful feedback without sucking up.','Помоги Максу дать полезную обратную связь без подхалимства.',
        ['Every slide is perfect. Especially all twelve of them.','I think we could make the presentation shorter.','I’d love to kiss your ass after the meeting.'],
        ['Каждый слайд идеален. Особенно все двенадцать.','Думаю, презентацию можно сделать короче.','Я бы с радостью полизал вам жопу после созвона.'],1,
        'Kiss someone’s ass и suck up — грубое и разговорное обозначения подхалимства. I think we could… позволяет предложить конкретное улучшение.'),
      scene('The manager replies: “Great. Send us your shorter version by lunch.”','Начальник отвечает: «Отлично. Пришли сокращённую версию к обеду».'),
      line('max','Fuck.','Бля.'),
      line('zoya','Still on the call, Max.','Ты всё ещё на созвоне, Макс.'),
      line('max','That was my feedback on the deadline.','Это была моя обратная связь по срокам.')
    ]
  },
  {
    id:'dad-dating',title:'Батя в Тиндере',enTitle:'Daddy Issues',
    subtitle:'Опытный отец. Неопытный пользователь.',
    place:'Кухня, 20:36',color:'#b7ee65',cast:['dad','son'],prop:'',
    topic:'Анкета и знакомства: daddy, seeing someone, casual, serious',
    ending:{en:'Dad removed “daddy” from his profile. He kept “excellent with a drill”. Some risks were worth taking.',ru:'Батя убрал daddy из анкеты. «Отлично обращаюсь с дрелью» оставил. Некоторыми рисками можно пренебречь.'},
    nodes:[
      scene('Dad, 52, is single and ready to try dating apps. His son Lyosha, 23, offers to check his English profile.','Батя, 52, свободен и решил попробовать приложения для знакомств. Лёша, 23, предлагает проверить английский в анкете.'),
      line('dad','Experienced daddy looking for a partner.','Опытный папочка ищет партнёршу.'),
      line('son','Dad. Why “daddy”?','Пап. Почему daddy?'),
      line('dad','Twenty-three years of experience. You’re my reference.','Двадцать три года опыта. Ты моя рекомендация.'),
      choice('son','Explain what “daddy” can suggest in a dating profile.','Объясни, на что daddy может намекать в анкете знакомств.',
        ['It guarantees that you want more children.','It only means you are a good parent.','It can sound sexual here, not just parental.'],
        ['Это гарантирует, что ты хочешь ещё детей.','Это означает только то, что ты хороший родитель.','Здесь это может звучать сексуально, а не просто по-родительски.'],2,
        'Daddy — «папочка», но в контексте флирта слово может быть сексуальным обращением к мужчине. Контекст анкеты меняет впечатление.'),
      line('dad','Fine. “Single dad. Good cook. Own teeth.”','Ладно. «Свободный отец. Хорошо готовлю. Зубы свои».'),
      line('son','Keep the first two.','Первые два пункта оставь.'),
      scene('A woman named Helen, 49, sends him a message: “Are you seeing anyone?”','Хелен, 49, пишет ему: «Are you seeing anyone?»'),
      line('dad','Yes. My son. He’s right here.','Да. Сына. Он прямо тут.'),
      choice('son','Help Dad answer Helen’s question about his relationship status.','Помоги бате ответить на вопрос Хелен о его отношениях.',
        ['No, I’m single.','Yes, my eyesight is fine.','Only you can see my profile.'],
        ['Нет, я свободен.','Да, со зрением всё в порядке.','Только ты видишь мою анкету.'],0,
        'Are you seeing anyone? в разговоре о знакомствах означает «Ты с кем-нибудь встречаешься?». Это не проверка зрения.'),
      line('dad','She says she isn’t looking for anything casual. I have a jacket.','Она пишет, что не ищет ничего casual. У меня есть пиджак.'),
      line('son','She’s not asking about your clothes.','Она не про одежду спрашивает.'),
      choice('dad','Say you want a serious relationship too.','Скажи, что тоже хочешь серьёзных отношений.',
        ['I never wear jeans on a first date.','I’m looking for something serious too.','I take my jacket very seriously.'],
        ['Я никогда не надеваю джинсы на первое свидание.','Я тоже ищу серьёзные отношения.','Я очень серьёзно отношусь к своему пиджаку.'],1,
        'Casual может описывать повседневную одежду, а в дейтинге — отношения без серьёзных обязательств. Looking for something serious — искать серьёзные отношения.'),
      line('dad','Can I add that I’m good in bed?','Можно добавить, что я хорош в постели?'),
      line('son','Are you about to tell me you sleep for eight hours?','Ты сейчас скажешь, что спишь по восемь часов?'),
      line('dad','Nine. And I don’t steal the blanket.','По девять. И одеяло не отбираю.'),
      line('son','Let’s save that for the second date.','Давай оставим это для второго свидания.'),
      scene('Helen writes: “Coffee on Saturday?” Dad starts typing about his pension.','Хелен пишет: «Кофе в субботу?» Батя начинает печатать про свою пенсию.'),
      choice('son','Accept the invitation and suggest a time.','Прими приглашение и предложи время.',
        ['Coffee sounds good. How about eleven?','I accept your terms and conditions.','Let’s discuss our joint mortgage first.'],
        ['Кофе — отлично. Как насчёт одиннадцати?','Я принимаю ваши условия использования.','Давай сначала обсудим совместную ипотеку.'],0,
        'Sounds good — естественное согласие. How about eleven? — предложение времени, без лишней официальности и преждевременных обязательств.'),
      line('dad','Done. She sent a heart.','Готово. Она прислала сердечко.'),
      line('son','See? You didn’t need “experienced daddy”.','Видишь? «Опытный папочка» не понадобился.'),
      line('dad','She hasn’t seen the drill yet.','Она ещё дрель не видела.')
    ]
  },
  {
    id:'return-hoodie',title:'Верни худи и определись',enTitle:'Zip It Up',
    subtitle:'Он хочет всё вернуть. Она — одну конкретную вещь.',
    place:'Переписка, 01:48',color:'#ffbb8a',cast:['krinzh','zoya'],prop:'',
    topic:'Бывшие и границы: get back together, come over, closure, move on',
    ending:{en:'The hoodie came back. The relationship didn’t. Both sleeves were finally on the right person.',ru:'Худи вернулось. Отношения — нет. Оба рукава наконец оказались на нужном человеке.'},
    nodes:[
      scene('Krinzhina, 26, gets a late-night message from her ex, 30. Zoya, 31, is helping her stay focused on retrieving an expensive hoodie.','Кринжине, 26, ночью пишет бывший, 30. Зоя, 31, помогает ей сосредоточиться на возвращении дорогого худи.'),
      line('krinzh','He says, “I miss us.”','Он пишет: «Я скучаю по нам».'),
      line('zoya','And what do you miss?','А ты по чему скучаешь?'),
      line('krinzh','My hoodie. It had pockets and emotional stability.','По худи. У него были карманы и эмоциональная стабильность.'),
      choice('krinzh','Make it clear you want the hoodie back, not the relationship.','Ясно скажи, что хочешь вернуть худи, а не отношения.',
        ['I want us back too.','I want my hoodie back. I don’t want to get back together.','Come back to me wearing my hoodie.'],
        ['Я тоже хочу вернуть нас.','Я хочу вернуть худи. Я не хочу снова сходиться.','Вернись ко мне в моём худи.'],1,
        'Get something back — вернуть себе вещь. Get back together — снова стать парой. Сходство слов не делает желания одинаковыми.'),
      line('krinzh','Now he says, “Can I come over?”','Теперь пишет: «Можно зайти к тебе?»'),
      line('zoya','At two in the morning. Very efficient delivery service.','В два часа ночи. Очень оперативная доставка.'),
      choice('zoya','Explain the invitation without treating a possible hint as a fact.','Объясни предложение, не выдавая возможный намёк за факт.',
        ['He has definitely moved on.','He is promising to send a courier.','He wants to visit. At this hour, there may be a hint.'],
        ['Он точно отпустил прошлое.','Он обещает отправить курьера.','Он хочет зайти. В такой час тут может быть намёк.'],2,
        'Come over — прийти в гости. Ночная переписка с бывшим может придавать фразе интимный подтекст, но сама фраза ничего не гарантирует.'),
      line('krinzh','I’ll say, “Leave it with the concierge tomorrow.”','Напишу: «Оставь его завтра у консьержа».'),
      line('zoya','Good. A location, a day, and no sofa.','Отлично. Место, день и никакого дивана.'),
      line('krinzh','He says he needs closure.','Пишет, что ему нужно поставить точку.'),
      line('zoya','Does he think your hoodie is a counselling service?','Он считает твоё худи психологической службой?'),
      choice('krinzh','Acknowledge his feelings while keeping your boundary.','Признай его переживания, сохранив свою границу.',
        ['I understand, but I’m not meeting tonight. Please return the hoodie tomorrow.','Fine, come over. Just don’t bring any feelings.','Closure means you need to close my front door.'],
        ['Я понимаю, но сегодня ночью не встречаюсь. Пожалуйста, верни худи завтра.','Ладно, заходи. Только чувства с собой не приноси.','Closure означает, что тебе нужно закрыть мою входную дверь.'],0,
        'Closure после расставания — ощущение завершённости, возможность поставить точку. Сочувствие не обязывает соглашаться на встречу.'),
      line('krinzh','I also want to write, “My hoodie has a zipper. Start with that.”','Ещё хочу написать: «У моего худи есть молния. Начни с неё».'),
      line('zoya','Excellent joke. Terrible logistics. Send the address.','Отличная шутка. Ужасная логистика. Отправь адрес.'),
      scene('The next afternoon, the concierge hands over a bag. There is a note: “Maybe we can start over.”','На следующий день консьерж отдаёт пакет. Внутри записка: «Может, начнём сначала?»'),
      line('krinzh','He’s asking for another season.','Он просит ещё один сезон.'),
      choice('krinzh','Decline another attempt and say you are ready to move on.','Откажись от новой попытки и скажи, что готова жить дальше.',
        ['I’m moving in with you tomorrow.','Thanks for returning it. I’m ready to move on.','Let’s start over at my place tonight.'],
        ['Я завтра к тебе переезжаю.','Спасибо, что вернул. Я готова идти дальше.','Давай начнём сначала у меня сегодня вечером.'],1,
        'Move on — оставить прошлое позади и жить дальше. Move in — въехать, часто начать жить вместе. Start over — начать заново.'),
      line('zoya','How does it feel?','Ну как ощущения?'),
      line('krinzh','Warm. Slightly smells of bullshit.','Тепло. Слегка пахнет пиздежом.'),
      line('zoya','That washes out.','Это отстирается.'),
      line('krinzh','Finally. A problem with clear instructions on the label.','Наконец-то проблема с понятной инструкцией на ярлыке.')
    ]
  },
  {
    id:'size-isnt-the-point',title:'Размер не главное',enTitle:'Size Isn’t the Point',
    subtitle:'Он боялся, что маловат. Она хотела, чтобы он перестал мерить и начал слушать.',
    place:'Спальня, 23:14',color:'#ffadbc',cast:['max','roxy'],prop:'',
    topic:'Близость и разговор: penetration, come, go down on, sixty-nine',
    ending:{en:'Max stopped comparing himself with imaginary standards. Roxy stopped hoping he would read her mind. They found what delighted them both and lived happily, loudly, and without a ruler.',ru:'Макс перестал сравнивать себя с выдуманными стандартами. Рокси перестала надеяться, что он прочитает её мысли. Они нашли то, что радует обоих, и жили долго, счастливо, громко и без линейки.'},
    nodes:[
      scene('Max, 28, and Roxy, 29, have been together for six months. Tonight Max finally admits what has been worrying him.','Максу, 28, и Рокси, 29, вместе уже полгода. Сегодня Макс наконец признаётся, что его тревожит.'),
      line('max','I keep thinking my dick is too small.','Я всё думаю, что у меня слишком маленький член.'),
      line('roxy','Too small for what?','Слишком маленький для чего?'),
      line('max','To make you come from penetration.','Чтобы ты кончила от проникновения.'),
      choice('roxy','Answer honestly without blaming Max or his body.','Ответь честно, не обвиняя Макса или его тело.',
        ['I usually don’t come from penetration. That’s about what my body likes, not your size.','Yes. A real man would have fixed this already.','Let’s never talk about sex again.'],
        ['Я обычно не кончаю от проникновения. Дело в том, что нравится моему телу, а не в твоём размере.','Да. Настоящий мужчина уже решил бы эту проблему.','Давай больше никогда не говорить о сексе.'],0,
        'Come from penetration — кончить от проникновения. Честный разговор о предпочтениях не превращает тело партнёра в проблему.'),
      line('max','You could have told me.','Ты могла сказать.'),
      line('roxy','I’m telling you now. I really like it when you go down on me.','Вот сейчас и говорю. Мне очень нравится, когда ты делаешь мне куннилингус.'),
      line('max','Go down? Under the blanket?','Go down? Под одеяло?'),
      choice('roxy','Explain what “go down on someone” means here.','Объясни, что здесь значит go down on someone.',
        ['Criticize someone in public.','Give someone oral sex.','Lie down and go to sleep.'],
        ['Публично раскритиковать человека.','Сделать человеку оральные ласки.','Лечь и уснуть.'],1,
        'Go down on someone — разговорное «ласкать партнёра ртом». Значение определяется интимным контекстом.'),
      line('max','Okay. Show me what you like, and tell me if I miss.','Ладно. Покажи, что тебе нравится, и говори, если я промахиваюсь.'),
      line('roxy','Deal. No mind reading, no performance review.','Договорились. Без чтения мыслей и годовой оценки эффективности.'),
      scene('Some time later, Max emerges from under the blanket looking surprised and extremely pleased with himself.','Некоторое время спустя Макс появляется из-под одеяла — удивлённый и чрезвычайно довольный собой.'),
      line('max','That was much better than trying to prove something with my dick.','Это было гораздо лучше, чем пытаться что-то доказать членом.'),
      line('roxy','It was much better for me too.','Для меня тоже было гораздо лучше.'),
      choice('max','Respond without turning the moment back into a size competition.','Ответь, не превращая этот момент снова в соревнование размеров.',
        ['So was I bigger than your ex after all?','I’m glad. I liked it more too.','Please score every part of my body from one to ten.'],
        ['Так я всё-таки больше твоего бывшего?','Я рад. Мне тоже так понравилось больше.','Пожалуйста, оцени каждую часть моего тела от одного до десяти.'],1,
        'I liked it more too — спокойный способ поделиться своим удовольствием. More здесь сравнивает впечатления, а не тела.'),
      line('roxy','Want to try sixty-nine sometime?','Хочешь как-нибудь попробовать шестьдесят девять?'),
      line('max','At 6:09? Very specific, but I’m free.','В 6:09? Очень конкретно, но я свободен.'),
      choice('roxy','Explain what “sixty-nine” means in this conversation.','Объясни, что в этом разговоре значит sixty-nine.',
        ['A position where partners give each other oral sex at the same time.','A date scheduled for the ninth of June.','A polite way to end the evening.'],
        ['Поза, в которой партнёры одновременно делают друг другу оральные ласки.','Свидание, назначенное на девятое июня.','Вежливый способ закончить вечер.'],0,
        'Sixty-nine — сексуальная поза для взаимных оральных ласк. Время 6:09 — шутка Макса на буквальном прочтении числа.'),
      scene('They try it after a brief discussion of knees, pillows, and emergency hand signals. Both start laughing, then quickly stop laughing.','После короткого обсуждения коленей, подушек и аварийных жестов они пробуют. Оба начинают смеяться, а потом очень быстро перестают.'),
      line('max','I think I like this more than the classic version.','Кажется, мне это нравится больше классики.'),
      line('roxy','Same. Also, no one is grading your penis.','Мне тоже. И вообще, твой член никто не оценивает.'),
      line('max','Good. It failed the written exam.','Отлично. Письменный экзамен он провалил.'),
      scene('They kept talking, experimenting, and choosing what felt good instead of what was supposedly “normal”. They were very glad they had found each other.','Они продолжали разговаривать, пробовать новое и выбирать то, что приятно им, а не то, что якобы «нормально». И очень радовались, что нашли друг друга.')
    ]
  }
];

function addI18n(id,data){
  const story=newStories.find(s=>s.id===id);
  if(!story)return;
  story.i18n={...(data.languages||{es:true,zh:true,uk:true}),...data.story};
  for(const [index,nodeData] of Object.entries(data.nodes)){
    const node=story.nodes[Number(index)];
    if(!node)continue;
    node.i18n={...(node.i18n||{}),...nodeData};
  }
}

function addPairNotes(id,pair,notes){
  const story=newStories.find(s=>s.id===id);
  if(!story)return;
  for(const [index,text] of Object.entries(notes)){
    const node=story.nodes[Number(index)];
    if(!node)continue;
    node.i18n={...(node.i18n||{}),noteByPair:{...(node.i18n?.noteByPair||{}),[pair]:text}};
  }
}

addI18n('hot-mic',{
 story:{
  title:{en:'Still on the Call',es:'Micrófono, joder',zh:'麦克风还开着',uk:'Мікрофон, трясця'},
  enTitle:{es:'Todavía en la llamada',zh:'还在通话中',uk:'Ще на дзвінку'},
  subtitle:{en:'One call. One microphone. Zero career prospects.',es:'Una llamada. Un micrófono. Cero perspectivas profesionales.',zh:'一次会议。一个麦克风。职业前景归零。',uk:'Один дзвінок. Один мікрофон. Нуль кар’єрних перспектив.'},
  place:{en:'Work call, 09:07',es:'Videollamada de trabajo, 09:07',zh:'工作视频会议，09:07',uk:'Робочий дзвінок, 09:07'},
  topic:{en:'Work calls: mute, cut out, full of shit, kiss ass',es:'Videollamadas: mute, cut out, full of shit, kiss ass',zh:'工作会议：mute、cut out、full of shit、kiss ass',uk:'Робочі дзвінки: mute, cut out, full of shit, kiss ass'},
  ending:{es:'Max por fin encontró el botón de silencio. Su jefe encontró a un voluntario para rehacer la presentación.',zh:'马克斯终于找到了静音按钮。他的老板也找到了一个志愿者重做演示文稿。',uk:'Макс нарешті знайшов кнопку мікрофона. Керівник знайшов добровольця переписати презентацію.'}
 },
 nodes:{
  0:{line:{es:'Max, 28, y Zoya, 31, están en una llamada de trabajo. Su jefe presenta la diapositiva número doce sobre hablar con brevedad.',zh:'28岁的马克斯和31岁的卓娅正在参加工作会议。经理正在展示第十二张关于“说话要简短”的幻灯片。',uk:'Макс, 28, і Зоя, 31, на робочому дзвінку. Керівник показує дванадцятий слайд про те, як важливо говорити коротко.'}},
  1:{line:{es:'Esta reunión podría haber sido un maldito correo.',zh:'这场会明明可以变成一封该死的邮件。',uk:'Цю зустріч можна було замінити клятим листом.'}},
  2:{line:{es:'Max. Tu micrófono.',zh:'马克斯。你的麦克风。',uk:'Максе. Твій мікрофон.'}},
  3:{line:{es:'Tranquila. Lo silencié.',zh:'放松。我静音了。',uk:'Спокійно. Я його вимкнув.'}},
  4:{prompt:{es:'Avisa a Max de que todos lo oyen.',zh:'提醒马克斯所有人都听得到他说话。',uk:'Попередь Макса, що його всі чують.'},options:{es:['Estás en silencio.','Tu micrófono sigue encendido.','Tu cámara está apagada.'],zh:['你在静音。','你的麦克风还开着。','你的摄像头关着。'],uk:['У тебе вимкнений мікрофон.','Твій мікрофон усе ще ввімкнений.','У тебе вимкнена камера.']},note:{es:'Your mic is on significa que el micrófono está encendido. You’re on mute significa lo contrario: no se oye a la persona.',zh:'Your mic is on 表示麦克风开着。You’re on mute 正好相反，别人听不到你。',uk:'Your mic is on означає, що мікрофон увімкнений. You’re on mute означає протилежне: співрозмовника не чути.'}},
  5:{line:{es:'Entonces, ¿por qué el altavoz pequeño está tachado?',zh:'那为什么小喇叭上有一条斜线？',uk:'Тоді чому маленький динамік перекреслений?'}},
  6:{line:{es:'Silenciaste tus altavoces. Tú no nos oyes. Nosotros sí te oímos.',zh:'你关掉的是你自己的扬声器。你听不到我们。我们听得到你。',uk:'Ти вимкнув звук у себе. Ти нас не чуєш. А ми тебе чуємо.'}},
  7:{line:{es:'Oh, mierda. ¿Cuánto oyeron?',zh:'糟了。你们听到了多少？',uk:'Ой, чорт. І скільки ви почули?'}},
  8:{line:{es:'Tu audio se cortó un segundo.',zh:'你的声音断了一秒。',uk:'У тебе звук на секунду зник.'}},
  9:{prompt:{es:'Pregunta qué parte se perdieron por la conexión.',zh:'问问因为网络问题他们错过了哪一段。',uk:'Спитай, який шматок вони не почули через зв’язок.'},options:{es:['¿Entonces se acabó la reunión?','¿Por qué me bajaron el sueldo?','¿Qué segundo? Mi carrera depende de eso.'],zh:['所以会议结束了？','你们为什么给我降薪？','哪一秒？我的职业生涯就靠它了。'],uk:['Тобто дзвінок закінчився?','Навіщо ви урізали мені зарплату?','Яка саме секунда? Від цього залежить моя кар’єра.']},note:{es:'Your audio cut out significa que el sonido se cortó o desapareció. No significa que la reunión terminó ni que despidieron a alguien.',zh:'Your audio cut out 表示声音中断或消失，不表示会议结束，也不表示有人被解雇。',uk:'Your audio cut out означає, що звук зник або перервався. Це не означає, що зустріч закінчилася чи когось звільнили.'}},
  10:{line:{es:'Oímos “full of shit”. Luego te congelaste.',zh:'我们听到了“full of shit”。然后你卡住了。',uk:'Ми почули “full of shit”. Потім ти завис.'}},
  11:{line:{es:'Quizá hablaba de la hoja de cálculo.',zh:'也许我说的是电子表格。',uk:'Може, я мав на увазі таблицю.'}},
  12:{prompt:{es:'Explica por qué la frase sonó como un insulto.',zh:'解释为什么这句话听起来像侮辱。',uk:'Поясни, чому фраза прозвучала як образа.'},options:{es:['Dijiste que él estaba diciendo tonterías.','Dijiste que necesitaba ir al baño.','Dijiste que la hoja estaba llena.'],zh:['你说他在胡说八道。','你说他需要上厕所。','你说表格填满了。'],uk:['Ти сказав, що він несе маячню.','Ти сказав, що йому треба в туалет.','Ти сказав, що таблиця заповнена.']},note:{es:'He’s full of shit es una forma grosera de decir que alguien miente o habla basura. Full aquí no describe una tabla llena.',zh:'He’s full of shit 是粗鲁地说某人在撒谎或胡说。这里的 full 不是说表格“满了”。',uk:'He’s full of shit — грубе “він бреше / несе маячню”. Тут full не описує заповненість таблиці.'}},
  13:{line:{es:'Aparece un mensaje del jefe: “Max, ¿algún comentario?” Max vuelve a encender los altavoces.',zh:'经理发来消息：“Max，有什么反馈吗？”马克斯重新打开扬声器。',uk:'З’являється повідомлення керівника: “Максе, є відгуки?” Макс вмикає звук.'}},
  14:{line:{es:'Presentación brillante. Visionaria. Me cambió la vida.',zh:'精彩的演示。有远见。改变了我的人生。',uk:'Блискуча презентація. Візіонерська. Змінила моє життя.'}},
  15:{line:{es:'No tienes que lamerle el culo.',zh:'你没必要拍他马屁。',uk:'Не обов’язково підлизуватися.'}},
  16:{line:{es:'Estoy intentando conservar mi trabajo, Zoya.',zh:'我只是想保住工作，卓娅。',uk:'Я намагаюся зберегти роботу, Зоє.'}},
  17:{prompt:{es:'Ayuda a Max a dar una opinión útil sin hacer la pelota.',zh:'帮马克斯给出有用反馈，而不是拍马屁。',uk:'Допоможи Максу дати корисний відгук без підлабузництва.'},options:{es:['Cada diapositiva es perfecta. Sobre todo las doce.','Creo que podríamos hacer la presentación más corta.','Me encantaría lamerle el culo después de la reunión.'],zh:['每张幻灯片都完美。尤其是全部十二张。','我觉得我们可以把演示做短一点。','会后我很乐意继续拍您的马屁。'],uk:['Кожен слайд ідеальний. Особливо всі дванадцять.','Думаю, презентацію можна зробити коротшою.','Я б залюбки підлизався після дзвінка.']},note:{es:'Kiss someone’s ass y suck up son formas coloquiales y groseras de hablar de hacer la pelota. I think we could… permite sugerir una mejora concreta.',zh:'Kiss someone’s ass 和 suck up 都是口语里粗鲁地说“拍马屁”。I think we could… 可以提出具体改进。',uk:'Kiss someone’s ass і suck up — розмовні грубі вирази про підлабузництво. I think we could… дозволяє запропонувати конкретне покращення.'}},
  18:{line:{es:'El jefe responde: “Genial. Envíennos tu versión más corta antes del almuerzo.”',zh:'经理回复：“很好。午饭前把你的精简版发给我们。”',uk:'Керівник відповідає: “Чудово. Надішли скорочену версію до обіду.”'}},
  19:{line:{es:'Joder.',zh:'靠。',uk:'Чорт.'}},
  20:{line:{es:'Sigues en la llamada, Max.',zh:'马克斯，你还在通话里。',uk:'Ти все ще на дзвінку, Максе.'}},
  21:{line:{es:'Era mi comentario sobre el plazo.',zh:'那是我对截止日期的反馈。',uk:'Це був мій відгук щодо дедлайну.'}}
 }
});

addI18n('dad-dating',{
 story:{
  title:{es:'Papá en Tinder',zh:'爸爸上 Tinder',uk:'Батя в Tinder'},
  enTitle:{es:'Problemas de “daddy”',zh:'“Daddy”的问题',uk:'Daddy-проблеми'},
  subtitle:{es:'Padre con experiencia. Usuario sin experiencia.',zh:'经验丰富的父亲。毫无经验的用户。',uk:'Досвідчений батько. Недосвідчений користувач.'},
  place:{es:'Cocina, 20:36',zh:'厨房，20:36',uk:'Кухня, 20:36'},
  topic:{es:'Perfil y citas: daddy, seeing someone, casual, serious',zh:'约会资料：daddy、seeing someone、casual、serious',uk:'Анкета й знайомства: daddy, seeing someone, casual, serious'},
  ending:{es:'Papá quitó “daddy” de su perfil. Dejó “excelente con el taladro”. Algunos riesgos valían la pena.',zh:'爸爸把“daddy”从资料里删掉了。他留下了“很会用电钻”。有些风险值得冒。',uk:'Батя прибрав “daddy” з анкети. “Чудово вправляюся з дрилем” залишив. Деякі ризики були виправдані.'}
 },
 nodes:{
  0:{line:{es:'Papá, 52, está soltero y listo para probar apps de citas. Su hijo Lyosha, 23, ofrece revisar su perfil en inglés.',zh:'52岁的爸爸单身，准备尝试约会软件。23岁的儿子廖沙主动帮他检查英文资料。',uk:'Батя, 52, вільний і готовий спробувати додатки для знайомств. Його син Льоша, 23, пропонує перевірити англійську в анкеті.'}},
  1:{line:{es:'Daddy con experiencia busca pareja.',zh:'有经验的 daddy 寻找伴侣。',uk:'Досвідчений daddy шукає партнерку.'}},
  2:{line:{es:'Papá. ¿Por qué “daddy”?',zh:'爸。为什么写 daddy？',uk:'Тату. Чому “daddy”?'}},
  3:{line:{es:'Veintitrés años de experiencia. Tú eres mi referencia.',zh:'二十三年的经验。你就是我的推荐人。',uk:'Двадцять три роки досвіду. Ти моя рекомендація.'}},
  4:{prompt:{es:'Explica qué puede sugerir “daddy” en un perfil de citas.',zh:'解释在约会资料里 “daddy” 可能暗示什么。',uk:'Поясни, на що може натякати “daddy” в анкеті знайомств.'},options:{es:['Garantiza que quieres más hijos.','Solo significa que eres buen padre.','Aquí puede sonar sexual, no solo paternal.'],zh:['这保证你还想要孩子。','它只表示你是个好父亲。','这里听起来可能带有性暗示，不只是父亲。'],uk:['Це гарантує, що ти хочеш ще дітей.','Це означає тільки, що ти хороший батько.','Тут це може звучати сексуально, не лише по-батьківськи.']},note:{es:'Daddy significa papá o papito, pero en coqueteo puede ser una forma sexual de dirigirse a un hombre. El contexto del perfil cambia la impresión.',zh:'Daddy 可以是“爸爸/爹地”，但在调情语境里也可能是带性意味的称呼。资料的上下文会改变感觉。',uk:'Daddy означає “татко”, але у флірті може бути сексуальним звертанням до чоловіка. Контекст анкети змінює враження.'}},
  5:{line:{es:'Bien. “Padre soltero. Buen cocinero. Dientes propios.”',zh:'好吧。“单身父亲。会做饭。牙是自己的。”',uk:'Добре. “Самотній батько. Добре готую. Зуби свої.”'}},
  6:{line:{es:'Deja los dos primeros.',zh:'前两条留下。',uk:'Перші два пункти залиш.'}},
  7:{line:{es:'Una mujer llamada Helen, 49, le escribe: “Are you seeing anyone?”',zh:'一位名叫 Helen 的49岁女士发来消息：“Are you seeing anyone?”',uk:'Жінка на ім’я Helen, 49, пише йому: “Are you seeing anyone?”'}},
  8:{line:{es:'Sí. A mi hijo. Está aquí mismo.',zh:'有。我儿子。他就在这儿。',uk:'Так. Сина. Він прямо тут.'}},
  9:{prompt:{es:'Ayuda a Papá a responder sobre su situación sentimental.',zh:'帮爸爸回答她关于感情状态的问题。',uk:'Допоможи батькові відповісти на питання про його статус у стосунках.'},options:{es:['No, estoy soltero.','Sí, veo perfectamente.','Solo tú puedes ver mi perfil.'],zh:['没有，我单身。','是的，我视力很好。','只有你能看到我的资料。'],uk:['Ні, я вільний.','Так, із зором усе гаразд.','Тільки ти бачиш мою анкету.']},note:{es:'Are you seeing anyone? en una conversación de citas significa “¿estás saliendo con alguien?”. No es una prueba de vista.',zh:'Are you seeing anyone? 在约会话题里意思是“你在和谁交往吗？”，不是检查视力。',uk:'Are you seeing anyone? у розмові про знайомства означає “Ти з кимось зустрічаєшся?”. Це не перевірка зору.'}},
  10:{line:{es:'Dice que no busca nada casual. Tengo chaqueta.',zh:'她说她不想找 casual 的关系。我有夹克。',uk:'Вона пише, що не шукає нічого casual. У мене є піджак.'}},
  11:{line:{es:'No está preguntando por tu ropa.',zh:'她不是在问你的衣服。',uk:'Вона не про одяг питає.'}},
  12:{prompt:{es:'Di que tú también quieres una relación seria.',zh:'说你也想要认真关系。',uk:'Скажи, що ти теж хочеш серйозних стосунків.'},options:{es:['Nunca llevo vaqueros en una primera cita.','Yo también busco algo serio.','Me tomo mi chaqueta muy en serio.'],zh:['我第一次约会从不穿牛仔裤。','我也想找认真的关系。','我对我的夹克非常认真。'],uk:['Я ніколи не вдягаю джинси на перше побачення.','Я теж шукаю щось серйозне.','Я дуже серйозно ставлюся до свого піджака.']},note:{es:'Casual puede describir ropa informal, pero en citas habla de una relación sin compromiso serio. Looking for something serious significa buscar una relación seria.',zh:'Casual 可以指休闲服装，但在约会里通常指没有严肃承诺的关系。Looking for something serious 表示想找认真关系。',uk:'Casual може описувати повсякденний одяг, але в дейтингу це стосунки без серйозних зобов’язань. Looking for something serious — шукати серйозні стосунки.'}},
  13:{line:{es:'¿Puedo añadir que soy bueno en la cama?',zh:'我可以加一句我在床上很厉害吗？',uk:'Можна додати, що я хороший у ліжку?'}},
  14:{line:{es:'¿Vas a decirme que duermes ocho horas?',zh:'你是不是想说你能睡八小时？',uk:'Ти зараз скажеш, що спиш по вісім годин?'}},
  15:{line:{es:'Nueve. Y no robo la manta.',zh:'九小时。而且我不抢被子。',uk:'Дев’ять. І ковдру не забираю.'}},
  16:{line:{es:'Guardemos eso para la segunda cita.',zh:'这个留到第二次约会再说吧。',uk:'Давай залишимо це для другого побачення.'}},
  17:{line:{es:'Helen escribe: “¿Café el sábado?” Papá empieza a escribir sobre su pensión.',zh:'Helen 写道：“周六喝咖啡？”爸爸开始输入关于养老金的内容。',uk:'Helen пише: “Кава в суботу?” Батя починає друкувати про свою пенсію.'}},
  18:{prompt:{es:'Acepta la invitación y sugiere una hora.',zh:'接受邀请并提出时间。',uk:'Прийми запрошення й запропонуй час.'},options:{es:['Café suena bien. ¿Qué tal a las once?','Acepto sus términos y condiciones.','Hablemos primero de nuestra hipoteca conjunta.'],zh:['咖啡听起来不错。十一点怎么样？','我接受您的条款和条件。','我们先讨论共同房贷吧。'],uk:['Кава — чудово. Як щодо одинадцятої?','Я приймаю ваші умови користування.','Спершу обговорімо нашу спільну іпотеку.']},note:{es:'Sounds good es una aceptación natural. How about eleven? propone una hora sin sonar demasiado formal ni crear compromisos prematuros.',zh:'Sounds good 是自然的同意。How about eleven? 是提出时间，不会太正式，也不会过早承诺。',uk:'Sounds good — природна згода. How about eleven? — пропозиція часу без зайвої офіційності й передчасних зобов’язань.'}},
  19:{line:{es:'Listo. Me mandó un corazón.',zh:'好了。她发了一个爱心。',uk:'Готово. Вона надіслала сердечко.'}},
  20:{line:{es:'¿Ves? No necesitabas “daddy con experiencia”.',zh:'看吧？你不需要“有经验的 daddy”。',uk:'Бачиш? “Досвідчений daddy” не знадобився.'}},
  21:{line:{es:'Todavía no ha visto el taladro.',zh:'她还没见过电钻呢。',uk:'Вона ще дриль не бачила.'}}
 }
});

addI18n('size-isnt-the-point',{
 languages:{es:true},
 story:{
  title:{es:'El tamaño no es lo importante'},
  enTitle:{es:'El tamaño no es la cuestión'},
  subtitle:{es:'Él temía no estar a la altura. Ella quería que dejara de medir y empezara a escuchar.'},
  place:{es:'Dormitorio, 23:14'},
  topic:{es:'Intimidad y conversación: penetration, come, go down on, sixty-nine'},
  ending:{es:'Max dejó de compararse con normas imaginarias. Roxy dejó de esperar que él le leyera la mente. Encontraron lo que les daba placer a los dos y vivieron felices, ruidosos y sin regla.'}
 },
 nodes:{
  0:{line:{es:'Max, 28, y Roxy, 29, llevan seis meses juntos. Esta noche Max por fin confiesa lo que le preocupa.'}},
  1:{line:{es:'No dejo de pensar que tengo el pene demasiado pequeño.'}},
  2:{line:{es:'¿Demasiado pequeño para qué?'}},
  3:{line:{es:'Para hacer que te corras con la penetración.'}},
  4:{prompt:{es:'Responde con sinceridad sin culpar a Max ni a su cuerpo.'},options:{es:['Normalmente no me corro con la penetración. Se trata de lo que le gusta a mi cuerpo, no de tu tamaño.','Sí. Un hombre de verdad ya habría solucionado esto.','No volvamos a hablar de sexo nunca.']},note:{es:'Come from penetration significa correrse con la penetración. Hablar con sinceridad sobre las preferencias no convierte el cuerpo de la pareja en un problema.'}},
  5:{line:{es:'Podrías habérmelo dicho.'}},
  6:{line:{es:'Te lo estoy diciendo ahora. Me encanta cuando me haces un cunnilingus.'}},
  7:{line:{es:'¿Go down? ¿Debajo de la manta?'}},
  8:{prompt:{es:'Explica qué significa aquí “go down on someone”.'},options:{es:['Criticar a alguien en público.','Practicarle sexo oral a alguien.','Tumbarse y quedarse dormido.']},note:{es:'Go down on someone es una forma coloquial de decir “practicarle sexo oral a alguien”. El contexto íntimo determina el significado.'}},
  9:{line:{es:'Vale. Enséñame lo que te gusta y dime si no acierto.'}},
  10:{line:{es:'Trato hecho. Nada de leer la mente ni de evaluaciones de rendimiento.'}},
  11:{line:{es:'Un rato después, Max sale de debajo de la manta sorprendido y tremendamente satisfecho consigo mismo.'}},
  12:{line:{es:'Eso ha sido mucho mejor que intentar demostrar algo con el pene.'}},
  13:{line:{es:'Para mí también ha sido mucho mejor.'}},
  14:{prompt:{es:'Responde sin volver a convertir el momento en una competición de tamaños.'},options:{es:['Entonces, ¿al final soy más grande que tu ex?','Me alegro. A mí también me ha gustado más.','Puntúa cada parte de mi cuerpo del uno al diez, por favor.']},note:{es:'I liked it more too permite compartir el propio placer con naturalidad. More compara experiencias, no cuerpos.'}},
  15:{line:{es:'¿Quieres probar el sesenta y nueve algún día?'}},
  16:{line:{es:'¿A las 6:09? Muy concreto, pero estoy libre.'}},
  17:{prompt:{es:'Explica qué significa “sixty-nine” en esta conversación.'},options:{es:['Una postura en la que dos personas se practican sexo oral al mismo tiempo.','Una cita programada para el nueve de junio.','Una forma educada de terminar la noche.']},note:{es:'Sixty-nine es una postura sexual para darse placer oral mutuamente. Las 6:09 son la interpretación literal con la que bromea Max.'}},
  18:{line:{es:'Lo prueban después de hablar brevemente de rodillas, almohadas y señales de emergencia. Los dos empiezan a reírse y dejan de hacerlo muy pronto.'}},
  19:{line:{es:'Creo que esto me gusta más que la versión clásica.'}},
  20:{line:{es:'A mí también. Además, nadie está puntuando tu pene.'}},
  21:{line:{es:'Bien. Suspendió el examen escrito.'}},
  22:{line:{es:'Siguieron hablando, experimentando y eligiendo lo que les daba placer en vez de lo que supuestamente era “normal”. Estaban muy felices de haberse encontrado.'}}
 }
});

addPairNotes('hot-mic','es:ru',{
  4:'Tu micrófono sigue encendido — «твой микрофон всё ещё включён». Estás en silencio означает обратное: тебя не слышно.',
  9:'Tu audio se cortó означает, что звук пропал или прервался. Это не значит, что встреча закончилась или кому-то урезали зарплату.',
  17:'Lamerle el culo a alguien — грубое «лизать кому-то задницу», а hacer la pelota — разговорное «подлизываться». Creo que podríamos… позволяет предложить конкретное улучшение.'
});

addPairNotes('hot-mic','es:en',{
  4:'Your mic is on means the microphone is active. You’re on mute means the opposite: other people cannot hear you.',
  9:'Your audio cut out means the sound stopped or disappeared. It does not mean the meeting ended or anyone was fired.',
  12:'He’s full of shit is a rude way to say that someone is lying or talking nonsense. Full does not describe a full spreadsheet here.',
  17:'Kiss someone’s ass and suck up are rude, informal ways to describe excessive flattery. I think we could… introduces a specific improvement.'
});

addPairNotes('dad-dating','es:ru',{
  4:'Daddy значит «папочка», но во флирте может быть сексуальным обращением к мужчине. Контекст анкеты меняет впечатление.',
  9:'¿Estás saliendo con alguien? в разговоре о знакомствах означает «Ты с кем-нибудь встречаешься?». Это не вопрос о зрении.',
  12:'Casual может описывать повседневную одежду, а в дейтинге — отношения без серьёзных обязательств. Busco algo serio — «ищу серьёзные отношения».',
  18:'Suena bien — естественное согласие. ¿Qué tal a las once? предлагает время без лишней официальности и преждевременных обязательств.'
});

addPairNotes('size-isnt-the-point','es:ru',{
  4:'Correrse con la penetración — «кончить от проникновения». Честный разговор о предпочтениях не превращает тело партнёра в проблему.',
  8:'Practicarle sexo oral a alguien — «делать кому-то оральные ласки». Интимный контекст определяет значение.',
  14:'A mí también me ha gustado más — естественный способ сказать, что тебе тоже понравилось больше. Más сравнивает впечатления, а не тела.',
  17:'El sesenta y nueve — поза для взаимных оральных ласк. Las 6:09 — буквальная шутка Макса со временем.'
});
