import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Валидация
    if (!name || !email) {
      return NextResponse.json(
        { error: "Имя и email обязательны" },
        { status: 400 }
      );
    }

    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Некорректный email" },
        { status: 400 }
      );
    }

    // Валидация телефона (израильский формат: +972-XX-XXX-XXXX или 0XX-XXX-XXXX)
    if (phone) {
      const phoneRegex = /^(\+972|0)([2-9])(\d{7,8})$/;
      const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        return NextResponse.json(
          { error: "Некорректный номер телефона. Используйте формат +972-XX-XXX-XXXX" },
          { status: 400 }
        );
      }
    }

    // Валидация сообщения (если заполнено - не более 2000 символов)
    if (message && message.length > 2000) {
      return NextResponse.json(
        { error: "Сообщение слишком длинное (максимум 2000 символов)" },
        { status: 400 }
      );
    }

    // Здесь будет интеграция с email-сервисом (Resend, SendGrid, Nodemailer и т.д.)
    // Пока логируем в консоль для разработки
    console.log("Новая заявка:", { name, email, phone, message });

    // Имитация задержки отправки
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: "Заявка принята" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка обработки формы:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}