/**
 * Multi-language Support System
 * Languages: zh-CN (Chinese - Default), ja (Japanese), en (English)
 */

const translations = {
    'zh-CN': {
        // Navigation
        nav_home: '首页',
        nav_business: '业务板块',
        nav_cases: '服务案例',
        nav_guidelines: '行动方针',
        nav_contact: '联系我们',
        
        // Hero Section
        hero_eyebrow: 'Mirai Corporation',
        hero_title: '连接价值 · 共塑未来',
        hero_desc: '专注中日跨境协同，以稳健步伐探索全球化发展路径。',
        hero_cta: '了解更多',
        
        // Keywords
        kw_cross_border: '跨境',
        kw_synergy: '协同',
        kw_value: '价值',
        kw_professional: '专业',
        kw_business: '商务',
        kw_consulting: '咨询',
        kw_trust: '信赖',
        kw_assessment: '评估',
        kw_planning: '制定',
        kw_steady: '稳健',
        kw_global: '全球化',
        kw_bridge: '桥梁',
        
        // Core Values Section
        values_subtitle: 'Our Values',
        values_title: '核心理念',
        values_desc: '我们始终坚持的价值观与行事准则',
        value_1_title: '守法合规',
        value_1_text: '遵守法律法规与商业规则，以负责任的态度开展业务。',
        value_2_title: '真实可靠',
        value_2_text: '重视信息真实与结果可靠，建立长久的信任基石。',
        value_3_title: '稳健推进',
        value_3_text: '谨慎对待风险与不确定性，追求可持续的发展节奏。',
        value_4_title: '透明互信',
        value_4_text: '诚实透明的沟通机制，尊重合作伙伴与团队。',
        
        // Company Info Section
        company_subtitle: 'Top Message',
        company_title: '以稳健步伐<br>探索全球化发展路径',
        company_quote: '"长期价值来自踏实、透明与互信。<br>我们致力于搭建中日商业价值的稳健桥梁。"',
        company_message: '未来株式会社从具体项目和客户需求出发，提供商品出海支持、渠道与采购协同、本地化运营与市场进入咨询等服务，在实践中稳步积累经验与能力。我们期待与您携手，共同开创充满可能性的未来。',
        company_position: '代表取缔役',
        
        // Business Section
        business_subtitle: 'Our Business',
        business_title: '核心业务板块',
        business_desc: '自营实践与咨询协同的双轮驱动，为您提供全方位的跨境支持。',
        biz_1_title: '自营跨境项目实践',
        biz_1_desc: '在日本市场亲身入局，承担选品、渠道与履约的全链条风险。通过小规模、可复盘的实践运行，获取真实交易与消费者反馈。',
        biz_1_point_1: '真实交易环境下的风险验证',
        biz_1_point_2: '第一手消费者反馈数据积累',
        biz_1_point_3: '全链路履约流程的实操经验',
        biz_2_title: '中日商务协同咨询',
        biz_2_desc: '基于自营跨境实践所积累的经验与认知，提供轻量、可执行型咨询与协同支持，连接需求、翻译商业结构。',
        biz_2_point_1: '市场进入评估与策略制定',
        biz_2_point_2: '试运行伴走服务',
        biz_2_point_3: '在地沟通与信息整理协助',
        btn_learn_more: '了解详情',
        
        // Cases Section
        cases_subtitle: 'Service Cases',
        cases_title: '服务案例',
        case_1_title: '消费电子品牌出海',
        case_1_desc: '协助品牌制定日本市场策略，6个月内完成首批产品上线。',
        case_2_title: '生活杂货供应链优化',
        case_2_desc: '优化物流链路，采购成本降低15%，交货周期缩短20%。',
        case_3_title: 'IP衍生品跨境自营',
        case_3_desc: '引进中国热门IP衍生品，通过快闪店验证市场受众基础。',
        case_4_title: 'SaaS产品调研',
        case_4_desc: '深度用户访谈与竞品分析，为产品迭代提供数据支撑。',
        btn_view_more: '查看更多案例',
        
        // Company Profile Section
        profile_subtitle: 'Company Profile',
        profile_title: '公司概要',
        profile_name_label: '公司名称',
        profile_name_value: '未来株式会社',
        profile_founded_label: '成立时间',
        profile_founded_value: '2024年',
        profile_address_label: '所在地',
        profile_address_value: '东京都世田谷区用贺二丁目37番5号',
        profile_contact_label: '联系方式',
        
        // Map Fallback
        map_fallback_title: '办公地址',
        map_fallback_btn: '在 Google Maps 中打开',
        
        // Footer
        footer_business_title: '业务领域',
        footer_biz_1: '自营跨境项目',
        footer_biz_2: '商务协同咨询',
        footer_info_title: '企业信息',
        footer_about: '公司概要',
        footer_cases: '服务案例',
        footer_guidelines: '行动方针',
        footer_contact: '联系我们',
        footer_copyright: '© 2024 Mirai Corporation. All Rights Reserved.',
        
        // Language Names
        lang_zh: '中文',
        lang_ja: '日本語',
        lang_en: 'English',
        
        // Business Page
        biz_page_title: '业务板块',
        biz_page_subtitle: 'Our Business',
        biz_breadcrumb: '业务板块',
        biz_trading_subtitle: 'Trading in Practice',
        biz_trading_title: '自营跨境项目实践',
        biz_trading_intro: '在日本市场以自营方式运行项目，亲自承担选品、渠道与履约风险，获取真实交易与消费者反馈。',
        biz_trading_desc: '我司以自营方式参与日本本地市场交易环境，在选品、渠道、物流与履约等环节承担经营责任与相关风险。通过小规模、可复盘的实践运行，我们用于加深对价格结构、产品适配性以及风险边界的理解。',
        biz_trading_value_title: '核心价值',
        biz_advisory_subtitle: 'China–Japan Business Advisory',
        biz_advisory_title: '中日商务协同咨询',
        biz_advisory_intro: '基于自营跨境实践所积累的经验与认知，提供轻量、可执行型咨询与协同支持。',
        biz_advisory_desc: '面向正在评估进入日本市场、或处于探索与试运行阶段的企业，连接需求、翻译商业结构、减少试错成本。',
        biz_advisory_target_title: '适用企业',
        biz_advisory_target_1: '评估进入日本市场',
        biz_advisory_target_2: '验证需求与价格',
        biz_advisory_target_3: '分阶段小规模试运行',
        biz_advisory_target_4: '重检既有计划与风险',
        biz_advisory_service_title: '服务形式',
        biz_advisory_service_1: '项目制咨询',
        biz_advisory_service_2: '全流程伴走服务',
        biz_advisory_service_3: '决策支持与共识形成',
        biz_advisory_service_4: '在地沟通协助',
        
        // Cases Page
        cases_page_title: '服务案例',
        cases_page_subtitle: 'Service Cases',
        cases_breadcrumb: '服务案例',
        cases_intro: '我们协助众多企业实现了中日市场的价值连接。<br>以下是部分代表性的服务案例。',
        case_tag_consulting: '全案咨询',
        case_tag_supply: '供应链协同',
        case_tag_trading: '自营实践',
        case_tag_research: '市场调研',
        case_1_full_title: '消费电子品牌日本市场进入',
        case_1_full_desc: '协助一家领先的消费电子品牌制定日本市场进入策略。从竞品分析、渠道规划到合规认证支持，提供了从0到1的全程伴走服务。成功在6个月内完成首批产品上线，并入驻主流家电量贩店。',
        case_2_full_title: '生活杂货供应链优化',
        case_2_full_desc: '为日本本土家居品牌重构中国供应链。通过筛选优质工厂、建立质量管控标准（QC）以及优化物流链路，帮助客户降低了15%的采购成本，同时将交货周期缩短了20%。',
        case_3_full_title: 'IP衍生品跨境自营',
        case_3_full_desc: '通过自营模式，引进中国热门IP衍生品进入日本市场。承担选品、进口清关及本地履约。通过社交媒体营销与快闪店结合的方式，验证了IP在日本年轻群体中的受众基础。',
        case_4_full_title: 'SaaS产品本地化调研',
        case_4_full_desc: '为一款企业级SaaS软件提供日本市场可行性调研。进行了深度用户访谈与竞品功能对比，识别出关键的本地化需求差异，为客户的产品迭代与定价策略提供了关键数据支撑。',
        
        // Guidelines Page
        guidelines_page_title: '行动方针',
        guidelines_page_subtitle: 'Action Guidelines',
        guidelines_breadcrumb: '行动方针',
        guidelines_intro: '未来株式会社在跨境实践与协同业务中，以<span class="highlight">守法、诚信与稳健推进</span>为基本原则。<br>我们遵循以下五大行动方针：',
        guideline_1_title: '遵守法律法规与商业规则',
        guideline_1_desc: '始终将合规性放在首位，以负责任的态度开展所有业务活动，维护商业秩序。',
        guideline_2_title: '重视真实与可靠',
        guideline_2_desc: '在自营实践与咨询支持过程中，重视信息真实、过程合规与结果可靠，不夸大、不隐瞒。',
        guideline_3_title: '稳健与可持续',
        guideline_3_desc: '谨慎对待风险与不确定性，不追求短期爆发，而是以可持续的节奏推进项目与合作。',
        guideline_4_title: '诚实透明的沟通',
        guideline_4_desc: '重视与客户及合作伙伴的沟通，以诚实与透明为基础建立信任关系，确保信息对称。',
        guideline_5_title: '尊重团队与个体',
        guideline_5_desc: '尊重团队成员的个体差异与工作节奏，营造安心、协作与健康的工作环境，激发创造力。',
        
        // Contact Page
        contact_page_title: '联系我们',
        contact_page_subtitle: 'Contact Us',
        contact_breadcrumb: '联系我们',
        contact_intro: '无论是业务咨询还是合作洽谈，我们都期待听到您的声音。<br>请填写以下表格，我们将尽快与您联系。',
        contact_address_label: 'Address',
        contact_email_label: 'Email',
        contact_hours_label: 'Office Hours',
        contact_hours_value: '周一至周五 9:00 - 18:00',
        contact_hours_note: '(日本法定节假日除外)',
        form_name_label: '姓名',
        form_name_placeholder: '请输入您的姓名',
        form_company_label: '公司名称',
        form_company_placeholder: '请输入公司名称',
        form_email_label: '邮箱地址',
        form_email_placeholder: 'example@domain.com',
        form_subject_label: '咨询主题',
        form_subject_placeholder: '请输入咨询主题',
        form_message_label: '咨询内容',
        form_message_placeholder: '请输入详细需求或咨询内容...',
        form_submit: '发送咨询',
        form_required: '*',
        form_contact_label: '联系方式',
        form_contact_placeholder: '手机号或邮箱（二选一）',
        form_contact_hint: '请填写手机号或邮箱，方便我们与您联系',
        form_privacy_notice: '🔒 您的信息安全对我们至关重要。我们承诺严格保护您的个人信息，绝不会将其泄露给任何第三方或用于其他商业目的。',
        form_success_title: '提交成功！',
        form_success_message: '感谢您的咨询，我们会尽快与您联系。',
        form_success_btn: '确定',
        map_office_title: '办公地址',
        map_view_btn: '在 Google Maps 中查看'
    },
    
    'ja': {
        // Navigation
        nav_home: 'ホーム',
        nav_business: '事業内容',
        nav_cases: '実績紹介',
        nav_guidelines: '行動指針',
        nav_contact: 'お問い合わせ',
        
        // Hero Section
        hero_eyebrow: 'Mirai Corporation',
        hero_title: '価値をつなぐ・未来を創る',
        hero_desc: '日中クロスボーダー協業に注力し、着実な歩みでグローバル展開を探求します。',
        hero_cta: '詳しく見る',
        
        // Keywords
        kw_cross_border: '越境',
        kw_synergy: '協業',
        kw_value: '価値',
        kw_professional: '専門',
        kw_business: 'ビジネス',
        kw_consulting: 'コンサル',
        kw_trust: '信頼',
        kw_assessment: '評価',
        kw_planning: '策定',
        kw_steady: '着実',
        kw_global: 'グローバル',
        kw_bridge: '架け橋',
        
        // Core Values Section
        values_subtitle: 'Our Values',
        values_title: '基本理念',
        values_desc: '私たちが常に大切にしている価値観と行動原則',
        value_1_title: '法令遵守',
        value_1_text: '法律法規と商慣行を遵守し、責任ある姿勢で事業を展開します。',
        value_2_title: '誠実・信頼',
        value_2_text: '情報の真実性と結果の信頼性を重視し、長期的な信頼関係を構築します。',
        value_3_title: '着実な推進',
        value_3_text: 'リスクと不確実性に慎重に対処し、持続可能な発展ペースを追求します。',
        value_4_title: '透明性と相互信頼',
        value_4_text: '誠実で透明なコミュニケーションを通じ、パートナーとチームを尊重します。',
        
        // Company Info Section
        company_subtitle: 'Top Message',
        company_title: '着実な歩みで<br>グローバル展開を探求',
        company_quote: '「長期的な価値は、誠実さ、透明性、相互信頼から生まれます。<br>私たちは日中ビジネスの確かな架け橋となることを目指します。」',
        company_message: '未来株式会社は、具体的なプロジェクトとお客様のニーズを起点に、商品の海外展開支援、チャネル・調達協業、現地化運営・市場参入コンサルティングなどのサービスを提供し、実践を通じて経験と能力を着実に蓄積しています。皆様と手を携え、可能性に満ちた未来を共に切り拓くことを楽しみにしております。',
        company_position: '代表取締役',
        
        // Business Section
        business_subtitle: 'Our Business',
        business_title: '事業領域',
        business_desc: '自社実践とコンサルティング協業の両輪で、包括的なクロスボーダー支援を提供します。',
        biz_1_title: '自社越境プロジェクト実践',
        biz_1_desc: '日本市場に自ら参入し、商品選定・チャネル・履行の全プロセスでリスクを負担。小規模で検証可能な実践運営を通じ、実際の取引と消費者フィードバックを獲得します。',
        biz_1_point_1: '実取引環境でのリスク検証',
        biz_1_point_2: '一次情報としての消費者フィードバック蓄積',
        biz_1_point_3: 'フルフィルメント全工程の実務経験',
        biz_2_title: '日中ビジネス協業コンサルティング',
        biz_2_desc: '自社越境実践で蓄積した経験と知見に基づき、軽量で実行可能なコンサルティングと協業支援を提供し、ニーズをつなぎ、ビジネス構造を翻訳します。',
        biz_2_point_1: '市場参入評価と戦略策定',
        biz_2_point_2: '試験運用伴走サービス',
        biz_2_point_3: '現地コミュニケーション・情報整理支援',
        btn_learn_more: '詳細を見る',
        
        // Cases Section
        cases_subtitle: 'Service Cases',
        cases_title: '実績紹介',
        case_1_title: '家電ブランドの海外展開',
        case_1_desc: 'ブランドの日本市場戦略策定を支援し、6ヶ月で初回商品のローンチを実現。',
        case_2_title: '生活雑貨サプライチェーン最適化',
        case_2_desc: '物流ルートを最適化し、調達コスト15%削減、納期20%短縮を達成。',
        case_3_title: 'IP派生商品の越境自社販売',
        case_3_desc: '中国の人気IP派生商品を導入し、ポップアップストアで市場受容性を検証。',
        case_4_title: 'SaaS製品市場調査',
        case_4_desc: '深層ユーザーインタビューと競合分析により、製品改善のデータ基盤を提供。',
        btn_view_more: '実績をもっと見る',
        
        // Company Profile Section
        profile_subtitle: 'Company Profile',
        profile_title: '会社概要',
        profile_name_label: '会社名',
        profile_name_value: '未来株式会社',
        profile_founded_label: '設立',
        profile_founded_value: '2024年',
        profile_address_label: '所在地',
        profile_address_value: '東京都世田谷区用賀二丁目37番5号',
        profile_contact_label: 'お問い合わせ',
        
        // Map Fallback
        map_fallback_title: 'オフィス所在地',
        map_fallback_btn: 'Google Mapsで開く',
        
        // Footer
        footer_business_title: '事業領域',
        footer_biz_1: '自社越境プロジェクト',
        footer_biz_2: 'ビジネス協業コンサル',
        footer_info_title: '企業情報',
        footer_about: '会社概要',
        footer_cases: '実績紹介',
        footer_guidelines: '行動指針',
        footer_contact: 'お問い合わせ',
        footer_copyright: '© 2024 Mirai Corporation. All Rights Reserved.',
        
        // Language Names
        lang_zh: '中文',
        lang_ja: '日本語',
        lang_en: 'English',
        
        // Business Page
        biz_page_title: '事業内容',
        biz_page_subtitle: 'Our Business',
        biz_breadcrumb: '事業内容',
        biz_trading_subtitle: 'Trading in Practice',
        biz_trading_title: '自社越境プロジェクト実践',
        biz_trading_intro: '日本市場に自ら参入し、商品選定・チャネル・履行のリスクを負担。実際の取引と消費者フィードバックを獲得します。',
        biz_trading_desc: '当社は自社運営で日本国内市場の取引環境に参入し、商品選定・チャネル・物流・履行などの各工程で経営責任とリスクを負担します。小規模で検証可能な実践運営を通じ、価格構造・製品適合性・リスク境界への理解を深めています。',
        biz_trading_value_title: 'コアバリュー',
        biz_advisory_subtitle: 'China–Japan Business Advisory',
        biz_advisory_title: '日中ビジネス協業コンサルティング',
        biz_advisory_intro: '自社越境実践で蓄積した経験と知見に基づき、軽量で実行可能なコンサルティングと協業支援を提供します。',
        biz_advisory_desc: '日本市場参入を検討中、または探索・試験運用段階にある企業向けに、ニーズをつなぎ、ビジネス構造を翻訳し、試行錯誤コストを削減します。',
        biz_advisory_target_title: '対象企業',
        biz_advisory_target_1: '日本市場参入を検討中',
        biz_advisory_target_2: 'ニーズと価格の検証',
        biz_advisory_target_3: '段階的な小規模試験運用',
        biz_advisory_target_4: '既存計画とリスクの再検討',
        biz_advisory_service_title: 'サービス形態',
        biz_advisory_service_1: 'プロジェクト制コンサルティング',
        biz_advisory_service_2: 'フルプロセス伴走サービス',
        biz_advisory_service_3: '意思決定支援と合意形成',
        biz_advisory_service_4: '現地コミュニケーション支援',
        
        // Cases Page
        cases_page_title: '実績紹介',
        cases_page_subtitle: 'Service Cases',
        cases_breadcrumb: '実績紹介',
        cases_intro: '私たちは多くの企業の日中市場における価値連携を支援してきました。<br>以下は代表的なサービス事例です。',
        case_tag_consulting: 'フルコンサル',
        case_tag_supply: 'サプライチェーン協業',
        case_tag_trading: '自社実践',
        case_tag_research: '市場調査',
        case_1_full_title: '家電ブランドの日本市場参入',
        case_1_full_desc: '大手家電ブランドの日本市場参入戦略策定を支援。競合分析、チャネル計画から認証取得支援まで、ゼロからのフルサポートを提供。6ヶ月で初回商品のローンチを実現し、主要家電量販店への入店を達成しました。',
        case_2_full_title: '生活雑貨サプライチェーン最適化',
        case_2_full_desc: '日本国内の家庭用品ブランド向けに中国サプライチェーンを再構築。優良工場の選定、品質管理基準（QC）の確立、物流ルートの最適化により、調達コスト15%削減、納期20%短縮を達成しました。',
        case_3_full_title: 'IP派生商品の越境自社販売',
        case_3_full_desc: '自社運営モデルで中国の人気IP派生商品を日本市場に導入。商品選定、輸入通関、現地履行を担当。SNSマーケティングとポップアップストアを組み合わせ、日本の若年層におけるIP受容性を検証しました。',
        case_4_full_title: 'SaaS製品ローカライズ調査',
        case_4_full_desc: '企業向けSaaSソフトウェアの日本市場可行性調査を実施。深層ユーザーインタビューと競合機能比較を行い、重要なローカライズニーズの差異を特定。製品改善と価格戦略の重要なデータ基盤を提供しました。',
        
        // Guidelines Page
        guidelines_page_title: '行動指針',
        guidelines_page_subtitle: 'Action Guidelines',
        guidelines_breadcrumb: '行動指針',
        guidelines_intro: '未来株式会社は越境実践と協業事業において、<span class="highlight">法令遵守、誠実、着実な推進</span>を基本原則としています。<br>私たちは以下の5つの行動指針に従います：',
        guideline_1_title: '法律法規と商慣行の遵守',
        guideline_1_desc: '常にコンプライアンスを最優先し、責任ある姿勢ですべての事業活動を展開し、商業秩序を維持します。',
        guideline_2_title: '真実性と信頼性の重視',
        guideline_2_desc: '自社実践とコンサルティング支援において、情報の真実性、プロセスの適正性、結果の信頼性を重視し、誇張や隠蔽をしません。',
        guideline_3_title: '着実さと持続可能性',
        guideline_3_desc: 'リスクと不確実性に慎重に対処し、短期的な爆発的成長を追わず、持続可能なペースでプロジェクトと協業を推進します。',
        guideline_4_title: '誠実で透明なコミュニケーション',
        guideline_4_desc: 'お客様やパートナーとのコミュニケーションを重視し、誠実さと透明性を基盤に信頼関係を構築し、情報の対称性を確保します。',
        guideline_5_title: 'チームと個人の尊重',
        guideline_5_desc: 'チームメンバーの個性と仕事のリズムを尊重し、安心・協力・健康的な職場環境を醸成し、創造性を引き出します。',
        
        // Contact Page
        contact_page_title: 'お問い合わせ',
        contact_page_subtitle: 'Contact Us',
        contact_breadcrumb: 'お問い合わせ',
        contact_intro: 'ビジネスのご相談から協業のご提案まで、皆様からのご連絡をお待ちしております。<br>以下のフォームにご記入ください。担当者より折り返しご連絡いたします。',
        contact_address_label: '所在地',
        contact_email_label: 'メール',
        contact_hours_label: '営業時間',
        contact_hours_value: '月曜日〜金曜日 9:00 - 18:00',
        contact_hours_note: '(日本の祝日を除く)',
        form_name_label: 'お名前',
        form_name_placeholder: 'お名前をご入力ください',
        form_company_label: '会社名',
        form_company_placeholder: '会社名をご入力ください',
        form_email_label: 'メールアドレス',
        form_email_placeholder: 'example@domain.com',
        form_subject_label: 'お問い合わせ件名',
        form_subject_placeholder: '件名をご入力ください',
        form_message_label: 'お問い合わせ内容',
        form_message_placeholder: '詳細なご要望やお問い合わせ内容をご入力ください...',
        form_submit: '送信する',
        form_required: '*',
        form_contact_label: '連絡先',
        form_contact_placeholder: '電話番号またはメールアドレス（どちらか一方）',
        form_contact_hint: '電話番号またはメールアドレスをご入力ください',
        form_privacy_notice: '🔒 お客様の情報セキュリティは私たちにとって最も重要です。お客様の個人情報を厳重に保護し、第三者への提供や他の商業目的での使用は一切いたしません。',
        form_success_title: '送信完了！',
        form_success_message: 'お問い合わせありがとうございます。担当者より折り返しご連絡いたします。',
        form_success_btn: '閉じる',
        map_office_title: 'オフィス所在地',
        map_view_btn: 'Google Mapsで見る'
    },
    
    'en': {
        // Navigation
        nav_home: 'Home',
        nav_business: 'Business',
        nav_cases: 'Cases',
        nav_guidelines: 'Guidelines',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_eyebrow: 'Mirai Corporation',
        hero_title: 'Connecting Value · Shaping the Future',
        hero_desc: 'Focused on China-Japan cross-border collaboration, exploring global development with steady steps.',
        hero_cta: 'Learn More',
        
        // Keywords
        kw_cross_border: 'Cross-border',
        kw_synergy: 'Synergy',
        kw_value: 'Value',
        kw_professional: 'Professional',
        kw_business: 'Business',
        kw_consulting: 'Consulting',
        kw_trust: 'Trust',
        kw_assessment: 'Assessment',
        kw_planning: 'Planning',
        kw_steady: 'Steady',
        kw_global: 'Global',
        kw_bridge: 'Bridge',
        
        // Core Values Section
        values_subtitle: 'Our Values',
        values_title: 'Core Values',
        values_desc: 'The principles and standards we consistently uphold',
        value_1_title: 'Compliance',
        value_1_text: 'Adhering to laws, regulations, and business ethics with a responsible approach.',
        value_2_title: 'Reliability',
        value_2_text: 'Prioritizing truthful information and dependable results to build lasting trust.',
        value_3_title: 'Steady Progress',
        value_3_text: 'Carefully managing risks and uncertainties, pursuing sustainable growth.',
        value_4_title: 'Transparency & Trust',
        value_4_text: 'Honest and transparent communication, respecting partners and team members.',
        
        // Company Info Section
        company_subtitle: 'Top Message',
        company_title: 'Exploring Global Development<br>with Steady Steps',
        company_quote: '"Long-term value comes from diligence, transparency, and mutual trust.<br>We are committed to building a solid bridge for China-Japan business value."',
        company_message: 'Mirai Corporation starts from specific projects and client needs, providing services including product overseas expansion support, channel and procurement collaboration, localization operations, and market entry consulting. We steadily accumulate experience and capabilities through practice. We look forward to working with you to create a future full of possibilities.',
        company_position: 'Representative Director',
        
        // Business Section
        business_subtitle: 'Our Business',
        business_title: 'Core Business Areas',
        business_desc: 'Dual-driven by hands-on practice and consulting collaboration, providing comprehensive cross-border support.',
        biz_1_title: 'Cross-border Trading Practice',
        biz_1_desc: 'Entering the Japanese market firsthand, taking on full-chain risks in product selection, channels, and fulfillment. Through small-scale, reviewable practice operations, we gain real transaction data and consumer feedback.',
        biz_1_point_1: 'Risk validation in real trading environments',
        biz_1_point_2: 'First-hand consumer feedback accumulation',
        biz_1_point_3: 'Practical experience in full-chain fulfillment',
        biz_2_title: 'China-Japan Business Advisory',
        biz_2_desc: 'Based on experience accumulated from cross-border practice, we provide lightweight, actionable consulting and collaboration support, connecting needs and translating business structures.',
        biz_2_point_1: 'Market entry assessment and strategy formulation',
        biz_2_point_2: 'Pilot operation accompaniment services',
        biz_2_point_3: 'Local communication and information support',
        btn_learn_more: 'Learn More',
        
        // Cases Section
        cases_subtitle: 'Service Cases',
        cases_title: 'Case Studies',
        case_1_title: 'Consumer Electronics Brand Expansion',
        case_1_desc: 'Assisted brand in formulating Japan market strategy, completing first product launch within 6 months.',
        case_2_title: 'Lifestyle Goods Supply Chain Optimization',
        case_2_desc: 'Optimized logistics routes, reducing procurement costs by 15% and delivery time by 20%.',
        case_3_title: 'IP Derivative Cross-border Sales',
        case_3_desc: 'Introduced popular Chinese IP derivatives, validating market reception through pop-up stores.',
        case_4_title: 'SaaS Product Research',
        case_4_desc: 'In-depth user interviews and competitive analysis, providing data support for product iteration.',
        btn_view_more: 'View More Cases',
        
        // Company Profile Section
        profile_subtitle: 'Company Profile',
        profile_title: 'Company Overview',
        profile_name_label: 'Company Name',
        profile_name_value: 'Mirai Corporation',
        profile_founded_label: 'Founded',
        profile_founded_value: '2024',
        profile_address_label: 'Location',
        profile_address_value: '2-37-5 Yoga, Setagaya-ku, Tokyo',
        profile_contact_label: 'Contact',
        
        // Map Fallback
        map_fallback_title: 'Office Location',
        map_fallback_btn: 'Open in Google Maps',
        
        // Footer
        footer_business_title: 'Business',
        footer_biz_1: 'Cross-border Trading',
        footer_biz_2: 'Business Advisory',
        footer_info_title: 'Company Info',
        footer_about: 'About Us',
        footer_cases: 'Case Studies',
        footer_guidelines: 'Guidelines',
        footer_contact: 'Contact',
        footer_copyright: '© 2024 Mirai Corporation. All Rights Reserved.',
        
        // Language Names
        lang_zh: '中文',
        lang_ja: '日本語',
        lang_en: 'English',
        
        // Business Page
        biz_page_title: 'Business',
        biz_page_subtitle: 'Our Business',
        biz_breadcrumb: 'Business',
        biz_trading_subtitle: 'Trading in Practice',
        biz_trading_title: 'Cross-border Trading Practice',
        biz_trading_intro: 'Operating projects in the Japanese market firsthand, taking on risks in product selection, channels, and fulfillment to gain real transaction data and consumer feedback.',
        biz_trading_desc: 'We participate in the Japanese domestic market trading environment through self-operation, taking on business responsibilities and risks in product selection, channels, logistics, and fulfillment. Through small-scale, reviewable practice operations, we deepen our understanding of price structures, product compatibility, and risk boundaries.',
        biz_trading_value_title: 'Core Value',
        biz_advisory_subtitle: 'China–Japan Business Advisory',
        biz_advisory_title: 'China-Japan Business Advisory',
        biz_advisory_intro: 'Based on experience accumulated from cross-border practice, we provide lightweight, actionable consulting and collaboration support.',
        biz_advisory_desc: 'For enterprises evaluating entry into the Japanese market or in the exploration and pilot operation stage, we connect needs, translate business structures, and reduce trial-and-error costs.',
        biz_advisory_target_title: 'Target Enterprises',
        biz_advisory_target_1: 'Evaluating Japan market entry',
        biz_advisory_target_2: 'Validating demand and pricing',
        biz_advisory_target_3: 'Phased small-scale pilot operations',
        biz_advisory_target_4: 'Reviewing existing plans and risks',
        biz_advisory_service_title: 'Service Forms',
        biz_advisory_service_1: 'Project-based consulting',
        biz_advisory_service_2: 'Full-process accompaniment',
        biz_advisory_service_3: 'Decision support and consensus building',
        biz_advisory_service_4: 'Local communication assistance',
        
        // Cases Page
        cases_page_title: 'Case Studies',
        cases_page_subtitle: 'Service Cases',
        cases_breadcrumb: 'Cases',
        cases_intro: 'We have helped numerous enterprises achieve value connection in the China-Japan market.<br>Below are some representative service cases.',
        case_tag_consulting: 'Full Consulting',
        case_tag_supply: 'Supply Chain',
        case_tag_trading: 'Self-operated',
        case_tag_research: 'Market Research',
        case_1_full_title: 'Consumer Electronics Brand Japan Market Entry',
        case_1_full_desc: 'Assisted a leading consumer electronics brand in formulating Japan market entry strategy. From competitive analysis and channel planning to compliance certification support, we provided full accompaniment from 0 to 1. Successfully completed the first product launch within 6 months and entered major electronics retail stores.',
        case_2_full_title: 'Lifestyle Goods Supply Chain Optimization',
        case_2_full_desc: 'Restructured the China supply chain for a Japanese domestic home goods brand. Through selecting quality factories, establishing QC standards, and optimizing logistics routes, we helped reduce procurement costs by 15% and shorten delivery cycles by 20%.',
        case_3_full_title: 'IP Derivative Cross-border Self-operation',
        case_3_full_desc: 'Introduced popular Chinese IP derivatives to the Japanese market through self-operation. Handled product selection, import customs clearance, and local fulfillment. Validated IP reception among Japanese youth through social media marketing combined with pop-up stores.',
        case_4_full_title: 'SaaS Product Localization Research',
        case_4_full_desc: 'Conducted Japan market feasibility research for an enterprise SaaS software. Performed in-depth user interviews and competitive feature comparisons, identified key localization requirement differences, and provided critical data support for product iteration and pricing strategy.',
        
        // Guidelines Page
        guidelines_page_title: 'Guidelines',
        guidelines_page_subtitle: 'Action Guidelines',
        guidelines_breadcrumb: 'Guidelines',
        guidelines_intro: 'Mirai Corporation upholds <span class="highlight">compliance, integrity, and steady progress</span> as fundamental principles in cross-border practice and collaborative business.<br>We follow these five action guidelines:',
        guideline_1_title: 'Compliance with Laws and Business Rules',
        guideline_1_desc: 'Always prioritizing compliance, conducting all business activities with a responsible attitude, and maintaining commercial order.',
        guideline_2_title: 'Emphasis on Truth and Reliability',
        guideline_2_desc: 'In self-operation and consulting support, we value information authenticity, process compliance, and result reliability—no exaggeration, no concealment.',
        guideline_3_title: 'Steadiness and Sustainability',
        guideline_3_desc: 'Carefully managing risks and uncertainties, not pursuing short-term explosive growth, but advancing projects and collaborations at a sustainable pace.',
        guideline_4_title: 'Honest and Transparent Communication',
        guideline_4_desc: 'Valuing communication with clients and partners, building trust relationships based on honesty and transparency, ensuring information symmetry.',
        guideline_5_title: 'Respect for Team and Individuals',
        guideline_5_desc: 'Respecting individual differences and work rhythms of team members, fostering a secure, collaborative, and healthy work environment to inspire creativity.',
        
        // Contact Page
        contact_page_title: 'Contact Us',
        contact_page_subtitle: 'Contact Us',
        contact_breadcrumb: 'Contact',
        contact_intro: 'Whether for business inquiries or partnership discussions, we look forward to hearing from you.<br>Please fill out the form below and we will contact you as soon as possible.',
        contact_address_label: 'Address',
        contact_email_label: 'Email',
        contact_hours_label: 'Office Hours',
        contact_hours_value: 'Monday - Friday 9:00 - 18:00',
        contact_hours_note: '(Excluding Japanese national holidays)',
        form_name_label: 'Name',
        form_name_placeholder: 'Please enter your name',
        form_company_label: 'Company',
        form_company_placeholder: 'Please enter company name',
        form_email_label: 'Email Address',
        form_email_placeholder: 'example@domain.com',
        form_subject_label: 'Subject',
        form_subject_placeholder: 'Please enter inquiry subject',
        form_message_label: 'Message',
        form_message_placeholder: 'Please enter your detailed requirements or inquiry...',
        form_submit: 'Send Inquiry',
        form_required: '*',
        form_contact_label: 'Contact',
        form_contact_placeholder: 'Phone number or email (either one)',
        form_contact_hint: 'Please provide your phone number or email for us to reach you',
        form_privacy_notice: '🔒 Your information security is our top priority. We are committed to strictly protecting your personal information and will never disclose it to any third party or use it for other commercial purposes.',
        form_success_title: 'Submitted Successfully!',
        form_success_message: 'Thank you for your inquiry. We will contact you as soon as possible.',
        form_success_btn: 'OK',
        map_office_title: 'Office Location',
        map_view_btn: 'View on Google Maps'
    }
};

// Current language (default: Chinese)
let currentLang = localStorage.getItem('lang') || 'zh-CN';

/**
 * Get translation for a key
 */
function t(key) {
    return translations[currentLang]?.[key] || translations['zh-CN'][key] || key;
}

/**
 * Switch language
 */
function switchLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        
        // Only update text content if element has no child elements to preserve
        // (except for elements that intentionally contain HTML like <br> tags)
        if (el.children.length === 0 || translation.includes('<br>') || translation.includes('<span')) {
            el.innerHTML = translation;
        } else {
            // For elements with children, only update the text node
            el.textContent = translation;
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        el.placeholder = translation;
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh-CN' ? 'zh' : lang;
    
    // Update active state in language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Dispatch custom event for any additional updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Initialize language system
 */
function initLanguage() {
    // Apply saved language on page load
    switchLanguage(currentLang);
    
    // Bind language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage(btn.dataset.lang);
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguage);
