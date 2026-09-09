# Duo34

Взрослый языковой тренажёр с комедийными историями на английском: сленг, мат, флирт и контекст. Все персонажи совершеннолетние.

[Открыть приложение](https://de.hohohosting.ru/duo34/)

## Возможности

- Пять интерактивных историй и 20 выборов реплик внутри диалогов.
- Дорожка обложек, перевод по нажатию и сохранение места в каждой истории.
- Отдельная тренировка: 9 уроков, 72 задания, словарь и повторение ошибок.
- XP, серия дней и прогресс в `localStorage` (`duo34-v1`).
- Адаптивный интерфейс с нижним меню на телефоне.

Прогресс хранится только в текущем браузере. Серверной базы, аккаунтов, синхронизации и озвучки пока нет.

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
| `stories.js` | Персонажи и сценарии пяти историй |
| `story-ui.js` | Дорожка, диалоги, обложки и финалы |
| `story-engine.js` | Закладки историй, ответы и начисление XP |
| `course.js` | Словарь и задания тренировок |
| `engine.js` | Состояние тренировок и восстановление прогресса |
| `style.css` | Стили и мобильная раскладка |
| `test.mjs` | Проверки курса, историй, прогресса и миграции |
| `build.mjs` | Проверка полноты контента и сборка в `dist/` |

## Размещение

Содержимое `dist/` можно разместить на статическом HTTP-сервере, в том числе в подпапке. Продакшен обслуживается nginx по `/duo34/`, файлы лежат в `/var/www/duo34/releases/`, а ссылка `/var/www/duo34/current` указывает на текущий выпуск.

`deploy.py` и `deploy-v2.py` — исторические одноразовые скрипты выпуска с проверками конкретного состояния сервера и контрольных сумм. Это не универсальная команда деплоя; повторно запускать их для новых версий не нужно. Для следующего выпуска следует собрать и проверить новый каталог, затем переключить `current`, сохранив предыдущий выпуск для отката.

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
