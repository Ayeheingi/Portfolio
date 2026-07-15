import Image from "next/image";
import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  {
    number: "01", title: "Kanji Sakura", type: "漢字学習アプリ",
    description: "Next.js と TypeScript を使用して開発している漢字学習アプリです。漢字の意味や読み方を学べるフラッシュカード機能とクイズ機能を実装しています。",
    stack: ["Next.js", "TypeScript"], image: "/images/projects/kanji-sakura.png", imageAlt: "Kanji Sakuraの漢字学習画面",
    repository: "https://github.com/Ayeheingi/kanji-sakura", live: "https://kanji-sakura.vercel.app", tone: "violet",
    responsibility: "画面設計・レスポンシブ対応・学習フローの実装",
    learned: "TypeScriptでの型設計と、使いやすい学習体験の組み立て方を学びました。",
  },
  {
    number: "02", title: "WELCOME Myanmar", type: "ミャンマー観光紹介サイト",
    description: "HTML と CSS を使用して制作したミャンマー観光紹介サイトです。ミャンマーの観光地や文化、食べ物について紹介しています。",
    stack: ["HTML", "CSS"], image: "/images/projects/welcome-myanmar.jpg", imageAlt: "ミャンマー・バガンの風景",
    repository: "https://github.com/Ayeheingi/Myanmar", live: "https://ayeheingi.github.io/Myanmar/", tone: "lime",
    responsibility: "情報収集・ページ構成・レスポンシブCSS",
    learned: "情報量の多い観光内容を、分かりやすく整理して伝える方法を学びました。",
  },
];

const skillGroups = [
  { title: "フロントエンド", level: "制作経験あり・学習中", items: ["HTML", "CSS", "TypeScript", "React", "Next.js"] },
  { title: "コンテンツ管理", level: "基礎・学習中", items: ["microCMS"] },
  { title: "開発ツール", level: "日常的に使用", items: ["Git", "GitHub", "VS Code"] },
  { title: "資格", level: "取得済み", items: ["日本語能力試験 N2", "Java SE Bronze", "CompTIA Tech+"] },
];

const strengths = [
  { title: "責任感", text: "私は責任感を持って物事に取り組むことができます。学校の課題やアルバイトなど、任されたことは最後までやり遂げるよう心がけています。" },
  { title: "継続して学ぶ力", text: "新しい知識や技術を学ぶことが好きです。分からないことがあれば自分で調べながら学習を進め、スキル向上に努めています。" },
  { title: "問題解決力", text: "課題に直面したときは、原因を考えながら解決方法を探します。プログラミング学習でも、エラーの内容を確認しながら一つずつ解決するようにしています。" },
  { title: "適応力", text: "新しい環境にも柔軟に対応できます。ミャンマーから日本へ来て、日本語やプログラミングを学びながら新しい生活に挑戦しています。" },
];

