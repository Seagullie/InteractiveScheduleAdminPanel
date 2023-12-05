# InteractiveScheduleAdminPanel

Адміністративна панель для редагування студентських розкладів. Цей проект тісно пов'язаний зі / залежить від [API сервера зі розкладами](https://github.com/bind-w-exit/InteractiveScheduleUad).

Використано react-admin, фреймворк для створення адмін. панелей. Загалом, завдяки цьому зручному фреймворку, проект не зайняв багато часу.

## Запуск проекту

Для запуску проекту необхідно заповнити файл `src/Secrets.ts `відповідно до `src/Secrets.example.ts`
Потім виконайте

```
npm run install
npm run dev
```

Крім того, сервер API повинен бути запущений із заповненою БД. Напевно, це найбільша складність для тих, хто просто хоче поглянути на проект :c

## Структура

Структура проекту є типовою. Ось лише деякі речі в директорії `src`:

- `src/Resources`. Кожен ресурс відповідає окремому ресурсу API і містить react елементи списоку, редагування, створення та відображення для маніпуляції та перегляду даних.
- `src/Providers`. У цій папці знаходяться файли, які додають до аплікації можливості автентифікації, i18n та комунікації через API.

## Скріншоти

Скріншоти

## Посилання

React Admin Framework. Документація

[https://marmelab.com/react-admin/documentation.html](https://marmelab.com/react-admin/documentation.html)

API сервер зі розкладами

[https://github.com/bind-w-exit/InteractiveScheduleUad](https://github.com/bind-w-exit/InteractiveScheduleUad)

Клієнт для API сервера зі розкладами

[https://github.com/Seagullie/schedule-server-api-client](https://github.com/Seagullie/schedule-server-api-client)

Переглядач розкладів (мобільний застосунок та веб-сайт)

[https://github.com/Seagullie/InteractiveScheduleUAD](https://github.com/Seagullie/InteractiveScheduleUAD)
