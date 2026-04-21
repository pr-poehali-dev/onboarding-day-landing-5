import { useState } from "react";
import Icon from "@/components/ui/icon";

const timeline = [
  { time: "10:00", title: "Добро пожаловать", desc: "Знакомство с CEO и историей компании", icon: "Smile", color: "bg-blue-500" },
  { time: "10:30", title: "Тур по офису", desc: "Знакомство с командами и пространством", icon: "MapPin", color: "bg-indigo-500" },
  { time: "11:30", title: "Как мы работаем", desc: "Инструменты, процессы и культура компании", icon: "Settings2", color: "bg-violet-500" },
  { time: "13:00", title: "Обед", desc: "Нетворкинг за обедом — оплачивает компания", icon: "UtensilsCrossed", color: "bg-amber-500" },
  { time: "14:00", title: "Практика", desc: "Настройка рабочих инструментов и доступов", icon: "Laptop", color: "bg-teal-500" },
  { time: "15:00", title: "Q&A с основателями", desc: "Любые вопросы — отвечаем честно", icon: "MessageCircleQuestion", color: "bg-rose-500" },
  { time: "15:45", title: "Итоги и подарки", desc: "Подведение итогов дня и памятные подарки", icon: "Gift", color: "bg-orange-500" },
];

const faqs = [
  { q: "Нужно ли что-то готовить заранее?", a: "Нет, просто приходи — всё остальное мы организуем." },
  { q: "Можно ли прийти позже или уйти раньше?", a: "Постарайся присутствовать весь день — особенно важны утренний блок и Q&A." },
  { q: "Будет ли запись мероприятия?", a: "Часть материалов мы загрузим во внутреннюю базу знаний после события." },
  { q: "Дресс-код?", a: "Свободный. Главное — чувствуй себя комфортно." },
];

const checklist = [
  { icon: "Laptop", label: "Ноутбук с зарядкой" },
  { icon: "CreditCard", label: "Паспорт для пропуска" },
  { icon: "Star", label: "Хорошее настроение" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", dept: "", startDate: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[--bg] text-[--text]" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* CSS Variables */}
      <style>{`
        :root {
          --bg: #f5f6fa;
          --text: #1a1d2e;
          --muted: #6b7280;
          --accent: #2563eb;
          --accent-light: #eff6ff;
          --accent-dark: #1d4ed8;
          --card: #ffffff;
          --border: #e5e7eb;
          --hero-bg: #1a1d2e;
        }
        .font-display { font-family: 'Montserrat', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.2s; }
        .fade-up-3 { animation-delay: 0.3s; }
        .fade-up-4 { animation-delay: 0.4s; }
        .timeline-line {
          position: absolute;
          left: 23px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #2563eb22, #2563eb88, #2563eb22);
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: "var(--hero-bg)" }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #2563eb 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-white">
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Icon name="Users" size={14} />
            <span>Для новых сотрудников апреля и мая</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-900 leading-tight mb-4 fade-up fade-up-2">
            Onboarding<br />Day
          </h1>
          <p className="text-xl text-white/70 mb-8 fade-up fade-up-3 max-w-lg">
            День, который поможет тебе быстро влиться в команду, понять как мы работаем и познакомиться с коллегами.
          </p>
          <div className="flex flex-wrap gap-4 fade-up fade-up-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
              <Icon name="Calendar" size={18} className="text-blue-400" />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Дата</div>
                <div className="font-semibold">15 мая 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
              <Icon name="Clock" size={18} className="text-blue-400" />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Время</div>
                <div className="font-semibold">10:00 — 16:00</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
              <Icon name="MapPin" size={18} className="text-blue-400" />
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Место</div>
                <div className="font-semibold">Переговорная «Альфа», 3 этаж</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl font-bold mb-2">Программа дня</h2>
        <p className="text-[--muted] mb-10">7 блоков, которые превратят тебя из новичка в своего</p>

        <div className="relative pl-14">
          <div className="timeline-line" />
          <div className="flex flex-col gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div className={`absolute -left-14 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                  <Icon name={item.icon} size={20} className="text-white" fallback="Circle" />
                </div>
                {/* Card */}
                <div className="bg-[--card] border border-[--border] rounded-2xl px-5 py-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-[--accent] bg-[--accent-light] rounded-lg px-3 py-1 whitespace-nowrap mt-0.5">{item.time}</span>
                    <div>
                      <div className="font-semibold text-base">{item.title}</div>
                      <div className="text-sm text-[--muted] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Backpack" size={22} className="text-amber-600" />
            <h2 className="font-display text-xl font-bold text-amber-900">Что взять с собой</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-amber-200 rounded-xl px-4 py-2.5 text-amber-900 font-medium text-sm">
                <Icon name={item.icon} size={16} className="text-amber-500" fallback="Check" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-[--hero-bg] rounded-3xl p-8 md:p-10 text-white">
          <div className="mb-6">
            <h2 className="font-display text-3xl font-bold mb-1">Зарегистрируйся</h2>
            <p className="text-white/60">Займёт меньше минуты — чтобы мы знали, кого ждать</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <Icon name="Check" size={32} className="text-white" />
              </div>
              <div className="text-xl font-semibold">Отлично, {form.name}!</div>
              <div className="text-white/60 text-center">Ты зарегистрирован. Ждём тебя 15 мая в 10:00 в переговорной «Альфа».</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Имя и фамилия</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Иван Петров"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Отдел</label>
                  <input
                    required
                    value={form.dept}
                    onChange={e => setForm(f => ({ ...f, dept: e.target.value }))}
                    placeholder="Продукт, Маркетинг…"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Дата выхода на работу</label>
                <input
                  required
                  type="date"
                  value={form.startDate}
                  onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors [color-scheme:dark]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl px-6 py-3.5 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={16} />
                Зарегистрироваться
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display text-3xl font-bold mb-2">Вопросы и ответы</h2>
        <p className="text-[--muted] mb-8">Часто спрашивают перед первым Onboarding Day</p>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-[--card] border border-[--border] rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{item.q}</span>
                <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[--muted] shrink-0 ml-3" />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-[--muted] text-sm border-t border-[--border] pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[--card] border border-[--border] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[--accent-light] rounded-xl flex items-center justify-center">
              <Icon name="HeadphonesIcon" size={18} className="text-[--accent]" fallback="Phone" />
            </div>
            <div>
              <div className="font-semibold">Остались вопросы?</div>
              <div className="text-sm text-[--muted]">Пиши организаторам — ответим быстро</div>
            </div>
          </div>
          <a href="mailto:hr@company.ru" className="flex items-center gap-2 bg-[--accent] text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-[--accent-dark] transition-colors">
            <Icon name="Mail" size={14} />
            hr@company.ru
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[--border] py-6 text-center text-sm text-[--muted]">
        Onboarding Day · 15 мая 2026 · Переговорная «Альфа», 3 этаж
      </footer>

    </div>
  );
}