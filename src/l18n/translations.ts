import { EToken, ELanguage } from '$l18n/enums';
import type { TTranslations } from '$l18n/types';

const translations: TTranslations = {
  [ELanguage.EN]: {
    [EToken.SERVICES]: 'Services',
    [EToken.ABOUT]: 'About us',
    [EToken.CONTACT]: 'Contact',
    [EToken.SLOGAN]: 'Efficiency. Reliability. Consistency.',

    [EToken.DESCRIPTION]:
      'We create state-of-art software systems to bring positive impact on the world.',
    [EToken.ACTION]: 'Discuss a project',

    [EToken.CONSULTING]: 'Consulting',
    [EToken.CONSULTING_DESC]:
      'Analytical process of current & future systems to find the most efficient & reliable way of achieving business objectives.',
    [EToken.CONSULTING_ACTION]: 'Let`s chat',

    [EToken.ARCHITECTURE]: 'System Architecture',
    [EToken.ARCHITECTURE_DESC]:
      'Restructure of current system or construction of a system from ground up with resiliency and consistency in mind.',
    [EToken.ARCHITECTURE_ACTION]: 'Start deepwork',

    [EToken.TEAM]: 'Team Integration',
    [EToken.TEAM_DESC]:
      'Ready to take on a challenge and join the existing team to improve quality & speed at any stage of development.',
    [EToken.TEAM_ACTION]: 'Hire us',

    [EToken.COMPLETE]: 'Complete solution',
    [EToken.COMPLETE_DESC]:
      '<li>Design & Discovery</li><li>System Architecture</li><li>Implementation</li><li>DevOps</li>',
    [EToken.COMPLETE_ACTION]: 'Launch big idea',

    [EToken.ABOUT_US]:
      'We are a team of seasoned engineers & designers, dedicated to make the world a better place with help of technologies:',

    [EToken.PARTNERS]: 'Greatful to have opportunity to work with:',

    [EToken.CONTACT_ACTION]: 'Let`s do it!',
    [EToken.CONTACT_LINKS]: 'Contact us via',

    [EToken.LEGAL]: 'Legal Mentions',
    [EToken.PRIVACY]: 'Privacy Policy',
    [EToken.TERMS]: 'Terms of Usage',

    [EToken.LEGAL_SHORT]: 'Legal',
    [EToken.PRIVACY_SHORT]: 'Privacy',
    [EToken.TERMS_SHORT]: 'Terms',

    [EToken.TECH_AI]: 'AI/ML',
    [EToken.TECH_AI_DESC]: 'Artificial Intelligence & Machine Learning',
    [EToken.TECH_DISTRIBUTED]: 'Distributed systems',
    [EToken.TECH_DISTRIBUTED_DESC]: 'Building scalable distributed applications',
    [EToken.TECH_BLOCKCHAIN]: 'Blockchain',
    [EToken.TECH_BLOCKCHAIN_DESC]: 'Web3 and blockchain development',
    [EToken.TECH_DESKTOP]: 'Cross-platform Desktop',
    [EToken.TECH_DESKTOP_DESC]: 'Cross-platform desktop applications',
    [EToken.TECH_MOBILE]: 'Cross-platform Mobile',
    [EToken.TECH_MOBILE_DESC]: 'Cross-platform mobile applications',
    [EToken.TECH_WEB]: 'Full-stack Web',
    [EToken.TECH_WEB_DESC]: 'End-to-end web applications',
    [EToken.COMPANY_DEVELOPMENT]: 'Development',
    [EToken.MATRIX]: 'Embracing the Future',
    [EToken.COPYRIGHT]: '© {{year}} Arky Software Development Corporation. All rights reserved.'
  },
  [ELanguage.JA]: {
    [EToken.SERVICES]: 'サービス',
    [EToken.ABOUT]: '会社概要',
    [EToken.CONTACT]: 'お問い合わせ',
    [EToken.SLOGAN]: '効率性。信頼性。一貫性。',

    [EToken.DESCRIPTION]:
      '最先端のソフトウェアシステムを作成し、世界にポジティブな影響を与えます。',
    [EToken.ACTION]: 'プロジェクトを相談する',

    [EToken.CONSULTING]: 'コンサルティング',
    [EToken.CONSULTING_DESC]:
      'ビジネス目標を達成するための最も効率的で信頼性の高い方法を見つけるための、現在および将来のシステムの分析プロセス。',
    [EToken.CONSULTING_ACTION]: 'お話しましょう',

    [EToken.ARCHITECTURE]: 'システムアーキテクチャ',
    [EToken.ARCHITECTURE_DESC]:
      '回復力と一貫性を念頭に置いた、現在のシステムの再構築またはシステムのゼロからの構築。',
    [EToken.ARCHITECTURE_ACTION]: '詳細を見る',

    [EToken.TEAM]: 'チーム統合',
    [EToken.TEAM_DESC]:
      '開発のあらゆる段階で、品質とスピードを向上させるために既存のチームに参加する準備ができています。',
    [EToken.TEAM_ACTION]: '採用する',

    [EToken.COMPLETE]: '完全なソリューション',
    [EToken.COMPLETE_DESC]:
      '<li>設計と発見</li><li>システムアーキテクチャ</li><li>実装</li><li>DevOps</li>',
    [EToken.COMPLETE_ACTION]: '大きなアイデアを実現',

    [EToken.ABOUT_US]:
      '私たちは、テクノロジーの助けを借りて世界をより良い場所にすることに専念している、経験豊富なエンジニアとデザイナーのチームです：',

    [EToken.PARTNERS]: '以下の企業との協業の機会に感謝します：',

    [EToken.CONTACT_ACTION]: 'はじめましょう！',
    [EToken.CONTACT_LINKS]: '連絡方法',

    [EToken.LEGAL]: '法的表示',
    [EToken.PRIVACY]: 'プライバシーポリシー',
    [EToken.TERMS]: '利用規約',

    [EToken.LEGAL_SHORT]: '法的',
    [EToken.PRIVACY_SHORT]: 'プライバシー',
    [EToken.TERMS_SHORT]: '利用規約',

    [EToken.TECH_AI]: '人工知能・機械学習',
    [EToken.TECH_AI_DESC]: '人工知能・機械学習',
    [EToken.TECH_DISTRIBUTED]: '分散システム',
    [EToken.TECH_DISTRIBUTED_DESC]: 'スケーラブルな分散アプリケーションの構築',
    [EToken.TECH_BLOCKCHAIN]: 'ブロックチェーン',
    [EToken.TECH_BLOCKCHAIN_DESC]: 'Web3とブロックチェーン開発',
    [EToken.TECH_DESKTOP]: 'クロスプラットフォーム デスクトップ',
    [EToken.TECH_DESKTOP_DESC]: 'クロスプラットフォーム デスクトップアプリケーション',
    [EToken.TECH_MOBILE]: 'クロスプラットフォーム モバイル',
    [EToken.TECH_MOBILE_DESC]: 'クロスプラットフォーム モバイルアプリケーション',
    [EToken.TECH_WEB]: 'フルスタック Web',
    [EToken.TECH_WEB_DESC]: 'エンドツーエンドのWebアプリケーション',
    [EToken.COMPANY_DEVELOPMENT]: '開発',
    [EToken.MATRIX]: '未来を受け入れる',
    [EToken.COPYRIGHT]: '© {{year}} Arky ソフトウェア開発株式会社. 全著作権所有。'
  }
};

export default translations;