export default function HomePage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="ページ上部へ">AT<span>.</span></a>
        <nav className={styles.nav} aria-label="メインナビゲーション">
          <a href="#about">このサイトについて</a><a href="#profile">プロフィール</a><a href="#work">制作物</a><a href="#skills">スキル</a><a href="#contact">お問い合わせ</a>
        </nav>
        <details className={styles.mobileNav}>
          <summary>メニュー</summary>
          <div><a href="#about">このサイトについて</a><a href="#profile">プロフィール</a><a href="#work">制作物</a><a href="#skills">スキル</a><a href="#contact">お問い合わせ</a></div>
        </details>
        <a className={styles.headerCta} href="mailto:w25002@gmail.com">お問い合わせ <span>↗</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> 沖縄でWebプログラミングを勉強中</p>
          <h1>学びを、<br /><em>かたちに。</em></h1>
          <p className={styles.intro}>人の役に立つWebシステムやサービスを作る、フルスタックエンジニアを目指しています。</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#work">制作物を見る <span>↓</span></a><a className={styles.textLink} href="https://github.com/Ayeheingi" target="_blank" rel="noreferrer">ソースコードを見る ↗</a></div>
        </div>
        <div className={styles.heroPhoto}><Image src={`${basePath}/images/hero-study-desk.png`} alt="沖縄の明るい窓辺にあるWebプログラミング学習デスク" fill priority sizes="(max-width: 820px) 100vw, 50vw" /></div>
      </section>

      <section className={styles.about} id="about">
        <p className={styles.sectionNumber}>このサイトについて</p>
        <div className={styles.aboutGrid}><h2>学習と制作の<br />ポートフォリオ。</h2><div><p>このポートフォリオサイトは、私の学習成果や制作したWebサイトを紹介するために作成しました。</p><p>現在、専門学校沖縄ビジネス外語学院でWebプログラミングを学んでおり、Web開発に必要な知識や技術を身につけています。</p><p>将来はフルスタックエンジニアとして、多くの人に役立つシステムやサービスを開発できるエンジニアになることを目標としています。</p></div></div>
      </section>

      <section className={styles.profile} id="profile">
        <p className={styles.sectionNumber}>プロフィール</p>
        <div className={styles.profileGrid}><div><p className={styles.bigHello}>はじめまして。</p><h2>AYE THEINGI<span>です。</span></h2></div><div className={styles.profileCopy}><p>ミャンマー出身で、日本に来て1年になります。現在は専門学校沖縄ビジネス外語学院のWebプログラミングコースで学んでいます。</p><p>新しい技術を学ぶことが好きで、HTML、CSS、TypeScript、React、Next.jsを中心に勉強しています。</p><p>責任感を持って最後までやり遂げることを大切にしており、日々学習を続けながらスキルアップに取り組んでいます。</p><dl className={styles.profileFacts}><div><dt>出身</dt><dd>ミャンマー</dd></div><div><dt>学習</dt><dd>Webプログラミング</dd></div><div><dt>目標</dt><dd>フルスタックエンジニア</dd></div></dl></div></div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionTop}><div><p className={styles.sectionNumber}>制作物</p><h2>制作したWebサイト。</h2></div><p>学んだ技術を使い、実際に動くWebサイトやアプリケーションの制作に取り組んでいます。</p></div>
        <div className={styles.projectGrid}>{projects.map((project) => <article className={`${styles.project} ${styles[project.tone]}`} key={project.title}><div className={styles.projectVisual}><span className={styles.projectNumber}>{project.number}</span><Image src={`${basePath}${project.image}`} alt={project.imageAlt} fill sizes="(max-width: 820px) 100vw, 50vw" className={styles.projectImage} /></div><p className={styles.projectType}>{project.type}</p><h3>{project.title}</h3><p className={styles.projectDescription}>{project.description}</p><dl className={styles.projectDetails}><div><dt>担当</dt><dd>{project.responsibility}</dd></div><div><dt>学んだこと</dt><dd>{project.learned}</dd></div></dl><div className={styles.tags}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className={styles.projectLinks}><a href={project.repository} target="_blank" rel="noreferrer">ソースコード ↗</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">サイトを見る ↗</a>}</div></article>)}</div>
      </section>

      <section className={styles.skills} id="skills">
        <p className={styles.sectionNumber}>スキル</p><div className={styles.skillsGrid}><h2>基礎から、<br /><em>一歩ずつ。</em></h2><div className={styles.skillGroups}>{skillGroups.map((group) => <div className={styles.skillGroup} key={group.title}><div className={styles.skillHeading}><h3>{group.title}</h3><small>{group.level}</small></div><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
      </section>

      <section className={styles.strengths} id="strengths">
        <div className={styles.sectionTop}><div><p className={styles.sectionNumber}>私の強み</p><h2>私の強み。</h2></div></div>
        <div className={styles.strengthGrid}>{strengths.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className={styles.hobby} id="hobby">
        <p className={styles.sectionNumber}>趣味</p><div className={styles.hobbyGrid}><h2>好きなことが、<br />学びにつながる。</h2><div><article><span>01</span><h3>読書</h3><p>読書を通して新しい知識を得たり、さまざまな考え方に触れたりすることが好きです。本を読むことは、自分の視野を広げ、成長するための大切な時間になっています。</p></article><article><span>02</span><h3>プログラミング</h3><p>新しい技術や知識を身につけながら、Webサイトやアプリケーションを制作することにやりがいを感じています。自分のアイデアを形にできる点に魅力を感じ、日々学習を続けています。</p></article></div></div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.contactLabel}>お問い合わせ</p><h2>Webエンジニアへの<br /><em>第一歩を探しています。</em></h2><p className={styles.contactLead}>現在Webプログラミングを学んでおり、未経験から成長できる機会を探しています。採用やインターンシップについて、お気軽にご連絡ください。</p><dl className={styles.jobFacts}><div><dt>希望職種</dt><dd>Webエンジニア</dd></div><div><dt>希望勤務地</dt><dd>日本国内</dd></div><div><dt>言語</dt><dd>ミャンマー語・日本語</dd></div></dl><a href="mailto:w25002@gmail.com">メールを送る <span>↗</span></a><small>w25002@gmail.com</small>
      </section>
      <footer className={styles.footer}><p>© 2026 AYE THEINGI</p><p>沖縄でWebプログラミングを勉強中</p><a href="#top">ページ上部へ ↑</a></footer>
    </main>
  );
}
