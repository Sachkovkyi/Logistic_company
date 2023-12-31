const text = `Вікіпедія почалась як братній проєкт до Нупедії, безкоштовної англомовної онлайн-енциклопедії, статті в яку писали спеціалісти, потім статті проходили процес формальної перевірки. Нупедія заснована 9 березня 2000 року і була власністю Bomis, Inc, компанії, що володіла також однойменним вебпорталом. Головними фігурами були Джиммі Вейлз, головний виконавчий директор Bomis, та Ларрі Сенґер, головний редактор Нупедії та згодом Вікіпедії. Нупедія спочатку публікувалась під власною ліцензією відкритого контенту, а потім перейшла на GNU Free Documentation License перед заснуванням Вікіпедії за наполяганням Річарда Столмена[11].
Головна сторінка Англійської Вікіпедії станом на 30 березня 2001 року.

Заснували Вікіпедію Джиммі Вейлз і Ларрі Сенґер.[1][12][13] Вейлзу приписують визначення напрямку вільно редагованої енциклопедії,[14][15] а Сенґеру зазвичай приписують створення стратегії використання вікі для досягнення цієї мети.[16] 10 січня 2001 року Ларрі Сенґер запропонував у списку розсилки Нупедії створити вікі, як підготовчий проєкт для Нупедії.[17] Вікіпедія була формально запущена 15 січня 2001 року як один англомовний розділ на сайті www.wikipedia.com,[18] про відкриття оголосили в списку розсилки Нупедії.[14] Політика Вікіпедії про «нейтральну точку зору»[19] сформувалася в перші місяці, вона була схожа на політику „неупередженості“ Нупедії. Щодо іншого, то спочатку було відносно небагато правил і Вікіпедія функціонувала незалежно від Нупедії.[14]

Вікіпедія здобула своїх ранніх учасників від Нупедії, завдяки статтям на Slashdot та індексуванням пошуковими машинами. Вона виросла до 20000 статей і 18 мовних розділів до кінця 2001 року. На кінець 2002 року вона досягла 26 мовних розділів, 46 — на кінець 2003 і 161 мовний розділ був на останні дні 2004 року.[20] Нупедія і Вікіпедія співіснували поки колишні сервери не були відключені назавжди в 2003, а тексти були інкорпоровані у Вікіпедію. Англійська Вікіпедія минула двохмільйонну позначку 9 вересня 2007 року, так вона стала найбільшою енциклопедією, що коли-не-будь існувала і перевершила навіть енциклопедію Юнле, яка тримала рекорд рівно 600 років.[21]

Посилаючись на страх комерційної реклами та відсутність контролю у відчутному англоцентризмі Вікіпедії, користувачі іспанської Вікіпедії відокремились від Вікіпедії та створили Enciclopedia Libre в лютому 2002 року.[22] Пізніше цього року Вейлз оголосив, що Вікіпедія не буде розміщувати рекламу, а вебсайт змінив адресу на wikipedia.org.[23] Також було розпочато багато інших проєктів вікі-енциклопедій, які відрізняються філософією від відкритої та НТЗ редакційної моделі Вікіпедії. Wikinfo не вимагає нейтральної точки зору і дозволяє оригінальні дослідження. Нові проєкти на зразок Вікіпедії, такі як Citizendium, Scholarpedia, Conservapedia, а також Google's Knol, у якому статті носять більш творчий характер,[24] — було розпочато у відповідь на відчутні обмеження Вікіпедії, такі як політика щодо рецензування, оригінальних досліджень і комерційної реклами.
Динаміка росту 8 найбільших вікіпедій у період 2001—2010 роки

Проєкт набув популярності серед користувачів Мережі, і пізніше з'явилися розділи Вікіпедії іншими мовами (Див. також Wikipedia— багатомовний портал, який містить посилання на розділи Вікіпедії всіма мовами), з українською включно. (Див. Історія української вікіпедії.)

Англомовний розділ є найбільшим за обсягом у Вікіпедії, і однією з найбільших енциклопедій узагалі. До 9 вересня 2007 року титул найбільшої енциклопедії 600 років належав Енциклопедії Юнле. Станом на грудень 2007 року він містив понад 2 млн статей, а в березні 2010 вже більше 3,2 млн. З 15 червня 2013 року другим за розміром є нідерландський розділ з понад півтора мільйона статей, обігнавши завдяки використанню ботів німецьку Вікіпедію (що у свою чергу була другою протягом 12 років). Усього ж є 321 розділів Вікіпедії різними мовами, хоча тільки 47 містять понад 200 000 статей на 12 травня 2021 року, серед яких і український, який має 1 275 990 статей. `


const hash = {

}

for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    hash[char] ? hash[char]++ : hash[char] = 1;

}

console.log(hash);

const getNumber = (max, min = 0) => Math.floor((Math.random() * max) - min);

let cnt = 100;
let numbers = [];
while (cnt--) {
    numbers.push(getNumber(100));
}

console.log(numbers);