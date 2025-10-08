"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Ответы на часто задаваемые вопросы
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Мы собрали самую важную информацию, чтобы помочь вам получить максимум от платформы менторства. Не нашли ответ на свой вопрос?{" "}
              <Link href="#" className="text-primary underline">
                Свяжитесь с нами.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Общие вопросы
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Как найти подходящего ментора?
                  </AccordionTrigger>
                  <AccordionContent>
                    Используйте фильтры поиска по специализации, опыту, рейтингу и стоимости. Изучите профили менторов, их достижения и отзывы студентов. Вы можете забронировать пробную сессию, чтобы понять, подходит ли вам стиль работы ментора.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Как проходят онлайн-сессии с ментором?
                  </AccordionTrigger>
                  <AccordionContent>
                    Сессии проводятся через встроенную систему видеозвонков или внешние платформы (Zoom, Google Meet). Длительность сессии обычно составляет 60 минут. Ментор поможет вам с учебными вопросами, карьерным планированием или развитием навыков в зависимости от ваших целей.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Можно ли поменять ментора?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, вы можете сменить ментора в любое время. Если текущий ментор не подходит вашему стилю обучения или целям, просто найдите нового через поиск. Неиспользованные сессии с предыдущим ментором можно использовать с новым.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Какие гарантии качества менторства?
                  </AccordionTrigger>
                  <AccordionContent>
                    Все менторы проходят тщательную проверку квалификации и опыта. Мы отслеживаем рейтинги и отзывы студентов. Если вы не удовлетворены качеством сессии, мы предоставим компенсацию или бесплатную дополнительную сессию с другим ментором.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Оплата и тарифы
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    Сколько стоят сессии с ментором?
                  </AccordionTrigger>
                  <AccordionContent>
                    Стоимость варьируется от 5,000 до 25,000 тенге за сессию в зависимости от опыта и специализации ментора. Студенты могут выбрать пакеты сессий со скидкой или оплачивать каждую сессию отдельно. Первая консультация часто предоставляется со скидкой.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Какие способы оплаты доступны?
                  </AccordionTrigger>
                  <AccordionContent>
                    Мы принимаем банковские карты (Visa, Mastercard), Kaspi Pay, банковские переводы и электронные кошельки. Все платежи обрабатываются безопасно через защищенные платежные системы. Для корпоративных клиентов доступна оплата по счету.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    Можно ли отменить или перенести сессию?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, вы можете отменить или перенести сессию за 24 часа до начала без штрафов. При отмене менее чем за 24 часа взимается 50% стоимости. Ментор также может перенести сессию по уважительной причине с полным возвратом средств.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    Как отслеживать свой прогресс?
                  </AccordionTrigger>
                  <AccordionContent>
                    В личном кабинете вы можете видеть историю сессий, заметки ментора, поставленные цели и их выполнение. Система автоматически отслеживает ваши достижения и показывает статистику развития навыков. Ментор также предоставляет регулярную обратную связь о вашем прогрессе.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
