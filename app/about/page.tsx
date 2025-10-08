import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <LpNavbar1 />
      
      <div className="bg-secondary min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              О нас
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              История создания GC Education и путь основателя к профориентации
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Приветствие */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Приветствую всех!</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Меня зовут — Айдар Айдралиев, я основатель GC Education. Более 7 лет я работаю в сфере профориентации, за это время я имел честь работать с выпускниками топовых школ, как НИШ и РФМШ в качестве School Counselor.
              </p>
              <div className="bg-background border rounded-lg p-4 mt-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Моя миссия:</h3>
                <p className="text-muted-foreground">
                  Обеспечить качественной профориентацией всех школьников Казахстана. Именно поэтому я являюсь Президентом Ассоциации Профориентаторов Казахстана.
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Осознавая всю ответственность работы, наша команда GC предлагает самую качественную подготовку для вас!
              </p>
            </section>

            {/* 2011 год - Начало пути */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">2011 год — Начало пути</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                В 2011 году я поступил в КазУМО и МЯ имени Абылай Хана на специальность "2 иностранных языка", на момент поступления я даже не осознавал, что данная специальность является педагогической. Кстати, в будущем это тоже повлияет на мою миссию, потому что с проблемой неосознанного выбора специальности сталкиваются более 80% выпускников.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Меня не очень привлекало то, что я учусь на пед факе, однако, по чистой случайности на 1 курсе начинаю работать с детьми в детском лагере, где я понял, что работа с детьми приносит мне невероятное удовольствие, так на протяжении 7 лет я работал в летних детских лагерях на разных позициях — от вожатого до координатора.
              </p>
            </section>

            {/* 2015 год - НИШ Петропавловск */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">2015 год — НИШ Петропавловск</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                В 2015 году меня приглашают работать в Назарбаев Интеллектуальную Школу г.Петропавловск на позицию куратора, то есть я был классным руководителем для двух классов. Это был интересный и самый незабываемый опыт, так как ты становишься одновременно отцом, братом и даже мамой для 48 учеников.
              </p>
              
              <div className="mb-6">
                <Image
                  src="/NIS.png"
                  alt="НИШ ХБН Петропавловск"
                  width={800}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-muted-foreground text-sm mt-2 text-center">НИШ ХБН Петропавловск</p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Чуть позже меня заинтересовала должность консультанта по профессиональной ориентации, а именно масштаб этой работы: обучение, профессии, университеты, разные эксперты, предприятия и путешествия по миру, ну и самое главное — ответственность, которая сопутствовала этой работе, я был очень воодушевлен этой работой и вот уже более 8 лет занимаюсь любимым делом.
              </p>
            </section>

            {/* 2019 год - РФМШ Алматы */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">2019 год — РФМШ Алматы</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                В 2019 году я вернулся в любимый город Алматы и приступил к работе на позиции School Counselor (профориентатор) в Республиканской физико-математической школе г Алматы. Здесь я столкнулся с новым челленджем — ученики РФМШ были более амбициозны, они ставили перед собой цели поступать в самые лучшие вузы мира и плюс количество поступающих в год было в среднем по 60+ человек.
              </p>

              <div className="mb-6">
                <Image
                  src="/RFMSH.png"
                  alt="РФМШ г. Алматы"
                  width={800}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
                <p className="text-muted-foreground text-sm mt-2 text-center">РФМШ г. Алматы</p>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Задача была не простая, но тут мне помогли очень опытные коллеги у которых я перенимал все тонкости и весь их личный опыт в вопросах подготовки к поступлению в топовые вуза мира. Моими учителями были Габит Бекахметов, выпускник Duke University, на тот момент председатель правления РФМШ, писатель, основатель школ Quantum, Prospective School и Urban Schools, человек, который первый начал готовить к SAT и к поступлению в США в Казахстане. Другим учителем был Шерхан, на тот момент мой коллега из РФМШ г. Астана, выпускник Wisconsin-Madison University, его ученики стабильно поступали в вузы Лиги Плюща.
              </p>
            </section>

            {/* Наставники и достижения */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Наставники и достижения</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Image
                    src="/prof_asosiation_1.png"
                    alt="Ассоциация профориентаторов"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Ассоциация профориентаторов</p>
                </div>
                <div>
                  <Image
                    src="/prof_asosiation_2.png"
                    alt="Ассоциация профориентаторов"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Ассоциация профориентаторов</p>
                </div>
                <div>
                  <Image
                    src="/qadam.png"
                    alt="Qadam"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Qadam</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Но самыми главными моими наставниками стали ученики! За 3 года работы в РФИШ я познакомился с огромным количеством талантливых, целеустремленных и разносторонних школьников, что у меня не было другого выбора, кроме того, как учиться у них и вместе с ними.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Я просмотрел сотни заявок, эссе и написал сотни рекомендательных писем и все это помогло мне составить стратегию по которой мои выпускники начали поступать в самые топовые вуза мира, такие как: <span className="text-primary font-semibold">Stanford, NYU, Berkeley, KAIST, RIT, Richmond, Minerva, UBC, UofT</span> и многие другие вузы США, Европы и Азии из категории ТОП 100 лучших вузов мира.
              </p>
            </section>

            {/* Развитие в Career Counseling */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Развитие в Career Counseling</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                В это же время, я решил углубиться в Career Counseling, так как заметил, что многие ученики не понимали своих сильных сторон, качеств и затруднялись с выбором будущей профессии. В то время как четкое целеполагание и осознанность является одними из ключевых факторов для поступления в лучшие вузы мира.
              </p>
            </section>

            {/* Летние лагеря */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Летние лагеря</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Отучившись в Школе Карьерного Менеджмента, по программе "Профориентатор Будущего" я решил сразу же применить полученные знания. Таким образом лучшей идеей стало — проведение профориентационной смены у своих старых друзей в лагере Балаленд.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Image
                    src="/turk_summer_1.png"
                    alt="Summer camp Turkey"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Summer camp Turkey</p>
                </div>
                <div>
                  <Image
                    src="/turk_summer_2.png"
                    alt="Summer camp Turkey"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Summer camp Turkey</p>
                </div>
                <div>
                  <Image
                    src="/almaty_summer.png"
                    alt="Summer camp Almaty"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Summer camp Almaty</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Я собрал 30 подростков с разных школ г. Алматы, где помимо лекции и приглашенных спикеров по карьере и поступлению, мне посчастливилось провести индивидуальные консультации с каждым из подростков. Во время проведения интервью с подростками, я начал обращать внимание на то, что практически каждый третий участник имеет внутренние психологические барьеры, которые останавливают его в достижении своих целей.
              </p>
            </section>

            {/* Программа GameChangers */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Программа GameChangers</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Сразу после лагеря я и мой партнер Акмарал, выпускница Berkeley и энтузиаст в сфере образования решили создать образовательную программу <span className="text-primary font-semibold">"GameChangers"</span>, которая состояла из 9 модулей и длительностью в 9 месяцев, самой главной задачей данной программы было — обучение школьников востребованным Soft & Hard Skills, проектная деятельность и приобретение уверенности.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Image
                    src="/gmchrs1.png"
                    alt="Сообщество gamechangers"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Сообщество GameChangers</p>
                </div>
                <div>
                  <Image
                    src="/incubator_qadam.png"
                    alt="Бизнес инкубатор QAdam"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Бизнес инкубатор QAdam</p>
                </div>
                <div>
                  <Image
                    src="/gmchrs2.png"
                    alt="Сообщество gamechangers"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-muted-foreground text-sm mt-2 text-center">Сообщество GameChangers</p>
                </div>
              </div>
            </section>

            {/* Ассоциация профориентаторов */}
            <section className="bg-muted/80 rounded-xl p-8 border shadow-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ассоциация профориентаторов</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Все больше углубляясь в тему профориентации, мой опыт привел меня к Ассоциации Профориентаторов Казахстана, которую мы создали совместно с Назарбаев Университетом. В ней мы работаем над улучшением этой сферы в стране. Мы были одними из инициаторов введения должности Педагога-профориентатора во всех школах страны, на данный момент обучили более <span className="text-primary font-semibold">200 профориентаторов</span>, и нам доверились такие школы как: <span className="text-primary font-semibold">НИШ, Quantum, Riviera, Бином, Shoqan</span> и многие другие.
              </p>
            </section>

            {/* Создание GC Education */}
            <section className="bg-background border rounded-xl p-8 shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <h2 className="text-3xl font-bold text-foreground mb-6">Создание GC Education</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Пройдя долгий путь, я решил, что необходимо централизовать весь свой опыт и знания в одном месте. И так появилось образовательное агентство <span className="text-primary font-semibold">GC Education</span>. Я не хотел отходить от своей цели делать из подростков будущих новаторов и поэтому в нашем названии заложена аббревиатура от <span className="text-primary font-semibold">"GameChangers"</span> — те кто меняет правила игры.
              </p>
              <div className="bg-muted/80 rounded-lg p-6 border">
                <p className="text-foreground text-xl font-semibold">
                  Я верю, что в каждом ребенке есть потенциал и таланты, которые рвутся в этот мир! И наша задача — помочь раскрыться каждому ученику нашей программы и найти свой путь к успеху!
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer1 />
    </main>
  );
}