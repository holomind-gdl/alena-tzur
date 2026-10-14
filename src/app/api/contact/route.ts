import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Некорректные данные" }, { status: 400 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

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

    // Отправка email через Resend
    const resend = getResendClient();
    if (resend) {
      await resend.emails.send({
        from: "Alena Tzur <onboarding@resend.dev>",
        to: "lenbiz@gmail.com",
        subject: `Новая заявка от ${escapeHtml(name)}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a;">Новая заявка с сайта Alena Tzur</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Имя:</td>
                <td style="padding: 8px 0; color: #666;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Телефон:</td>
                <td style="padding: 8px 0; color: #666;">${escapeHtml(phone || "Не указан")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Сообщение:</td>
                <td style="padding: 8px 0; color: #666;">${escapeHtml(message || "Не указано")}</td>
              </tr>
            </table>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">Отправлено с формы обратной связи на alena-tzur.com</p>
          </div>
        `,
      });
    } else {
      // Fallback: логирование в консоль (для разработки)
      console.log("Новая заявка:", { name, email, phone, message });
    }

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
