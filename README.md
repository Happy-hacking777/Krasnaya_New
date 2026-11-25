# Сайт Katya Krasnaya — как запустить и добавить картины

Это обычный сайт на HTML/CSS/JS, без сборки и без npm — открывается и работает "как есть".

## 1. Как открыть проект

1. Установи [Visual Studio Code](https://code.visualstudio.com/), если его ещё нет.
2. В VS Code: **File → Open Folder…** → выбери папку `katya-krasnaya-project` (эту).

## 2. Как посмотреть сайт

Проще всего — **два раза кликнуть на `index.html`**, он откроется в браузере, и сайт будет полностью рабочим (переходы между Art / Shop / About, страницы коллекций и картин — всё работает без сервера).

Если хочешь, чтобы страница сама обновлялась при каждом сохранении файла (удобно, когда правишь код):

1. В VS Code слева на панели расширений (иконка из квадратиков) найди **Live Server** (автор Ritwick Dey) и установи.
2. Правой кнопкой на `index.html` → **Open with Live Server**.

## 3. Как добавить свои картины (фото)

Все фотографии кладутся в папку `images/`, в определённые подпапки, **с определённым именем файла** (расширение — .jpg, .JPG, .jpeg или .png, без разницы, сайт сам подберёт нужное). Как только файл появится с правильным именем — фото сразу заменит собой цветную заглушку, ничего в коде трогать не нужно.

Ориентировочно 1200–2000 px по длинной стороне, файл весом до 1–2 МБ (для скорости загрузки сайта). Лишние файлы (например, если случайно осталась пробная копия вроде `cover1.jpg`) сайту не мешают — используется только файл с точным именем из списка ниже, остальное просто игнорируется.

### Art

**The Patina of Childhood** → `images/art/patina-of-childhood/` (15 картин)
- `cover.jpg` — обложка коллекции (= Baby Toy Horse Zina)
- `baby-toy-horse-zina.jpg` — 1. Baby Toy Horse Zina
- `baby-horse-emma.jpg` — 2. Baby Horse Emma
- `toys-friendship.jpg` — 3. Toys Friendship
- `baby-doll-horse-manu.jpg` — 4. Baby Doll Horse Manu
- `baby-dog-toy.jpg` — 5. Baby Dog Toy
- `zebra-girl-toy.jpg` — 6. Zebra Girl Toy
- `rabbit-tom.jpg` — 7. Rabbit Tom
- `rider-alice.jpg` — 8. Rider Alice
- `llama-mamma.jpg` — 9. Llama Mamma
- `bear-doll-i.jpg` — 10. Bear Doll I
- `bear-dolls-ii.jpg` — 11. Bear Dolls II
- `bear-dolls-iii.jpg` — 12. Bear Dolls III
- `bear-dolls-iv.jpg` — 13. Bear Dolls IV
- `bear-dolls-v.jpg` — 14. Bear Dolls V
- `bear-dolls-vi.jpg` — 15. Bear Dolls VI

**Dialogue with the Wall** (папка на диске всё ещё называется `back-to-the-world` — так уже загруженные фото не нужно никуда переносить) → `images/art/back-to-the-world/` (7 картин)
- `cover.jpg` — обложка коллекции (сейчас — Gala in white)
- `gala-in-white.jpg` — Gala in white (также первая картина в сетке, 150 × 55 cm)
- `girls-in-blue.jpg` — Girls in Blue (раньше Turned Away)
- `woman-in-pink-and-green.jpg` — Woman in Pink and Green (раньше The Wall)
- `boy-in-blue.jpg` — Boy in Blue (раньше Silence I)
- `man-in-green.jpg` — Man in Green (раньше Boundary)
- `man-in-yellow.jpg` — Man in Yellow (раньше Alone)
- `boy-in-purple.jpg` — Boy in Purple (раньше Reflection, объединена с Silence II)

Старые имена файлов (the-wall.jpg, silence-i.jpg, boundary.jpg, alone.jpg, reflection.jpg,
silence-ii.jpg, distance.jpg, turned-away.jpg) в коде больше не используются.

**In Between** → `images/art/in-between/` (5 картин)
- `cover.jpg` — обложка коллекции
- `study-i.jpg` — Study I
- `fragment.jpg` — Fragment
- `sketch-for-a-larger-work.jpg` — Sketch for a Larger Work
- `untitled.jpg` — Untitled
- `study-ii.jpg` — Study II

**House/Chaos** → `images/art/house-in-khaos/` (7 картин)
- `cover.jpg` — обложка коллекции (сейчас — копия Marginalia)
- `marginalia.jpg` — Marginalia
- `echo.jpg` — Echo
- `interlude.jpg` — Interlude
- `passage.jpg` — Passage
- `study-iii.jpg` — Study III
- `trace.jpg` — Trace
- `untitled-ii.jpg` — Untitled II

### Shop

**Prints** → `images/shop/prints/`
- `cover.jpg` — обложка раздела
- `horse-giclee-print-a3.jpg` — Horse — Giclée Print, A3
- `the-wall-giclee-print-a3.jpg` — The Wall — Giclée Print, A3
- `bear-giclee-print-a2.jpg` — Bear — Giclée Print, A2

**T-shirts** → `images/shop/t-shirts/`
- `cover.jpg` — обложка раздела
- `horse-tee.jpg` — Horse Tee
- `studio-tee.jpg` — Studio Tee
- `turned-away-tee.jpg` — Turned Away Tee

**Vintage** → `images/shop/vintage/`
- `cover.jpg` — обложка раздела
- `vintage-find-no-1.jpg` — Vintage Find No. 1
- `vintage-find-no-2.jpg` — Vintage Find No. 2
- `vintage-find-no-3.jpg` — Vintage Find No. 3

### About

**Портрет** → `images/about/portrait.jpg`

В каждой из этих папок уже лежит файл `_список файлов.txt` с этим же списком — на случай, если это README потеряется.

Если фото ещё нет — на его месте просто останется цветная заглушка, сайт от этого не сломается. Добавлять фото можно по одному, в любом порядке.

## 4. Как добавить короткое описание под картиной или товаром

Открой `js/main.js`, найди нужную работу в массиве `COLLECTIONS` (для картин) или `SHOP` (для товаров) и добавь поле `note` с текстом, например:

```js
{title:'Bear', size:'60 × 50 cm', year:'2024', price:'€950', palette:'pal-c', note:'Здесь можно написать пару предложений об этой работе.'}
```

Описание появится на странице этой конкретной картины, под ценой.

Если захочешь указать технику и место создания прямо в строке с размером и годом (мелким шрифтом, как у «120 × 90 cm · Oil on canvas · Lissbon, 2026») — добавь в ту же запись поля `medium` (техника, например `'Oil on canvas'`) и/или `location` (город, например `'Lissbon'`) — они подставятся в ту же строчку, где сейчас размер и год, без отдельного абзаца ниже. Поле `note` остаётся для отдельного абзаца-описания под ними (как у Horse I) — используй их вместе или по отдельности, как нужно. Пример:

```js
{title:'Gala in white', size:'120 × 90 cm', medium:'Oil on canvas', location:'Lissbon', year:'2026', price:'€6,700', palette:'pal-a'}
```

## 5. Как добавить новую коллекцию или раздел Shop

В `js/main.js` скопируй один из существующих блоков внутри `COLLECTIONS` (для Art) или `SHOP` (для Shop), вставь его в конец массива и поменяй текст, `slug` (латиницей, через дефис, без пробелов) и список работ. Новая коллекция/раздел появится на сайте автоматически — больше ничего менять не нужно.

## 6. Структура проекта

```
katya-krasnaya-project/
├── index.html         — главный файл сайта
├── css/style.css       — все стили (цвета, шрифты, отступы)
├── js/main.js          — весь текст сайта и логика (тут же добавляются фото и описания)
├── images/             — все фотографии, по папкам (см. пункт 3)
└── README.md           — этот файл
```

## 7. Что дальше

Логотип, шрифты, цвета и структура (Art / Shop / About) — по нашим договорённостям. Тексты в `js/main.js` для коллекций "The Patina of Childhood" и "Back to the World" — финальные; описание "In Between" и все тексты Shop — черновики, их стоит заменить на свои (помечены как "draft" / "draft note" в коде).

Когда сайт будет готов к реальной публикации в интернете — можно спросить об этом отдельно (варианта два: простой хостинг статических сайтов вроде Netlify/Vercel/GitHub Pages, либо no-code конструктор вроде Framer, если захочется больше визуального редактирования без кода).
