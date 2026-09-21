# Duo34

Взрослый языковой тренажёр с комедийными историями на английском: сленг, мат, флирт и контекст. Все персонажи совершеннолетние.

[Открыть приложение](https://anatolt.ru/t/duo34/)

## Возможности

- Девять интерактивных историй и 36 выборов реплик внутри диалогов.
- Дорожка обложек, перевод по нажатию и сохранение места в каждой истории.
- Отдельная тренировка: 9 уроков, 72 задания, словарь и повторение ошибок.
- XP, серия дней и прогресс в `localStorage` (`duo34-v1`).
- Адаптивный интерфейс с нижним меню на телефоне.

Прогресс хранится только в текущем браузере. Серверной базы, аккаунтов, синхронизации пока нет. Английский, русский и японский доступны во всех девяти историях; испанский — в трёх, китайский и украинский — в двух. Язык истории, перевода, интерфейса и педагогических подсказок выбирается независимо. Для каждой роли используется только явно заданная локализация: подмена текстом другого языка запрещена. Названия языков выводятся текстом, без флагов.

Английская и новая японская озвучка созданы локальным Piper. Японская дорожка содержит 185 реплик и описаний сцен для всех девяти историй и использует два голоса модели `ja_JA-hi_fi_captain-medium`. Остальная русская, испанская, китайская и украинская озвучка сочетает прежние записи OpenAI TTS и Piper. У персонажей и рассказчика постоянный голос внутри истории.

## Локальный запуск

Нужны Node.js 18+ и Python 3 для примера локального сервера. Внешних npm-зависимостей нет.

```sh
npm test
npm run build
python3 -m http.server 8000 --directory dist
```

Открыть <http://localhost:8000>. Приложение использует ES-модули, поэтому открывать `index.html` напрямую через `file://` не следует.

## Исходники

| Файл | Назначение |
| --- | --- |
| `app.js` | Навигация, тренировки и сохранение состояния |
| `stories.js` | Персонажи и порядок девяти историй |
| `story-languages.js` | Каталог языков, строгая проверка доступности и выбор локализованного текста |
| `story-content-locales.js` | Явные английские, русские и японские локализации историй |
| `story-content-ja.generated.js` | Полный японский текст девяти историй |
| `story-ui.js` | Дорожка, диалоги, обложки и финалы |
| `story-engine.js` | Закладки историй, ответы и начисление XP |
| `course.js` | Словарь и задания тренировок |
| `engine.js` | Состояние тренировок и восстановление прогресса |
| `style.css` | Стили и мобильная раскладка |
| `test.mjs` | Проверки курса, историй, прогресса и миграции |
| `build.mjs` | Проверка полноты контента и сборка в `dist/` |

## Размещение

Содержимое `dist/` можно разместить на статическом HTTP-сервере, в том числе в подпапке. Продакшен обслуживается nginx по `/t/duo34/`; публичные файлы лежат на `new` в `/home/tolik/web/anatolt.ru/public_html/t/duo34`, а откатные копии — вне document root в `/home/tolik/web/anatolt.ru/private/duo34-analytics/archive`.

`deploy.py` и `deploy-v2.py` — исторические одноразовые скрипты выпуска с проверками конкретного состояния сервера и контрольных сумм. Это не универсальная команда деплоя; повторно запускать их для новых версий не нужно. Для следующего выпуска следует собрать и проверить новый каталог, сохранить предыдущий выпуск для отката и заменять проверенные файлы атомарно.

Push в GitHub сам по себе не обновляет сайт. Автодеплой не настроен.

## Analytics (2026-09-09)

Production is https://anatolt.ru/t/duo34/. The GitHub baseline was behind the
live deployment; commit c6023dd preserves the deployed 2391a45 JavaScript/content.
The current release retains the existing audio files unchanged.

`analytics.js` stores an anonymous browser UUID, pending events and attempt IDs
under `duo34-analytics-v1`. Starts/finishes cover training lessons and stories;
error review is excluded. Existing completed IDs are imported once as legacy
progress with no invented completion date. Delivery retries on reconnect and
while the page remains open. Clearing browser storage or switching browsers
creates a different identity. Counts describe browsers, not identifiable people.

`analytics.php` accepts validated bounded JSON POST batches. The private PHP
helper serializes writes using per-browser file locks and atomic replacement;
attempt IDs deduplicate repeated completions. No IP, name, user agent or answer
text is stored by analytics. Ordinary web-server access logs are independent.
`stats.php` is HTTP Basic protected (username `admin`); the password hash and data
live outside the document root in
`/home/tolik/web/anatolt.ru/private/duo34-analytics` on `new`.
Credentials are in the ignored local `.analytics-access.txt`, never in Git.

The dashboard includes all-time counts and per-browser unique completed lessons
and stories. The completion percentage uses matched started/finished attempts;
legacy completions are separate. Analytics is best-effort: closed offline pages,
blocked requests or cleared storage may lose unsent events.

Deploy only with an approved registry plan. `ops/deploy-analytics.py` is a guarded
one-time migration from the reviewed baseline and preserves its backup. It adds
exact PHP-FPM routes, enforces HTTPS for Duo34, then uploads only analytics files
and app.js. For subsequent releases inspect current state first. `npm run build`
builds the browser/PHP public files; deploy `server/common.php` and catalog to the
private directory separately. Existing `deploy*.py` scripts target legacy de
hosting and must not be used for the new production host.

## Истории от 10 сентября 2026

Первыми идут «Микрофон, сука», «Батя в Тиндере» и «Верни худи и определись».
Тексты, переводы и четыре выбора на историю находятся в `stories-new.js`.
Новая графика не генерировалась; используются существующие портреты персонажей.
`python3 ops/generate-story-audio.py` восстанавливает проверенные старые MP3 с production
и генерирует отсутствующие новые реплики через прежний Piper на `de` с прежними голосами.
До запуска зарегистрируйте write-intents для локального `audio/` и удалённого
`/root/duo34-voice-20260906/generated`. Сборка проверяет тексты и SHA-256 всех
аудиофайлов и включает их в `dist/audio/`.

## Рассказчик (11 сентября 2026)

Все английские описания сцен озвучены отдельным голосом Piper `p230`.
Русская и японская озвучка доступны для всех девяти историй; новая русская история и вся японская дорожка используют Piper,
а прежние восемь — OpenAI TTS. Испанская озвучка доступна для трёх историй
(две OpenAI TTS и одна Piper), китайская и украинская — для первых двух.
Они участвуют в автоозвучке; кнопка динамика позволяет повторить уже открытое
описание или реплику даже при выключенной автоозвучке. Интерфейс явно сообщает,
что голоса созданы ИИ.

## Прямые ссылки на истории

Старый адрес `#/story/<id>` остаётся рабочим. Каноническая shareable-ссылка
содержит историю, язык чтения и язык перевода:
`#/story/<id>/<source>/<target>`, например `#/story/dad-dating/ru/en`. Карточки
и переход к следующей истории — обычные ссылки: их можно копировать и открывать
в новой вкладке. Query-параметры перед hash, включая `?release=...`, сохраняются.
Для нового читателя пара по умолчанию — русский → английский (`ru/en`). Выбор
языков чтения и перевода сохраняется в браузере и отражается в адресе также на
странице каталога. Прежние сохранённые пары сохраняются; языки интерфейса и
пояснений задаются отдельно. Явная пара в ссылке имеет приоритет.
Смена языков внутри истории обновляет hash, не сбрасывая закладку. Заголовок вкладки содержит название истории. Прямое открытие
и обновление страницы восстанавливают закладку из этого браузера; после подтверждения
18+ открывается история из адреса. «Назад» и «Вперёд» меняют историю/раздел,
а шаги диалога не добавляют записей в историю браузера. Неизвестные адреса
и одинаковые, неизвестные или недоступные для истории языковые пары возвращают
к списку историй. Настройки сервера для hash-навигации не нужны.
