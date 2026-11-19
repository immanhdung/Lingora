// vocabularyData.ts - High-Yield Authentic 1,000+ Categorized Vocabulary Bank
// Generated automatically for Lingora English Learning Platform

export interface WordItem {
  id: string;
  topicId: string;
  word: string;
  phonetic: string;
  partOfSpeech: 'Noun' | 'Verb' | 'Adj' | 'Adv' | 'Phrase';
  difficultyLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  meaningVi: string;
  definitionEn: string;
  exampleEn: string;
  exampleVi: string;
  synonyms: string[];
}

export interface VocabularyTopic {
  id: string;
  title: string;
  slug: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  wordCount: number;
  words: WordItem[];
}

export const VOCABULARY_TOPICS: VocabularyTopic[] = [
  {
    "id": "toeic",
    "title": "TOEIC Chuyên Sâu",
    "slug": "toeic",
    "icon": "Briefcase",
    "color": "text-blue-500",
    "bgColor": "bg-blue-50 dark:bg-blue-950/40",
    "borderColor": "border-blue-200 dark:border-blue-800",
    "description": "Hợp đồng, đàm phán, thanh tra, hậu cần chuỗi cung ứng và quản trị nhân sự ETS",
    "wordCount": 101,
    "words": [
      {
        "id": "toeic-1",
        "word": "Negotiate",
        "phonetic": "/nəˈɡoʊ.ʃi.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Đàm phán, thương lượng hợp đồng",
        "definitionEn": "To discuss something in order to reach an agreement.",
        "exampleEn": "The procurement team managed to negotiate a 15% discount with the supplier.",
        "exampleVi": "Đội ngũ thu mua đã đàm phán thành công mức giảm giá 15% với nhà cung cấp.",
        "synonyms": [
          "Bargain",
          "Confer",
          "Debate"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-2",
        "word": "Compliance",
        "phonetic": "/kəmˈplaɪ.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự tuân thủ các quy định và tiêu chuẩn",
        "definitionEn": "The act of obeying an order, rule, or request.",
        "exampleEn": "Our factory operates in full compliance with international safety regulations.",
        "exampleVi": "Nhà máy của chúng tôi vận hành hoàn toàn tuân thủ các quy chuẩn an toàn quốc tế.",
        "synonyms": [
          "Adherence",
          "Conformity",
          "Obedience"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-3",
        "word": "Reimbursement",
        "phonetic": "/ˌriː.ɪmˈbɝːs.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản hoàn tiền công tác phí, chi phí bồi hoàn",
        "definitionEn": "The act of paying back money to someone who spent it for official business.",
        "exampleEn": "Please submit all receipts to accounting to claim your travel reimbursement.",
        "exampleVi": "Vui lòng nộp lại tất cả hóa đơn cho bộ phận kế toán để nhận tiền bồi hoàn công tác.",
        "synonyms": [
          "Repayment",
          "Compensation",
          "Refund"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-4",
        "word": "Warranty",
        "phonetic": "/ˈwɔːr.ən.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Giấy bảo hành, cam kết bảo hành sản phẩm",
        "definitionEn": "A written promise by a company that it will repair or replace a product.",
        "exampleEn": "The electronic equipment comes with a comprehensive two-year warranty.",
        "exampleVi": "Thiết bị điện tử đi kèm gói bảo hành toàn diện trong 2 năm.",
        "synonyms": [
          "Guarantee",
          "Contract",
          "Assurance"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-5",
        "word": "Inventory",
        "phonetic": "/ˈɪn.vən.tɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hàng tồn kho, bản kiểm kê hàng hóa",
        "definitionEn": "A detailed list or total quantity of goods in stock.",
        "exampleEn": "The warehouse conducts an inventory audit at the end of every quarter.",
        "exampleVi": "Kho hàng tiến hành kiểm kê lượng hàng tồn vào cuối mỗi quý.",
        "synonyms": [
          "Stock",
          "Supply",
          "Reserve"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-6",
        "word": "Audit",
        "phonetic": "/ˈɑː.dɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kiểm toán tài chính, thanh tra sổ sách",
        "definitionEn": "An official examination of the accounts or operational procedures of an organization.",
        "exampleEn": "The external audit confirmed that all financial statements were accurate.",
        "exampleVi": "Cuộc kiểm toán độc lập xác nhận rằng toàn bộ báo cáo tài chính đều chính xác.",
        "synonyms": [
          "Inspection",
          "Examination",
          "Review"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-7",
        "word": "Procurement",
        "phonetic": "/prəˈkjʊr.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Quy trình thu mua vật tư và thiết bị",
        "definitionEn": "The process of getting supplies or services for business operations.",
        "exampleEn": "She was recently promoted to head of the global procurement department.",
        "exampleVi": "Cô ấy vừa được thăng chức lên vị trí trưởng phòng thu mua toàn cầu.",
        "synonyms": [
          "Purchasing",
          "Acquisition",
          "Sourcing"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-8",
        "word": "Specifications",
        "phonetic": "/ˌspes.ə.fəˈkeɪ.ʃənz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thông số kỹ thuật chi tiết",
        "definitionEn": "A detailed description of how something should be designed, made, or done.",
        "exampleEn": "The new laptop model meets all the technical specifications requested by the client.",
        "exampleVi": "Mẫu máy tính xách tay mới đáp ứng toàn bộ các thông số kỹ thuật mà khách hàng yêu cầu.",
        "synonyms": [
          "Details",
          "Requirements",
          "Standards"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-9",
        "word": "Terminate",
        "phonetic": "/ˈtɝː.mə.neɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Chấm dứt hợp đồng, đình chỉ dịch vụ",
        "definitionEn": "To bring something to an end or to conclude officially.",
        "exampleEn": "Either party may terminate the lease agreement with a 30-day written notice.",
        "exampleVi": "Một trong hai bên có thể chấm dứt hợp đồng thuê với thông báo bằng văn bản trước 30 ngày.",
        "synonyms": [
          "End",
          "Cancel",
          "Conclude"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-10",
        "word": "Credential",
        "phonetic": "/krɪˈden.ʃəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chứng chỉ hành nghề, bằng cấp chuyên môn",
        "definitionEn": "A document or qualification proving someone's authority or competence.",
        "exampleEn": "The applicant possesses impressive academic credentials and strong leadership experience.",
        "exampleVi": "Ứng viên sở hữu bằng cấp học thuật ấn tượng và kinh nghiệm lãnh đạo vững vàng.",
        "synonyms": [
          "Qualification",
          "Certification",
          "Accreditation"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-11",
        "word": "Merger",
        "phonetic": "/ˈmɝː.dʒɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự sáp nhập giữa hai công ty",
        "definitionEn": "The combining of two or more commercial companies into one.",
        "exampleEn": "The merger between the two airline giants will create the largest fleet in the region.",
        "exampleVi": "Vụ sáp nhập giữa hai tập đoàn hàng không lớn sẽ tạo nên đội bay lớn nhất khu vực.",
        "synonyms": [
          "Amalgamation",
          "Union",
          "Consolidation"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-12",
        "word": "Acquisition",
        "phonetic": "/ˌæk.wəˈzɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thương vụ thâu tóm, mua lại doanh nghiệp",
        "definitionEn": "The process of getting or buying something, especially a company or property.",
        "exampleEn": "The acquisition of the tech startup will help expand our cloud offerings.",
        "exampleVi": "Thương vụ thâu tóm công ty khởi nghiệp công nghệ sẽ giúp mở rộng các dịch vụ đám mây của chúng tôi.",
        "synonyms": [
          "Purchase",
          "Takeover",
          "Procurement"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-13",
        "word": "Vendor",
        "phonetic": "/ˈven.dɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nhà cung cấp hàng hóa hoặc dịch vụ",
        "definitionEn": "A person or company offering something for sale.",
        "exampleEn": "We must select a reliable catering vendor for the upcoming annual gala dinner.",
        "exampleVi": "Chúng ta phải chọn một nhà cung cấp tiệc uy tín cho đêm tiệc gala thường niên sắp tới.",
        "synonyms": [
          "Supplier",
          "Seller",
          "Merchant"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-14",
        "word": "Feasible",
        "phonetic": "/ˈfiː.zə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Khả thi, có thể thực hiện được",
        "definitionEn": "Able to be made, done, or achieved easily or conveniently.",
        "exampleEn": "The board agreed that the marketing strategy was economically feasible.",
        "exampleVi": "Hội đồng quản trị đồng ý rằng chiến lược tiếp thị là hoàn toàn khả thi về mặt kinh tế.",
        "synonyms": [
          "Viable",
          "Practicable",
          "Workable"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-15",
        "word": "Subcontractor",
        "phonetic": "/ˈsʌbˌkɑːn.træk.tɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhà thầu phụ",
        "definitionEn": "A person or firm that undertakes a contract from a primary contractor.",
        "exampleEn": "Electrical wiring throughout the skyscraper was completed by an experienced subcontractor.",
        "exampleVi": "Hệ thống dây điện trên toàn bộ tòa nhà chọc trời được hoàn thành bởi một nhà thầu phụ giàu kinh nghiệm.",
        "synonyms": [
          "Secondary contractor",
          "Specialist vendor"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-16",
        "word": "Invoice",
        "phonetic": "/ˈɪn.vɔɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hóa đơn thanh toán tài chính",
        "definitionEn": "A list of goods sent or services provided, with a statement of the sum due.",
        "exampleEn": "The invoice must be settled within thirty days of the billing date.",
        "exampleVi": "Hóa đơn phải được thanh toán trong vòng 30 ngày kể từ ngày xuất hóa đơn.",
        "synonyms": [
          "Bill",
          "Statement",
          "Account"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-17",
        "word": "Delegate",
        "phonetic": "/ˈdel.ə.ɡeɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Giao phó công việc, ủy quyền cho cấp dưới",
        "definitionEn": "To entrust a task or responsibility to another person.",
        "exampleEn": "A great project manager knows how to delegate responsibilities effectively.",
        "exampleVi": "Một người quản lý dự án giỏi biết cách giao phó trách nhiệm một cách hiệu quả.",
        "synonyms": [
          "Assign",
          "Entrust",
          "Allocate"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-18",
        "word": "Appraisal",
        "phonetic": "/əˈpreɪ.zəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đánh giá năng lực nhân viên, thẩm định giá",
        "definitionEn": "An assessment or evaluation of someone's performance or the value of property.",
        "exampleEn": "Annual performance appraisals will begin next week for all engineering staff.",
        "exampleVi": "Kỳ đánh giá hiệu suất công việc hàng năm sẽ bắt đầu vào tuần tới cho toàn bộ kỹ sư.",
        "synonyms": [
          "Evaluation",
          "Assessment",
          "Review"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-19",
        "word": "Compensation",
        "phonetic": "/ˌkɑːm.penˈseɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chế độ đãi ngộ, thù lao hoặc khoản đền bù",
        "definitionEn": "Money awarded or paid to someone in exchange for labor or as recompense for loss.",
        "exampleEn": "The company offers competitive compensation, including health insurance and annual stock options.",
        "exampleVi": "Công ty đưa ra mức thù lao cạnh tranh, bao gồm bảo hiểm y tế và quyền chọn mua cổ phiếu hàng năm.",
        "synonyms": [
          "Remuneration",
          "Salary",
          "Benefit package"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-20",
        "word": "Defective",
        "phonetic": "/dɪˈfek.tɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Bị lỗi, có khuyết tật sản xuất",
        "definitionEn": "Imperfect or faulty; not functioning properly.",
        "exampleEn": "Customers can immediately return any defective merchandise within 14 business days.",
        "exampleVi": "Khách hàng có thể đổi trả ngay lập tức bất kỳ sản phẩm nào bị lỗi trong vòng 14 ngày làm việc.",
        "synonyms": [
          "Faulty",
          "Flawed",
          "Damaged"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-21",
        "word": "Logistics",
        "phonetic": "/ləˈdʒɪs.tɪks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hậu cần vận tải và chuỗi cung ứng",
        "definitionEn": "The detailed organization and implementation of a complex operation involving transport.",
        "exampleEn": "Our logistics network guarantees next-day delivery to major cities.",
        "exampleVi": "Mạng lưới hậu cần của chúng tôi cam kết giao hàng trong ngày hôm sau tới các thành phố lớn.",
        "synonyms": [
          "Supply chain",
          "Transport management",
          "Distribution"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-22",
        "word": "Discrepancy",
        "phonetic": "/dɪˈskrep.ən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự sai lệch, chênh lệch không khớp số liệu",
        "definitionEn": "A lack of compatibility or similarity between two or more facts or numbers.",
        "exampleEn": "There is a noticeable discrepancy between the warehouse count and the sales ledger.",
        "exampleVi": "Có sự sai lệch đáng chú ý giữa số lượng kiểm kho và sổ cái doanh số.",
        "synonyms": [
          "Inconsistency",
          "Difference",
          "Variance"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-23",
        "word": "Confidential",
        "phonetic": "/ˌkɑːn.fəˈden.ʃəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Bảo mật, thông tin tuyệt mật",
        "definitionEn": "Intended to be kept secret or private.",
        "exampleEn": "All staff must sign a non-disclosure agreement to protect confidential company data.",
        "exampleVi": "Toàn bộ nhân viên phải ký cam kết bảo mật nhằm bảo vệ dữ liệu bí mật của công ty.",
        "synonyms": [
          "Private",
          "Secret",
          "Classified"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-24",
        "word": "Revenue",
        "phonetic": "/ˈrev.ə.nuː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Doanh thu của doanh nghiệp",
        "definitionEn": "Income, especially when of a company or organization of a substantial nature.",
        "exampleEn": "Third-quarter revenue exceeded Wall Street forecasts by approximately 12 percent.",
        "exampleVi": "Doanh thu quý ba đã vượt dự báo của Phố Wall khoảng 12%.",
        "synonyms": [
          "Income",
          "Earnings",
          "Proceeds"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-25",
        "word": "Turnover",
        "phonetic": "/ˈtɝːnˌoʊ.vɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tỷ lệ luân chuyển nhân sự hoặc doanh thu quay vòng",
        "definitionEn": "The rate at which employees leave a workforce and are replaced, or sales volume.",
        "exampleEn": "Improving company culture helped decrease employee turnover by thirty percent.",
        "exampleVi": "Cải thiện văn hóa doanh nghiệp đã giúp giảm tỷ lệ luân chuyển nhân viên đi 30%.",
        "synonyms": [
          "Attrition rate",
          "Replacement rate"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-26",
        "word": "Restructure",
        "phonetic": "/ˌriːˈstrʌk.tʃɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Tái cơ cấu bộ máy tổ chức hoặc tài chính",
        "definitionEn": "Organize differently in order to improve efficiency or profitability.",
        "exampleEn": "The corporation plans to restructure its European operations to cut overhead costs.",
        "exampleVi": "Tập đoàn có kế hoạch tái cơ cấu các chi nhánh tại châu Âu để cắt giảm chi phí vận hành.",
        "synonyms": [
          "Reorganize",
          "Overhaul",
          "Realine"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-27",
        "word": "Obligation",
        "phonetic": "/ˌɑː.bləˈɡeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nghĩa vụ pháp lý hoặc hợp đồng",
        "definitionEn": "An act or course of action to which a person is morally or legally bound.",
        "exampleEn": "The contractor failed to fulfill its contractual obligations on schedule.",
        "exampleVi": "Nhà thầu đã không thể hoàn thành các nghĩa vụ trong hợp đồng đúng tiến độ.",
        "synonyms": [
          "Duty",
          "Commitment",
          "Responsibility"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-28",
        "word": "Expedite",
        "phonetic": "/ˈek.spə.daɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Đẩy nhanh tiến độ, xúc tiến nhanh chóng",
        "definitionEn": "Make an action or process happen sooner or be accomplished more quickly.",
        "exampleEn": "We paid an extra fee to expedite the shipping of emergency server replacement parts.",
        "exampleVi": "Chúng tôi đã trả thêm một khoản phí để xúc tiến vận chuyển nhanh phụ tùng máy chủ khẩn cấp.",
        "synonyms": [
          "Accelerate",
          "Speed up",
          "Hasten"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-29",
        "word": "Overdue",
        "phonetic": "/ˌoʊ.vɚˈduː/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Quá hạn thanh toán hoặc trả nợ",
        "definitionEn": "Not having arrived, happened, or been done by the expected time.",
        "exampleEn": "Our accounts receivable department sent a stern reminder for the overdue invoice.",
        "exampleVi": "Bộ phận thu nợ của chúng tôi đã gửi thư nhắc nhở nghiêm khắc đối với hóa đơn quá hạn.",
        "synonyms": [
          "Late",
          "Unpaid",
          "Delayed"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-30",
        "word": "Quota",
        "phonetic": "/ˈkwoʊ.t̬ə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hạn ngạch sản xuất hoặc chỉ tiêu bán hàng",
        "definitionEn": "A fixed minimum or maximum number of a particular group of people or things.",
        "exampleEn": "The sales team surpassed their monthly revenue quota ahead of schedule.",
        "exampleVi": "Đội ngũ kinh doanh đã vượt chỉ tiêu doanh số tháng trước thời hạn quy định.",
        "synonyms": [
          "Target",
          "Allocation",
          "Share"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-31",
        "word": "Consolidate",
        "phonetic": "/kənˈsɑː.lə.deɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Hợp nhất, củng cố vị thế",
        "definitionEn": "To combine several things into a single more effective whole.",
        "exampleEn": "The company plans to consolidate its regional offices into one headquarters.",
        "exampleVi": "Công ty dự kiến hợp nhất các văn phòng khu vực thành một trụ sở chính.",
        "synonyms": [
          "Combine",
          "Merge",
          "Unify"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-32",
        "word": "Subsidiary",
        "phonetic": "/səbˈsɪd.i.er.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Công ty con trực thuộc",
        "definitionEn": "A company controlled by a holding or parent company.",
        "exampleEn": "The Japanese multinational operates subsidiaries in over twenty countries.",
        "exampleVi": "Tập đoàn đa quốc gia Nhật Bản sở hữu các công ty con tại hơn 20 quốc gia.",
        "synonyms": [
          "Branch",
          "Affiliate",
          "Offshoot"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-33",
        "word": "Deficit",
        "phonetic": "/ˈdef.ə.sɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thâm hụt cán cân ngân sách",
        "definitionEn": "The amount by which something, especially a sum of money, is too small.",
        "exampleEn": "The proposed budget aims to cut the trade deficit by half within two years.",
        "exampleVi": "Bản dự thảo ngân sách hướng tới việc cắt giảm một nửa mức thâm hụt thương mại trong 2 năm.",
        "synonyms": [
          "Shortfall",
          "Deficiency",
          "Loss"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-34",
        "word": "Surplus",
        "phonetic": "/ˈsɝː.pləs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thặng dư tài chính, phần dư thừa",
        "definitionEn": "An amount of something left over when requirements have been met.",
        "exampleEn": "The strong holiday sales resulted in a record financial surplus for the quarter.",
        "exampleVi": "Doanh thu kỳ nghỉ lễ vượt trội đã mang lại mức thặng dư tài chính kỷ lục cho quý này.",
        "synonyms": [
          "Excess",
          "Overabundance",
          "Surfeit"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-35",
        "word": "Solicit",
        "phonetic": "/səˈlɪs.ɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Kêu gọi đóng góp, mời thầu",
        "definitionEn": "To ask for or try to obtain something from someone.",
        "exampleEn": "The municipality released a tender to solicit bids from qualified contractors.",
        "exampleVi": "Chính quyền thành phố đã phát hành hồ sơ mời thầu từ các nhà thầu đủ điều kiện.",
        "synonyms": [
          "Request",
          "Seek",
          "Petition"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-36",
        "word": "Endorsement",
        "phonetic": "/ɪnˈdɔːrs.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự bảo chứng thương hiệu, ủng hộ",
        "definitionEn": "An act of giving one's public approval or support to someone or something.",
        "exampleEn": "The celebrity endorsement generated millions of pre-orders for the new smartphone.",
        "exampleVi": "Sự bảo chứng của người nổi tiếng đã đem lại hàng triệu đơn đặt trước cho mẫu điện thoại mới.",
        "synonyms": [
          "Backing",
          "Approval",
          "Sponsorship"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-37",
        "word": "Tenant",
        "phonetic": "/ˈten.ənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Người thuê nhà, văn phòng",
        "definitionEn": "A person who occupies land or property rented from a landlord.",
        "exampleEn": "All tenants in the commercial building must adhere to fire drill procedures.",
        "exampleVi": "Tất cả khách thuê trong tòa nhà thương mại phải tuân thủ quy trình diễn tập phòng cháy.",
        "synonyms": [
          "Renter",
          "Occupant",
          "Lessee"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-38",
        "word": "Lease",
        "phonetic": "/liːs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hợp đồng cho thuê tài sản dài hạn",
        "definitionEn": "A legal contract conveying land, property, or services to another for a specified time.",
        "exampleEn": "The enterprise signed a ten-year lease for three floors in the central business district.",
        "exampleVi": "Doanh nghiệp đã ký hợp đồng thuê 10 năm cho 3 tầng tại khu vực trung tâm thương mại.",
        "synonyms": [
          "Charter",
          "Rental contract",
          "Hire"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-39",
        "word": "Liaison",
        "phonetic": "/liˈeɪ.zɑːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Người đầu mối liên lạc giữa các bộ phận",
        "definitionEn": "Communication or cooperation which facilitates a close working relationship.",
        "exampleEn": "She acted as the primary liaison between our software team and the client.",
        "exampleVi": "Cô ấy đóng vai trò là đầu mối liên lạc chính giữa đội ngũ phần mềm và khách hàng.",
        "synonyms": [
          "Intermediary",
          "Go-between",
          "Coordinator"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-40",
        "word": "Arbitration",
        "phonetic": "/ˌɑːr.bəˈtreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự phân xử thông qua trọng tài thương mại",
        "definitionEn": "The use of an arbitrator to settle a dispute.",
        "exampleEn": "The contractual disagreement was ultimately resolved through international arbitration.",
        "exampleVi": "Bất đồng hợp đồng cuối cùng đã được giải quyết thông qua trọng tài thương mại quốc tế.",
        "synonyms": [
          "Adjudication",
          "Mediation",
          "Settlement"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-41",
        "word": "Clause",
        "phonetic": "/klɑːz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Điều khoản trong văn bản pháp lý",
        "definitionEn": "A particular and separate article, stipulation, or proviso in a treaty or contract.",
        "exampleEn": "Pay close attention to the confidentiality clause before signing the employment contract.",
        "exampleVi": "Hãy chú ý kỹ đến điều khoản bảo mật trước khi ký hợp đồng lao động.",
        "synonyms": [
          "Provision",
          "Stipulation",
          "Section"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-42",
        "word": "Stipulate",
        "phonetic": "/ˈstɪp.jə.leɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Quy định rõ ràng thành văn",
        "definitionEn": "Demand or specify a requirement, typically as part of a bargain or agreement.",
        "exampleEn": "The agreement stipulates that all deliverables must be submitted by December 1st.",
        "exampleVi": "Thỏa thuận quy định rõ rằng mọi sản phẩm bàn giao phải được nộp trước ngày 1 tháng 12.",
        "synonyms": [
          "Specify",
          "Prescribe",
          "State"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-43",
        "word": "Default",
        "phonetic": "/dɪˈfɑːlt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Vỡ nợ, không trả được nợ đúng hạn",
        "definitionEn": "Fail to fulfill an obligation, especially to repay a loan.",
        "exampleEn": "Borrowers who default on their debt obligations face severe credit rating penalties.",
        "exampleVi": "Người vay vỡ nợ không trả được các nghĩa vụ tài chính sẽ đối mặt với việc bị hạ điểm tín dụng nghiêm trọng.",
        "synonyms": [
          "Fail to pay",
          "Renege",
          "Lapse"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-44",
        "word": "Incentive",
        "phonetic": "/ɪnˈsen.tɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chính sách khuyến khích, tiền thưởng hiệu suất",
        "definitionEn": "A thing that motivates or encourages someone to do something.",
        "exampleEn": "Performance bonuses provide a powerful incentive for engineers to innovate rapidly.",
        "exampleVi": "Tiền thưởng theo hiệu suất mang lại động lực to lớn giúp các kỹ sư đổi mới sáng tạo nhanh chóng.",
        "synonyms": [
          "Inducement",
          "Motivation",
          "Stimulus"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-45",
        "word": "Fringe Benefit",
        "phonetic": "/ˈfrɪndʒ ˌben.ə.fɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phúc lợi bổ sung ngoài lương",
        "definitionEn": "An extra benefit supplementing an employee's salary, for example a company car.",
        "exampleEn": "Fringe benefits such as gym memberships and free meals boost employee morale.",
        "exampleVi": "Các phúc lợi ngoài lương như thẻ tập thể hình và bữa ăn miễn phí giúp nâng cao tinh thần nhân viên.",
        "synonyms": [
          "Perk",
          "Extra privilege",
          "Add-on"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-46",
        "word": "Apprentice",
        "phonetic": "/əˈpren.tɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Người học việc, tập sự",
        "definitionEn": "A person who is learning a trade from a skilled employer.",
        "exampleEn": "The senior technician is training two promising young apprentices.",
        "exampleVi": "Kỹ thuật viên cao cấp đang trực tiếp hướng dẫn hai bạn học việc trẻ đầy triển vọng.",
        "synonyms": [
          "Trainee",
          "Intern",
          "Learner"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-47",
        "word": "Roster",
        "phonetic": "/ˈrɑː.stɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bảng phân công ca làm việc",
        "definitionEn": "A list or plan showing turns of duty or leave for individuals or groups in an organization.",
        "exampleEn": "The hospital manager updated the weekend duty roster for on-call nurses.",
        "exampleVi": "Quản lý bệnh viện đã cập nhật bảng phân công trực ban cuối tuần cho các điều dưỡng viên.",
        "synonyms": [
          "Schedule",
          "Timetable",
          "Duty list"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-48",
        "word": "Probation",
        "phonetic": "/proʊˈbeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thời gian thử việc",
        "definitionEn": "A period of time during which someone's ability or fitness is tested.",
        "exampleEn": "After successfully completing her three-month probation, she was granted a permanent contract.",
        "exampleVi": "Sau khi hoàn thành xuất sắc 3 tháng thử việc, cô ấy đã được ký hợp đồng chính thức.",
        "synonyms": [
          "Trial period",
          "Test stage"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-49",
        "word": "Punctuality",
        "phonetic": "/ˌpʌŋk.tʃuˈæl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tính đúng giờ giấc",
        "definitionEn": "The fact or quality of being on time.",
        "exampleEn": "Punctuality and reliability are essential attributes for any professional consultant.",
        "exampleVi": "Đúng giờ và đáng tin cậy là những phẩm chất cốt lõi của bất kỳ chuyên viên tư vấn chuyên nghiệp nào.",
        "synonyms": [
          "Promptness",
          "Timeliness"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-50",
        "word": "Remittance",
        "phonetic": "/rɪˈmɪt.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Số tiền chuyển khoản thanh toán",
        "definitionEn": "A sum of money sent in payment or as a gift.",
        "exampleEn": "Please ensure that your remittance includes the corresponding invoice reference code.",
        "exampleVi": "Xin hãy đảm bảo rằng khoản tiền chuyển khoản của bạn ghi kèm mã tham chiếu hóa đơn tương ứng.",
        "synonyms": [
          "Payment",
          "Transfer",
          "Dispatch"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-51",
        "word": "Collateral",
        "phonetic": "/kəˈlæt̬.ɚ.əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài sản thế chấp ngân hàng",
        "definitionEn": "Something pledged as security for repayment of a loan.",
        "exampleEn": "The bank accepted the commercial real estate property as collateral for the business loan.",
        "exampleVi": "Ngân hàng đã chấp thuận bất động sản thương mại làm tài sản thế chấp cho khoản vay doanh nghiệp.",
        "synonyms": [
          "Security",
          "Guarantee",
          "Pledge"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-52",
        "word": "Depreciation",
        "phonetic": "/dɪˌpriː.ʃiˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khấu hao tài sản cố định qua thời gian",
        "definitionEn": "A reduction in the value of an asset with the passage of time.",
        "exampleEn": "Accelerated depreciation allows enterprises to write off machinery costs more rapidly.",
        "exampleVi": "Khấu hao nhanh cho phép doanh nghiệp trích chi phí máy móc một cách nhanh chóng hơn.",
        "synonyms": [
          "Devaluation",
          "Wear and tear",
          "Discount"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-53",
        "word": "Overhead",
        "phonetic": "/ˈoʊ.vɚ.hed/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chi phí vận hành cố định",
        "definitionEn": "The regular and necessary costs of running a business, such as rent, heating, and taxes.",
        "exampleEn": "Transitioning to a hybrid remote model helped cut our office overhead costs by 40%.",
        "exampleVi": "Chuyển sang mô hình làm việc kết hợp từ xa đã giúp giảm 40% chi phí vận hành văn phòng.",
        "synonyms": [
          "Operating expenses",
          "Fixed costs",
          "Running costs"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-54",
        "word": "Merchandising",
        "phonetic": "/ˈmɝː.tʃən.daɪ.zɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hoạt động trưng bày và tiếp thị hàng hóa",
        "definitionEn": "The activity of promoting the sale of goods, especially by their presentation in stores.",
        "exampleEn": "Effective visual merchandising significantly increases in-store impulsive purchases.",
        "exampleVi": "Việc trưng bày hàng hóa trực quan hiệu quả giúp tăng đáng kể lượng mua sắm ngẫu hứng tại cửa hàng.",
        "synonyms": [
          "Marketing display",
          "Retailing",
          "Promotion"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-55",
        "word": "Consignment",
        "phonetic": "/kənˈsaɪn.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lô hàng ký gửi phân phối",
        "definitionEn": "A batch of goods destined for or delivered to someone.",
        "exampleEn": "A large consignment of medical equipment arrived at the port this morning.",
        "exampleVi": "Một lô hàng thiết bị y tế lớn đã cập cảng vào sáng nay.",
        "synonyms": [
          "Shipment",
          "Batch",
          "Cargo"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-56",
        "word": "Affiliation",
        "phonetic": "/əˌfɪl.iˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự liên kết, gia nhập tổ chức",
        "definitionEn": "The state or process of affiliating or being affiliated with an organization.",
        "exampleEn": "Our medical clinic has an academic affiliation with the national university hospital.",
        "exampleVi": "Phòng khám y khoa của chúng tôi có mối liên kết học thuật với bệnh viện đại học quốc gia.",
        "synonyms": [
          "Association",
          "Alliance",
          "Partnership"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-57",
        "word": "Unanimous",
        "phonetic": "/juːˈnæn.ə.məs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nhất trí đồng lòng 100%",
        "definitionEn": "Fully in agreement; held or arrived at with everyone's consent.",
        "exampleEn": "The shareholders passed a unanimous vote to appoint the new Chief Executive Officer.",
        "exampleVi": "Các cổ đông đã bỏ phiếu nhất trí tuyệt đối để bổ nhiệm Tổng giám đốc điều hành mới.",
        "synonyms": [
          "Undivided",
          "Harmonious",
          "In accord"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-58",
        "word": "Discretionary",
        "phonetic": "/dɪˈskreʃ.ən.er.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tùy ý sử dụng theo quyết định riêng",
        "definitionEn": "Available for use at the discretion of the user, not predetermined by law.",
        "exampleEn": "The management holds a discretionary fund to sponsor internal employee innovation projects.",
        "exampleVi": "Ban quản lý duy trì một quỹ tùy ý sử dụng để tài trợ cho các dự án đổi mới sáng tạo nội bộ.",
        "synonyms": [
          "Optional",
          "Voluntary",
          "Flexible"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-59",
        "word": "Indemnify",
        "phonetic": "/ɪnˈdem.nə.faɪ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Bồi thường tổn thất tài chính",
        "definitionEn": "Compensate someone for harm or loss, or secure against legal liability.",
        "exampleEn": "The insurance contract indemnifies the homeowner against flood and earthquake damage.",
        "exampleVi": "Hợp đồng bảo hiểm bồi thường cho chủ nhà trước mọi thiệt hại do lũ lụt và động đất.",
        "synonyms": [
          "Compensate",
          "Reimburse",
          "Insure"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-60",
        "word": "Severance",
        "phonetic": "/ˈsev.ɚ.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản tiền trợ cấp thôi việc",
        "definitionEn": "The act of ending a connection or relationship, or money paid on leaving employment.",
        "exampleEn": "Employees affected by the corporate downsizing received generous severance packages.",
        "exampleVi": "Những nhân sự bị ảnh hưởng bởi việc thu hẹp quy mô công ty đã nhận được gói trợ cấp thôi việc hậu hĩnh.",
        "synonyms": [
          "Discharge compensation",
          "Termination pay"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-61",
        "word": "Requisition",
        "phonetic": "/ˌrek.wəˈzɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phiếu yêu cầu cấp phát vật tư nội bộ",
        "definitionEn": "An official order laying claim to the use of property or supplies.",
        "exampleEn": "Please fill out a requisition slip if your department requires additional monitors.",
        "exampleVi": "Vui lòng điền vào phiếu yêu cầu cấp phát nếu phòng ban của bạn cần thêm màn hình làm việc.",
        "synonyms": [
          "Purchase order",
          "Request form",
          "Claim"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-62",
        "word": "Retain",
        "phonetic": "/rɪˈteɪn/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Giữ chân nhân tài, lưu giữ hồ sơ",
        "definitionEn": "Continue to have or keep possession of something.",
        "exampleEn": "The firm adopted flexible working hours to attract and retain top software talent.",
        "exampleVi": "Công ty đã áp dụng thời gian làm việc linh hoạt để thu hút và giữ chân nhân tài phần mềm hàng đầu.",
        "synonyms": [
          "Keep",
          "Hold",
          "Preserve"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-63",
        "word": "Statutory",
        "phonetic": "/ˈstætʃ.ə.tɔːr.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Theo luật định bắt buộc",
        "definitionEn": "Decided, controlled, or required by law.",
        "exampleEn": "Every employee is entitled to statutory maternity and sick leave benefits.",
        "exampleVi": "Mỗi người lao động đều được hưởng quyền lợi nghỉ thai sản và nghỉ ốm theo đúng luật định.",
        "synonyms": [
          "Mandatory",
          "Legal",
          "Obligatory"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-64",
        "word": "Subsidize",
        "phonetic": "/ˈsʌb.sə.daɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trợ cấp ngân sách, hỗ trợ giá",
        "definitionEn": "Support an organization or activity financially.",
        "exampleEn": "The government agreed to subsidize public transport to reduce traffic congestion.",
        "exampleVi": "Chính phủ đã đồng ý trợ cấp chi phí giao thông công cộng nhằm giảm ùn tắc giao thông.",
        "synonyms": [
          "Fund",
          "Underwrite",
          "Finance"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-65",
        "word": "Yield",
        "phonetic": "/jiːld/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lợi suất đầu tư, sản lượng thu hoạch",
        "definitionEn": "The full amount of an agricultural or industrial product, or financial return.",
        "exampleEn": "High-dividend stocks provide an attractive annual yield for retirement investors.",
        "exampleVi": "Cổ phiếu cổ tức cao đem lại lợi suất hàng năm hấp dẫn cho các nhà đầu tư hưu trí.",
        "synonyms": [
          "Return",
          "Profit",
          "Output"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-66",
        "word": "Tenure",
        "phonetic": "/ˈten.jɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nhiệm kỳ công tác, quyền biên chế trọn đời",
        "definitionEn": "The conditions or period under which land or buildings are held, or holding an office.",
        "exampleEn": "During his successful five-year tenure as director, company revenue doubled.",
        "exampleVi": "Trong suốt nhiệm kỳ 5 năm thành công với tư cách giám đốc, doanh thu công ty đã tăng gấp đôi.",
        "synonyms": [
          "Term of office",
          "Incumbency",
          "Period"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-67",
        "word": "Surveillance",
        "phonetic": "/sɚˈveɪ.ləns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hệ thống giám sát an ninh",
        "definitionEn": "Close observation, especially of a suspected spy or criminal.",
        "exampleEn": "High-resolution surveillance cameras were installed at all warehouse exits.",
        "exampleVi": "Các camera giám sát độ nét cao đã được lắp đặt tại tất cả các cửa ra của nhà kho.",
        "synonyms": [
          "Monitoring",
          "Observation",
          "Watch"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-68",
        "word": "Stringent",
        "phonetic": "/ˈstrɪn.dʒənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Nghiêm ngặt, chặt chẽ (tiêu chuẩn/quy định)",
        "definitionEn": "Strict, precise, and exacting rules or requirements.",
        "exampleEn": "Medical devices must satisfy stringent quality testing before receiving FDA approval.",
        "exampleVi": "Thiết bị y tế phải thỏa mãn các tiêu chuẩn kiểm nghiệm nghiêm ngặt trước khi được FDA cấp phép.",
        "synonyms": [
          "Rigorous",
          "Demanding",
          "Strict"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-69",
        "word": "Remuneration",
        "phonetic": "/rɪˌmjuː.nəˈreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thù lao công lao động",
        "definitionEn": "Money paid for work or a service.",
        "exampleEn": "Executive remuneration packages are closely tied to long-term stock performance.",
        "exampleVi": "Các gói thù lao dành cho cấp điều hành gắn liền mật thiết với kết quả cổ phiếu dài hạn.",
        "synonyms": [
          "Compensation",
          "Earnings",
          "Pay"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-70",
        "word": "Quorum",
        "phonetic": "/ˈkwɔːr.əm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Số lượng đại biểu tối thiểu để biểu quyết hợp lệ",
        "definitionEn": "The minimum number of members of an assembly that must be present at any of its meetings.",
        "exampleEn": "The shareholder assembly cannot vote on the resolution without reaching a legal quorum.",
        "exampleVi": "Đại hội đồng cổ đông không thể bỏ phiếu thông qua nghị quyết nếu chưa đạt túc số pháp lý tối thiểu.",
        "synonyms": [
          "Sufficient attendance",
          "Legal presence"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-71",
        "word": "Nullify",
        "phonetic": "/ˈnʌl.ə.faɪ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Làm mất hiệu lực pháp lý, hủy bỏ",
        "definitionEn": "Make legally null and void; invalidate.",
        "exampleEn": "The court ruled to nullify the merger agreement due to anti-monopoly violations.",
        "exampleVi": "Tòa án đã phán quyết hủy bỏ hiệu lực thỏa thuận sáp nhập do vi phạm luật chống độc quyền.",
        "synonyms": [
          "Invalidate",
          "Annul",
          "Void"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-72",
        "word": "Nonchalant",
        "phonetic": "/ˌnɑːn.ʃəˈlɑːnt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Thản nhiên, điềm tĩnh trước áp lực",
        "definitionEn": "Feeling or appearing casually calm and relaxed.",
        "exampleEn": "The spokesperson remained nonchalant despite aggressive questions from journalists.",
        "exampleVi": "Người phát ngôn vẫn giữ vẻ thản nhiên mặc cho những câu hỏi dồn dập từ các phóng viên.",
        "synonyms": [
          "Calm",
          "Unruffled",
          "Composed"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-73",
        "word": "Noticeable",
        "phonetic": "/ˈnoʊ.t̬ɪ.sə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Đáng chú ý, dễ nhận thấy",
        "definitionEn": "Easily seen or noticed; clear or apparent.",
        "exampleEn": "There has been a noticeable improvement in response times since the system update.",
        "exampleVi": "Đã có sự cải thiện rõ rệt trong thời gian phản hồi kể từ đợt nâng cấp hệ thống.",
        "synonyms": [
          "Conspicuous",
          "Distinct",
          "Apparent"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-74",
        "word": "Lucrative",
        "phonetic": "/ˈluː.krə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Béo bở, sinh lời rất cao",
        "definitionEn": "Producing a great deal of profit.",
        "exampleEn": "Securing the government cloud contract was a highly lucrative opportunity for the vendor.",
        "exampleVi": "Giành được hợp đồng đám mây của chính phủ là một cơ hội sinh lời rất lớn cho nhà cung cấp.",
        "synonyms": [
          "Profitable",
          "Remunerative",
          "Gainful"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-75",
        "word": "Liability",
        "phonetic": "/ˌlaɪ.əˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản nợ phải trả hoặc trách nhiệm pháp lý",
        "definitionEn": "A thing for which someone is responsible, especially a debt or financial obligation.",
        "exampleEn": "The financial audit revealed hidden liabilities that had not been recorded.",
        "exampleVi": "Cuộc kiểm toán tài chính phát hiện những khoản nợ tiềm ẩn chưa được hạch toán.",
        "synonyms": [
          "Debt",
          "Financial obligation",
          "Accountability"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-76",
        "word": "Jurisdiction",
        "phonetic": "/ˌdʒʊr.ɪsˈdɪk.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Quyền hạn tài phán, phạm vi pháp lý",
        "definitionEn": "The official power to make legal decisions and judgments.",
        "exampleEn": "Cross-border internet transactions often fall outside standard national jurisdiction.",
        "exampleVi": "Giao dịch qua mạng xuyên biên giới thường nằm ngoài phạm vi tài phán thông thường của quốc gia.",
        "synonyms": [
          "Authority",
          "Territory",
          "Control"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-77",
        "word": "Integrity",
        "phonetic": "/ɪnˈteɡ.rə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự chính trực, tính toàn vẹn dữ liệu",
        "definitionEn": "The quality of being honest and having strong moral principles, or completeness.",
        "exampleEn": "Data integrity is critical when maintaining financial records for tax authorities.",
        "exampleVi": "Tính toàn vẹn của dữ liệu là điều tối quan trọng khi lưu trữ sổ sách tài chính phục vụ cơ quan thuế.",
        "synonyms": [
          "Honesty",
          "Probity",
          "Soundness"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-78",
        "word": "Incur",
        "phonetic": "/ɪnˈkɝː/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Gánh chịu chi phí, chuốc lấy rủi ro",
        "definitionEn": "Become subject to something unwelcome or unpleasant as a result of one's own behavior.",
        "exampleEn": "The firm will incur significant penalties if the delivery deadline is missed.",
        "exampleVi": "Công ty sẽ phải gánh chịu các khoản phạt nặng nề nếu để trễ hạn giao hàng.",
        "synonyms": [
          "Sustain",
          "Experience",
          "Bring upon"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-79",
        "word": "Flructure",
        "phonetic": "/ˈflaʊn.dɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Gặp trục trặc, lúng túng trong điều hành",
        "definitionEn": "Struggle or stagger helplessly or clumsily in water or mud, or financially.",
        "exampleEn": "Many small businesses floundered during the economic recession before recovering.",
        "exampleVi": "Nhiều doanh nghiệp nhỏ đã phải vật lộn chao đảo trong đợt suy thoái kinh tế trước khi phục hồi.",
        "synonyms": [
          "Struggle",
          "Stumble",
          "Falter"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-80",
        "word": "Fleet",
        "phonetic": "/fliːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đội tàu thuyền hoặc đội xe vận chuyển",
        "definitionEn": "A group of ships, vehicles, or aircraft operating together under the same ownership.",
        "exampleEn": "The delivery service expanded its electric van fleet to reduce greenhouse emissions.",
        "exampleVi": "Dịch vụ giao hàng đã mở rộng đội xe tải điện để giảm phát thải khí nhà kính.",
        "synonyms": [
          "Vehicle group",
          "Conveyance pool"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-81",
        "word": "Fidelity",
        "phonetic": "/fɪˈdel.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lòng trung thành của đối tác, độ chân thực",
        "definitionEn": "Faithfulness to a person, cause, or belief, demonstrated by continuing loyalty.",
        "exampleEn": "High customer fidelity enabled the brand to endure intense competitive price wars.",
        "exampleVi": "Lòng trung thành lớn của khách hàng đã giúp thương hiệu đứng vững trước các cuộc chiến giảm giá khốc liệt.",
        "synonyms": [
          "Loyalty",
          "Allegiance",
          "Dedication"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-82",
        "word": "Fiscal",
        "phonetic": "/ˈfɪs.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về năm tài khóa, tài chính công",
        "definitionEn": "Relating to government revenue, especially taxes, or financial matters.",
        "exampleEn": "The corporation announced its results for fiscal year 2025 with record growth.",
        "exampleVi": "Tập đoàn đã công bố kết quả cho năm tài chính 2025 với mức tăng trưởng kỷ lục.",
        "synonyms": [
          "Financial",
          "Monetary",
          "Economic"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-83",
        "word": "Expenditure",
        "phonetic": "/ɪkˈspen.də.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản chi tiêu ngân sách",
        "definitionEn": "An amount of money, time, or effort spent.",
        "exampleEn": "Capital expenditure on cutting-edge manufacturing robots will pay off over the next decade.",
        "exampleVi": "Khoản chi tiêu vốn cho robot sản xuất tiên tiến sẽ sinh lời trong suốt thập kỷ tới.",
        "synonyms": [
          "Spending",
          "Outlay",
          "Disbursement"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-84",
        "word": "Exempt",
        "phonetic": "/ɪɡˈzempt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Được miễn thuế hoặc miễn trừ nghĩa vụ",
        "definitionEn": "Free from an obligation or liability imposed on others.",
        "exampleEn": "Nonprofit educational institutions are largely exempt from local real estate taxes.",
        "exampleVi": "Các tổ chức giáo dục phi lợi nhuận phần lớn được miễn thuế bất động sản địa phương.",
        "synonyms": [
          "Free",
          "Immune",
          "Excused"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-85",
        "word": "Endeavor",
        "phonetic": "/enˈdev.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự nỗ lực, cố gắng thực hiện dự án",
        "definitionEn": "An attempt to achieve a goal; earnest and industrious effort.",
        "exampleEn": "Launching the global satellite communications system was a massive engineering endeavor.",
        "exampleVi": "Việc phóng hệ thống thông tin vệ tinh toàn cầu là một nỗ lực kỹ thuật to lớn.",
        "synonyms": [
          "Undertaking",
          "Effort",
          "Enterprise"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-86",
        "word": "Embargo",
        "phonetic": "/ɪmˈbɑːr.ɡoʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lệnh cấm vận thương mại",
        "definitionEn": "An official ban on trade or other commercial activity with a particular country.",
        "exampleEn": "The international community imposed an oil embargo in response to the treaty violation.",
        "exampleVi": "Cộng đồng quốc tế đã áp đặt lệnh cấm vận dầu mỏ nhằm đáp trả hành vi vi phạm hiệp ước.",
        "synonyms": [
          "Trade ban",
          "Sanction",
          "Boycott"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-87",
        "word": "Eligibility",
        "phonetic": "/ˌel.ə.dʒəˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Điều kiện hợp lệ, đủ tư cách tham gia",
        "definitionEn": "The state of having the right for something through meeting the required qualifications.",
        "exampleEn": "Candidates can review their eligibility criteria online prior to submitting application forms.",
        "exampleVi": "Các ứng viên có thể xem xét điều kiện hợp lệ trực tuyến trước khi nộp đơn xin việc.",
        "synonyms": [
          "Qualification",
          "Fitness",
          "Entitlement"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-88",
        "word": "Earmark",
        "phonetic": "/ˈɪr.mɑːrk/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Dành riêng ngân sách cho mục đích cụ thể",
        "definitionEn": "Designate funds or resources for a specific purpose.",
        "exampleEn": "Five million dollars were earmarked for upgrading corporate cybersecurity infrastructure.",
        "exampleVi": "Năm triệu đô la đã được chỉ định dành riêng để nâng cấp hạ tầng an ninh mạng doanh nghiệp.",
        "synonyms": [
          "Designate",
          "Allocate",
          "Reserve"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-89",
        "word": "Dividend",
        "phonetic": "/ˈdɪv.ə.dend/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cổ tức chia cho cổ đông",
        "definitionEn": "A sum of money paid regularly by a company to its shareholders out of its profits.",
        "exampleEn": "The board declared an increase in quarterly dividend payouts following record profits.",
        "exampleVi": "Hội đồng quản trị tuyên bố tăng mức chi trả cổ tức hàng quý sau khi ghi nhận lợi nhuận kỷ lục.",
        "synonyms": [
          "Share of profits",
          "Payout",
          "Return"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-90",
        "word": "Discretion",
        "phonetic": "/dɪˈskreʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự thận trọng, quyền tự quyết",
        "definitionEn": "The freedom to decide what should be done in a particular situation, or secrecy.",
        "exampleEn": "The hiring committee exercised strict discretion throughout the interview process.",
        "exampleVi": "Hội đồng tuyển dụng đã thể hiện sự thận trọng và bảo mật nghiêm ngặt trong suốt quá trình phỏng vấn.",
        "synonyms": [
          "Prudence",
          "Judgment",
          "Carefulness"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-91",
        "word": "Dilute",
        "phonetic": "/daɪˈluːt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Làm loãng cổ phiếu hoặc quyền biểu quyết",
        "definitionEn": "Make something thinner or weaker in value or quality.",
        "exampleEn": "Issuing additional common shares will dilute the equity ownership of current investors.",
        "exampleVi": "Việc phát hành thêm cổ phiếu phổ thông sẽ làm loãng tỷ lệ sở hữu vốn của các nhà đầu tư hiện tại.",
        "synonyms": [
          "Weaken",
          "Water down",
          "Diminish"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-92",
        "word": "Deregulation",
        "phonetic": "/ˌdiːˌreɡ.jəˈleɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự bãi bỏ quy định gò bó thị trường",
        "definitionEn": "The reduction or elimination of government power in a particular industry.",
        "exampleEn": "Market deregulation in the energy sector fostered fierce price competition.",
        "exampleVi": "Việc bãi bỏ các quy định trong ngành năng lượng đã thúc đẩy cạnh tranh giá cả quyết liệt.",
        "synonyms": [
          "Liberalization",
          "Free market reform"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-93",
        "word": "Deplete",
        "phonetic": "/dɪˈpliːt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Làm cạn kiệt nguồn lực dự trữ",
        "definitionEn": "Use up the supply or resources of something.",
        "exampleEn": "Unexpected logistical supply delays threatened to deplete our backup warehouse inventory.",
        "exampleVi": "Những sự chậm trễ hậu cần bất ngờ đe dọa làm cạn kiệt lượng hàng dự trữ trong kho của chúng tôi.",
        "synonyms": [
          "Exhaust",
          "Drain",
          "Empty"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-94",
        "word": "Demurrage",
        "phonetic": "/dɪˈmɝː.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Phí phạt lưu bãi, lưu container trễ hạn",
        "definitionEn": "A charge payable to the owner of a chartered ship in respect of failure to load within time.",
        "exampleEn": "Importers paid steep demurrage fees due to severe congestion at the container terminal.",
        "exampleVi": "Các nhà nhập khẩu đã phải trả khoản phí lưu bãi rất cao do tình trạng ùn tắc nghiêm trọng tại cảng container.",
        "synonyms": [
          "Detention charge",
          "Overdue holding fee"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-95",
        "word": "Delinquent",
        "phonetic": "/dɪˈlɪŋ.kwənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Chậm trả nợ quá hạn nghiêm trọng",
        "definitionEn": "Failing to pay an outstanding debt or accomplish an official duty.",
        "exampleEn": "The automated billing system sends daily warnings to delinquent enterprise accounts.",
        "exampleVi": "Hệ thống thanh toán tự động gửi cảnh báo hàng ngày tới các tài khoản doanh nghiệp chậm nợ quá hạn.",
        "synonyms": [
          "Past due",
          "Overdue",
          "Defaulter"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-96",
        "word": "Defamation",
        "phonetic": "/ˌdef.əˈmeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hành vi vu khống, bôi nhọ thanh danh",
        "definitionEn": "The action of damaging the good reputation of someone; slander or libel.",
        "exampleEn": "The corporate legal counsel initiated a lawsuit alleging commercial defamation.",
        "exampleVi": "Cố vấn pháp lý doanh nghiệp đã khởi kiện với cáo buộc bôi nhọ thanh danh thương mại.",
        "synonyms": [
          "Libel",
          "Slander",
          "Character assassination"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-97",
        "word": "Decree",
        "phonetic": "/dɪˈkriː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sắc lệnh, nghị định pháp quy",
        "definitionEn": "An official order issued by a legal authority.",
        "exampleEn": "A ministerial decree was issued requiring all export firms to transition to paperless customs.",
        "exampleVi": "Nghị định của bộ đã được ban hành yêu cầu tất cả các doanh nghiệp xuất khẩu chuyển đổi sang thủ tục hải quan không dùng giấy tờ.",
        "synonyms": [
          "Edict",
          "Ordinance",
          "Mandate"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-98",
        "word": "Customs Broker",
        "phonetic": "/ˈkʌs.təmz ˌbroʊ.kɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đại lý thông quan hải quan",
        "definitionEn": "A licensed professional that assists businesses in clearing goods through customs barriers.",
        "exampleEn": "Employing an authorized customs broker prevents costly cargo delays at international border ports.",
        "exampleVi": "Thuê đại lý thông quan hải quan giúp ngăn chặn tình trạng hàng hóa bị chậm trễ gây tốn kém tại các cửa khẩu quốc tế.",
        "synonyms": [
          "Import-export agent",
          "Clearance agent"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-99",
        "word": "Curtail",
        "phonetic": "/kɚˈteɪl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Cắt giảm, hạn chế bớt chi tiêu",
        "definitionEn": "Reduce in extent or quantity; impose a restriction on.",
        "exampleEn": "The board instructed managers to curtail unnecessary international travel expenses.",
        "exampleVi": "Hội đồng quản trị đã chỉ đạo các nhà quản lý cắt giảm những khoản chi phí đi công tác nước ngoài không thực sự cần thiết.",
        "synonyms": [
          "Reduce",
          "Cut back",
          "Restrict"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-100",
        "word": "Covenant",
        "phonetic": "/ˈkʌv.ə.nənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Cam kết giao ước pháp lý ràng buộc",
        "definitionEn": "An agreement or stipulation within a lease, deed, or contract.",
        "exampleEn": "The credit agreement contains strict covenants concerning minimum cash reserves.",
        "exampleVi": "Thỏa thuận tín dụng chứa các cam kết giao ước nghiêm ngặt liên quan đến mức dự trữ tiền mặt tối thiểu.",
        "synonyms": [
          "Pledge",
          "Binding agreement",
          "Promise"
        ],
        "topicId": "toeic"
      },
      {
        "id": "toeic-101",
        "word": "Contingency",
        "phonetic": "/kənˈtɪn.dʒən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kế hoạch dự phòng rủi ro phát sinh",
        "definitionEn": "A future event or circumstance which is possible but cannot be predicted with certainty.",
        "exampleEn": "Every engineering project proposal must include a contingency budget for unforeseen delays.",
        "exampleVi": "Mọi đề xuất dự án kỹ thuật đều phải bao gồm khoản ngân sách dự phòng cho các sự cố chậm trễ không lường trước.",
        "synonyms": [
          "Backup plan",
          "Emergency provision",
          "Safeguard"
        ],
        "topicId": "toeic"
      }
    ]
  },
  {
    "id": "ielts-academic",
    "title": "IELTS Academic (Band 7.0 - 9.0)",
    "slug": "ielts-academic",
    "icon": "GraduationCap",
    "color": "text-purple-500",
    "bgColor": "bg-purple-50 dark:bg-purple-950/40",
    "borderColor": "border-purple-200 dark:border-purple-800",
    "description": "Từ vựng học thuật đỉnh cao, luận điểm sắc bén, phương pháp nghiên cứu và phân tích số liệu",
    "wordCount": 120,
    "words": [
      {
        "id": "ielts-1",
        "word": "Substantiate",
        "phonetic": "/səbˈstæn.ʃi.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Chứng minh, đưa ra bằng chứng xác thực",
        "definitionEn": "Provide evidence to support or prove the truth of something.",
        "exampleEn": "The researcher failed to substantiate his controversial claims with empirical data.",
        "exampleVi": "Nhà nghiên cứu đã không thể chứng minh các tuyên bố gây tranh cãi của mình bằng dữ liệu thực nghiệm.",
        "synonyms": [
          "Corroborate",
          "Validate",
          "Verify"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-2",
        "word": "Ubiquitous",
        "phonetic": "/juːˈbɪk.wə.t̬əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Phổ biến khắp nơi, đâu đâu cũng thấy",
        "definitionEn": "Present, appearing, or found everywhere.",
        "exampleEn": "Smartphones have become ubiquitous across modern urban societies.",
        "exampleVi": "Điện thoại thông minh đã trở nên phổ biến khắp mọi nơi trong các xã hội đô thị hiện đại.",
        "synonyms": [
          "Omnipresent",
          "Pervasive",
          "Universal"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-3",
        "word": "Paradigm",
        "phonetic": "/ˈper.ə.daɪm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mô hình tư duy, khuôn mẫu chuẩn mực",
        "definitionEn": "A typical example or pattern of something; a model or worldview.",
        "exampleEn": "Quantum mechanics introduced a radical shift in the scientific paradigm.",
        "exampleVi": "Cơ học lượng tử đã tạo ra một bước chuyển mang tính cách mạng trong mô hình tư duy khoa học.",
        "synonyms": [
          "Framework",
          "Model",
          "Archetype"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-4",
        "word": "Mitigate",
        "phonetic": "/ˈmɪt̬.ə.ɡeɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Làm giảm nhẹ, xoa dịu tác hại",
        "definitionEn": "Make something bad less severe, serious, or painful.",
        "exampleEn": "Governments must invest in seawalls to mitigate the destructive impact of storm surges.",
        "exampleVi": "Các chính phủ phải đầu tư vào đê chắn sóng để giảm nhẹ tác động tàn phá của triều cường.",
        "synonyms": [
          "Alleviate",
          "Attenuate",
          "Diminish"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-5",
        "word": "Exacerbate",
        "phonetic": "/ɪɡˈzæs.ɚ.beɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Làm trầm trọng thêm tình hình",
        "definitionEn": "Make a problem, bad situation, or negative feeling worse.",
        "exampleEn": "Prolonged droughts will exacerbate the ongoing food crisis in arid regions.",
        "exampleVi": "Hạn hán kéo dài sẽ làm trầm trọng thêm cuộc khủng hoảng lương thực tại các vùng khô hạn.",
        "synonyms": [
          "Worsen",
          "Aggravate",
          "Intensify"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-6",
        "word": "Empirical",
        "phonetic": "/emˈpɪr.ɪ.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Dựa trên thực nghiệm và quan sát thực tế",
        "definitionEn": "Based on, concerned with, or verifiable by observation or experience rather than theory.",
        "exampleEn": "Scientific conclusions must be founded upon rigorous empirical research.",
        "exampleVi": "Các kết luận khoa học phải dựa trên những nghiên cứu thực nghiệm nghiêm ngặt.",
        "synonyms": [
          "Observational",
          "Experimental",
          "Evidence-based"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-7",
        "word": "Delineate",
        "phonetic": "/dɪˈlɪn.i.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Phác họa, mô tả chi tiết ranh giới hoặc đặc điểm",
        "definitionEn": "Describe or portray something precisely; indicate the exact position of a border.",
        "exampleEn": "The treaty clearly delineates the maritime boundaries between the two neighboring states.",
        "exampleVi": "Hiệp ước vạch rõ ranh giới hàng hải giữa hai quốc gia láng giềng.",
        "synonyms": [
          "Outline",
          "Depict",
          "Demarcate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-8",
        "word": "Juxtapose",
        "phonetic": "/ˌdʒʌk.stəˈpoʊz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Đặt cạnh nhau để so sánh đối chiếu",
        "definitionEn": "Place or deal with close together for contrasting effect.",
        "exampleEn": "The exhibition juxtaposes contemporary sculptures with classical oil paintings.",
        "exampleVi": "Triển lãm đặt các tác phẩm điêu khắc đương đại cạnh các bức tranh sơn dầu cổ điển để đối chiếu.",
        "synonyms": [
          "Compare",
          "Contrast",
          "Collocate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-9",
        "word": "Anomalous",
        "phonetic": "/əˈnɑː.mə.ləs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Bất thường, dị thường khác với quy luật",
        "definitionEn": "Deviating from what is standard, normal, or expected.",
        "exampleEn": "Scientists observed anomalous temperature spikes near the volcanic ridge.",
        "exampleVi": "Các nhà khoa học đã quan sát thấy những đợt tăng nhiệt độ bất thường gần sườn núi lửa.",
        "synonyms": [
          "Atypical",
          "Aberrant",
          "Irregular"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-10",
        "word": "Equivocal",
        "phonetic": "/ɪˈkwɪv.ə.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Mơ hồ, nước đôi, khó giải nghĩa chính xác",
        "definitionEn": "Open to more than one interpretation; ambiguous.",
        "exampleEn": "The politician gave an equivocal response when asked about increasing carbon taxes.",
        "exampleVi": "Chính trị gia đã đưa ra câu trả lời nước đôi khi được hỏi về việc tăng thuế carbon.",
        "synonyms": [
          "Ambiguous",
          "Evasive",
          "Vague"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-11",
        "word": "Prevalent",
        "phonetic": "/ˈprev.əl.ənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thịnh hành, phổ biến rộng rãi",
        "definitionEn": "Widespread in a particular area or at a particular time.",
        "exampleEn": "Obesity is increasingly prevalent among children living in urban environments.",
        "exampleVi": "Tình trạng béo phì ngày càng phổ biến trong số trẻ em sống ở khu vực thành thị.",
        "synonyms": [
          "Widespread",
          "Common",
          "Rife"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-12",
        "word": "Disseminate",
        "phonetic": "/dɪˈsem.ə.neɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Truyền bá kiến thức, lan tỏa thông tin",
        "definitionEn": "Spread or disperse something, especially information, widely.",
        "exampleEn": "Public health authorities use social media to disseminate disease prevention guidelines.",
        "exampleVi": "Cơ quan y tế công cộng dùng mạng xã hội để phổ biến hướng dẫn phòng chống bệnh tật.",
        "synonyms": [
          "Circulate",
          "Broadcast",
          "Disperse"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-13",
        "word": "Catalyst",
        "phonetic": "/ˈkæt̬.əl.ɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Chất xúc tác thúc đẩy sự thay đổi",
        "definitionEn": "A person or thing that precipitates an event or accelerates change.",
        "exampleEn": "The invention of the steam engine acted as a catalyst for the Industrial Revolution.",
        "exampleVi": "Phát minh ra động cơ hơi nước đóng vai trò như chất xúc tác cho Cách mạng Công nghiệp.",
        "synonyms": [
          "Trigger",
          "Stimulus",
          "Impetus"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-14",
        "word": "Proponent",
        "phonetic": "/prəˈpoʊ.nənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Người đề xướng, người ủng hộ quan điểm",
        "definitionEn": "A person who advocates a theory, proposal, or project.",
        "exampleEn": "Proponents of renewable energy argue that wind and solar power lower long-term costs.",
        "exampleVi": "Những người ủng hộ năng lượng tái tạo lập luận rằng năng lượng gió và mặt trời giúp hạ giá thành dài hạn.",
        "synonyms": [
          "Advocate",
          "Champion",
          "Supporter"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-15",
        "word": "Detriment",
        "phonetic": "/ˈdet.rə.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự tổn hại, thiệt hại cho điều gì đó",
        "definitionEn": "The state of being harmed or damaged.",
        "exampleEn": "Excessive focus on academic testing operates to the detriment of students' creative thinking.",
        "exampleVi": "Việc quá chú trọng vào các kỳ thi học thuật gây tổn hại đến tư duy sáng tạo của học sinh.",
        "synonyms": [
          "Harm",
          "Damage",
          "Disadvantage"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-16",
        "word": "Tenet",
        "phonetic": "/ˈten.ɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nguyên lý cốt lõi, giáo lý căn bản",
        "definitionEn": "A principle or belief, especially one of the main principles of a religion or philosophy.",
        "exampleEn": "Freedom of speech is a fundamental tenet of modern democratic societies.",
        "exampleVi": "Tự do ngôn luận là nguyên lý cốt lõi của các xã hội dân chủ hiện đại.",
        "synonyms": [
          "Principle",
          "Creed",
          "Doctrine"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-17",
        "word": "Cognitive",
        "phonetic": "/ˈkɑːɡ.nə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về nhận thức và tư duy não bộ",
        "definitionEn": "Relating to the mental action or process of acquiring knowledge and understanding.",
        "exampleEn": "Bilingual children often exhibit superior cognitive flexibility compared to monolinguals.",
        "exampleVi": "Trẻ em song ngữ thường thể hiện sự linh hoạt nhận thức vượt trội so với trẻ đơn ngữ.",
        "synonyms": [
          "Intellectual",
          "Mental",
          "Perceptual"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-18",
        "word": "Disparity",
        "phonetic": "/dɪˈspær.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự chênh lệch lớn, bất bình đẳng sâu sắc",
        "definitionEn": "A great difference or inequality.",
        "exampleEn": "The economic disparity between rural and metropolitan areas continues to widen.",
        "exampleVi": "Sự chênh lệch kinh tế giữa vùng nông thôn và các đại đô thị tiếp tục nới rộng.",
        "synonyms": [
          "Imbalance",
          "Inequality",
          "Divergence"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-19",
        "word": "Conglomerate",
        "phonetic": "/kənˈɡlɑː.mɚ.ət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tập đoàn đa ngành khổng lồ",
        "definitionEn": "A number of different things or parts that are put or grouped together to form a whole.",
        "exampleEn": "The multinational media conglomerate owns television networks, publishers, and film studios.",
        "exampleVi": "Tập đoàn truyền thông đa ngành sở hữu mạng lưới truyền hình, nhà xuất bản và hãng phim.",
        "synonyms": [
          "Multinational group",
          "Consortium"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-20",
        "word": "Inherent",
        "phonetic": "/ɪnˈhɪr.ənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Vốn có, gắn liền bản chất cố hữu",
        "definitionEn": "Existing in something as a permanent, essential, or characteristic attribute.",
        "exampleEn": "Every investment in emerging tech carries an inherent risk of financial volatility.",
        "exampleVi": "Mọi khoản đầu tư vào công nghệ mới nổi đều mang rủi ro biến động tài chính cố hữu.",
        "synonyms": [
          "Intrinsic",
          "Innate",
          "Inborn"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-21",
        "word": "Proliferate",
        "phonetic": "/prəˈlɪf.ə.reɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Sinh sôi nảy nở, gia tăng nhanh chóng",
        "definitionEn": "Increase rapidly in numbers; multiply.",
        "exampleEn": "Digital payment apps have proliferated across developing economies in recent years.",
        "exampleVi": "Các ứng dụng thanh toán kỹ thuật số đã gia tăng đột biến tại các nền kinh tế đang phát triển gần đây.",
        "synonyms": [
          "Multiply",
          "Burgeon",
          "Mushroom"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-22",
        "word": "Efficacy",
        "phonetic": "/ˈef.ə.kə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hiệu lực, tính hiệu quả của phương pháp/thuốc",
        "definitionEn": "The ability to produce a desired or intended result.",
        "exampleEn": "Clinical trials confirmed the strong efficacy of the novel antiviral treatment.",
        "exampleVi": "Các thử nghiệm lâm sàng đã khẳng định hiệu lực vượt trội của liệu pháp kháng virus mới.",
        "synonyms": [
          "Effectiveness",
          "Potency",
          "Success"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-23",
        "word": "Corroborate",
        "phonetic": "/kəˈrɑː.bə.reɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Củng cố tính xác thực, kiểm chứng độc lập",
        "definitionEn": "Confirm or give support to a statement, theory, or finding.",
        "exampleEn": "Independent lab tests corroborated the presence of microscopic plastic particles in the river.",
        "exampleVi": "Các kiểm nghiệm phòng thí nghiệm độc lập đã kiểm chứng sự hiện diện của hạt vi nhựa trên sông.",
        "synonyms": [
          "Confirm",
          "Authenticate",
          "Back up"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-24",
        "word": "Pervasive",
        "phonetic": "/pɚˈveɪ.sɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Lan tỏa sâu rộng, tràn ngập mọi khía cạnh",
        "definitionEn": "Spreading widely throughout an area or a group of people.",
        "exampleEn": "Social media exercises a pervasive influence on teenage cultural values.",
        "exampleVi": "Mạng xã hội tạo nên ảnh hưởng sâu rộng lên các giá trị văn hóa của giới trẻ.",
        "synonyms": [
          "Prevalent",
          "Permeating",
          "Ubiquitous"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-25",
        "word": "Pragmatic",
        "phonetic": "/præɡˈmæt̬.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thực tế, thực dụng, trọng tính khả thi",
        "definitionEn": "Dealing with things sensibly and realistically in a way that is based on practical considerations.",
        "exampleEn": "A pragmatic approach to urban housing is needed to accommodate rising population demands.",
        "exampleVi": "Cần có một cách tiếp cận thực tế đối với nhà ở đô thị để đáp ứng nhu cầu dân số gia tăng.",
        "synonyms": [
          "Practical",
          "Sensible",
          "Realistic"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-26",
        "word": "Ambiguity",
        "phonetic": "/ˌæm.bəˈɡjuː.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự mơ hồ, nước đôi không rõ ràng",
        "definitionEn": "The quality of being open to more than one interpretation; inexactness.",
        "exampleEn": "Vague contractual language can lead to severe legal ambiguity and costly disputes.",
        "exampleVi": "Ngôn từ hợp đồng mơ hồ có thể dẫn tới sự không rõ ràng về mặt pháp lý và các tranh chấp tốn kém.",
        "synonyms": [
          "Uncertainty",
          "Vagueness",
          "Obscurity"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-27",
        "word": "Heterogeneous",
        "phonetic": "/ˌhet̬.ɚ.oʊˈdʒiː.ni.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Không đồng nhất, đa dạng hỗn hợp",
        "definitionEn": "Diverse in character or content.",
        "exampleEn": "Modern international universities comprise a highly heterogeneous student population.",
        "exampleVi": "Các trường đại học quốc tế hiện đại sở hữu một cộng đồng sinh viên vô cùng đa dạng.",
        "synonyms": [
          "Diverse",
          "Varied",
          "Assorted"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-28",
        "word": "Homogeneous",
        "phonetic": "/ˌhoʊ.moʊˈdʒiː.ni.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Đồng nhất, cùng một bản chất",
        "definitionEn": "Of the same kind; alike.",
        "exampleEn": "Isolated island communities often exhibit a relatively homogeneous genetic heritage.",
        "exampleVi": "Các cộng đồng đảo biệt lập thường thể hiện một di sản di truyền tương đối đồng nhất.",
        "synonyms": [
          "Uniform",
          "Consistent",
          "Identical"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-29",
        "word": "Epitome",
        "phonetic": "/ɪˈpɪt.ə.mi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hình mẫu thu nhỏ lý tưởng, tấm gương điển hình",
        "definitionEn": "A person or thing that is a perfect example of a particular quality or type.",
        "exampleEn": "The historic cathedral stands as the epitome of Gothic architectural grandeur.",
        "exampleVi": "Nhà thờ lịch sử sừng sững như một hình mẫu lý tưởng của vẻ tráng lệ kiến trúc Gothic.",
        "synonyms": [
          "Embodiment",
          "Quintessence",
          "Paragon"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-30",
        "word": "Conducive",
        "phonetic": "/kənˈduː.sɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tạo điều kiện thuận lợi, có lợi cho",
        "definitionEn": "Making a certain situation or outcome likely or possible.",
        "exampleEn": "A tranquil and well-lit library is highly conducive to deep academic focus.",
        "exampleVi": "Một thư viện yên tĩnh và đủ ánh sáng vô cùng thuận lợi cho sự tập trung học thuật chuyên sâu.",
        "synonyms": [
          "Beneficial",
          "Favorable",
          "Promotive"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-31",
        "word": "Repercussion",
        "phonetic": "/ˌriː.pɚˈkʌʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hậu quả khôn lường, tác động dây chuyền tiêu cực",
        "definitionEn": "An unintended consequence occurring some time after an event or action, especially an unwelcome one.",
        "exampleEn": "Unchecked carbon emissions will have devastating repercussions for future coastal ecosystems.",
        "exampleVi": "Lượng phát thải carbon không được kiểm soát sẽ để lại những hậu quả nặng nề cho hệ sinh thái ven biển trong tương lai.",
        "synonyms": [
          "Aftermath",
          "Consequence",
          "Backlash"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-32",
        "word": "Nuance",
        "phonetic": "/ˈnuː.ɑːns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sắc thái tinh tế trong ngữ nghĩa/cảm xúc",
        "definitionEn": "A subtle difference in or shade of meaning, expression, or sound.",
        "exampleEn": "Mastering academic English requires appreciating the delicate nuances of formal vocabulary.",
        "exampleVi": "Để thành thạo tiếng Anh học thuật đòi hỏi phải cảm thụ được các sắc thái tinh tế của từ vựng trang trọng.",
        "synonyms": [
          "Subtlety",
          "Shade",
          "Refinement"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-33",
        "word": "Salient",
        "phonetic": "/ˈseɪ.li.ənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Nổi bật, cốt lõi, dễ nhận thấy nhất",
        "definitionEn": "Most noticeable or important.",
        "exampleEn": "The summary highlights the salient findings of the five-year climate investigation.",
        "exampleVi": "Bản tóm tắt nêu bật những phát hiện cốt lõi từ cuộc điều tra khí hậu kéo dài 5 năm.",
        "synonyms": [
          "Prominent",
          "Conspicuous",
          "Key"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-34",
        "word": "Surmount",
        "phonetic": "/sɚˈmaʊnt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Vượt qua chướng ngại vật khó khăn",
        "definitionEn": "Overcome a difficulty or obstacle.",
        "exampleEn": "Through resilient perseverance, the engineering team surmounted every technical hurdle.",
        "exampleVi": "Nhờ lòng kiên trì bền bỉ, đội ngũ kỹ thuật đã vượt qua mọi rào cản công nghệ.",
        "synonyms": [
          "Overcome",
          "Conquer",
          "Master"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-35",
        "word": "Diminish",
        "phonetic": "/dɪˈmɪn.ɪʃ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Giảm bớt, suy giảm dần",
        "definitionEn": "Make or become less.",
        "exampleEn": "Heavy deforestation significantly diminishes the natural water retention capacity of soil.",
        "exampleVi": "Nạn phá rừng nặng nề làm suy giảm đáng kể khả năng giữ nước tự nhiên của đất trồng.",
        "synonyms": [
          "Decrease",
          "Lessen",
          "Dwindle"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-36",
        "word": "Comprehensive",
        "phonetic": "/ˌkɑːm.prəˈhen.sɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Toàn diện, bao quát mọi mặt",
        "definitionEn": "Complete and including everything that is necessary.",
        "exampleEn": "The Ministry of Education published a comprehensive guide to reformed curriculum standards.",
        "exampleVi": "Bộ Giáo dục đã xuất bản một bản hướng dẫn toàn diện về các tiêu chuẩn chương trình cải cách.",
        "synonyms": [
          "Exhaustive",
          "Thorough",
          "All-inclusive"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-37",
        "word": "Synthesize",
        "phonetic": "/ˈsɪn.θə.saɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Tổng hợp và đúc kết thông tin",
        "definitionEn": "Combine a number of things into a coherent whole.",
        "exampleEn": "The thesis synthesizes findings from over one hundred international sociological papers.",
        "exampleVi": "Luận án tổng hợp các phát hiện từ hơn 100 bài báo xã hội học quốc tế.",
        "synonyms": [
          "Integrate",
          "Amalgamate",
          "Blend"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-38",
        "word": "Paradox",
        "phonetic": "/ˈper.ə.dɑːks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nghịch lý tưởng chừng mâu thuẫn",
        "definitionEn": "A seemingly absurd or self-contradictory statement that may prove to be well founded.",
        "exampleEn": "It is a cruel paradox that modern food production has never been higher yet hunger persists.",
        "exampleVi": "Thật là một nghịch lý trớ trêu khi sản lượng lương thực hiện đại cao chưa từng có nhưng nạn đói vẫn dai dẳng.",
        "synonyms": [
          "Contradiction",
          "Inconsistency",
          "Enigma"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-39",
        "word": "Manifest",
        "phonetic": "/ˈmæn.ə.fest/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Biểu hiện rõ ràng ra ngoài",
        "definitionEn": "Display or show a quality or feeling by one's acts or appearance; demonstrate.",
        "exampleEn": "Chronic emotional stress can manifest as persistent physical ailments and fatigue.",
        "exampleVi": "Căng thẳng cảm xúc mãn tính có thể biểu hiện ra thành các bệnh lý thể chất kéo dài và sự mệt mỏi.",
        "synonyms": [
          "Exhibit",
          "Demonstrate",
          "Reveal"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-40",
        "word": "Subordinate",
        "phonetic": "/səˈbɔːr.dən.ət/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Phụ thuộc, có vị thế thứ yếu",
        "definitionEn": "Lower in rank or position.",
        "exampleEn": "Short-term financial convenience should remain subordinate to long-term environmental protection.",
        "exampleVi": "Lợi ích tài chính ngắn hạn phải xếp sau mục tiêu bảo vệ môi trường dài hạn.",
        "synonyms": [
          "Secondary",
          "Lesser",
          "Inferior"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-41",
        "word": "Precipitate",
        "phonetic": "/priːˈsɪp.ə.teɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Gây ra biến cố dồn dập, đẩy nhanh sự cố",
        "definitionEn": "Cause an event or situation, typically one that is bad or undesirable, to happen suddenly.",
        "exampleEn": "The sudden collapse of the major investment bank precipitated a global market panic.",
        "exampleVi": "Sự sụp đổ đột ngột của ngân hàng đầu tư lớn đã châm ngòi cho một làn sóng hoảng loạn thị trường toàn cầu.",
        "synonyms": [
          "Trigger",
          "Accelerate",
          "Instigate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-42",
        "word": "Omnipotent",
        "phonetic": "/ɑːmˈnɪp.ə.tənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Có toàn quyền, quyền năng vô hạn",
        "definitionEn": "Having unlimited power; able to do anything.",
        "exampleEn": "No national government is omnipotent in the face of cross-border environmental emergencies.",
        "exampleVi": "Không một chính phủ quốc gia nào có toàn quyền sức mạnh trước các tình trạng khẩn cấp môi trường xuyên biên giới.",
        "synonyms": [
          "All-powerful",
          "Almighty",
          "Supreme"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-43",
        "word": "Obsolete",
        "phonetic": "/ˌɑːb.səˈliːt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Lỗi thời, không còn giá trị sử dụng",
        "definitionEn": "No longer produced or used; out of date.",
        "exampleEn": "Advancements in microprocessors rendered mechanical cash registers entirely obsolete.",
        "exampleVi": "Những tiến bộ trong bộ vi xử lý đã khiến các máy tính tiền cơ học trở nên hoàn toàn lỗi thời.",
        "synonyms": [
          "Outmoded",
          "Antiquated",
          "Defunct"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-44",
        "word": "Null",
        "phonetic": "/nʌl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Vô hiệu, không có giá trị",
        "definitionEn": "Having no legal or binding force; invalid.",
        "exampleEn": "The contract was declared null and void after fraudulent misrepresentations were discovered.",
        "exampleVi": "Hợp đồng đã bị tuyên bố vô hiệu sau khi những hành vi gian dối bị phát hiện.",
        "synonyms": [
          "Invalid",
          "Void",
          "Inoperative"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-45",
        "word": "Mandate",
        "phonetic": "/ˈmæn.deɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thẩm quyền được ủy thác, lệnh bắt buộc",
        "definitionEn": "An official order or commission to do something.",
        "exampleEn": "The newly elected mayor received a clear public mandate to revitalize inner-city transit.",
        "exampleVi": "Thị trưởng mới đắc cử đã nhận được sự ủy thác rõ ràng từ cử tri để phục hưng hệ thống giao thông nội đô.",
        "synonyms": [
          "Authorization",
          "Directive",
          "Command"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-46",
        "word": "Lucid",
        "phonetic": "/ˈluː.sɪd/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Sáng sủa, mạch lạc, dễ hiểu",
        "definitionEn": "Expressed clearly; easy to understand.",
        "exampleEn": "The professor offered a remarkably lucid explanation of complex astrophysical models.",
        "exampleVi": "Giáo sư đã đưa ra lời giải thích sáng sủa và dễ hiểu một cách đáng kinh ngạc về các mô hình vật lý thiên văn phức tạp.",
        "synonyms": [
          "Clear",
          "Coherent",
          "Articulate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-47",
        "word": "Intrinsically",
        "phonetic": "/ɪnˈtrɪn.zɪ.kəl.i/",
        "partOfSpeech": "Adv",
        "difficultyLevel": "C1",
        "meaningVi": "Về bản chất cố hữu, tự thân",
        "definitionEn": "In an essential or natural way.",
        "exampleEn": "Human language is intrinsically creative and continually evolves across generations.",
        "exampleVi": "Ngôn ngữ loài người tự bản chất vốn có tính sáng tạo và liên tục tiến hóa qua các thế hệ.",
        "synonyms": [
          "Inherently",
          "Fundamentally",
          "Essentially"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-48",
        "word": "Incurable",
        "phonetic": "/ɪnˈkjʊr.ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nan y, không thể chữa khỏi",
        "definitionEn": "Not able to be cured of a disease or medical condition.",
        "exampleEn": "Certain degenerative neuro conditions remain incurable despite decades of intense study.",
        "exampleVi": "Một số bệnh lý thoái hóa thần kinh vẫn chưa thể chữa khỏi dù trải qua nhiều thập kỷ nghiên cứu sâu.",
        "synonyms": [
          "Untreatable",
          "Fatal",
          "Terminal"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-49",
        "word": "Implausible",
        "phonetic": "/ɪmˈplɑː.zə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Khó tin, không hợp lý",
        "definitionEn": "Not seeming reasonable or probable; failing to convince.",
        "exampleEn": "The defendant provided an implausible alibi that contradicted multiple security camera timestamps.",
        "exampleVi": "Bị cáo đã đưa ra chứng cứ ngoại phạm khó tin, mâu thuẫn với nhiều mốc thời gian camera an ninh.",
        "synonyms": [
          "Unlikely",
          "Dubious",
          "Far-fetched"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-50",
        "word": "Imperative",
        "phonetic": "/ɪmˈper.ə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Cực kỳ cấp bách, mệnh lệnh bắt buộc",
        "definitionEn": "Of vital importance; crucial.",
        "exampleEn": "It is absolutely imperative that medical aid reaches isolated earthquake victims swiftly.",
        "exampleVi": "Điều tối khẩn cấp là hàng viện trợ y tế phải đến tay các nạn nhân động đất vùng cô lập một cách nhanh chóng.",
        "synonyms": [
          "Vital",
          "Essential",
          "Urgent"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-51",
        "word": "Harness",
        "phonetic": "/ˈhɑːr.nəs/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Khai thác triệt để nguồn năng lượng",
        "definitionEn": "Control and make use of natural resources, especially to produce energy.",
        "exampleEn": "Engineers are devising novel wave turbines to harness the power of ocean tidal currents.",
        "exampleVi": "Các kỹ sư đang thiết kế tua-bin sóng mới để khai thác sức mạnh của các dòng hải lưu thủy triều.",
        "synonyms": [
          "Utilize",
          "Exploit",
          "Channel"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-52",
        "word": "Grave",
        "phonetic": "/ɡreɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nghiêm trọng, trầm trọng",
        "definitionEn": "Giving cause for great alarm or concern; serious.",
        "exampleEn": "Depleting underground aquifers presents a grave threat to sustainable agriculture.",
        "exampleVi": "Sự cạn kiệt nguồn nước ngầm gây ra mối đe dọa nghiêm trọng đối với nền nông nghiệp bền vững.",
        "synonyms": [
          "Severe",
          "Critical",
          "Dire"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-53",
        "word": "Formidable",
        "phonetic": "/fɔːrˈmɪd.ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Đáng gờm, ghê gớm, thách thức lớn",
        "definitionEn": "Inspiring fear or respect through being impressively large, powerful, or capable.",
        "exampleEn": "Transitioning to carbon neutrality poses a formidable challenge for heavy industrial nations.",
        "exampleVi": "Chuyển đổi sang mức phát thải ròng bằng không đặt ra thách thức đáng gờm cho các quốc gia công nghiệp nặng.",
        "synonyms": [
          "Daunting",
          "Formidable",
          "Imposing"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-54",
        "word": "Fluctuate",
        "phonetic": "/ˈflʌk.tʃu.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Dao động lên xuống thất thường",
        "definitionEn": "Rise and fall irregularly in number or amount.",
        "exampleEn": "Commodity prices fluctuate widely depending on global geopolitical tensions.",
        "exampleVi": "Giá cả hàng hóa dao động thất thường tùy thuộc vào căng thẳng địa chính trị toàn cầu.",
        "synonyms": [
          "Vary",
          "Waver",
          "Oscillate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-55",
        "word": "Feat",
        "phonetic": "/fiːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kỳ tích, chiến công phi thường",
        "definitionEn": "An achievement that requires great courage, skill, or strength.",
        "exampleEn": "Constructing the deep subsea tunnel under the stormy strait was a stunning engineering feat.",
        "exampleVi": "Việc xây dựng đường hầm ngầm dưới eo biển giông bão là một kỳ tích kỹ thuật đáng kinh ngạc.",
        "synonyms": [
          "Achievement",
          "Triumph",
          "Accomplishment"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-56",
        "word": "Fabricate",
        "phonetic": "/ˈfæb.rə.keɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Bịa đặt thông tin, chế tạo lắp ráp",
        "definitionEn": "Invent or concoct something, typically with deceitful intent.",
        "exampleEn": "Unethical researchers fabricated experimental data to secure lucrative federal grant funds.",
        "exampleVi": "Những nhà nghiên cứu thiếu đạo đức đã ngụy tạo dữ liệu thực nghiệm để chiếm đoạt tiền tài trợ từ chính phủ.",
        "synonyms": [
          "Concoct",
          "Forge",
          "Invent"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-57",
        "word": "Exemplify",
        "phonetic": "/ɪɡˈzem.plə.faɪ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Minh họa điển hình, làm ví dụ sáng tỏ",
        "definitionEn": "Be a typical example of.",
        "exampleEn": "Recent extreme heatwaves exemplify the accelerating severity of anthropogenic global warming.",
        "exampleVi": "Những đợt sóng nhiệt cực đoan gần đây là minh họa điển hình cho mức độ gia tăng nghiêm trọng của hiện tượng ấm lên toàn cầu do con người gây ra.",
        "synonyms": [
          "Illustrate",
          "Typify",
          "Embody"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-58",
        "word": "Endorse",
        "phonetic": "/ɪnˈdɔːrs/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Tán thành công khai, ký duyệt",
        "definitionEn": "Declare one's public approval or support of.",
        "exampleEn": "International scientific academies unanimously endorse strict limits on atmospheric pollution.",
        "exampleVi": "Các viện hàn lâm khoa học quốc tế đều công khai tán thành việc giới hạn nghiêm ngặt ô nhiễm khí quyển.",
        "synonyms": [
          "Support",
          "Back",
          "Sanction"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-59",
        "word": "Eloquent",
        "phonetic": "/ˈel.ə.kwənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Hùng hồn, truyền cảm, lưu loát",
        "definitionEn": "Fluent or persuasive in speaking or writing.",
        "exampleEn": "The activist delivered an eloquent defense of human rights before the United Nations assembly.",
        "exampleVi": "Nhà hoạt động đã có bài phát biểu hùng hồn bảo vệ nhân quyền trước Đại hội đồng Liên Hợp Quốc.",
        "synonyms": [
          "Articulate",
          "Persuasive",
          "Expressive"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-60",
        "word": "Elicit",
        "phonetic": "/iˈlɪs.ɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Gợi ra, khơi gợi phản hồi",
        "definitionEn": "Evoke or draw out a response, answer, or fact from someone.",
        "exampleEn": "The documentary succeeded in eliciting profound public empathy for climate refugees.",
        "exampleVi": "Bộ phim tài liệu đã thành công trong việc khơi gợi lòng trắc ẩn sâu sắc của công chúng đối với những người tị nạn khí hậu.",
        "synonyms": [
          "Evoke",
          "Extract",
          "Draw forth"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-61",
        "word": "Dubious",
        "phonetic": "/ˈduː.bi.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Đáng ngờ, hồ nghi về độ tin cậy",
        "definitionEn": "Hesitating or doubting; not to be relied upon.",
        "exampleEn": "Economists cast dubious glances at the government's overly optimistic growth projections.",
        "exampleVi": "Các nhà kinh tế học tỏ ra hoài nghi trước những dự báo tăng trưởng quá lạc quan của chính phủ.",
        "synonyms": [
          "Doubtful",
          "Questionable",
          "Skeptical"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-62",
        "word": "Divergence",
        "phonetic": "/daɪˈvɝː.dʒəns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự phân kỳ, rẽ hướng khác biệt",
        "definitionEn": "The process of moving or extending in different directions from a common point.",
        "exampleEn": "There was a sharp divergence of opinions regarding monetary policy among council members.",
        "exampleVi": "Đã có sự phân kỳ ý kiến sâu sắc liên quan đến chính sách tiền tệ giữa các thành viên hội đồng.",
        "synonyms": [
          "Difference",
          "Deviation",
          "Separation"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-63",
        "word": "Discontent",
        "phonetic": "/ˌdɪs.kənˈtent/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự bất mãn, không hài lòng trong dân chúng",
        "definitionEn": "Dissatisfaction with one's circumstances.",
        "exampleEn": "Rising inflation and frozen real wages sparked widespread public discontent across the nation.",
        "exampleVi": "Lạm phát tăng cao và tiền lương thực tế đình trệ đã làm bùng phát làn sóng bất mãn rộng khắp trong cả nước.",
        "synonyms": [
          "Dissatisfaction",
          "Disaffection",
          "Grievance"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-64",
        "word": "Diminutive",
        "phonetic": "/dɪˈmɪn.jə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Nhỏ bé, tí hon",
        "definitionEn": "Extremely or unusually small.",
        "exampleEn": "Despite its diminutive size, the microcontroller computes complex sensor telemetry instantly.",
        "exampleVi": "Dù kích thước tí hon, vi điều khiển vẫn xử lý dữ liệu đo xa phức tạp từ cảm biến chỉ trong tích tắc.",
        "synonyms": [
          "Tiny",
          "Minute",
          "Miniature"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-65",
        "word": "Diligent",
        "phonetic": "/ˈdɪl.ə.dʒənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Cần cù, tận tụy, siêng năng",
        "definitionEn": "Having or showing care and conscientiousness in one's work or duties.",
        "exampleEn": "Thanks to diligent archival research, historians identified the forgotten medieval treaty.",
        "exampleVi": "Nhờ nghiên cứu lưu trữ tài liệu tận tụy, các nhà sử học đã xác định được hiệp ước thời trung cổ từng bị lãng quên.",
        "synonyms": [
          "Conscientious",
          "Assiduous",
          "Meticulous"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-66",
        "word": "Devise",
        "phonetic": "/dɪˈvaɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Nghĩ ra, sáng chế, đặt ra phương án",
        "definitionEn": "Plan or invent a complex procedure or system by careful thought.",
        "exampleEn": "Engineers devised a closed-loop irrigation system that conserves ninety percent of freshwater.",
        "exampleVi": "Các kỹ sư đã sáng chế ra hệ thống tưới tuần hoàn khép kín giúp tiết kiệm đến 90% nước ngọt.",
        "synonyms": [
          "Conceive",
          "Formulate",
          "Invent"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-67",
        "word": "Deteriorate",
        "phonetic": "/dɪˈtɪr.i.ə.reɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Xuống cấp, suy thoái theo thời gian",
        "definitionEn": "Become progressively worse.",
        "exampleEn": "Air quality in mega-cities deteriorates significantly during winter inversion episodes.",
        "exampleVi": "Chất lượng không khí tại các siêu đô thị xuống cấp nghiêm trọng trong những đợt nghịch nhiệt mùa đông.",
        "synonyms": [
          "Worsen",
          "Degrade",
          "Decline"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-68",
        "word": "Denounce",
        "phonetic": "/dɪˈnaʊns/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Lên án kịch liệt, tố cáo công khai",
        "definitionEn": "Publicly declare to be wrong or evil.",
        "exampleEn": "The human rights committee convened to denounce unprovoked military aggression.",
        "exampleVi": "Ủy ban nhân quyền đã họp để lên án kịch liệt hành vi xâm lược vũ trang vô cớ.",
        "synonyms": [
          "Condemn",
          "Censure",
          "Criticize"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-69",
        "word": "Deem",
        "phonetic": "/diːm/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Nhận định, coi như là, phán xét",
        "definitionEn": "Regard or consider in a specified way.",
        "exampleEn": "The regional inspector deemed the old suspension bridge structurally unsound for traffic.",
        "exampleVi": "Thanh tra khu vực đã nhận định cây cầu treo cũ không còn an toàn về mặt kết cấu để lưu thông.",
        "synonyms": [
          "Consider",
          "Judge",
          "Hold"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-70",
        "word": "Debilitate",
        "phonetic": "/dɪˈbɪl.ə.teɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Làm suy nhược, kiệt quệ sức lực",
        "definitionEn": "Make someone very weak and infirm.",
        "exampleEn": "Chronic joint inflammation can severely debilitate elderly patients if left unmanaged.",
        "exampleVi": "Viêm khớp mãn tính có thể làm suy kiệt trầm trọng các bệnh nhân cao tuổi nếu không được điều trị.",
        "synonyms": [
          "Weaken",
          "Incapacitate",
          "Enfeeble"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-71",
        "word": "Cumbersome",
        "phonetic": "/ˈkʌm.bɚ.səm/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Cồng kềnh, nặng nề, phức tạp khó dùng",
        "definitionEn": "Large or heavy and therefore difficult to carry or use; unwieldy.",
        "exampleEn": "Bureaucratic loan application forms are often too cumbersome for humble rural entrepreneurs.",
        "exampleVi": "Thủ tục xin vay vốn hành chính quan liêu thường quá cồng kềnh đối với các chủ doanh nghiệp nông thôn nhỏ.",
        "synonyms": [
          "Unwieldy",
          "Ponderous",
          "Clunky"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-72",
        "word": "Crucial",
        "phonetic": "/ˈkruː.ʃəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Then chốt, quyết định thành bại",
        "definitionEn": "Decisive or critical, especially in the success or failure of something.",
        "exampleEn": "Early language immersion plays a crucial role in bilingual cognitive development.",
        "exampleVi": "Việc tiếp xúc ngôn ngữ sớm đóng vai trò then chốt trong sự phát triển nhận thức của trẻ song ngữ.",
        "synonyms": [
          "Pivotal",
          "Vital",
          "Essential"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-73",
        "word": "Converge",
        "phonetic": "/kənˈvɝːdʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Hội tụ về một điểm, đồng quy",
        "definitionEn": "Tend to meet at a point or gradually become similar.",
        "exampleEn": "Advanced computing and biotechnology are rapidly converging to revolutionize medicine.",
        "exampleVi": "Điện toán tiên tiến và công nghệ sinh học đang hội tụ nhanh chóng để tạo ra cuộc cách mạng y học.",
        "synonyms": [
          "Meet",
          "Merge",
          "Intersect"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-74",
        "word": "Contemplate",
        "phonetic": "/ˈkɑːn.t̬əm.pleɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trầm ngâm suy ngẫm, dự tính thấu đáo",
        "definitionEn": "Look thoughtfully for a long time at, or think deeply about.",
        "exampleEn": "Philosophers have long contemplated the profound existential mysteries of human consciousness.",
        "exampleVi": "Các triết gia từ lâu đã trầm ngâm suy ngẫm về những bí ẩn hiện sinh sâu sắc của ý thức loài người.",
        "synonyms": [
          "Reflect on",
          "Meditate",
          "Ponder"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-75",
        "word": "Constrain",
        "phonetic": "/kənˈstreɪn/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Gò bó, trói buộc, hạn chế quyền lực",
        "definitionEn": "Severely restrict the scope, extent, or activity of.",
        "exampleEn": "Budgetary limitations heavily constrain our ability to hire seasoned clinical psychologists.",
        "exampleVi": "Những hạn chế về ngân sách trói buộc nghiêm ngặt khả năng tuyển dụng chuyên gia tâm lý lâm sàng dày dặn kinh nghiệm.",
        "synonyms": [
          "Restrict",
          "Inhibit",
          "Limit"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-76",
        "word": "Concur",
        "phonetic": "/kənˈkɝː/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Đồng tình, nhất trí quan điểm",
        "definitionEn": "Be of the same opinion; agree.",
        "exampleEn": "All participating climatologists concurred that global average temperatures are rising.",
        "exampleVi": "Tất cả các nhà khí hậu học tham gia đều nhất trí quan điểm rằng nhiệt độ trung bình toàn cầu đang gia tăng.",
        "synonyms": [
          "Agree",
          "Accord",
          "Coincide"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-77",
        "word": "Cohort",
        "phonetic": "/ˈkoʊ.hɔːrt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nhóm đối tượng nghiên cứu đồng trang lứa",
        "definitionEn": "A group of people banded together or treated as a group in an epidemiological study.",
        "exampleEn": "The longitudinal medical study followed a cohort of 5,000 infants over two decades.",
        "exampleVi": "Nghiên cứu y học dọc đã theo dõi một nhóm 5.000 trẻ sơ sinh trong suốt hai thập kỷ.",
        "synonyms": [
          "Sample group",
          "Demographic",
          "Category"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-78",
        "word": "Circumvent",
        "phonetic": "/ˌsɝː.kəmˈvent/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Lách luật, tránh né rào cản khéo léo",
        "definitionEn": "Find a way around an obstacle or rule cleverly or dishonestly.",
        "exampleEn": "Multinational corporations often set up offshore subsidiaries to circumvent domestic tax laws.",
        "exampleVi": "Các tập đoàn đa quốc gia thường lập công ty con ở nước ngoài để lách luật thuế nội địa.",
        "synonyms": [
          "Bypass",
          "Evade",
          "Sidestep"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-79",
        "word": "Cater",
        "phonetic": "/ˈkeɪ.t̬ɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Phục vụ đáp ứng nhu cầu chuyên biệt",
        "definitionEn": "Provide food and drink or provide what is needed or desired by someone.",
        "exampleEn": "The educational platform was engineered to cater specifically to visually impaired students.",
        "exampleVi": "Nền tảng giáo dục được thiết kế để phục vụ chuyên biệt cho các học sinh khiếm thị.",
        "synonyms": [
          "Serve",
          "Accommodate",
          "Provide for"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-80",
        "word": "Bolster",
        "phonetic": "/ˈboʊl.stɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Củng cố vững chắc, tăng cường sức mạnh",
        "definitionEn": "Support or strengthen; prop up.",
        "exampleEn": "The central bank injected emergency liquidity into commercial lenders to bolster market confidence.",
        "exampleVi": "Ngân hàng trung ương đã bơm thanh khoản khẩn cấp cho các ngân hàng thương mại để củng cố niềm tin thị trường.",
        "synonyms": [
          "Strengthen",
          "Reinforce",
          "Fortify"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-81",
        "word": "Axiomatic",
        "phonetic": "/ˌæk.si.əˈmæt̬.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Hiển nhiên, chân lý không cần bàn cãi",
        "definitionEn": "Self-evident or unquestionable.",
        "exampleEn": "It is an axiomatic principle of justice that an accused person is innocent until proven guilty.",
        "exampleVi": "Đó là một nguyên tắc công lý hiển nhiên rằng một người bị cáo buộc là vô tội cho đến khi chứng minh được có tội.",
        "synonyms": [
          "Self-evident",
          "Indisputable",
          "Given"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-82",
        "word": "Augment",
        "phonetic": "/ɑːɡˈment/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Gia tăng, tăng cường quy mô",
        "definitionEn": "Make something greater by adding to it; increase.",
        "exampleEn": "Many modern surgeons use augmented reality visors to augment spatial precision in the operating room.",
        "exampleVi": "Nhiều bác sĩ phẫu thuật hiện đại dùng kính thực tế tăng cường để tăng độ chuẩn xác về không gian trong phòng mổ.",
        "synonyms": [
          "Increase",
          "Enhance",
          "Amplify"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-83",
        "word": "Ascribe",
        "phonetic": "/əˈskraɪb/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Quy cho, gán cho nguyên nhân bởi",
        "definitionEn": "Attribute something to a cause, person, or origin.",
        "exampleEn": "Historians ascribe the decline of the empire to rampant administrative corruption and civil conflict.",
        "exampleVi": "Các nhà sử học quy sự suy tàn của đế chế cho nạn tham nhũng hành chính tràn lan và các cuộc xung đột nội bộ.",
        "synonyms": [
          "Attribute",
          "Assign",
          "Impute"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-84",
        "word": "Articulate",
        "phonetic": "/ɑːrˈtɪk.jə.lət/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Diễn đạt rành mạch, trình bày trôi chảy",
        "definitionEn": "Express an idea or feeling fluently and coherently.",
        "exampleEn": "She was able to articulate the technical complexities of the software architecture with effortless clarity.",
        "exampleVi": "Cô ấy có thể diễn đạt các mức độ phức tạp kỹ thuật của kiến trúc phần mềm với sự sáng rõ dễ dàng.",
        "synonyms": [
          "Express",
          "Vocalize",
          "Formulate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-85",
        "word": "Arbitrary",
        "phonetic": "/ˈɑːr.bə.trer.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tùy tiện, độc đoán không theo quy chuẩn",
        "definitionEn": "Based on random choice or personal whim, rather than any reason or system.",
        "exampleEn": "Critics argued that setting the tax exemption threshold at that arbitrary number was unfair.",
        "exampleVi": "Các nhà phê bình lập luận rằng việc đặt ngưỡng miễn thuế ở con số tùy tiện đó là không công bằng.",
        "synonyms": [
          "Random",
          "Capricious",
          "Subjective"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-86",
        "word": "Apex",
        "phonetic": "/ˈeɪ.peks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Đỉnh cao tột bậc, điểm cực thịnh",
        "definitionEn": "The top or highest part of something, especially one forming a point.",
        "exampleEn": "Winning the Nobel Prize in Physics represented the absolute apex of her distinguished career.",
        "exampleVi": "Đoạt giải Nobel Vật lý đại diện cho đỉnh cao tột bậc trong sự nghiệp lẫy lừng của bà.",
        "synonyms": [
          "Pinnacle",
          "Zenith",
          "Peak"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-87",
        "word": "Affluent",
        "phonetic": "/ˈæf.lu.ənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Giàu có, khá giả, dồi dào tài nguyên",
        "definitionEn": "Having a great deal of money; wealthy.",
        "exampleEn": "Investment in private tutoring is disproportionately concentrated in affluent suburban neighborhoods.",
        "exampleVi": "Đầu tư vào việc học thêm tư nhân tập trung phần lớn ở các khu ngoại ô giàu có.",
        "synonyms": [
          "Wealthy",
          "Prosperous",
          "Well-off"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-88",
        "word": "Adverse",
        "phonetic": "/ædˈvɝːs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Bất lợi, gây hại, tiêu cực",
        "definitionEn": "Preventing success or development; harmful; unfavorable.",
        "exampleEn": "The vaccine was thoroughly tested to ensure it causes no adverse immunological reactions.",
        "exampleVi": "Vắc-xin đã được thử nghiệm kỹ lưỡng để đảm bảo không gây ra các phản ứng miễn dịch bất lợi nào.",
        "synonyms": [
          "Unfavorable",
          "Disadvantageous",
          "Detrimental"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-89",
        "word": "Adjacent",
        "phonetic": "/əˈdʒeɪ.sənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Kế bên, liền kề, giáp ranh",
        "definitionEn": "Next to or adjoining something else.",
        "exampleEn": "The medical research laboratory is situated immediately adjacent to the university hospital.",
        "exampleVi": "Phòng thí nghiệm nghiên cứu y học tọa lạc ngay liền kề bệnh viện đại học.",
        "synonyms": [
          "Neighboring",
          "Contiguous",
          "Adjoining"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-90",
        "word": "Acquiesce",
        "phonetic": "/ˌæk.wiˈes/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Bằng lòng miễn cưỡng, ưng thuận ngầm",
        "definitionEn": "Accept something reluctantly but without protest.",
        "exampleEn": "Management ultimately had to acquiesce to the labor union's demands for safer work conditions.",
        "exampleVi": "Ban quản lý cuối cùng đã phải chấp thuận các yêu sách của công đoàn về điều kiện làm việc an toàn hơn.",
        "synonyms": [
          "Comply",
          "Consent",
          "Concede"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-91",
        "word": "Accentuate",
        "phonetic": "/ækˈsen.tʃu.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Làm nổi bật, nhấn mạnh thêm",
        "definitionEn": "Make more noticeable or prominent.",
        "exampleEn": "The dramatic spotlights accentuate the intricate details of the historical marble monument.",
        "exampleVi": "Những ngọn đèn chiếu điểm kịch tính làm nổi bật các chi tiết chạm khắc tinh xảo của tượng đài cẩm thạch lịch sử.",
        "synonyms": [
          "Highlight",
          "Emphasize",
          "Underscore"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-92",
        "word": "Abstain",
        "phonetic": "/æbˈsteɪn/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Kiêng khem, bỏ phiếu trắng",
        "definitionEn": "Restrain oneself from doing or enjoying something, or formally decline to vote.",
        "exampleEn": "Several non-aligned delegations decided to abstain during the contentious diplomatic vote.",
        "exampleVi": "Một vài phái đoàn không liên kết đã quyết định bỏ phiếu trắng trong cuộc bỏ phiếu ngoại giao gây tranh cãi.",
        "synonyms": [
          "Refrain",
          "Withhold",
          "Desist"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-93",
        "word": "Vindicate",
        "phonetic": "/ˈvɪn.də.keɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Minh oan, chứng minh sự đúng đắn sau hoài nghi",
        "definitionEn": "Clear someone of blame or suspicion; show or prove to be right, reasonable, or justified.",
        "exampleEn": "Recent archaeological excavations vindicated his long-doubted theory about Bronze Age maritime trade.",
        "exampleVi": "Các cuộc khai quật khảo cổ gần đây đã chứng minh sự đúng đắn của giả thuyết về thương mại hàng hải thời Đồ Đồng từng bị hoài nghi từ lâu của ông.",
        "synonyms": [
          "Exonerate",
          "Justify",
          "Validate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-94",
        "word": "Vacillate",
        "phonetic": "/ˈvæs.əl.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Do dự, dao động thiếu quyết đoán",
        "definitionEn": "Waver between different opinions or actions; be indecisive.",
        "exampleEn": "The prime minister continued to vacillate over whether to impose strict nationwide energy rationing.",
        "exampleVi": "Thủ tướng tiếp tục do dự không biết có nên áp đặt việc phân bổ hạn ngạch năng lượng nghiêm ngặt trên toàn quốc hay không.",
        "synonyms": [
          "Hesitate",
          "Fluctuate",
          "Waver"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-95",
        "word": "Utilitarian",
        "phonetic": "/juːˌtɪl.əˈter.i.ən/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Mang tính thực dụng, chú trọng công năng",
        "definitionEn": "Designed to be useful or practical rather than attractive.",
        "exampleEn": "Post-war architectural housing projects were predominantly utilitarian and austere in appearance.",
        "exampleVi": "Các dự án nhà ở thời hậu chiến chủ yếu mang tính thực dụng và có vẻ ngoài mộc mạc đơn giản.",
        "synonyms": [
          "Functional",
          "Practical",
          "Pragmatic"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-96",
        "word": "Ubiquity",
        "phonetic": "/juːˈbɪk.wə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tính phổ biến tràn ngập khắp nơi",
        "definitionEn": "The fact of appearing everywhere or of being very common.",
        "exampleEn": "The ubiquity of automated algorithmic recommendations shapes the listening habits of billions.",
        "exampleVi": "Sự phổ biến ở khắp nơi của thuật toán đề xuất tự động định hình thói quen nghe nhạc của hàng tỷ người.",
        "synonyms": [
          "Omnipresence",
          "Pervasiveness"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-97",
        "word": "Tenable",
        "phonetic": "/ˈten.ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Có thể bảo vệ, đứng vững trước lý lẽ phản bác",
        "definitionEn": "Able to be maintained or defended against attack or objection.",
        "exampleEn": "In light of recent climate findings, the assertion that sea levels are stable is no longer tenable.",
        "exampleVi": "Trước những phát hiện khí hậu gần đây, khẳng định rằng mực nước biển ổn định không còn có thể đứng vững được nữa.",
        "synonyms": [
          "Defensible",
          "Justifiable",
          "Sound"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-98",
        "word": "Temporal",
        "phonetic": "/ˈtem.pɚ.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Thuộc về thời gian, thế tục",
        "definitionEn": "Relating to worldly as opposed to spiritual affairs; relating to time.",
        "exampleEn": "The philosophical inquiry explores how humans construct their internal temporal awareness.",
        "exampleVi": "Cuộc khảo cứu triết học khám phá cách con người hình thành nhận thức về thời gian bên trong tâm trí mình.",
        "synonyms": [
          "Chronological",
          "Secular",
          "Time-related"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-99",
        "word": "Tangible",
        "phonetic": "/ˈtæn.dʒə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Hữu hình, có thể sờ mó hoặc cảm nhận rõ",
        "definitionEn": "Perceptible by touch; clear and definite; real.",
        "exampleEn": "The vocational education initiative produced tangible economic improvements for rural youths.",
        "exampleVi": "Sáng kiến đào tạo nghề đã mang lại những cải thiện kinh tế rõ ràng hữu hình cho thanh niên nông thôn.",
        "synonyms": [
          "Palpable",
          "Concrete",
          "Real"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-100",
        "word": "Tacit",
        "phonetic": "/ˈtæs.ɪt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Ngầm hiểu, không cần nói ra",
        "definitionEn": "Understood or implied without being stated directly.",
        "exampleEn": "There was a tacit agreement among the researchers that all raw data would be shared openly.",
        "exampleVi": "Có một sự đồng thuận ngầm giữa các nhà nghiên cứu rằng toàn bộ dữ liệu thô sẽ được chia sẻ cởi mở.",
        "synonyms": [
          "Implicit",
          "Unspoken",
          "Implied"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-101",
        "word": "Susceptible",
        "phonetic": "/səˈsep.tə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Dễ bị tổn thương, nhạy cảm trước tác động",
        "definitionEn": "Likely or liable to be influenced or harmed by a particular thing.",
        "exampleEn": "Premature infants are exceptionally susceptible to airborne respiratory viral infections.",
        "exampleVi": "Trẻ sinh non đặc biệt dễ bị tổn thương trước các bệnh nhiễm trùng đường hô hấp do virus lây qua không khí.",
        "synonyms": [
          "Vulnerable",
          "Prone",
          "Receptive"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-102",
        "word": "Stratify",
        "phonetic": "/ˈstræt̬.ə.faɪ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Phân tầng giai cấp hoặc lớp địa chất",
        "definitionEn": "Arrange or classify into different social or physical strata.",
        "exampleEn": "Industrial capitalism can inadvertently stratify society into rigid wealth tiers.",
        "exampleVi": "Chủ nghĩa tư bản công nghiệp có thể vô tình phân tầng xã hội thành các nấc thang của cải cứng nhắc.",
        "synonyms": [
          "Classify",
          "Grade",
          "Layer"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-103",
        "word": "Spurious",
        "phonetic": "/ˈspjʊr.i.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Ngụy tạo, giả mạo, lập luận sai lầm",
        "definitionEn": "Not being what it purports to be; false or fake.",
        "exampleEn": "The statistical correlation between ice cream sales and shark attacks is entirely spurious.",
        "exampleVi": "Mối tương quan thống kê giữa doanh số bán kem và các vụ cá mập tấn công là hoàn toàn ngụy tạo.",
        "synonyms": [
          "Bogus",
          "Fraudulent",
          "False"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-104",
        "word": "Relegate",
        "phonetic": "/ˈrel.ə.ɡeɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Đẩy xuống vị trí thứ yếu, hạ cấp",
        "definitionEn": "Consign or dismiss to an inferior rank or position.",
        "exampleEn": "Women scientists in that historical epoch were unjustifiably relegated to administrative tasks.",
        "exampleVi": "Các nhà khoa học nữ trong thời kỳ lịch sử đó từng bị giáng xuống làm các công việc hành chính một cách bất công.",
        "synonyms": [
          "Demote",
          "Downgrade",
          "Lower"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-105",
        "word": "Reciprocal",
        "phonetic": "/rɪˈsɪp.rə.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Có đi có lại, tương hỗ qua lại",
        "definitionEn": "Given, felt, or done in return; mutually corresponding.",
        "exampleEn": "The bilateral agreement guarantees reciprocal visa exemptions for business travelers.",
        "exampleVi": "Thỏa thuận song phương đảm bảo miễn thị thực có đi có lại cho các doanh nhân đi công tác.",
        "synonyms": [
          "Mutual",
          "Complementary",
          "Shared"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-106",
        "word": "Quasi",
        "phonetic": "/ˈkweɪ.zaɪ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tương tự như, bán phần, gần như",
        "definitionEn": "Apparently but not really; seemingly.",
        "exampleEn": "The quasi-independent regulatory commission oversees compliance across digital payment systems.",
        "exampleVi": "Ủy ban quản lý bán độc lập giám sát việc tuân thủ quy định trên các hệ thống thanh toán kỹ thuật số.",
        "synonyms": [
          "Semi",
          "Pseudo",
          "Apparent"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-107",
        "word": "Plausible",
        "phonetic": "/ˈplɑː.zə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Hợp lý, có vẻ đáng tin",
        "definitionEn": "Seeming reasonable or probable.",
        "exampleEn": "Astrobiologists put forward a plausible explanation for the presence of methane in the atmosphere.",
        "exampleVi": "Các nhà sinh học vũ trụ đã đưa ra một lời giải thích hợp lý cho sự xuất hiện của khí metan trong khí quyển.",
        "synonyms": [
          "Credible",
          "Believable",
          "Feasible"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-108",
        "word": "Permeate",
        "phonetic": "/ˈpɝː.mi.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Thấm nhuần, lan tỏa khắp ngóc ngách",
        "definitionEn": "Spread throughout something; pervade.",
        "exampleEn": "The scent of wild pine needles permeated the cool morning mountain air.",
        "exampleVi": "Mùi thơm của lá thông rừng thấm đẫm vào bầu không khí miền núi ban mai mát lạnh.",
        "synonyms": [
          "Pervade",
          "Infiltrate",
          "Saturate"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-109",
        "word": "Pedagogical",
        "phonetic": "/ˌped.əˈɡɑː.dʒɪ.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Thuộc về phương pháp sư phạm giảng dạy",
        "definitionEn": "Relating to teaching methods and academic instruction.",
        "exampleEn": "The newly introduced interactive tablets represent a major pedagogical evolution in the classroom.",
        "exampleVi": "Những chiếc máy tính bảng tương tác mới được giới thiệu đại diện cho một bước tiến sư phạm lớn trong lớp học.",
        "synonyms": [
          "Instructional",
          "Educational",
          "Academic"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-110",
        "word": "Omniscient",
        "phonetic": "/ɑːmˈnɪʃ.ənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Biết tuốt, toàn tri thấu hiểu mọi sự",
        "definitionEn": "Knowing everything.",
        "exampleEn": "Classical third-person novels often employ an omniscient narrator who sees into every character's mind.",
        "exampleVi": "Các tiểu thuyết ngôi thứ ba cổ điển thường sử dụng một người kể chuyện toàn tri thấu suốt tâm can mọi nhân vật.",
        "synonyms": [
          "All-knowing",
          "Pansophical"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-111",
        "word": "Juxtaposition",
        "phonetic": "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự đặt cạnh nhau để làm nổi bật tương phản",
        "definitionEn": "The fact of two things being seen or placed close together with contrasting effect.",
        "exampleEn": "The striking juxtaposition of sleek modern skyscrapers alongside ancient shrines defines the city skyline.",
        "exampleVi": "Sự đặt cạnh nhau đầy ấn tượng giữa những tòa nhà chọc trời hiện đại bóng bẩy và các ngôi đền cổ xưa định hình nên đường chân trời của thành phố.",
        "synonyms": [
          "Contrast",
          "Comparison",
          "Proximity"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-112",
        "word": "Incongruous",
        "phonetic": "/ɪnˈkɑːŋ.ɡru.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Lạc lõng, không ăn nhập, không phù hợp hoàn cảnh",
        "definitionEn": "Not in harmony or keeping with the surroundings or other aspects of something.",
        "exampleEn": "The modern glass elevator looked entirely incongruous inside the 12th-century stone castle.",
        "exampleVi": "Chiếc thang máy kính hiện đại trông hoàn toàn không ăn nhập bên trong lâu đài đá thế kỷ 12.",
        "synonyms": [
          "Out of place",
          "Incompatible",
          "Jarring"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-113",
        "word": "Holistic",
        "phonetic": "/hoʊˈlɪs.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Toàn diện, tổng thể không tách rời",
        "definitionEn": "Characterized by the treatment of the whole person, taking into account mental and social factors.",
        "exampleEn": "Holistic health approaches integrate proper balanced nutrition, physical exercise, and mental well-being.",
        "exampleVi": "Các cách tiếp cận sức khỏe tổng thể kết hợp dinh dưỡng cân bằng hợp lý, rèn luyện thể chất và an lạc tinh thần.",
        "synonyms": [
          "Comprehensive",
          "Integrated",
          "All-encompassing"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-114",
        "word": "Feasible",
        "phonetic": "/ˈfiː.zə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Khả thi, thực tiễn có thể làm được",
        "definitionEn": "Possible to do easily or conveniently.",
        "exampleEn": "It is technically feasible to produce zero-emission hydrogen fuel cells at commercial scale.",
        "exampleVi": "Việc sản xuất pin nhiên liệu hydro không phát thải ở quy mô thương mại là hoàn toàn khả thi về mặt kỹ thuật.",
        "synonyms": [
          "Viable",
          "Achievable",
          "Practical"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-115",
        "word": "Ephemeral",
        "phonetic": "/ɪˈfem.ɚ.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Phù du, chóng tàn, tồn tại trong chốc lát",
        "definitionEn": "Lasting for a very short time.",
        "exampleEn": "The dazzling colors of cherry blossoms are famously beautiful yet ephemeral.",
        "exampleVi": "Sắc màu rực rỡ của hoa anh đào nổi tiếng là tuyệt đẹp nhưng lại sớm nở tối tàn.",
        "synonyms": [
          "Transitory",
          "Transient",
          "Fleeting"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-116",
        "word": "Disparity",
        "phonetic": "/dɪˈspær.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự cách biệt sâu sắc về trình độ/của cải",
        "definitionEn": "A great difference, especially an unjust inequality.",
        "exampleEn": "International organizations strive to diminish the wide educational disparity between urban and rural girls.",
        "exampleVi": "Các tổ chức quốc tế nỗ lực thu hẹp khoảng cách giáo dục sâu sắc giữa các bé gái thành thị và nông thôn.",
        "synonyms": [
          "Inequality",
          "Imbalance",
          "Divergence"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-117",
        "word": "Cognizant",
        "phonetic": "/ˈkɑːɡ.nɪ.zənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Có nhận thức rõ ràng, ý thức thấu đáo",
        "definitionEn": "Having knowledge or being aware of.",
        "exampleEn": "Urban planners must remain fully cognizant of ecological preservation during infrastructure expansion.",
        "exampleVi": "Các nhà quy hoạch đô thị phải luôn ý thức thấu đáo về việc bảo tồn sinh thái trong quá trình mở rộng hạ tầng.",
        "synonyms": [
          "Aware",
          "Conscious",
          "Mindful"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-118",
        "word": "Banal",
        "phonetic": "/bəˈnɑːl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tầm thường, sáo rỗng, nhàm chán",
        "definitionEn": "So lacking in originality as to be obvious and boring.",
        "exampleEn": "The candidate's acceptance speech was widely criticized for relying on banal clichés rather than concrete policy.",
        "exampleVi": "Bài phát biểu nhận chức của ứng viên bị chỉ trích rộng rãi vì dựa dẫm vào các khẩu hiệu sáo rỗng thay vì chính sách cụ thể.",
        "synonyms": [
          "Clichéd",
          "Trite",
          "Hackneyed"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-119",
        "word": "Anomaly",
        "phonetic": "/əˈnɑː.mə.li/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hiện tượng bất thường, dị thường",
        "definitionEn": "Something that deviates from what is standard, normal, or expected.",
        "exampleEn": "A sudden drop in ocean salinity near the glacier was an alarming environmental anomaly.",
        "exampleVi": "Sự sụt giảm đột ngột độ mặn nước biển gần sông băng là một hiện tượng dị thường về môi trường đáng báo động.",
        "synonyms": [
          "Irregularity",
          "Abnormality",
          "Deviation"
        ],
        "topicId": "ielts-academic"
      },
      {
        "id": "ielts-120",
        "word": "Alleviate",
        "phonetic": "/əˈliː.vi.eɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Làm dịu bớt nỗi đau, xoa dịu áp lực",
        "definitionEn": "Make suffering, deficiency, or a problem less severe.",
        "exampleEn": "The municipal council introduced emergency bus rapid lanes to alleviate severe rush hour traffic.",
        "exampleVi": "Hội đồng thành phố đã đưa vào sử dụng các làn xe buýt nhanh khẩn cấp để giảm bớt tình trạng ùn tắc giờ cao điểm nghiêm trọng.",
        "synonyms": [
          "Relieve",
          "Ease",
          "Mitigate"
        ],
        "topicId": "ielts-academic"
      }
    ]
  },
  {
    "id": "business",
    "title": "Kinh Doanh & Doanh Nghiệp",
    "slug": "business",
    "icon": "Building2",
    "color": "text-indigo-500",
    "bgColor": "bg-indigo-50 dark:bg-indigo-950/40",
    "borderColor": "border-indigo-200 dark:border-indigo-800",
    "description": "Chiến lược công ty, thẩm định đầu tư, định giá startup, tái cấu trúc và quản trị thương hiệu",
    "wordCount": 100,
    "words": [
      {
        "id": "biz-1",
        "word": "Consensus",
        "phonetic": "/kənˈsen.səs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự đồng thuận chung của ban điều hành",
        "definitionEn": "A generally accepted opinion or decision among a group of people.",
        "exampleEn": "The board reached a unanimous consensus to enter the Southeast Asian market.",
        "exampleVi": "Hội đồng quản trị đã đạt được sự đồng thuận nhất trí để tiến vào thị trường Đông Nam Á.",
        "synonyms": [
          "Agreement",
          "Harmony",
          "Concurrence"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-2",
        "word": "Feasibility",
        "phonetic": "/ˌfiː.zəˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tính khả thi của đề án kinh doanh",
        "definitionEn": "The state or degree of being easily or conveniently done.",
        "exampleEn": "We conducted a comprehensive study to evaluate the feasibility of opening twenty new retail stores.",
        "exampleVi": "Chúng tôi đã thực hiện một nghiên cứu toàn diện nhằm đánh giá tính khả thi của việc mở 20 cửa hàng bán lẻ mới.",
        "synonyms": [
          "Viability",
          "Practicability",
          "Workability"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-3",
        "word": "Stakeholder",
        "phonetic": "/ˈsteɪkˌhoʊl.dɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bên liên quan (nhà đầu tư, khách hàng, nhân sự)",
        "definitionEn": "A person with an interest or concern in something, especially a business.",
        "exampleEn": "Transparent communication with internal and external stakeholders is crucial for brand trust.",
        "exampleVi": "Giao tiếp minh bạch với các bên liên quan nội bộ và bên ngoài là điều cốt tử để xây dựng lòng tin thương hiệu.",
        "synonyms": [
          "Shareholder",
          "Partner",
          "Collaborator"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-4",
        "word": "Leverage",
        "phonetic": "/ˈlev.ɚ.ɪdʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Tận dụng đòn bẩy nguồn lực tối đa",
        "definitionEn": "Use something to maximum advantage.",
        "exampleEn": "Startups often leverage viral influencer marketing to gain initial customer traction.",
        "exampleVi": "Các công ty khởi nghiệp thường tận dụng đòn bẩy tiếp thị người ảnh hưởng để thu hút khách hàng ban đầu.",
        "synonyms": [
          "Capitalize on",
          "Exploit positively",
          "Utilize"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-5",
        "word": "Benchmark",
        "phonetic": "/ˈbentʃ.mɑːrk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuẩn mực đối sánh chất lượng",
        "definitionEn": "A standard or point of reference against which things may be compared.",
        "exampleEn": "Our customer retention rates set the new gold benchmark for the enterprise SaaS industry.",
        "exampleVi": "Tỷ lệ giữ chân khách hàng của chúng tôi đã thiết lập chuẩn mực vàng mới cho toàn ngành SaaS doanh nghiệp.",
        "synonyms": [
          "Standard",
          "Criterion",
          "Yardstick"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-6",
        "word": "Milestone",
        "phonetic": "/ˈmaɪl.stoʊn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cột mốc tăng trưởng quan trọng",
        "definitionEn": "A significant stage or event in the development of something.",
        "exampleEn": "Surpassing one million active daily users was an unforgettable corporate milestone.",
        "exampleVi": "Vượt qua một triệu người dùng hoạt động mỗi ngày là một cột mốc công ty không thể nào quên.",
        "synonyms": [
          "Landmark",
          "Turning point",
          "Breakthrough"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-7",
        "word": "Synergy",
        "phonetic": "/ˈsɪn.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hiệu ứng cộng hưởng sức mạnh",
        "definitionEn": "The interaction or cooperation of two or more organizations to produce a combined effect greater than the sum of their separate parts.",
        "exampleEn": "The strategic merger created powerful synergies across logistics, marketing, and R&D operations.",
        "exampleVi": "Vụ sáp nhập chiến lược đã tạo ra hiệu ứng cộng hưởng mạnh mẽ trên các mảng hậu cần, tiếp thị và nghiên cứu phát triển.",
        "synonyms": [
          "Collaboration",
          "Combined effort",
          "Symbiosis"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-8",
        "word": "Streamline",
        "phonetic": "/ˈstriːm.laɪn/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Tinh giản quy trình, tối ưu hóa bộ máy",
        "definitionEn": "Make an organization or system more efficient and effective by employing faster or simpler working methods.",
        "exampleEn": "Automating invoice processing allowed us to streamline accounting operations significantly.",
        "exampleVi": "Việc tự động hóa xử lý hóa đơn đã cho phép chúng tôi tinh giản các quy trình kế toán một cách đáng kể.",
        "synonyms": [
          "Optimize",
          "Simplify",
          "Modernize"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-9",
        "word": "Scalability",
        "phonetic": "/ˌskeɪ.ləˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khả năng mở rộng quy mô linh hoạt",
        "definitionEn": "The capacity to be changed in size or scale.",
        "exampleEn": "Cloud infrastructure offers unmatched scalability as transaction volumes spike during flash sales.",
        "exampleVi": "Hạ tầng đám mây mang lại khả năng mở rộng quy mô vô song khi khối lượng giao dịch tăng vọt trong đợt giảm giá chớp nhoáng.",
        "synonyms": [
          "Expandability",
          "Adaptability",
          "Flexibility"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-10",
        "word": "Downsizing",
        "phonetic": "/ˈdaʊnˌsaɪ.zɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự thu hẹp quy mô nhân sự",
        "definitionEn": "The act of reducing the number of employees on a company's payroll.",
        "exampleEn": "Economic headwinds forced the conglomerate into painful downsizing across non-core divisions.",
        "exampleVi": "Những cơn gió ngược kinh tế đã buộc tập đoàn phải thu hẹp quy mô đau đớn trên khắp các phòng ban phi cốt lõi.",
        "synonyms": [
          "Workforce reduction",
          "Staff cuts",
          "Right-sizing"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-11",
        "word": "Outsourcing",
        "phonetic": "/ˈaʊtˌsɔːr.sɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Gia công ngoài, thuê ngoài dịch vụ",
        "definitionEn": "Obtaining goods or services from an outside or foreign supplier.",
        "exampleEn": "Outsourcing customer service to specialized centers reduced operational expenses by 35 percent.",
        "exampleVi": "Việc thuê ngoài dịch vụ chăm sóc khách hàng tới các trung tâm chuyên nghiệp đã giảm 35% chi phí vận hành.",
        "synonyms": [
          "External contracting",
          "Contracting out"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-12",
        "word": "Turnaround",
        "phonetic": "/ˈtɝːn.ə.raʊnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đảo ngược tình thế, phục hồi ngoạn mục",
        "definitionEn": "An abrupt or unexpected change, especially one that results in a more favorable outcome.",
        "exampleEn": "The new CEO orchestrated a miraculous turnaround that saved the airline from imminent bankruptcy.",
        "exampleVi": "Tổng giám đốc mới đã kiến tạo một cú lội ngược dòng kỳ diệu cứu hãng hàng không khỏi nguy cơ phá sản cận kề.",
        "synonyms": [
          "Recovery",
          "Rebound",
          "Reversal"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-13",
        "word": "Brand Equity",
        "phonetic": "/brænd ˈek.wə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giá trị tài sản thương hiệu trong lòng khách hàng",
        "definitionEn": "The commercial value that derives from consumer perception of the brand name of a particular product.",
        "exampleEn": "Apple commands enormous brand equity, allowing it to maintain premium price margins.",
        "exampleVi": "Apple nắm giữ giá trị tài sản thương hiệu khổng lồ, cho phép hãng duy trì mức biên lợi nhuận cao cấp.",
        "synonyms": [
          "Brand worth",
          "Reputational capital"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-14",
        "word": "Market Penetration",
        "phonetic": "/ˈmɑːr.kɪt ˌpen.əˈtreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Độ thâm nhập thị trường",
        "definitionEn": "The extent to which a product is recognized and bought by customers in a particular market.",
        "exampleEn": "Aggressive introductory pricing drove rapid market penetration in tier-two cities.",
        "exampleVi": "Mức giá giới thiệu cạnh tranh quyết liệt đã thúc đẩy mức thâm nhập thị trường thần tốc tại các đô thị loại hai.",
        "synonyms": [
          "Market share expansion",
          "Market reach"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-15",
        "word": "Overhaul",
        "phonetic": "/ˈoʊ.vɚ.hɑːl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Đại tu toàn diện hệ thống",
        "definitionEn": "Take apart a piece of machinery or equipment in order to examine and repair it; thoroughly reform.",
        "exampleEn": "The engineering director decided to overhaul the entire legacy codebase using modern microservices.",
        "exampleVi": "Giám đốc kỹ thuật quyết định đại tu toàn bộ cơ sở mã cũ kỹ bằng kiến trúc vi dịch vụ hiện đại.",
        "synonyms": [
          "Revamp",
          "Rebuild",
          "Refurbish"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-16",
        "word": "Pivot",
        "phonetic": "/ˈpɪv.ət/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyển hướng mô hình kinh doanh nhanh",
        "definitionEn": "Change direction or business strategy substantially.",
        "exampleEn": "When hardware sales plummeted, the startup decided to pivot into enterprise cloud software.",
        "exampleVi": "Khi doanh số phần cứng sụt giảm mạnh, công ty khởi nghiệp quyết định chuyển hướng sang phần mềm đám mây doanh nghiệp.",
        "synonyms": [
          "Shift",
          "Reorient",
          "Change course"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-17",
        "word": "Due Diligence",
        "phonetic": "/ˌduː ˈdɪl.ə.dʒəns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thẩm định chi tiết trước khi đầu tư/mua lại",
        "definitionEn": "Comprehensive appraisal of a business undertaken by a prospective buyer.",
        "exampleEn": "Our legal and financial advisors spent three months conducting thorough due diligence.",
        "exampleVi": "Các cố vấn pháp lý và tài chính của chúng tôi đã dành 3 tháng để tiến hành thẩm định chi tiết toàn diện.",
        "synonyms": [
          "Vetting",
          "Investigation",
          "Audit"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-18",
        "word": "Venture Capital",
        "phonetic": "/ˈven.tʃɚ ˌkæp.ə.t̬əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quỹ đầu tư mạo hiểm mạo hiểm công nghệ",
        "definitionEn": "Capital invested in a project in which there is a substantial element of risk, typically for a new business.",
        "exampleEn": "Silicon Valley venture capital firms poured billions of dollars into generative AI startups.",
        "exampleVi": "Các quỹ đầu tư mạo hiểm Thung lũng Silicon đã rót hàng tỷ USD vào các công ty khởi nghiệp AI tạo sinh.",
        "synonyms": [
          "Risk capital",
          "Startup funding"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-19",
        "word": "Incubator",
        "phonetic": "/ˈɪŋ.kjə.beɪ.t̬ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vườn ươm khởi nghiệp",
        "definitionEn": "An organization or place that helps developing businesses and startups to grow.",
        "exampleEn": "The university established a tech incubator to support student-led biotechnology ventures.",
        "exampleVi": "Trường đại học đã thành lập một vườn ươm công nghệ để hỗ trợ các dự án công nghệ sinh học do sinh viên dẫn dắt.",
        "synonyms": [
          "Accelerator",
          "Startup hub"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-20",
        "word": "Disruption",
        "phonetic": "/dɪsˈrʌp.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đột phá làm đảo lộn trật tự thị trường cũ",
        "definitionEn": "Radical change in an industry or business strategy, especially involving technology.",
        "exampleEn": "Ride-hailing apps caused major disruption to traditional taxi monopolies globally.",
        "exampleVi": "Các ứng dụng gọi xe công nghệ đã tạo nên cú đột phá đảo lộn thế độc quyền của taxi truyền thống trên toàn cầu.",
        "synonyms": [
          "Upheaval",
          "Revolution",
          "Innovation"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-21",
        "word": "Monopoly",
        "phonetic": "/məˈnɑː.pəl.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thế độc quyền thương mại",
        "definitionEn": "The exclusive possession or control of the supply of or trade in a commodity or service.",
        "exampleEn": "Antitrust regulators filed charges to dismantle the company's regional monopoly over broadband fiber.",
        "exampleVi": "Các cơ quan chống độc quyền đã đệ đơn kiện nhằm phá bỏ thế độc quyền của công ty về cáp quang băng rộng tại khu vực.",
        "synonyms": [
          "Exclusivity",
          "Cartel",
          "Dominance"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-22",
        "word": "Oligopoly",
        "phonetic": "/ˌɑː.lɪˈɡɑː.pəl.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thị trường thiểu số độc quyền (vài ông lớn)",
        "definitionEn": "A state of limited competition, in which a market is shared by a small number of producers.",
        "exampleEn": "The civil aviation manufacturing market is essentially an oligopoly dominated by Boeing and Airbus.",
        "exampleVi": "Thị trường sản xuất máy bay dân dụng về cơ bản là một thị trường thiểu quyền bị thống trị bởi Boeing và Airbus.",
        "synonyms": [
          "Dominated market",
          "Exclusive consortium"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-23",
        "word": "Underwrite",
        "phonetic": "/ˈʌn.dɚ.raɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Bảo lãnh phát hành cổ phiếu hoặc bảo hiểm rủi ro",
        "definitionEn": "Sign and accept liability under an insurance policy, thus guaranteeing payment in case of loss; financial backing.",
        "exampleEn": "Top global investment banks agreed to underwrite the tech giant's multi-billion-dollar initial public offering.",
        "exampleVi": "Các ngân hàng đầu tư hàng đầu thế giới đã đồng ý bảo lãnh phát hành đợt chào bán cổ phiếu lần đầu ra công chúng trị giá hàng tỷ USD của gã khổng lồ công nghệ.",
        "synonyms": [
          "Guarantee",
          "Insure",
          "Back financially"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-24",
        "word": "Liquidation",
        "phonetic": "/ˌlɪk.wəˈdeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thanh lý tài sản giải thể công ty",
        "definitionEn": "The process of closing a business and selling its assets to pay off debts.",
        "exampleEn": "The bankrupt department store chain entered mandatory court liquidation last Monday.",
        "exampleVi": "Chuỗi trung tâm thương mại phá sản đã bước vào giai đoạn thanh lý tài sản bắt buộc theo lệnh của tòa vào thứ Hai tuần trước.",
        "synonyms": [
          "Winding up",
          "Dissolution",
          "Sell-off"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-25",
        "word": "Insolvency",
        "phonetic": "/ɪnˈsɑːl.vən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tình trạng mất khả năng thanh toán nợ nần",
        "definitionEn": "The state of being unable to pay one's debts.",
        "exampleEn": "Skyrocketing interest rates pushed several commercial real estate developers into deep insolvency.",
        "exampleVi": "Lãi suất tăng chóng mặt đã đẩy nhiều nhà phát triển bất động sản thương mại vào tình trạng mất khả năng thanh toán sâu sắc.",
        "synonyms": [
          "Bankruptcy",
          "Default",
          "Financial ruin"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-26",
        "word": "Headcount",
        "phonetic": "/ˈhed.kaʊnt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tổng số lượng nhân sự trong biên chế",
        "definitionEn": "The total number of people employed by a particular organization.",
        "exampleEn": "Management instituted a strict hiring freeze to maintain the current engineering headcount.",
        "exampleVi": "Ban quản lý đã thiết lập lệnh đóng băng tuyển dụng nghiêm ngặt để duy trì số lượng nhân sự kỹ thuật hiện tại.",
        "synonyms": [
          "Staff size",
          "Personnel count",
          "Workforce"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-27",
        "word": "Attrition",
        "phonetic": "/əˈtrɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự hao mòn nhân sự tự nhiên (nghỉ hưu, thôi việc)",
        "definitionEn": "The reduction in staff numbers through retirement, resignation, or death.",
        "exampleEn": "The corporation reduced its workforce through natural attrition rather than forced layoffs.",
        "exampleVi": "Tập đoàn đã cắt giảm quy mô nhân lực thông qua sự hao mòn tự nhiên thay vì sa thải hàng loạt ép buộc.",
        "synonyms": [
          "Staff erosion",
          "Natural reduction"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-28",
        "word": "Onboarding",
        "phonetic": "/ˈɑːnˌbɔːr.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Quy trình hội nhập nhân sự mới",
        "definitionEn": "The action or process of integrating a new employee into an organization.",
        "exampleEn": "A structured onboarding program improves first-year employee retention by over fifty percent.",
        "exampleVi": "Một quy trình hội nhập bài bản giúp tăng tỷ lệ giữ chân nhân viên năm đầu lên hơn 50%.",
        "synonyms": [
          "Orientation",
          "Induction",
          "Integration"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-29",
        "word": "KPI",
        "phonetic": "/ˌkeɪ.piːˈaɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chỉ số đánh giá hiệu quả công việc",
        "definitionEn": "Key Performance Indicator: a quantifiable measure used to evaluate success in reaching targets.",
        "exampleEn": "Meeting quarterly customer satisfaction scores is a mandatory KPI for support agents.",
        "exampleVi": "Đạt điểm hài lòng của khách hàng hàng quý là một chỉ số KPI bắt buộc đối với nhân viên hỗ trợ.",
        "synonyms": [
          "Metric",
          "Target",
          "Performance measure"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-30",
        "word": "OKR",
        "phonetic": "/ˌoʊ.keɪˈɑːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mục tiêu và kết quả then chốt",
        "definitionEn": "Objectives and Key Results: a goal-setting framework used by individuals and teams.",
        "exampleEn": "Google popularized the OKR system to align enterprise goals across tens of thousands of workers.",
        "exampleVi": "Google đã phổ biến hệ thống OKR nhằm đồng bộ hóa các mục tiêu doanh nghiệp trên hàng vạn nhân sự.",
        "synonyms": [
          "Goal framework",
          "Target framework"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-31",
        "word": "Bottleneck",
        "phonetic": "/ˈbɑː.t̬əl.nek/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nút thắt cổ chai làm chậm trễ tiến độ",
        "definitionEn": "A point of congestion or blockage in a system or process.",
        "exampleEn": "A shortage of microchips created a crippling bottleneck in vehicle assembly plants.",
        "exampleVi": "Tình trạng thiếu hụt chip vi xử lý đã tạo ra nút thắt cổ chai làm đình trệ các nhà máy lắp ráp ô tô.",
        "synonyms": [
          "Choke point",
          "Impediment",
          "Obstacle"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-32",
        "word": "Deliverable",
        "phonetic": "/dɪˈlɪv.ɚ.ə.bəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sản phẩm bàn giao theo hợp đồng",
        "definitionEn": "A thing able to be provided, especially as a product of a development process.",
        "exampleEn": "The final contract deliverable is an end-to-end encrypted mobile payment application.",
        "exampleVi": "Sản phẩm bàn giao cuối cùng theo hợp đồng là ứng dụng thanh toán di động được mã hóa đầu cuối.",
        "synonyms": [
          "Handover product",
          "End product",
          "Output"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-33",
        "word": "Core Competency",
        "phonetic": "/kɔːr ˈkɑːm.pə.tən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Năng lực cạnh tranh cốt lõi",
        "definitionEn": "A harmonized combination of multiple resources and skills that distinguish a firm in the marketplace.",
        "exampleEn": "Ultra-low latency database optimization is our startup's primary core competency.",
        "exampleVi": "Tối ưu hóa cơ sở dữ liệu với độ trễ siêu thấp là năng lực cốt lõi hàng đầu của công ty khởi nghiệp chúng tôi.",
        "synonyms": [
          "Key capability",
          "Competitive advantage"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-34",
        "word": "Competitive Advantage",
        "phonetic": "/kəmˈpet̬.ə.t̬ɪv ədˈvæn.t̬ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lợi thế cạnh tranh vượt trội",
        "definitionEn": "A condition or circumstance that puts a company in a favorable or superior business position.",
        "exampleEn": "Patented proprietary manufacturing algorithms provide a durable competitive advantage.",
        "exampleVi": "Các thuật toán sản xuất độc quyền đã được cấp bằng sáng chế mang lại lợi thế cạnh tranh bền vững.",
        "synonyms": [
          "Edge",
          "Upper hand",
          "Strategic strength"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-35",
        "word": "Value Proposition",
        "phonetic": "/ˈvæl.juː ˌprɑː.pəˈzɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tuyên bố giá trị khác biệt cho khách hàng",
        "definitionEn": "An innovation, service, or feature intended to make a company or product attractive to customers.",
        "exampleEn": "The product's clear value proposition is cutting manual data entry time by eighty percent.",
        "exampleVi": "Tuyên ngôn giá trị rõ ràng của sản phẩm là cắt giảm 80% thời gian nhập liệu thủ công.",
        "synonyms": [
          "Unique selling point",
          "USP",
          "Benefit statement"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-36",
        "word": "Return on Investment",
        "phonetic": "/rɪˈtɝːn ɑːn ɪnˈvest.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tỷ suất hoàn vốn đầu tư (ROI)",
        "definitionEn": "A performance measure used to evaluate the efficiency of an investment.",
        "exampleEn": "Automating warehouse packaging yielded a swift return on investment within eight months.",
        "exampleVi": "Tự động hóa đóng gói nhà kho đã mang lại tỷ suất hoàn vốn đầu tư nhanh chóng chỉ trong vòng 8 tháng.",
        "synonyms": [
          "ROI",
          "Yield",
          "Profit margin"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-37",
        "word": "Breakeven",
        "phonetic": "/ˈbreɪkˌiː.vən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Điểm hòa vốn không lỗ không lãi",
        "definitionEn": "The point at which cost and revenue of a commercial enterprise are equal.",
        "exampleEn": "The coffee shop chain projects reaching monthly breakeven within six months of opening.",
        "exampleVi": "Chuỗi quán cà phê dự kiến sẽ đạt điểm hòa vốn hàng tháng trong vòng 6 tháng kể từ khi khai trương.",
        "synonyms": [
          "Parity point",
          "Zero-profit point"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-38",
        "word": "Runway",
        "phonetic": "/ˈrʌn.weɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thời gian còn sống sót theo quỹ tiền mặt của startup",
        "definitionEn": "The amount of time a business has left until it runs out of money, assuming revenue and expenses stay constant.",
        "exampleEn": "Securing seed funding gave the software team an eighteen-month runway to build the MVP.",
        "exampleVi": "Nhận được vòng vốn hạt giống đã mang lại cho đội ngũ phần mềm 18 tháng tồn tại để xây dựng bản sản phẩm khả dụng tối thiểu.",
        "synonyms": [
          "Cash runway",
          "Survival period"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-39",
        "word": "Burn Rate",
        "phonetic": "/ˈbɝːn ˌreɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tốc độ tiêu thụ tiền mặt mỗi tháng của công ty",
        "definitionEn": "The rate at which a new company is spending its venture capital to finance overhead operations before generating positive cash flow.",
        "exampleEn": "The founders took steps to trim marketing expenses and decrease their monthly burn rate.",
        "exampleVi": "Các nhà sáng lập đã thực hiện các bước cắt giảm chi phí tiếp thị nhằm hạ thấp tốc độ đốt tiền hàng tháng.",
        "synonyms": [
          "Cash expenditure speed",
          "Spending rate"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-40",
        "word": "Bootstrapping",
        "phonetic": "/ˈbuːtˌstræp.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tự lực cánh sinh xây dựng doanh nghiệp không gọi vốn",
        "definitionEn": "Building a business from the ground up without relying on external equity financing or venture capital.",
        "exampleEn": "Bootstrapping taught the early founders to maintain ruthless fiscal discipline and obsess over profitability.",
        "exampleVi": "Tự lực cánh sinh phát triển công ty đã rèn luyện cho những nhà sáng lập ban đầu tính kỷ luật tài chính nghiêm ngặt và luôn chú trọng lợi nhuận.",
        "synonyms": [
          "Self-funding",
          "Organic growth"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-41",
        "word": "White Collar",
        "phonetic": "/ˌwaɪt ˈkɑː.lɚ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Lao động trí óc, nhân viên văn phòng",
        "definitionEn": "Relating to the work done by people who work in an office or other professional environment.",
        "exampleEn": "Automation is increasingly impacting white-collar professions like financial analysis and law.",
        "exampleVi": "Tự động hóa đang ngày càng tác động sâu sắc đến các ngành nghề văn phòng như phân tích tài chính và luật pháp.",
        "synonyms": [
          "Professional",
          "Office worker"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-42",
        "word": "Blue Collar",
        "phonetic": "/ˌbluː ˈkɑː.lɚ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Lao động chân tay, công nhân nhà xưởng",
        "definitionEn": "Relating to manual work or workers, particularly in industry.",
        "exampleEn": "Demand for skilled blue-collar workers in precision manufacturing continues to rise.",
        "exampleVi": "Nhu cầu về lực lượng lao động tay nghề cao trong ngành sản xuất chính xác tiếp tục tăng trưởng.",
        "synonyms": [
          "Manual laborer",
          "Industrial worker"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-43",
        "word": "Micromanage",
        "phonetic": "/ˈmaɪ.kroʊˌmæn.ɪdʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Soi mói quản lý tiểu tiết gây ức chế",
        "definitionEn": "Control every part of a business or system, even small details, in a way that is not helpful.",
        "exampleEn": "Managers who micromanage stifle employee creativity and induce unnecessary stress.",
        "exampleVi": "Những người quản lý có thói quen soi mói tiểu tiết sẽ bóp nghẹt tính sáng tạo của nhân viên và gây căng thẳng không đáng có.",
        "synonyms": [
          "Over-supervise",
          "Interfere"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-44",
        "word": "Workplace Culture",
        "phonetic": "/ˈwɝːk.pleɪs ˌkʌl.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Văn hóa môi trường làm việc",
        "definitionEn": "The environment that you create for your employees, including values, beliefs, and behaviors.",
        "exampleEn": "A transparent workplace culture fosters psychological safety and cross-team collaboration.",
        "exampleVi": "Văn hóa môi trường làm việc minh bạch sẽ nuôi dưỡng sự an tâm tâm lý và sự hợp tác giữa các phòng ban.",
        "synonyms": [
          "Company climate",
          "Organizational culture"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-45",
        "word": "Whistleblower",
        "phonetic": "/ˈwɪs.əlˌbloʊ.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Người dũng cảm tố giác sai phạm nội bộ",
        "definitionEn": "A person who informs on a person or organization regarded as engaging in an unlawful or immoral activity.",
        "exampleEn": "The corporate whistleblower alerted regulatory authorities to widespread accounting irregularities.",
        "exampleVi": "Người tố giác nội bộ đã cảnh báo các cơ quan quản lý về những hành vi bất thường kế toán tràn lan trong tập đoàn.",
        "synonyms": [
          "Informant",
          "Tipster",
          "Exposer"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-46",
        "word": "Severance Pay",
        "phonetic": "/ˈsev.ɚ.əns ˌpeɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tiền trợ cấp khi chấm dứt hợp đồng lao động",
        "definitionEn": "Money paid by an employer to an employee whose job the employer has had to bring to an end.",
        "exampleEn": "Discharged senior executives were granted six months of base severance pay.",
        "exampleVi": "Những giám đốc điều hành cấp cao bị miễn nhiệm đã được chi trả 6 tháng lương cơ bản trợ cấp thôi việc.",
        "synonyms": [
          "Redundancy pay",
          "Termination payout"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-47",
        "word": "Golden Parachute",
        "phonetic": "/ˌɡoʊl.dən ˈper.ə.ʃuːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khoản bồi thường kếch xù cho sếp lớn khi rời công ty",
        "definitionEn": "A large payment or other financial compensation guaranteed to a company executive if they should be dismissed.",
        "exampleEn": "The outgoing chief executive walked away with a fifty-million-dollar golden parachute.",
        "exampleVi": "Tổng giám đốc điều hành mãn nhiệm đã rời ghế với khoản bồi thường kếch xù lên đến 50 triệu USD.",
        "synonyms": [
          "Executive exit bonus",
          "Severance package"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-48",
        "word": "Hostile Takeover",
        "phonetic": "/ˌhɑː.stəl ˈteɪkˌoʊ.vɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thương vụ thâu tóm thù địch chống lại ý muốn ban lãnh đạo",
        "definitionEn": "The acquisition of one company by another that is accomplished by going directly to the company's shareholders.",
        "exampleEn": "The board launched a poison pill defense strategy to fend off the hostile takeover bid.",
        "exampleVi": "Hội đồng quản trị đã triển khai chiến thuật phòng thủ thuốc độc để đẩy lùi nỗ lực thâu tóm thù địch.",
        "synonyms": [
          "Aggressive buyout",
          "Unsolicited acquisition"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-49",
        "word": "Non-Disclosure Agreement",
        "phonetic": "/ˌnɑːn.dɪˈskloʊ.ʒɚ əˈɡriː.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thỏa thuận bảo mật thông tin (NDA)",
        "definitionEn": "A contract by which one or more parties agree not to disclose confidential information.",
        "exampleEn": "Engineers must sign an NDA before getting access to the unreleased product prototypes.",
        "exampleVi": "Các kỹ sư phải ký thỏa thuận bảo mật trước khi được tiếp cận các mẫu sản phẩm nguyên mẫu chưa ra mắt.",
        "synonyms": [
          "NDA",
          "Confidentiality pact",
          "Secrecy contract"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-50",
        "word": "Intellectual Property",
        "phonetic": "/ˌɪn.t̬əlˈek.tʃu.əl ˈprɑː.pɚ.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài sản sở hữu trí tuệ",
        "definitionEn": "Intangible property that is the result of creativity, such as patents, copyrights, and trademarks.",
        "exampleEn": "Safeguarding corporate intellectual property is critical in high-tech manufacturing.",
        "exampleVi": "Bảo vệ tài sản sở hữu trí tuệ của doanh nghiệp là điều sống còn trong lĩnh vực sản xuất công nghệ cao.",
        "synonyms": [
          "IP",
          "Patents and copyrights"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-51",
        "word": "Patent",
        "phonetic": "/ˈpæt.ənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bằng sáng chế độc quyền bảo hộ công nghệ",
        "definitionEn": "A government authority or license conferring a right or title for a set period, especially the sole right to exclude others from making or selling an invention.",
        "exampleEn": "The biotech firm was granted a patent for its revolutionary gene-editing technique.",
        "exampleVi": "Công ty công nghệ sinh học đã được cấp bằng sáng chế cho kỹ thuật chỉnh sửa gen mang tính cách mạng của mình.",
        "synonyms": [
          "Copyright",
          "License",
          "Exclusive right"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-52",
        "word": "Trademark",
        "phonetic": "/ˈtreɪd.mɑːrk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nhãn hiệu hàng hóa được đăng ký bảo hộ",
        "definitionEn": "A symbol, word, or words legally registered or established by use as representing a company or product.",
        "exampleEn": "Counterfeit manufacturers were penalized for infringing upon the registered global trademark.",
        "exampleVi": "Những kẻ sản xuất hàng giả đã bị xử phạt nghiêm khắc vì vi phạm nhãn hiệu đã được đăng ký bảo hộ toàn cầu.",
        "synonyms": [
          "Brand name",
          "Logo",
          "Emblem"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-53",
        "word": "Infringement",
        "phonetic": "/ɪnˈfrɪndʒ.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hành vi xâm phạm quyền pháp lý/sở hữu",
        "definitionEn": "The action of breaking the terms of a law, agreement, etc.; violation.",
        "exampleEn": "The software giant settled an intellectual property infringement lawsuit out of court.",
        "exampleVi": "Gã khổng lồ phần mềm đã dàn xếp êm đẹp vụ kiện xâm phạm quyền sở hữu trí tuệ ngoài tòa án.",
        "synonyms": [
          "Violation",
          "Breach",
          "Contravention"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-54",
        "word": "Restructuring",
        "phonetic": "/ˌriːˈstrʌk.tʃɚ.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tái cấu trúc bộ máy và tài chính",
        "definitionEn": "Reorganizing the operational, legal, ownership, or other structures of a company.",
        "exampleEn": "The comprehensive corporate restructuring helped the legacy retailer remain solvent.",
        "exampleVi": "Cuộc tái cấu trúc doanh nghiệp toàn diện đã giúp nhà bán lẻ truyền thống duy trì khả năng thanh toán.",
        "synonyms": [
          "Reorganization",
          "Overhaul",
          "Realignment"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-55",
        "word": "Divestment",
        "phonetic": "/daɪˈvest.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thoái vốn đầu tư khỏi tài sản phụ",
        "definitionEn": "The reduction of some kind of asset for financial, ethical, or political objectives.",
        "exampleEn": "The oil corporation announced the divestment of its aging coal extraction assets.",
        "exampleVi": "Tập đoàn dầu mỏ đã tuyên bố thoái vốn khỏi các tài sản khai thác than đá già cỗi.",
        "synonyms": [
          "Divestiture",
          "Disinvestment",
          "Asset sale"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-56",
        "word": "Conglomerate",
        "phonetic": "/kənˈɡlɑː.mɚ.ət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tập đoàn quy mô lớn đa lĩnh vực",
        "definitionEn": "A multi-industry company consisting of several distinct and unrelated business entities.",
        "exampleEn": "The Korean conglomerate operates shipyards, insurance firms, and electronics factories.",
        "exampleVi": "Tập đoàn đa ngành Hàn Quốc vận hành các xưởng đóng tàu, công ty bảo hiểm và nhà máy điện tử.",
        "synonyms": [
          "Corporate group",
          "Holding empire"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-57",
        "word": "Spin-off",
        "phonetic": "/ˈspɪn.ɑːf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tách công ty con thành công ty đại chúng độc lập",
        "definitionEn": "A byproduct or incidental result of a larger project, or a new independent company formed from an existing firm.",
        "exampleEn": "The automaker announced a public spin-off of its dedicated electric vehicle division.",
        "exampleVi": "Hãng xe hơi đã công bố việc tách độc lập bộ phận xe điện chuyên biệt thành công ty đại chúng.",
        "synonyms": [
          "Offshoot",
          "Branch company",
          "Subsidiary IPO"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-58",
        "word": "Seed Capital",
        "phonetic": "/ˈsiːd ˌkæp.ə.t̬əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vốn hạt giống giai đoạn phôi thai",
        "definitionEn": "The initial funding used to establish and begin developing a business concept.",
        "exampleEn": "Angel investors provided two hundred thousand dollars in seed capital for the fintech app.",
        "exampleVi": "Các nhà đầu tư thiên thần đã cung cấp 200.000 USD vốn hạt giống cho ứng dụng công nghệ tài chính.",
        "synonyms": [
          "Initial funding",
          "Angel funding"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-59",
        "word": "Angel Investor",
        "phonetic": "/ˈeɪn.dʒəl ɪnˌves.tɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhà đầu tư thiên thần cá nhân",
        "definitionEn": "An individual who provides capital for a business startup, usually in exchange for convertible debt or ownership equity.",
        "exampleEn": "An early angel investor took a ten percent stake in the nascent video streaming platform.",
        "exampleVi": "Một nhà đầu tư thiên thần thuở ban đầu đã nắm giữ 10% cổ phần tại nền tảng phát video trực tuyến non trẻ.",
        "synonyms": [
          "Seed investor",
          "Private backer"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-60",
        "word": "Term Sheet",
        "phonetic": "/ˈtɝːm ˌʃiːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Bản điều khoản cam kết đầu tư sơ bộ",
        "definitionEn": "A non-binding agreement showing the basic terms and conditions under which an investment will be made.",
        "exampleEn": "After reviewing the venture term sheet, the founders negotiated for a higher company valuation.",
        "exampleVi": "Sau khi xem xét kỹ bản điều khoản đầu tư, các nhà sáng lập đã đàm phán để nâng mức định giá công ty lên cao hơn.",
        "synonyms": [
          "Investment terms",
          "Preliminary deal sheet"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-61",
        "word": "Valuation",
        "phonetic": "/ˌvæl.juˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mức định giá tổng tài sản doanh nghiệp",
        "definitionEn": "An estimation of the worth of something, especially one carried out by a professional.",
        "exampleEn": "The generative AI startup attained a staggering ten-billion-dollar market valuation.",
        "exampleVi": "Công ty khởi nghiệp AI tạo sinh đã đạt được mức định giá thị trường gây sửng sốt lên tới 10 tỷ USD.",
        "synonyms": [
          "Appraisal",
          "Assessment",
          "Worth estimate"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-62",
        "word": "Unicorn",
        "phonetic": "/ˈjuː.nə.kɔːrn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Kỳ lân công nghệ (startup định giá trên 1 tỷ USD)",
        "definitionEn": "A privately held startup company with a value of over $1 billion.",
        "exampleEn": "Achieving unicorn status within three years made the payment provider an international sensation.",
        "exampleVi": "Đạt được danh hiệu kỳ lân chỉ trong vòng 3 năm đã biến nhà cung cấp dịch vụ thanh toán trở thành hiện tượng quốc tế.",
        "synonyms": [
          "Billion-dollar startup"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-63",
        "word": "Decacorn",
        "phonetic": "/ˈdek.ə.kɔːrn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Siêu kỳ lân (startup định giá trên 10 tỷ USD)",
        "definitionEn": "A privately held startup company with a valuation exceeding $10 billion.",
        "exampleEn": "Only an elite tier of tech firms transition from unicorn to decacorn status prior to going public.",
        "exampleVi": "Chỉ có tầng lớp công ty công nghệ tinh hoa mới có thể chuyển mình từ kỳ lân lên siêu kỳ lân trước khi lên sàn đại chúng.",
        "synonyms": [
          "Mega startup",
          "Ten-billion unicorn"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-64",
        "word": "Sweat Equity",
        "phonetic": "/ˈswet ˌek.wə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cổ phần đóng góp bằng công sức thay vì tiền",
        "definitionEn": "An interest or increased value in a property or business earned from labor toward its creation or improvement.",
        "exampleEn": "The lead engineer accepted a lower base salary in exchange for valuable sweat equity shares.",
        "exampleVi": "Kỹ sư trưởng đã chấp nhận mức lương cơ bản thấp hơn để đổi lấy số cổ phần công sức đóng góp giá trị.",
        "synonyms": [
          "Labor equity",
          "Contribution share"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-65",
        "word": "Vesting Period",
        "phonetic": "/ˈves.tɪŋ ˌpɪr.i.əd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thời gian giữ chân để cổ phần chính thức có hiệu lực",
        "definitionEn": "The period of time before shares given to an employee unconditionally belong to them.",
        "exampleEn": "Employee stock grants typically follow a four-year vesting period with a one-year cliff.",
        "exampleVi": "Các khoản cấp cổ phiếu cho nhân viên thường tuân theo thời hạn nhận dần 4 năm với mốc một năm đầu tiên.",
        "synonyms": [
          "Vesting schedule",
          "Accrual period"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-66",
        "word": "Cliff",
        "phonetic": "/klɪf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mốc thời gian tối thiểu để nhận phần cổ phần đầu tiên",
        "definitionEn": "A period of time during which an employee must stay at a company to receive any stock options.",
        "exampleEn": "Leaving the software startup before the one-year cliff means forfeiting all unvested equity options.",
        "exampleVi": "Rời khỏi công ty khởi nghiệp phần mềm trước mốc thời gian một năm đồng nghĩa với việc mất toàn bộ quyền chọn cổ phiếu chưa phát hành.",
        "synonyms": [
          "Threshold date",
          "Waiting threshold"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-67",
        "word": "Golden Handcuffs",
        "phonetic": "/ˌɡoʊl.dən ˈhænd.kʌfs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Xiềng xích vàng (phúc lợi khủng để giữ chân nhân sự cốt cán)",
        "definitionEn": "Financial incentives used to prevent a valuable employee from leaving a company.",
        "exampleEn": "Substantial delayed stock bonuses act as effective golden handcuffs for key artificial intelligence researchers.",
        "exampleVi": "Những khoản thưởng cổ phiếu trì hoãn giá trị lớn đóng vai trò như xiềng xích vàng hiệu quả để giữ chân các nhà nghiên cứu trí tuệ nhân tạo trọng yếu.",
        "synonyms": [
          "Retention incentives",
          "Lock-in rewards"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-68",
        "word": "Glass Ceiling",
        "phonetic": "/ˌɡlæs ˈsiː.lɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Rào cản vô hình ngăn thăng tiến (phụ nữ, thiểu số)",
        "definitionEn": "An unacknowledged barrier to advancement in a profession, especially affecting women and members of minorities.",
        "exampleEn": "Promoting female executives to the boardroom shattered the traditional corporate glass ceiling.",
        "exampleVi": "Việc thăng chức cho các nữ giám đốc điều hành vào hội đồng quản trị đã phá vỡ rào cản vô hình truyền thống của doanh nghiệp.",
        "synonyms": [
          "Invisible barrier",
          "Promotion ceiling"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-69",
        "word": "Brain Drain",
        "phonetic": "/ˈbreɪn ˌdreɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chảy máu chất xám ra nước ngoài hoặc đối thủ",
        "definitionEn": "The emigration of highly trained or intelligent people from a particular country or firm.",
        "exampleEn": "Competitive overseas salaries are accelerating the brain drain of local top software talent.",
        "exampleVi": "Mức lương hấp dẫn ở nước ngoài đang đẩy nhanh tình trạng chảy máu chất xám của các nhân tài phần mềm hàng đầu trong nước.",
        "synonyms": [
          "Human capital flight",
          "Talent exodus"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-70",
        "word": "Moonlighting",
        "phonetic": "/ˈmuːnˌlaɪ.t̬ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Làm thêm nghề thứ hai ngoài giờ làm chính",
        "definitionEn": "Working at an additional job, especially without the knowledge of the main employer.",
        "exampleEn": "Strict employment contracts strictly prohibit moonlighting for competing technology enterprises.",
        "exampleVi": "Hợp đồng lao động nghiêm ngặt nghiêm cấm việc làm thêm cho các doanh nghiệp công nghệ đối thủ ngoài giờ làm chính.",
        "synonyms": [
          "Side job",
          "Secondary employment"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-71",
        "word": "Wholesale",
        "phonetic": "/ˈhoʊl.seɪl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bán buôn, bán sỉ khối lượng lớn",
        "definitionEn": "The selling of goods in large quantities to be retailed by others.",
        "exampleEn": "Purchasing industrial chemicals at wholesale rates saved the manufacturing facility forty percent.",
        "exampleVi": "Mua hóa chất công nghiệp theo giá bán sỉ đã giúp cơ sở sản xuất tiết kiệm được 40%.",
        "synonyms": [
          "Bulk selling",
          "Trade distribution"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-72",
        "word": "Retail",
        "phonetic": "/ˈriː.teɪl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bán lẻ tới tay người tiêu dùng cuối",
        "definitionEn": "The sale of goods to the public in relatively small quantities for use or consumption rather than for resale.",
        "exampleEn": "E-commerce continues to swallow market share from traditional brick-and-mortar retail outlets.",
        "exampleVi": "Thương mại điện tử tiếp tục thâu tóm thị phần từ các điểm bán lẻ truyền thống mặt phố.",
        "synonyms": [
          "Direct selling",
          "Consumer sales"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-73",
        "word": "Supply Chain",
        "phonetic": "/səˈplaɪ ˌtʃeɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chuỗi cung ứng từ nguyên liệu đến thành phẩm",
        "definitionEn": "The sequence of processes involved in the production and distribution of a commodity.",
        "exampleEn": "Geopolitical disruptions severely crippled the maritime electronic supply chain.",
        "exampleVi": "Những biến động địa chính trị đã làm tê liệt trầm trọng chuỗi cung ứng hàng hải điện tử.",
        "synonyms": [
          "Logistics chain",
          "Distribution network"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-74",
        "word": "Procurement Officer",
        "phonetic": "/prəˈkjʊr.mənt ˌɑː.fɪ.sɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyên viên quản lý thu mua vật tư",
        "definitionEn": "A corporate specialist responsible for purchasing goods and services for business operations.",
        "exampleEn": "The procurement officer secured a favorable long-term volume discount from steel suppliers.",
        "exampleVi": "Chuyên viên thu mua đã thương lượng được mức chiết khấu số lượng lớn dài hạn có lợi từ các nhà cung cấp thép.",
        "synonyms": [
          "Purchasing agent",
          "Buyer"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-75",
        "word": "Fulfillment Center",
        "phonetic": "/fʊlˈfɪl.mənt ˌsen.t̬ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Trung tâm xử lý và hoàn tất đơn hàng",
        "definitionEn": "A warehouse where incoming orders from customers are received, processed, and packed for shipment.",
        "exampleEn": "The e-commerce conglomerate operates automated fulfillment centers staffed by thousands of sorting robots.",
        "exampleVi": "Tập đoàn thương mại điện tử vận hành các trung tâm hoàn tất đơn hàng tự động với sự hỗ trợ của hàng ngàn robot phân loại.",
        "synonyms": [
          "Distribution warehouse",
          "Pack facility"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-76",
        "word": "Freight Forwarder",
        "phonetic": "/ˈfreɪt ˌfɔːr.wɚ.dɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đơn vị giao nhận vận tải quốc tế",
        "definitionEn": "A person or company that organizes shipments for individuals or corporations to get goods from the manufacturer or producer to a market, customer or final point of distribution.",
        "exampleEn": "We engaged a reputable freight forwarder to handle international customs clearance and ocean container transport.",
        "exampleVi": "Chúng tôi đã thuê một công ty giao nhận vận tải uy tín để xử lý thủ tục thông quan quốc tế và vận tải container đường biển.",
        "synonyms": [
          "Cargo agent",
          "Shipping agent"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-77",
        "word": "Bill of Lading",
        "phonetic": "/ˌbɪl əv ˈleɪ.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Vận đơn đường biển xác nhận nhận hàng",
        "definitionEn": "A detailed list of a shipment of goods in the form of a receipt given by the carrier to the person consigning the goods.",
        "exampleEn": "The shipping line releases cargo containers only upon receipt of the original signed bill of lading.",
        "exampleVi": "Hãng tàu chỉ giải phóng các container hàng hóa sau khi nhận được vận đơn gốc có chữ ký hợp lệ.",
        "synonyms": [
          "B/L",
          "Cargo manifest",
          "Consignment note"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-78",
        "word": "Tariff",
        "phonetic": "/ˈter.ɪf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thuế quan đánh lên hàng hóa xuất nhập khẩu",
        "definitionEn": "A tax or duty to be paid on a particular class of imports or exports.",
        "exampleEn": "Imposing punitive tariffs on foreign steel triggered reciprocal trade countermeasures.",
        "exampleVi": "Việc áp đặt mức thuế quan trừng phạt đối với thép nhập khẩu đã kích hoạt các biện pháp đáp trả thương mại tương hỗ.",
        "synonyms": [
          "Customs duty",
          "Import tax",
          "Levy"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-79",
        "word": "Embargo",
        "phonetic": "/ɪmˈbɑːr.ɡoʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lệnh phong tỏa cấm vận kinh tế",
        "definitionEn": "An official ban on trade or other commercial activity with a particular country.",
        "exampleEn": "Sanctioned banks were cut off from SWIFT due to the comprehensive financial embargo.",
        "exampleVi": "Các ngân hàng bị áp lệnh trừng phạt đã bị ngắt kết nối khỏi hệ thống SWIFT do lệnh cấm vận tài chính toàn diện.",
        "synonyms": [
          "Sanction",
          "Trade ban",
          "Blockade"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-80",
        "word": "Arbitrage",
        "phonetic": "/ˈɑːr.bə.trɑːʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Kinh doanh chênh lệch giá giữa các thị trường",
        "definitionEn": "The simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset.",
        "exampleEn": "High-frequency trading hedge funds exploit microscopic price arbitrage across global exchanges.",
        "exampleVi": "Các quỹ phòng hộ giao dịch tần suất cao khai thác triệt để những chênh lệch giá siêu nhỏ giữa các sàn giao dịch toàn cầu.",
        "synonyms": [
          "Spread trading",
          "Price exploitation"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-81",
        "word": "Hedge Fund",
        "phonetic": "/ˈhedʒ ˌfʌnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quỹ đầu tư phòng hộ rủi ro cao",
        "definitionEn": "A limited partnership of investors that uses high risk methods, such as investing with borrowed money, in hopes of realizing large capital gains.",
        "exampleEn": "The aggressive hedge fund generated a forty percent net return during market turbulence.",
        "exampleVi": "Quỹ phòng hộ với chiến lược quyết liệt đã mang lại tỷ suất lợi nhuận ròng 40% giữa cơn biến động thị trường.",
        "synonyms": [
          "Alternative investment fund"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-82",
        "word": "Private Equity",
        "phonetic": "/ˌpraɪ.vət ˈek.wə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quỹ đầu tư vốn cổ phần tư nhân",
        "definitionEn": "Capital investment made into companies that are not publicly traded on a stock exchange.",
        "exampleEn": "The private equity consortium acquired the struggling retail chain and took it private.",
        "exampleVi": "Liên minh quỹ đầu tư vốn cổ phần tư nhân đã mua lại chuỗi bán lẻ gặp khó khăn và chuyển nó về sở hữu tư nhân.",
        "synonyms": [
          "PE",
          "Direct equity"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-83",
        "word": "LBO",
        "phonetic": "/ˌel.biːˈoʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mua lại doanh nghiệp bằng vốn vay đòn bẩy",
        "definitionEn": "Leveraged Buyout: the acquisition of another company using a significant amount of borrowed money to meet the cost of acquisition.",
        "exampleEn": "The massive LBO burdened the newly acquired enterprise with billions in debt service payments.",
        "exampleVi": "Vụ mua lại bằng vốn vay đòn bẩy khổng lồ đã tạo gánh nặng nợ nần lên tới hàng tỷ USD chi phí trả lãi cho doanh nghiệp vừa thâu tóm.",
        "synonyms": [
          "Leveraged buyout",
          "Debt-financed takeover"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-84",
        "word": "Joint Venture",
        "phonetic": "/ˌdʒɔɪnt ˈven.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Liên doanh hợp tác giữa hai công ty độc lập",
        "definitionEn": "A commercial enterprise undertaken jointly by two or more parties which otherwise retain their distinct identities.",
        "exampleEn": "The two automobile manufacturers formed a joint venture to build next-generation solid-state batteries.",
        "exampleVi": "Hai hãng sản xuất ô tô đã thành lập một liên doanh để sản xuất pin thể rắn thế hệ tiếp theo.",
        "synonyms": [
          "JV",
          "Consortium",
          "Partnership"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-85",
        "word": "Memorandum of Understanding",
        "phonetic": "/ˌmem.əˈræn.dəm əv ˌʌn.dɚˈstæn.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Biên bản ghi nhớ hợp tác sơ bộ (MOU)",
        "definitionEn": "A nonbinding agreement between two or more parties outlining the terms and details of an understanding, including each parties' requirements and responsibilities.",
        "exampleEn": "The ministries signed an MOU to foster cross-border semiconductor talent exchanges.",
        "exampleVi": "Các bộ đã ký kết một biên bản ghi nhớ nhằm thúc đẩy trao đổi nhân tài bán dẫn xuyên biên giới.",
        "synonyms": [
          "MOU",
          "Preliminary pact",
          "Letter of intent"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-86",
        "word": "Letter of Intent",
        "phonetic": "/ˌlet̬.ɚ əv ɪnˈtent/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thư bày tỏ ý định hợp tác giao dịch (LOI)",
        "definitionEn": "A document outlining the general terms of an agreement with its parties prior to the agreement being finalized.",
        "exampleEn": "The prospective buyer submitted an official LOI proposing an all-cash buyout.",
        "exampleVi": "Bên mua tiềm năng đã đệ trình một bức thư bày tỏ ý định chính thức đề xuất mua lại toàn bộ bằng tiền mặt.",
        "synonyms": [
          "LOI",
          "Intent document"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-87",
        "word": "Force Majeure",
        "phonetic": "/ˌfɔːrs məˈʒɝː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Điều khoản bất khả kháng trong hợp đồng",
        "definitionEn": "Unforeseeable circumstances that prevent someone from fulfilling a contract.",
        "exampleEn": "A massive volcanic eruption was recognized as a legitimate force majeure event that excused delayed shipments.",
        "exampleVi": "Một đợt phun trào núi lửa dữ dội đã được công nhận là sự kiện bất khả kháng chính đáng cho phép miễn trừ việc chậm giao hàng.",
        "synonyms": [
          "Act of God",
          "Unavoidable catastrophe"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-88",
        "word": "Liquidated Damages",
        "phonetic": "/ˈlɪk.wə.deɪ.t̬ɪd ˈdæm.ɪ.dʒɪz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mức bồi thường thiệt hại được ấn định trước",
        "definitionEn": "An amount of money agreed upon by both parties to a contract which one will pay to the other in the event of breach.",
        "exampleEn": "The construction contract specifies liquidated damages of five thousand dollars per day of construction delay.",
        "exampleVi": "Hợp đồng xây dựng quy định mức bồi thường thiệt hại ấn định trước là 5.000 USD cho mỗi ngày thi công chậm trễ.",
        "synonyms": [
          "Pre-agreed penalty",
          "Contractual damages"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-89",
        "word": "Indemnity Clause",
        "phonetic": "/ɪnˈdem.nə.t̬i ˌklɑːz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Điều khoản cam kết bồi thường miễn trừ thiệt hại",
        "definitionEn": "A contractual agreement by which one party agrees to compensate another for certain damages or liabilities.",
        "exampleEn": "The supplier accepted a comprehensive indemnity clause covering any third-party patent infringements.",
        "exampleVi": "Nhà cung cấp đã chấp thuận một điều khoản bồi hoàn toàn diện bao gồm mọi vi phạm bằng sáng chế của bên thứ ba.",
        "synonyms": [
          "Hold-harmless clause",
          "Protection clause"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-90",
        "word": "Non-Compete Clause",
        "phonetic": "/ˌnɑːn.kəmˈpiːt ˌklɑːz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Điều khoản không cạnh tranh sau khi nghỉ việc",
        "definitionEn": "A clause under which one party agrees not to enter into or start a similar profession or trade in competition against another party.",
        "exampleEn": "The court struck down the non-compete clause as excessively restrictive on the engineer's livelihood.",
        "exampleVi": "Tòa án đã bác bỏ điều khoản không cạnh tranh vì quá hạn chế sinh kế làm việc của kỹ sư.",
        "synonyms": [
          "Covenant not to compete",
          "Restraint of trade"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-91",
        "word": "Right of First Refusal",
        "phonetic": "/ˌraɪt əv ˌfɝːst rɪˈfjuː.zəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Quyền ưu tiên mua trước",
        "definitionEn": "A contractual right that gives its holder the option to enter a business transaction with the owner of something, before the owner can enter into that transaction with a third party.",
        "exampleEn": "Early investors retained the legal right of first refusal on any new issuance of preferred stock.",
        "exampleVi": "Các nhà đầu tư ban đầu nắm giữ quyền ưu tiên mua trước theo luật định đối với bất kỳ đợt phát hành cổ phiếu ưu đãi mới nào.",
        "synonyms": [
          "ROFR",
          "Preemptive right"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-92",
        "word": "Subsidize",
        "phonetic": "/ˈsʌb.sə.daɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trợ cấp ngân sách nhà nước",
        "definitionEn": "Support an organization or activity financially.",
        "exampleEn": "The government decided to heavily subsidize rooftop solar panel installations for commercial warehouses.",
        "exampleVi": "Chính phủ quyết định trợ cấp mạnh tay cho việc lắp đặt các tấm pin năng lượng mặt trời áp mái tại các nhà kho thương mại.",
        "synonyms": [
          "Fund",
          "Underwrite",
          "Back"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-93",
        "word": "Depreciation",
        "phonetic": "/dɪˌpriː.ʃiˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khấu hao tài sản hữu hình",
        "definitionEn": "A reduction in the value of an asset with the passage of time, due in particular to wear and tear.",
        "exampleEn": "Linear depreciation charges reduce net taxable income on balance sheets.",
        "exampleVi": "Các khoản trích khấu hao tài sản tuyến tính giúp giảm thu nhập chịu thuế ròng trên bảng cân đối kế toán.",
        "synonyms": [
          "Wear and tear",
          "Devaluation",
          "Amortization"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-94",
        "word": "Amortization",
        "phonetic": "/ˌæm.ɚ.t̬əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khấu hao tài sản vô hình / trả dần nợ gốc lãi",
        "definitionEn": "The action or process of gradually writing off the initial cost of an asset or paying off a debt.",
        "exampleEn": "Intangible software acquisition costs are amortized over a realistic five-year operational lifespan.",
        "exampleVi": "Chi phí mua lại phần mềm vô hình được phân bổ khấu hao dần trong suốt vòng đời vận hành thực tế 5 năm.",
        "synonyms": [
          "Write-off",
          "Installment repayment"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-95",
        "word": "Goodwill",
        "phonetic": "/ˌɡʊdˈwɪl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lợi thế thương mại ghi nhận trên bảng kế toán",
        "definitionEn": "The established reputation of a business regarded as a quantifiable asset and calculated as part of its value when it is sold.",
        "exampleEn": "The acquiring firm recorded two billion dollars in accounting goodwill after the merger.",
        "exampleVi": "Công ty mua lại đã ghi nhận 2 tỷ USD vào tài sản lợi thế thương mại trên sổ sách sau vụ sáp nhập.",
        "synonyms": [
          "Reputational asset",
          "Intangible asset"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-96",
        "word": "Accounts Payable",
        "phonetic": "/əˌkaʊnts ˈpeɪ.ə.bəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khoản nợ phải trả cho nhà cung cấp (AP)",
        "definitionEn": "Money owed by a company to its creditors.",
        "exampleEn": "The finance team optimized accounts payable cycles to preserve positive working cash flow.",
        "exampleVi": "Đội ngũ tài chính đã tối ưu hóa các chu kỳ nợ phải trả nhằm bảo toàn dòng tiền mặt hoạt động tích cực.",
        "synonyms": [
          "AP",
          "Creditor balance",
          "Bills owed"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-97",
        "word": "Accounts Receivable",
        "phonetic": "/əˌkaʊnts rɪˈsiː.və.bəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khoản tiền phải thu từ khách hàng (AR)",
        "definitionEn": "Money owed to a company by its debtors.",
        "exampleEn": "Tightening payment collection terms reduced outstanding accounts receivable balances significantly.",
        "exampleVi": "Thắt chặt các điều khoản thu hồi nợ đã làm giảm đáng kể số dư nợ phải thu chưa thanh toán.",
        "synonyms": [
          "AR",
          "Debtor balance",
          "Owed funds"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-98",
        "word": "Working Capital",
        "phonetic": "/ˌwɝː.kɪŋ ˈkæp.ə.t̬əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vốn lưu động vận hành ngắn hạn",
        "definitionEn": "The capital of a business which is used in its day-to-day trading operations, calculated as the current assets minus the current liabilities.",
        "exampleEn": "Managing inventory levels efficiently frees up millions in vital working capital.",
        "exampleVi": "Quản lý lượng hàng tồn kho hiệu quả giúp giải phóng hàng triệu USD vốn lưu động thiết yếu.",
        "synonyms": [
          "Operating capital",
          "Net current assets"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-99",
        "word": "EBITDA",
        "phonetic": "/iːˈbɪt.dɑː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lợi nhuận trước lãi vay, thuế và khấu hao",
        "definitionEn": "Earnings Before Interest, Taxes, Depreciation, and Amortization.",
        "exampleEn": "Institutional investors evaluate corporate buyout candidates based on their EBITDA multiple.",
        "exampleVi": "Các nhà đầu tư tổ chức đánh giá những mục tiêu mua lại doanh nghiệp dựa trên bội số EBITDA của họ.",
        "synonyms": [
          "Operating cash profit",
          "Cash earnings"
        ],
        "topicId": "business"
      },
      {
        "id": "biz-100",
        "word": "Net Profit Margin",
        "phonetic": "/ˌnet ˈprɑː.fɪt ˌmɑːr.dʒɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Biên lợi nhuận ròng sau thuế",
        "definitionEn": "The percentage of revenue left after all expenses have been deducted from sales.",
        "exampleEn": "The software company boasts an astonishing net profit margin of thirty-five percent.",
        "exampleVi": "Công ty phần mềm tự hào có mức biên lợi nhuận ròng đáng kinh ngạc lên đến 35%.",
        "synonyms": [
          "Bottom line margin",
          "Net earnings margin"
        ],
        "topicId": "business"
      }
    ]
  },
  {
    "id": "technology",
    "title": "Công Nghệ & Trí Tuệ Nhân Tạo",
    "slug": "technology",
    "icon": "Cpu",
    "color": "text-emerald-500",
    "bgColor": "bg-emerald-50 dark:bg-emerald-950/40",
    "borderColor": "border-emerald-200 dark:border-emerald-800",
    "description": "Học máy, kiến trúc phần mềm, điện toán đám mây phân tán, an ninh mạng và dữ liệu lớn",
    "wordCount": 100,
    "words": [
      {
        "id": "tech-1",
        "word": "Algorithm",
        "phonetic": "/ˈæl.ɡə.rɪ.ðəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thuật toán xử lý tuần tự",
        "definitionEn": "A process or set of rules to be followed in calculations or problem-solving operations by a computer.",
        "exampleEn": "Search engines utilize sophisticated algorithms to rank web pages by relevance and authority.",
        "exampleVi": "Các công cụ tìm kiếm sử dụng những thuật toán tinh vi để xếp hạng các trang web theo mức độ phù hợp và độ tin cậy.",
        "synonyms": [
          "Procedure",
          "Computation rule",
          "Program formula"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-2",
        "word": "Artificial Intelligence",
        "phonetic": "/ˌɑːr.t̬əˈfɪʃ.əl ɪnˈtel.ə.dʒəns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Trí tuệ nhân tạo (AI)",
        "definitionEn": "The simulation of human intelligence in machines that are programmed to think and learn.",
        "exampleEn": "Artificial intelligence is accelerating breakthroughs in genomic drug discovery.",
        "exampleVi": "Trí tuệ nhân tạo đang đẩy nhanh các bước đột phá trong việc phát hiện thuốc hệ gen.",
        "synonyms": [
          "AI",
          "Machine intelligence"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-3",
        "word": "Machine Learning",
        "phonetic": "/məˈʃiːn ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Học máy dựa trên dữ liệu",
        "definitionEn": "The use and development of computer systems that are able to learn and adapt without following explicit instructions.",
        "exampleEn": "Predictive maintenance models rely on machine learning to forecast equipment failure.",
        "exampleVi": "Các mô hình bảo trì dự đoán dựa vào học máy để dự báo sự cố thiết bị.",
        "synonyms": [
          "ML",
          "Data-driven learning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-4",
        "word": "Neural Network",
        "phonetic": "/ˈnʊr.əl ˌnet.wɝːk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mạng nơ-ron nhân tạo mô phỏng não bộ",
        "definitionEn": "A computer system modeled on the human brain and nervous system.",
        "exampleEn": "Deep neural networks power autonomous vehicle visual recognition systems.",
        "exampleVi": "Mạng nơ-ron sâu vận hành các hệ thống nhận diện thị giác của xe tự hành.",
        "synonyms": [
          "Deep learning network",
          "ANN"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-5",
        "word": "Large Language Model",
        "phonetic": "/ˌlɑːrdʒ ˈlæŋ.ɡwɪdʒ ˌmɑː.dəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mô hình ngôn ngữ lớn (LLM)",
        "definitionEn": "An advanced AI model trained on vast amounts of text data to understand and generate human-like language.",
        "exampleEn": "State-of-the-art large language models can draft legal briefs and synthesize medical research in seconds.",
        "exampleVi": "Các mô hình ngôn ngữ lớn tối tân có thể soạn thảo tóm tắt pháp lý và tổng hợp nghiên cứu y khoa chỉ trong vài giây.",
        "synonyms": [
          "LLM",
          "Foundation model"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-6",
        "word": "Cloud Computing",
        "phonetic": "/klaʊd kəmˈpjuː.t̬ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Điện toán đám mây phân tán",
        "definitionEn": "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data.",
        "exampleEn": "Migrating to cloud computing eliminated the need for on-premises server maintenance.",
        "exampleVi": "Chuyển đổi sang điện toán đám mây đã loại bỏ nhu cầu bảo trì máy chủ tại chỗ.",
        "synonyms": [
          "Distributed cloud",
          "Serverless hosting"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-7",
        "word": "Latency",
        "phonetic": "/ˈleɪ.tən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Độ trễ truyền tải tín hiệu mạng",
        "definitionEn": "The delay before a transfer of data begins following an instruction for its transfer.",
        "exampleEn": "High network latency ruins the user experience in competitive online gaming.",
        "exampleVi": "Độ trễ mạng cao làm hỏng trải nghiệm người dùng trong các trò chơi trực tuyến đối kháng.",
        "synonyms": [
          "Delay",
          "Lag",
          "Response time"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-8",
        "word": "Throughput",
        "phonetic": "/ˈθruː.pʊt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Băng thông thông lượng xử lý dữ liệu",
        "definitionEn": "The amount of material or items passing through a system or process.",
        "exampleEn": "Upgrading our database cluster doubled the write throughput to 50,000 transactions per second.",
        "exampleVi": "Nâng cấp cụm cơ sở dữ liệu đã tăng gấp đôi thông lượng ghi lên 50.000 giao dịch mỗi giây.",
        "synonyms": [
          "Processing capacity",
          "Data rate"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-9",
        "word": "Cryptography",
        "phonetic": "/krɪpˈtɑː.ɡrə.fi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mật mã học bảo mật thông tin",
        "definitionEn": "The art of writing or solving codes, especially for secure communications.",
        "exampleEn": "Asymmetric cryptography forms the foundation of secure HTTPS web connections.",
        "exampleVi": "Mật mã học bất đối xứng tạo nên nền tảng của các kết nối web HTTPS bảo mật.",
        "synonyms": [
          "Encryption science",
          "Cipher science"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-10",
        "word": "Decryption",
        "phonetic": "/diːˈkrɪp.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giải mã thông điệp mã hóa",
        "definitionEn": "The process of converting information or data that has been encrypted back into an unencrypted form.",
        "exampleEn": "Without the private key, mathematical decryption of the encrypted vault is practically impossible.",
        "exampleVi": "Nếu không có khóa riêng, việc giải mã toán học kho lưu trữ đã mã hóa về mặt thực tế là bất khả thi.",
        "synonyms": [
          "Decoding",
          "Deciphering"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-11",
        "word": "Microservices",
        "phonetic": "/ˈmaɪ.kroʊˌsɝː.vɪ.sɪz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kiến trúc vi dịch vụ độc lập",
        "definitionEn": "A software architecture design wherein an application is composed of small, independent services.",
        "exampleEn": "Decomposing the monolith into microservices allowed teams to deploy independently.",
        "exampleVi": "Việc chia nhỏ khối mã liền khối thành các vi dịch vụ cho phép các đội ngũ triển khai độc lập.",
        "synonyms": [
          "Distributed services",
          "Decoupled architecture"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-12",
        "word": "Monolith",
        "phonetic": "/ˈmɑː.nə.lɪθ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khối kiến trúc phần mềm liền khối",
        "definitionEn": "A software system where the user interface, business logic, and data access code are all combined into a single program.",
        "exampleEn": "Refactoring a ten-year-old legacy monolith requires meticulous automated test coverage.",
        "exampleVi": "Việc tái cấu trúc một khối phần mềm liền khối 10 năm tuổi đòi hỏi độ bao phủ kiểm thử tự động tỉ mỉ.",
        "synonyms": [
          "Single-tier app",
          "Integrated architecture"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-13",
        "word": "Orchestration",
        "phonetic": "/ˌɔːr.kəˈstreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự điều phối tự động container/hệ thống",
        "definitionEn": "The automated configuration, coordination, and management of computer systems and software.",
        "exampleEn": "Kubernetes handles container orchestration across thousands of cloud compute nodes.",
        "exampleVi": "Kubernetes đảm nhiệm việc điều phối container trên hàng ngàn nút điện toán đám mây.",
        "synonyms": [
          "Automated coordination",
          "Cluster management"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-14",
        "word": "Virtualization",
        "phonetic": "/ˌvɝː.tʃu.ə.laɪˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Ảo hóa tài nguyên phần cứng",
        "definitionEn": "The creation of a virtual rather than actual version of something, such as an operating system or server.",
        "exampleEn": "Hardware virtualization enables multiple isolated operating systems to share physical processors.",
        "exampleVi": "Ảo hóa phần cứng cho phép nhiều hệ điều hành cô lập cùng chia sẻ các bộ vi xử lý vật lý.",
        "synonyms": [
          "Hardware abstraction",
          "Virtual machine hosting"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-15",
        "word": "Repository",
        "phonetic": "/rɪˈpɑː.zə.tɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Kho lưu trữ mã nguồn (Repo Git)",
        "definitionEn": "A central place in which data is stored and managed, specifically source code.",
        "exampleEn": "All developers clone the remote Git repository to begin local feature development.",
        "exampleVi": "Tất cả các lập trình viên đều sao chép kho mã nguồn Git từ xa để bắt đầu phát triển tính năng cục bộ.",
        "synonyms": [
          "Repo",
          "Codebase",
          "Storage"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-16",
        "word": "Refactoring",
        "phonetic": "/riːˈfæk.tɚ.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tái cấu trúc mã nguồn tối ưu mà không đổi tính năng",
        "definitionEn": "The process of restructuring existing computer code without changing its external behavior.",
        "exampleEn": "Continuous code refactoring prevents technical debt from crippling product velocity.",
        "exampleVi": "Việc tái cấu trúc mã nguồn liên tục giúp ngăn nợ kỹ thuật làm tê liệt tốc độ ra mắt sản phẩm.",
        "synonyms": [
          "Code restructuring",
          "Code clean-up"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-17",
        "word": "Technical Debt",
        "phonetic": "/ˌtek.nɪ.kəl ˈdet/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nợ kỹ thuật do viết mã ẩu vội vàng",
        "definitionEn": "The implied cost of additional rework caused by choosing an easy limited solution now instead of a better approach that would take longer.",
        "exampleEn": "Accumulating too much technical debt eventually slows sprint progress to a crawl.",
        "exampleVi": "Tích tụ quá nhiều nợ kỹ thuật cuối cùng sẽ làm chậm tiến độ các chu kỳ phát triển xuống mức rùa bò.",
        "synonyms": [
          "Code debt",
          "Engineering deficit"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-18",
        "word": "Telemetry",
        "phonetic": "/təˈlem.ə.tri/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Dữ liệu đo xa tự động gửi về",
        "definitionEn": "The automatic measurement and wireless transmission of data from remote sources.",
        "exampleEn": "Production telemetry alerts our on-call engineers when API error rates breach one percent.",
        "exampleVi": "Dữ liệu đo xa môi trường thực tế sẽ cảnh báo các kỹ sư trực ban khi tỷ lệ lỗi API vượt ngưỡng 1%.",
        "synonyms": [
          "Remote monitoring data",
          "System metrics"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-19",
        "word": "Continuous Integration",
        "phonetic": "/kənˌtɪn.ju.əs ˌɪn.t̬əˈɡreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tích hợp liên tục (CI)",
        "definitionEn": "The practice of automating the integration of code changes from multiple contributors into a single software project.",
        "exampleEn": "Our CI pipeline runs automated linting and unit tests on every pull request.",
        "exampleVi": "Quy trình CI của chúng tôi tự động chạy rà soát cú pháp và kiểm thử đơn vị trên mỗi yêu cầu hợp nhất mã.",
        "synonyms": [
          "CI",
          "Automated build pipeline"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-20",
        "word": "Continuous Deployment",
        "phonetic": "/kənˌtɪn.ju.əs dɪˈplɔɪ.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Triển khai liên tục (CD)",
        "definitionEn": "A software engineering approach in which software functionalities are delivered frequently through automated deployments.",
        "exampleEn": "Continuous deployment enables our engineering team to ship updates to end users twenty times a day.",
        "exampleVi": "Triển khai liên tục cho phép đội ngũ kỹ thuật của chúng tôi xuất bản các bản cập nhật tới người dùng cuối 20 lần mỗi ngày.",
        "synonyms": [
          "CD",
          "Automated release pipeline"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-21",
        "word": "Concurrency",
        "phonetic": "/kənˈkɝː.ən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tính đồng thời trong xử lý đa luồng",
        "definitionEn": "The ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the outcome.",
        "exampleEn": "Go and Rust provide robust primitives for managing safe concurrency without data races.",
        "exampleVi": "Go và Rust cung cấp các nguyên mẫu mạnh mẽ để quản lý tính đồng thời an toàn mà không xảy ra xung đột dữ liệu.",
        "synonyms": [
          "Parallelism",
          "Simultaneous execution",
          "Multithreading"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-22",
        "word": "Multithreading",
        "phonetic": "/ˌmʌl.tiˈθred.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Xử lý đa luồng trên CPU",
        "definitionEn": "A technique by which a single set of code can be used by several processors at different stages of execution.",
        "exampleEn": "Video rendering applications utilize multithreading to speed up frame processing across all CPU cores.",
        "exampleVi": "Các ứng dụng kết xuất video tận dụng xử lý đa luồng để đẩy nhanh tiến độ khung hình trên mọi nhân CPU.",
        "synonyms": [
          "Parallel threading",
          "Concurrent tasks"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-23",
        "word": "Asynchronous",
        "phonetic": "/eɪˈsɪŋ.krə.nəs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Bất đồng bộ không chặn luồng chính",
        "definitionEn": "Not occurring at the same time; computing processes that execute independently of the main program flow.",
        "exampleEn": "Asynchronous JavaScript requests fetch API data in the background without freezing the UI.",
        "exampleVi": "Các lệnh yêu cầu JavaScript bất đồng bộ lấy dữ liệu API ngầm mà không làm đơ giao diện người dùng.",
        "synonyms": [
          "Async",
          "Non-blocking",
          "Concurrent"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-24",
        "word": "Synchronous",
        "phonetic": "/ˈsɪŋ.krə.nəs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đồng bộ, chờ xử lý tuần tự",
        "definitionEn": "Existing or occurring at the same time; executing step-by-step where each step waits for the previous one to finish.",
        "exampleEn": "Synchronous disk writes guarantee immediate data persistence at the cost of higher latency.",
        "exampleVi": "Ghi đĩa đồng bộ đảm bảo tính bền vững dữ liệu ngay tức thì nhưng phải trả giá bằng độ trễ cao hơn.",
        "synonyms": [
          "Blocking",
          "Sequential",
          "Sequential execution"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-25",
        "word": "Idempotency",
        "phonetic": "/ˌaɪ.dəmˈpoʊ.tən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tính lũy kế bất biến khi gọi lại nhiều lần",
        "definitionEn": "The property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.",
        "exampleEn": "Payment endpoints must enforce idempotency to prevent customers from being charged twice upon retries.",
        "exampleVi": "Các cổng thanh toán phải áp dụng tính lũy kế bất biến để ngăn khách hàng bị trừ tiền 2 lần khi thử lại giao dịch.",
        "synonyms": [
          "Repeat safety",
          "Result invariance"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-26",
        "word": "Sharding",
        "phonetic": "/ˈʃɑːr.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Phân mảnh cơ sở dữ liệu theo chiều ngang",
        "definitionEn": "A type of database partitioning that separates large databases into smaller, faster, more easily managed parts called data shards.",
        "exampleEn": "Database sharding allows social media networks to distribute billions of posts across hundreds of servers.",
        "exampleVi": "Phân mảnh cơ sở dữ liệu cho phép các mạng xã hội phân tán hàng tỷ bài đăng trên hàng trăm máy chủ.",
        "synonyms": [
          "Horizontal partitioning",
          "Data splitting"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-27",
        "word": "Replication",
        "phonetic": "/ˌrep.lɪˈkeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhân bản dữ liệu dự phòng",
        "definitionEn": "The process of sharing information so as to ensure consistency between redundant resources.",
        "exampleEn": "Multi-region database replication ensures high availability in case of a regional datacenter outage.",
        "exampleVi": "Nhân bản cơ sở dữ liệu đa khu vực đảm bảo tính sẵn sàng cao trong trường hợp xảy ra sự cố trung tâm dữ liệu khu vực.",
        "synonyms": [
          "Duplication",
          "Redundancy mirroring",
          "Cloning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-28",
        "word": "Failover",
        "phonetic": "/ˈfeɪlˌoʊ.vɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyển đổi dự phòng tự động khi máy chủ gặp sự cố",
        "definitionEn": "An automated backup operational mode in which the functions of a system component are assumed by secondary system components when the primary fails.",
        "exampleEn": "Automated DNS failover rerouted incoming web traffic to our secondary cluster within three seconds.",
        "exampleVi": "Chuyển đổi dự phòng DNS tự động đã chuyển hướng lưu lượng web đến cụm thứ cấp chỉ trong 3 giây.",
        "synonyms": [
          "Backup switch",
          "Redundancy transfer"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-29",
        "word": "Immutable",
        "phonetic": "/ɪˈmjuː.t̬ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Bất biến không thể chỉnh sửa sau khi tạo",
        "definitionEn": "Unchanging over time or unable to be changed.",
        "exampleEn": "Blockchain transaction blocks are mathematically immutable once appended to the distributed ledger.",
        "exampleVi": "Các khối giao dịch chuỗi khối về mặt toán học là bất biến một khi đã được gắn vào sổ cái phân tán.",
        "synonyms": [
          "Unchangeable",
          "Fixed",
          "Permanent"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-30",
        "word": "Polymorphism",
        "phonetic": "/ˌpɑː.liˈmɔːr.fɪ.zəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tính đa hình trong lập trình hướng đối tượng",
        "definitionEn": "The condition of occurring in several different forms; in OOP, providing a single interface to entities of different types.",
        "exampleEn": "Object-oriented polymorphism allows our graphics engine to render shapes without knowing their concrete classes.",
        "exampleVi": "Tính đa hình hướng đối tượng cho phép công cụ đồ họa kết xuất các hình khối mà không cần biết lớp cụ thể của chúng.",
        "synonyms": [
          "Multiformity",
          "Interface flexibility"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-31",
        "word": "Encapsulation",
        "phonetic": "/ɪnˌkæp.səˈleɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tính đóng gói bảo vệ dữ liệu nội tại",
        "definitionEn": "The action of enclosing something in or as if in a capsule; in OOP, restricting direct access to object components.",
        "exampleEn": "Encapsulation safeguards internal class state by exposing only validated setter methods.",
        "exampleVi": "Tính đóng gói bảo vệ trạng thái nội tại của lớp bằng cách chỉ công khai các phương thức gán giá trị đã được xác thực.",
        "synonyms": [
          "Information hiding",
          "Data protection"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-32",
        "word": "Inheritance",
        "phonetic": "/ɪnˈher.ɪ.təns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tính kế thừa thuộc tính và phương thức",
        "definitionEn": "The derivation of characteristics by a child class from its parent class in OOP.",
        "exampleEn": "Composition is frequently preferred over deep class inheritance to prevent brittle software hierarchies.",
        "exampleVi": "Ghép nối thành phần thường được ưa chuộng hơn là kế thừa lớp sâu để tránh hệ thống phân cấp phần mềm dễ gãy.",
        "synonyms": [
          "Derivation",
          "Ancestry"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-33",
        "word": "Serialization",
        "phonetic": "/ˌsɪr.i.ə.ləˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tuần tự hóa dữ liệu thành chuỗi byte",
        "definitionEn": "The process of translating a data structure or object state into a format that can be stored or transmitted.",
        "exampleEn": "JSON serialization converts runtime objects into text strings suitable for HTTP transmission.",
        "exampleVi": "Tuần tự hóa JSON chuyển đổi các đối tượng đang chạy thành các chuỗi văn bản phù hợp để truyền qua HTTP.",
        "synonyms": [
          "Marshalling",
          "Byte encoding"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-34",
        "word": "Deserialization",
        "phonetic": "/diːˌsɪr.i.ə.ləˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giải tuần tự hóa chuỗi byte thành đối tượng",
        "definitionEn": "The reverse process of reconstructing an object from a serialized byte stream.",
        "exampleEn": "Careless deserialization of untrusted payloads can introduce severe remote code execution vulnerabilities.",
        "exampleVi": "Giải tuần tự hóa bất cẩn dữ liệu không đáng tin cậy có thể dẫn đến những lỗ hổng thực thi mã từ xa nguy hiểm.",
        "synonyms": [
          "Unmarshalling",
          "Decoding"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-35",
        "word": "Endpoint",
        "phonetic": "/ˈend.pɔɪnt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Điểm cuối API tiếp nhận yêu cầu",
        "definitionEn": "A specific URL where a web service can be accessed by a client application.",
        "exampleEn": "The REST API endpoint for user authentication requires an email and password in the JSON body.",
        "exampleVi": "Điểm cuối API REST phục vụ xác thực người dùng yêu cầu email và mật khẩu trong phần thân JSON.",
        "synonyms": [
          "API route",
          "Access point",
          "URL path"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-36",
        "word": "Payload",
        "phonetic": "/ˈpeɪ.loʊd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dữ liệu thực tế mang theo trong gói tin",
        "definitionEn": "The actual data transported in a packet, transmission, or API request, excluding header overhead.",
        "exampleEn": "Compressing the HTTP response payload reduced mobile mobile network bandwidth consumption.",
        "exampleVi": "Nén gói dữ liệu phản hồi HTTP đã làm giảm mức tiêu thụ băng thông mạng di động.",
        "synonyms": [
          "Data body",
          "Content cargo"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-37",
        "word": "Rate Limiting",
        "phonetic": "/ˈreɪt ˌlɪm.ɪ.tɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giới hạn tần suất gọi yêu cầu để chống nghẽn",
        "definitionEn": "A strategy for limiting network traffic by capping how often a user can repeat an action within a specified time.",
        "exampleEn": "The API implements rate limiting to thwart denial-of-service brute-force attacks.",
        "exampleVi": "API triển khai giới hạn tần suất gọi nhằm cản trở các cuộc tấn công từ chối dịch vụ vét cạn.",
        "synonyms": [
          "Throttling",
          "Traffic capping"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-38",
        "word": "Denial of Service",
        "phonetic": "/dɪˌnaɪ.əl əv ˈsɝː.vɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tấn công từ chối dịch vụ làm sập hệ thống (DoS)",
        "definitionEn": "An interruption in an authorized user's access to a computer network, typically one caused with malicious intent.",
        "exampleEn": "A distributed denial of service attack overwhelmed our front-facing load balancers with bogus traffic.",
        "exampleVi": "Một cuộc tấn công từ chối dịch vụ phân tán đã làm tê liệt các bộ cân bằng tải mặt trước bằng lưu lượng giả mạo.",
        "synonyms": [
          "DoS",
          "DDoS",
          "Service flood"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-39",
        "word": "Firewall",
        "phonetic": "/ˈfaɪr.wɑːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tường lửa ngăn chặn xâm nhập mạng",
        "definitionEn": "A part of a computer system or network designed to block unauthorized access while permitting outward communication.",
        "exampleEn": "Corporate network firewalls prevent unauthorized incoming connections from reaching internal databases.",
        "exampleVi": "Tường lửa mạng doanh nghiệp ngăn các kết nối bên ngoài trái phép tiếp cận các cơ sở dữ liệu nội bộ.",
        "synonyms": [
          "Network barrier",
          "Security shield"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-40",
        "word": "Vulnerability",
        "phonetic": "/ˌvʌl.nɚ.əˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lỗ hổng bảo mật có thể bị khai thác",
        "definitionEn": "A weakness in a system or its design that can be exploited by a threat actor.",
        "exampleEn": "Security researchers uncovered a critical zero-day vulnerability in the open-source library.",
        "exampleVi": "Các nhà nghiên cứu an ninh mạng đã phát hiện ra lỗ hổng ngày số không nguy cấp trong thư viện mã nguồn mở.",
        "synonyms": [
          "Flaw",
          "Security loophole",
          "Weakness"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-41",
        "word": "Zero-Day",
        "phonetic": "/ˌzɪr.oʊ ˈdeɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lỗ hổng ngày số không chưa có bản vá",
        "definitionEn": "A vulnerability that is discovered before the software creator is aware of it or has released a security patch.",
        "exampleEn": "Nation-state hackers weaponized a zero-day exploit targeting popular smartphone operating systems.",
        "exampleVi": "Tin tặc cấp quốc gia đã vũ khí hóa mã khai thác ngày số không nhắm vào các hệ điều hành điện thoại phổ biến.",
        "synonyms": [
          "Unpatched flaw",
          "Unknown exploit"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-42",
        "word": "Patch",
        "phonetic": "/pætʃ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bản vá lỗi phần mềm khẩn cấp",
        "definitionEn": "A piece of software designed to update a computer program or its supporting data, to fix or improve it.",
        "exampleEn": "Sysadmins installed the emergency security patch across all production servers before midnight.",
        "exampleVi": "Quản trị viên hệ thống đã cài đặt bản vá bảo mật khẩn cấp trên toàn bộ máy chủ thực tế trước nửa đêm.",
        "synonyms": [
          "Update",
          "Hotfix",
          "Fix"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-43",
        "word": "Sandbox",
        "phonetic": "/ˈsænd.bɑːks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Môi trường hộp cát cách ly an toàn",
        "definitionEn": "An isolated testing environment that enables users to run programs or execute files without affecting the application, system or platform on which they run.",
        "exampleEn": "Modern web browsers run third-party plugins in a secure sandbox to isolate untrusted code.",
        "exampleVi": "Trình duyệt web hiện đại chạy các plugin của bên thứ ba trong hộp cát bảo mật để cô lập mã không tin cậy.",
        "synonyms": [
          "Isolated environment",
          "Safe container"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-44",
        "word": "Containerization",
        "phonetic": "/kənˌteɪ.nɚ.əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Đóng gói ứng dụng vào thùng chứa container",
        "definitionEn": "The packaging of software code with just the operating system libraries and dependencies required to run the code.",
        "exampleEn": "Docker popularized containerization, enabling identical runtime behaviors across local and cloud servers.",
        "exampleVi": "Docker đã phổ biến phương thức container hóa, mang lại hành vi chạy mã đồng nhất trên máy cục bộ và máy chủ đám mây.",
        "synonyms": [
          "Container deployment",
          "Dockerization"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-45",
        "word": "Hypervisor",
        "phonetic": "/ˈhaɪ.pɚ.vaɪ.zɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Phần mềm giám sát quản lý máy ảo",
        "definitionEn": "Software, firmware, or hardware that creates and runs virtual machines.",
        "exampleEn": "The hypervisor dynamically allocates CPU cores and physical RAM among thirty virtual machines.",
        "exampleVi": "Trình giám sát máy ảo phân bổ linh hoạt nhân CPU và RAM vật lý giữa 30 máy ảo khác nhau.",
        "synonyms": [
          "VMM",
          "Virtual machine monitor"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-46",
        "word": "State Machine",
        "phonetic": "/ˈsteɪt məˌʃiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Máy trạng thái hữu hạn kiểm soát logic",
        "definitionEn": "A mathematical model of computation that can be in exactly one of a finite number of states at any given time.",
        "exampleEn": "We implemented a deterministic state machine to govern the checkout and payment transaction flow.",
        "exampleVi": "Chúng tôi đã triển khai một máy trạng thái hữu hạn tiền định để kiểm soát quy trình thanh toán đơn hàng.",
        "synonyms": [
          "FSM",
          "Finite state automaton"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-47",
        "word": "Deterministic",
        "phonetic": "/dɪˌtɝː.mɪˈnɪs.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Tiền định, đầu vào như nhau cho ra kết quả như nhau",
        "definitionEn": "Relating to the philosophical doctrine that all events, including human action, are ultimately determined by causes external to the will; computing without randomness.",
        "exampleEn": "Unit tests should be strictly deterministic, yielding the exact same assertion outcomes every run.",
        "exampleVi": "Kiểm thử đơn vị phải tuyệt đối mang tính tiền định, luôn trả về cùng kết quả khẳng định ở mỗi lần chạy.",
        "synonyms": [
          "Predictable",
          "Non-random",
          "Repeatable"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-48",
        "word": "Stochastic",
        "phonetic": "/stəˈkæs.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Ngẫu nhiên, có tính xác suất thống kê",
        "definitionEn": "Having a random probability distribution or pattern that may be analyzed statistically but may not be predicted precisely.",
        "exampleEn": "Stochastic gradient descent is an essential optimization algorithm used in training deep neural nets.",
        "exampleVi": "Hạ độ dốc ngẫu nhiên là một thuật toán tối ưu hóa thiết yếu được dùng trong huấn luyện mạng nơ-ron sâu.",
        "synonyms": [
          "Probabilistic",
          "Random",
          "Statistical"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-49",
        "word": "Gradient Descent",
        "phonetic": "/ˌɡreɪ.di.ənt dɪˈsent/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thuật toán hạ độ dốc tối ưu hàm mất mát",
        "definitionEn": "A first-order iterative optimization algorithm for finding a local minimum of a differentiable function.",
        "exampleEn": "Adjusting the learning rate prevents gradient descent from overshooting the optimal loss minimum.",
        "exampleVi": "Điều chỉnh tốc độ học giúp ngăn thuật toán hạ độ dốc nhảy vượt qua điểm cực tiểu mất mát tối ưu.",
        "synonyms": [
          "Optimization algorithm",
          "Loss minimization"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-50",
        "word": "Hyperparameter",
        "phonetic": "/ˌhaɪ.pɚ.pəˈræm.ə.t̬ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Siêu tham số cấu hình mô hình học máy",
        "definitionEn": "A parameter whose value is set before the learning process begins, controlling the training algorithm.",
        "exampleEn": "Tuning hyperparameters such as batch size and dropout rate is crucial for high model accuracy.",
        "exampleVi": "Tinh chỉnh các siêu tham số như kích thước lô và tỷ lệ loại bỏ là điều cốt tử để đạt độ chính xác cao cho mô hình.",
        "synonyms": [
          "Configuration parameter",
          "External variable"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-51",
        "word": "Overfitting",
        "phonetic": "/ˌoʊ.vɚˈfɪt.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hiện tượng học vẹt quá khớp dữ liệu huấn luyện",
        "definitionEn": "The production of an analysis that corresponds too closely or exclusively to a particular set of data, failing to predict future observations reliably.",
        "exampleEn": "Applying regularization techniques helps prevent deep learning models from overfitting.",
        "exampleVi": "Áp dụng các kỹ thuật chính quy hóa giúp ngăn các mô hình học sâu khỏi hiện tượng học vẹt quá khớp dữ liệu.",
        "synonyms": [
          "Over-specialization",
          "Data memorization"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-52",
        "word": "Underfitting",
        "phonetic": "/ˌʌn.dɚˈfɪt.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hiện tượng chưa khớp dữ liệu do mô hình quá đơn giản",
        "definitionEn": "A situation where a machine learning model cannot capture the underlying trend of the training data.",
        "exampleEn": "Using a linear model for complex non-linear image recognition resulted in severe underfitting.",
        "exampleVi": "Sử dụng mô hình tuyến tính cho việc nhận diện hình ảnh phi tuyến tính phức tạp đã dẫn đến hiện tượng chưa khớp nghiêm trọng.",
        "synonyms": [
          "Under-specialization",
          "Insufficient complexity"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-53",
        "word": "Ground Truth",
        "phonetic": "/ˌɡraʊnd ˈtruːθ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Dữ liệu thực tế chuẩn xác tuyệt đối để đối chiếu",
        "definitionEn": "Information that is known to be real or true, provided by direct observation and measurement.",
        "exampleEn": "Radiologists provided the expert ground truth labels used to evaluate the chest X-ray AI model.",
        "exampleVi": "Các bác sĩ chẩn đoán hình ảnh đã cung cấp nhãn dữ liệu thực tế chuẩn xác được dùng để đánh giá mô hình AI X-quang phổi.",
        "synonyms": [
          "Gold standard",
          "Empirical baseline"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-54",
        "word": "Inference",
        "phonetic": "/ˈɪn.fɚ.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quá trình suy luận chạy mô hình AI thực tế",
        "definitionEn": "The process of using a trained machine learning model to make predictions on unseen data.",
        "exampleEn": "Edge AI chips allow real-time image inference directly on wearable glasses without internet latency.",
        "exampleVi": "Chip AI biên cho phép suy luận hình ảnh theo thời gian thực trực tiếp trên kính đeo mà không bị trễ mạng.",
        "synonyms": [
          "Model prediction",
          "Execution step"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-55",
        "word": "Tokenization",
        "phonetic": "/ˌtoʊ.kən.əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phân mảnh văn bản thành các token đơn vị",
        "definitionEn": "The process of breaking down a stream of text into words, phrases, symbols, or other meaningful elements called tokens.",
        "exampleEn": "Byte-pair encoding tokenization breaks unusual technical words into familiar sub-word chunks.",
        "exampleVi": "Phân mảnh văn bản mã hóa cặp byte chia các từ ngữ kỹ thuật lạ lẫm thành các mẩu từ con quen thuộc.",
        "synonyms": [
          "Word segmentation",
          "Text parsing"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-56",
        "word": "Embedding",
        "phonetic": "/ɪmˈbed.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Véc-tơ biểu diễn ngữ nghĩa không gian",
        "definitionEn": "A relatively low-dimensional space into which high-dimensional vectors can be translated, capturing semantic meaning.",
        "exampleEn": "Vector embeddings allow similarity search algorithms to find related articles conceptually.",
        "exampleVi": "Véc-tơ nhúng ngữ nghĩa cho phép các thuật toán tìm kiếm tương đồng tìm ra các bài viết liên quan về mặt khái niệm.",
        "synonyms": [
          "Vector representation",
          "Semantic encoding"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-57",
        "word": "Vector Database",
        "phonetic": "/ˈvek.tɚ ˌdeɪ.t̬ə.beɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cơ sở dữ liệu véc-tơ phục vụ tìm kiếm ngữ nghĩa",
        "definitionEn": "A database designed to store, manage, and index high-dimensional vector representations efficiently.",
        "exampleEn": "Retrieval-Augmented Generation workflows query a vector database to fetch relevant enterprise knowledge.",
        "exampleVi": "Quy trình Tạo sinh tăng cường truy xuất dữ liệu truy vấn cơ sở dữ liệu véc-tơ để lấy kiến thức doanh nghiệp liên quan.",
        "synonyms": [
          "Embedding store",
          "Semantic database"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-58",
        "word": "Fine-Tuning",
        "phonetic": "/ˌfaɪnˈtuː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tinh chỉnh chuyên sâu mô hình nền tảng bằng dữ liệu riêng",
        "definitionEn": "The process of taking a pre-trained model and adapting it to a specific task by further training it on specialized data.",
        "exampleEn": "Fine-tuning the language model on clinical oncology records dramatically improved diagnostic accuracy.",
        "exampleVi": "Tinh chỉnh mô hình ngôn ngữ trên các bệnh án ung thư lâm sàng đã cải thiện đáng kể độ chính xác chẩn đoán.",
        "synonyms": [
          "Model adaptation",
          "Specialized training"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-59",
        "word": "Hallucination",
        "phonetic": "/həˌluː.səˈneɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hiện tượng AI bịa đặt thông tin sai lệch",
        "definitionEn": "A phenomenon where a large language model generates incorrect, nonsensical, or unfaithful statements with high confidence.",
        "exampleEn": "Grounding AI outputs with cited reference documents mitigates the dangerous risk of hallucination.",
        "exampleVi": "Cung cấp tài liệu tham khảo có trích dẫn cho kết quả AI giúp giảm thiểu nguy cơ ảo tưởng bịa đặt nguy hiểm.",
        "synonyms": [
          "Fabrication",
          "False generation",
          "Model delusion"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-60",
        "word": "Prompt Engineering",
        "phonetic": "/ˌprɑːmpt ˌen.dʒəˈnɪr.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kỹ thuật tối ưu câu lệnh điều khiển AI",
        "definitionEn": "The practice of crafting input prompts to guide generative AI models toward desired, accurate outputs.",
        "exampleEn": "Mastering prompt engineering techniques like chain-of-thought dramatically improves mathematical reasoning.",
        "exampleVi": "Thành thạo các kỹ thuật tối ưu câu lệnh như chuỗi tư duy sẽ cải thiện đáng kể khả năng lập luận toán học của AI.",
        "synonyms": [
          "Prompt design",
          "Instruction tuning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-61",
        "word": "Zero-Shot Learning",
        "phonetic": "/ˌzɪr.oʊ ˈʃɑːt ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Học không cần mẫu ví dụ",
        "definitionEn": "A machine learning scenario where a model recognizes classes or tasks without having seen explicit labeled examples during training.",
        "exampleEn": "The vision-language model displayed impressive zero-shot learning on identifying exotic deep-sea marine species.",
        "exampleVi": "Mô hình thị giác - ngôn ngữ đã thể hiện khả năng học không cần mẫu ấn tượng trong việc nhận diện các loài sinh vật biển sâu kỳ lạ.",
        "synonyms": [
          "Transfer learning",
          "Shot-free learning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-62",
        "word": "Few-Shot Learning",
        "phonetic": "/ˌfjuː ˈʃɑːt ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Học với vài mẫu ví dụ minh họa",
        "definitionEn": "A machine learning task where a model is presented with a tiny number of training examples to generalize a new concept.",
        "exampleEn": "Supplying three good code examples enabled the AI assistant to perform accurate few-shot classification.",
        "exampleVi": "Cung cấp 3 ví dụ mã mẫu chuẩn đã giúp trợ lý AI thực hiện phân loại chính xác theo phương thức học vài mẫu.",
        "synonyms": [
          "Context learning",
          "In-context learning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-63",
        "word": "Explainability",
        "phonetic": "/ɪkˌspleɪ.nəˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khả năng giải thích được lý do đằng sau quyết định của AI",
        "definitionEn": "The extent to which the internal mechanics of a machine learning model can be understood by humans.",
        "exampleEn": "In healthcare and criminal sentencing, algorithmic explainability is legally mandated.",
        "exampleVi": "Trong chăm sóc sức khỏe và tuyên án hình sự, khả năng giải thích của thuật toán là yêu cầu bắt buộc theo luật định.",
        "synonyms": [
          "Interpretability",
          "Transparency",
          "Accountability"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-64",
        "word": "Bias",
        "phonetic": "/ˈbaɪ.əs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Định kiến thiên lệch dữ liệu",
        "definitionEn": "Prejudice in favor of or against one thing, person, or group compared with another, usually in a way considered unfair.",
        "exampleEn": "Training on uncurated historical hiring logs introduced severe gender bias into the screening algorithm.",
        "exampleVi": "Huấn luyện trên nhật ký tuyển dụng lịch sử chưa qua chọn lọc đã mang định kiến giới tính nặng nề vào thuật toán sàng lọc.",
        "synonyms": [
          "Prejudice",
          "Skew",
          "Partiality"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-65",
        "word": "Alignment",
        "phonetic": "/əˈlaɪn.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự đồng bộ hóa mục tiêu AI theo chuẩn đạo đức con người",
        "definitionEn": "The subfield of artificial intelligence aimed at steering AI systems toward human goals, preferences, or ethical principles.",
        "exampleEn": "AI safety researchers prioritize alignment to ensure advanced superintelligence acts benevolently.",
        "exampleVi": "Các nhà nghiên cứu an toàn AI ưu tiên tính tương thích nhằm đảm bảo siêu trí tuệ nhân tạo hành động vì mục đích tốt đẹp cho con người.",
        "synonyms": [
          "Ethical tuning",
          "Goal concordance"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-66",
        "word": "Supervised Learning",
        "phonetic": "/ˈsuː.pɚ.vaɪzd ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Học có giám sát bằng dữ liệu gắn nhãn",
        "definitionEn": "A machine learning paradigm where the computer is trained on input data that has been paired with the correct output labels.",
        "exampleEn": "Supervised learning algorithms excel at spam email detection when trained on hundreds of thousands of marked emails.",
        "exampleVi": "Các thuật toán học có giám sát rất xuất sắc trong việc phát hiện thư rác khi được huấn luyện trên hàng trăm nghìn email đã gắn nhãn.",
        "synonyms": [
          "Labeled learning",
          "Guided training"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-67",
        "word": "Unsupervised Learning",
        "phonetic": "/ˌʌnˈsuː.pɚ.vaɪzd ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Học không giám sát tự tìm quy luật ẩn",
        "definitionEn": "A type of machine learning that looks for previously undetected patterns in a data set with no pre-existing labels.",
        "exampleEn": "Clustering customer purchasing behaviors into distinct marketing personas is an application of unsupervised learning.",
        "exampleVi": "Phân nhóm hành vi mua sắm của khách hàng thành các chân dung tiếp thị riêng biệt là ứng dụng của học không giám sát.",
        "synonyms": [
          "Pattern discovery",
          "Clustering analysis"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-68",
        "word": "Reinforcement Learning",
        "phonetic": "/ˌriː.ɪnˈfɔːrs.mənt ˌlɝː.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Học tăng cường dựa trên thưởng phạt",
        "definitionEn": "An area of machine learning concerned with how software agents ought to take actions in an environment to maximize some notion of cumulative reward.",
        "exampleEn": "Reinforcement learning enabled computers to defeat grandmasters in complex strategy games like Go.",
        "exampleVi": "Học tăng cường đã cho phép máy tính đánh bại các đại kiện tướng trong những trò chơi chiến thuật phức tạp như Cờ vây.",
        "synonyms": [
          "RL",
          "Reward-based learning"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-69",
        "word": "Heuristic",
        "phonetic": "/hjʊˈrɪs.tɪk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Phương pháp giải toán gần đúng theo kinh nghiệm",
        "definitionEn": "Any approach to problem solving or self-discovery that employs a practical method that is not guaranteed to be optimal or perfect, but sufficient for immediate goals.",
        "exampleEn": "Pathfinding algorithms in video games employ distance heuristics to discover navigations rapidly.",
        "exampleVi": "Thuật toán tìm đường trong trò chơi điện tử sử dụng các hàm gần đúng khoảng cách để tìm đường đi nhanh chóng.",
        "synonyms": [
          "Rule of thumb",
          "Approximation method"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-70",
        "word": "Idempotent",
        "phonetic": "/ˌaɪ.dəmˈpoʊ.tənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Có tính bất biến khi thực hiện lặp lại",
        "definitionEn": "Denoting an element or operation which can be applied multiple times without changing the result.",
        "exampleEn": "HTTP GET and DELETE requests are designed by specification to be strictly idempotent.",
        "exampleVi": "Các yêu cầu HTTP GET và DELETE được thiết kế theo quy chuẩn kỹ thuật là phải có tính bất biến tuyệt đối.",
        "synonyms": [
          "Repeat-invariant",
          "Side-effect free"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-71",
        "word": "Compiler",
        "phonetic": "/kəmˈpaɪ.lɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trình biên dịch mã nguồn sang mã máy",
        "definitionEn": "A program that translates source code into machine language.",
        "exampleEn": "The C++ compiler optimizes machine instructions for maximum hardware speed.",
        "exampleVi": "Trình biên dịch C++ tối ưu hóa các lệnh mã máy để đạt tốc độ phần cứng tối đa.",
        "synonyms": [
          "Translator",
          "Code builder"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-72",
        "word": "Interpreter",
        "phonetic": "/ɪnˈtɝː.prə.t̬ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trình thông dịch chạy mã trực tiếp từng dòng",
        "definitionEn": "A computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program.",
        "exampleEn": "The Python interpreter evaluates code line by line at runtime.",
        "exampleVi": "Trình thông dịch Python thực thi mã nguồn từng dòng một trong thời gian chạy.",
        "synonyms": [
          "Runtime executor",
          "Script parser"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-73",
        "word": "Garbage Collection",
        "phonetic": "/ˈɡɑːr.bɪdʒ kəˌlek.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cơ chế tự động thu gom dọn dẹp bộ nhớ rác",
        "definitionEn": "The automatic recovery of heap memory for the program by reclaiming objects that are no longer referenced.",
        "exampleEn": "Automatic garbage collection in C# prevents common fatal memory leaks.",
        "exampleVi": "Thu gom bộ nhớ rác tự động trong C# ngăn ngừa các lỗi rò rỉ bộ nhớ chết người phổ biến.",
        "synonyms": [
          "Memory reclamation",
          "Heap cleanup"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-74",
        "word": "Memory Leak",
        "phonetic": "/ˈmem.ɚ.i ˌliːk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hiện tượng rò rỉ bộ nhớ RAM do không giải phóng",
        "definitionEn": "A failure in a program to release discarded memory, causing impaired performance or failure.",
        "exampleEn": "Unclosed database connections caused an insidious memory leak that crashed the server after two days.",
        "exampleVi": "Các kết nối cơ sở dữ liệu không đóng đã gây ra hiện tượng rò rỉ bộ nhớ âm thầm làm sập máy chủ sau 2 ngày.",
        "synonyms": [
          "Memory bleed",
          "Resource exhaustion"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-75",
        "word": "Deadlock",
        "phonetic": "/ˈded.lɑːk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tình trạng bế tắc nghẽn tài nguyên giữa các luồng",
        "definitionEn": "A situation, typically one involving opposing parties, in which no progress can be made; in computing, when two processes each hold a resource the other needs.",
        "exampleEn": "Improper lock acquisition order resulted in a critical database transaction deadlock.",
        "exampleVi": "Thứ tự chiếm dụng khóa không chuẩn xác đã dẫn tới tình trạng bế tắc giao dịch cơ sở dữ liệu nghiêm trọng.",
        "synonyms": [
          "Impasse",
          "Stalemate",
          "Lockout"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-76",
        "word": "Race Condition",
        "phonetic": "/ˈreɪs kənˌdɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Xung đột tương tranh luồng khi cùng sửa tài nguyên",
        "definitionEn": "An undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly.",
        "exampleEn": "Lack of mutex synchronization created a subtle race condition in bank balance updates.",
        "exampleVi": "Thiếu đồng bộ khóa loại trừ đã tạo ra xung đột tương tranh tinh vi trong việc cập nhật số dư ngân hàng.",
        "synonyms": [
          "Data race",
          "Timing hazard"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-77",
        "word": "Mutex",
        "phonetic": "/ˈmjuː.teks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khóa loại trừ tương hỗ bảo vệ vùng nhớ chung",
        "definitionEn": "A program object that allows multiple program threads to share the same resource, such as file access, but not simultaneously.",
        "exampleEn": "Acquiring a mutex lock ensures exclusive access to the shared counter variable.",
        "exampleVi": "Chiếm dụng khóa loại trừ tương hỗ đảm bảo quyền truy cập độc quyền vào biến đếm dùng chung.",
        "synonyms": [
          "Mutual exclusion lock",
          "Binary semaphore"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-78",
        "word": "Semaphore",
        "phonetic": "/ˈsem.ə.fɔːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Cơ chế đèn hiệu điều phối số lượng luồng truy cập",
        "definitionEn": "A variable or abstract data type used to control access to a common resource by multiple threads.",
        "exampleEn": "A counting semaphore limits simultaneous database connections to a maximum of twenty.",
        "exampleVi": "Đèn hiệu đếm giới hạn số lượng kết nối cơ sở dữ liệu đồng thời ở mức tối đa 20.",
        "synonyms": [
          "Signaling mechanism",
          "Concurrency regulator"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-79",
        "word": "Load Balancer",
        "phonetic": "/ˈloʊd ˌbæl.ən.sɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bộ cân bằng tải phân phối lưu lượng truy cập",
        "definitionEn": "A device that acts as a reverse proxy and distributes network or application traffic across a number of servers.",
        "exampleEn": "The load balancer distributes incoming user requests evenly across ten web application instances.",
        "exampleVi": "Bộ cân bằng tải phân phối đều đặn các yêu cầu của người dùng tới 10 phiên bản ứng dụng web.",
        "synonyms": [
          "Traffic distributor",
          "Reverse proxy"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-80",
        "word": "Reverse Proxy",
        "phonetic": "/rɪˌvɝːs ˈprɑːk.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Máy chủ ủy quyền ngược đứng trước bảo vệ backend",
        "definitionEn": "A type of proxy server that retrieves resources on behalf of a client from one or more servers.",
        "exampleEn": "Nginx is frequently deployed as a reverse proxy to handle SSL termination and static asset caching.",
        "exampleVi": "Nginx thường được triển khai làm máy chủ ủy quyền ngược để xử lý chứng chỉ SSL và bộ nhớ đệm tài nguyên tĩnh.",
        "synonyms": [
          "Front gateway",
          "Edge proxy"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-81",
        "word": "CDN",
        "phonetic": "/ˌsiː.diːˈen/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mạng phân phối nội dung đặt gần người dùng",
        "definitionEn": "Content Delivery Network: a geographically distributed network of proxy servers and their data centers.",
        "exampleEn": "Serving media assets via a global CDN drastically cuts webpage load times worldwide.",
        "exampleVi": "Phân phối hình ảnh và video qua mạng CDN toàn cầu giúp giảm đáng kể thời gian tải trang web trên khắp thế giới.",
        "synonyms": [
          "Edge network",
          "Distributed cache"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-82",
        "word": "Caching",
        "phonetic": "/ˈkæʃ.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bộ nhớ đệm lưu tạm dữ liệu thường dùng",
        "definitionEn": "The process of storing copies of data in a cache memory location so that they can be accessed more quickly.",
        "exampleEn": "Redis in-memory caching stores hot session states for sub-millisecond retrieval.",
        "exampleVi": "Bộ nhớ đệm trong RAM Redis lưu trữ các phiên đăng nhập thường dùng để truy xuất dưới 1 mili-giây.",
        "synonyms": [
          "Temporary storage",
          "Buffer storage"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-83",
        "word": "Indexing",
        "phonetic": "/ˈɪn.dek.sɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đánh chỉ mục tăng tốc độ tìm kiếm cơ sở dữ liệu",
        "definitionEn": "A data structure technique to quickly locate and access data in a database.",
        "exampleEn": "Adding a composite index on user email and status reduced lookup times from two seconds to three milliseconds.",
        "exampleVi": "Thêm chỉ mục tổng hợp trên email người dùng và trạng thái đã giảm thời gian tìm kiếm từ 2 giây xuống còn 3 mili-giây.",
        "synonyms": [
          "Index creation",
          "Lookup cataloging"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-84",
        "word": "Normalization",
        "phonetic": "/ˌnɔːr.mə.ləˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuẩn hóa cơ sở dữ liệu để loại bỏ trùng lặp",
        "definitionEn": "The process of organizing data in a database to reduce data redundancy and improve data integrity.",
        "exampleEn": "Database normalization up to third normal form eliminates redundant customer address entries.",
        "exampleVi": "Chuẩn hóa cơ sở dữ liệu đến dạng chuẩn 3 loại bỏ các mục địa chỉ khách hàng bị trùng lặp.",
        "synonyms": [
          "Data structuring",
          "Redundancy elimination"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-85",
        "word": "Denormalization",
        "phonetic": "/diːˌnɔːr.mə.ləˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phi chuẩn hóa cơ sở dữ liệu để tăng tốc truy vấn đọc",
        "definitionEn": "The process of adding precomputed redundant data to an otherwise normalized relational database to improve read performance.",
        "exampleEn": "We used denormalization on the analytics dashboard tables to avoid massive thirty-table joins.",
        "exampleVi": "Chúng tôi đã sử dụng phi chuẩn hóa trên các bảng biểu đồ phân tích để tránh việc ghép 30 bảng khổng lồ.",
        "synonyms": [
          "Read optimization",
          "Data duplication"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-86",
        "word": "ACID",
        "phonetic": "/ˈæs.ɪd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Bốn tính chất bảo toàn giao dịch dữ liệu chuẩn",
        "definitionEn": "Atomicity, Consistency, Isolation, Durability: properties that guarantee database transactions are processed reliably.",
        "exampleEn": "PostgreSQL strictly adheres to ACID principles, making it ideal for financial transactions.",
        "exampleVi": "PostgreSQL tuân thủ nghiêm ngặt các nguyên tắc ACID, biến nó thành lựa chọn lý tưởng cho giao dịch tài chính.",
        "synonyms": [
          "Transaction guarantees",
          "Database reliability"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-87",
        "word": "Eventual Consistency",
        "phonetic": "/ɪˌven.tʃu.əl kənˈsɪs.tən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tính nhất quán dữ liệu dần dần theo thời gian",
        "definitionEn": "A consistency model used in distributed computing to achieve high availability that guarantees, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value.",
        "exampleEn": "Distributed NoSQL databases trade immediate consistency for eventual consistency and massive scale.",
        "exampleVi": "Các cơ sở dữ liệu NoSQL phân tán đánh đổi tính nhất quán tức thì lấy tính nhất quán dần dần và quy mô khổng lồ.",
        "synonyms": [
          "Asynchronous consistency",
          "Delayed synchronization"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-88",
        "word": "CAP Theorem",
        "phonetic": "/ˌsiː.eɪˈpiː ˈθɪr.əm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Định lý CAP về giới hạn hệ thống phân tán",
        "definitionEn": "A theorem stating that a distributed data store can only provide two of the following three guarantees: Consistency, Availability, and Partition tolerance.",
        "exampleEn": "Under network partitioning, system designers must choose between data consistency or continuous availability.",
        "exampleVi": "Khi xảy ra chia cắt mạng, các nhà thiết kế hệ thống phải lựa chọn giữa tính nhất quán dữ liệu hoặc tính sẵn sàng liên tục.",
        "synonyms": [
          "Brewer's theorem"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-89",
        "word": "Websocket",
        "phonetic": "/ˈwebˌsɑː.kɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giao thức truyền thông hai chiều thời gian thực",
        "definitionEn": "A computer communications protocol, providing full-duplex communication channels over a single TCP connection.",
        "exampleEn": "Real-time collaborative text editing relies on WebSockets for instant cursor synchronization.",
        "exampleVi": "Chỉnh sửa văn bản cộng tác thời gian thực dựa vào WebSocket để đồng bộ hóa con trỏ chuột tức thì.",
        "synonyms": [
          "Bidirectional socket",
          "Real-time stream"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-90",
        "word": "GraphQL",
        "phonetic": "/ˌɡræf.kjuːˈel/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Ngôn ngữ truy vấn dữ liệu linh hoạt theo yêu cầu",
        "definitionEn": "An open-source data query and manipulation language for APIs, allowing clients to define the structure of data required.",
        "exampleEn": "GraphQL allows mobile applications to request exactly the fields they need, reducing over-fetching.",
        "exampleVi": "GraphQL cho phép các ứng dụng di động chỉ yêu cầu đúng các trường dữ liệu cần thiết, giảm lãng phí băng thông.",
        "synonyms": [
          "Query language",
          "Flexible API"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-91",
        "word": "Dependency Injection",
        "phonetic": "/dɪˌpen.dən.si ɪnˈdʒek.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kỹ thuật tiêm phụ thuộc giúp mã lỏng lẻo dễ test",
        "definitionEn": "A software design pattern in which an object or function receives other objects or functions that it depends on.",
        "exampleEn": "ASP.NET Core provides built-in dependency injection for seamless database context resolution.",
        "exampleVi": "ASP.NET Core tích hợp sẵn kỹ thuật tiêm phụ thuộc giúp phân giải ngữ cảnh cơ sở dữ liệu một cách mượt mà.",
        "synonyms": [
          "DI",
          "IoC pattern"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-92",
        "word": "Inversion of Control",
        "phonetic": "/ɪnˌvɝː.ʒən əv kənˈtroʊl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nguyên lý đảo ngược quyền điều khiển luồng chương trình",
        "definitionEn": "A design principle in which computer programs pass control of execution over to a container or framework.",
        "exampleEn": "The Spring framework uses inversion of control to manage enterprise Java application lifecycles.",
        "exampleVi": "Khung làm việc Spring áp dụng nguyên lý đảo ngược điều khiển để quản lý vòng đời ứng dụng Java doanh nghiệp.",
        "synonyms": [
          "IoC",
          "Hollywood Principle"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-93",
        "word": "Design Pattern",
        "phonetic": "/dɪˈzaɪn ˌpæt̬.ɚn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mẫu thiết kế phần mềm chuẩn mực đã được kiểm nghiệm",
        "definitionEn": "A general repeatable solution to a commonly occurring problem in software design.",
        "exampleEn": "The Factory pattern is a popular creational design pattern for instantiating complex objects.",
        "exampleVi": "Mẫu Factory là một mẫu thiết kế khởi tạo phổ biến để khởi tạo các đối tượng phức tạp.",
        "synonyms": [
          "Software template",
          "Architectural pattern"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-94",
        "word": "Singleton",
        "phonetic": "/ˈsɪŋ.ɡəl.tən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mẫu thiết kế chỉ tạo duy nhất một thực thể",
        "definitionEn": "A software design pattern that restricts the instantiation of a class to one single instance.",
        "exampleEn": "The logging service was implemented as a singleton to centralize log output across the application.",
        "exampleVi": "Dịch vụ ghi nhật ký được triển khai theo mẫu Singleton để tập trung hóa đầu ra nhật ký trên toàn ứng dụng.",
        "synonyms": [
          "Single instance",
          "Global instance"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-95",
        "word": "Observer Pattern",
        "phonetic": "/əbˈzɝː.vɚ ˌpæt̬.ɚn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mẫu thiết kế quan sát và thông báo sự kiện",
        "definitionEn": "A software design pattern in which an object maintains a list of dependents and notifies them automatically of any state changes.",
        "exampleEn": "Event-driven UI frameworks use the observer pattern to update reactive view components.",
        "exampleVi": "Các khung làm việc giao diện hướng sự kiện sử dụng mẫu quan sát để cập nhật các thành phần hiển thị phản ứng.",
        "synonyms": [
          "Pub-sub pattern",
          "Event listener pattern"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-96",
        "word": "Middleware",
        "phonetic": "/ˈmɪd.əl.wer/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phần mềm trung gian xử lý yêu cầu trước khi vào ứng dụng",
        "definitionEn": "Software that provides common services and capabilities to applications outside of what's offered by the operating system.",
        "exampleEn": "Authentication middleware validates JWT tokens before forwarding the request to the controller.",
        "exampleVi": "Phần mềm trung gian xác thực kiểm tra mã định danh JWT trước khi chuyển tiếp yêu cầu đến bộ điều khiển.",
        "synonyms": [
          "Intermediary software",
          "Pipeline handler"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-97",
        "word": "Cross-Origin",
        "phonetic": "/ˌkrɑːs ˈɔːr.ə.dʒɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Yêu cầu chia sẻ tài nguyên giữa các tên miền khác nhau (CORS)",
        "definitionEn": "The ability to request resources from a domain different from the domain that served the first resource.",
        "exampleEn": "Configure CORS policies carefully to allow trusted frontend applications to call your APIs.",
        "exampleVi": "Cấu hình chính sách CORS cẩn thận để cho phép các ứng dụng giao diện đáng tin cậy gọi các API của bạn.",
        "synonyms": [
          "CORS",
          "Inter-domain sharing"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-98",
        "word": "Sanitization",
        "phonetic": "/ˌsæn.ə.t̬əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Làm sạch dữ liệu đầu vào để chống tấn công",
        "definitionEn": "The process of cleaning data to prevent malicious input from compromising software security.",
        "exampleEn": "Input sanitization prevents SQL injection and cross-site scripting vulnerabilities.",
        "exampleVi": "Làm sạch dữ liệu đầu vào ngăn chặn các lỗ hổng tiêm mã SQL và tấn công kịch bản liên trang web.",
        "synonyms": [
          "Input cleaning",
          "Data purification"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-99",
        "word": "SQL Injection",
        "phonetic": "/ˌes.kjuːˈel ɪnˈdʒek.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tấn công tiêm câu lệnh SQL độc hại vào cơ sở dữ liệu",
        "definitionEn": "A code injection technique used to attack data-driven applications by inserting malicious SQL statements.",
        "exampleEn": "Parameterized queries effectively eradicate SQL injection attack vectors.",
        "exampleVi": "Các truy vấn tham số hóa loại bỏ triệt để các véc-tơ tấn công tiêm mã SQL.",
        "synonyms": [
          "SQLi",
          "Query tampering"
        ],
        "topicId": "technology"
      },
      {
        "id": "tech-100",
        "word": "Cross-Site Scripting",
        "phonetic": "/ˌkrɑːs saɪt ˈskrɪp.tɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tấn công chèn mã JavaScript độc hại vào trang web (XSS)",
        "definitionEn": "A type of security vulnerability typically found in web applications that enables attackers to inject client-side scripts.",
        "exampleEn": "Escaping dynamic HTML output shields your users from stored cross-site scripting exploits.",
        "exampleVi": "Mã hóa ký tự thoát đầu ra HTML động bảo vệ người dùng của bạn khỏi các mã khai thác XSS lưu trữ.",
        "synonyms": [
          "XSS",
          "Script injection"
        ],
        "topicId": "technology"
      }
    ]
  },
  {
    "id": "travel",
    "title": "Du Lịch & Lưu Trú Quốc Tế",
    "slug": "travel",
    "icon": "Plane",
    "color": "text-sky-500",
    "bgColor": "bg-sky-50 dark:bg-sky-950/40",
    "borderColor": "border-sky-200 dark:border-sky-800",
    "description": "Thủ tục hàng không, lưu trú khách sạn, danh lam thắng cảnh và giao lưu văn hóa bản địa",
    "wordCount": 90,
    "words": [
      {
        "id": "travel-1",
        "word": "Itinerary",
        "phonetic": "/aɪˈtɪn.ə.rer.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lịch trình chuyến đi chi tiết theo từng ngày",
        "definitionEn": "A planned route or journey with scheduled dates and times.",
        "exampleEn": "Review the travel itinerary carefully to ensure you don't miss the connecting flight.",
        "exampleVi": "Hãy xem lại lịch trình chuyến đi cẩn thận để đảm bảo bạn không lỡ chuyến bay nối chuyến.",
        "synonyms": [
          "Schedule",
          "Travel plan",
          "Route map"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-2",
        "word": "Embark",
        "phonetic": "/ɪmˈbɑːrk/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Lên tàu, máy bay hoặc bắt đầu hành trình mới",
        "definitionEn": "Go on board a ship, aircraft, or other vehicle; begin a course of action.",
        "exampleEn": "Passengers for flight VN-302 may now embark through gate seven.",
        "exampleVi": "Hành khách trên chuyến bay VN-302 hiện có thể lên máy bay qua cửa số bảy.",
        "synonyms": [
          "Board",
          "Set out",
          "Commence"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-3",
        "word": "Accommodation",
        "phonetic": "/əˌkɑː.məˈdeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Phòng nghỉ lưu trú, chỗ ở khách sạn",
        "definitionEn": "A room, group of rooms, or building in which someone may live or stay.",
        "exampleEn": "The seaside boutique hotel provides luxurious accommodation with panoramic sea views.",
        "exampleVi": "Khách sạn phong cách bên bờ biển cung cấp chỗ nghỉ dưỡng sang trọng với tầm nhìn toàn cảnh ra biển.",
        "synonyms": [
          "Lodging",
          "Housing",
          "Rooms"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-4",
        "word": "Customs",
        "phonetic": "/ˈkʌs.təmz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cơ quan hải quan kiểm soát biên giới",
        "definitionEn": "The official department that administers and collects the duties levied by a government on imported goods.",
        "exampleEn": "Declare all foreign agricultural produce upon arriving at international customs.",
        "exampleVi": "Hãy khai báo tất cả nông sản nước ngoài khi làm thủ tục tại hải quan quốc tế.",
        "synonyms": [
          "Border control",
          "Port authority",
          "Immigration"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-5",
        "word": "Breathtaking",
        "phonetic": "/ˈbreθˌteɪ.kɪŋ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đẹp ngỡ ngàng, ngoạn mục choáng ngợp",
        "definitionEn": "Astonishing or awe-inspiring in quality, beauty, or grandeur.",
        "exampleEn": "Watching the golden sunrise over Ha Long Bay is a breathtaking experience.",
        "exampleVi": "Ngắm bình minh vàng rực trên Vịnh Hạ Long là một trải nghiệm đẹp đến ngỡ ngàng.",
        "synonyms": [
          "Spectacular",
          "Awe-inspiring",
          "Magnificent"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-6",
        "word": "Hospitality",
        "phonetic": "/ˌhɑː.spɪˈtæl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lòng hiếu khách nồng hậu",
        "definitionEn": "The friendly and generous reception and entertainment of guests, visitors, or strangers.",
        "exampleEn": "The warm hospitality of the local homestay family made us feel right at home.",
        "exampleVi": "Lòng hiếu khách ấm áp của gia đình chủ nhà homestay địa phương khiến chúng tôi cảm thấy như ở nhà.",
        "synonyms": [
          "Warmth",
          "Friendliness",
          "Welcoming attitude"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-7",
        "word": "Excursion",
        "phonetic": "/ɪkˈskɝː.ʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyến dã ngoại tham quan ngắn ngày",
        "definitionEn": "A short journey or trip, especially one engaged in as a leisure activity.",
        "exampleEn": "The resort organizes a daily scuba diving excursion to nearby coral reefs.",
        "exampleVi": "Khu nghỉ dưỡng tổ chức một chuyến tham quan lặn biển hàng ngày tới các rạn san hô gần đó.",
        "synonyms": [
          "Outing",
          "Jaunt",
          "Day trip"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-8",
        "word": "Layover",
        "phonetic": "/ˈleɪˌoʊ.vɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khoảng thời gian quá cảnh chờ chuyến bay tiếp theo",
        "definitionEn": "A period of rest or waiting before a further stage in a journey.",
        "exampleEn": "We had a comfortable six-hour layover in Singapore Changi Airport.",
        "exampleVi": "Chúng tôi đã có 6 tiếng quá cảnh dễ chịu tại Sân bay Changi Singapore.",
        "synonyms": [
          "Stopover",
          "Transit break",
          "Pause"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-9",
        "word": "Souvenir",
        "phonetic": "/ˌsuː.vəˈnɪr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Món quà lưu niệm kỷ niệm chuyến đi",
        "definitionEn": "A thing that is kept as a reminder of a person, place, or event.",
        "exampleEn": "She purchased handmade ceramic tea cups as souvenirs from the pottery village.",
        "exampleVi": "Cô ấy đã mua những chiếc chén trà gốm thủ công làm quà lưu niệm từ làng gốm.",
        "synonyms": [
          "Keepsake",
          "Memento",
          "Token"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-10",
        "word": "Picturesque",
        "phonetic": "/ˌpɪk.tʃəˈresk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đẹp như tranh vẽ, thơ mộng",
        "definitionEn": "Visually attractive, especially in a quaint or pretty style.",
        "exampleEn": "The ancient town of Hoi An is famous for its picturesque lantern-lit streets.",
        "exampleVi": "Phố cổ Hội An nổi tiếng với những con phố thắp đèn lồng đẹp như tranh vẽ.",
        "synonyms": [
          "Scenic",
          "Charming",
          "Quaint"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-11",
        "word": "Jet Lag",
        "phonetic": "/ˈdʒet ˌlæɡ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự mệt mỏi do lệch múi giờ sau chuyến bay dài",
        "definitionEn": "Extreme tiredness and other physical effects felt by a person after a long flight across different time zones.",
        "exampleEn": "Drinking plenty of water and getting sunlight helps overcome jet lag faster.",
        "exampleVi": "Uống nhiều nước và tắm nắng giúp nhanh chóng vượt qua cảm giác mệt mỏi do lệch múi giờ.",
        "synonyms": [
          "Time zone fatigue",
          "Circadian desynchrony"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-12",
        "word": "Expedition",
        "phonetic": "/ˌek.spəˈdɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyến thám hiểm khoa học hoặc khám phá",
        "definitionEn": "A journey undertaken by a group of people with a particular purpose, especially that of exploration, scientific research, or war.",
        "exampleEn": "The team launched an ambitious climbing expedition to conquer the Himalayan peak.",
        "exampleVi": "Đội ngũ đã khởi động một chuyến leo núi thám hiểm đầy tham vọng nhằm chinh phục đỉnh Himalaya.",
        "synonyms": [
          "Exploration",
          "Voyage",
          "Trek"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-13",
        "word": "Wanderlust",
        "phonetic": "/ˈwɑːn.dɚ.lʌst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Niềm đam mê xê dịch, khao khát đi du lịch khắp chốn",
        "definitionEn": "A strong desire to travel.",
        "exampleEn": "Her insatiable wanderlust drove her to backpack through forty different nations in three years.",
        "exampleVi": "Niềm đam mê xê dịch không ngừng thôi thúc cô ấy vác ba lô đi qua 40 quốc gia khác nhau trong 3 năm.",
        "synonyms": [
          "Passion for travel",
          "Restlessness"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-14",
        "word": "Boarding Pass",
        "phonetic": "/ˈbɔːr.dɪŋ ˌpæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thẻ lên máy bay qua cổng an ninh",
        "definitionEn": "A pass for boarding an aircraft, given to passengers when checking in.",
        "exampleEn": "Keep your boarding pass and national passport handy at the departure gate.",
        "exampleVi": "Hãy luôn cầm sẵn thẻ lên máy bay và hộ chiếu quốc gia tại cửa khởi hành.",
        "synonyms": [
          "Flight ticket",
          "Boarding card"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-15",
        "word": "Luggage Allowance",
        "phonetic": "/ˈlʌɡ.ɪdʒ əˌlaʊ.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hạn mức hành lý ký gửi cho phép",
        "definitionEn": "The maximum amount of baggage a passenger is allowed to carry without paying extra.",
        "exampleEn": "The budget airline offers a standard checked luggage allowance of twenty kilograms.",
        "exampleVi": "Hãng hàng không giá rẻ cung cấp hạn mức hành lý ký gửi tiêu chuẩn là 20 kg.",
        "synonyms": [
          "Baggage limit",
          "Weight allowance"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-16",
        "word": "Transit",
        "phonetic": "/ˈtræn.zɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự quá cảnh chuyển tiếp qua một quốc gia",
        "definitionEn": "The action of passing through or across a place on the way to somewhere else.",
        "exampleEn": "Passengers traveling in transit through Tokyo do not require a tourist entry visa.",
        "exampleVi": "Hành khách quá cảnh qua Tokyo không cần phải xin thị thực du lịch nhập cảnh.",
        "synonyms": [
          "Passage",
          "Transfer",
          "Crossing"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-17",
        "word": "Immigration",
        "phonetic": "/ˌɪm.əˈɡreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cửa khẩu nhập cảnh, kiểm tra hộ chiếu",
        "definitionEn": "The place at an airport or border where travelers' passports and visas are checked.",
        "exampleEn": "Queue patiently in the non-resident lane when proceeding through passport immigration.",
        "exampleVi": "Hãy kiên nhẫn xếp hàng tại làn dành cho người không cư trú khi làm thủ tục nhập cảnh.",
        "synonyms": [
          "Passport control",
          "Border inspection"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-18",
        "word": "Pristine",
        "phonetic": "/ˈprɪs.tiːn/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Nguyên sơ, thuần khiết chưa bị con người tàn phá",
        "definitionEn": "In its original condition; unspoiled.",
        "exampleEn": "The tropical island is renowned for its pristine white sand beaches and crystal waters.",
        "exampleVi": "Hòn đảo nhiệt đới nổi tiếng với những bãi cát trắng nguyên sơ và làn nước trong vắt.",
        "synonyms": [
          "Unspoiled",
          "Pure",
          "Untouched"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-19",
        "word": "Sightseeing",
        "phonetic": "/ˈsaɪtˌsiː.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Hoạt động ngắm cảnh tham quan các danh thắng",
        "definitionEn": "The activity of visiting places of interest in a particular location by tourists.",
        "exampleEn": "We took a double-decker open-top bus for an afternoon of historical sightseeing.",
        "exampleVi": "Chúng tôi đã đi xe buýt hai tầng mui trần cho một buổi chiều tham quan các di tích lịch sử.",
        "synonyms": [
          "Touring",
          "Excursions",
          "Exploration"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-20",
        "word": "Ecotourism",
        "phonetic": "/ˈiː.koʊˌtʊr.ɪ.zəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Du lịch sinh thái bảo vệ môi trường",
        "definitionEn": "Tourism directed toward exotic, often threatened, natural environments, intended to support conservation efforts.",
        "exampleEn": "Ecotourism generates vital funds to preserve natural national parks and endangered flora.",
        "exampleVi": "Du lịch sinh thái tạo ra nguồn kinh phí thiết yếu để bảo tồn các vườn quốc gia và thảm thực vật quý hiếm.",
        "synonyms": [
          "Green travel",
          "Sustainable tourism"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-21",
        "word": "Scenic",
        "phonetic": "/ˈsiː.nɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Cảnh quan thiên nhiên tươi đẹp ngoạn mục",
        "definitionEn": "Providing or relating to views of impressive or beautiful natural scenery.",
        "exampleEn": "The train ride from Da Nang to Hue offers spectacular scenic views of Lang Co Bay.",
        "exampleVi": "Chuyến tàu từ Đà Nẵng ra Huế mang lại những khung cảnh thiên nhiên ngoạn mục nhìn ra vịnh Lăng Cô.",
        "synonyms": [
          "Picturesque",
          "Panoramic",
          "Breathtaking"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-22",
        "word": "Local Cuisine",
        "phonetic": "/ˈloʊ.kəl kwɪˈziːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Ẩm thực địa phương đặc sản vùng miền",
        "definitionEn": "The style or method of cooking characteristic of a particular locality.",
        "exampleEn": "Tasting authentic local cuisine is an indispensable part of visiting Hanoi's Old Quarter.",
        "exampleVi": "Thưởng thức ẩm thực địa phương đích thực là phần không thể thiếu khi ghé thăm Phố cổ Hà Nội.",
        "synonyms": [
          "Regional food",
          "Traditional culinary"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-23",
        "word": "Heritage",
        "phonetic": "/ˈher.ɪ.t̬ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Di sản văn hóa hoặc thiên nhiên thế giới",
        "definitionEn": "Property that is or may be inherited; an inheritance; valued objects and qualities such as historic buildings.",
        "exampleEn": "The imperial citadel was recognized by UNESCO as a World Cultural Heritage site.",
        "exampleVi": "Hoàng thành đã được UNESCO công nhận là di sản văn hóa thế giới.",
        "synonyms": [
          "Legacy",
          "Inheritance",
          "Tradition"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-24",
        "word": "Backpacker",
        "phonetic": "/ˈbækˌpæk.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khách du lịch bụi, đi phượt",
        "definitionEn": "A person who travels or hikes carrying their belongings in a rucksack.",
        "exampleEn": "The hostel provides cheap dormitory bunk beds favored by international backpackers.",
        "exampleVi": "Ký túc xá cung cấp giường tầng giá rẻ được giới du lịch bụi quốc tế ưa chuộng.",
        "synonyms": [
          "Trekker",
          "Hiker",
          "Budget traveler"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-25",
        "word": "Resort",
        "phonetic": "/rɪˈzɔːrt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khu nghỉ dưỡng phức hợp cao cấp",
        "definitionEn": "A place that is a popular destination for vacations or recreation.",
        "exampleEn": "The five-star beach resort features three infinity swimming pools and private beachfront villas.",
        "exampleVi": "Khu nghỉ dưỡng 5 sao ven biển sở hữu 3 hồ bơi vô cực và các biệt thự riêng trước biển.",
        "synonyms": [
          "Holiday retreat",
          "Spa hotel",
          "Vacation complex"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-26",
        "word": "Concierge",
        "phonetic": "/koʊn.siˈerʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhân viên hỗ trợ hướng dẫn thông tin khách sạn",
        "definitionEn": "A hotel employee whose job is to assist guests by booking tours, making reservations, etc.",
        "exampleEn": "The concierge kindly booked our opera tickets and arranged private chauffeur transport.",
        "exampleVi": "Nhân viên hướng dẫn khách sạn đã nhiệt tình đặt vé xem nhạc kịch và sắp xếp xe riêng đưa đón.",
        "synonyms": [
          "Guest assistant",
          "Hotel host"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-27",
        "word": "Charter Flight",
        "phonetic": "/ˈtʃɑːr.t̬ɚ ˌflaɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyến bay thuê bao nguyên chuyến",
        "definitionEn": "A flight by an aircraft chartered for a specific journey, not part of an airline's regular schedule.",
        "exampleEn": "Tour operators organized charter flights to transport football fans directly to the final match.",
        "exampleVi": "Các công ty lữ hành đã tổ chức những chuyến bay thuê bao đưa người hâm mộ bóng đá tới xem trận chung kết.",
        "synonyms": [
          "Private flight",
          "Special flight"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-28",
        "word": "Baggage Claim",
        "phonetic": "/ˈbæɡ.ɪdʒ ˌkleɪm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khu vực băng chuyền nhận lại hành lý",
        "definitionEn": "The area in an airport where arriving passengers collect luggage that has been carried in the hold.",
        "exampleEn": "Proceed straight to baggage claim carousels after passing health inspection.",
        "exampleVi": "Hãy đi thẳng tới khu vực băng chuyền hành lý sau khi hoàn tất kiểm tra y tế.",
        "synonyms": [
          "Luggage collection",
          "Baggage hall"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-29",
        "word": "Check-In",
        "phonetic": "/ˈtʃek.ɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thủ tục nhận phòng hoặc đăng ký chuyến bay",
        "definitionEn": "The act of reporting one's arrival at an airport or hotel.",
        "exampleEn": "Online check-in opens twenty-four hours before scheduled aircraft departure.",
        "exampleVi": "Thủ tục nhận chỗ trực tuyến mở trước 24 giờ so với giờ khởi hành dự kiến của máy bay.",
        "synonyms": [
          "Registration",
          "Arrival sign-in"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-30",
        "word": "Check-Out",
        "phonetic": "/ˈtʃek.aʊt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thủ tục trả phòng khách sạn thanh toán",
        "definitionEn": "The act of leaving and paying for one's stay at a hotel.",
        "exampleEn": "Hotel check-out time is strictly twelve noon unless a late departure is confirmed.",
        "exampleVi": "Giờ trả phòng khách sạn là 12 giờ trưa trừ khi đã được xác nhận trả phòng muộn.",
        "synonyms": [
          "Departure settlement",
          "Room handover"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-31",
        "word": "Destination",
        "phonetic": "/ˌdes.təˈneɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Điểm đến của chuyến đi",
        "definitionEn": "The place to which someone or something is going or being sent.",
        "exampleEn": "Da Nang is consistently voted the most attractive coastal destination in central Vietnam.",
        "exampleVi": "Đà Nẵng liên tục được bình chọn là điểm đến ven biển hấp dẫn nhất miền Trung Việt Nam.",
        "synonyms": [
          "Target location",
          "Terminus"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-32",
        "word": "Voyage",
        "phonetic": "/ˈvɔɪ.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyến hải trình dài ngày vượt đại dương",
        "definitionEn": "A long journey involving travel by sea or in space.",
        "exampleEn": "The historical oceanic voyage took four months across stormy Pacific waters.",
        "exampleVi": "Chuyến hải trình lịch sử mất 4 tháng vượt qua những vùng biển Thái Bình Dương giông bão.",
        "synonyms": [
          "Cruise",
          "Journey",
          "Sea trek"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-33",
        "word": "Landmark",
        "phonetic": "/ˈlænd.mɑːrk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Địa danh danh lam nổi tiếng nhận diện vùng đất",
        "definitionEn": "An object or feature of a landscape or town that is easily seen and recognized from a distance.",
        "exampleEn": "The Eiffel Tower is the most iconic architectural landmark in Paris.",
        "exampleVi": "Tháp Eiffel là địa danh kiến trúc mang tính biểu tượng nhất tại Paris.",
        "synonyms": [
          "Monuments",
          "Iconic site",
          "Beacon"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-34",
        "word": "Commute",
        "phonetic": "/kəˈmjuːt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Di chuyển đi làm hàng ngày giữa nhà và cơ quan",
        "definitionEn": "Travel some distance between one's home and place of work on a regular basis.",
        "exampleEn": "Thousands of professionals commute into central London by underground train every day.",
        "exampleVi": "Hàng ngàn nhân viên văn phòng đi lại vào trung tâm London bằng tàu điện ngầm mỗi ngày.",
        "synonyms": [
          "Travel to work",
          "Daily journey"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-35",
        "word": "Cruise",
        "phonetic": "/kruːz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Kỳ nghỉ trên du thuyền xa hoa",
        "definitionEn": "A voyage on a ship or boat taken for pleasure, typically calling in at several places.",
        "exampleEn": "They booked a luxury Mediterranean cruise for their twentieth wedding anniversary.",
        "exampleVi": "Họ đã đặt một chuyến du thuyền Địa Trung Hải xa hoa cho kỷ niệm 20 năm ngày cưới.",
        "synonyms": [
          "Luxury voyage",
          "Sea tour"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-36",
        "word": "Overbook",
        "phonetic": "/ˌoʊ.vɚˈbʊk/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Bán vé quá số lượng chỗ thực tế",
        "definitionEn": "Accept more reservations than there is room for.",
        "exampleEn": "Airlines routinely overbook flights anticipating that some ticket holders will cancel.",
        "exampleVi": "Các hãng hàng không thường xuyên bán quá số ghế vì dự trù một số hành khách sẽ hủy vé.",
        "synonyms": [
          "Sell surplus seats",
          "Excess booking"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-37",
        "word": "Terminal",
        "phonetic": "/ˈtɝː.mə.nəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nhà ga sân bay hoặc bến cảng",
        "definitionEn": "A building at an airport where passengers transfer between ground transportation and the aircraft.",
        "exampleEn": "International departures leave exclusively from Terminal 2 of the airport.",
        "exampleVi": "Các chuyến bay quốc tế khởi hành độc quyền từ Nhà ga số 2 của sân bay.",
        "synonyms": [
          "Airport building",
          "Concourse"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-38",
        "word": "Carry-on",
        "phonetic": "/ˈker.i.ɑːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hành lý xách tay mang lên khoang máy bay",
        "definitionEn": "A piece of baggage suitable for being taken aboard an aircraft by a passenger.",
        "exampleEn": "Make sure your carry-on bag fits into the overhead luggage bin dimensions.",
        "exampleVi": "Hãy đảm bảo túi hành lý xách tay của bạn vừa vặn với kích thước ngăn để đồ trên đầu.",
        "synonyms": [
          "Hand luggage",
          "Cabin baggage"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-39",
        "word": "Turbulence",
        "phonetic": "/ˈtɝː.bjə.ləns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự rung lắc bất ngờ do luồng không khí",
        "definitionEn": "Violent or unsteady movement of air or water, or of some other fluid.",
        "exampleEn": "Passengers were instructed to fasten their seatbelts due to sudden atmospheric turbulence.",
        "exampleVi": "Hành khách được yêu cầu thắt dây an toàn do luồng không khí bất ngờ gây rung lắc mạnh.",
        "synonyms": [
          "Rough air",
          "Buffeting",
          "Shaking"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-40",
        "word": "Runway",
        "phonetic": "/ˈrʌn.weɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đường băng cất hạ cánh của sân bay",
        "definitionEn": "A leveled strip of smooth ground along which aircraft take off and land.",
        "exampleEn": "The heavy cargo plane touched down smoothly on the damp airport runway.",
        "exampleVi": "Chiếc máy bay chở hàng hạng nặng đã hạ cánh êm ái trên đường băng ẩm ướt của sân bay.",
        "synonyms": [
          "Airstrip",
          "Landing strip"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-41",
        "word": "Delayed",
        "phonetic": "/dɪˈleɪd/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "A2",
        "meaningVi": "Bị hoãn chuyến, trễ giờ bay",
        "definitionEn": "Late; slow; postponed.",
        "exampleEn": "Our flight was unfortunately delayed by two hours due to dense coastal fog.",
        "exampleVi": "Chuyến bay của chúng tôi không may bị hoãn hai tiếng do sương mù ven biển dày đặc.",
        "synonyms": [
          "Postponed",
          "Late",
          "Held up"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-42",
        "word": "Cancelled",
        "phonetic": "/ˈkæn.səld/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "A2",
        "meaningVi": "Bị hủy chuyến hoàn toàn",
        "definitionEn": "Decided that an organized event will not happen.",
        "exampleEn": "All morning flights were cancelled following the tropical typhoon warning.",
        "exampleVi": "Toàn bộ các chuyến bay buổi sáng đã bị hủy bỏ sau lời cảnh báo bão nhiệt đới.",
        "synonyms": [
          "Called off",
          "Aborted"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-43",
        "word": "Visa",
        "phonetic": "/ˈviː.zə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thị thực nhập cảnh hợp pháp",
        "definitionEn": "An endorsement on a passport indicating that the holder is allowed to enter, leave, or stay for a specified period of time in a country.",
        "exampleEn": "Ensure you apply for an electronic tourist visa at least two weeks before your departure date.",
        "exampleVi": "Hãy nhớ nộp đơn xin thị thực du lịch điện tử ít nhất hai tuần trước ngày khởi hành của bạn.",
        "synonyms": [
          "Entry permit",
          "Travel authorization"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-44",
        "word": "Passport",
        "phonetic": "/ˈpæs.pɔːrt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Hộ chiếu xuất nhập cảnh quốc tế",
        "definitionEn": "An official document issued by a government, certifying the holder's identity and citizenship and entitling them to travel under its protection to and from foreign countries.",
        "exampleEn": "A valid passport with at least six months of validity is required for international travel.",
        "exampleVi": "Hộ chiếu hợp lệ còn hạn ít nhất sáu tháng là yêu cầu bắt buộc khi đi du lịch quốc tế.",
        "synonyms": [
          "Travel document",
          "Identification passport"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-45",
        "word": "Boarding",
        "phonetic": "/ˈbɔːr.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thời điểm lên máy bay chuẩn bị khởi hành",
        "definitionEn": "The action of getting on or into a ship, aircraft, train, or other vehicle.",
        "exampleEn": "Final boarding for Singapore Airlines flight SQ-180 will commence in five minutes.",
        "exampleVi": "Lượt lên máy bay cuối cùng của chuyến bay Singapore Airlines SQ-180 sẽ bắt đầu trong 5 phút nữa.",
        "synonyms": [
          "Embarkation",
          "Gate loading"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-46",
        "word": "Upgrade",
        "phonetic": "/ʌpˈɡreɪd/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Nâng hạng vé hoặc phòng cao cấp hơn",
        "definitionEn": "Raise something to a higher standard, in particular improve by adding or replacing components.",
        "exampleEn": "Loyal frequent flyers were pleasantly surprised with a complimentary upgrade to business class.",
        "exampleVi": "Những hành khách bay thường xuyên trung thành đã ngạc nhiên vui mừng khi được nâng hạng miễn phí lên vé thương gia.",
        "synonyms": [
          "Promote",
          "Elevate",
          "Improve"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-47",
        "word": "Downgrade",
        "phonetic": "/ˈdaʊn.ɡreɪd/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Hạ cấp vé hoặc phòng do thiếu chỗ",
        "definitionEn": "Reduce to a lower grade, rank, or level of importance.",
        "exampleEn": "Due to aircraft re-routing, a few passengers were reluctantly downgraded to economy seating.",
        "exampleVi": "Do việc thay đổi lịch trình máy bay, một số hành khách đã phải miễn cưỡng bị hạ hạng ghế xuống phổ thông.",
        "synonyms": [
          "Demote",
          "Reduce class"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-48",
        "word": "Duty-Free",
        "phonetic": "/ˌduː.t̬iˈfriː/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Cửa hàng miễn thuế sân bay",
        "definitionEn": "Goods exempt from payment of certain local or national taxes and duties.",
        "exampleEn": "Travelers frequently purchase perfumes and chocolates at airport duty-free shops.",
        "exampleVi": "Du khách thường mua nước hoa và sô-cô-la tại các cửa hàng miễn thuế ở sân bay.",
        "synonyms": [
          "Tax-free",
          "Excise-exempt"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-49",
        "word": "Exchange Rate",
        "phonetic": "/ɪksˈtʃeɪndʒ ˌreɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tỷ giá hối đoái đổi ngoại tệ",
        "definitionEn": "The value of one currency for the purpose of conversion to another.",
        "exampleEn": "Compare foreign exchange rates at local city banks before converting large sums of cash.",
        "exampleVi": "Hãy so sánh tỷ giá hối đoái tại các ngân hàng trong thành phố trước khi đổi số tiền mặt lớn.",
        "synonyms": [
          "Conversion rate",
          "Forex rate"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-50",
        "word": "Currency",
        "phonetic": "/ˈkɝː.ən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đơn vị tiền tệ của một quốc gia",
        "definitionEn": "A system of money in common use, especially for people in a nation.",
        "exampleEn": "The official national currency of Vietnam is the Dong, symbolized as VND.",
        "exampleVi": "Đơn vị tiền tệ chính thức của Việt Nam là Đồng, ký hiệu là VND.",
        "synonyms": [
          "Money",
          "Legal tender",
          "Coinage"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-51",
        "word": "Guidebook",
        "phonetic": "/ˈɡaɪd.bʊk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Sách cẩm nang du lịch chỉ dẫn",
        "definitionEn": "A book of information about a place designed for the use of visitors or tourists.",
        "exampleEn": "The Lonely Planet guidebook contains excellent recommendations for off-the-beaten-path eateries.",
        "exampleVi": "Cuốn sách hướng dẫn Lonely Planet chứa đựng nhiều gợi ý tuyệt vời cho các quán ăn độc lạ ngoài các cung đường quen thuộc.",
        "synonyms": [
          "Travel manual",
          "Tour guide"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-52",
        "word": "Local",
        "phonetic": "/ˈloʊ.kəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Người dân bản địa sinh sống tại địa phương",
        "definitionEn": "An inhabitant of a particular area or neighborhood.",
        "exampleEn": "Ask a friendly local for directions if you find yourself wandering through confusing alleys.",
        "exampleVi": "Hãy hỏi một người dân địa phương thân thiện chỉ đường nếu bạn thấy mình đang lạc giữa những con hẻm rắc rối.",
        "synonyms": [
          "Native",
          "Resident",
          "Inhabitant"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-53",
        "word": "Bilingual",
        "phonetic": "/baɪˈlɪŋ.ɡwəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Sử dụng song ngữ thành thạo",
        "definitionEn": "Speaking two languages fluently.",
        "exampleEn": "The historic museum provides bilingual audio headsets in both Vietnamese and English.",
        "exampleVi": "Bảo tàng lịch sử cung cấp tai nghe thuyết minh song ngữ bằng cả tiếng Việt và tiếng Anh.",
        "synonyms": [
          "Dual-language",
          "Two-tongued"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-54",
        "word": "Souvenir Shop",
        "phonetic": "/ˌsuː.vəˈnɪr ˌʃɑːp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Cửa hàng bán đồ lưu niệm",
        "definitionEn": "A shop selling souvenirs and small memorabilia to travelers.",
        "exampleEn": "The souvenir shop on the corner sells colorful handmade silk lanterns.",
        "exampleVi": "Cửa hàng lưu niệm ở góc phố bày bán những chiếc đèn lồng lụa thủ công rực rỡ sắc màu.",
        "synonyms": [
          "Gift shop",
          "Curio shop"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-55",
        "word": "High Season",
        "phonetic": "/ˈhaɪ ˌsiː.zən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Mùa du lịch cao điểm đông đúc",
        "definitionEn": "The time of year when travel and tourism is at its peak and prices are highest.",
        "exampleEn": "Hotel room rates surge substantially during the sunny summer high season.",
        "exampleVi": "Giá phòng khách sạn tăng vọt đáng kể trong suốt mùa hè cao điểm ngập tràn ánh nắng.",
        "synonyms": [
          "Peak season",
          "Busy period"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-56",
        "word": "Off-Peak",
        "phonetic": "/ˌɑːfˈpiːk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Mùa thấp điểm vắng khách giá rẻ",
        "definitionEn": "At a time other than that when business or traffic is at its highest.",
        "exampleEn": "Traveling during off-peak autumn months saves money and avoids overwhelming tourist crowds.",
        "exampleVi": "Đi du lịch vào những tháng mùa thu thấp điểm vừa tiết kiệm tiền vừa tránh được đám đông du khách quá tải.",
        "synonyms": [
          "Low season",
          "Quiet period"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-57",
        "word": "Hospitality Industry",
        "phonetic": "/ˌhɑː.spɪˈtæl.ə.t̬i ˌɪn.dəs.tri/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Ngành công nghiệp khách sạn và dịch vụ lưu trú",
        "definitionEn": "A broad category of fields within the service industry that includes lodging, food and drink service, event planning, and theme parks.",
        "exampleEn": "The booming hospitality industry creates millions of flexible jobs in coastal resort towns.",
        "exampleVi": "Ngành dịch vụ khách sạn bùng nổ tạo ra hàng triệu việc làm linh hoạt tại các thành phố nghỉ dưỡng ven biển.",
        "synonyms": [
          "Tourism sector",
          "Hotel industry"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-58",
        "word": "Room Service",
        "phonetic": "/ˈruːm ˌsɝː.vɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Dịch vụ phục vụ bữa ăn tận phòng khách sạn",
        "definitionEn": "A service provided in a hotel allowing guests to order food and drink to their rooms.",
        "exampleEn": "After a grueling 14-hour flight, we simply ordered late-night room service.",
        "exampleVi": "Sau chuyến bay dài 14 tiếng kiệt sức, chúng tôi chỉ đơn giản gọi dịch vụ ăn uống tận phòng đêm muộn.",
        "synonyms": [
          "In-room dining",
          "Hotel catering"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-59",
        "word": "Complimentary",
        "phonetic": "/ˌkɑːm.pləˈmen.t̬ɚ.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Miễn phí đính kèm dịch vụ",
        "definitionEn": "Given or supplied free of charge.",
        "exampleEn": "The hotel provides a complimentary hot breakfast buffet and fresh bottled water daily.",
        "exampleVi": "Khách sạn cung cấp tiệc buffet sáng nóng sốt và nước đóng chai tươi mới miễn phí mỗi ngày.",
        "synonyms": [
          "Free",
          "Gratis",
          "Courtesy"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-60",
        "word": "Suite",
        "phonetic": "/swiːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Phòng khách sạn cao cấp hạng sang",
        "definitionEn": "A set of rooms designated for one person's or family's use or for a particular purpose.",
        "exampleEn": "The newlyweds celebrated their honeymoon in the presidential sea-view suite.",
        "exampleVi": "Cặp đôi mới cưới đã kỷ niệm tuần trăng mật trong căn phòng tổng thống hạng sang nhìn ra biển.",
        "synonyms": [
          "Luxury apartment",
          "Deluxe quarters"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-61",
        "word": "Hostel",
        "phonetic": "/ˈhɑː.stəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Nhà nghỉ tập thể giá rẻ cho giới trẻ",
        "definitionEn": "An establishment which provides inexpensive food and lodging for a specific group of people, such as students or workers.",
        "exampleEn": "The youth hostel has a communal kitchen where travelers can cook together.",
        "exampleVi": "Nhà nghỉ thanh niên có một nhà bếp chung nơi du khách có thể cùng nhau nấu ăn.",
        "synonyms": [
          "Dormitory",
          "Bunkhouse"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-62",
        "word": "Homestay",
        "phonetic": "/ˈhoʊm.steɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Dịch vụ lưu trú tại nhà người dân địa phương",
        "definitionEn": "A holiday or other period spent staying in the home of a local family.",
        "exampleEn": "Booking a rural homestay in Sapa offers an intimate glimpse into ethnic traditions.",
        "exampleVi": "Đặt phòng homestay tại làng quê Sa Pa mang lại cái nhìn sâu sắc và gần gũi về truyền thống dân tộc.",
        "synonyms": [
          "Family stay",
          "Village lodging"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-63",
        "word": "Infinity Pool",
        "phonetic": "/ɪnˈfɪn.ə.t̬i ˌpuːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hồ bơi vô cực nhìn ra chân trời",
        "definitionEn": "A swimming pool whose water flows over one or more edges, producing a visual effect of water with no boundary.",
        "exampleEn": "The rooftop infinity pool looks out across the gleaming city skyline.",
        "exampleVi": "Hồ bơi vô cực trên tầng thượng nhìn ra toàn cảnh đường chân trời rực rỡ của thành phố.",
        "synonyms": [
          "Edge pool",
          "Horizon pool"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-64",
        "word": "Panoramic",
        "phonetic": "/ˌpæn.əˈræm.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Có tầm nhìn bao quát toàn cảnh rộng lớn",
        "definitionEn": "With a view of an extensive area in all directions.",
        "exampleEn": "The observation deck on the 81st floor offers panoramic views across the winding river.",
        "exampleVi": "Đài quan sát tại tầng 81 mang đến tầm nhìn toàn cảnh bao quát dòng sông uốn lượn.",
        "synonyms": [
          "Sweeping",
          "All-encompassing",
          "Expansive"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-65",
        "word": "Scenic Route",
        "phonetic": "/ˌsiː.nɪk ˈruːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tuyến đường ngắm cảnh thiên nhiên tươi đẹp",
        "definitionEn": "A road or path that goes through beautiful landscape, even if it is not the fastest way.",
        "exampleEn": "We chose the slower scenic route along the coastal cliffs rather than the highway.",
        "exampleVi": "Chúng tôi chọn tuyến đường ven vách đá tuyệt đẹp thay vì đi đường cao tốc.",
        "synonyms": [
          "Tourist road",
          "Landscape path"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-66",
        "word": "Metropolis",
        "phonetic": "/məˈtrɑː.pəl.ɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đại đô thị sầm uất triệu dân",
        "definitionEn": "A very large and densely populated city, particularly the capital or a major city of a country or region.",
        "exampleEn": "Tokyo is a bustling technological metropolis that never truly sleeps.",
        "exampleVi": "Tokyo là một đại đô thị công nghệ sầm uất chưa bao giờ thực sự ngủ.",
        "synonyms": [
          "Mega-city",
          "Cosmopolitan center"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-67",
        "word": "Cosmopolitan",
        "phonetic": "/ˌkɑːz.məˈpɑː.lɪ.tən/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Đa văn hóa mang tầm vóc quốc tế",
        "definitionEn": "Familiar with and at ease in many different countries and cultures; including people from many different countries.",
        "exampleEn": "London is a truly cosmopolitan city where hundreds of languages are spoken daily.",
        "exampleVi": "London là một thành phố đa văn hóa thực sự nơi hàng trăm ngôn ngữ được giao tiếp mỗi ngày.",
        "synonyms": [
          "Global",
          "International",
          "Multicultural"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-68",
        "word": "Exotic",
        "phonetic": "/ɪɡˈzɑː.t̬ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Kỳ lạ, mới lạ từ xứ sở xa xôi",
        "definitionEn": "Originating in or characteristic of a distant foreign country.",
        "exampleEn": "The tropical botanical garden houses thousands of exotic orchids and colorful birds.",
        "exampleVi": "Vườn thực vật nhiệt đới là nơi sinh sống của hàng ngàn loài lan kỳ lạ và chim chóc rực rỡ sắc màu.",
        "synonyms": [
          "Unusual",
          "Foreign",
          "Alien"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-69",
        "word": "Baggage Drop",
        "phonetic": "/ˈbæɡ.ɪdʒ ˌdrɑːp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Quầy gửi hành lý ký gửi nhanh",
        "definitionEn": "A designated desk at an airport where passengers who have checked in online can hand in their bags.",
        "exampleEn": "After printing tags at the kiosk, head straight to the automated baggage drop counter.",
        "exampleVi": "Sau khi in thẻ tại ki-ốt, hãy đi thẳng tới quầy gửi hành lý tự động.",
        "synonyms": [
          "Luggage drop",
          "Bag drop"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-70",
        "word": "Overweight Baggage",
        "phonetic": "/ˌoʊ.vɚˈweɪt ˌbæɡ.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hành lý quá tải trọng quy định",
        "definitionEn": "Luggage exceeding the allowable airline weight limit, subject to penalty fees.",
        "exampleEn": "Passengers with overweight baggage must pay a steep extra fee per kilogram.",
        "exampleVi": "Hành khách mang hành lý quá cân nặng quy định phải trả khoản phí phạt đắt đỏ theo từng kg.",
        "synonyms": [
          "Excess baggage",
          "Heavy luggage"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-71",
        "word": "First Class",
        "phonetic": "/ˌfɝːst ˈklæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khoang ghế hạng nhất cao cấp nhất",
        "definitionEn": "The most luxurious and expensive accommodation on an aircraft or train.",
        "exampleEn": "First class airline passengers enjoy private suites with lie-flat beds and gourmet dining.",
        "exampleVi": "Hành khách khoang hạng nhất tận hưởng phòng riêng biệt lập với giường nằm phẳng và ẩm thực cao cấp.",
        "synonyms": [
          "Luxury cabin",
          "Top tier"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-72",
        "word": "Business Class",
        "phonetic": "/ˈbɪz.nɪs ˌklæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khoang ghế thương gia dành cho doanh nhân",
        "definitionEn": "A tier of travel on commercial aircraft offering amenities superior to economy class.",
        "exampleEn": "Traveling business class allows corporate travelers to sleep comfortably during long overnight flights.",
        "exampleVi": "Bay khoang thương gia cho phép các doanh nhân ngủ thoải mái trong các chuyến bay dài qua đêm.",
        "synonyms": [
          "Executive class",
          "Club class"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-73",
        "word": "Economy Class",
        "phonetic": "/ɪˈkɑː.nə.mi ˌklæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khoang ghế phổ thông tiêu chuẩn",
        "definitionEn": "The cheapest and least luxurious seating class in airline travel.",
        "exampleEn": "Most leisure holiday travelers book economy class tickets to save money.",
        "exampleVi": "Đa số khách du lịch nghỉ dưỡng đều đặt vé khoang phổ thông để tiết kiệm chi phí.",
        "synonyms": [
          "Coach class",
          "Standard class"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-74",
        "word": "Cockpit",
        "phonetic": "/ˈkɑːk.pɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khoang lái của phi công trên máy bay",
        "definitionEn": "A compartment for the pilot, and sometimes also the crew, in an aircraft or spacecraft.",
        "exampleEn": "Modern jet cockpits are equipped with digital touchscreen flight navigation systems.",
        "exampleVi": "Khoang lái máy bay phản lực hiện đại được trang bị hệ thống dẫn đường bay màn hình cảm ứng kỹ thuật số.",
        "synonyms": [
          "Flight deck",
          "Pilot cabin"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-75",
        "word": "Cabin Crew",
        "phonetic": "/ˈkæb.ɪn ˌkruː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đội ngũ tiếp viên hàng không trên chuyến bay",
        "definitionEn": "The members of an aircraft crew who attend to passengers' comfort and safety.",
        "exampleEn": "The cabin crew performed the routine safety demonstration before take-off.",
        "exampleVi": "Đội ngũ tiếp viên đã thực hiện phần hướng dẫn an toàn tiêu chuẩn trước khi máy bay cất cánh.",
        "synonyms": [
          "Flight attendants",
          "Air stewards"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-76",
        "word": "Flight Attendant",
        "phonetic": "/ˈflaɪt əˌten.dənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Tiếp viên hàng không",
        "definitionEn": "A person whose job is to serve and take care of passengers on an aircraft.",
        "exampleEn": "The flight attendant handed out warm blankets and noise-cancelling headphones.",
        "exampleVi": "Tiếp viên hàng không đã phát chăn ấm và tai nghe chống ồn cho hành khách.",
        "synonyms": [
          "Air host",
          "Steward"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-77",
        "word": "Co-Pilot",
        "phonetic": "/ˈkoʊˌpaɪ.lət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cơ phó điều khiển máy bay",
        "definitionEn": "A pilot who is second in command of an aircraft.",
        "exampleEn": "The co-pilot monitored air traffic control communications during the stormy approach.",
        "exampleVi": "Cơ phó đã giám sát các liên lạc kiểm soát không lưu trong suốt quá trình tiếp cận hạ cánh giông bão.",
        "synonyms": [
          "First officer",
          "Second pilot"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-78",
        "word": "Ground Staff",
        "phonetic": "/ˈɡraʊnd ˌstæf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nhân viên mặt đất tại sân bay",
        "definitionEn": "The people who work on the ground at an airport, such as check-in workers and baggage handlers.",
        "exampleEn": "Helpful ground staff escorted elderly passengers to their gates in golf carts.",
        "exampleVi": "Nhân viên mặt đất nhiệt tình đã đưa các hành khách cao tuổi ra tận cửa lên máy bay bằng xe điện.",
        "synonyms": [
          "Airport crew",
          "Terminal staff"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-79",
        "word": "Air Traffic Control",
        "phonetic": "/ˌer ˈtræf.ɪk kənˌtroʊl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bộ phận kiểm soát không lưu điều phối bay",
        "definitionEn": "The service provided by ground-based controllers who direct aircraft on the ground and through a given section of controlled airspace.",
        "exampleEn": "Air traffic control cleared the wide-body aircraft for immediate takeoff.",
        "exampleVi": "Kiểm soát không lưu đã cấp phép cho máy bay thân rộng cất cánh ngay lập tức.",
        "synonyms": [
          "ATC",
          "Flight controllers"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-80",
        "word": "Taxicab",
        "phonetic": "/ˈtæk.si.kæb/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Xe taxi truyền thống",
        "definitionEn": "A car licensed to transport passengers in return for payment of a fare.",
        "exampleEn": "Hail a registered taxicab outside the main arrival hall rather than accepting private offers.",
        "exampleVi": "Hãy vẫy một chiếc xe taxi đăng kiểm bên ngoài sảnh đến chính thay vì đi xe dù tư nhân.",
        "synonyms": [
          "Cab",
          "Taxi"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-81",
        "word": "Shuttle Bus",
        "phonetic": "/ˈʃʌt̬.əl ˌbʌs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Xe buýt đưa đón chặng ngắn miễn phí",
        "definitionEn": "A bus that travels regularly between two places, such as an airport and a city center or hotel.",
        "exampleEn": "The resort operates a complimentary shuttle bus into downtown every thirty minutes.",
        "exampleVi": "Khu nghỉ dưỡng vận hành xe buýt đưa đón miễn phí vào trung tâm thành phố cứ 30 phút một chuyến.",
        "synonyms": [
          "Transfer bus",
          "Airport shuttle"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-82",
        "word": "Subway",
        "phonetic": "/ˈsʌb.weɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Hệ thống tàu điện ngầm đô thị",
        "definitionEn": "An underground electric railroad, also called metro or underground.",
        "exampleEn": "Riding the modern subway is the fastest way to avoid heavy downtown traffic jams.",
        "exampleVi": "Đi tàu điện ngầm hiện đại là cách nhanh nhất để tránh cảnh tắc đường nặng nề ở trung tâm.",
        "synonyms": [
          "Metro",
          "Underground",
          "Tube"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-83",
        "word": "Fare",
        "phonetic": "/fer/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Giá vé cước phí di chuyển phương tiện",
        "definitionEn": "The money a passenger on public transportation has to pay.",
        "exampleEn": "Bus fares can be tapped conveniently using contactless smart travel cards.",
        "exampleVi": "Tiền vé xe buýt có thể chạm thanh toán tiện lợi bằng thẻ du lịch thông minh không tiếp xúc.",
        "synonyms": [
          "Ticket price",
          "Transit fee",
          "Cost of ride"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-84",
        "word": "Toll",
        "phonetic": "/toʊl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Phí qua trạm cầu đường cao tốc",
        "definitionEn": "A charge payable for permission to use a particular road or bridge.",
        "exampleEn": "Vehicles equipped with automated transponders pass through the toll gate without stopping.",
        "exampleVi": "Xe gắn thiết bị định danh tự động có thể đi qua trạm thu phí mà không cần dừng lại.",
        "synonyms": [
          "Road charge",
          "Highway fee"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-85",
        "word": "Pass",
        "phonetic": "/pæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thẻ vé trọn gói dùng trong ngày/tuần",
        "definitionEn": "A ticket or card permitting the holder to enter, travel, or use facilities for a period.",
        "exampleEn": "Purchasing a three-day rail pass saved us considerable money on regional train rides.",
        "exampleVi": "Mua thẻ đi tàu 3 ngày đã giúp chúng tôi tiết kiệm khoản tiền đáng kể cho các chuyến tàu khu vực.",
        "synonyms": [
          "Travel ticket",
          "Transit pass"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-86",
        "word": "Turnstile",
        "phonetic": "/ˈtɝːn.staɪl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cửa quay soát vé tại ga tàu",
        "definitionEn": "A mechanical gate consisting of revolving horizontal arms that allow only one person at a time to pass through.",
        "exampleEn": "Tap your QR code at the automated turnstile to enter the metro platform.",
        "exampleVi": "Chạm mã QR của bạn tại cửa quay soát vé tự động để vào sân ga tàu điện ngầm.",
        "synonyms": [
          "Baffle gate",
          "Ticket barrier"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-87",
        "word": "Platform",
        "phonetic": "/ˈplæt.fɔːrm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Sân ga đón tàu hỏa hoặc tàu điện",
        "definitionEn": "A raised level surface on which people or things can stand, specifically beside railway tracks.",
        "exampleEn": "Passengers waiting for the express train should wait behind the yellow platform line.",
        "exampleVi": "Hành khách chờ tàu tốc hành nên đứng chờ phía sau vạch vàng an toàn của sân ga.",
        "synonyms": [
          "Train dock",
          "Track deck"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-88",
        "word": "Compartment",
        "phonetic": "/kəmˈpɑːrt.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khoang riêng trên tàu hỏa",
        "definitionEn": "A separate section or sectioned-off space in a railway carriage.",
        "exampleEn": "We booked a four-berth sleeper compartment for our overnight train ride to Da Nang.",
        "exampleVi": "Chúng tôi đã đặt một khoang nằm 4 giường cho chuyến tàu qua đêm đến Đà Nẵng.",
        "synonyms": [
          "Cabin",
          "Berth room"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-89",
        "word": "Scenic Vista",
        "phonetic": "/ˌsiː.nɪk ˈvɪs.tə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quang cảnh thiên nhiên mở rộng kỳ vĩ",
        "definitionEn": "A pleasing view, especially one seen through a long, narrow opening like a pass.",
        "exampleEn": "The mountain pass viewpoint offers an unforgettable scenic vista of cloud-covered valleys.",
        "exampleVi": "Điểm ngắm trên đèo mang lại một quang cảnh thiên nhiên kỳ vĩ khó quên nhìn xuống các thung lũng mây phủ.",
        "synonyms": [
          "Panoramic overlook",
          "Grand view"
        ],
        "topicId": "travel"
      },
      {
        "id": "travel-90",
        "word": "Hospitality Management",
        "phonetic": "/ˌhɑː.spɪˈtæl.ə.t̬i ˈmæn.ədʒ.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Ngành quản trị du lịch và khách sạn",
        "definitionEn": "The academic and professional study of managing businesses within the tourism and leisure sector.",
        "exampleEn": "She holds a master's degree in international hospitality management from Switzerland.",
        "exampleVi": "Cô ấy sở hữu tấm bằng thạc sĩ về quản trị du lịch khách sạn quốc tế tại Thụy Sĩ.",
        "synonyms": [
          "Hotel administration",
          "Tourism management"
        ],
        "topicId": "travel"
      }
    ]
  },
  {
    "id": "finance",
    "title": "Tài Chính & Ngân Hàng",
    "slug": "finance",
    "icon": "Coins",
    "color": "text-amber-500",
    "bgColor": "bg-amber-50 dark:bg-amber-950/40",
    "borderColor": "border-amber-200 dark:border-amber-800",
    "description": "Thị trường chứng khoán, chính sách tiền tệ, lãi suất, trái phiếu và quản trị rủi ro danh mục",
    "wordCount": 90,
    "words": [
      {
        "id": "fin-1",
        "word": "Dividend",
        "phonetic": "/ˈdɪv.ə.dend/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cổ tức tiền mặt hoặc cổ phiếu trả cho cổ đông",
        "definitionEn": "A sum of money paid regularly by a company to its shareholders out of its profits.",
        "exampleEn": "Blue-chip corporations provide reliable quarterly dividend payments to long-term investors.",
        "exampleVi": "Các tập đoàn vốn hóa lớn chi trả cổ tức hàng quý đáng tin cậy cho các nhà đầu tư dài hạn.",
        "synonyms": [
          "Payout",
          "Shareholder yield",
          "Return"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-2",
        "word": "Inflation",
        "phonetic": "/ɪnˈfleɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lạm phát, sự trượt giá của đồng tiền",
        "definitionEn": "A general increase in prices and fall in the purchasing value of money.",
        "exampleEn": "Central banks raise interest rates to tame runaway consumer price inflation.",
        "exampleVi": "Các ngân hàng trung ương tăng lãi suất nhằm kìm hãm mức lạm phát giá tiêu dùng tăng phi mã.",
        "synonyms": [
          "Price hike",
          "Devaluation",
          "Currency erosion"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-3",
        "word": "Deflation",
        "phonetic": "/dɪˈfleɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giảm phát, giá cả sụt giảm kìm hãm chi tiêu",
        "definitionEn": "Reduction of the general level of prices in an economy.",
        "exampleEn": "Prolonged economic deflation discourages consumer spending as buyers anticipate further price drops.",
        "exampleVi": "Giảm phát kinh tế kéo dài làm giảm chi tiêu của người tiêu dùng do người mua dự đoán giá sẽ còn giảm tiếp.",
        "synonyms": [
          "Price slump",
          "Economic contraction"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-4",
        "word": "Liquidity",
        "phonetic": "/lɪˈkwɪd.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tính thanh khoản, khả năng chuyển thành tiền mặt",
        "definitionEn": "The availability of liquid assets to a market or company; the ease with which an asset can be converted into cash.",
        "exampleEn": "High market liquidity allows traders to buy and sell equities without causing wild price swings.",
        "exampleVi": "Tính thanh khoản thị trường cao cho phép các nhà giao dịch mua bán cổ phiếu mà không gây biến động giá dữ dội.",
        "synonyms": [
          "Cash availability",
          "Convertibility",
          "Fluidity"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-5",
        "word": "Portfolio",
        "phonetic": "/ˌpɔːrtˈfoʊ.li.oʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Danh mục đầu tư tài chính",
        "definitionEn": "A range of investments held by a person or organization.",
        "exampleEn": "A prudent investor maintains a balanced portfolio combining stocks, government bonds, and precious metals.",
        "exampleVi": "Một nhà đầu tư thận trọng luôn duy trì một danh mục cân bằng kết hợp cổ phiếu, trái phiếu chính phủ và kim loại quý.",
        "synonyms": [
          "Investment basket",
          "Asset collection"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-6",
        "word": "Diversification",
        "phonetic": "/daɪˌvɝː.sə.fəˈkeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đa dạng hóa danh mục để phân tán rủi ro",
        "definitionEn": "The action of diversifying something or the practice of varying one's range of products or field of operation.",
        "exampleEn": "Asset diversification is the most reliable defense against sudden industry downturns.",
        "exampleVi": "Đa dạng hóa tài sản là lá chắn tin cậy nhất chống lại những đợt suy thoái bất ngờ của một ngành nghề.",
        "synonyms": [
          "Asset spreading",
          "Risk dispersion"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-7",
        "word": "Equity",
        "phonetic": "/ˈek.wə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vốn chủ sở hữu, cổ phần trong doanh nghiệp",
        "definitionEn": "The value of the shares issued by a company; the value of property after deducting mortgage or other liabilities.",
        "exampleEn": "Founders surrendered twenty percent of their company equity in exchange for five million dollars in venture capital.",
        "exampleVi": "Các nhà sáng lập đã nhượng lại 20% vốn chủ sở hữu công ty để đổi lấy 5 triệu USD vốn đầu tư mạo hiểm.",
        "synonyms": [
          "Ownership shares",
          "Capital stock"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-8",
        "word": "Bonds",
        "phonetic": "/bɑːndz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Trái phiếu nợ chính phủ hoặc doanh nghiệp",
        "definitionEn": "A debt security under which the issuer owes the holders a debt and is obliged to pay interest.",
        "exampleEn": "Treasury bonds are traditionally considered safe-haven investments during turbulent market times.",
        "exampleVi": "Trái phiếu kho bạc theo truyền thống được xem là kênh trú ẩn đầu tư an toàn trong thời kỳ thị trường biến động.",
        "synonyms": [
          "Debentures",
          "Debt securities"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-9",
        "word": "Commodity",
        "phonetic": "/kəˈmɑː.də.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hàng hóa thô thương phẩm (dầu, vàng, lúa mì)",
        "definitionEn": "A raw material or primary agricultural product that can be bought and sold, such as copper or coffee.",
        "exampleEn": "Crude oil and gold remain the most heavily traded commodity assets on international mercantile exchanges.",
        "exampleVi": "Dầu thô và vàng vẫn là những mặt hàng thô được giao dịch sôi động nhất trên các sàn giao dịch thương phẩm quốc tế.",
        "synonyms": [
          "Raw goods",
          "Primary merchandise"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-10",
        "word": "Fiscal Policy",
        "phonetic": "/ˌfɪs.kəl ˈpɑː.lə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chính sách tài khóa của chính phủ về thuế và chi tiêu",
        "definitionEn": "The means by which a government adjusts its spending levels and tax rates to monitor and influence a nation's economy.",
        "exampleEn": "Expansionary fiscal policy involves increasing public infrastructure expenditure to stimulate employment.",
        "exampleVi": "Chính sách tài khóa mở rộng bao gồm việc gia tăng chi tiêu cho hạ tầng công cộng để kích thích việc làm.",
        "synonyms": [
          "Government spending",
          "Budget policy"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-11",
        "word": "Monetary Policy",
        "phonetic": "/ˈmɑː.nə.ter.i ˌpɑː.lə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chính sách tiền tệ kiểm soát cung tiền và lãi suất",
        "definitionEn": "The policy laid down by the central bank which involves management of money supply and interest rate.",
        "exampleEn": "The Federal Reserve adjusted monetary policy to cool down an overheating national economy.",
        "exampleVi": "Cục Dự trữ Liên bang đã điều chỉnh chính sách tiền tệ để hạ nhiệt một nền kinh tế đang phát triển quá nóng.",
        "synonyms": [
          "Central bank policy",
          "Credit regulation"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-12",
        "word": "Bull Market",
        "phonetic": "/ˈbʊl ˌmɑːr.kɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thị trường bò tót tăng trưởng bùng nổ",
        "definitionEn": "A market in which share prices are rising, encouraging buying.",
        "exampleEn": "Optimistic earnings reports sustained a historic bull market for technology equities.",
        "exampleVi": "Các báo cáo lợi nhuận lạc quan đã duy trì một thị trường bò tót tăng điểm lịch sử cho nhóm cổ phiếu công nghệ.",
        "synonyms": [
          "Rallying market",
          "Boom market"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-13",
        "word": "Bear Market",
        "phonetic": "/ˈber ˌmɑːr.kɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thị trường gấu suy giảm ảm đạm",
        "definitionEn": "A market in which prices are falling, encouraging selling.",
        "exampleEn": "A prolonged bear market tests the psychological resilience of individual retail traders.",
        "exampleVi": "Một thị trường giá xuống kéo dài thử thách khả năng chịu đựng tâm lý của các nhà đầu tư cá nhân nhỏ lẻ.",
        "synonyms": [
          "Slumping market",
          "Downturn"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-14",
        "word": "Volatility",
        "phonetic": "/ˌvɑː.ləˈtɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mức độ biến động trồi sụt của giá cả",
        "definitionEn": "Liability to change rapidly and unpredictably, especially for the worse.",
        "exampleEn": "Cryptocurrency markets are notorious for extreme intraday volatility.",
        "exampleVi": "Thị trường tiền mã hóa vốn nổi tiếng vì mức độ biến động giá trong ngày vô cùng dữ dội.",
        "synonyms": [
          "Fluctuation",
          "Instability",
          "Turbulence"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-15",
        "word": "Capital Gain",
        "phonetic": "/ˌkæp.ə.t̬əl ˈɡeɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lợi nhuận từ chênh lệch giá vốn khi bán tài sản",
        "definitionEn": "A profit from the sale of property or an investment.",
        "exampleEn": "Investors holding assets for over one year benefit from lower long-term capital gain tax brackets.",
        "exampleVi": "Nhà đầu tư nắm giữ tài sản trên một năm sẽ được hưởng các mức thuế thu nhập chênh lệch vốn dài hạn thấp hơn.",
        "synonyms": [
          "Investment profit",
          "Capital return"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-16",
        "word": "Depreciation",
        "phonetic": "/dɪˌpriː.ʃiˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khấu hao tài sản hoặc sụt giảm giá trị tiền tệ",
        "definitionEn": "A reduction in the value of an asset over time, or the decrease in the value of a currency.",
        "exampleEn": "Automobiles experience steep financial depreciation within the very first year of ownership.",
        "exampleVi": "Xe ô tô bị khấu hao giá trị tài chính rất nhanh chóng chỉ ngay trong năm đầu tiên sở hữu.",
        "synonyms": [
          "Devaluation",
          "Wear and tear"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-17",
        "word": "Appreciation",
        "phonetic": "/əˌpriː.ʃiˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự gia tăng giá trị tài sản qua thời gian",
        "definitionEn": "An increase in the value of an asset over time.",
        "exampleEn": "Prime beachfront land in Da Nang has witnessed phenomenal financial appreciation over the past decade.",
        "exampleVi": "Đất ven biển vị trí đắc địa tại Đà Nẵng đã chứng kiến mức gia tăng giá trị ngoạn mục trong thập kỷ qua.",
        "synonyms": [
          "Value increase",
          "Growth in worth"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-18",
        "word": "Leverage",
        "phonetic": "/ˈlev.ɚ.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đòn bẩy tài chính dùng vốn vay để khuếch đại lợi nhuận",
        "definitionEn": "The use of borrowed capital for an investment, expecting the profits made to be greater than the interest payable.",
        "exampleEn": "Excessive financial leverage can magnify losses disastrously when market trades go awry.",
        "exampleVi": "Sử dụng đòn bẩy tài chính quá mức có thể khuếch đại các khoản thua lỗ thảm khốc khi các giao dịch diễn biến xấu.",
        "synonyms": [
          "Borrowed funds",
          "Gearing"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-19",
        "word": "Yield Curve",
        "phonetic": "/ˈjiːld ˌkɝːv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Đường cong lợi suất trái phiếu theo kỳ hạn",
        "definitionEn": "A line that plots yields, often of bonds with equal credit quality but differing maturity dates.",
        "exampleEn": "An inverted yield curve has historically been a reliable harbinger of impending economic recessions.",
        "exampleVi": "Đường cong lợi suất đảo ngược trong lịch sử luôn là điềm báo đáng tin cậy cho các cuộc suy thoái kinh tế cận kề.",
        "synonyms": [
          "Interest rate curve",
          "Maturity chart"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-20",
        "word": "Securitization",
        "phonetic": "/səˌkjʊr.ə.t̬əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Chứng khoán hóa các khoản nợ để bán ra thị trường",
        "definitionEn": "The process of taking an illiquid asset, or group of assets, and through financial engineering, transforming them into a security.",
        "exampleEn": "Mortgage securitization transformed thousands of individual home loans into tradable bond instruments.",
        "exampleVi": "Chứng khoán hóa thế chấp đã biến hàng ngàn khoản vay mua nhà cá nhân thành các công cụ trái phiếu có thể giao dịch.",
        "synonyms": [
          "Debt packaging",
          "Asset-backed security"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-21",
        "word": "Derivative",
        "phonetic": "/dɪˈrɪv.ə.t̬ɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Công cụ tài chính phái sinh (hợp đồng tương lai, quyền chọn)",
        "definitionEn": "An arrangement or product whose value derives from and is dependent on the value of an underlying asset.",
        "exampleEn": "Multinational corporations use currency derivatives to hedge against sudden foreign exchange swings.",
        "exampleVi": "Các tập đoàn đa quốc gia sử dụng các sản phẩm phái sinh tiền tệ để phòng ngừa trước những biến động tỷ giá bất ngờ.",
        "synonyms": [
          "Hedge instrument",
          "Futures contract"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-22",
        "word": "Hedging",
        "phonetic": "/ˈhedʒ.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nghiệp vụ phòng ngừa rủi ro tài chính",
        "definitionEn": "An investment to reduce the risk of adverse price movements in an asset.",
        "exampleEn": "Airlines engage in fuel hedging contracts to lock in kerosene prices years ahead.",
        "exampleVi": "Các hãng hàng không tham gia vào các hợp đồng phòng ngừa rủi ro nhiên liệu để chốt giá dầu nhiều năm trước.",
        "synonyms": [
          "Risk mitigation",
          "Financial protection"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-23",
        "word": "Collateral",
        "phonetic": "/kəˈlæt̬.ɚ.əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài sản thế chấp để đảm bảo khoản vay",
        "definitionEn": "Something pledged as security for repayment of a loan, to be forfeited in the event of a default.",
        "exampleEn": "The commercial bank required a residential title deed as collateral for the business loan.",
        "exampleVi": "Ngân hàng thương mại yêu cầu sổ hồng nhà ở làm tài sản thế chấp cho khoản vay kinh doanh.",
        "synonyms": [
          "Pledge",
          "Security deposit",
          "Guarantee"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-24",
        "word": "Bankruptcy",
        "phonetic": "/ˈbæŋ.krəpt.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tình trạng phá sản hợp pháp của doanh nghiệp",
        "definitionEn": "The state of being bankrupt, unable to settle outstanding debts.",
        "exampleEn": "The real estate developer filed for bankruptcy protection after missing bond coupon payments.",
        "exampleVi": "Nhà phát triển bất động sản đã nộp đơn xin bảo hộ phá sản sau khi lỡ hạn thanh toán lãi coupon trái phiếu.",
        "synonyms": [
          "Insolvency",
          "Liquidation",
          "Ruin"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-25",
        "word": "Solvency",
        "phonetic": "/ˈsɑːl.vən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khả năng thanh toán nợ dài hạn",
        "definitionEn": "The possession of assets in excess of liabilities; ability to pay one's debts.",
        "exampleEn": "Rigorous stress tests proved the financial solvency of the banking sector under harsh conditions.",
        "exampleVi": "Các bài kiểm tra sức chịu đựng nghiêm ngặt đã chứng minh khả năng thanh toán tài chính của ngành ngân hàng trong những điều kiện khắc nghiệt.",
        "synonyms": [
          "Financial stability",
          "Creditworthiness"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-26",
        "word": "Remittance",
        "phonetic": "/rɪˈmɪt.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kiều hối, kiều bào gửi tiền về quê hương",
        "definitionEn": "A sum of money sent, especially by a person working abroad to someone in their home country.",
        "exampleEn": "Foreign remittances contribute billions of dollars annually to the developing economy.",
        "exampleVi": "Nguồn kiều hối từ nước ngoài đóng góp hàng tỷ USD mỗi năm cho nền kinh tế đang phát triển.",
        "synonyms": [
          "Overseas transfer",
          "Money wire"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-27",
        "word": "Microfinance",
        "phonetic": "/ˈmaɪ.kroʊˌfaɪ.næns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài chính vi mô hỗ trợ hộ nghèo khởi nghiệp",
        "definitionEn": "A type of banking service provided to unemployed or low-income individuals or groups who otherwise would have no other access to financial services.",
        "exampleEn": "Microfinance loans empowered rural women to launch independent weaving cooperatives.",
        "exampleVi": "Các khoản vay tài chính vi mô đã trao quyền cho phụ nữ nông thôn thành lập các hợp tác xã dệt độc lập.",
        "synonyms": [
          "Small-scale credit",
          "Grassroots banking"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-28",
        "word": "Annuity",
        "phonetic": "/əˈnuː.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hợp đồng niên kim chi trả định kỳ khi về hưu",
        "definitionEn": "A fixed sum of money paid to someone each year, typically for the rest of their life.",
        "exampleEn": "Investing in a guaranteed lifetime annuity provides predictable monthly cash flow in retirement.",
        "exampleVi": "Đầu tư vào một hợp đồng niên kim trọn đời có bảo đảm mang lại dòng tiền mặt hàng tháng dự đoán được khi về hưu.",
        "synonyms": [
          "Annual payout",
          "Pension stream"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-29",
        "word": "Underwriting",
        "phonetic": "/ˈʌn.dɚˌraɪ.tɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nghiệp vụ thẩm định rủi ro và bảo lãnh tài chính",
        "definitionEn": "The process by which an investment bank assesses risk and guarantees public share issuance.",
        "exampleEn": "The lead underwriter determined an initial IPO offer price of twenty-four dollars per share.",
        "exampleVi": "Đơn vị bảo lãnh phát hành chính đã xác định mức giá chào bán IPO ban đầu là 24 USD cho mỗi cổ phần.",
        "synonyms": [
          "Risk assessment",
          "Financial backing"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-30",
        "word": "Custody",
        "phonetic": "/ˈkʌs.tə.di/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lưu ký tài sản và chứng khoán an toàn",
        "definitionEn": "The protective care or guardianship of assets, securities, or financial instruments.",
        "exampleEn": "Institutional custodians safeguard trillions of dollars in equities on behalf of sovereign wealth funds.",
        "exampleVi": "Các tổ chức lưu ký bảo quản hàng nghìn tỷ USD cổ phiếu thay mặt cho các quỹ đầu tư quốc gia.",
        "synonyms": [
          "Safekeeping",
          "Asset guardianship"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-31",
        "word": "Amortization",
        "phonetic": "/ˌæm.ɚ.t̬əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khấu hao tài sản vô hình / trả góp nợ định kỳ",
        "definitionEn": "The reduction of a loan or debt balance over time through scheduled payments.",
        "exampleEn": "The fixed mortgage amortization schedule shows the portion applied to principal versus interest.",
        "exampleVi": "Lịch trình trả góp thế chấp cố định thể hiện phần tiền được trả cho tiền gốc so với tiền lãi.",
        "synonyms": [
          "Installment schedule",
          "Debt reduction"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-32",
        "word": "Arrears",
        "phonetic": "/əˈrɪrz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khoản nợ đọng quá hạn chưa thanh toán",
        "definitionEn": "Money that is owed and should have been paid earlier.",
        "exampleEn": "Tenants who fall three months into rent arrears face immediate eviction proceedings.",
        "exampleVi": "Những khách thuê nợ đọng tiền nhà tới ba tháng sẽ đối mặt với thủ tục đuổi nhà ngay lập tức.",
        "synonyms": [
          "Overdue debt",
          "Back payments"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-33",
        "word": "Asset Class",
        "phonetic": "/ˈæs.et ˌklæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhóm lớp tài sản đầu tư tương đồng",
        "definitionEn": "A group of financial instruments that have similar financial characteristics and behave similarly in the marketplace.",
        "exampleEn": "Equities, real estate, and fixed-income bonds represent distinct investment asset classes.",
        "exampleVi": "Cổ phiếu, bất động sản và trái phiếu thu nhập cố định đại diện cho các lớp tài sản đầu tư khác biệt.",
        "synonyms": [
          "Investment category",
          "Asset category"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-34",
        "word": "Balance Sheet",
        "phonetic": "/ˈbæl.əns ˌʃiːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bảng cân đối kế toán tài sản và nợ",
        "definitionEn": "A statement of the assets, liabilities, and capital of a business at a particular point in time.",
        "exampleEn": "Reviewing the balance sheet helps investors assess a corporation's short-term financial strength.",
        "exampleVi": "Xem xét bảng cân đối kế toán giúp các nhà đầu tư đánh giá sức mạnh tài chính ngắn hạn của doanh nghiệp.",
        "synonyms": [
          "Financial statement",
          "Asset summary"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-35",
        "word": "Cash Flow",
        "phonetic": "/ˈkæʃ ˌfloʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Dòng tiền mặt vào ra của doanh nghiệp",
        "definitionEn": "The total amount of money being transferred into and out of a business, especially as affecting liquidity.",
        "exampleEn": "Positive operating cash flow indicates that the core software business generates abundant cash.",
        "exampleVi": "Dòng tiền hoạt động dương chứng tỏ hoạt động kinh doanh phần mềm cốt lõi tạo ra nguồn tiền dồi dào.",
        "synonyms": [
          "Cash generation",
          "Liquidity flow"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-36",
        "word": "Credit Rating",
        "phonetic": "/ˈkred.ɪt ˌreɪ.tɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hạng mức tín nhiệm tín dụng quốc gia/doanh nghiệp",
        "definitionEn": "An estimate of the ability of a person or organization to fulfill their financial commitments, based on previous dealings.",
        "exampleEn": "Standard & Poor's upgraded the sovereign credit rating from stable to positive.",
        "exampleVi": "Tổ chức Standard & Poor's đã nâng hạng mức tín nhiệm quốc gia từ ổn định lên mức tích cực.",
        "synonyms": [
          "Credit score",
          "Creditworthiness"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-37",
        "word": "Debenture",
        "phonetic": "/dɪˈben.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Trái phiếu doanh nghiệp không cần bảo đảm bằng tài sản",
        "definitionEn": "An unsecured loan certificate issued by a company, backed by general credit rather than by specified assets.",
        "exampleEn": "The energy conglomerate issued five-hundred million dollars in ten-year convertible debentures.",
        "exampleVi": "Tập đoàn năng lượng đã phát hành 500 triệu USD trái phiếu chuyển đổi kỳ hạn 10 năm không cần thế chấp.",
        "synonyms": [
          "Unsecured bond",
          "Corporate note"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-38",
        "word": "Default",
        "phonetic": "/dɪˈfɑːlt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự vỡ nợ không trả được gốc hoặc lãi",
        "definitionEn": "Failure to fulfill an obligation, especially to repay a loan or appear in a court of law.",
        "exampleEn": "Sovereign debt default triggers immediate trade embargoes and freezes international credit lines.",
        "exampleVi": "Vỡ nợ quốc gia sẽ kích hoạt ngay lệnh cấm vận thương mại và đóng băng các hạn mức tín dụng quốc tế.",
        "synonyms": [
          "Non-payment",
          "Loan breach"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-39",
        "word": "Depository",
        "phonetic": "/dɪˈpɑː.zə.tɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trung tâm lưu ký chứng khoán quốc gia",
        "definitionEn": "A facility where things can be deposited for storage or safekeeping, especially financial instruments.",
        "exampleEn": "The national securities depository manages electronic book-entry transfers of all public shares.",
        "exampleVi": "Trung tâm lưu ký chứng khoán quốc gia quản lý việc chuyển nhượng ghi sổ điện tử của tất cả cổ phiếu đại chúng.",
        "synonyms": [
          "Repository",
          "Securities vault"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-40",
        "word": "Discount Rate",
        "phonetic": "/ˈdɪs.kaʊnt ˌreɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lãi suất chiết khấu của ngân hàng trung ương",
        "definitionEn": "The minimum interest rate set by the central bank for lending to other banks, or rate used in DCF modeling.",
        "exampleEn": "Raising the central discount rate cools corporate borrowing and slows runaway business expansion.",
        "exampleVi": "Tăng lãi suất chiết khấu trung ương giúp hạ nhiệt hoạt động vay vốn doanh nghiệp và làm chậm đà mở rộng ồ ạt.",
        "synonyms": [
          "Base lending rate",
          "Discount factor"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-41",
        "word": "Due Date",
        "phonetic": "/ˈduː ˌdeɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Hạn chót thanh toán nghĩa vụ nợ",
        "definitionEn": "The date on which something falls due, especially the payment of a bill or debt.",
        "exampleEn": "Always settle your credit card statement balance in full before the official due date.",
        "exampleVi": "Hãy luôn thanh toán toàn bộ số dư sao kê thẻ tín dụng trước ngày đến hạn chính thức.",
        "synonyms": [
          "Payment deadline",
          "Maturity date"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-42",
        "word": "Equities",
        "phonetic": "/ˈek.wə.t̬iz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cổ phiếu thị trường vốn",
        "definitionEn": "Stocks and shares in a company, representing ownership stakes.",
        "exampleEn": "Long-term historical returns from equities outpace those from fixed-interest bank deposits.",
        "exampleVi": "Lợi suất lịch sử dài hạn từ cổ phiếu luôn vượt trội so với các khoản tiền gửi tiết kiệm lãi suất cố định.",
        "synonyms": [
          "Stocks",
          "Shares"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-43",
        "word": "Escrow",
        "phonetic": "/ˈes.kroʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài khoản ký quỹ bên thứ ba giữ tiền trung gian",
        "definitionEn": "A contractual arrangement in which a third party receives and disburses money or property for primary parties.",
        "exampleEn": "Funds for the property purchase remain held securely in escrow until all deeds are verified.",
        "exampleVi": "Tiền mua bất động sản được giữ an toàn trong tài khoản ký quỹ cho đến khi toàn bộ giấy tờ được xác thực.",
        "synonyms": [
          "Third-party holding",
          "Trust account"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-44",
        "word": "Foreclosure",
        "phonetic": "/fɔːrˈkloʊ.ʒɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thủ tục tịch thu nhà đất thế chấp để xiết nợ",
        "definitionEn": "The action of taking possession of a mortgaged property when the mortgagor fails to keep up their mortgage payments.",
        "exampleEn": "The bank initiated foreclosure proceedings after the homeowner missed eight consecutive mortgage payments.",
        "exampleVi": "Ngân hàng đã tiến hành thủ tục tịch thu tài sản sau khi chủ nhà lỡ 8 kỳ thanh toán tiền mua nhà liên tiếp.",
        "synonyms": [
          "Repossession",
          "Seizure"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-45",
        "word": "Forex",
        "phonetic": "/ˈfɔːr.eks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thị trường ngoại hối quốc tế (FX)",
        "definitionEn": "Foreign Exchange: the global marketplace for exchanging national currencies against one another.",
        "exampleEn": "Forex traders execute trillions of dollars in daily transactions across London, New York, and Tokyo.",
        "exampleVi": "Các nhà giao dịch ngoại hối thực hiện hàng nghìn tỷ USD giao dịch mỗi ngày tại London, New York và Tokyo.",
        "synonyms": [
          "Foreign exchange",
          "Currency market"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-46",
        "word": "Gearing",
        "phonetic": "/ˈɡɪr.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tỷ lệ đòn bẩy nợ trên vốn chủ sở hữu",
        "definitionEn": "The proportion of a company's capital which is financed by debt as opposed to equity shares.",
        "exampleEn": "High financial gearing makes an enterprise exceptionally vulnerable during periods of rising interest rates.",
        "exampleVi": "Tỷ lệ đòn bẩy nợ cao khiến doanh nghiệp đặc biệt dễ tổn thương trong thời kỳ lãi suất gia tăng.",
        "synonyms": [
          "Debt-to-equity ratio",
          "Financial leverage"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-47",
        "word": "Guarantor",
        "phonetic": "/ˌɡær.ənˈtɔːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Người đứng ra bảo lãnh khoản vay nợ",
        "definitionEn": "A person or organization that provides a guarantee in support of another.",
        "exampleEn": "His father acted as legal guarantor so the young entrepreneur could secure a startup commercial loan.",
        "exampleVi": "Cha anh ấy đã đứng ra làm người bảo lãnh hợp pháp để doanh nhân trẻ có thể vay vốn khởi nghiệp.",
        "synonyms": [
          "Sponsor",
          "Surety",
          "Backer"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-48",
        "word": "Initial Public Offering",
        "phonetic": "/ɪˌnɪʃ.əl ˈpʌb.lɪk ˌɑː.fɚ.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chào bán cổ phiếu lần đầu ra công chúng (IPO)",
        "definitionEn": "The first sale of stock by a private company to the public.",
        "exampleEn": "The tech unicorn filed documentation for an upcoming ten-billion-dollar initial public offering on NASDAQ.",
        "exampleVi": "Kỳ lân công nghệ đã nộp hồ sơ cho đợt chào bán cổ phiếu lần đầu trị giá 10 tỷ USD sắp tới trên sàn NASDAQ.",
        "synonyms": [
          "IPO",
          "Public listing",
          "Stock flotation"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-49",
        "word": "Insider Trading",
        "phonetic": "/ˌɪn.saɪ.dɚ ˈtreɪ.dɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giao dịch nội gián trái phép dựa trên tin mật",
        "definitionEn": "The illegal practice of trading on the stock exchange to one's own advantage through having access to confidential information.",
        "exampleEn": "The former corporate vice president was convicted of insider trading and handed a hefty prison term.",
        "exampleVi": "Cựu phó chủ tịch tập đoàn đã bị kết tội giao dịch nội gián trái phép và phải nhận mức án tù thích đáng.",
        "synonyms": [
          "Confidential dealing",
          "Securities fraud"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-50",
        "word": "Interest Rate",
        "phonetic": "/ˈɪn.trɪst ˌreɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lãi suất tiền gửi hoặc lãi vay",
        "definitionEn": "The proportion of a loan that is charged as interest to the borrower, typically expressed as an annual percentage.",
        "exampleEn": "Commercial banks raised mortgage interest rates following the central bank's policy tightening.",
        "exampleVi": "Các ngân hàng thương mại đã tăng lãi suất thế chấp sau khi ngân hàng trung ương thắt chặt chính sách.",
        "synonyms": [
          "Borrowing rate",
          "Yield percentage"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-51",
        "word": "Maturity",
        "phonetic": "/məˈtʊr.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Ngày đáo hạn hợp đồng trái phiếu hoặc tiền gửi",
        "definitionEn": "The time when an insurance policy, security, etc. matures and is due for payment.",
        "exampleEn": "Hold the ten-year government bond until final maturity to receive the full face value principal.",
        "exampleVi": "Hãy nắm giữ trái phiếu chính phủ 10 năm cho tới ngày đáo hạn cuối cùng để nhận đủ toàn bộ mệnh giá tiền gốc.",
        "synonyms": [
          "Expiration date",
          "Due date"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-52",
        "word": "Mutual Fund",
        "phonetic": "/ˈmjuː.tʃu.əl ˌfʌnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Quỹ đầu tư tương hỗ đại chúng",
        "definitionEn": "An investment program funded by shareholders that trades in diversified holdings and is professionally managed.",
        "exampleEn": "Novice investors often start by placing monthly savings into low-cost index mutual funds.",
        "exampleVi": "Các nhà đầu tư mới bắt đầu thường gửi tiết kiệm hàng tháng vào các quỹ đầu tư tương hỗ chỉ số chi phí thấp.",
        "synonyms": [
          "Open-end fund",
          "Collective investment"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-53",
        "word": "Overdrawn",
        "phonetic": "/ˌoʊ.vɚˈdrɑːn/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Thấu chi tài khoản, tiêu vượt số dư hiện có",
        "definitionEn": "Having an account with a bank or other financial institution in deficit.",
        "exampleEn": "Her checking account went overdrawn after an unexpected automatic annual subscription charge.",
        "exampleVi": "Tài khoản thanh toán của cô ấy bị thấu chi sau một khoản trừ tiền đăng ký dịch vụ thường niên tự động bất ngờ.",
        "synonyms": [
          "In the red",
          "Deficit"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-54",
        "word": "Overdraft",
        "phonetic": "/ˈoʊ.vɚ.dræft/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hạn mức thấu chi được ngân hàng cấp trước",
        "definitionEn": "A deficit in a bank account caused by drawing more money than the account holds.",
        "exampleEn": "The bank granted a flexible five-thousand-dollar business overdraft facility to manage payroll gaps.",
        "exampleVi": "Ngân hàng đã cấp hạn mức thấu chi kinh doanh linh hoạt 5.000 USD để xử lý khoảng trống tiền mặt trả lương.",
        "synonyms": [
          "Credit buffer",
          "Deficit allowance"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-55",
        "word": "Par Value",
        "phonetic": "/ˈpɑːr ˌvæl.juː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mệnh giá danh nghĩa ghi trên mặt trái phiếu",
        "definitionEn": "The nominal or face value of a share, bond, or coupon as stated on a certificate or chart.",
        "exampleEn": "Corporate bonds are issued with a standard par value of one thousand dollars per note.",
        "exampleVi": "Trái phiếu doanh nghiệp được phát hành với mệnh giá tiêu chuẩn là 1.000 USD cho mỗi phiếu ghi nhận nợ.",
        "synonyms": [
          "Face value",
          "Nominal value"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-56",
        "word": "Payoff",
        "phonetic": "/ˈpeɪ.ɑːf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Phần thưởng lợi nhuận hoặc thanh toán dứt điểm",
        "definitionEn": "A payment made to someone, especially as a bribe or reward, or the return on an investment.",
        "exampleEn": "Patience in equity investing often yields an enormous financial payoff over a twenty-year horizon.",
        "exampleVi": "Sự kiên nhẫn trong đầu tư cổ phiếu thường mang lại mức lợi nhuận đền đáp to lớn trong chân trời 20 năm.",
        "synonyms": [
          "Return",
          "Reward",
          "Dividend"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-57",
        "word": "Principal",
        "phonetic": "/ˈprɪn.sə.pəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tiền gốc của một khoản nợ hoặc đầu tư",
        "definitionEn": "A sum of money lent or invested, on which interest is paid.",
        "exampleEn": "Monthly loan repayments cover both accrued interest and a portion of the original loan principal.",
        "exampleVi": "Các khoản trả nợ hàng tháng bao gồm cả phần tiền lãi phát sinh và một phần tiền gốc ban đầu.",
        "synonyms": [
          "Capital sum",
          "Loan base",
          "Face amount"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-58",
        "word": "Prospectus",
        "phonetic": "/prəˈspek.təs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Bản cáo bạch thông tin tài chính trước khi IPO",
        "definitionEn": "A formal legal document that is required by and filed with regulatory authorities providing details about an investment offering.",
        "exampleEn": "Prospective investors should carefully study the company's financial prospectus before purchasing shares.",
        "exampleVi": "Các nhà đầu tư tiềm năng nên nghiên cứu kỹ bản cáo bạch tài chính của công ty trước khi mua cổ phiếu.",
        "synonyms": [
          "Offering document",
          "Investment brochure"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-59",
        "word": "Recession",
        "phonetic": "/rɪˈseʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Suy thoái kinh tế (tăng trưởng âm hai quý liên tiếp)",
        "definitionEn": "A period of temporary economic decline during which trade and industrial activity are reduced.",
        "exampleEn": "The government rolled out emergency stimulus packages to mitigate the severity of the global recession.",
        "exampleVi": "Chính phủ đã tung ra các gói kích thích khẩn cấp để giảm thiểu mức độ nghiêm trọng của cuộc suy thoái toàn cầu.",
        "synonyms": [
          "Downturn",
          "Economic slump",
          "Stagnation"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-60",
        "word": "Solvent",
        "phonetic": "/ˈsɑːl.vənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Có khả năng thanh toán nợ đầy đủ",
        "definitionEn": "Having assets that exceed one's liabilities, able to pay one's debts.",
        "exampleEn": "Despite reduced factory output, the manufacturer remains completely solvent with solid cash reserves.",
        "exampleVi": "Mặc dù sản lượng nhà máy sụt giảm, nhà sản xuất vẫn hoàn toàn có khả năng thanh toán nhờ dự trữ tiền mặt vững chắc.",
        "synonyms": [
          "Financially sound",
          "Liquid",
          "In credit"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-61",
        "word": "Speculation",
        "phonetic": "/ˌspek.jəˈleɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hoạt động đầu cơ kiếm lời ngắn hạn rủi ro cao",
        "definitionEn": "Investment in stocks, property, or other ventures in the hope of gain but with the risk of loss.",
        "exampleEn": "Unchecked land speculation fueled an unsustainable real estate price bubble.",
        "exampleVi": "Hoạt động đầu cơ đất đai không kiểm soát đã thổi bùng bong bóng giá bất động sản khó bền vững.",
        "synonyms": [
          "Risk trading",
          "Gambling on price"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-62",
        "word": "Spread",
        "phonetic": "/spred/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoảng chênh lệch giữa giá mua và giá bán",
        "definitionEn": "The difference between the bid and the ask price of a security or asset.",
        "exampleEn": "Liquid currency pairs like EUR/USD maintain an extremely tight bid-ask spread.",
        "exampleVi": "Các cặp tiền tệ có tính thanh khoản cao như EUR/USD duy trì mức chênh lệch giá mua bán vô cùng hẹp.",
        "synonyms": [
          "Price gap",
          "Margin difference"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-63",
        "word": "Stamp Duty",
        "phonetic": "/ˈstæmp ˌduː.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thuế trước bạ khi mua bán nhà đất",
        "definitionEn": "A tax levied on single property purchases or documents, typically in real estate transfers.",
        "exampleEn": "Homebuyers must factor in local government stamp duty charges when budgeting for an apartment.",
        "exampleVi": "Người mua nhà phải tính toán đến khoản thuế trước bạ nộp cho chính quyền khi lên ngân sách mua căn hộ.",
        "synonyms": [
          "Transfer tax",
          "Property levy"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-64",
        "word": "Stockbroker",
        "phonetic": "/ˈstɑːkˌbroʊ.kɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Môi giới chứng khoán hỗ trợ lệnh đặt",
        "definitionEn": "A broker who buys and sells securities on a stock exchange on behalf of clients.",
        "exampleEn": "Her licensed stockbroker advised her against panic-selling during the sudden morning market dip.",
        "exampleVi": "Nhà môi giới chứng khoán được cấp phép đã khuyên cô ấy không nên bán tháo trong hoảng loạn giữa đợt giảm sáng nay.",
        "synonyms": [
          "Securities trader",
          "Investment agent"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-65",
        "word": "Subsidy",
        "phonetic": "/ˈsʌb.sə.di/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản tiền trợ cấp của chính phủ",
        "definitionEn": "A sum of money granted by the government or a public body to assist an industry or business.",
        "exampleEn": "Agricultural subsidies help domestic dairy farmers remain competitive against imported goods.",
        "exampleVi": "Các khoản trợ cấp nông nghiệp giúp nông dân chăn nuôi bò sữa trong nước duy trì sức cạnh tranh với hàng nhập khẩu.",
        "synonyms": [
          "Grant",
          "Financial aid",
          "Allowance"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-66",
        "word": "Takeover",
        "phonetic": "/ˈteɪkˌoʊ.vɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vụ thâu tóm nắm quyền kiểm soát công ty",
        "definitionEn": "An act of assuming control of something, especially the buying out of one company by another.",
        "exampleEn": "The hostile corporate takeover bid was narrowly defeated at the annual general meeting.",
        "exampleVi": "Nỗ lực thâu tóm thù địch doanh nghiệp đã bị đánh bại sít sao tại đại hội đồng cổ đông thường niên.",
        "synonyms": [
          "Buyout",
          "Acquisition"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-67",
        "word": "Treasury",
        "phonetic": "/ˈtreʒ.ɚ.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kho bạc nhà nước hoặc ngân quỹ tài chính",
        "definitionEn": "The funds or revenue of a government, institution, or society; the department in charge of public money.",
        "exampleEn": "The national treasury issued thirty-year inflation-protected securities to institutional pension funds.",
        "exampleVi": "Kho bạc nhà nước đã phát hành chứng chỉ bảo hiểm lạm phát kỳ hạn 30 năm cho các quỹ hưu trí tổ chức.",
        "synonyms": [
          "National funds",
          "Exchequer",
          "Finances"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-68",
        "word": "Trust Fund",
        "phonetic": "/ˈtrʌst ˌfʌnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quỹ tín thác ủy thác cho người thừa kế",
        "definitionEn": "A fund consisting of assets that have been transferred to someone with stipulations that they be held on behalf of another.",
        "exampleEn": "Her grandparents established a generous college education trust fund when she was born.",
        "exampleVi": "Ông bà cô ấy đã lập một quỹ tín thác học đại học hậu hĩnh ngay từ khi cô ấy mới chào đời.",
        "synonyms": [
          "Settlement fund",
          "Estate trust"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-69",
        "word": "Underwrite",
        "phonetic": "/ˈʌn.dɚ.raɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Bảo lãnh tài chính hoặc bảo hiểm rủi ro",
        "definitionEn": "Sign and accept liability under an insurance policy, thus guaranteeing payment in case of loss or damage.",
        "exampleEn": "Syndicates of global investment banks underwrite multi-billion-dollar sovereign bond issuances.",
        "exampleVi": "Các tổ hợp ngân hàng đầu tư toàn cầu đứng ra bảo lãnh các đợt phát hành trái phiếu chính phủ hàng tỷ USD.",
        "synonyms": [
          "Guarantee",
          "Insure",
          "Back"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-70",
        "word": "Venture",
        "phonetic": "/ˈven.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Dự án kinh doanh mạo hiểm nhiều rủi ro",
        "definitionEn": "A risky or daring journey or undertaking; a commercial enterprise involving risks.",
        "exampleEn": "The two aerospace companies launched a joint venture to develop reusable orbital rockets.",
        "exampleVi": "Hai công ty hàng không vũ trụ đã khởi động một dự án kinh doanh mạo hiểm chung nhằm phát triển tên lửa quỹ đạo tái sử dụng.",
        "synonyms": [
          "Enterprise",
          "Endeavor",
          "Project"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-71",
        "word": "Windfall",
        "phonetic": "/ˈwɪnd.fɑːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khoản lợi nhuận từ trên trời rơi xuống bất ngờ",
        "definitionEn": "An unexpected, unearned, or sudden gain or advantage, typically a sum of money.",
        "exampleEn": "Skyrocketing natural gas spot prices brought a multi-billion-dollar profit windfall to the energy firm.",
        "exampleVi": "Giá khí đốt tự nhiên giao ngay tăng vọt đã mang lại khoản lợi nhuận khổng lồ bất ngờ cho công ty năng lượng.",
        "synonyms": [
          "Bonanza",
          "Jackpot",
          "Sudden gain"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-72",
        "word": "Yield",
        "phonetic": "/jiːld/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lợi tức sinh lời từ khoản đầu tư",
        "definitionEn": "The income return on an investment, such as the interest or dividends received from holding a security.",
        "exampleEn": "High-yield savings accounts currently deliver competitive returns without market capital risks.",
        "exampleVi": "Các tài khoản tiết kiệm lợi suất cao hiện mang lại mức sinh lời hấp dẫn mà không phải chịu rủi ro vốn thị trường.",
        "synonyms": [
          "Return",
          "Earnings",
          "Payout"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-73",
        "word": "Zero-Sum",
        "phonetic": "/ˌzɪr.oʊ ˈsʌm/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Trò chơi có tổng bằng không (người này được thì người khác mất)",
        "definitionEn": "Relating to a situation in which whatever is gained by one side is lost by the other.",
        "exampleEn": "Pure currency speculation is often categorized as a zero-sum financial game.",
        "exampleVi": "Đầu cơ tiền tệ thuần túy thường được xếp vào nhóm trò chơi tài chính có tổng bằng không.",
        "synonyms": [
          "Win-lose",
          "Zero-sum game"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-74",
        "word": "Credit Line",
        "phonetic": "/ˈkred.ɪt ˌlaɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hạn mức tín dụng ngân hàng cấp sẵn",
        "definitionEn": "An amount of credit extended to a borrower.",
        "exampleEn": "The manufacturing company tapped its revolving credit line to fund sudden raw material purchases.",
        "exampleVi": "Công ty sản xuất đã kích hoạt hạn mức tín dụng tuần hoàn để thanh toán các khoản mua nguyên liệu bất ngờ.",
        "synonyms": [
          "Credit facility",
          "Borrowing limit"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-75",
        "word": "Annuity Plan",
        "phonetic": "/əˈnuː.ə.t̬i ˌplæn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kế hoạch tích lũy niên kim hưu trí",
        "definitionEn": "A long-term investment that is issued by an insurance company and is designed to help protect you from the risk of outliving your income.",
        "exampleEn": "Choosing a lifetime annuity plan ensures steady monthly paychecks throughout retirement years.",
        "exampleVi": "Lựa chọn một kế hoạch niên kim trọn đời đảm bảo những tấm séc thu nhập hàng tháng ổn định suốt những năm hưu trí.",
        "synonyms": [
          "Retirement annuity",
          "Pension plan"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-76",
        "word": "Bullish",
        "phonetic": "/ˈbʊl.ɪʃ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Lạc quan về xu hướng tăng giá thị trường",
        "definitionEn": "Characterized by optimism or certainty of price increases.",
        "exampleEn": "Institutional analysts remain strongly bullish on semiconductor chip manufacturers.",
        "exampleVi": "Các nhà phân tích tổ chức vẫn giữ quan điểm vô cùng lạc quan về xu hướng tăng giá của các nhà sản xuất chip bán dẫn.",
        "synonyms": [
          "Optimistic",
          "Confident",
          "Upbeat"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-77",
        "word": "Bearish",
        "phonetic": "/ˈber.ɪʃ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Bi quan dự báo thị trường sắp giảm giá",
        "definitionEn": "Characterized by pessimism, especially in the belief that stock prices will fall.",
        "exampleEn": "Mounting sovereign debt loads caused hedge fund managers to turn bearish on commercial banks.",
        "exampleVi": "Gánh nặng nợ quốc gia gia tăng đã khiến các nhà quản lý quỹ phòng hộ trở nên bi quan về nhóm ngân hàng thương mại.",
        "synonyms": [
          "Pessimistic",
          "Negative",
          "Downbeat"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-78",
        "word": "Capitalize",
        "phonetic": "/ˈkæp.ə.t̬əl.aɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Vốn hóa chi phí vào tài sản hoặc tận dụng cơ hội",
        "definitionEn": "Record an expenditure as an asset rather than an expense, or take advantage of an opportunity.",
        "exampleEn": "Companies can capitalize internal software development labor under strict accounting rules.",
        "exampleVi": "Các công ty có thể vốn hóa chi phí nhân công phát triển phần mềm nội bộ theo các quy tắc kế toán nghiêm ngặt.",
        "synonyms": [
          "Take advantage of",
          "Fund"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-79",
        "word": "Compound Interest",
        "phonetic": "/ˌkɑːm.paʊnd ˈɪn.trɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lãi kép, lãi mẹ đẻ lãi con kỳ diệu",
        "definitionEn": "Interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods.",
        "exampleEn": "Albert Einstein famously described compound interest as the eighth wonder of the world.",
        "exampleVi": "Albert Einstein từng ví lãi kép một cách nổi tiếng như là kỳ quan thứ tám của thế giới.",
        "synonyms": [
          "Cumulative interest",
          "Compounding"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-80",
        "word": "Credit Score",
        "phonetic": "/ˈkred.ɪt ˌskɔːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Điểm số tín nhiệm tín dụng cá nhân",
        "definitionEn": "A number assigned to a person that indicates to lenders their capacity to repay a loan.",
        "exampleEn": "Maintaining a credit score above 750 qualifies borrowers for the lowest mortgage rates.",
        "exampleVi": "Duy trì điểm tín dụng trên 750 giúp người vay đủ điều kiện nhận các mức lãi suất thế chấp thấp nhất.",
        "synonyms": [
          "Credit rating",
          "FICO score"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-81",
        "word": "Default Risk",
        "phonetic": "/dɪˈfɑːlt ˌrɪsk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Rủi ro vỡ nợ không trả được tiền vay",
        "definitionEn": "The risk that a lender takes on that the borrower will not be able to make required payments.",
        "exampleEn": "Credit default swaps allow institutional bondholders to insure against corporate default risk.",
        "exampleVi": "Các hợp đồng hoán đổi rủi ro tín dụng cho phép các trái chủ tổ chức mua bảo hiểm chống lại rủi ro vỡ nợ của doanh nghiệp.",
        "synonyms": [
          "Credit risk",
          "Insolvency risk"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-82",
        "word": "Exchange Traded Fund",
        "phonetic": "/ɪksˈtʃeɪndʒ ˌtreɪ.dɪd ˈfʌnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quỹ hoán đổi danh mục giao dịch như cổ phiếu (ETF)",
        "definitionEn": "A type of pooled investment security that operates much like a mutual fund but trades on public stock exchanges.",
        "exampleEn": "Low-fee S&P 500 exchange traded funds are standard pillars in modern index investing.",
        "exampleVi": "Các quỹ ETF mô phỏng chỉ số S&P 500 với mức phí thấp là trụ cột tiêu chuẩn trong đầu tư chỉ số hiện đại.",
        "synonyms": [
          "ETF",
          "Index fund"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-83",
        "word": "Hedge",
        "phonetic": "/hedʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Phòng ngừa và giảm thiểu tổn thất rủi ro",
        "definitionEn": "Protect oneself against loss on an investment or bet by making balancing or compensating other transactions.",
        "exampleEn": "Importers frequently buy forward contracts to hedge against sharp currency depreciations.",
        "exampleVi": "Các nhà nhập khẩu thường xuyên mua hợp đồng kỳ hạn để phòng ngừa rủi ro đồng tiền bị mất giá mạnh.",
        "synonyms": [
          "Protect",
          "Safeguard",
          "Counterbalance"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-84",
        "word": "Holdings",
        "phonetic": "/ˈhoʊl.dɪŋz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Toàn bộ tài sản hoặc cổ phần đang nắm giữ",
        "definitionEn": "Stocks, property, and other financial assets in someone's possession.",
        "exampleEn": "The billionaire reduced his equity holdings across technology firms to increase cash reserves.",
        "exampleVi": "Tỷ phú đã giảm bớt số cổ phần đang nắm giữ tại các công ty công nghệ để tăng cường dự trữ tiền mặt.",
        "synonyms": [
          "Assets",
          "Investments",
          "Equities"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-85",
        "word": "Index",
        "phonetic": "/ˈɪn.deks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chỉ số thị trường chứng khoán (VN-Index, S&P 500)",
        "definitionEn": "An indicator, sign, or measure of something; a benchmark tracking market movements.",
        "exampleEn": "The VN-Index surged thirty points driven by strong foreign institutional inflows.",
        "exampleVi": "Chỉ số VN-Index đã tăng vọt 30 điểm nhờ dòng vốn mua ròng mạnh mẽ từ các nhà đầu tư tổ chức nước ngoài.",
        "synonyms": [
          "Market gauge",
          "Benchmark index"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-86",
        "word": "Junk Bond",
        "phonetic": "/ˈdʒʌŋk ˌbɑːnd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Trái phiếu rác lợi suất cao nhưng rủi ro vỡ nợ lớn",
        "definitionEn": "A high-yielding, high-risk security, typically issued by a company seeking to raise capital quickly in order to finance a takeover.",
        "exampleEn": "Pension funds are legally barred from holding high-risk junk bonds in their conservative portfolios.",
        "exampleVi": "Các quỹ hưu trí bị pháp luật nghiêm cấm nắm giữ các loại trái phiếu rác rủi ro cao trong danh mục thận trọng của họ.",
        "synonyms": [
          "High-yield bond",
          "Speculative-grade bond"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-87",
        "word": "Leveraged Buyout",
        "phonetic": "/ˌlev.ɚ.ɪdʒd ˈbaɪ.aʊt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thương vụ thâu tóm bằng vốn vay nợ (LBO)",
        "definitionEn": "The acquisition of another company using a significant amount of borrowed money to meet the cost of acquisition.",
        "exampleEn": "The Wall Street private equity firm financed the retail takeover through a massive leveraged buyout.",
        "exampleVi": "Công ty vốn tư nhân Phố Wall đã tài trợ cho thương vụ mua lại hãng bán lẻ thông qua một đòn bẩy tài chính khổng lồ.",
        "synonyms": [
          "LBO",
          "Debt buyout"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-88",
        "word": "Market Capitalization",
        "phonetic": "/ˌmɑːr.kɪt ˌkæp.ə.t̬əl.əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giá trị vốn hóa thị trường của doanh nghiệp",
        "definitionEn": "The value of a company that is traded on the stock market, calculated by multiplying total shares by current price.",
        "exampleEn": "The tech conglomerate's market capitalization surpassed three trillion dollars.",
        "exampleVi": "Vốn hóa thị trường của tập đoàn công nghệ đã vượt qua mốc 3 nghìn tỷ USD.",
        "synonyms": [
          "Market cap",
          "Equity valuation"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-89",
        "word": "Net Asset Value",
        "phonetic": "/ˌnet ˈæs.et ˌvæl.juː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Giá trị tài sản ròng trên mỗi chứng chỉ quỹ (NAV)",
        "definitionEn": "The value of a mutual fund that is reached by deducting the fund's liabilities from the market value of all of its shares and dividing by the number of issued shares.",
        "exampleEn": "Fund managers calculate the net asset value of the portfolio at the close of every trading day.",
        "exampleVi": "Các nhà quản lý quỹ tính toán giá trị tài sản ròng của danh mục đầu tư vào cuối mỗi ngày giao dịch.",
        "synonyms": [
          "NAV",
          "Net book value"
        ],
        "topicId": "finance"
      },
      {
        "id": "fin-90",
        "word": "Offshore Account",
        "phonetic": "/ˌɑːfˈʃɔːr əˈkaʊnt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tài khoản ngân hàng nước ngoài tại các thiên đường thuế",
        "definitionEn": "A bank account located outside the country in which the depositor resides, often used for tax advantages.",
        "exampleEn": "Investigators audited multinational tax declarations to uncover hidden offshore accounts.",
        "exampleVi": "Các nhà điều tra đã kiểm toán các tờ khai thuế đa quốc gia để phát hiện những tài khoản nước ngoài bị che giấu.",
        "synonyms": [
          "Foreign account",
          "Tax haven account"
        ],
        "topicId": "finance"
      }
    ]
  },
  {
    "id": "daily",
    "title": "Giao Tiếp Hàng Ngày & Đời Sống",
    "slug": "daily",
    "icon": "Coffee",
    "color": "text-orange-500",
    "bgColor": "bg-orange-50 dark:bg-orange-950/40",
    "borderColor": "border-orange-200 dark:border-orange-800",
    "description": "Cảm xúc nội tâm, quan hệ xã hội, sinh hoạt thường nhật, chánh niệm và thói quen tích cực",
    "wordCount": 90,
    "words": [
      {
        "id": "daily-1",
        "word": "Acquaintance",
        "phonetic": "/əˈkweɪn.təns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Người quen biết sơ giao",
        "definitionEn": "A person one knows slightly, but who is not a close friend.",
        "exampleEn": "He greeted an old college acquaintance while waiting in line at the coffee shop.",
        "exampleVi": "Anh ấy đã chào một người quen thời đại học trong khi đứng xếp hàng tại quán cà phê.",
        "synonyms": [
          "Contact",
          "Associate",
          "Familiar"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-2",
        "word": "Spontaneous",
        "phonetic": "/spɑːnˈteɪ.ni.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Ngẫu hứng, tự phát không lên lịch trước",
        "definitionEn": "Performed or occurring as a result of a sudden inner impulse and without premeditation.",
        "exampleEn": "We took a spontaneous weekend road trip to the mountains without booking a hotel.",
        "exampleVi": "Chúng tôi đã có một chuyến phượt ngẫu hứng cuối tuần lên núi mà không hề đặt trước khách sạn.",
        "synonyms": [
          "Unplanned",
          "Impulsive",
          "Extemporaneous"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-3",
        "word": "Reluctant",
        "phonetic": "/rɪˈlʌk.tənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Miễn cưỡng, ngập ngừng không muốn làm",
        "definitionEn": "Unwilling and hesitant; disinclined.",
        "exampleEn": "He was reluctant to attend the crowded party after an exhausting ten-hour workday.",
        "exampleVi": "Anh ấy rất miễn cưỡng khi phải tham dự bữa tiệc đông người sau một ngày làm việc 10 tiếng kiệt sức.",
        "synonyms": [
          "Hesitant",
          "Unwilling",
          "Averse"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-4",
        "word": "Ecstatic",
        "phonetic": "/ekˈstæt̬.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Vui mừng khôn xiết, ngập tràn hạnh phúc",
        "definitionEn": "Feeling or expressing overwhelming happiness or joyful excitement.",
        "exampleEn": "She was absolutely ecstatic when she opened the letter confirming her scholarship.",
        "exampleVi": "Cô ấy vô cùng mừng rỡ khi mở bức thư xác nhận cô được trao học bổng.",
        "synonyms": [
          "Elated",
          "Thrilled",
          "Euphoric"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-5",
        "word": "Mundane",
        "phonetic": "/mʌnˈdeɪn/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Tầm thường, tẻ nhạt trong đời sống thường nhật",
        "definitionEn": "Lacking interest or excitement; dull; relating to the ordinary world.",
        "exampleEn": "Listening to entertaining podcasts makes mundane household chores much more enjoyable.",
        "exampleVi": "Nghe các tập podcast thú vị khiến những công việc nhà tẻ nhạt thường nhật trở nên thú vị hơn nhiều.",
        "synonyms": [
          "Ordinary",
          "Everyday",
          "Routine"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-6",
        "word": "Apprehensive",
        "phonetic": "/ˌæp.rəˈhen.sɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Lo âu, thấp thỏm về điều sắp xảy ra",
        "definitionEn": "Anxious or fearful that something bad or unpleasant will happen.",
        "exampleEn": "First-time home buyers often feel apprehensive before signing a thirty-year mortgage.",
        "exampleVi": "Những người mua nhà lần đầu thường cảm thấy thấp thỏm lo âu trước khi ký hợp đồng vay thế chấp 30 năm.",
        "synonyms": [
          "Anxious",
          "Worried",
          "Uneasy"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-7",
        "word": "Nostalgia",
        "phonetic": "/nɑːˈstæl.dʒə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nỗi hoài niệm về ký ức tươi đẹp xưa cũ",
        "definitionEn": "A sentimental longing or wistful affection for the past, typically for a period with happy personal associations.",
        "exampleEn": "Looking at childhood photo albums filled him with sweet warmth and gentle nostalgia.",
        "exampleVi": "Ngắm nhìn những cuốn album ảnh thời thơ ấu khiến anh tràn ngập sự ấm áp ngọt ngào và nỗi hoài niệm êm dịu.",
        "synonyms": [
          "Reminiscence",
          "Wistfulness",
          "Homesickness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-8",
        "word": "Exasperate",
        "phonetic": "/ɪɡˈzæs.pə.reɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Làm bực mình, khiến ai đó phát cáu",
        "definitionEn": "Irritate and frustrate someone intensely.",
        "exampleEn": "Endless unexpected traffic delays on the bridge completely exasperated the morning drivers.",
        "exampleVi": "Tình trạng kẹt xe chậm trễ bất tận trên cầu đã khiến những người lái xe buổi sáng hoàn toàn phát cáu.",
        "synonyms": [
          "Infuriate",
          "Irritate",
          "Annoy"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-9",
        "word": "Empathy",
        "phonetic": "/ˈem.pə.θi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đồng cảm, thấu cảm với cảm xúc người khác",
        "definitionEn": "The ability to understand and share the feelings of another.",
        "exampleEn": "Active listening and deep empathy are the cornerstones of healthy personal relationships.",
        "exampleVi": "Lắng nghe tích cực và sự thấu cảm sâu sắc là nền tảng của các mối quan hệ cá nhân lành mạnh.",
        "synonyms": [
          "Compassion",
          "Understanding",
          "Sensitivity"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-10",
        "word": "Serenity",
        "phonetic": "/səˈren.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự thanh bình, tĩnh lặng bình an trong tâm hồn",
        "definitionEn": "The state of being calm, peaceful, and untroubled.",
        "exampleEn": "Meditating near the tranquil mountain lake filled her with profound inner serenity.",
        "exampleVi": "Thiền định gần hồ nước trên núi tĩnh lặng đã mang lại cho cô sự bình an nội tâm sâu sắc.",
        "synonyms": [
          "Tranquility",
          "Peacefulness",
          "Calmness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-11",
        "word": "Procrastinate",
        "phonetic": "/proʊˈkræs.tə.neɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trì hoãn, chần chừ việc cần làm",
        "definitionEn": "Delay or postpone action; put off doing something.",
        "exampleEn": "It is easy to procrastinate on filing taxes until the final deadline approaches.",
        "exampleVi": "Rất dễ trì hoãn việc khai thuế cho đến khi thời hạn chót cận kề.",
        "synonyms": [
          "Delay",
          "Put off",
          "Dither"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-12",
        "word": "Punctual",
        "phonetic": "/ˈpʌŋk.tʃu.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Đúng giờ giấc, không bao giờ trễ",
        "definitionEn": "Happening or doing something at the agreed or proper time.",
        "exampleEn": "Being strictly punctual to doctor appointments demonstrates respect for the physician's schedule.",
        "exampleVi": "Đúng giờ trong các buổi hẹn khám bác sĩ thể hiện sự tôn trọng đối với thời gian của bác sĩ.",
        "synonyms": [
          "On time",
          "Prompt",
          "Timely"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-13",
        "word": "Habitual",
        "phonetic": "/həˈbɪtʃ.u.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Quen thói, thành thói quen thường lệ",
        "definitionEn": "Done or doing constantly or as a habit.",
        "exampleEn": "His habitual morning routine consists of a twenty-minute jog followed by black coffee.",
        "exampleVi": "Thói quen buổi sáng quen thuộc của anh ấy gồm 20 phút chạy bộ và một ly cà phê đen.",
        "synonyms": [
          "Customary",
          "Regular",
          "Chronic"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-14",
        "word": "Insomnia",
        "phonetic": "/ɪnˈsɑːm.ni.ə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chứng mất ngủ kinh niên",
        "definitionEn": "Habitual sleeplessness; inability to sleep.",
        "exampleEn": "Cutting down on late-night smartphone blue light is an effective remedy for mild insomnia.",
        "exampleVi": "Cắt giảm ánh sáng xanh từ điện thoại vào ban đêm là một liệu pháp hiệu quả cho chứng mất ngủ nhẹ.",
        "synonyms": [
          "Sleeplessness",
          "Restlessness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-15",
        "word": "Exhaustion",
        "phonetic": "/ɪɡˈzɑːs.tʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự kiệt sức hoàn toàn về thể xác lẫn tinh thần",
        "definitionEn": "A state of extreme physical or mental fatigue.",
        "exampleEn": "After studying through three nights for medical board finals, he collapsed from pure exhaustion.",
        "exampleVi": "Sau ba đêm thức trắng ôn thi tốt nghiệp y khoa, anh đã gục ngã vì hoàn toàn kiệt sức.",
        "synonyms": [
          "Fatigue",
          "Weariness",
          "Debility"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-16",
        "word": "Chores",
        "phonetic": "/tʃɔːrz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Việc vặt trong nhà (rửa bát, quét nhà, giặt đồ)",
        "definitionEn": "Routine tasks, especially household ones.",
        "exampleEn": "Doing weekly household chores together as a family fosters cooperation and responsibility.",
        "exampleVi": "Cùng nhau làm việc vặt gia đình hàng tuần nuôi dưỡng tinh thần hợp tác và trách nhiệm.",
        "synonyms": [
          "Housework",
          "Daily tasks",
          "Errands"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-17",
        "word": "Errand",
        "phonetic": "/ˈer.ənd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chuyến đi làm việc vặt bên ngoài (mua sắm, gửi thư)",
        "definitionEn": "A short journey undertaken in order to deliver or collect something, especially on someone's behalf.",
        "exampleEn": "I need to run a few quick errands this afternoon, including picking up my dry cleaning.",
        "exampleVi": "Chiều nay tôi cần chạy vài việc vặt, bao gồm cả việc lấy quần áo giặt là khô.",
        "synonyms": [
          "Task",
          "Trip",
          "Mission"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-18",
        "word": "Leisure",
        "phonetic": "/ˈliː.ʒɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thời gian rảnh rỗi thư giãn",
        "definitionEn": "Use of free time for enjoyment.",
        "exampleEn": "Reading fiction novels and tending the garden are his favorite leisure activities.",
        "exampleVi": "Đọc tiểu thuyết hư cấu và chăm sóc khu vườn là những hoạt động giải trí lúc rảnh rỗi yêu thích của anh ấy.",
        "synonyms": [
          "Free time",
          "Recreation",
          "Spare time"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-19",
        "word": "Commute",
        "phonetic": "/kəˈmjuːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Quãng đường và thời gian đi làm mỗi ngày",
        "definitionEn": "A regular journey of some distance to and from one's place of work.",
        "exampleEn": "His daily forty-minute train commute gives him dedicated quiet time to read books.",
        "exampleVi": "Thời gian 40 phút đi tàu đi làm mỗi ngày mang lại cho anh ấy khoảng thời gian tĩnh lặng dành riêng để đọc sách.",
        "synonyms": [
          "Daily travel",
          "Journey to work"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-20",
        "word": "Congestion",
        "phonetic": "/kənˈdʒes.tʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự tắc nghẽn giao thông đô thị",
        "definitionEn": "The state of being congested with traffic; crowding or clogging.",
        "exampleEn": "Heavy vehicular congestion during evening rush hour adds twenty minutes to the drive home.",
        "exampleVi": "Tình trạng tắc nghẽn giao thông nặng nề trong giờ cao điểm buổi tối làm chuyến lái xe về nhà lâu thêm 20 phút.",
        "synonyms": [
          "Gridlock",
          "Traffic jam",
          "Bottleneck"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-21",
        "word": "Grocery",
        "phonetic": "/ˈɡroʊ.sɚ.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thực phẩm và đồ dùng thiết yếu hàng ngày",
        "definitionEn": "Items of food in a grocery store or supermarket.",
        "exampleEn": "She ordered weekly household groceries online for same-day home delivery.",
        "exampleVi": "Cô ấy đã đặt mua thực phẩm thiết yếu hàng tuần qua mạng để được giao hàng tận nhà trong ngày.",
        "synonyms": [
          "Food items",
          "Supermarket goods"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-22",
        "word": "Neighbourhood",
        "phonetic": "/ˈneɪ.bɚ.hʊd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khu phố, xóm giềng nơi sinh sống",
        "definitionEn": "A district, especially one forming a community within a town or city.",
        "exampleEn": "The leafy green neighbourhood has safe bicycle lanes and several playground parks.",
        "exampleVi": "Khu phố rợp bóng cây xanh có các làn đường xe đạp an toàn và nhiều công viên sân chơi.",
        "synonyms": [
          "District",
          "Locality",
          "Community"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-23",
        "word": "Hospitality",
        "phonetic": "/ˌhɑː.spɪˈtæl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đón tiếp niềm nở, lòng hiếu khách",
        "definitionEn": "The friendly reception and treatment of guests or strangers.",
        "exampleEn": "The newlyweds were touched by the warm hospitality shown by their new neighbors.",
        "exampleVi": "Cặp đôi mới cưới rất cảm động trước sự đón tiếp niềm nở, ấm áp của những người hàng xóm mới.",
        "synonyms": [
          "Warm welcome",
          "Friendliness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-24",
        "word": "Recreation",
        "phonetic": "/ˌrek.riˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hoạt động giải trí, tái tạo năng lượng",
        "definitionEn": "Activity done for enjoyment when one is not working.",
        "exampleEn": "Playing badminton at the community center is an excellent form of evening recreation.",
        "exampleVi": "Chơi cầu lông tại nhà văn hóa cộng đồng là một hình thức giải trí buổi tối tuyệt vời.",
        "synonyms": [
          "Pastime",
          "Leisure activity",
          "Sport"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-25",
        "word": "Well-being",
        "phonetic": "/ˌwelˈbiː.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sức khỏe thể chất và hạnh phúc tinh thần toàn diện",
        "definitionEn": "The state of being comfortable, healthy, or happy.",
        "exampleEn": "Maintaining regular physical exercise and balanced sleep is essential for overall well-being.",
        "exampleVi": "Duy trì tập thể dục đều đặn và giấc ngủ cân bằng là điều thiết yếu cho sức khỏe và hạnh phúc toàn diện.",
        "synonyms": [
          "Wellness",
          "Health",
          "Prosperity"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-26",
        "word": "Mindfulness",
        "phonetic": "/ˈmaɪnd.fəl.nəs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự chánh niệm, hiện diện trọn vẹn trong khoảnh khắc",
        "definitionEn": "The quality or state of being conscious or aware of something; a mental state achieved by focusing awareness on the present moment.",
        "exampleEn": "Practicing ten minutes of mindful breathing lowers cortisol stress hormone levels.",
        "exampleVi": "Thực hành 10 phút hít thở chánh niệm giúp làm giảm nồng độ hormone căng thẳng cortisol.",
        "synonyms": [
          "Present awareness",
          "Consciousness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-27",
        "word": "Resilience",
        "phonetic": "/rɪˈzɪl.jəns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khả năng kiên cường phục hồi sau nghịch cảnh",
        "definitionEn": "The capacity to recover quickly from difficulties; toughness.",
        "exampleEn": "Emotional resilience enables individuals to bounce back stronger following career setbacks.",
        "exampleVi": "Khả năng phục hồi cảm xúc giúp con người đứng dậy mạnh mẽ hơn sau những thất bại trong sự nghiệp.",
        "synonyms": [
          "Hardiness",
          "Fortitude",
          "Tenacity"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-28",
        "word": "Gratitude",
        "phonetic": "/ˈɡræt̬.ə.tuːd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lòng biết ơn trân trọng cuộc sống",
        "definitionEn": "The quality of being thankful; readiness to show appreciation for and to return kindness.",
        "exampleEn": "Keeping a nightly gratitude journal helps reframe daily stressors into positive perspectives.",
        "exampleVi": "Viết nhật ký biết ơn mỗi tối giúp chuyển đổi những căng thẳng hàng ngày thành góc nhìn tích cực.",
        "synonyms": [
          "Thankfulness",
          "Appreciation",
          "Gratefulness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-29",
        "word": "Compassion",
        "phonetic": "/kəmˈpæʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lòng từ bi, trắc ẩn đối với nỗi đau người khác",
        "definitionEn": "Sympathetic pity and concern for the sufferings or misfortunes of others.",
        "exampleEn": "Showing genuine compassion towards struggling coworkers creates a supportive team culture.",
        "exampleVi": "Thể hiện lòng trắc ẩn chân thành đối với những đồng nghiệp đang gặp khó khăn sẽ tạo nên văn hóa đội ngũ hỗ trợ lẫn nhau.",
        "synonyms": [
          "Sympathy",
          "Kindness",
          "Benevolence"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-30",
        "word": "Self-Discipline",
        "phonetic": "/ˌselfˈdɪs.ə.plɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kỷ luật bản thân, tự chủ thói quen",
        "definitionEn": "The ability to control one's feelings and overcome one's weaknesses; the ability to pursue what one thinks is right despite temptations.",
        "exampleEn": "Consistent self-discipline is far more reliable than fleeting temporary motivation.",
        "exampleVi": "Tính tự kỷ luật bền bỉ đáng tin cậy hơn rất nhiều so với những nguồn động lực ngắn ngủi nhất thời.",
        "synonyms": [
          "Willpower",
          "Self-control",
          "Restraint"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-31",
        "word": "Overwhelm",
        "phonetic": "/ˌoʊ.vɚˈwelm/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Khiến ai đó quá tải ngợp lòng",
        "definitionEn": "Bury or drown beneath a huge mass of something, or defeat completely; have a strong emotional effect.",
        "exampleEn": "Juggling exams, a part-time job, and moving apartments threatened to overwhelm him.",
        "exampleVi": "Vừa lo thi cử, vừa làm việc bán thời gian lại phải chuyển nhà đe dọa sẽ khiến anh ấy quá tải.",
        "synonyms": [
          "Overburden",
          "Inundate",
          "Swamp"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-32",
        "word": "Catharsis",
        "phonetic": "/kəˈθɑːr.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự giải tỏa cảm xúc dồn nén nhẹ nhõm",
        "definitionEn": "The process of releasing, and thereby providing relief from, strong or repressed emotions.",
        "exampleEn": "Weeping openly during the poignant film provided a profound emotional catharsis.",
        "exampleVi": "Khóc nức nở khi xem bộ phim xúc động đã mang lại một sự giải tỏa cảm xúc sâu sắc và nhẹ nhõm.",
        "synonyms": [
          "Emotional release",
          "Purging"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-33",
        "word": "Introvert",
        "phonetic": "/ˈɪn.trə.vɝːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Người hướng nội thích không gian yên tĩnh",
        "definitionEn": "A shy, reticent person; someone who gets energy from solitary reflection.",
        "exampleEn": "As an introvert, she recharges her mental battery by spending a quiet evening reading.",
        "exampleVi": "Là một người hướng nội, cô ấy nạp lại năng lượng tinh thần bằng việc dành một buổi tối yên tĩnh để đọc sách.",
        "synonyms": [
          "Solitary person",
          "Quiet thinker"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-34",
        "word": "Extrovert",
        "phonetic": "/ˈek.strə.vɝːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Người hướng ngoại năng động thích giao lưu",
        "definitionEn": "An outgoing, overtly expressive person who thrives in social gatherings.",
        "exampleEn": "He is a natural extrovert who feels energized whenever surrounded by lively crowds.",
        "exampleVi": "Anh ấy là một người hướng ngoại bẩm sinh, luôn cảm thấy tràn đầy năng lượng khi được hòa mình trong đám đông sôi nổi.",
        "synonyms": [
          "Social butterfly",
          "Outgoing person"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-35",
        "word": "Ambivert",
        "phonetic": "/ˈæm.bɪ.vɝːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Người có cả nét tính cách hướng nội và hướng ngoại",
        "definitionEn": "A person who has a balance of extrovert and introvert features in their personality.",
        "exampleEn": "Most people are ambiverts, enjoying lively social events yet cherishing quiet downtime.",
        "exampleVi": "Phần lớn mọi người là người lưỡng hướng, vừa thích các sự kiện xã hội sôi động nhưng cũng trân trọng những khoảng lặng riêng tư.",
        "synonyms": [
          "Balanced personality"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-36",
        "word": "Overthink",
        "phonetic": "/ˌoʊ.vɚˈθɪŋk/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Suy nghĩ quá nhiều, phức tạp hóa vấn đề",
        "definitionEn": "Think about something too much or for too long, causing needless worry.",
        "exampleEn": "Try not to overthink the interview; you prepared thoroughly and know your material.",
        "exampleVi": "Cố gắng đừng suy nghĩ quá nhiều về buổi phỏng vấn; bạn đã chuẩn bị rất kỹ lưỡng và nắm vững kiến thức.",
        "synonyms": [
          "Obsess over",
          "Worry excessively"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-37",
        "word": "Contentment",
        "phonetic": "/kənˈtent.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự mãn nguyện, hài lòng với thực tại",
        "definitionEn": "A state of happiness and satisfaction with one's current circumstances.",
        "exampleEn": "True contentment comes from appreciating the present rather than relentlessly craving more.",
        "exampleVi": "Sự mãn nguyện thực sự đến từ việc trân trọng hiện tại thay vì không ngừng thèm muốn nhiều hơn.",
        "synonyms": [
          "Satisfaction",
          "Fulfillment",
          "Happiness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-38",
        "word": "Bittersweet",
        "phonetic": "/ˌbɪt̬.ɚˈswiːt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Buồn vui lẫn lộn, ngọt ngào xen lẫn xót xa",
        "definitionEn": "Arousing pleasure tinged with sadness or regret.",
        "exampleEn": "Saying goodbye to their childhood hometown was a poignant, bittersweet experience.",
        "exampleVi": "Nói lời tạm biệt với thị trấn tuổi thơ là một trải nghiệm nghẹn ngào, buồn vui lẫn lộn.",
        "synonyms": [
          "Mixed feelings",
          "Poignant"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-39",
        "word": "Heartwarming",
        "phonetic": "/ˈhɑːrtˌwɔːr.mɪŋ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Ấm áp cõi lòng, làm lay động tình cảm",
        "definitionEn": "Emotionally rewarding or uplifting, evoking feelings of happiness and kindness.",
        "exampleEn": "Watching the community unite to build an elderly widow's house was truly heartwarming.",
        "exampleVi": "Chứng kiến cộng đồng chung tay xây dựng ngôi nhà cho bà cụ góa bụa thực sự làm ấm lòng mọi người.",
        "synonyms": [
          "Touching",
          "Uplifting",
          "Inspiring"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-40",
        "word": "Melancholy",
        "phonetic": "/ˈmel.əŋ.kɑːl.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nỗi buồn man mác, u hoài trầm lắng",
        "definitionEn": "A feeling of pensive sadness, typically with no obvious cause.",
        "exampleEn": "A gentle autumn rain always evokes a sense of contemplative melancholy in her heart.",
        "exampleVi": "Cơn mưa thu dịu nhẹ luôn gợi lên một nỗi buồn man mác trầm lắng trong lòng cô.",
        "synonyms": [
          "Sadness",
          "Sorrow",
          "Gloom"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-41",
        "word": "Jovial",
        "phonetic": "/ˈdʒoʊ.vi.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Vui vẻ hoạt bát, luôn tươi cười rạng rỡ",
        "definitionEn": "Cheerful and friendly; hearty and good-humored.",
        "exampleEn": "Our grandfather was a jovial host who greeted every guest with infectious laughter.",
        "exampleVi": "Ông của chúng tôi là một người chủ nhà vui vẻ, luôn chào đón từng vị khách bằng tràng cười lan tỏa.",
        "synonyms": [
          "Cheerful",
          "Jolly",
          "Genial"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-42",
        "word": "Compassionate",
        "phonetic": "/kəmˈpæʃ.ən.ət/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Giàu lòng trắc ẩn và nhân ái",
        "definitionEn": "Feeling or showing sympathy and concern for others.",
        "exampleEn": "The nurse was exceptionally patient and compassionate with the elderly dementia patient.",
        "exampleVi": "Cô y tá đặc biệt kiên nhẫn và giàu lòng nhân ái với bệnh nhân cao tuổi mắc chứng sa sút trí tuệ.",
        "synonyms": [
          "Kind-hearted",
          "Empathetic",
          "Benevolent"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-43",
        "word": "Vulnerable",
        "phonetic": "/ˈvʌl.nɚ.ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Dễ bị tổn thương tinh thần hoặc thể xác",
        "definitionEn": "Susceptible to physical or emotional attack or harm.",
        "exampleEn": "Opening up about past personal failures makes us feel emotionally vulnerable.",
        "exampleVi": "Bộc bạch về những thất bại cá nhân trong quá khứ khiến chúng ta cảm thấy dễ bị tổn thương cảm xúc.",
        "synonyms": [
          "Exposed",
          "Defenseless",
          "Sensitive"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-44",
        "word": "Appreciation",
        "phonetic": "/əˌpriː.ʃiˈeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự trân trọng và ghi nhận đóng góp",
        "definitionEn": "Recognition and enjoyment of the good qualities of someone or something.",
        "exampleEn": "A handwritten thank-you note is a sincere way to express appreciation to a mentor.",
        "exampleVi": "Một lá thư cảm ơn viết tay là cách chân thành để bày tỏ sự trân trọng tới người thầy hướng dẫn.",
        "synonyms": [
          "Gratitude",
          "Recognition",
          "Thanks"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-45",
        "word": "Optimistic",
        "phonetic": "/ˌɑːp.təˈmɪs.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Lạc quan, luôn nhìn về hướng tích cực",
        "definitionEn": "Hopeful and confident about the future.",
        "exampleEn": "Despite recent setbacks, the entrepreneur remained optimistic about the company's prospects.",
        "exampleVi": "Bất chấp những trở ngại gần đây, doanh nhân vẫn lạc quan về triển vọng tương lai của công ty.",
        "synonyms": [
          "Hopeful",
          "Positive",
          "Upbeat"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-46",
        "word": "Pessimistic",
        "phonetic": "/ˌpes.əˈmɪs.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Bi quan, luôn nhìn vào mặt tiêu cực",
        "definitionEn": "Tending to see the worst aspect of things or believe that the worst will happen.",
        "exampleEn": "Constantly reading sensational doom-and-gloom news makes people overly pessimistic.",
        "exampleVi": "Liên tục đọc các tin tức giật gân u ám bi đát khiến con người trở nên quá đỗi bi quan.",
        "synonyms": [
          "Cynical",
          "Negative",
          "Gloomy"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-47",
        "word": "Introversion",
        "phonetic": "/ˌɪn.trəˈvɝː.ʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khuynh hướng tính cách hướng nội",
        "definitionEn": "The quality of being shy and quiet, and preferring to spend time alone rather than with others.",
        "exampleEn": "Introversion should not be mistaken for social anxiety or lack of confidence.",
        "exampleVi": "Khuynh hướng hướng nội không nên bị nhầm lẫn với chứng lo âu xã hội hay sự thiếu tự tin.",
        "synonyms": [
          "Quietness",
          "Reservedness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-48",
        "word": "Extroversion",
        "phonetic": "/ˌek.strəˈvɝː.ʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khuynh hướng tính cách hướng ngoại",
        "definitionEn": "The quality of being outgoing and socially confident.",
        "exampleEn": "Extroversion helps individuals comfortably strike up conversations with total strangers.",
        "exampleVi": "Tính hướng ngoại giúp mọi người thoải mái bắt chuyện với những người hoàn toàn xa lạ.",
        "synonyms": [
          "Outgoingness",
          "Sociability"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-49",
        "word": "Assertive",
        "phonetic": "/əˈsɝː.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Quyết đoán, biết bảo vệ quan điểm mà không thô lỗ",
        "definitionEn": "Having or showing a confident and forceful personality.",
        "exampleEn": "Learning to be politely assertive allows you to set firm healthy boundaries with coworkers.",
        "exampleVi": "Học cách quyết đoán một cách lịch thiệp cho phép bạn thiết lập những ranh giới lành mạnh và vững chắc với đồng nghiệp.",
        "synonyms": [
          "Confident",
          "Decisive",
          "Firm"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-50",
        "word": "Boundary",
        "phonetic": "/ˈbaʊn.dər.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Ranh giới cá nhân cần tôn trọng",
        "definitionEn": "A line that marks the limits of an area; an emotional or psychological limit.",
        "exampleEn": "Setting clear personal boundaries is essential to protect your mental health from burnout.",
        "exampleVi": "Thiết lập các ranh giới cá nhân rõ ràng là điều thiết yếu để bảo vệ sức khỏe tâm thần của bạn khỏi kiệt sức.",
        "synonyms": [
          "Limit",
          "Border",
          "Threshold"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-51",
        "word": "Burnout",
        "phonetic": "/ˈbɝːn.aʊt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tình trạng kiệt sức hoàn toàn do làm việc quá tải",
        "definitionEn": "Physical or mental collapse caused by overwork or stress.",
        "exampleEn": "Working eighty-hour weeks without a vacation inevitably leads to severe workplace burnout.",
        "exampleVi": "Làm việc 80 tiếng một tuần mà không nghỉ phép chắc chắn sẽ dẫn đến tình trạng kiệt quệ nghiêm trọng nơi công sở.",
        "synonyms": [
          "Exhaustion",
          "Overwork fatigue",
          "Collapse"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-52",
        "word": "Recharge",
        "phonetic": "/ˌriːˈtʃɑːrdʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Nạp lại năng lượng thể chất và tinh thần",
        "definitionEn": "Refill with electrical power; regain energy and enthusiasm.",
        "exampleEn": "A peaceful weekend walk through the forest helped him recharge after a grueling sprint.",
        "exampleVi": "Chuyến đi dạo cuối tuần thanh bình qua cánh rừng đã giúp anh nạp lại năng lượng sau một chu kỳ làm việc căng thẳng.",
        "synonyms": [
          "Refresh",
          "Regenerate",
          "Invigorate"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-53",
        "word": "Disconnect",
        "phonetic": "/ˌdɪs.kəˈnekt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Ngắt kết nối kỹ thuật số để thư giãn",
        "definitionEn": "Break the connection of something; unplug from electronic communications.",
        "exampleEn": "It is deeply therapeutic to disconnect from all social media notifications over the weekend.",
        "exampleVi": "Việc ngắt kết nối khỏi tất cả các thông báo mạng xã hội trong dịp cuối tuần mang lại cảm giác xoa dịu sâu sắc.",
        "synonyms": [
          "Unplug",
          "Detach",
          "Sever"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-54",
        "word": "Detox",
        "phonetic": "/ˈdiː.tɑːks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thải độc cơ thể hoặc cai nghiện kỹ thuật số",
        "definitionEn": "A process or period of time in which one abstains from or rids the body of toxic substances; digital detox.",
        "exampleEn": "A seven-day digital detox helped her rediscover the serene joy of paper book reading.",
        "exampleVi": "Một đợt thanh lọc kỹ thuật số kéo dài 7 ngày đã giúp cô tìm lại niềm vui thanh bình khi đọc những cuốn sách giấy.",
        "synonyms": [
          "Purification",
          "Cleansing"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-55",
        "word": "Simplicity",
        "phonetic": "/sɪmˈplɪs.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lối sống đơn giản, giản dị thanh tao",
        "definitionEn": "The quality or condition of being easy to understand or do; freedom from complexity.",
        "exampleEn": "Embracing voluntary simplicity allowed the family to live clutter-free and debt-free.",
        "exampleVi": "Áp dụng lối sống giản dị tự nguyện đã giúp gia đình sống một cuộc sống gọn gàng và không vướng bận nợ nần.",
        "synonyms": [
          "Clarity",
          "Minimalism",
          "Purity"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-56",
        "word": "Minimalism",
        "phonetic": "/ˈmɪn.ə.məl.ɪ.zəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chủ nghĩa tối giản, bớt đồ đạc hướng vào giá trị",
        "definitionEn": "A lifestyle philosophy that advocates living with fewer material possessions.",
        "exampleEn": "Practicing minimalism taught him to focus on enriching experiences rather than hoarding things.",
        "exampleVi": "Thực hành chủ nghĩa tối giản đã dạy anh tập trung vào những trải nghiệm phong phú thay vì tích trữ của cải đồ đạc.",
        "synonyms": [
          "Simple living",
          "Essentialism"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-57",
        "word": "Routine",
        "phonetic": "/ruːˈtiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Lịch trình sinh hoạt cố định thường ngày",
        "definitionEn": "A sequence of actions regularly followed; a fixed program.",
        "exampleEn": "A consistent evening routine of warm chamomile tea and dim lights prepares the brain for restful sleep.",
        "exampleVi": "Lịch trình buổi tối quen thuộc với trà hoa cúc ấm và ánh đèn mờ giúp não bộ chuẩn bị cho giấc ngủ sâu.",
        "synonyms": [
          "Schedule",
          "Habit",
          "Pattern"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-58",
        "word": "Spontaneity",
        "phonetic": "/ˌspɑːn.təˈneɪ.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tính ngẫu hứng tự nhiên không gò bó",
        "definitionEn": "The condition of being spontaneous; spontaneous behavior or action.",
        "exampleEn": "Injecting a bit of spontaneity into long-term relationships keeps romance alive and playful.",
        "exampleVi": "Thêm một chút ngẫu hứng vào những mối quan hệ lâu năm sẽ giữ cho sự lãng mạn luôn tươi mới và tràn ngập niềm vui.",
        "synonyms": [
          "Impulsiveness",
          "Naturalness",
          "Whim"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-59",
        "word": "Perspective",
        "phonetic": "/pɚˈspek.tɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Góc nhìn, lăng kính nhân sinh quan",
        "definitionEn": "A particular attitude toward or way of regarding something; a point of view.",
        "exampleEn": "Traveling alone to distant foreign cultures broadens your perspective on what truly matters in life.",
        "exampleVi": "Đi du lịch một mình tới những nền văn hóa xa xôi giúp mở rộng góc nhìn của bạn về những điều thực sự quan trọng trong cuộc đời.",
        "synonyms": [
          "Point of view",
          "Outlook",
          "Stance"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-60",
        "word": "Humility",
        "phonetic": "/hjuːˈmɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đức tính khiêm tốn nhún nhường",
        "definitionEn": "A modest or low view of one's own importance; humbleness.",
        "exampleEn": "Great leaders balance supreme executive confidence with genuine intellectual humility.",
        "exampleVi": "Những nhà lãnh đạo vĩ đại luôn cân bằng giữa sự tự tin điều hành tối cao với đức tính khiêm tốn học hỏi chân thành.",
        "synonyms": [
          "Modesty",
          "Humbleness",
          "Meekness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-61",
        "word": "Generosity",
        "phonetic": "/ˌdʒen.əˈrɑː.sə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lòng hào phóng rộng lượng",
        "definitionEn": "The quality of being kind and generous.",
        "exampleEn": "Her quiet generosity in sponsoring disadvantaged children's tuition inspired the community.",
        "exampleVi": "Lòng hảo tâm thầm lặng của cô khi tài trợ học phí cho trẻ em có hoàn cảnh khó khăn đã truyền cảm hứng cho cả cộng đồng.",
        "synonyms": [
          "Magnanimity",
          "Charity",
          "Kindness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-62",
        "word": "Integrity",
        "phonetic": "/ɪnˈteɡ.rə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự chính trực, nhất quán đạo đức dù không ai nhìn",
        "definitionEn": "The quality of being honest and having strong moral principles.",
        "exampleEn": "True moral integrity means doing the right ethical thing even when nobody is watching.",
        "exampleVi": "Sự chính trực đạo đức đích thực nghĩa là luôn làm điều đúng đắn ngay cả khi không có ai nhìn thấy.",
        "synonyms": [
          "Honesty",
          "Probity",
          "Uprightness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-63",
        "word": "Authenticity",
        "phonetic": "/ˌɑː.θenˈtɪs.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tính chân thật, sống thật với chính mình",
        "definitionEn": "The quality of being authentic; genuineness.",
        "exampleEn": "People are naturally drawn to leaders who exhibit vulnerability and emotional authenticity.",
        "exampleVi": "Mọi người tự nhiên bị thu hút bởi những nhà lãnh đạo dám thể hiện sự cởi mở và tính chân thực cảm xúc.",
        "synonyms": [
          "Genuineness",
          "Originality",
          "Realness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-64",
        "word": "Courage",
        "phonetic": "/ˈkɝː.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lòng dũng cảm dám đối mặt nỗi sợ hãi",
        "definitionEn": "The ability to do something that frightens one; bravery.",
        "exampleEn": "It takes immense courage to walk away from a comfortable career to pursue your true passion.",
        "exampleVi": "Cần có một lòng dũng cảm to lớn để từ bỏ một sự nghiệp êm ấm nhằm theo đuổi đam mê đích thực của mình.",
        "synonyms": [
          "Bravery",
          "Valor",
          "Fearlessness"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-65",
        "word": "Perseverance",
        "phonetic": "/ˌpɝː.səˈvɪr.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lòng kiên trì bền bỉ không bỏ cuộc",
        "definitionEn": "Persistence in doing something despite difficulty or delay in achieving success.",
        "exampleEn": "Through sheer stubborn perseverance, he mastered the complex violin concerto after two years of daily practice.",
        "exampleVi": "Nhờ lòng kiên trì bền bỉ phi thường, anh đã thành thạo bản hòa tấu vĩ cầm phức tạp sau hai năm khổ luyện mỗi ngày.",
        "synonyms": [
          "Persistence",
          "Tenacity",
          "Diligence"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-66",
        "word": "Patience",
        "phonetic": "/ˈpeɪ.ʃəns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lòng kiên nhẫn nhẫn nại",
        "definitionEn": "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.",
        "exampleEn": "Gardening teaches the quiet virtue of patience as seeds slowly sprout over weeks.",
        "exampleVi": "Làm vườn dạy cho chúng ta đức tính kiên nhẫn lặng lẽ khi từng hạt giống từ từ nảy mầm qua nhiều tuần lễ.",
        "synonyms": [
          "Endurance",
          "Tolerance",
          "Forbearance"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-67",
        "word": "Curiosity",
        "phonetic": "/ˌkjʊr.iˈɑː.sə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tính hiếu kỳ, khát khao tò mò học hỏi",
        "definitionEn": "A strong desire to know or learn something.",
        "exampleEn": "Lifelong intellectual curiosity keeps our neural synapses sharp and active well into old age.",
        "exampleVi": "Khát khao học hỏi trí tuệ suốt đời giữ cho các khớp thần kinh của chúng ta luôn sắc bén và linh hoạt cho đến khi về già.",
        "synonyms": [
          "Inquisitiveness",
          "Interest",
          "Wonder"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-68",
        "word": "Adaptability",
        "phonetic": "/əˌdæp.təˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khả năng thích ứng linh hoạt trước thời cuộc",
        "definitionEn": "The quality of being able to adjust to new conditions or unexpected environments.",
        "exampleEn": "In a rapidly automating workplace, continuous learning and adaptability are prime survival skills.",
        "exampleVi": "Trong môi trường làm việc tự động hóa nhanh chóng, khả năng học tập liên tục và thích ứng linh hoạt là những kỹ năng sinh tồn hàng đầu.",
        "synonyms": [
          "Flexibility",
          "Versatility",
          "Agility"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-69",
        "word": "Creativity",
        "phonetic": "/ˌkriː.eɪˈtɪv.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tính sáng tạo tạo ra cái mới độc đáo",
        "definitionEn": "The use of imagination or original ideas to create something; inventiveness.",
        "exampleEn": "Playing with building blocks stimulates spatial imagination and boundless childhood creativity.",
        "exampleVi": "Chơi các khối xếp hình kích thích trí tưởng tượng không gian và sự sáng tạo vô biên của trẻ nhỏ.",
        "synonyms": [
          "Inventiveness",
          "Imagination",
          "Originality"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-70",
        "word": "Intuition",
        "phonetic": "/ˌɪn.tuːˈɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trực giác linh cảm mách bảo",
        "definitionEn": "The ability to understand something immediately, without the need for conscious reasoning.",
        "exampleEn": "Experienced chess grandmasters rely on sharp intuition to select winning moves in seconds.",
        "exampleVi": "Những đại kiện tướng cờ vua giàu kinh nghiệm dựa vào trực giác nhạy bén để chọn nước đi chiến thắng chỉ trong tích tắc.",
        "synonyms": [
          "Instinct",
          "Gut feeling",
          "Insight"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-71",
        "word": "Vibe",
        "phonetic": "/vaɪb/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bầu không khí hoặc cảm giác toát ra từ nơi chốn/người",
        "definitionEn": "A person's emotional state or the atmosphere of a place as communicated to and felt by others.",
        "exampleEn": "The cozy neighborhood coffee shop has a wonderfully relaxing, creative vibe.",
        "exampleVi": "Quán cà phê ấm cúng trong khu phố mang lại một bầu không khí thư thái và sáng tạo tuyệt vời.",
        "synonyms": [
          "Atmosphere",
          "Aura",
          "Mood"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-72",
        "word": "Serendipity",
        "phonetic": "/ˌser.ənˈdɪp.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự may mắn tình cờ bất ngờ thú vị",
        "definitionEn": "The occurrence and development of events by chance in a happy or beneficial way.",
        "exampleEn": "Finding her dream job while randomly chatting at an airport was a stroke of pure serendipity.",
        "exampleVi": "Tìm được công việc mơ ước khi đang trò chuyện ngẫu nhiên tại sân bay là một sự may mắn tình cờ kỳ diệu.",
        "synonyms": [
          "Chance",
          "Happy accident",
          "Fluke"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-73",
        "word": "Clutter",
        "phonetic": "/ˈklʌt̬.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đồ đạc bừa bộn lộn xộn",
        "definitionEn": "A collection of things lying about in an untidy mass.",
        "exampleEn": "Clearing physical desk clutter instantly improves mental clarity and workplace productivity.",
        "exampleVi": "Dọn dẹp đồ đạc bừa bộn trên bàn làm việc giúp cải thiện ngay tức thì sự sáng suốt tinh thần và năng suất làm việc.",
        "synonyms": [
          "Disorder",
          "Mess",
          "Jumble"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-74",
        "word": "De-clutter",
        "phonetic": "/diːˈklʌt̬.ɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Dọn dẹp sắp xếp lại đồ đạc ngăn nắp",
        "definitionEn": "Remove unnecessary items from an untidy or overcrowded place.",
        "exampleEn": "Dedicate thirty minutes this Saturday to de-clutter your closet and donate unused garments.",
        "exampleVi": "Hãy dành 30 phút thứ Bảy này để dọn dẹp tủ quần áo và quyên góp những món đồ không dùng đến.",
        "synonyms": [
          "Tidy up",
          "Organize",
          "Purge"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-75",
        "word": "Sanctuary",
        "phonetic": "/ˈsæŋk.tʃu.er.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nơi chốn bình yên, chốn trú ẩn an toàn",
        "definitionEn": "A place of safety or refuge; a nature reserve.",
        "exampleEn": "Her quiet book-filled study serves as a serene sanctuary from the loud city streets.",
        "exampleVi": "Phòng đọc sách yên tĩnh ngập tràn sách của cô đóng vai trò như một chốn trú ẩn thanh bình tránh xa những đường phố ồn ào.",
        "synonyms": [
          "Haven",
          "Refuge",
          "Safe space"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-76",
        "word": "Solitude",
        "phonetic": "/ˈsɑː.lə.tuːd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự cô độc thanh tịnh tự nguyện để tái tạo",
        "definitionEn": "The state or situation of being alone, especially when pleasant and rejuvenating.",
        "exampleEn": "He cherishes the early morning solitude before the rest of the household awakens.",
        "exampleVi": "Anh ấy trân trọng sự tĩnh lặng thanh tịnh buổi sớm mai trước khi cả gia đình thức giấc.",
        "synonyms": [
          "Peaceful isolation",
          "Aloneness",
          "Quiet"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-77",
        "word": "Companionship",
        "phonetic": "/kəmˈpæn.jən.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tình bạn bè đồng hành ấm áp",
        "definitionEn": "A feeling of fellowship or friendship.",
        "exampleEn": "Adopting a rescue golden retriever brought loyal companionship to the lonely pensioner.",
        "exampleVi": "Nhận nuôi một chú chó golden retriever đã mang lại tình bạn đồng hành trung thành cho người về hưu cô đơn.",
        "synonyms": [
          "Fellowship",
          "Friendship",
          "Camaraderie"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-78",
        "word": "Camaraderie",
        "phonetic": "/ˌkæm.əˈrɑː.dɚ.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tình đồng chí đồng đội gắn bó keo sơn",
        "definitionEn": "Mutual trust and friendship among people who spend a lot of time together.",
        "exampleEn": "The intense software bootcamp forged enduring camaraderie among the graduating engineers.",
        "exampleVi": "Khóa huấn luyện phần mềm cường độ cao đã tạo nên tình đồng đội gắn bó keo sơn giữa các kỹ sư tốt nghiệp.",
        "synonyms": [
          "Brotherhood",
          "Comradeship",
          "Solidarity"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-79",
        "word": "Nourish",
        "phonetic": "/ˈnɝː.ɪʃ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Nuôi dưỡng cơ thể hoặc tâm hồn",
        "definitionEn": "Provide with the food or other substances necessary for growth, health, and good condition.",
        "exampleEn": "Wholesome home-cooked soups nourish both the physical body and tired spirit.",
        "exampleVi": "Những bát súp nấu tại nhà bổ dưỡng nuôi dưỡng cả thể chất lẫn tinh thần mệt mỏi.",
        "synonyms": [
          "Feed",
          "Nurture",
          "Sustain"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-80",
        "word": "Nurture",
        "phonetic": "/ˈnɝː.tʃɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Chăm sóc ấp ủ nuôi lớn tài năng/mối quan hệ",
        "definitionEn": "Care for and encourage the growth or development of someone or something.",
        "exampleEn": "Parents should patiently nurture their children's innate musical and artistic curiosities.",
        "exampleVi": "Cha mẹ nên kiên nhẫn nuôi dưỡng trí tò mò âm nhạc và nghệ thuật bẩm sinh của con cái.",
        "synonyms": [
          "Foster",
          "Cultivate",
          "Care for"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-81",
        "word": "Cherish",
        "phonetic": "/ˈtʃer.ɪʃ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trân quý nâng niu yêu thương hết mực",
        "definitionEn": "Protect and care for someone lovingly; hold something dear in your heart.",
        "exampleEn": "Always cherish peaceful family dinners around the kitchen table after long days apart.",
        "exampleVi": "Hãy luôn trân quý những bữa cơm gia đình đầm ấm quanh bàn ăn sau những ngày dài xa cách.",
        "synonyms": [
          "Treasure",
          "Prize",
          "Hold dear"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-82",
        "word": "Reconcile",
        "phonetic": "/ˈrek.ən.saɪl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Hòa giải mâu thuẫn, làm lành sau bất đồng",
        "definitionEn": "Restore friendly relations between parties; make one belief compatible with another.",
        "exampleEn": "The two estranged siblings met over coffee to forgive past grievances and reconcile.",
        "exampleVi": "Hai anh em từng xa cách đã gặp nhau bên ly cà phê để tha thứ những khúc mắc xưa cũ và làm lành.",
        "synonyms": [
          "Make peace",
          "Harmonize",
          "Settle differences"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-83",
        "word": "Harmony",
        "phonetic": "/ˈhɑːr.mə.ni/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự hòa thuận, hòa hợp êm ấm",
        "definitionEn": "The state of being in agreement or concord; pleasing arrangement of parts.",
        "exampleEn": "Living in harmony with nature inspires mindful consumption and reduced waste.",
        "exampleVi": "Sống chan hòa với thiên nhiên truyền cảm hứng cho việc tiêu dùng có ý thức và giảm thiểu rác thải.",
        "synonyms": [
          "Peace",
          "Concord",
          "Agreement"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-84",
        "word": "Fulfill",
        "phonetic": "/fʊlˈfɪl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Làm tròn bổn phận, hiện thực hóa ước mơ",
        "definitionEn": "Achieve or realize something desired, promised, or predicted; satisfy requirements.",
        "exampleEn": "Completing a marathon fulfilled her lifelong athletic aspiration.",
        "exampleVi": "Hoàn thành cự ly marathon đã hiện thực hóa khát vọng thể thao cả đời của cô.",
        "synonyms": [
          "Accomplish",
          "Achieve",
          "Realize"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-85",
        "word": "Fulfillment",
        "phonetic": "/fʊlˈfɪl.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cảm giác viên mãn tròn đầy hạnh phúc",
        "definitionEn": "Satisfaction or happiness as a result of fully developing one's abilities or character.",
        "exampleEn": "Mentoring underprivileged teenagers brings him deep personal fulfillment and purpose.",
        "exampleVi": "Hướng dẫn các thanh thiếu niên có hoàn cảnh khó khăn mang lại cho anh cảm giác viên mãn và mục đích sống sâu sắc.",
        "synonyms": [
          "Satisfaction",
          "Contentment",
          "Attainment"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-86",
        "word": "Purpose",
        "phonetic": "/ˈpɝː.pəs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Mục đích, lẽ sống định hướng cuộc đời",
        "definitionEn": "The reason for which something is done or created or for which something exists.",
        "exampleEn": "Discovering your true life purpose gives you boundless drive to wake up excited every morning.",
        "exampleVi": "Khám phá ra lẽ sống đích thực của cuộc đời mang lại cho bạn động lực vô biên để thức dậy hào hứng mỗi sáng.",
        "synonyms": [
          "Meaning",
          "Goal",
          "Aim"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-87",
        "word": "Vibrant",
        "phonetic": "/ˈvaɪ.brənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Sôi động rực rỡ tràn đầy nhựa sống",
        "definitionEn": "Full of energy and enthusiasm; bright and striking.",
        "exampleEn": "The evening street night market is filled with vibrant colors, live music, and sizzling street food.",
        "exampleVi": "Khu chợ đêm đường phố ngập tràn những sắc màu rực rỡ, âm nhạc sống động và những món ăn vỉa hè xèo xèo thơm phức.",
        "synonyms": [
          "Lively",
          "Energetic",
          "Spirited"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-88",
        "word": "Tranquil",
        "phonetic": "/ˈtræŋ.kwɪl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thanh bình êm ả tĩnh mịch",
        "definitionEn": "Free from disturbance; calm and serene.",
        "exampleEn": "Rowing a wooden canoe on the tranquil morning lake washes away all worldly stress.",
        "exampleVi": "Chèo chiếc thuyền gỗ trên mặt hồ thanh bình buổi sớm mai gột rửa mọi căng thẳng hồng trần.",
        "synonyms": [
          "Serene",
          "Peaceful",
          "Placid"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-89",
        "word": "Bustling",
        "phonetic": "/ˈbʌs.lɪŋ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Nhộn nhịp tấp nập ngược xuôi",
        "definitionEn": "Full of energetic and noisy activity.",
        "exampleEn": "Ben Thanh Market is a bustling commercial center thronged with shoppers from dawn to dusk.",
        "exampleVi": "Chợ Bến Thành là trung tâm thương mại nhộn nhịp tấp nập người mua sắm từ sáng sớm tới đêm muộn.",
        "synonyms": [
          "Hectic",
          "Lively",
          "Crowded"
        ],
        "topicId": "daily"
      },
      {
        "id": "daily-90",
        "word": "Quaint",
        "phonetic": "/kweɪnt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Cổ kính mộc mạc duyên dáng",
        "definitionEn": "Attractively unusual or old-fashioned.",
        "exampleEn": "The riverside village is famous for its quaint wooden bridges and lantern-lit stone alleyways.",
        "exampleVi": "Ngôi làng ven sông nổi tiếng với những cây cầu gỗ mộc mạc cổ kính và những ngõ đá thắp đèn lồng duyên dáng.",
        "synonyms": [
          "Charming",
          "Old-world",
          "Picturesque"
        ],
        "topicId": "daily"
      }
    ]
  },
  {
    "id": "health",
    "title": "Y Tế & Sức Khỏe Toàn Diện",
    "slug": "health",
    "icon": "HeartPulse",
    "color": "text-rose-500",
    "bgColor": "bg-rose-50 dark:bg-rose-950/40",
    "borderColor": "border-rose-200 dark:border-rose-800",
    "description": "Y học lâm sàng, dinh dưỡng học, thể lực thể thao, miễn dịch và phòng ngừa bệnh tật",
    "wordCount": 85,
    "words": [
      {
        "id": "health-1",
        "word": "Diagnosis",
        "phonetic": "/ˌdaɪ.əɡˈnoʊ.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự chẩn đoán bệnh lý của bác sĩ",
        "definitionEn": "The identification of the nature of an illness or other problem by examination of the symptoms.",
        "exampleEn": "Early and accurate medical diagnosis significantly enhances cancer survival rates.",
        "exampleVi": "Chẩn đoán y khoa sớm và chính xác giúp tăng đáng kể tỷ lệ sống sót sau ung thư.",
        "synonyms": [
          "Identification",
          "Detection",
          "Assessment"
        ],
        "topicId": "health"
      },
      {
        "id": "health-2",
        "word": "Cardiovascular",
        "phonetic": "/ˌkɑːr.di.oʊˈvæs.kjə.lɚ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về hệ tim mạch",
        "definitionEn": "Relating to the heart and blood vessels.",
        "exampleEn": "Aerobic swimming and brisk walking promote optimal cardiovascular health.",
        "exampleVi": "Bơi lội nhịp điệu và đi bộ nhanh thúc đẩy sức khỏe tim mạch tối ưu.",
        "synonyms": [
          "Cardiac",
          "Heart-related",
          "Circulatory"
        ],
        "topicId": "health"
      },
      {
        "id": "health-3",
        "word": "Prescription",
        "phonetic": "/prɪˈskrɪp.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đơn thuốc do bác sĩ kê",
        "definitionEn": "An instruction written by a medical practitioner that authorizes a patient to be provided a medicine.",
        "exampleEn": "Take this written prescription to the licensed hospital pharmacy to collect your antibiotics.",
        "exampleVi": "Hãy mang đơn thuốc viết tay này tới nhà thuốc bệnh viện được cấp phép để lấy thuốc kháng sinh.",
        "synonyms": [
          "Rx",
          "Doctor's order",
          "Medical order"
        ],
        "topicId": "health"
      },
      {
        "id": "health-4",
        "word": "Symptom",
        "phonetic": "/ˈsɪmp.təm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Triệu chứng dấu hiệu của bệnh",
        "definitionEn": "A physical or mental feature which is regarded as indicating a condition of disease.",
        "exampleEn": "Persistent dry coughing and high fever are hallmark symptoms of respiratory flu.",
        "exampleVi": "Ho khan dai dẳng và sốt cao là những triệu chứng tiêu biểu của bệnh cúm đường hô hấp.",
        "synonyms": [
          "Sign",
          "Indication",
          "Manifestation"
        ],
        "topicId": "health"
      },
      {
        "id": "health-5",
        "word": "Immunity",
        "phonetic": "/ɪˈmjuː.nə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khả năng miễn dịch chống lại bệnh tật",
        "definitionEn": "The ability of an organism to resist a particular infection or toxin by the action of specific antibodies.",
        "exampleEn": "Vaccination stimulates the production of antibodies, conferring lifelong protective immunity.",
        "exampleVi": "Tiêm chủng kích thích sản sinh kháng thể, mang lại khả năng miễn dịch bảo vệ suốt đời.",
        "synonyms": [
          "Resistance",
          "Immunization",
          "Protection"
        ],
        "topicId": "health"
      },
      {
        "id": "health-6",
        "word": "Nutritious",
        "phonetic": "/nuːˈtrɪʃ.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Bổ dưỡng, giàu giá trị dinh dưỡng",
        "definitionEn": "Nourishing, efficient as food; containing substances which your body needs to grow and be healthy.",
        "exampleEn": "A colorful bowl of fresh berries, nuts, and yogurt is a delightfully nutritious breakfast.",
        "exampleVi": "Một bát quả mọng tươi, hạt và sữa chua thơm ngon là một bữa sáng vô cùng bổ dưỡng.",
        "synonyms": [
          "Nourishing",
          "Wholesome",
          "Healthful"
        ],
        "topicId": "health"
      },
      {
        "id": "health-7",
        "word": "Sedentary",
        "phonetic": "/ˈsed.ən.ter.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thụ động, ít vận động ngồi một chỗ nhiều",
        "definitionEn": "Tending to spend much time seated; somewhat inactive.",
        "exampleEn": "A sedentary desk lifestyle elevates the long-term risk of developing chronic metabolic disorders.",
        "exampleVi": "Lối sống ngồi bàn làm việc thụ động làm tăng nguy cơ mắc các rối loạn chuyển hóa mãn tính lâu dài.",
        "synonyms": [
          "Inactive",
          "Desk-bound",
          "Stationary"
        ],
        "topicId": "health"
      },
      {
        "id": "health-8",
        "word": "Hypertension",
        "phonetic": "/ˌhaɪ.pɚˈten.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chứng huyết áp cao",
        "definitionEn": "Abnormally high blood pressure.",
        "exampleEn": "Reducing dietary sodium salt intake is a vital lifestyle modification for managing hypertension.",
        "exampleVi": "Cắt giảm lượng muối natri trong chế độ ăn là thay đổi lối sống thiết yếu để kiểm soát huyết áp cao.",
        "synonyms": [
          "High blood pressure",
          "Arterial pressure"
        ],
        "topicId": "health"
      },
      {
        "id": "health-9",
        "word": "Therapeutic",
        "phonetic": "/ˌθer.əˈpjuː.t̬ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Có tính trị liệu, chữa lành",
        "definitionEn": "Relating to the healing of disease; having a good effect on body or mind.",
        "exampleEn": "Soaking in natural mineral hot springs has proven therapeutic benefits for aching joints.",
        "exampleVi": "Ngâm mình trong suối khoáng nóng tự nhiên đã được chứng minh mang lại lợi ích trị liệu cho các khớp đau nhức.",
        "synonyms": [
          "Healing",
          "Curative",
          "Restorative"
        ],
        "topicId": "health"
      },
      {
        "id": "health-10",
        "word": "Chronic",
        "phonetic": "/ˈkrɑː.nɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Mãn tính, kéo dài dai dẳng",
        "definitionEn": "Persisting for a long time or constantly recurring.",
        "exampleEn": "Physical rehabilitation exercises help patients manage chronic lower back pain without surgery.",
        "exampleVi": "Các bài tập phục hồi chức năng giúp bệnh nhân kiểm soát chứng đau thắt lưng mãn tính mà không cần phẫu thuật.",
        "synonyms": [
          "Persistent",
          "Long-term",
          "Protracted"
        ],
        "topicId": "health"
      },
      {
        "id": "health-11",
        "word": "Acute",
        "phonetic": "/əˈkjuːt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Cấp tính, bùng phát dữ dội tức thì",
        "definitionEn": "Present or experienced to a severe or intense degree; illness having a rapid onset.",
        "exampleEn": "The patient was rushed into the intensive care unit with acute appendicitis.",
        "exampleVi": "Bệnh nhân đã được đưa khẩn cấp vào phòng chăm sóc đặc biệt vì viêm ruột thừa cấp tính.",
        "synonyms": [
          "Severe",
          "Critical",
          "Sharp"
        ],
        "topicId": "health"
      },
      {
        "id": "health-12",
        "word": "Antibiotic",
        "phonetic": "/ˌæn.t̬i.baɪˈɑː.tɪk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thuốc kháng sinh tiêu diệt vi khuẩn",
        "definitionEn": "A medicine that inhibits the growth of or destroys microorganisms.",
        "exampleEn": "Complete the full course of antibiotics prescribed by your doctor even if you feel better.",
        "exampleVi": "Hãy uống đủ liều lượng kháng sinh theo đơn của bác sĩ ngay cả khi bạn đã cảm thấy khỏe hơn.",
        "synonyms": [
          "Antimicrobial",
          "Bactericide"
        ],
        "topicId": "health"
      },
      {
        "id": "health-13",
        "word": "Vaccine",
        "phonetic": "/vækˈsiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Vắc-xin phòng ngừa bệnh truyền nhiễm",
        "definitionEn": "A substance used to stimulate the production of antibodies and provide immunity against disease.",
        "exampleEn": "The discovery of the polio vaccine saved millions of children from lifelong paralysis.",
        "exampleVi": "Việc phát hiện ra vắc-xin bại liệt đã cứu hàng triệu trẻ em khỏi bị tàn tật suốt đời.",
        "synonyms": [
          "Immunization",
          "Inoculation"
        ],
        "topicId": "health"
      },
      {
        "id": "health-14",
        "word": "Epidemic",
        "phonetic": "/ˌep.əˈdem.ɪk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dịch bệnh bùng phát trên diện rộng",
        "definitionEn": "A widespread occurrence of an infectious disease in a community at a particular time.",
        "exampleEn": "Public health officials took swift measures to contain the local dengue fever epidemic.",
        "exampleVi": "Các quan chức y tế công cộng đã thực hiện các biện pháp nhanh chóng để kiềm chế dịch sốt xuất huyết tại địa phương.",
        "synonyms": [
          "Outbreak",
          "Plague",
          "Contagion"
        ],
        "topicId": "health"
      },
      {
        "id": "health-15",
        "word": "Pandemic",
        "phonetic": "/pænˈdem.ɪk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Đại dịch toàn cầu xuyên biên giới",
        "definitionEn": "An outbreak of a pandemic disease prevalent over a whole country or the world.",
        "exampleEn": "Global cooperation in vaccine manufacturing was critical during the recent respiratory pandemic.",
        "exampleVi": "Sự hợp tác toàn cầu trong việc sản xuất vắc-xin là điều tối quan trọng trong đợt đại dịch đường hô hấp vừa qua.",
        "synonyms": [
          "Global outbreak",
          "Universal contagion"
        ],
        "topicId": "health"
      },
      {
        "id": "health-16",
        "word": "Metabolism",
        "phonetic": "/məˈtæb.əl.ɪ.zəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quá trình trao đổi chất của cơ thể",
        "definitionEn": "The chemical processes that occur within a living organism in order to maintain life.",
        "exampleEn": "High-intensity interval workouts temporarily boost your resting basal metabolism.",
        "exampleVi": "Các bài tập cường độ cao ngắt quãng tạm thời thúc đẩy quá trình trao đổi chất cơ bản lúc nghỉ ngơi của bạn.",
        "synonyms": [
          "Energy conversion",
          "Metabolic rate"
        ],
        "topicId": "health"
      },
      {
        "id": "health-17",
        "word": "Pathogen",
        "phonetic": "/ˈpæθ.ə.dʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Mầm bệnh, tác nhân gây bệnh (vi khuẩn, virus)",
        "definitionEn": "A bacterium, virus, or other microorganism that can cause disease.",
        "exampleEn": "Handwashing with warm antibacterial soap removes harmful pathogens from skin surfaces.",
        "exampleVi": "Rửa tay bằng xà phòng kháng khuẩn ấm giúp loại bỏ các mầm bệnh có hại khỏi bề mặt da.",
        "synonyms": [
          "Infectious agent",
          "Germ",
          "Microbe"
        ],
        "topicId": "health"
      },
      {
        "id": "health-18",
        "word": "Allergy",
        "phonetic": "/ˈæl.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Dị ứng với thực phẩm hoặc thời tiết",
        "definitionEn": "A damaging immune response by the body to a substance, especially a particular food, pollen, fur, or dust.",
        "exampleEn": "He carries an epinephrine injector due to a severe life-threatening peanut allergy.",
        "exampleVi": "Anh ấy luôn mang theo ống tiêm epinephrine do bị dị ứng đậu phộng nặng có thể đe dọa tính mạng.",
        "synonyms": [
          "Hypersensitivity",
          "Allergic reaction"
        ],
        "topicId": "health"
      },
      {
        "id": "health-19",
        "word": "Rehabilitation",
        "phonetic": "/ˌriː.həˌbɪl.əˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phục hồi chức năng sau chấn thương",
        "definitionEn": "The action of restoring someone to health or normal life through training and therapy.",
        "exampleEn": "Six months of physical rehabilitation restored full mobility to the athlete's injured knee.",
        "exampleVi": "Sáu tháng phục hồi chức năng thể chất đã phục hồi hoàn toàn khả năng vận động cho khớp gối bị thương của vận động viên.",
        "synonyms": [
          "Rehab",
          "Recovery therapy"
        ],
        "topicId": "health"
      },
      {
        "id": "health-20",
        "word": "Convalescence",
        "phonetic": "/ˌkɑːn.vəˈles.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thời kỳ dưỡng bệnh hồi phục sức lực",
        "definitionEn": "Time spent recovering from an illness or medical treatment; recuperation.",
        "exampleEn": "A quiet seaside cottage provided the ideal restful setting for her post-surgery convalescence.",
        "exampleVi": "Ngôi nhà nhỏ yên tĩnh ven biển mang đến không gian nghỉ ngơi lý tưởng cho thời kỳ dưỡng bệnh sau phẫu thuật của bà.",
        "synonyms": [
          "Recuperation",
          "Recovery period"
        ],
        "topicId": "health"
      },
      {
        "id": "health-21",
        "word": "Prognosis",
        "phonetic": "/prɑːɡˈnoʊ.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tiên lượng diễn biến bệnh lý",
        "definitionEn": "The likely course of a medical condition; forecast.",
        "exampleEn": "Because the tumor was detected in stage one, the physician gave an overwhelmingly positive prognosis.",
        "exampleVi": "Vì khối u được phát hiện ở giai đoạn một, bác sĩ đã đưa ra tiên lượng vô cùng tích cực.",
        "synonyms": [
          "Forecast",
          "Medical prediction"
        ],
        "topicId": "health"
      },
      {
        "id": "health-22",
        "word": "Incision",
        "phonetic": "/ɪnˈsɪʒ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vết rạch mổ phẫu thuật",
        "definitionEn": "A surgical cut made in skin or flesh.",
        "exampleEn": "Laparoscopic surgery requires only tiny puncture incisions, accelerating post-operative healing.",
        "exampleVi": "Phẫu thuật nội soi chỉ cần những vết rạch rạch siêu nhỏ, giúp đẩy nhanh quá trình hồi phục sau phẫu thuật.",
        "synonyms": [
          "Surgical cut",
          "Slit"
        ],
        "topicId": "health"
      },
      {
        "id": "health-23",
        "word": "Anesthesia",
        "phonetic": "/ˌæn.əsˈθiː.ʒə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thuốc gây mê hoặc gây tê phẫu thuật",
        "definitionEn": "Insensitivity to pain, especially as artificially induced by the administration of gases or the injection of drugs.",
        "exampleEn": "The anesthesiologist monitored heart rhythms closely throughout the entire general anesthesia procedure.",
        "exampleVi": "Bác sĩ gây mê đã theo dõi nhịp tim chặt chẽ trong suốt toàn bộ quá trình gây mê toàn thân.",
        "synonyms": [
          "Narcosis",
          "Sedation"
        ],
        "topicId": "health"
      },
      {
        "id": "health-24",
        "word": "Cardiologist",
        "phonetic": "/ˌkɑːr.diˈɑː.lə.dʒɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bác sĩ chuyên khoa tim mạch",
        "definitionEn": "A doctor who specializes in the study or treatment of heart diseases and heart abnormalities.",
        "exampleEn": "The cardiologist advised the patient to undergo a coronary angiography scan.",
        "exampleVi": "Bác sĩ tim mạch đã khuyên bệnh nhân nên thực hiện chụp mạch vành.",
        "synonyms": [
          "Heart specialist"
        ],
        "topicId": "health"
      },
      {
        "id": "health-25",
        "word": "Neurologist",
        "phonetic": "/nʊˈrɑː.lə.dʒɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bác sĩ chuyên khoa thần kinh não bộ",
        "definitionEn": "A specialist in the anatomy, functions, and organic disorders of nerves and the nervous system.",
        "exampleEn": "The neurologist conducted an electroencephalogram to investigate the patient's recurring migraines.",
        "exampleVi": "Bác sĩ thần kinh đã thực hiện điện não đồ để khảo sát các cơn đau nửa đầu tái phát của bệnh nhân.",
        "synonyms": [
          "Nerve specialist",
          "Brain doctor"
        ],
        "topicId": "health"
      },
      {
        "id": "health-26",
        "word": "Orthopedics",
        "phonetic": "/ˌɔːr.θəˈpiː.dɪks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoa chấn thương chỉnh hình xương khớp",
        "definitionEn": "The branch of medicine dealing with the correction of deformities of bones or muscles.",
        "exampleEn": "The hospital's department of orthopedics is internationally celebrated for hip replacement surgeries.",
        "exampleVi": "Khoa chấn thương chỉnh hình của bệnh viện nổi tiếng quốc tế về các ca phẫu thuật thay khớp háng.",
        "synonyms": [
          "Bone surgery",
          "Musculoskeletal medicine"
        ],
        "topicId": "health"
      },
      {
        "id": "health-27",
        "word": "Pediatrician",
        "phonetic": "/ˌpiː.di.əˈtrɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bác sĩ chuyên khoa nhi",
        "definitionEn": "A medical practitioner specializing in children and their diseases.",
        "exampleEn": "The caring pediatrician weighed the newborn and administered the first scheduled childhood vaccine.",
        "exampleVi": "Bác sĩ nhi khoa chu đáo đã cân em bé sơ sinh và tiêm mũi vắc-xin theo lịch đầu tiên.",
        "synonyms": [
          "Child doctor",
          "Baby specialist"
        ],
        "topicId": "health"
      },
      {
        "id": "health-28",
        "word": "Dermatologist",
        "phonetic": "/ˌdɝː.məˈtɑː.lə.dʒɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bác sĩ chuyên khoa da liễu",
        "definitionEn": "A medical practitioner qualified to diagnose and treat skin disorders.",
        "exampleEn": "The dermatologist prescribed a gentle topical retinoid cream to clear stubborn acne.",
        "exampleVi": "Bác sĩ da liễu đã kê một loại kem bôi retinoid dịu nhẹ để làm sạch mụn trứng cá cứng đầu.",
        "synonyms": [
          "Skin specialist"
        ],
        "topicId": "health"
      },
      {
        "id": "health-29",
        "word": "Psychiatrist",
        "phonetic": "/səˈkaɪ.ə.trɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bác sĩ chuyên khoa tâm thần điều trị thuốc",
        "definitionEn": "A medical practitioner specializing in the diagnosis and treatment of mental illness.",
        "exampleEn": "Unlike psychologists, licensed psychiatrists can prescribe clinical psychiatric medications.",
        "exampleVi": "Không giống như các nhà tâm lý học, các bác sĩ tâm thần được cấp phép có thể kê đơn các loại thuốc tâm thần lâm sàng.",
        "synonyms": [
          "Mental health doctor",
          "Alienist"
        ],
        "topicId": "health"
      },
      {
        "id": "health-30",
        "word": "Hygiene",
        "phonetic": "/ˈhaɪ.dʒiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Vệ sinh phòng bệnh cá nhân",
        "definitionEn": "Conditions or practices conducive to maintaining health and preventing disease, especially through cleanliness.",
        "exampleEn": "Maintaining immaculate oral hygiene by flossing daily prevents periodontal gum disease.",
        "exampleVi": "Duy trì vệ sinh răng miệng sạch sẽ bằng cách dùng chỉ nha khoa hàng ngày giúp ngăn ngừa bệnh viêm nướu nha chu.",
        "synonyms": [
          "Cleanliness",
          "Sanitation"
        ],
        "topicId": "health"
      },
      {
        "id": "health-31",
        "word": "Sanitation",
        "phonetic": "/ˌsæn.əˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hệ thống vệ sinh xử lý nước thải công cộng",
        "definitionEn": "Conditions relating to public health, especially the provision of clean drinking water and adequate sewage disposal.",
        "exampleEn": "Improving urban sanitation infrastructure dramatically lowered infant mortality in cholera zones.",
        "exampleVi": "Cải thiện cơ sở hạ tầng vệ sinh đô thị đã làm giảm đáng kể tỷ lệ tử vong ở trẻ sơ sinh tại các vùng có dịch tả.",
        "synonyms": [
          "Public hygiene",
          "Sewerage system"
        ],
        "topicId": "health"
      },
      {
        "id": "health-32",
        "word": "Deficiency",
        "phonetic": "/dɪˈfɪʃ.ən.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự thiếu hụt dưỡng chất/vitamin",
        "definitionEn": "A lack or shortage of something, especially a vitamin or mineral in the body.",
        "exampleEn": "Iron deficiency is the leading clinical cause of fatigue and microcytic anemia in young women.",
        "exampleVi": "Thiếu hụt sắt là nguyên nhân lâm sàng hàng đầu gây mệt mỏi và thiếu máu hồng cầu nhỏ ở phụ nữ trẻ.",
        "synonyms": [
          "Shortage",
          "Lack",
          "Inadequacy"
        ],
        "topicId": "health"
      },
      {
        "id": "health-33",
        "word": "Supplements",
        "phonetic": "/ˈsʌp.lə.mənts/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thực phẩm chức năng bổ sung dinh dưỡng",
        "definitionEn": "A substance taken to remedy the deficiency or enhance the effect of diet.",
        "exampleEn": "Elderly individuals living in cloudy northern latitudes frequently take daily vitamin D supplements.",
        "exampleVi": "Người cao tuổi sống ở những vĩ độ phía bắc nhiều mây thường xuyên uống bổ sung vitamin D hàng ngày.",
        "synonyms": [
          "Nutritional additives",
          "Dietary aids"
        ],
        "topicId": "health"
      },
      {
        "id": "health-34",
        "word": "Hydration",
        "phonetic": "/haɪˈdreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cung cấp đủ nước cho cơ thể",
        "definitionEn": "The process of causing something to absorb water; maintaining fluid balance in the body.",
        "exampleEn": "Optimal bodily hydration improves skin elasticity, kidney filtration, and cognitive alertness.",
        "exampleVi": "Cung cấp đủ nước cho cơ thể giúp cải thiện độ đàn hồi của da, quá trình lọc của thận và sự tỉnh táo của nhận thức.",
        "synonyms": [
          "Fluid intake",
          "Moisturization"
        ],
        "topicId": "health"
      },
      {
        "id": "health-35",
        "word": "Dehydration",
        "phonetic": "/ˌdiː.haɪˈdreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tình trạng mất nước nguy hiểm",
        "definitionEn": "A dangerous lack of water in the body resulting from inadequate intake of fluids or excessive loss.",
        "exampleEn": "Severe dehydration during a marathon can precipitate heat exhaustion and kidney strain.",
        "exampleVi": "Mất nước nghiêm trọng trong một cuộc chạy marathon có thể dẫn đến kiệt sức vì nóng và căng thẳng cho thận.",
        "synonyms": [
          "Fluid deficit",
          "Water loss"
        ],
        "topicId": "health"
      },
      {
        "id": "health-36",
        "word": "Obesity",
        "phonetic": "/oʊˈbiː.sə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bệnh béo phì quá mức",
        "definitionEn": "The state of being grossly fat or overweight, causing severe health risks.",
        "exampleEn": "Childhood obesity has surged due to the proliferation of hyper-processed fast foods.",
        "exampleVi": "Béo phì ở trẻ em đã tăng vọt do sự gia tăng của các loại thực phẩm chế biến sẵn quá mức.",
        "synonyms": [
          "Adiposity",
          "Excess weight",
          "Corpulence"
        ],
        "topicId": "health"
      },
      {
        "id": "health-37",
        "word": "Cholesterol",
        "phonetic": "/kəˈles.tə.rɑːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chất béo cholesterol trong máu",
        "definitionEn": "A compound of the sterol type found in most body tissues, important in cell membranes but harmful in excess.",
        "exampleEn": "High levels of LDL cholesterol can build up inside arterial walls, forming dangerous plaques.",
        "exampleVi": "Nồng độ cholesterol LDL cao có thể tích tụ bên trong thành động mạch, hình thành các mảng bám nguy hiểm.",
        "synonyms": [
          "Blood lipid",
          "Sterol"
        ],
        "topicId": "health"
      },
      {
        "id": "health-38",
        "word": "Antioxidant",
        "phonetic": "/ˌæn.t̬iˈɑːk.sɪ.dənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chất chống oxy hóa ngăn ngừa lão hóa tế bào",
        "definitionEn": "A substance that inhibits oxidation, especially one used to counteract the deterioration of stored food products or remove potentially damaging oxidizing agents in a living organism.",
        "exampleEn": "Green tea and dark cocoa are celebrated sources of potent natural polyphenol antioxidants.",
        "exampleVi": "Trà xanh và ca cao đen là những nguồn cung cấp chất chống oxy hóa polyphenol tự nhiên mạnh mẽ được tôn vinh.",
        "synonyms": [
          "Free radical scavenger",
          "Preservative"
        ],
        "topicId": "health"
      },
      {
        "id": "health-39",
        "word": "Calorie",
        "phonetic": "/ˈkæl.ɚ.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Đơn vị đo năng lượng calo từ thức ăn",
        "definitionEn": "The energy needed to raise the temperature of 1 gram of water through 1 °C, now frequently used to measure food energy.",
        "exampleEn": "Tracking your daily caloric balance determines whether you gain, lose, or maintain body weight.",
        "exampleVi": "Theo dõi sự cân bằng lượng calo hàng ngày sẽ quyết định xem bạn tăng, giảm hay duy trì cân nặng của cơ thể.",
        "synonyms": [
          "Energy unit",
          "Food energy"
        ],
        "topicId": "health"
      },
      {
        "id": "health-40",
        "word": "Endurance",
        "phonetic": "/ɪnˈdʊr.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sức bền thể lực và độ dẻo dai",
        "definitionEn": "The fact or power of enduring an unpleasant or difficult process or situation without giving way.",
        "exampleEn": "Long-distance cycling develops exceptional cardiovascular stamina and muscular endurance.",
        "exampleVi": "Đạp xe đường dài giúp phát triển sức bền tim mạch vượt trội và độ dẻo dai của cơ bắp.",
        "synonyms": [
          "Stamina",
          "Staying power",
          "Fortitude"
        ],
        "topicId": "health"
      },
      {
        "id": "health-41",
        "word": "Stamina",
        "phonetic": "/ˈstæm.ə.nə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thể lực dẻo dai bền bỉ",
        "definitionEn": "The ability to sustain prolonged physical or mental effort.",
        "exampleEn": "Elite marathon athletes possess extraordinary respiratory stamina and mental fortitude.",
        "exampleVi": "Các vận động viên marathon ưu tú sở hữu thể lực hô hấp phi thường và sự kiên cường về tinh thần.",
        "synonyms": [
          "Endurance",
          "Toughness",
          "Energy"
        ],
        "topicId": "health"
      },
      {
        "id": "health-42",
        "word": "Flexibility",
        "phonetic": "/ˌflek.səˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Độ dẻo dai linh hoạt của cơ bắp",
        "definitionEn": "The quality of bending easily without breaking; the ability of joints to move through a full range of motion.",
        "exampleEn": "Practicing gentle Hatha yoga every morning enhances joint mobility and spine flexibility.",
        "exampleVi": "Thực hành Hatha yoga nhẹ nhàng mỗi sáng giúp tăng cường khả năng vận động của khớp và sự linh hoạt của cột sống.",
        "synonyms": [
          "Suppleness",
          "Elasticity",
          "Mobility"
        ],
        "topicId": "health"
      },
      {
        "id": "health-43",
        "word": "Strength Training",
        "phonetic": "/ˈstreŋθ ˌtreɪ.nɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tập luyện sức mạnh kháng lực cơ bắp",
        "definitionEn": "A type of physical exercise specializing in the use of resistance to induce muscular contraction.",
        "exampleEn": "Regular strength training preserves vital bone density and lean skeletal muscle mass as we age.",
        "exampleVi": "Tập luyện sức kháng lực thường xuyên giúp bảo tồn mật độ xương thiết yếu và khối lượng cơ xương nạc khi chúng ta già đi.",
        "synonyms": [
          "Resistance training",
          "Weightlifting"
        ],
        "topicId": "health"
      },
      {
        "id": "health-44",
        "word": "Aerobic",
        "phonetic": "/erˈoʊ.bɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Có oxy, bài tập hiếu khí tăng nhịp tim",
        "definitionEn": "Relating to, involving, or requiring free oxygen; exercise designed to improve the oxygen system.",
        "exampleEn": "Running, cycling, and rowing are classic examples of cardiovascular aerobic conditioning.",
        "exampleVi": "Chạy bộ, đạp xe và chèo thuyền là những ví dụ kinh điển về việc rèn luyện hiếu khí cho tim mạch.",
        "synonyms": [
          "Oxygen-using",
          "Cardio"
        ],
        "topicId": "health"
      },
      {
        "id": "health-45",
        "word": "Anaerobic",
        "phonetic": "/ˌæn.erˈoʊ.bɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Yếm khí, bài tập bùng nổ ngắn không cần oxy",
        "definitionEn": "Relating to or requiring an absence of free oxygen; exercise consisting of brief, intense bursts.",
        "exampleEn": "Sprinting 100 meters relies entirely on rapid anaerobic energy pathways within muscle fibers.",
        "exampleVi": "Chạy nước rút 100 mét phụ thuộc hoàn toàn vào các con đường năng lượng yếm khí nhanh chóng bên trong các sợi cơ.",
        "synonyms": [
          "Oxygen-independent",
          "High-intensity"
        ],
        "topicId": "health"
      },
      {
        "id": "health-46",
        "word": "Wellness",
        "phonetic": "/ˈwel.nəs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Lối sống khỏe mạnh toàn diện thân tâm trí",
        "definitionEn": "The state of being in good health, especially as an actively pursued goal.",
        "exampleEn": "The corporate wellness program offers employees free access to yoga and mental health therapy.",
        "exampleVi": "Chương trình chăm sóc sức khỏe toàn diện của công ty cung cấp cho nhân viên quyền truy cập miễn phí vào các buổi tập yoga và trị liệu tâm lý.",
        "synonyms": [
          "Holistic health",
          "Well-being"
        ],
        "topicId": "health"
      },
      {
        "id": "health-47",
        "word": "Longevity",
        "phonetic": "/lɑːnˈdʒev.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tuổi thọ cao, sự sống lâu dài",
        "definitionEn": "Long life; the fact of having a long existence.",
        "exampleEn": "Mediterranean diets rich in cold-pressed extra virgin olive oil are strongly correlated with longevity.",
        "exampleVi": "Chế độ ăn Địa Trung Hải giàu dầu ô liu nguyên chất ép lạnh có mối tương quan chặt chẽ với tuổi thọ cao.",
        "synonyms": [
          "Long life",
          "Durability"
        ],
        "topicId": "health"
      },
      {
        "id": "health-48",
        "word": "Addiction",
        "phonetic": "/əˈdɪk.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sự nghiện ngập (thuốc lá, rượu, cờ bạc)",
        "definitionEn": "The fact or condition of being addicted to a particular substance, thing, or activity.",
        "exampleEn": "Nicotine addiction can develop within just a few weeks of habitual cigarette smoking.",
        "exampleVi": "Chứng nghiện nicotin có thể phát triển chỉ trong vài tuần hút thuốc lá theo thói quen.",
        "synonyms": [
          "Dependency",
          "Habit",
          "Obsession"
        ],
        "topicId": "health"
      },
      {
        "id": "health-49",
        "word": "Detoxification",
        "phonetic": "/diːˌtɑːk.sə.fəˈkeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quá trình đào thải độc tố của gan và thận",
        "definitionEn": "The physiological or medicinal removal of toxic substances from a living organism.",
        "exampleEn": "The human liver performs intricate biochemical detoxification twenty-four hours a day.",
        "exampleVi": "Gan người thực hiện quá trình giải độc sinh hóa phức tạp suốt 24 giờ một ngày.",
        "synonyms": [
          "Detox",
          "Purification",
          "Cleansing"
        ],
        "topicId": "health"
      },
      {
        "id": "health-50",
        "word": "Remission",
        "phonetic": "/rɪˈmɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Giai đoạn thuyên giảm tạm thời của bệnh ung thư",
        "definitionEn": "A temporary diminution of the severity of disease or pain.",
        "exampleEn": "After six grueling rounds of chemotherapy, the patient was overjoyed to hear she was in full remission.",
        "exampleVi": "Sau 6 đợt hóa trị mệt mỏi, bệnh nhân đã vỡ òa vui sướng khi biết tin bệnh của cô đã thuyên giảm hoàn toàn.",
        "synonyms": [
          "Abatement",
          "Relief",
          "Lull"
        ],
        "topicId": "health"
      },
      {
        "id": "health-51",
        "word": "Relapse",
        "phonetic": "/ˈriː.læps/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự tái phát bệnh sau khi đã đỡ",
        "definitionEn": "A deterioration in someone's state of health after a temporary improvement.",
        "exampleEn": "Patients must continue taking maintenance medications to prevent an unexpected clinical relapse.",
        "exampleVi": "Bệnh nhân phải tiếp tục dùng thuốc duy trì để ngăn ngừa sự tái phát lâm sàng bất ngờ.",
        "synonyms": [
          "Recurrence",
          "Worsening",
          "Regression"
        ],
        "topicId": "health"
      },
      {
        "id": "health-52",
        "word": "Palliative",
        "phonetic": "/ˈpæl.i.ə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Giảm nhẹ triệu chứng mà không trị dứt điểm",
        "definitionEn": "Relieving pain without dealing with the cause of the condition; palliative care.",
        "exampleEn": "Palliative hospice care focuses on providing compassionate comfort and pain relief to terminal patients.",
        "exampleVi": "Chăm sóc xoa dịu tại các viện chăm sóc cuối đời tập trung vào việc mang lại sự thoải mái đầy nhân ái và giảm đau cho bệnh nhân giai đoạn cuối.",
        "synonyms": [
          "Soothing",
          "Alleviating",
          "Comforting"
        ],
        "topicId": "health"
      },
      {
        "id": "health-53",
        "word": "Inoculate",
        "phonetic": "/ɪˈnɑː.kjə.leɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Tiêm chủng vắc-xin tạo miễn dịch",
        "definitionEn": "Treat a person or an animal with a vaccine to produce immunity against a disease.",
        "exampleEn": "Public health teams traveled to remote rural villages to inoculate children against measles.",
        "exampleVi": "Các đội y tế công cộng đã đến các làng quê hẻo lánh để tiêm chủng cho trẻ em phòng bệnh sởi.",
        "synonyms": [
          "Vaccinate",
          "Immunize"
        ],
        "topicId": "health"
      },
      {
        "id": "health-54",
        "word": "Quarantine",
        "phonetic": "/ˈkwɔːr.ən.tiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cách ly kiểm dịch y tế để ngăn lây lan",
        "definitionEn": "A state, period, or place of isolation in which people or animals that have been exposed to infectious disease are placed.",
        "exampleEn": "International cargo travelers exposed to yellow fever were placed in a fourteen-day medical quarantine.",
        "exampleVi": "Những người đi lại chở hàng quốc tế tiếp xúc với bệnh sốt vàng da đã được đưa vào cách ly y tế trong 14 ngày.",
        "synonyms": [
          "Isolation",
          "Seclusion",
          "Lockdown"
        ],
        "topicId": "health"
      },
      {
        "id": "health-55",
        "word": "Contagious",
        "phonetic": "/kənˈteɪ.dʒəs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Dễ lây nhiễm qua tiếp xúc thông thường",
        "definitionEn": "Spread from one person or organism to another by direct or indirect contact.",
        "exampleEn": "The common rhinovirus is exceptionally contagious in crowded air-conditioned offices.",
        "exampleVi": "Virus gây cảm lạnh thông thường đặc biệt dễ lây lan trong các văn phòng đông người có máy lạnh.",
        "synonyms": [
          "Infectious",
          "Transmissible",
          "Catching"
        ],
        "topicId": "health"
      },
      {
        "id": "health-56",
        "word": "Genetic",
        "phonetic": "/dʒəˈnet̬.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về di truyền gen",
        "definitionEn": "Relating to genes or heredity.",
        "exampleEn": "Advances in molecular CRISPR tools allow scientists to repair rare genetic defects in human embryos.",
        "exampleVi": "Những tiến bộ trong các công cụ phân tử CRISPR cho phép các nhà khoa học sửa chữa các khiếm khuyết di truyền hiếm gặp trong phôi người.",
        "synonyms": [
          "Hereditary",
          "Inborn",
          "Biological"
        ],
        "topicId": "health"
      },
      {
        "id": "health-57",
        "word": "Hereditary",
        "phonetic": "/həˈred.ə.ter.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Có tính di truyền từ đời cha mẹ",
        "definitionEn": "Conferred by or based on inheritance; determined by genetic factors and able to be passed on from parents.",
        "exampleEn": "Certain forms of early cardiac arrhythmia are strictly hereditary within specific family lineages.",
        "exampleVi": "Một số dạng loạn nhịp tim sớm hoàn toàn mang tính di truyền trong các dòng họ gia đình cụ thể.",
        "synonyms": [
          "Inherited",
          "Familial",
          "Inborn"
        ],
        "topicId": "health"
      },
      {
        "id": "health-58",
        "word": "Congenital",
        "phonetic": "/kənˈdʒen.ə.t̬əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Bẩm sinh có từ khi chào đời",
        "definitionEn": "Present from birth, especially of a disease or physical abnormality.",
        "exampleEn": "The surgeon successfully repaired the infant's congenital atrial heart defect.",
        "exampleVi": "Bác sĩ phẫu thuật đã sửa chữa thành công khiếm khuyết tim thông liên nhĩ bẩm sinh của trẻ sơ sinh.",
        "synonyms": [
          "Inborn",
          "Innate",
          "Native"
        ],
        "topicId": "health"
      },
      {
        "id": "health-59",
        "word": "Trauma",
        "phonetic": "/ˈtrɑː.mə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chấn thương thể xác nặng hoặc sang chấn tâm lý",
        "definitionEn": "A deeply distressing or disturbing experience, or physical injury.",
        "exampleEn": "Emergency paramedics stabilized the patient's blunt abdominal trauma before hospital transport.",
        "exampleVi": "Các nhân viên y tế khẩn cấp đã ổn định chấn thương bụng kín của bệnh nhân trước khi vận chuyển đến bệnh viện.",
        "synonyms": [
          "Injury",
          "Damage",
          "Shock"
        ],
        "topicId": "health"
      },
      {
        "id": "health-60",
        "word": "Concussion",
        "phonetic": "/kənˈkʌʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chấn động não sau cú va đập mạnh",
        "definitionEn": "Temporary unconsciousness or confusion caused by a blow on the head.",
        "exampleEn": "The football player was removed from the field to be medically evaluated for a suspected cerebral concussion.",
        "exampleVi": "Cầu thủ bóng đá đã được đưa ra khỏi sân để được đánh giá y tế về một chấn động não đáng ngờ.",
        "synonyms": [
          "Brain injury",
          "Head trauma"
        ],
        "topicId": "health"
      },
      {
        "id": "health-61",
        "word": "Fracture",
        "phonetic": "/ˈfræk.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vết nứt, rạn hoặc gãy xương",
        "definitionEn": "The cracking or breaking of a hard object or material, especially a bone.",
        "exampleEn": "An X-ray scan revealed a hairline bone fracture across the athlete's right wrist.",
        "exampleVi": "Hình ảnh chụp X-quang cho thấy một vết rạn xương hình sợi tóc trên cổ tay phải của vận động viên.",
        "synonyms": [
          "Break",
          "Crack",
          "Rupture"
        ],
        "topicId": "health"
      },
      {
        "id": "health-62",
        "word": "Sprain",
        "phonetic": "/spreɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bong gân mắt cá hoặc khớp",
        "definitionEn": "Wrench or twist the ligaments of an ankle, wrist, or other joint violently so as to cause pain and swelling.",
        "exampleEn": "Applying cold ice packs reduces painful swelling after an acute ankle sprain.",
        "exampleVi": "Chườm túi đá lạnh giúp giảm sưng đau sau một đợt bong gân mắt cá chân cấp tính.",
        "synonyms": [
          "Twist",
          "Strain",
          "Pull"
        ],
        "topicId": "health"
      },
      {
        "id": "health-63",
        "word": "Inflammation",
        "phonetic": "/ˌɪn.fləˈmeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tình trạng viêm sưng tấy đau nhức",
        "definitionEn": "A localized physical condition in which part of the body becomes reddened, swollen, hot, and often painful.",
        "exampleEn": "Anti-inflammatory drugs were administered to decrease swelling and inflammation around the spinal cord.",
        "exampleVi": "Thuốc chống viêm đã được dùng để giảm sưng và viêm xung quanh tủy sống.",
        "synonyms": [
          "Swelling",
          "Soreness",
          "Infection"
        ],
        "topicId": "health"
      },
      {
        "id": "health-64",
        "word": "Bandage",
        "phonetic": "/ˈbæn.dɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Băng gạc y tế quấn vết thương",
        "definitionEn": "A strip of material used to bind up a wound or to protect an injured part of the body.",
        "exampleEn": "The nurse wrapped a sterile cotton bandage firmly around the stitched wound.",
        "exampleVi": "Cô y tá đã quấn một dải băng bông vô trùng chắc chắn xung quanh vết thương đã được khâu.",
        "synonyms": [
          "Dressing",
          "Gauze",
          "Wrap"
        ],
        "topicId": "health"
      },
      {
        "id": "health-65",
        "word": "Sterile",
        "phonetic": "/ˈster.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Vô trùng tuyệt đối không có vi khuẩn",
        "definitionEn": "Free from bacteria or other living microorganisms; entirely clean.",
        "exampleEn": "Surgeons must scrub their hands thoroughly before entering the sterile operating theater.",
        "exampleVi": "Các bác sĩ phẫu thuật phải rửa tay kỹ lưỡng trước khi bước vào phòng mổ vô trùng.",
        "synonyms": [
          "Antiseptic",
          "Disinfected",
          "Aseptic"
        ],
        "topicId": "health"
      },
      {
        "id": "health-66",
        "word": "Disinfectant",
        "phonetic": "/ˌdɪs.ɪnˈfek.tənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Dung dịch khử trùng sát khuẩn",
        "definitionEn": "A chemical liquid that destroys bacteria.",
        "exampleEn": "Hospital staff regularly wipe down intensive care bedrails with high-potency disinfectant.",
        "exampleVi": "Nhân viên bệnh viện thường xuyên lau các thanh chắn giường chăm sóc đặc biệt bằng chất khử trùng có hiệu lực cao.",
        "synonyms": [
          "Antiseptic",
          "Sanitizer",
          "Germicide"
        ],
        "topicId": "health"
      },
      {
        "id": "health-67",
        "word": "Syringe",
        "phonetic": "/səˈrɪndʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Ống tiêm tiêm thuốc hoặc lấy máu",
        "definitionEn": "A tube with a nozzle and piston for sucking in and ejecting liquid in a thin stream, used for injections.",
        "exampleEn": "The laboratory phlebotomist used a disposable sterile syringe to draw blood for the lipid panel.",
        "exampleVi": "Kỹ thuật viên phòng thí nghiệm đã dùng ống tiêm vô trùng dùng một lần để lấy máu làm xét nghiệm bộ mỡ.",
        "synonyms": [
          "Needle",
          "Injector"
        ],
        "topicId": "health"
      },
      {
        "id": "health-68",
        "word": "Scalpel",
        "phonetic": "/ˈskæl.pəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dao mổ phẫu thuật sắc bén",
        "definitionEn": "A knife with a small, sharp, sometimes detachable blade, used by a surgeon.",
        "exampleEn": "The neurosurgeon guided the micro-scalpel with sub-millimeter precision under a high-powered microscope.",
        "exampleVi": "Bác sĩ phẫu thuật thần kinh đã điều khiển dao mổ vi phẫu với độ chính xác dưới một milimet dưới kính hiển vi công suất cao.",
        "synonyms": [
          "Surgical blade",
          "Lancet"
        ],
        "topicId": "health"
      },
      {
        "id": "health-69",
        "word": "Stethoscope",
        "phonetic": "/ˈsteθ.ə.skoʊp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Ống nghe tim phổi của bác sĩ",
        "definitionEn": "A medical instrument for listening to the action of someone's heart or breathing.",
        "exampleEn": "The physician placed the cold metal stethoscope against the child's chest to listen to heart sounds.",
        "exampleVi": "Bác sĩ đặt ống nghe kim loại lạnh vào ngực đứa trẻ để lắng nghe tiếng tim.",
        "synonyms": [
          "Auscultator"
        ],
        "topicId": "health"
      },
      {
        "id": "health-70",
        "word": "Thermometer",
        "phonetic": "/θɚˈmɑː.mə.t̬ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Nhiệt kế đo thân nhiệt",
        "definitionEn": "An instrument for measuring and indicating temperature, especially one consisting of a graduated glass tube.",
        "exampleEn": "The digital infrared thermometer registered a body temperature of 38.5 degrees Celsius.",
        "exampleVi": "Nhiệt kế hồng ngoại kỹ thuật số ghi nhận nhiệt độ cơ thể là 38,5 độ C.",
        "synonyms": [
          "Temperature gauge"
        ],
        "topicId": "health"
      },
      {
        "id": "health-71",
        "word": "Ointment",
        "phonetic": "/ˈɔɪnt.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thuốc mỡ bôi ngoài da",
        "definitionEn": "A smooth oily substance that is rubbed on the skin for medicinal purposes or as a cosmetic.",
        "exampleEn": "Gently apply the soothing herbal ointment to the sunburned skin three times a day.",
        "exampleVi": "Nhẹ nhàng thoa thuốc mỡ thảo dược làm dịu lên vùng da bị cháy nắng ba lần một ngày.",
        "synonyms": [
          "Salve",
          "Balm",
          "Cream"
        ],
        "topicId": "health"
      },
      {
        "id": "health-72",
        "word": "Capsule",
        "phonetic": "/ˈkæp.suːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Viên thuốc con nhộng dễ nuốt",
        "definitionEn": "A small case or container, especially a round or cylindrical one, containing a dose of medicine.",
        "exampleEn": "Swallow two antibiotic capsules with a large glass of pure water after every meal.",
        "exampleVi": "Uống hai viên nang kháng sinh với một ly nước lọc lớn sau mỗi bữa ăn.",
        "synonyms": [
          "Pill",
          "Tablet"
        ],
        "topicId": "health"
      },
      {
        "id": "health-73",
        "word": "Tablet",
        "phonetic": "/ˈtæb.lət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Viên thuốc nén",
        "definitionEn": "A small disc or cylinder of compressed solid matter, typically containing a dose of medicine.",
        "exampleEn": "Take one pain-relieving tablet every six hours as needed for dental discomfort.",
        "exampleVi": "Uống một viên thuốc giảm đau mỗi 6 giờ một lần khi cần nếu cảm thấy khó chịu ở răng.",
        "synonyms": [
          "Pill",
          "Lozenge"
        ],
        "topicId": "health"
      },
      {
        "id": "health-74",
        "word": "Dosage",
        "phonetic": "/ˈdoʊ.sɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Liều lượng thuốc dùng mỗi lần",
        "definitionEn": "The size or frequency of a dose of a medicine or drug.",
        "exampleEn": "Exceeding the recommended dosage of acetaminophen can cause irreversible liver damage.",
        "exampleVi": "Vượt quá liều lượng khuyến cáo của paracetamol có thể gây tổn thương gan không thể phục hồi.",
        "synonyms": [
          "Dose",
          "Prescribed amount"
        ],
        "topicId": "health"
      },
      {
        "id": "health-75",
        "word": "Side Effect",
        "phonetic": "/ˈsaɪd ɪˌfekt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tác dụng phụ không mong muốn của thuốc",
        "definitionEn": "A secondary, typically undesirable effect of a drug or medical treatment.",
        "exampleEn": "Drowsiness and dry mouth are common, harmless side effects of older antihistamine allergy pills.",
        "exampleVi": "Buồn ngủ và khô miệng là những tác dụng phụ phổ biến, vô hại của các loại thuốc chống dị ứng kháng histamin cũ.",
        "synonyms": [
          "Adverse reaction",
          "Secondary effect"
        ],
        "topicId": "health"
      },
      {
        "id": "health-76",
        "word": "Overdose",
        "phonetic": "/ˈoʊ.vɚ.doʊs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Dùng thuốc quá liều nguy kịch",
        "definitionEn": "An excessive and dangerous dose of a drug.",
        "exampleEn": "Paramedics administered naloxone to reverse the critical respiratory depression from an accidental opioid overdose.",
        "exampleVi": "Các nhân viên y tế đã tiêm naloxone để đảo ngược tình trạng suy hô hấp nguy kịch do vô tình dùng quá liều opioid.",
        "synonyms": [
          "Excessive dose",
          "Drug toxicity"
        ],
        "topicId": "health"
      },
      {
        "id": "health-77",
        "word": "Intravenous",
        "phonetic": "/ˌɪn.trəˈviː.nəs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Truyền trực tiếp vào tĩnh mạch (IV)",
        "definitionEn": "Existing or taking place within, or administered into, a vein or veins.",
        "exampleEn": "Dehydrated hospital patients received rapid intravenous saline rehydration infusions through a catheter.",
        "exampleVi": "Bệnh nhân bị mất nước tại bệnh viện đã được truyền bù nước bằng dung dịch muối trực tiếp vào tĩnh mạch nhanh chóng qua ống thông.",
        "synonyms": [
          "IV",
          "Endovenous"
        ],
        "topicId": "health"
      },
      {
        "id": "health-78",
        "word": "Blood Transfusion",
        "phonetic": "/ˈblʌd trænsˌfjuː.ʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Truyền máu cấp cứu",
        "definitionEn": "An injection of a volume of blood, previously taken from a healthy person, into a patient.",
        "exampleEn": "The emergency trauma victim required an urgent four-unit whole blood transfusion.",
        "exampleVi": "Nạn nhân chấn thương khẩn cấp cần được truyền khẩn cấp 4 đơn vị máu toàn phần.",
        "synonyms": [
          "Blood infusion"
        ],
        "topicId": "health"
      },
      {
        "id": "health-79",
        "word": "Biopsy",
        "phonetic": "/ˈbaɪ.ɑːp.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sinh thiết mô bệnh học tìm tế bào lạ",
        "definitionEn": "An examination of tissue removed from a living body to discover the presence, cause, or extent of a disease.",
        "exampleEn": "The laboratory biopsy confirmed that the lymph node swelling was entirely benign, not cancerous.",
        "exampleVi": "Sinh thiết phòng thí nghiệm xác nhận rằng sự sưng hạch bạch huyết hoàn toàn lành tính, không phải ung thư.",
        "synonyms": [
          "Tissue test",
          "Histology sample"
        ],
        "topicId": "health"
      },
      {
        "id": "health-80",
        "word": "Benign",
        "phonetic": "/bɪˈnaɪn/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "U lành tính, không gây nguy hiểm tính mạng",
        "definitionEn": "Of a disease: not harmful in effect, not malignant or cancerous.",
        "exampleEn": "Fortunately, the MRI confirmed the brain lesion was benign and required no radiation therapy.",
        "exampleVi": "May mắn thay, kết quả chụp MRI xác nhận tổn thương não là lành tính và không cần phải xạ trị.",
        "synonyms": [
          "Harmless",
          "Non-cancerous",
          "Non-malignant"
        ],
        "topicId": "health"
      },
      {
        "id": "health-81",
        "word": "Malignant",
        "phonetic": "/məˈlɪɡ.nənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "U ác tính, ung thư di căn nguy hiểm",
        "definitionEn": "Of a disease: very virulent or infectious; malevolent; cancerous.",
        "exampleEn": "Malignant tumors have the dangerous ability to invade surrounding healthy tissue and metastasize.",
        "exampleVi": "Các khối u ác tính có khả năng nguy hiểm là xâm lấn các mô khỏe mạnh xung quanh và di căn.",
        "synonyms": [
          "Cancerous",
          "Deadly",
          "Destructive"
        ],
        "topicId": "health"
      },
      {
        "id": "health-82",
        "word": "Metastasis",
        "phonetic": "/məˈtæs.tə.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Sự di căn của tế bào ung thư sang cơ quan khác",
        "definitionEn": "The development of secondary malignant growths at a distance from a primary site of cancer.",
        "exampleEn": "Targeted immunotherapy medications aim to halt tumor cell division and prevent distant metastasis.",
        "exampleVi": "Thuốc liệu pháp miễn dịch nhắm trúng đích nhằm mục đích ngăn chặn sự phân chia tế bào khối u và ngăn chặn sự di căn xa.",
        "synonyms": [
          "Cancer spread",
          "Secondary growth"
        ],
        "topicId": "health"
      },
      {
        "id": "health-83",
        "word": "Chemotherapy",
        "phonetic": "/ˌkiː.moʊˈθer.ə.pi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hóa trị liệu tiêu diệt tế bào ung thư",
        "definitionEn": "The treatment of disease by the use of chemical substances, especially the treatment of cancer by cytotoxic drugs.",
        "exampleEn": "Modern chemotherapy regimens use targeted infusions that minimize severe nausea.",
        "exampleVi": "Các phác đồ hóa trị hiện đại sử dụng các phương pháp truyền nhắm trúng đích giúp giảm thiểu tối đa cảm giác buồn nôn nghiêm trọng.",
        "synonyms": [
          "Chemo",
          "Cytotoxic therapy"
        ],
        "topicId": "health"
      },
      {
        "id": "health-84",
        "word": "Radiotherapy",
        "phonetic": "/ˌreɪ.di.oʊˈθer.ə.pi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Xạ trị bằng tia bức xạ chiếu ngoài",
        "definitionEn": "The treatment of disease, especially cancer, using X-rays or similar forms of radiation.",
        "exampleEn": "Stereotactic radiotherapy directs high-dose radiation beams precisely at the spinal tumor while sparing nerves.",
        "exampleVi": "Xạ trị định vị hướng chùm bức xạ liều cao chính xác vào khối u cột sống mà không làm tổn thương các dây thần kinh.",
        "synonyms": [
          "Radiation therapy",
          "Irradiation"
        ],
        "topicId": "health"
      },
      {
        "id": "health-85",
        "word": "Hospice",
        "phonetic": "/ˈhɑː.spɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bệnh viện chăm sóc giảm nhẹ cuối đời",
        "definitionEn": "A home providing care for the sick or terminally ill.",
        "exampleEn": "The serene hospice provides peaceful comfort and emotional support for both patients and their families.",
        "exampleVi": "Bệnh viện chăm sóc cuối đời thanh tịnh cung cấp sự thoải mái yên bình và hỗ trợ tinh thần cho cả bệnh nhân và gia đình của họ.",
        "synonyms": [
          "Palliative facility",
          "End-of-life care"
        ],
        "topicId": "health"
      }
    ]
  },
  {
    "id": "environment",
    "title": "Môi Trường & Sinh Thái",
    "slug": "environment",
    "icon": "Leaf",
    "color": "text-teal-500",
    "bgColor": "bg-teal-50 dark:bg-teal-950/40",
    "borderColor": "border-teal-200 dark:border-teal-800",
    "description": "Biến đổi khí hậu toàn cầu, năng lượng sạch tái tạo, bảo tồn đa dạng sinh học và phát thải ròng",
    "wordCount": 85,
    "words": [
      {
        "id": "env-1",
        "word": "Sustainability",
        "phonetic": "/səˌsteɪ.nəˈbɪl.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự phát triển bền vững không cạn kiệt tài nguyên",
        "definitionEn": "The ability to be maintained at a certain rate or level; avoidance of the depletion of natural resources in order to maintain an ecological balance.",
        "exampleEn": "Urban sustainability initiatives prioritize green public transit and zero-carbon building designs.",
        "exampleVi": "Các sáng kiến phát triển bền vững đô thị ưu tiên giao thông công cộng xanh và thiết kế tòa nhà không phát thải carbon.",
        "synonyms": [
          "Eco-balance",
          "Endurance",
          "Viability"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-2",
        "word": "Renewable",
        "phonetic": "/rɪˈnuː.ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Năng lượng tái tạo vô tận (gió, mặt trời, thủy triều)",
        "definitionEn": "Capable of being renewed, especially of a source of energy that is not depleted by use.",
        "exampleEn": "Investing in renewable wind and solar energy drastically cuts national fossil fuel reliance.",
        "exampleVi": "Đầu tư vào năng lượng gió và mặt trời tái tạo giúp cắt giảm đáng kể sự phụ thuộc của quốc gia vào nhiên liệu hóa thạch.",
        "synonyms": [
          "Sustainable",
          "Inexhaustible",
          "Green"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-3",
        "word": "Emissions",
        "phonetic": "/iˈmɪʃ.ənz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khí thải công nghiệp và phương tiện giao thông",
        "definitionEn": "The production and discharge of something, especially gas or radiation.",
        "exampleEn": "Strict industrial regulations mandate a fifty percent cut in factory sulfur emissions.",
        "exampleVi": "Các quy định công nghiệp nghiêm ngặt bắt buộc phải cắt giảm 50% lượng khí thải lưu huỳnh từ nhà máy.",
        "synonyms": [
          "Discharges",
          "Effluents",
          "Exhaust"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-4",
        "word": "Ecosystem",
        "phonetic": "/ˈiː.koʊˌsɪs.təm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hệ sinh thái tự nhiên quần tụ sinh vật",
        "definitionEn": "A biological community of interacting organisms and their physical environment.",
        "exampleEn": "Coral reefs form a fragile marine ecosystem supporting a quarter of all sea life.",
        "exampleVi": "Các rạn san hô hình thành một hệ sinh thái biển mỏng manh nuôi dưỡng một phần tư tổng số sinh vật biển.",
        "synonyms": [
          "Biosystem",
          "Ecological community",
          "Habitat"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-5",
        "word": "Deforestation",
        "phonetic": "/diːˌfɔːr.əˈsteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nạn phá rừng bừa bãi",
        "definitionEn": "The action of clearing a wide area of trees.",
        "exampleEn": "Tropical deforestation drives thousands of endangered indigenous species toward extinction.",
        "exampleVi": "Nạn phá rừng nhiệt đới đẩy hàng ngàn loài sinh vật bản địa có nguy cơ tuyệt chủng vào bờ vực diệt vong.",
        "synonyms": [
          "Forest clearance",
          "Logging",
          "Tree clearing"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-6",
        "word": "Habitat",
        "phonetic": "/ˈhæb.ə.tæt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Môi trường sống tự nhiên của muôn loài",
        "definitionEn": "The natural home or environment of an animal, plant, or other organism.",
        "exampleEn": "The national park provides a protected wilderness habitat for rare Indochinese tigers.",
        "exampleVi": "Vườn quốc gia cung cấp một môi trường sống hoang dã được bảo vệ cho loài hổ Đông Dương quý hiếm.",
        "synonyms": [
          "Natural territory",
          "Biotope",
          "Home ground"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-7",
        "word": "Biodiversity",
        "phonetic": "/ˌbaɪ.oʊ.daɪˈvɝː.sə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự đa dạng sinh học các loài",
        "definitionEn": "The variety of plant and animal life in the world or in a particular habitat, a high level of which is usually considered to be important and desirable.",
        "exampleEn": "The Amazon rainforest harbors the most astounding biodiversity on planet Earth.",
        "exampleVi": "Rừng nhiệt đới Amazon lưu giữ sự đa dạng sinh học đáng kinh ngạc nhất trên hành tinh Trái Đất.",
        "synonyms": [
          "Ecological variety",
          "Biological richness"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-8",
        "word": "Carbon Footprint",
        "phonetic": "/ˌkɑːr.bən ˈfʊt.prɪnt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dấu chân carbon phát thải từ hoạt động cá nhân/tổ chức",
        "definitionEn": "The amount of carbon dioxide and other carbon compounds emitted due to the consumption of fossil fuels by a particular person, group, etc.",
        "exampleEn": "Switching to plant-based diets significantly shrinks your personal carbon footprint.",
        "exampleVi": "Chuyển sang chế độ ăn thuần thực vật giúp thu nhỏ đáng kể dấu chân carbon cá nhân của bạn.",
        "synonyms": [
          "Emissions total",
          "Environmental impact"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-9",
        "word": "Conservation",
        "phonetic": "/ˌkɑːn.sɚˈveɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Công tác bảo tồn tự nhiên và di sản",
        "definitionEn": "The prevention of wasteful use of a resource; preservation and protection of natural resources.",
        "exampleEn": "Wildlife conservation organizations work tirelessly to shield endangered black rhinos from poachers.",
        "exampleVi": "Các tổ chức bảo tồn động vật hoang dã làm việc không mệt mỏi để bảo vệ loài tê giác đen có nguy cơ tuyệt chủng khỏi những kẻ săn trộm.",
        "synonyms": [
          "Preservation",
          "Protection",
          "Safeguarding"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-10",
        "word": "Pollution",
        "phonetic": "/pəˈluː.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Sự ô nhiễm nguồn nước, không khí và đất đai",
        "definitionEn": "The presence in or introduction into the environment of a substance or thing that has harmful or poisonous effects.",
        "exampleEn": "Industrial chemical runoff is the main cause of heavy river pollution downstream.",
        "exampleVi": "Nước thải hóa chất công nghiệp là nguyên nhân chính gây ô nhiễm sông ngòi nặng nề ở hạ lưu.",
        "synonyms": [
          "Contamination",
          "Fouling",
          "Degradation"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-11",
        "word": "Afforestation",
        "phonetic": "/æfˌɔːr.əˈsteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Trồng rừng phủ xanh đất trống đồi trọc",
        "definitionEn": "The establishment of a forest or stand of trees in an area where there was no previous tree cover.",
        "exampleEn": "Government incentives funded massive afforestation initiatives across barren arid hillsides.",
        "exampleVi": "Các chính sách khuyến khích của chính phủ đã tài trợ cho các sáng kiến trồng rừng quy mô lớn trên các sườn đồi khô cằn trơ trọi.",
        "synonyms": [
          "Tree planting",
          "Forest creation"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-12",
        "word": "Reforestation",
        "phonetic": "/ˌriːˌfɔːr.əˈsteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trồng lại rừng sau khai thác hoặc cháy rừng",
        "definitionEn": "The process of replanting an area with trees.",
        "exampleEn": "Volunteer groups organized the reforestation of coastal mangrove buffers damaged by storms.",
        "exampleVi": "Các nhóm tình nguyện đã tổ chức trồng lại rừng ngập mặn ven biển bị tàn phá bởi bão lũ.",
        "synonyms": [
          "Replanting",
          "Regeneration"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-13",
        "word": "Aquifer",
        "phonetic": "/ˈæk.wə.fɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tầng ngậm nước ngầm dưới lòng đất",
        "definitionEn": "A body of permeable rock which can contain or transmit groundwater.",
        "exampleEn": "Over-pumping groundwater threatens to deplete the regional agricultural aquifer permanently.",
        "exampleVi": "Việc bơm hút nước ngầm quá mức đe dọa làm cạn kiệt vĩnh viễn tầng ngậm nước nông nghiệp của khu vực.",
        "synonyms": [
          "Groundwater reservoir",
          "Water table"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-14",
        "word": "Biodegradable",
        "phonetic": "/ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Tự phân hủy sinh học tự nhiên",
        "definitionEn": "Capable of being decomposed by bacteria or other living organisms.",
        "exampleEn": "Modern takeout packaging is made from biodegradable cornstarch instead of non-recyclable plastic.",
        "exampleVi": "Bao bì đồ ăn mang về hiện đại được làm từ tinh bột ngô có thể phân hủy sinh học thay vì nhựa không thể tái chế.",
        "synonyms": [
          "Decomposable",
          "Eco-friendly"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-15",
        "word": "Compost",
        "phonetic": "/ˈkɑːm.poʊst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Phân hữu cơ ủ từ rác thải thực vật",
        "definitionEn": "Decayed organic material used as a plant fertilizer.",
        "exampleEn": "Turning vegetable kitchen scraps into rich garden compost enriches soil microbes naturally.",
        "exampleVi": "Biến các mảnh vụn rau củ trong bếp thành phân hữu cơ giàu dinh dưỡng giúp làm giàu vi sinh vật đất một cách tự nhiên.",
        "synonyms": [
          "Organic fertilizer",
          "Humus",
          "Mulch"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-16",
        "word": "Desalination",
        "phonetic": "/diːˌsæl.əˈneɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khử mặn nước biển thành nước ngọt uống được",
        "definitionEn": "The process of removing salt and other minerals from water, especially sea water.",
        "exampleEn": "Arid Gulf nations rely on reverse osmosis desalination plants for their entire municipal drinking supply.",
        "exampleVi": "Các quốc gia vùng Vịnh khô cằn dựa vào các nhà máy khử mặn thẩm thấu ngược cho toàn bộ nguồn nước uống đô thị.",
        "synonyms": [
          "Salt removal",
          "Water purification"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-17",
        "word": "Drought",
        "phonetic": "/draʊt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hạn hán kéo dài khô cằn",
        "definitionEn": "A prolonged period of abnormally low rainfall, leading to a shortage of water.",
        "exampleEn": "A severe multi-year drought shriveled wheat crops and drove up global grain prices.",
        "exampleVi": "Một đợt hạn hán nghiêm trọng kéo dài nhiều năm đã làm teo tóp mùa màng lúa mì và đẩy giá ngũ cốc toàn cầu lên cao.",
        "synonyms": [
          "Dry spell",
          "Water shortage",
          "Aridity"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-18",
        "word": "Effluent",
        "phonetic": "/ˈef.lu.ənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nước thải công nghiệp xả thẳng ra nguồn nước",
        "definitionEn": "Liquid waste or sewage discharged into a river or the sea.",
        "exampleEn": "The textile dying factory was shut down for discharging toxic untreated effluent into the river.",
        "exampleVi": "Nhà máy nhuộm dệt đã bị đóng cửa vì xả nước thải độc hại chưa qua xử lý ra sông.",
        "synonyms": [
          "Wastewater",
          "Industrial discharge",
          "Sewage"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-19",
        "word": "Endangered",
        "phonetic": "/ɪnˈdeɪn.dʒɚd/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Có nguy cơ tuyệt chủng trong tự nhiên",
        "definitionEn": "Seriously at risk of extinction.",
        "exampleEn": "The Javan rhinoceros is one of the most critically endangered large mammals on Earth.",
        "exampleVi": "Tê giác Java là một trong những loài động vật có vú lớn có nguy cơ tuyệt chủng nghiêm trọng nhất trên Trái Đất.",
        "synonyms": [
          "Threatened",
          "At risk",
          "Vulnerable"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-20",
        "word": "Extinction",
        "phonetic": "/ɪkˈstɪŋk.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự tuyệt chủng biến mất vĩnh viễn",
        "definitionEn": "The state or process of a species, family, or larger group being or becoming extinct.",
        "exampleEn": "Meteor impact was the primary cause of dinosaur extinction sixty-six million years ago.",
        "exampleVi": "Cú va chạm của thiên thạch là nguyên nhân chính dẫn đến sự tuyệt chủng của loài khủng long cách đây 66 triệu năm.",
        "synonyms": [
          "Dying out",
          "Eradication",
          "Extermination"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-21",
        "word": "Fossil Fuel",
        "phonetic": "/ˈfɑː.səl ˌfjuː.əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt)",
        "definitionEn": "A natural fuel such as coal or gas, formed in the geological past from the remains of living organisms.",
        "exampleEn": "Burning fossil fuels accounts for the vast majority of atmospheric greenhouse gas pollution.",
        "exampleVi": "Đốt nhiên liệu hóa thạch chiếm đại đa số lượng ô nhiễm khí nhà kính trong khí quyển.",
        "synonyms": [
          "Hydrocarbon fuel",
          "Coal and oil"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-22",
        "word": "Geothermal",
        "phonetic": "/ˌdʒiː.oʊˈθɝː.məl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Địa nhiệt từ lòng đất núi lửa",
        "definitionEn": "Relating to or produced by the internal heat of the earth.",
        "exampleEn": "Iceland generates nearly all of its electricity and district heating from clean geothermal vents.",
        "exampleVi": "Iceland tạo ra gần như toàn bộ điện năng và hệ thống sưởi ấm khu vực từ các lỗ phun địa nhiệt sạch.",
        "synonyms": [
          "Earth-heat",
          "Subterranean energy"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-23",
        "word": "Greenhouse Effect",
        "phonetic": "/ˈɡriːn.haʊs ɪˌfekt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hiệu ứng nhà kính giữ nhiệt làm ấm trái đất",
        "definitionEn": "The trapping of the sun's warmth in a planet's lower atmosphere due to the greater transparency of the atmosphere to visible radiation from the sun than to infrared radiation emitted from the planet's surface.",
        "exampleEn": "The anthropogenic greenhouse effect is driving unprecedented rises in global average temperatures.",
        "exampleVi": "Hiệu ứng nhà kính do con người gây ra đang dẫn đến sự gia tăng nhiệt độ trung bình toàn cầu chưa từng có.",
        "synonyms": [
          "Atmospheric warming",
          "Heat trapping"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-24",
        "word": "Hydroelectric",
        "phonetic": "/ˌhaɪ.droʊ.ɪˈlek.trɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Thủy điện khai thác sức nước",
        "definitionEn": "Relating to or denoting the generation of electricity using flowing water (typically from a reservoir).",
        "exampleEn": "The Son La hydroelectric dam is the largest renewable energy generating station in Southeast Asia.",
        "exampleVi": "Đập thủy điện Sơn La là trạm phát năng lượng tái tạo lớn nhất ở Đông Nam Á.",
        "synonyms": [
          "Water-powered",
          "Hydropower"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-25",
        "word": "Incineration",
        "phonetic": "/ɪnˌsɪn.əˈreɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thiêu hủy rác thải trong lò nhiệt độ cao",
        "definitionEn": "The destruction of something, especially waste material, by burning.",
        "exampleEn": "Modern waste-to-energy incineration facilities capture emissions and produce district steam heating.",
        "exampleVi": "Các cơ sở đốt rác phát điện hiện đại thu giữ khí thải và sản xuất hơi nước sưởi ấm cho khu vực.",
        "synonyms": [
          "Waste burning",
          "Thermal disposal"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-26",
        "word": "Landfill",
        "phonetic": "/ˈlænd.fɪl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bãi chôn lấp rác thải đô thị",
        "definitionEn": "The disposal of waste material by burying it, especially as a method of filling in and reclaiming excavated pits.",
        "exampleEn": "Methane gas escaping from decomposing organic waste in municipal landfills must be actively captured.",
        "exampleVi": "Khí metan thoát ra từ chất thải hữu cơ đang phân hủy trong các bãi chôn lấp đô thị phải được tích cực thu giữ.",
        "synonyms": [
          "Dumping ground",
          "Waste pit",
          "Tip"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-27",
        "word": "Mangrove",
        "phonetic": "/ˈmæŋ.ɡroʊv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Rừng ngập mặn chắn sóng ven biển",
        "definitionEn": "A tree or shrub that grows in chiefly tropical coastal swamps that are flooded at high tide.",
        "exampleEn": "Coastal mangrove forests act as natural shields that dissipate ferocious typhoon storm waves.",
        "exampleVi": "Rừng ngập mặn ven biển đóng vai trò như những lá chắn tự nhiên làm tiêu tán những đợt sóng bão dữ dội.",
        "synonyms": [
          "Coastal wetland forest",
          "Tidal shrub"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-28",
        "word": "Microplastics",
        "phonetic": "/ˈmaɪ.kroʊˌplæs.tɪks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hạt vi nhựa siêu nhỏ gây độc hại chuỗi thức ăn",
        "definitionEn": "Extremely small pieces of plastic debris in the environment resulting from the disposal and breakdown of consumer products and industrial waste.",
        "exampleEn": "Scientists discovered toxic microplastics lodged inside the digestive tracts of deep-sea pelagic fish.",
        "exampleVi": "Các nhà khoa học phát hiện các hạt vi nhựa độc hại mắc kẹt bên trong đường tiêu hóa của các loài cá biển sâu.",
        "synonyms": [
          "Plastic particles",
          "Micro-debris"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-29",
        "word": "Monoculture",
        "phonetic": "/ˈmɑː.noʊˌkʌl.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Độc canh nông nghiệp một loại cây duy nhất",
        "definitionEn": "The cultivation of a single crop in a given area.",
        "exampleEn": "Vast agricultural monoculture deprives beneficial bees of varied pollen and degrades soil health.",
        "exampleVi": "Nền độc canh nông nghiệp rộng lớn tước đi lượng phấn hoa đa dạng của loài ong có ích và làm suy thoái sức khỏe đất đai.",
        "synonyms": [
          "Single cropping",
          "Uniform farming"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-30",
        "word": "Ozone Layer",
        "phonetic": "/ˈoʊ.zoʊn ˌleɪ.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tầng ôzôn hấp thụ tia cực tím độc hại",
        "definitionEn": "A layer in the earth's stratosphere at an altitude of about 10 km containing a high concentration of ozone, which absorbs most of the ultraviolet radiation reaching the earth from the sun.",
        "exampleEn": "The Montreal Protocol successfully banned CFC chemicals, allowing the protective ozone layer to heal.",
        "exampleVi": "Nghị định thư Montreal đã cấm thành công các hóa chất CFC, cho phép tầng ôzôn bảo vệ tự phục hồi.",
        "synonyms": [
          "Stratospheric shield",
          "UV barrier"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-31",
        "word": "Particulate Matter",
        "phonetic": "/pɑːrˈtɪk.jə.lət ˌmæt̬.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Bụi mịn lơ lửng trong không khí (PM2.5)",
        "definitionEn": "Microscopic solid or liquid matter suspended in the atmosphere of Earth.",
        "exampleEn": "Fine particulate matter smaller than 2.5 microns can penetrate deeply into human pulmonary alveoli.",
        "exampleVi": "Bụi mịn nhỏ hơn 2,5 micromet có thể xâm nhập sâu vào các phế nang phổi của con người.",
        "synonyms": [
          "PM2.5",
          "Aerosol particles",
          "Soot"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-32",
        "word": "Permaculture",
        "phonetic": "/ˈpɝː.məˌkʌl.tʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nông nghiệp sinh thái tự nuôi dưỡng lâu dài",
        "definitionEn": "The development of agricultural ecosystems intended to be sustainable and self-sufficient.",
        "exampleEn": "Designing food gardens based on permaculture principles creates self-regenerating resilient ecosystems.",
        "exampleVi": "Thiết kế các vườn thực phẩm dựa trên các nguyên tắc nông nghiệp sinh thái tạo ra các hệ sinh thái có khả năng tự tái tạo kiên cường.",
        "synonyms": [
          "Sustainable agriculture",
          "Ecological farming"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-33",
        "word": "Photovoltaic",
        "phonetic": "/ˌfoʊ.toʊ.vɑːlˈteɪ.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Quang điện biến ánh sáng mặt trời thành điện",
        "definitionEn": "Relating to the production of electric current at the junction of two substances exposed to light.",
        "exampleEn": "Photovoltaic rooftop solar arrays allow independent households to generate all their own green power.",
        "exampleVi": "Các giàn pin mặt trời quang điện trên mái nhà cho phép các hộ gia đình độc lập tự tạo ra toàn bộ nguồn điện xanh cho riêng mình.",
        "synonyms": [
          "Solar electric",
          "PV"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-34",
        "word": "Poaching",
        "phonetic": "/ˈpoʊ.tʃɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nạn săn bắn trộm động vật hoang dã trái phép",
        "definitionEn": "The illegal practice of trespassing on another's property to hunt or steal game without permission.",
        "exampleEn": "Armed rangers patrol the reserve day and night to eradicate organized pangolin poaching.",
        "exampleVi": "Các kiểm lâm viên có vũ trang tuần tra khu bảo tồn ngày đêm để xóa bỏ nạn săn trộm tê tê có tổ chức.",
        "synonyms": [
          "Illegal hunting",
          "Game stealing"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-35",
        "word": "Recycling",
        "phonetic": "/ˌriːˈsaɪ.klɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Tái chế rác thải thành vật liệu hữu ích",
        "definitionEn": "The action or process of converting waste into reusable material.",
        "exampleEn": "Aluminum can recycling requires ninety-five percent less energy than refining virgin bauxite ore.",
        "exampleVi": "Tái chế lon nhôm cần ít hơn 95% năng lượng so với việc tinh chế quặng bauxit nguyên chất.",
        "synonyms": [
          "Reclamation",
          "Reprocessing",
          "Upcycling"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-36",
        "word": "Runoff",
        "phonetic": "/ˈrʌn.ɑːf/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nước chảy tràn bề mặt cuốn theo tạp chất",
        "definitionEn": "The draining away of water from the surface of an area of land, a building or structure, or other resource.",
        "exampleEn": "Agricultural chemical fertilizer runoff leads to severe toxic algae blooms in freshwater lakes.",
        "exampleVi": "Nước phân bón hóa học nông nghiệp chảy tràn bề mặt dẫn đến hiện tượng tảo độc nở hoa nghiêm trọng ở các hồ nước ngọt.",
        "synonyms": [
          "Surface drainage",
          "Discharge"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-37",
        "word": "Smog",
        "phonetic": "/smɑːɡ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khói mù độc hại quang hóa kết hợp khói và sương",
        "definitionEn": "Fog or haze combined with smoke and other atmospheric pollutants.",
        "exampleEn": "Dense toxic industrial smog shrouded the capital, prompting health alerts and school closures.",
        "exampleVi": "Khói mù công nghiệp độc hại dày đặc bao phủ thủ đô, khiến cơ quan chức năng phải đưa ra cảnh báo sức khỏe và đóng cửa trường học.",
        "synonyms": [
          "Air haze",
          "Pollution fog"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-38",
        "word": "Solar Panel",
        "phonetic": "/ˈsoʊ.lɚ ˌpæn.əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Tấm pin năng lượng mặt trời",
        "definitionEn": "A panel designed to absorb the sun's rays as a source of energy for generating electricity or heating.",
        "exampleEn": "Modern monocrystalline solar panels achieve over twenty-two percent conversion efficiency.",
        "exampleVi": "Các tấm pin mặt trời đơn tinh thể hiện đại đạt hiệu suất chuyển đổi trên 22%.",
        "synonyms": [
          "Photovoltaic module",
          "Solar collector"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-39",
        "word": "Thermal Pollution",
        "phonetic": "/ˌθɝː.məl pəˈluː.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Ô nhiễm nhiệt độ nguồn nước từ các nhà máy",
        "definitionEn": "The degradation of water quality by any process that changes ambient water temperature.",
        "exampleEn": "Discharging scalding cooling water from nuclear reactors into rivers causes severe thermal pollution.",
        "exampleVi": "Xả nước làm mát bỏng rát từ các lò phản ứng hạt nhân ra sông ngòi gây ô nhiễm nhiệt độ nghiêm trọng.",
        "synonyms": [
          "Temperature pollution"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-40",
        "word": "Upcycling",
        "phonetic": "/ˈʌpˌsaɪ.klɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tái chế nâng cấp biến phế liệu thành tác phẩm giá trị cao",
        "definitionEn": "Reuse discarded objects or material in such a way as to create a product of higher quality or value than the original.",
        "exampleEn": "The artisan fashion workshop specializes in upcycling vintage denim jeans into luxury tote bags.",
        "exampleVi": "Xưởng thời trang thủ công chuyên tái chế nâng cấp quần jean denim cũ thành những chiếc túi tote sang trọng.",
        "synonyms": [
          "Creative reuse",
          "Value recycling"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-41",
        "word": "Waste Management",
        "phonetic": "/ˈweɪst ˌmæn.ədʒ.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Quản lý và xử lý rác thải bài bản",
        "definitionEn": "The precise collection, transport, processing, recycling or disposal, and monitoring of waste materials.",
        "exampleEn": "Modern municipal waste management segregates organic, recyclable, and hazardous refuse at the source.",
        "exampleVi": "Quản lý chất thải đô thị hiện đại phân loại rác hữu cơ, rác tái chế và rác nguy hại ngay tại nguồn.",
        "synonyms": [
          "Refuse handling",
          "Sanitation operations"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-42",
        "word": "Wind Turbine",
        "phonetic": "/ˈwɪnd ˌtɝː.bɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Tua-bin gió khổng lồ phát điện",
        "definitionEn": "A turbine having a large vaned wheel rotated by the wind to generate electricity.",
        "exampleEn": "Massive offshore wind turbines harness relentless oceanic breezes with zero carbon footprint.",
        "exampleVi": "Các tua-bin gió khổng lồ ngoài khơi khai thác những làn gió đại dương không ngừng nghỉ mà không hề phát thải carbon.",
        "synonyms": [
          "Wind generator",
          "Windmill generator"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-43",
        "word": "Zero Waste",
        "phonetic": "/ˌzɪr.oʊ ˈweɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lối sống không rác thải hướng đến bảo vệ môi trường",
        "definitionEn": "A philosophy that encourages the redesign of resource life cycles so that all products are reused.",
        "exampleEn": "Adopting a zero-waste grocery routine means carrying reusable cotton bags and glass jars.",
        "exampleVi": "Áp dụng thói quen mua sắm không rác thải nghĩa là luôn mang theo túi vải cotton và lọ thủy tinh có thể tái sử dụng.",
        "synonyms": [
          "No-waste lifestyle",
          "Circular living"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-44",
        "word": "Acid Rain",
        "phonetic": "/ˌæs.ɪd ˈreɪn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Mưa axit do khí thải lưu huỳnh hòa tan",
        "definitionEn": "Rainfall made sufficiently acidic by atmospheric pollution that it causes environmental harm, typically to forests and lakes.",
        "exampleEn": "Acid rain corroded ancient outdoor marble statues and acidified high-altitude alpine lakes.",
        "exampleVi": "Mưa axit làm ăn mòn các bức tượng cẩm thạch ngoài trời cổ xưa và làm chua các hồ nước trên núi cao.",
        "synonyms": [
          "Acid precipitation",
          "Chemical rain"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-45",
        "word": "Carbon Neutral",
        "phonetic": "/ˌkɑːr.bən ˈnuː.trəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Trung hòa carbon (cân bằng lượng phát thải và hấp thụ)",
        "definitionEn": "Making or resulting in no net release of carbon dioxide into the atmosphere.",
        "exampleEn": "The enterprise pledged to make all its international data centers fully carbon neutral by 2030.",
        "exampleVi": "Doanh nghiệp cam kết sẽ đưa tất cả các trung tâm dữ liệu quốc tế của mình đạt trạng thái hoàn toàn trung hòa carbon vào năm 2030.",
        "synonyms": [
          "Net-zero carbon",
          "Carbon-balanced"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-46",
        "word": "Climate Change",
        "phonetic": "/ˈklaɪ.mət ˌtʃeɪndʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Biến đổi khí hậu toàn cầu",
        "definitionEn": "A change in global or regional climate patterns, in particular a change apparent from the mid to late 20th century onwards and attributed largely to the increased levels of atmospheric carbon dioxide produced by the use of fossil fuels.",
        "exampleEn": "Mitigating climate change requires rapid systemic decarbonization of global energy and transport.",
        "exampleVi": "Giảm nhẹ biến đổi khí hậu đòi hỏi phải khử carbon có hệ thống nhanh chóng trong ngành năng lượng và giao thông toàn cầu.",
        "synonyms": [
          "Global climate shift",
          "Climatic disruption"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-47",
        "word": "Ecological Footprint",
        "phonetic": "/ˌek.əˈlɑː.dʒɪ.kəl ˈfʊt.prɪnt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dấu chân sinh thái đo lường diện tích đất tự nhiên cần để duy trì lối sống",
        "definitionEn": "The impact of a person or community on the environment, expressed as the amount of land required to sustain their use of natural resources.",
        "exampleEn": "If every human lived like Western suburban consumers, our ecological footprint would require four planet Earths.",
        "exampleVi": "Nếu mỗi con người đều sống như những người tiêu dùng ngoại ô phương Tây, dấu chân sinh thái của chúng ta sẽ cần đến 4 hành tinh Trái Đất.",
        "synonyms": [
          "Eco-impact",
          "Nature demand"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-48",
        "word": "Greenhouse Gas",
        "phonetic": "/ˈɡriːn.haʊs ˌɡæs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khí nhà kính gây giữ nhiệt (CO2, CH4, N2O)",
        "definitionEn": "A gas that contributes to the greenhouse effect by absorbing infrared radiation, e.g., carbon dioxide and chlorofluorocarbons.",
        "exampleEn": "Curbing agricultural methane emissions is the fastest way to slow near-term greenhouse gas warming.",
        "exampleVi": "Hạn chế lượng khí thải metan trong nông nghiệp là cách nhanh nhất để làm chậm quá trình nóng lên do khí nhà kính trong thời gian tới.",
        "synonyms": [
          "GHG",
          "Warming gas"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-49",
        "word": "Reforest",
        "phonetic": "/ˌriːˈfɔːr.ɪst/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trồng lại rừng trên vùng đất đã mất cây",
        "definitionEn": "Replant an area with trees.",
        "exampleEn": "The conservation team plans to reforest fifty thousand hectares of denuded watershed basin.",
        "exampleVi": "Đội bảo tồn dự kiến sẽ trồng lại rừng trên 50.000 ha lưu vực đầu nguồn bị trơ trụi.",
        "synonyms": [
          "Replant",
          "Regrow forest"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-50",
        "word": "Renewable Energy",
        "phonetic": "/rɪˌnuː.ə.bəl ˈen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Năng lượng tái tạo sạch",
        "definitionEn": "Energy from a source that is not depleted when used, such as wind or solar power.",
        "exampleEn": "Massive battery storage arrays store surplus renewable energy for calm, cloudy days.",
        "exampleVi": "Các giàn pin lưu trữ khổng lồ tích trữ năng lượng tái tạo dư thừa cho những ngày lặng gió, nhiều mây.",
        "synonyms": [
          "Clean energy",
          "Green power"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-51",
        "word": "Solar Energy",
        "phonetic": "/ˌsoʊ.lɚ ˈen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Năng lượng mặt trời vô tận",
        "definitionEn": "Radiant energy emitted by the sun, harnessed using a range of technologies such as solar power to generate electricity.",
        "exampleEn": "Desert regions receive intense sunlight, making them prime global locations for utility-scale solar energy.",
        "exampleVi": "Các vùng sa mạc đón nhận ánh nắng gay gắt, biến chúng thành những địa điểm đắc địa trên toàn cầu cho năng lượng mặt trời quy mô lớn.",
        "synonyms": [
          "Sun power",
          "Solar radiation"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-52",
        "word": "Wind Energy",
        "phonetic": "/ˈwɪnd ˌen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Năng lượng gió tự nhiên",
        "definitionEn": "Power obtained by harnessing the energy of the wind of the atmosphere.",
        "exampleEn": "Coastal regions harness gusty offshore wind energy to drive giant power generators.",
        "exampleVi": "Các vùng ven biển khai thác năng lượng gió ngoài khơi giật mạnh để vận hành các máy phát điện khổng lồ.",
        "synonyms": [
          "Wind power",
          "Aeolian energy"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-53",
        "word": "Clean Energy",
        "phonetic": "/ˌkliːn ˈen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Năng lượng sạch không phát thải khí nhà kính",
        "definitionEn": "Energy that comes from renewable, zero emission sources that do not pollute the atmosphere when used.",
        "exampleEn": "Transitioning to clean energy creates millions of high-paying jobs in solar and grid engineering.",
        "exampleVi": "Chuyển đổi sang năng lượng sạch tạo ra hàng triệu việc làm thu nhập cao trong ngành kỹ thuật năng lượng mặt trời và lưới điện.",
        "synonyms": [
          "Green energy",
          "Zero-emission power"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-54",
        "word": "Fossil Energy",
        "phonetic": "/ˈfɑː.səl ˌen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Năng lượng từ nhiên liệu hóa thạch",
        "definitionEn": "Energy derived from burning ancient decayed organic matter such as coal and oil.",
        "exampleEn": "Phase-outs of coal-fired fossil energy plants are accelerating across developed continents.",
        "exampleVi": "Việc loại bỏ dần các nhà máy năng lượng hóa thạch đốt than đang tăng tốc trên khắp các lục địa phát triển.",
        "synonyms": [
          "Non-renewable energy",
          "Carbon power"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-55",
        "word": "Nuclear Energy",
        "phonetic": "/ˌnuː.kliː.ɚ ˈen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Năng lượng hạt nhân nguyên tử",
        "definitionEn": "The energy released during nuclear fission or fusion, especially when used to generate electricity.",
        "exampleEn": "Modern generation-four reactors provide safe, reliable zero-carbon nuclear energy around the clock.",
        "exampleVi": "Các lò phản ứng thế hệ thứ tư hiện đại cung cấp năng lượng hạt nhân không phát thải carbon an toàn, đáng tin cậy suốt ngày đêm.",
        "synonyms": [
          "Atomic power",
          "Fission power"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-56",
        "word": "Tidal Energy",
        "phonetic": "/ˈtaɪ.dəl ˌen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Năng lượng thủy triều từ lực hút mặt trăng",
        "definitionEn": "A form of power produced by the natural rise and fall of ocean tides and currents.",
        "exampleEn": "Submerged marine turbines generate predictable tidal energy regardless of surface weather.",
        "exampleVi": "Các tua-bin biển chìm dưới nước tạo ra năng lượng thủy triều có thể dự đoán được bất kể thời tiết trên bề mặt.",
        "synonyms": [
          "Tidal power",
          "Marine energy"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-57",
        "word": "Wave Energy",
        "phonetic": "/ˈweɪv ˌen.ɚ.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Năng lượng sóng biển dập dềnh",
        "definitionEn": "The capture of energy of wind waves to do useful work, including electricity generation.",
        "exampleEn": "Floating buoys bobbing on oceanic swells harvest mechanical wave energy smoothly.",
        "exampleVi": "Những chiếc phao nổi nhấp nhô trên các đợt sóng biển lớn thu hoạch năng lượng cơ học của sóng một cách êm ái.",
        "synonyms": [
          "Ocean wave power",
          "Marine hydrokinetic"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-58",
        "word": "Biofuel",
        "phonetic": "/ˈbaɪ.oʊˌfjuː.əl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nhiên liệu sinh học từ nông sản và mỡ động vật",
        "definitionEn": "A fuel derived directly from living matter such as plants or agricultural waste.",
        "exampleEn": "Commercial airlines are testing sustainable aviation biofuel blends to lower flight emissions.",
        "exampleVi": "Các hãng hàng không thương mại đang thử nghiệm các hỗn hợp nhiên liệu sinh học hàng không bền vững để giảm lượng khí thải trong chuyến bay.",
        "synonyms": [
          "Biomass fuel",
          "Agrofuel"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-59",
        "word": "Carbon Sink",
        "phonetic": "/ˈkɑːr.bən ˌsɪŋk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bể chứa hấp thụ carbon tự nhiên (rừng, đại dương)",
        "definitionEn": "A forest, ocean, or other natural environment viewed in terms of its ability to absorb carbon dioxide from the atmosphere.",
        "exampleEn": "The deep ocean abyss acts as the planetary biosphere's most monumental carbon sink.",
        "exampleVi": "Vực thẳm đại dương sâu thẳm đóng vai trò là bể chứa carbon hoành tráng nhất của sinh quyển hành tinh.",
        "synonyms": [
          "Carbon reservoir",
          "CO2 absorber"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-60",
        "word": "Carbon Offset",
        "phonetic": "/ˈkɑːr.bən ˌɑːf.set/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tín chỉ bù đắp carbon thông qua dự án xanh",
        "definitionEn": "A reduction in emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere.",
        "exampleEn": "Travelers can purchase verified carbon offsets to neutralize the emissions of their transatlantic flights.",
        "exampleVi": "Hành khách đi máy bay có thể mua các khoản bù đắp carbon đã được xác thực để trung hòa lượng khí thải từ các chuyến bay qua Đại Tây Dương của họ.",
        "synonyms": [
          "Emission credit",
          "Carbon compensation"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-61",
        "word": "Carbon Tax",
        "phonetic": "/ˈkɑːr.bən ˌtæks/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thuế carbon đánh vào phát thải khí nhà kính",
        "definitionEn": "A tax on fossil fuels, especially those used by motor vehicles, intended to reduce the emission of carbon dioxide.",
        "exampleEn": "Instituting a progressive national carbon tax incentivizes heavy industries to innovate rapidly.",
        "exampleVi": "Việc thiết lập một mức thuế carbon quốc gia mang tính lũy tiến sẽ khuyến khích các ngành công nghiệp nặng đổi mới nhanh chóng.",
        "synonyms": [
          "Pollution levy",
          "Emissions fee"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-62",
        "word": "Cap-and-Trade",
        "phonetic": "/ˌkæp.ənˈtreɪd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Cơ chế giới hạn và mua bán hạn ngạch phát thải",
        "definitionEn": "A government-mandated, market-based approach to controlling pollution by providing economic incentives for achieving reductions in the emissions of pollutants.",
        "exampleEn": "Under cap-and-trade systems, efficient factories sell their surplus emission allowances for profit.",
        "exampleVi": "Theo hệ thống giới hạn và mua bán, các nhà máy hoạt động hiệu quả có thể bán hạn ngạch phát thải dư thừa của mình để kiếm lời.",
        "synonyms": [
          "Emissions trading",
          "Carbon market"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-63",
        "word": "Climate Crisis",
        "phonetic": "/ˈklaɪ.mət ˌkraɪ.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khủng hoảng khí hậu nghiêm trọng đe dọa nhân loại",
        "definitionEn": "Intense difficulty or danger caused by changes to the Earth's climate, typically resulting from human activity.",
        "exampleEn": "Youth activists organized worldwide peaceful strikes to demand urgent governmental action on the climate crisis.",
        "exampleVi": "Các nhà hoạt động trẻ tuổi đã tổ chức các cuộc đình công hòa bình trên toàn thế giới để yêu cầu chính phủ hành động khẩn cấp đối với cuộc khủng hoảng khí hậu.",
        "synonyms": [
          "Climate emergency",
          "Ecological catastrophe"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-64",
        "word": "Global Warming",
        "phonetic": "/ˌɡloʊ.bəl ˈwɔːr.mɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hiện tượng ấm lên toàn cầu",
        "definitionEn": "A gradual increase in the overall temperature of the earth's atmosphere generally attributed to the greenhouse effect caused by increased levels of carbon dioxide, chlorofluorocarbons, and other pollutants.",
        "exampleEn": "Global warming is causing Arctic polar sea ice to melt at an unprecedented, alarming rate.",
        "exampleVi": "Hiện tượng ấm lên toàn cầu đang khiến băng biển vùng cực Bắc tan chảy với tốc độ đáng báo động chưa từng có.",
        "synonyms": [
          "Planetary warming",
          "Thermal rise"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-65",
        "word": "Ocean Acidification",
        "phonetic": "/ˌoʊ.ʃən əˌsɪd.ə.fəˈkeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hiện tượng axit hóa đại dương do hấp thụ nhiều CO2",
        "definitionEn": "The ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide from the atmosphere.",
        "exampleEn": "Ocean acidification dissolves the delicate calcium carbonate shells of microscopic plankton and young mollusks.",
        "exampleVi": "Axit hóa đại dương làm hòa tan lớp vỏ canxi cacbonat mỏng manh của các sinh vật phù du siêu nhỏ và động vật thân mềm non.",
        "synonyms": [
          "Marine acidification",
          "pH decline"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-66",
        "word": "Sea Level Rise",
        "phonetic": "/ˈsiː ˌlev.əl ˌraɪz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Mực nước biển dâng cao đe dọa các vùng ven biển",
        "definitionEn": "An increase in the level of the world's oceans due to the effects of global warming.",
        "exampleEn": "Low-lying river delta regions are severely vulnerable to chronic saltwater intrusion caused by sea level rise.",
        "exampleVi": "Các vùng đồng bằng châu thổ sông trũng thấp đặc biệt dễ bị tổn thương trước hiện tượng xâm nhập mặn mãn tính do nước biển dâng.",
        "synonyms": [
          "Ocean rise",
          "Coastal inundation"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-67",
        "word": "Extreme Weather",
        "phonetic": "/ɪkˌstriːm ˈweð.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thời tiết cực đoan (bão dữ, sóng nhiệt, lũ quét)",
        "definitionEn": "Severe or unseasonal weather, which can include prolonged heatwaves, intense hurricanes, or unprecedented cold snaps.",
        "exampleEn": "Frequency of extreme weather disasters has quadrupled over the past four decades.",
        "exampleVi": "Tần suất xảy ra các thảm họa thời tiết cực đoan đã tăng gấp bốn lần trong suốt bốn thập kỷ qua.",
        "synonyms": [
          "Severe weather",
          "Climatic anomalies"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-68",
        "word": "Heatwave",
        "phonetic": "/ˈhiːt.weɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đợt sóng nhiệt gay gắt kéo dài",
        "definitionEn": "A prolonged period of abnormally hot weather, often accompanied by high humidity.",
        "exampleEn": "The record European summer heatwave buckled railway tracks and caused thousands of excess hospitalizations.",
        "exampleVi": "Đợt sóng nhiệt mùa hè kỷ lục ở châu Âu đã làm cong các đường ray xe lửa và khiến hàng ngàn người phải nhập viện ngoài dự kiến.",
        "synonyms": [
          "Thermal spike",
          "Hot spell"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-69",
        "word": "Wildfire",
        "phonetic": "/ˈwaɪld.faɪr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cháy rừng hoang dã lan nhanh không kiểm soát",
        "definitionEn": "A large, destructive fire that spreads quickly over woodland or brush.",
        "exampleEn": "Dry tinder timber and howling gale winds fueled an uncontrollable Australian bush wildfire.",
        "exampleVi": "Gỗ khô dễ bắt lửa và những cơn gió rít gào đã thổi bùng lên một trận cháy rừng dữ dội không thể kiểm soát tại Úc.",
        "synonyms": [
          "Forest fire",
          "Bushfire",
          "Conflagration"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-70",
        "word": "Flood",
        "phonetic": "/flʌd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Trận lũ lụt dâng ngập nhà cửa",
        "definitionEn": "An overflowing of a large amount of water beyond its normal confines, especially over what is normally dry land.",
        "exampleEn": "Heavy monsoon downpours triggered catastrophic river flash floods that submerged provincial towns.",
        "exampleVi": "Những trận mưa rào gió mùa trút nước xối xả đã kích hoạt các trận lũ quét kinh hoàng trên sông làm ngập chìm các thị trấn của tỉnh.",
        "synonyms": [
          "Deluge",
          "Inundation",
          "Overflow"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-71",
        "word": "Typhoon",
        "phonetic": "/taɪˈfuːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cơn bão nhiệt đới dữ dội ở vùng biển châu Á",
        "definitionEn": "A tropical storm in the region of the western Pacific Oceans.",
        "exampleEn": "The coastal fishing fleet sought safe harbor before the category-five super typhoon made landfall.",
        "exampleVi": "Đội tàu đánh cá ven biển đã tìm nơi trú ẩn an toàn trước khi siêu bão cấp 5 đổ bộ vào đất liền.",
        "synonyms": [
          "Hurricane",
          "Tropical cyclone",
          "Tempest"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-72",
        "word": "Glacier",
        "phonetic": "/ˈɡleɪ.ʃɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Sông băng tuyết vĩnh cửu trên núi cao",
        "definitionEn": "A slowly moving mass or river of ice formed by the accumulation and compaction of snow on mountains or near the poles.",
        "exampleEn": "Tourists hiked to the edge of the ancient Icelandic glacier to witness massive ice shelves calving into the bay.",
        "exampleVi": "Du khách đã đi bộ đến rìa của dòng sông băng cổ xưa ở Iceland để chứng kiến những thềm băng khổng lồ tách ra và rơi xuống vịnh.",
        "synonyms": [
          "Ice sheet",
          "Ice field",
          "Ice river"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-73",
        "word": "Permafrost",
        "phonetic": "/ˈpɝː.mə.frɑːst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tầng đất đóng băng vĩnh cửu ở vùng cực",
        "definitionEn": "A thick subsurface layer of soil that remains frozen throughout the year, occurring chiefly in polar regions.",
        "exampleEn": "Thawing Siberian permafrost releases ancient trapped reservoirs of explosive methane gas into the atmosphere.",
        "exampleVi": "Tầng đất đóng băng vĩnh cửu ở Siberia đang tan chảy giải phóng các túi khí metan dễ nổ từng bị giữ lại từ thời cổ đại vào khí quyển.",
        "synonyms": [
          "Frozen ground",
          "Arctic soil"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-74",
        "word": "Ice Cap",
        "phonetic": "/ˈaɪs ˌkæp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Mũ băng bao phủ các vùng cực",
        "definitionEn": "A covering of ice over a large area, especially on the polar region of a planet.",
        "exampleEn": "The Greenland ice cap contains sufficient freshwater to raise worldwide sea levels by seven meters if completely melted.",
        "exampleVi": "Mũ băng Greenland chứa đủ lượng nước ngọt để làm dâng mực nước biển trên toàn thế giới thêm 7 mét nếu bị tan chảy hoàn toàn.",
        "synonyms": [
          "Polar cap",
          "Glacial dome"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-75",
        "word": "Ecology",
        "phonetic": "/iˈkɑː.lə.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoa học sinh thái học nghiên cứu môi trường",
        "definitionEn": "The branch of biology that deals with the relations of organisms to one another and to their physical surroundings.",
        "exampleEn": "Studying marine ecology reveals how microscopic changes in phytoplankton populations ripple through entire food webs.",
        "exampleVi": "Nghiên cứu sinh thái học biển tiết lộ những thay đổi vi mô trong quần thể thực vật phù du có thể tạo ra làn sóng gợn như thế nào trên toàn bộ mạng lưới thức ăn.",
        "synonyms": [
          "Bionomics",
          "Environmental biology"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-76",
        "word": "Rainforest",
        "phonetic": "/ˈreɪn.fɔːr.ɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Rừng mưa nhiệt đới rậm rạp",
        "definitionEn": "A luxuriant, dense forest rich in biodiversity, found typically in tropical areas with consistently heavy rainfall.",
        "exampleEn": "The Amazon rainforest produces substantial oxygen and shelters millions of species.",
        "exampleVi": "Rừng mưa nhiệt đới Amazon sản xuất lượng oxy dồi dào và che chở cho hàng triệu loài sinh vật.",
        "synonyms": [
          "Jungle",
          "Tropical forest"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-77",
        "word": "Tundra",
        "phonetic": "/ˈtʌn.drə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thảo nguyên đài nguyên băng giá vùng cực",
        "definitionEn": "A vast, flat, treeless Arctic region of Europe, Asia, and North America in which the subsoil is permanently frozen.",
        "exampleEn": "Reindeer herds migrate across the frozen Arctic tundra during brief polar summers.",
        "exampleVi": "Các đàn tuần lộc di cư qua vùng đài nguyên Bắc Cực băng giá trong những mùa hè vùng cực ngắn ngủi.",
        "synonyms": [
          "Arctic plain",
          "Frozen steppe"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-78",
        "word": "Canopy",
        "phonetic": "/ˈkæn.ə.pi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Tầng tán lá rậm rạp trên ngọn cây rừng",
        "definitionEn": "The uppermost branchy layer in a forest, formed by the crowns of the trees.",
        "exampleEn": "Many colorful tropical birds live exclusively high up in the dense jungle canopy.",
        "exampleVi": "Nhiều loài chim nhiệt đới rực rỡ sắc màu chỉ sinh sống độc quyền trên tầng tán lá rừng rậm rạp.",
        "synonyms": [
          "Treetop layer",
          "Forest roof"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-79",
        "word": "Understory",
        "phonetic": "/ˈʌn.dɚˌstɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tầng dưới tán cây của rừng nhiệt đới",
        "definitionEn": "A layer of vegetation beneath the main canopy of a forest.",
        "exampleEn": "Shade-tolerant ferns and mosses flourish in the dim, humid forest understory.",
        "exampleVi": "Các loài dương xỉ và rêu ưa bóng râm phát triển tươi tốt ở tầng dưới tán rừng ẩm ướt và mờ tối.",
        "synonyms": [
          "Lower vegetative layer"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-80",
        "word": "Decarbonization",
        "phonetic": "/diːˌkɑːr.bən.əˈzeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khử carbon, loại bỏ khí thải carbon trong công nghiệp",
        "definitionEn": "The reduction or removal of carbon dioxide emissions from energy systems and economies.",
        "exampleEn": "National decarbonization roadmaps require replacing heavy fossil fuels with green electricity.",
        "exampleVi": "Lộ trình khử carbon quốc gia đòi hỏi phải thay thế các nhiên liệu hóa thạch nặng bằng điện xanh.",
        "synonyms": [
          "Carbon reduction",
          "Zero-emission shift"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-81",
        "word": "Affluence",
        "phonetic": "/ˈæf.lu.əns/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự giàu sang phồn vinh làm gia tăng tiêu thụ tài nguyên",
        "definitionEn": "The state of having a great deal of money; wealth that drives consumer energy use.",
        "exampleEn": "Rising global affluence drives higher per capita meat consumption and carbon emissions.",
        "exampleVi": "Sự giàu sang gia tăng trên toàn cầu thúc đẩy mức tiêu thụ thịt bình quân đầu người và lượng phát thải carbon cao hơn.",
        "synonyms": [
          "Wealth",
          "Prosperity",
          "Abundance"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-82",
        "word": "Contaminant",
        "phonetic": "/kənˈtæm.ə.nənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chất gây ô nhiễm độc hại",
        "definitionEn": "A polluting or poisonous substance that makes something impure.",
        "exampleEn": "Heavy metal industrial contaminants were filtered from drinking water using activated charcoal.",
        "exampleVi": "Các chất ô nhiễm công nghiệp kim loại nặng đã được lọc khỏi nước uống bằng than hoạt tính.",
        "synonyms": [
          "Pollutant",
          "Toxin",
          "Impurity"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-83",
        "word": "Ecocide",
        "phonetic": "/ˈiː.koʊ.saɪd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tội ác tàn sát hủy hoại môi trường sinh thái",
        "definitionEn": "Destruction of the natural environment, especially when caused deliberately by human activity.",
        "exampleEn": "International legal scholars advocate recognizing massive industrial chemical dumping as ecocide.",
        "exampleVi": "Các học giả pháp lý quốc tế ủng hộ việc công nhận hành vi xả hóa chất công nghiệp quy mô lớn là tội ác hủy hoại sinh thái.",
        "synonyms": [
          "Environmental destruction"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-84",
        "word": "Biosphere",
        "phonetic": "/ˈbaɪ.oʊ.sfɪr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sinh quyển bao trùm sự sống trên Trái Đất",
        "definitionEn": "The regions of the surface, atmosphere, and hydrosphere of the earth occupied by living organisms.",
        "exampleEn": "Human greenhouse emissions are placing unprecedented stress on the planetary biosphere.",
        "exampleVi": "Lượng phát thải nhà kính của con người đang đặt áp lực chưa từng có lên sinh quyển toàn cầu.",
        "synonyms": [
          "Living world",
          "Ecosphere"
        ],
        "topicId": "environment"
      },
      {
        "id": "env-85",
        "word": "Defoliant",
        "phonetic": "/diːˈfoʊ.li.ənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Chất khai hoang làm rụng lá cây",
        "definitionEn": "A chemical that removes the leaves from trees and plants, often used in warfare.",
        "exampleEn": "Toxic chemical defoliants stripped pristine rainforest canopies, leaving lingering ecological scars.",
        "exampleVi": "Chất làm rụng lá hóa học độc hại đã tước đi những tán rừng nhiệt đới nguyên sơ, để lại những vết sẹo sinh thái dai dẳng.",
        "synonyms": [
          "Chemical herbicide",
          "Plant stripper"
        ],
        "topicId": "environment"
      }
    ]
  },
  {
    "id": "education",
    "title": "Giáo Dục & Học Thuật",
    "slug": "education",
    "icon": "BookOpen",
    "color": "text-cyan-500",
    "bgColor": "bg-cyan-50 dark:bg-cyan-950/40",
    "borderColor": "border-cyan-200 dark:border-cyan-800",
    "description": "Đại học, luận văn nghiên cứu, phương pháp sư phạm, học bổng và đào tạo nghề chuyên sâu",
    "wordCount": 85,
    "words": [
      {
        "id": "edu-1",
        "word": "Curriculum",
        "phonetic": "/kəˈrɪk.jə.ləm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khung chương trình học tập toàn khóa",
        "definitionEn": "The subjects comprising a course of study in a school or college.",
        "exampleEn": "The national curriculum incorporates hands-on computer programming from primary school onwards.",
        "exampleVi": "Chương trình học quốc gia đưa việc lập trình máy tính thực hành vào giảng dạy ngay từ cấp tiểu học trở đi.",
        "synonyms": [
          "Syllabus",
          "Course of study",
          "Program"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-2",
        "word": "Prerequisite",
        "phonetic": "/ˌpriːˈrek.wə.zɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Điều kiện tiên quyết phải hoàn thành trước",
        "definitionEn": "A thing that is required as a prior condition for something else to happen or exist.",
        "exampleEn": "Passing introductory calculus is an absolute prerequisite for enrolling in advanced quantum mechanics.",
        "exampleVi": "Vượt qua môn giải tích đại cương là điều kiện tiên quyết bắt buộc để đăng ký học cơ học lượng tử nâng cao.",
        "synonyms": [
          "Requirement",
          "Precondition",
          "Must-have"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-3",
        "word": "Dissertation",
        "phonetic": "/ˌdɪs.ɚˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Luận án tiến sĩ / luận văn thạc sĩ",
        "definitionEn": "A long essay on a particular subject, especially one written for a university degree or diploma.",
        "exampleEn": "Her doctoral dissertation on generative neural architecture search was published in a prestigious peer-reviewed journal.",
        "exampleVi": "Luận án tiến sĩ của cô về tìm kiếm kiến trúc mạng nơ-ron tạo sinh đã được xuất bản trên một tạp chí bình duyệt danh tiếng.",
        "synonyms": [
          "Thesis",
          "Treatise",
          "Academic paper"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-4",
        "word": "Tuition",
        "phonetic": "/tuːˈɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Học phí học đại học hoặc khóa học",
        "definitionEn": "A sum of money charged for teaching by a college or university.",
        "exampleEn": "The university awarded merit scholarships to cover international tuition fees for high-achieving applicants.",
        "exampleVi": "Trường đại học đã trao các suất học bổng tài năng để chi trả toàn bộ học phí quốc tế cho các ứng viên đạt thành tích xuất sắc.",
        "synonyms": [
          "Tuition fee",
          "School fee",
          "Instruction cost"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-5",
        "word": "Pedagogical",
        "phonetic": "/ˌped.əˈɡɑː.dʒɪ.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Thuộc về phương pháp sư phạm giảng dạy",
        "definitionEn": "Relating to teaching methods and the practice of educating.",
        "exampleEn": "Introducing interactive gamified quizzes reflects a modern pedagogical shift toward student engagement.",
        "exampleVi": "Đưa vào các câu đố trò chơi hóa mang tính tương tác phản ánh sự chuyển dịch sư phạm hiện đại hướng tới sự hào hứng của học sinh.",
        "synonyms": [
          "Instructional",
          "Educational",
          "Teaching-related"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-6",
        "word": "Syllabus",
        "phonetic": "/ˈsɪl.ə.bəs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đề cương chi tiết từng buổi học của môn học",
        "definitionEn": "An outline of the subjects in a course of study or teaching.",
        "exampleEn": "The professor handed out the semester course syllabus during the introductory orientation lecture.",
        "exampleVi": "Giáo sư đã phát đề cương môn học của học kỳ trong bài giảng định hướng nhập môn đầu tiên.",
        "synonyms": [
          "Course outline",
          "Curriculum summary"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-7",
        "word": "Plagiarism",
        "phonetic": "/ˈpleɪ.dʒɚ.ɪ.zəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Hành vi đạo văn, sao chép trái phép",
        "definitionEn": "The practice of taking someone else's work or ideas and passing them off as one's own.",
        "exampleEn": "Academic institutions employ automated scanning algorithms to detect and penalize deliberate plagiarism.",
        "exampleVi": "Các tổ chức học thuật sử dụng các thuật toán quét tự động để phát hiện và xử phạt nghiêm khắc hành vi cố ý đạo văn.",
        "synonyms": [
          "Copying",
          "Infringement",
          "Appropriation"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-8",
        "word": "Extracurricular",
        "phonetic": "/ˌek.strə.kəˈrɪk.jə.lɚ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Hoạt động ngoại khóa ngoài giờ học chính",
        "definitionEn": "Pursued in addition to the normal course of study.",
        "exampleEn": "Participation in extracurricular debate clubs sharpens public speaking and spontaneous rhetoric skills.",
        "exampleVi": "Tham gia vào các câu lạc bộ tranh biện ngoại khóa giúp mài giũa khả năng nói trước đám đông và kỹ năng hùng biện ngẫu hứng.",
        "synonyms": [
          "After-school",
          "Co-curricular"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-9",
        "word": "Alumni",
        "phonetic": "/əˈlʌm.naɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Cựu sinh viên từng tốt nghiệp",
        "definitionEn": "Graduates or former students of a particular school, college, or university.",
        "exampleEn": "Prominent university alumni donated fifty million dollars to fund cutting-edge artificial intelligence laboratories.",
        "exampleVi": "Các cựu sinh viên ưu tú của trường đại học đã quyên góp 50 triệu USD để tài trợ cho các phòng thí nghiệm trí tuệ nhân tạo tối tân.",
        "synonyms": [
          "Graduates",
          "Past students",
          "Old scholars"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-10",
        "word": "Scholarship",
        "phonetic": "/ˈskɑː.lɚ.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Học bổng tài trợ cho học sinh giỏi",
        "definitionEn": "A grant or payment made to support a student's education, awarded on the basis of academic or other achievement.",
        "exampleEn": "Winning a full scholarship to Cambridge University transformed the ambitious rural student's trajectory.",
        "exampleVi": "Giành được học bổng toàn phần đến Đại học Cambridge đã làm thay đổi hoàn toàn quỹ đạo cuộc đời của cậu học sinh nông thôn giàu khát vọng.",
        "synonyms": [
          "Grant",
          "Fellowship",
          "Endowment"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-11",
        "word": "Valedictorian",
        "phonetic": "/ˌvæl.ə.dɪkˈtɔːr.i.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thủ khoa tốt nghiệp có điểm số cao nhất khóa",
        "definitionEn": "A student having the highest rank in a graduating class who delivers the valedictory address.",
        "exampleEn": "As class valedictorian, she delivered an inspirational commencement address to three thousand graduating peers.",
        "exampleVi": "Với tư cách là thủ khoa của khóa, cô đã có bài phát biểu bế giảng đầy cảm hứng trước 3.000 bạn học tốt nghiệp.",
        "synonyms": [
          "Top graduate",
          "Class leader"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-12",
        "word": "Salutatorian",
        "phonetic": "/səˌluː.t̬əˈtɔːr.i.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Á khoa tốt nghiệp xếp hạng nhì toàn khóa",
        "definitionEn": "The student who ranks second highest in a graduating class and delivers the salutatory address.",
        "exampleEn": "The salutatorian was awarded a full engineering scholarship at the prestigious polytechnic institute.",
        "exampleVi": "Á khoa tốt nghiệp đã được trao học bổng kỹ thuật toàn phần tại viện bách khoa danh tiếng.",
        "synonyms": [
          "Second graduate",
          "Runner-up"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-13",
        "word": "Commencement",
        "phonetic": "/kəˈmens.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lễ tốt nghiệp đại học trang trọng",
        "definitionEn": "A ceremony in which degrees or diplomas are conferred on graduating students.",
        "exampleEn": "Families gathered in the grand auditorium to celebrate the annual university commencement ceremony.",
        "exampleVi": "Các gia đình tụ họp trong đại giảng đường để chúc mừng lễ tốt nghiệp đại học thường niên.",
        "synonyms": [
          "Graduation ceremony",
          "Convocation"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-14",
        "word": "Convocation",
        "phonetic": "/ˌkɑːn.vəˈkeɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Lễ triệu tập trao bằng tốt nghiệp trang trọng",
        "definitionEn": "A large formal assembly of people, especially for the conferring of university academic degrees.",
        "exampleEn": "The chancellor presided over the formal doctoral convocation ceremony in traditional academic regalia.",
        "exampleVi": "Hiệu trưởng đã chủ trì buổi lễ triệu tập trao bằng tiến sĩ trang trọng trong trang phục học thuật truyền thống.",
        "synonyms": [
          "Academic assembly",
          "Degree ceremony"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-15",
        "word": "Accreditation",
        "phonetic": "/əˌkred.əˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự kiểm định chất lượng giáo dục chính thức",
        "definitionEn": "The action or process of officially recognizing someone as having a particular status or being qualified to perform a particular activity.",
        "exampleEn": "The medical university achieved prestigious international accreditation from the World Federation for Medical Education.",
        "exampleVi": "Trường đại học y khoa đã đạt được sự kiểm định chất lượng quốc tế danh giá từ Liên đoàn Giáo dục Y khoa Thế giới.",
        "synonyms": [
          "Certification",
          "Validation",
          "Endorsement"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-16",
        "word": "Faculty",
        "phonetic": "/ˈfæk.əl.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đội ngũ giảng viên hoặc khoa chuyên ngành",
        "definitionEn": "The teaching staff of a university or college, or of one of its departments.",
        "exampleEn": "The computer science faculty includes world-renowned pioneers in deep learning and robotics.",
        "exampleVi": "Khoa khoa học máy tính quy tụ những người tiên phong nổi tiếng thế giới trong lĩnh vực học sâu và robot.",
        "synonyms": [
          "Academic staff",
          "Department professors"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-17",
        "word": "Tenure",
        "phonetic": "/ˈten.jɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Quyền giữ vị trí giáo sư biên chế trọn đời",
        "definitionEn": "A status granted to an employee, usually after a probationary period, indicating that the position or employment is permanent.",
        "exampleEn": "After six years of groundbreaking empirical publications, the assistant professor was granted coveted academic tenure.",
        "exampleVi": "Sau sáu năm có những công bố thực nghiệm mang tính đột phá, vị phó giáo sư đã được cấp biên chế học thuật trọn đời mà ai cũng khao khát.",
        "synonyms": [
          "Permanent post",
          "Job security"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-18",
        "word": "Sabbatical",
        "phonetic": "/səˈbæt̬.ɪ.kəl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Kỳ nghỉ phép nghiên cứu khoa học của giáo sư",
        "definitionEn": "A period of paid leave granted to a university teacher or other worker for study or travel, traditionally one year for every seven years worked.",
        "exampleEn": "During his year-long sabbatical, the physics professor conducted quantum computing research at CERN.",
        "exampleVi": "Trong kỳ nghỉ nghiên cứu kéo dài một năm, giáo sư vật lý đã thực hiện nghiên cứu điện toán lượng tử tại CERN.",
        "synonyms": [
          "Study leave",
          "Research break"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-19",
        "word": "Fellowship",
        "phonetic": "/ˈfel.oʊ.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Khoản tài trợ nghiên cứu sau tiến sĩ",
        "definitionEn": "A financial grant in aid, fellowship, or scholarship granted to a scholar or student.",
        "exampleEn": "She was awarded a competitive two-year postdoctoral fellowship in renewable energy systems.",
        "exampleVi": "Cô ấy đã được trao một suất tài trợ nghiên cứu sau tiến sĩ kéo dài hai năm đầy cạnh tranh về các hệ sinh thái năng lượng tái tạo.",
        "synonyms": [
          "Research grant",
          "Endowment"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-20",
        "word": "Mentorship",
        "phonetic": "/ˈmen.tɔːr.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Mối quan hệ cố vấn hướng dẫn học tập",
        "definitionEn": "The guidance provided by a mentor, especially an experienced person in a company or educational institution.",
        "exampleEn": "Close one-on-one mentorship from a senior scientist dramatically accelerates a graduate student's laboratory mastery.",
        "exampleVi": "Sự cố vấn kèm cặp một - một chặt chẽ từ một nhà khoa học cấp cao giúp đẩy nhanh đáng kể khả năng làm chủ phòng thí nghiệm của một sinh viên sau đại học.",
        "synonyms": [
          "Guidance",
          "Tutoring",
          "Coaching"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-21",
        "word": "Pedagogy",
        "phonetic": "/ˈped.ə.ɡɑː.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Khoa học và nghệ thuật giảng dạy sư phạm",
        "definitionEn": "The method and practice of teaching, especially as an academic subject or theoretical concept.",
        "exampleEn": "Constructivist pedagogy emphasizes that students construct knowledge through collaborative hands-on projects.",
        "exampleVi": "Phương pháp sư phạm kiến tạo nhấn mạnh rằng học sinh tự xây dựng kiến thức thông qua các dự án thực hành có tính hợp tác.",
        "synonyms": [
          "Teaching theory",
          "Educational science"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-22",
        "word": "Didactic",
        "phonetic": "/daɪˈdæk.tɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Mang tính giáo huấn, truyền thụ kiến thức trực tiếp",
        "definitionEn": "Intended to teach, particularly in having moral instruction as an ulterior motive.",
        "exampleEn": "Modern educational games balance didactic instruction with open-ended creative exploration.",
        "exampleVi": "Các trò chơi giáo dục hiện đại cân bằng giữa việc hướng dẫn mang tính giáo huấn trực tiếp với việc khám phá sáng tạo mở.",
        "synonyms": [
          "Instructive",
          "Educational",
          "Informative"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-23",
        "word": "Assessment",
        "phonetic": "/əˈses.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đánh giá kết quả học tập",
        "definitionEn": "The evaluation or estimation of the nature, quality, or ability of someone or something.",
        "exampleEn": "Continuous classroom assessment through weekly project deliverables provides deeper insights than a single final exam.",
        "exampleVi": "Đánh giá thường xuyên trên lớp thông qua các sản phẩm dự án hàng tuần mang lại cái nhìn sâu sắc hơn là một bài thi cuối kỳ duy nhất.",
        "synonyms": [
          "Evaluation",
          "Appraisal",
          "Testing"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-24",
        "word": "Formative",
        "phonetic": "/ˈfɔːr.mə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đánh giá quá trình để cải thiện (formative assessment)",
        "definitionEn": "Serving to form something, especially having a profound and lasting influence on development; diagnostic assessment during learning.",
        "exampleEn": "Formative quizzes provide immediate actionable feedback to help students correct misconceptions before finals.",
        "exampleVi": "Các bài kiểm tra ngắn trong quá trình học cung cấp phản hồi tức thì để giúp học sinh sửa chữa những hiểu lầm trước khi bước vào kỳ thi cuối kỳ.",
        "synonyms": [
          "Developmental",
          "Diagnostic"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-25",
        "word": "Summative",
        "phonetic": "/ˈsʌm.ə.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đánh giá tổng kết cuối kỳ (summative evaluation)",
        "definitionEn": "Gathering together; in education, assessment administered at the end of an instructional unit to measure learning.",
        "exampleEn": "The final three-hour written examination represents the summative assessment for the entire semester.",
        "exampleVi": "Bài thi viết kéo dài ba giờ cuối kỳ đại diện cho bài đánh giá tổng kết cho toàn bộ học kỳ.",
        "synonyms": [
          "Cumulative",
          "Final evaluation"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-26",
        "word": "Matriculate",
        "phonetic": "/məˈtrɪk.jə.leɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Trúng tuyển và chính thức nhập học đại học",
        "definitionEn": "Enroll as a student at a college or university.",
        "exampleEn": "Over four thousand talented freshmen matriculated into the engineering academy this autumn.",
        "exampleVi": "Hơn bốn ngàn tân sinh viên tài năng đã chính thức trúng tuyển nhập học vào học viện kỹ thuật vào mùa thu này.",
        "synonyms": [
          "Enroll",
          "Register",
          "Enter college"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-27",
        "word": "Auditing",
        "phonetic": "/ˈɑː.dɪ.tɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Dự thính môn học lấy kiến thức không lấy điểm",
        "definitionEn": "Attending a university course informally without working for academic credit.",
        "exampleEn": "Auditing the world history lecture allowed the working professional to explore history without exam stress.",
        "exampleVi": "Dự thính bài giảng lịch sử thế giới cho phép người đi làm có thể khám phá lịch sử mà không phải chịu áp lực thi cử.",
        "synonyms": [
          "Unofficial listening",
          "Sitting in"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-28",
        "word": "Elective",
        "phonetic": "/iˈlek.tɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Môn học tự chọn theo sở thích",
        "definitionEn": "An optional course of study in a university or school curriculum.",
        "exampleEn": "Students can select two humanistic electives such as philosophy or creative writing to round out their technical degrees.",
        "exampleVi": "Sinh viên có thể chọn hai môn học tự chọn mang tính nhân văn như triết học hoặc viết sáng tạo để hoàn thiện tấm bằng kỹ thuật của mình.",
        "synonyms": [
          "Optional subject",
          "Selective course"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-29",
        "word": "Core Subject",
        "phonetic": "/kɔːr ˈsʌb.dʒɪkt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Môn học bắt buộc cốt lõi",
        "definitionEn": "A course of study that is compulsory for all students in a particular educational track.",
        "exampleEn": "Linear algebra and discrete mathematics are compulsory core subjects for computer software majors.",
        "exampleVi": "Đại số tuyến tính và toán rời rạc là các môn học cốt lõi bắt buộc đối với sinh viên chuyên ngành phần mềm máy tính.",
        "synonyms": [
          "Compulsory course",
          "Mandatory study"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-30",
        "word": "Transcript",
        "phonetic": "/ˈtræn.skrɪpt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bảng điểm học tập chính thức",
        "definitionEn": "An official record of a student's work, showing courses taken and grades achieved.",
        "exampleEn": "Submit an official certified transcript alongside your graduate school application dossier.",
        "exampleVi": "Hãy nộp bảng điểm chính thức có công chứng đính kèm hồ sơ xin học sau đại học của bạn.",
        "synonyms": [
          "Grade report",
          "Academic record"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-31",
        "word": "Grade Point Average",
        "phonetic": "/ˌɡreɪd ˌpɔɪnt ˈæv.ɚ.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Điểm trung bình tích lũy toàn khóa (GPA)",
        "definitionEn": "A number representing the average value of the accumulated final grades earned in courses over time.",
        "exampleEn": "Maintaining a cumulative grade point average above 3.8 qualifies students for dean's list honors.",
        "exampleVi": "Duy trì điểm trung bình tích lũy GPA trên 3.8 giúp sinh viên đủ điều kiện nhận vinh danh trong danh sách sinh viên xuất sắc của khoa.",
        "synonyms": [
          "GPA",
          "Cumulative mark"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-32",
        "word": "Honors",
        "phonetic": "/ˈɑː.nɚz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chương trình đào tạo danh dự cho sinh viên giỏi",
        "definitionEn": "A degree or award that recognizes outstanding achievement.",
        "exampleEn": "She graduated with highest honors in molecular biochemistry after discovering a new enzyme pathway.",
        "exampleVi": "Cô đã tốt nghiệp với tấm bằng danh dự loại xuất sắc ngành hóa sinh phân tử sau khi phát hiện ra một con đường enzyme mới.",
        "synonyms": [
          "Distinction",
          "Laudable degree"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-33",
        "word": "Cum Laude",
        "phonetic": "/ˌkʊm ˈlaʊ.deɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Tốt nghiệp loại giỏi danh dự (tiếng Latin)",
        "definitionEn": "With honor; with distinction, typically used on university academic degrees.",
        "exampleEn": "He earned his bachelor's degree cum laude from Stanford University.",
        "exampleVi": "Anh đã nhận bằng cử nhân loại giỏi cum laude từ Đại học Stanford.",
        "synonyms": [
          "With honors",
          "With praise"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-34",
        "word": "Magna Cum Laude",
        "phonetic": "/ˌmæɡ.nə kʊm ˈlaʊ.deɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Tốt nghiệp loại xuất sắc ưu tú (tiếng Latin)",
        "definitionEn": "With great honor; with high distinction.",
        "exampleEn": "She graduated magna cum laude, ranking within the top five percent of her medical class.",
        "exampleVi": "Cô đã tốt nghiệp loại xuất sắc magna cum laude, nằm trong top 5% sinh viên lớp y của mình.",
        "synonyms": [
          "With great distinction"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-35",
        "word": "Summa Cum Laude",
        "phonetic": "/ˌsuː.mə kʊm ˈlaʊ.deɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Tốt nghiệp thủ khoa loại xuất sắc tối cao (tiếng Latin)",
        "definitionEn": "With highest honor; with the highest distinction.",
        "exampleEn": "Finishing summa cum laude earned him an immediate prestigious faculty fellowship.",
        "exampleVi": "Tốt nghiệp loại xuất sắc tối cao summa cum laude đã mang lại cho anh một suất học bổng nghiên cứu giảng viên danh giá ngay lập tức.",
        "synonyms": [
          "With highest distinction",
          "Top honor"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-36",
        "word": "Dormitory",
        "phonetic": "/ˈdɔːr.mə.tɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Ký túc xá sinh viên trong khuôn viên trường",
        "definitionEn": "A large bedroom for a number of people in a school or institution; a university hall of residence.",
        "exampleEn": "Living in the university dormitory fosters lifelong friendships among diverse international students.",
        "exampleVi": "Sống trong ký túc xá đại học nuôi dưỡng những tình bạn trọn đời giữa các sinh viên quốc tế đa dạng.",
        "synonyms": [
          "Dorm",
          "Hall of residence",
          "Student housing"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-37",
        "word": "Campus",
        "phonetic": "/ˈkæm.pəs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Khuôn viên trường đại học",
        "definitionEn": "The grounds and buildings of a university or college.",
        "exampleEn": "The sprawling university campus features ancient Gothic libraries, tranquil botanical gardens, and modern laboratories.",
        "exampleVi": "Khuôn viên trường đại học rộng lớn nổi bật với những thư viện phong cách Gothic cổ kính, vườn bách thảo thanh bình và các phòng thí nghiệm hiện đại.",
        "synonyms": [
          "University grounds",
          "College precinct"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-38",
        "word": "Lecturer",
        "phonetic": "/ˈlek.tʃɚ.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Giảng viên đại học đứng lớp",
        "definitionEn": "A person who gives lectures, especially as an occupation at a university or college of higher education.",
        "exampleEn": "The guest lecturer shared practical insights from twenty years of building enterprise cloud systems.",
        "exampleVi": "Vị giảng viên thỉnh giảng đã chia sẻ những bài học thực tế từ hai mươi năm xây dựng các hệ sinh thái đám mây cho doanh nghiệp.",
        "synonyms": [
          "Instructor",
          "Teacher",
          "Academic"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-39",
        "word": "Professor",
        "phonetic": "/prəˈfes.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Giáo sư giảng dạy và nghiên cứu học thuật",
        "definitionEn": "A university academic of the highest rank; a holder of an endowed or designated university chair.",
        "exampleEn": "The physics professor was honored with the international medal for her research on gravitational waves.",
        "exampleVi": "Vị giáo sư vật lý đã được vinh danh bằng huy chương quốc tế cho công trình nghiên cứu về sóng hấp dẫn.",
        "synonyms": [
          "Don",
          "Academic chair",
          "Scholar"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-40",
        "word": "Dean",
        "phonetic": "/diːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trưởng khoa chuyên ngành",
        "definitionEn": "The head of a division, faculty, or school in a college or university.",
        "exampleEn": "The dean of the business school introduced a groundbreaking program combining finance with data science.",
        "exampleVi": "Trưởng khoa kinh doanh đã giới thiệu một chương trình đào tạo mang tính đột phá kết hợp giữa tài chính với khoa học dữ liệu.",
        "synonyms": [
          "Faculty head",
          "Division director"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-41",
        "word": "Chancellor",
        "phonetic": "/ˈtʃæn.səl.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Giám đốc / viện trưởng điều hành trường đại học",
        "definitionEn": "The head of the government in some European countries, or the titular head of a university.",
        "exampleEn": "The university chancellor delivered the welcoming keynote address to incoming international freshmen.",
        "exampleVi": "Giám đốc trường đại học đã có bài phát biểu quan trọng chào đón các tân sinh viên quốc tế nhập trường.",
        "synonyms": [
          "University head",
          "President",
          "Provost"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-42",
        "word": "Provost",
        "phonetic": "/ˈproʊ.voʊst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Phó giám đốc phụ trách học thuật đại học",
        "definitionEn": "A senior administrative officer in certain universities.",
        "exampleEn": "The university provost oversees all academic appointments, research grants, and curriculum standards.",
        "exampleVi": "Phó viện trưởng phụ trách học thuật giám sát toàn bộ việc bổ nhiệm giảng viên, các khoản tài trợ nghiên cứu và các tiêu chuẩn chương trình học.",
        "synonyms": [
          "Chief academic officer",
          "Vice-chancellor"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-43",
        "word": "Registrar",
        "phonetic": "/ˈredʒ.ə.strɑːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phòng đào tạo quản lý hồ sơ sinh viên",
        "definitionEn": "An official responsible for keeping a register or official records at a university.",
        "exampleEn": "Visit the university registrar office to order official sealed transcripts for overseas study.",
        "exampleVi": "Hãy đến văn phòng đào tạo của trường đại học để xin cấp bảng điểm chính thức có dán tem niêm phong phục vụ du học.",
        "synonyms": [
          "Records officer",
          "Academic clerk"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-44",
        "word": "Bursar",
        "phonetic": "/ˈbɝː.sɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Trưởng phòng tài chính quản lý học phí trường học",
        "definitionEn": "A person who manages the financial affairs of a college or school.",
        "exampleEn": "The bursar sent a friendly payment reminder regarding second-semester accommodation fees.",
        "exampleVi": "Trưởng phòng tài chính đã gửi một lá thư nhắc nhở thanh toán ân cần về phí chỗ ở ký túc xá học kỳ hai.",
        "synonyms": [
          "Treasurer",
          "Financial manager"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-45",
        "word": "Peer Review",
        "phonetic": "/ˌpɪr rɪˈvjuː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quy trình bình duyệt khoa học độc lập của đồng nghiệp",
        "definitionEn": "Evaluation of scientific, academic, or professional work by others working in the same field.",
        "exampleEn": "Manuscripts undergo rigorous anonymous peer review prior to acceptance in prestigious medical journals.",
        "exampleVi": "Các bản thảo phải trải qua quá trình bình duyệt kín nghiêm ngặt từ các đồng nghiệp trước khi được chấp nhận đăng trên các tạp chí y khoa danh tiếng.",
        "synonyms": [
          "Scholarly review",
          "Expert vetting"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-46",
        "word": "Citation",
        "phonetic": "/saɪˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Trích dẫn tài liệu học thuật theo chuẩn",
        "definitionEn": "A quotation from or reference to a book, paper, or author, especially in a scholarly work.",
        "exampleEn": "His groundbreaking 2017 paper on deep attention mechanisms garnered over fifty thousand citations.",
        "exampleVi": "Bài báo mang tính đột phá năm 2017 của ông về cơ chế chú ý sâu đã thu hút được hơn 50.000 lượt trích dẫn.",
        "synonyms": [
          "Reference",
          "Bibliographical note"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-47",
        "word": "Bibliography",
        "phonetic": "/ˌbɪb.liˈɑː.ɡrə.fi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Danh mục tài liệu tham khảo cuối luận văn",
        "definitionEn": "A list of the books of a particular author or printer, or on a particular subject, appended to a scholarly article.",
        "exampleEn": "Ensure your thesis bibliography is meticulously formatted according to standard APA 7th edition guidelines.",
        "exampleVi": "Hãy đảm bảo danh mục tài liệu tham khảo trong luận văn của bạn được định dạng tỉ mỉ theo đúng chuẩn hướng dẫn APA xuất bản lần thứ 7.",
        "synonyms": [
          "References",
          "Reading list"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-48",
        "word": "Plagiarize",
        "phonetic": "/ˈpleɪ.dʒɚ.aɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Đạo văn, chép bài của người khác",
        "definitionEn": "Take the work or an idea of someone else and pass it off as one's own.",
        "exampleEn": "Never plagiarize paragraphs from online encyclopedias; always paraphrase and cite original sources correctly.",
        "exampleVi": "Tuyệt đối không bao giờ được đạo văn các đoạn văn từ bách khoa toàn thư trực tuyến; hãy luôn diễn đạt lại theo cách của mình và trích dẫn nguồn gốc chính xác.",
        "synonyms": [
          "Copy",
          "Steal ideas",
          "Appropriate"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-49",
        "word": "Paraphrase",
        "phonetic": "/ˈper.ə.freɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Diễn giải lại bằng lời văn của mình mà không đổi nghĩa",
        "definitionEn": "Express the meaning of the writer or speaker or something written or spoken using different words, especially to achieve greater clarity.",
        "exampleEn": "Skilled academic essayists learn how to paraphrase complex philosophical arguments concisely.",
        "exampleVi": "Những người viết luận học thuật thành thạo biết cách diễn giải lại các lập luận triết học phức tạp một cách súc tích.",
        "synonyms": [
          "Reword",
          "Restate",
          "Rephrase"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-50",
        "word": "Quotation",
        "phonetic": "/kwoʊˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đoạn trích dẫn nguyên văn đặt trong ngoặc kép",
        "definitionEn": "A group of words taken from a text or speech and repeated by someone other than the original author or speaker.",
        "exampleEn": "The essay opens with a poignant quotation from Nelson Mandela on the transformative power of education.",
        "exampleVi": "Bài luận mở đầu bằng một câu trích dẫn đầy cảm xúc từ Nelson Mandela về sức mạnh biến đổi to lớn của giáo dục.",
        "synonyms": [
          "Citation",
          "Excerpt",
          "Quote"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-51",
        "word": "Doctorate",
        "phonetic": "/ˈdɑːk.tɚ.ət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Học vị tiến sĩ cao nhất",
        "definitionEn": "The highest degree awarded by a graduate school or other approved educational organization.",
        "exampleEn": "She completed her doctorate in computational linguistics in just three and a half years.",
        "exampleVi": "Cô đã hoàn thành học vị tiến sĩ ngành ngôn ngữ học tính toán chỉ trong ba năm rưỡi.",
        "synonyms": [
          "PhD",
          "Doctor's degree"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-52",
        "word": "Master's Degree",
        "phonetic": "/ˈmæs.tɚz dɪˌɡriː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bằng thạc sĩ sau đại học",
        "definitionEn": "A degree awarded by a graduate school and usually requiring at least one year of full-time study after a bachelor's degree.",
        "exampleEn": "He pursued an online Master's degree in software engineering while continuing his full-time job.",
        "exampleVi": "Anh đã theo học một chương trình lấy bằng thạc sĩ trực tuyến về kỹ thuật phần mềm trong khi vẫn tiếp tục công việc toàn thời gian của mình.",
        "synonyms": [
          "Postgraduate degree",
          "Master's"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-53",
        "word": "Bachelor's Degree",
        "phonetic": "/ˈbætʃ.əl.ɚz dɪˌɡriː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Bằng cử nhân đại học 4 năm",
        "definitionEn": "An undergraduate academic degree awarded by colleges and universities upon completion of a course of study lasting three to six years.",
        "exampleEn": "A bachelor's degree in computer science or electrical engineering provides a solid foundational launchpad.",
        "exampleVi": "Bằng cử nhân khoa học máy tính hoặc kỹ thuật điện mang lại một bệ phóng nền tảng vô cùng vững chắc.",
        "synonyms": [
          "Undergraduate degree",
          "Bachelor's"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-54",
        "word": "Associate Degree",
        "phonetic": "/əˈsoʊ.ʃi.ət dɪˌɡriː/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bằng cao đẳng 2 năm",
        "definitionEn": "A degree granted after a two-year course of study, especially by a community or junior college.",
        "exampleEn": "Earning an associate degree in cybersecurity enabled him to transition quickly into entry-level network defense.",
        "exampleVi": "Đạt được tấm bằng cao đẳng về an ninh mạng đã cho phép anh nhanh chóng chuyển mình sang công việc phòng thủ mạng cấp độ đầu vào.",
        "synonyms": [
          "Junior degree",
          "Community college diploma"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-55",
        "word": "Diploma",
        "phonetic": "/dɪˈploʊ.mə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Chứng chỉ hoặc văn bằng tốt nghiệp",
        "definitionEn": "A certificate awarded by an educational establishment to show that someone has successfully completed a course of study.",
        "exampleEn": "Students who pass the rigorous vocational electrical course receive an accredited technical diploma.",
        "exampleVi": "Học sinh vượt qua khóa học nghề điện nghiêm ngặt sẽ nhận được một tấm văn bằng kỹ thuật được kiểm định.",
        "synonyms": [
          "Certificate",
          "Graduation award"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-56",
        "word": "Vocational",
        "phonetic": "/voʊˈkeɪ.ʃən.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Thuộc về đào tạo học nghề thực hành",
        "definitionEn": "Relating to an occupation or employment; directed toward preparing someone for a trade or trade skill.",
        "exampleEn": "Vocational institutes provide intensive practical training in precision machining, welding, and carpentry.",
        "exampleVi": "Các viện đào tạo nghề cung cấp quá trình đào tạo thực hành chuyên sâu về gia công chính xác, hàn và nghề mộc.",
        "synonyms": [
          "Career-oriented",
          "Trade-based",
          "Occupational"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-57",
        "word": "Apprenticeship",
        "phonetic": "/əˈpren.tɪs.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Thời gian học việc thực tế dưới sự hướng dẫn của thợ lành nghề",
        "definitionEn": "The position of an apprentice; a period of training under a skilled employer.",
        "exampleEn": "Completing a four-year electrical apprenticeship combines paid on-the-job training with classroom theory.",
        "exampleVi": "Hoàn thành kỳ học việc ngành điện kéo dài bốn năm là sự kết hợp giữa đào tạo thực tế tại chỗ có lương với lý thuyết trên lớp.",
        "synonyms": [
          "Internship",
          "Traineeship",
          "Practicum"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-58",
        "word": "Practicum",
        "phonetic": "/ˈpræk.tə.kəm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Học phần thực hành thực địa áp dụng lý thuyết",
        "definitionEn": "A practical section of a course of study in medicine, nursing, or education.",
        "exampleEn": "Student teachers spend ten weeks in public school classrooms completing their mandatory clinical practicum.",
        "exampleVi": "Các giáo viên sinh viên thực tập dành mười tuần trong các lớp học trường công lập để hoàn thành học phần thực hành lâm sàng bắt buộc.",
        "synonyms": [
          "Practical training",
          "Fieldwork"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-59",
        "word": "Internship",
        "phonetic": "/ˈɪn.tɝːn.ʃɪp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Kỳ thực tập sinh viên tại doanh nghiệp",
        "definitionEn": "The position of a student or trainee who works in an organization, sometimes without pay, in order to gain work experience.",
        "exampleEn": "Securing a summer software engineering internship at a tech giant provides invaluable real-world experience.",
        "exampleVi": "Giành được một suất thực tập kỹ thuật phần mềm mùa hè tại một tập đoàn công nghệ lớn mang lại kinh nghiệm thực tế vô giá.",
        "synonyms": [
          "Work placement",
          "Traineeship"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-60",
        "word": "Co-op",
        "phonetic": "/ˈkoʊ.ɑːp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chương trình thực tập vừa học vừa làm xen kẽ của đại học",
        "definitionEn": "A cooperative education program balancing classroom learning with full-time paid professional employment.",
        "exampleEn": "University co-op programs allow students to graduate with eighteen months of verified professional engineering experience.",
        "exampleVi": "Các chương trình đại học hợp tác vừa học vừa làm cho phép sinh viên tốt nghiệp với 18 tháng kinh nghiệm kỹ thuật chuyên nghiệp đã được xác thực.",
        "synonyms": [
          "Cooperative education",
          "Work-study"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-61",
        "word": "Pedagogue",
        "phonetic": "/ˈped.ə.ɡɑːɡ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nhà sư phạm, thầy giáo nghiêm cẩn",
        "definitionEn": "A teacher, especially a strict or pedantic one.",
        "exampleEn": "The legendary pedagogue inspired generations of young mathematicians with his infectious enthusiasm.",
        "exampleVi": "Vị nhà sư phạm huyền thoại đã truyền cảm hứng cho nhiều thế hệ các nhà toán học trẻ bằng sự nhiệt tình lan tỏa của mình.",
        "synonyms": [
          "Teacher",
          "Educator",
          "Instructor"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-62",
        "word": "Polymath",
        "phonetic": "/ˈpɑː.li.mæθ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Học giả uyên bác thông tuệ nhiều lĩnh vực",
        "definitionEn": "A person of wide-ranging knowledge or learning across multiple distinct disciplines.",
        "exampleEn": "Leonardo da Vinci stands as the supreme historical embodiment of the Renaissance polymath.",
        "exampleVi": "Leonardo da Vinci sừng sững như hiện thân lịch sử tối cao của một học giả uyên bác thời Phục hưng thông thạo nhiều lĩnh vực.",
        "synonyms": [
          "Renaissance person",
          "Universal genius"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-63",
        "word": "Autodidact",
        "phonetic": "/ˌɑː.toʊˈdaɪ.dækt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Người tự học thành tài không qua trường lớp",
        "definitionEn": "A self-taught person.",
        "exampleEn": "As an inquisitive autodidact, he mastered computer programming and Japanese entirely through online resources.",
        "exampleVi": "Là một người tự học ham học hỏi, anh đã thành thạo lập trình máy tính và tiếng Nhật hoàn toàn thông qua các tài nguyên trực tuyến.",
        "synonyms": [
          "Self-taught scholar",
          "Independent learner"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-64",
        "word": "Illiteracy",
        "phonetic": "/ɪˈlɪt̬.ɚ.ə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nạn mù chữ không biết đọc viết",
        "definitionEn": "The inability to read or write.",
        "exampleEn": "Targeted village literacy initiatives helped eradicate adult illiteracy in remote mountainous districts.",
        "exampleVi": "Các sáng kiến xóa mù chữ tại các bản làng mục tiêu đã giúp xóa bỏ nạn mù chữ ở người lớn tại các huyện miền núi vùng sâu vùng xa.",
        "synonyms": [
          "Inability to read",
          "Unlettered state"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-65",
        "word": "Literacy",
        "phonetic": "/ˈlɪt̬.ɚ.ə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khả năng biết đọc biết viết thành thạo",
        "definitionEn": "The ability to read and write.",
        "exampleEn": "Universal youth literacy is a primary foundation for sustainable national economic development.",
        "exampleVi": "Xóa mù chữ toàn diện cho thanh thiếu niên là nền tảng hàng đầu cho sự phát triển kinh tế quốc gia bền vững.",
        "synonyms": [
          "Reading ability",
          "Education level"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-66",
        "word": "Numeracy",
        "phonetic": "/ˈnuː.mɚ.ə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Năng lực tính toán toán học cơ bản",
        "definitionEn": "The ability to understand and work with numbers.",
        "exampleEn": "Early childhood educational games foster intuitive basic numeracy and spatial reasoning.",
        "exampleVi": "Các trò chơi giáo dục đầu đời nuôi dưỡng năng lực tính toán cơ bản và tư duy không gian một cách trực quan.",
        "synonyms": [
          "Mathematical skill",
          "Number literacy"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-67",
        "word": "Pedantry",
        "phonetic": "/ˈped.ən.tri/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Thói câu nệ tiểu tiết sách vở máy móc",
        "definitionEn": "Excessive concern with minor details and rules in learning or teaching.",
        "exampleEn": "Avoid sterile academic pedantry; focus instead on applying core concepts to solve real human problems.",
        "exampleVi": "Hãy tránh thói câu nệ sách vở tiểu tiết máy móc vô bổ; thay vào đó hãy tập trung vào việc áp dụng các khái niệm cốt lõi để giải quyết các vấn đề thực tế của con người.",
        "synonyms": [
          "Dogmatism",
          "Over-punctiliousness"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-68",
        "word": "Erudite",
        "phonetic": "/ˈer.jʊ.daɪt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Uyên bác, học rộng tài cao",
        "definitionEn": "Having or showing great knowledge or learning.",
        "exampleEn": "The distinguished professor delivered an erudite lecture examining ancient Roman legal systems.",
        "exampleVi": "Vị giáo sư lỗi lạc đã có một bài giảng uyên bác khảo cứu các hệ thống pháp luật La Mã cổ đại.",
        "synonyms": [
          "Scholarly",
          "Learned",
          "Intellectual"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-69",
        "word": "Intellectual",
        "phonetic": "/ˌɪn.t̬əlˈek.tʃu.əl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về trí tuệ và học thuật thông thái",
        "definitionEn": "Relating to the intellect; appealing to or engaging the intellect.",
        "exampleEn": "Engaging in spirited intellectual discussions with colleagues broadens your scientific horizons.",
        "exampleVi": "Tham gia vào các cuộc thảo luận học thuật sôi nổi với các đồng nghiệp giúp mở rộng chân trời khoa học của bạn.",
        "synonyms": [
          "Scholarly",
          "Cerebral",
          "Mental"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-70",
        "word": "Enlightenment",
        "phonetic": "/ɪnˈlaɪ.tən.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Sự khai sáng trí tuệ, giác ngộ tri thức",
        "definitionEn": "The state of being enlightened; a European intellectual movement of the 17th and 18th centuries emphasizing reason and individualism rather than tradition.",
        "exampleEn": "The 18th-century European Enlightenment championed empirical scientific inquiry and universal human rights.",
        "exampleVi": "Thời kỳ Khai sáng châu Âu thế kỷ 18 đã cổ vũ mạnh mẽ cho cuộc điều tra khoa học thực nghiệm và các quyền con người phổ quát.",
        "synonyms": [
          "Illumination",
          "Awakening",
          "Understanding"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-71",
        "word": "Scholar",
        "phonetic": "/ˈskɑː.lɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Học giả nghiên cứu chuyên sâu một lĩnh vực",
        "definitionEn": "A specialist in a particular branch of study, especially the humanities; a distinguished academic.",
        "exampleEn": "The visiting Sanskrit scholar decrypted ancient palm-leaf manuscripts preserved in the monastery.",
        "exampleVi": "Vị học giả tiếng Phạn thỉnh giảng đã giải mã những bản thảo cổ trên lá cọ được bảo tồn trong tu viện.",
        "synonyms": [
          "Academic",
          "Researcher",
          "Intellectual"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-72",
        "word": "Classroom",
        "phonetic": "/ˈklæs.ruːm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A1",
        "meaningVi": "Phòng học nơi học sinh tiếp thu kiến thức",
        "definitionEn": "A room, typically in a school, in which a class of students is taught.",
        "exampleEn": "Modern smart classrooms are outfitted with interactive digital touchscreens and ergonomic desks.",
        "exampleVi": "Các phòng học thông minh hiện đại được trang bị màn hình cảm ứng kỹ thuật số tương tác và bàn ghế công thái học.",
        "synonyms": [
          "Schoolroom",
          "Lecture hall"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-73",
        "word": "Laboratory",
        "phonetic": "/ˈlæb.rə.tɔːr.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Phòng thí nghiệm khoa học",
        "definitionEn": "A room or building equipped for scientific experiments, research, or teaching.",
        "exampleEn": "Students must wear protective goggles and lab coats inside the organic chemistry laboratory.",
        "exampleVi": "Sinh viên phải đeo kính bảo hộ và áo choàng phòng thí nghiệm khi ở bên trong phòng thí nghiệm hóa học hữu cơ.",
        "synonyms": [
          "Lab",
          "Research facility"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-74",
        "word": "Library",
        "phonetic": "/ˈlaɪ.brer.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A1",
        "meaningVi": "Thư viện lưu trữ sách và tài liệu học tập",
        "definitionEn": "A building or room containing collections of books, periodicals, and sometimes films and recorded music for use or borrowing by the public or the members of an institution.",
        "exampleEn": "The university library provides quiet study cubicles and access to millions of digital academic journals.",
        "exampleVi": "Thư viện đại học cung cấp các khoang học tập yên tĩnh và quyền truy cập vào hàng triệu tạp chí học thuật kỹ thuật số.",
        "synonyms": [
          "Athenaeum",
          "Book depository"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-75",
        "word": "Seminar",
        "phonetic": "/ˈsem.ə.nɑːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Buổi hội thảo chuyên đề thảo luận sâu",
        "definitionEn": "A conference or other meeting for discussion or training; a class at a university or college in which a topic is discussed by a teacher and a small group of students.",
        "exampleEn": "Graduate students presented their ongoing research papers during the weekly departmental seminar.",
        "exampleVi": "Các học viên cao học đã trình bày các bài báo nghiên cứu đang thực hiện của họ trong buổi hội thảo chuyên đề hàng tuần của khoa.",
        "synonyms": [
          "Colloquium",
          "Workshop",
          "Discussion group"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-76",
        "word": "Workshop",
        "phonetic": "/ˈwɝːk.ʃɑːp/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Buổi học thực hành rèn luyện kỹ năng thực tế",
        "definitionEn": "A meeting at which a group of people engage in intensive discussion and activity on a particular subject or project.",
        "exampleEn": "The three-day interactive writing workshop taught aspiring authors how to plot compelling novels.",
        "exampleVi": "Hội thảo viết thực hành kéo dài ba ngày đã dạy cho các tác giả đầy khát vọng cách xây dựng cốt truyện cho những cuốn tiểu thuyết hấp dẫn.",
        "synonyms": [
          "Masterclass",
          "Training session",
          "Clinic"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-77",
        "word": "Symposium",
        "phonetic": "/sɪmˈpoʊ.zi.əm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hội nghị khoa học chuyên đề tầm cỡ",
        "definitionEn": "A conference or meeting to discuss a particular subject; a collection of essays or papers on a subject by a number of contributors.",
        "exampleEn": "International climatologists convened at the annual polar symposium to discuss ice sheet melting rates.",
        "exampleVi": "Các nhà khí hậu học quốc tế đã triệu tập tại hội nghị chuyên đề vùng cực thường niên để thảo luận về tốc độ tan chảy của các tảng băng.",
        "synonyms": [
          "Conference",
          "Convention",
          "Colloquium"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-78",
        "word": "Colloquium",
        "phonetic": "/kəˈloʊ.kwi.əm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Hội đàm học thuật trao đổi quan điểm",
        "definitionEn": "An academic conference or seminar.",
        "exampleEn": "The philosophy department hosts a monthly colloquium inviting distinguished external scholars.",
        "exampleVi": "Khoa triết học tổ chức một buổi hội đàm học thuật hàng tháng mời các học giả lỗi lạc từ bên ngoài đến chia sẻ.",
        "synonyms": [
          "Symposium",
          "Academic gathering"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-79",
        "word": "Thesis",
        "phonetic": "/ˈθiː.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Luận điểm nghiên cứu hoặc bài luận văn tốt nghiệp",
        "definitionEn": "A long piece of writing on a particular subject, especially one that is done for a higher college or university degree.",
        "exampleEn": "Her master's thesis analyzed the socioeconomic impacts of rural microfinance in Southeast Asia.",
        "exampleVi": "Luận văn thạc sĩ của cô đã phân tích các tác động kinh tế xã hội của tài chính vi mô nông thôn ở Đông Nam Á.",
        "synonyms": [
          "Dissertation",
          "Research monograph"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-80",
        "word": "Hypothesis",
        "phonetic": "/haɪˈpɑː.θə.sɪs/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Giả thuyết khoa học cần kiểm chứng",
        "definitionEn": "A supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
        "exampleEn": "Experiments were meticulously designed to test the initial scientific hypothesis.",
        "exampleVi": "Các thí nghiệm đã được thiết kế tỉ mỉ để kiểm chứng giả thuyết khoa học ban đầu.",
        "synonyms": [
          "Theory",
          "Premise",
          "Proposition"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-81",
        "word": "Methodology",
        "phonetic": "/ˌmeθ.əˈdɑː.lə.dʒi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phương pháp luận nghiên cứu khoa học",
        "definitionEn": "A system of methods used in a particular area of study or activity.",
        "exampleEn": "The dissertation devotes an entire comprehensive chapter to quantitative survey methodology.",
        "exampleVi": "Luận án dành hẳn một chương toàn diện cho phương pháp luận điều tra khảo sát định lượng.",
        "synonyms": [
          "Method",
          "Research approach",
          "Technique"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-82",
        "word": "Qualitative",
        "phonetic": "/ˈkwɑː.lə.teɪ.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nghiên cứu định tính dựa trên phỏng vấn và quan sát",
        "definitionEn": "Relating to, measuring, or measured by the quality of something rather than its quantity.",
        "exampleEn": "Qualitative interviews provided deep nuanced insights into the psychological motives of consumers.",
        "exampleVi": "Các cuộc phỏng vấn định tính đã mang lại những hiểu biết sâu sắc và tinh tế về các động cơ tâm lý của người tiêu dùng.",
        "synonyms": [
          "Descriptive",
          "Non-numerical"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-83",
        "word": "Quantitative",
        "phonetic": "/ˈkwɑːn.t̬ə.teɪ.t̬ɪv/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nghiên cứu định lượng dựa trên số liệu và thống kê",
        "definitionEn": "Relating to, measuring, or measured by the quantity of something rather than its quality.",
        "exampleEn": "Rigorous quantitative statistical analysis verified that the correlation was statistically significant.",
        "exampleVi": "Phân tích thống kê định lượng nghiêm ngặt đã xác minh rằng mối tương quan có ý nghĩa thống kê.",
        "synonyms": [
          "Numerical",
          "Data-driven",
          "Statistical"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-84",
        "word": "Empirical",
        "phonetic": "/emˈpɪr.ɪ.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Thực nghiệm dựa trên dữ liệu thu thập thực tế",
        "definitionEn": "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
        "exampleEn": "The paper presented solid empirical evidence disproving the classical economic theory.",
        "exampleVi": "Bài báo đã trình bày các bằng chứng thực nghiệm vững chắc bác bỏ lý thuyết kinh tế cổ điển.",
        "synonyms": [
          "Evidence-based",
          "Observed",
          "Practical"
        ],
        "topicId": "education"
      },
      {
        "id": "edu-85",
        "word": "Theoretical",
        "phonetic": "/ˌθiː.əˈret̬.kəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Mang tính lý thuyết học thuật trừu tượng",
        "definitionEn": "Concerned with or involving the theory of a subject or area of study rather than its practical application.",
        "exampleEn": "Theoretical physicists formulate mathematical models describing the origins of cosmic spacetime.",
        "exampleVi": "Các nhà vật lý lý thuyết xây dựng các mô hình toán học mô tả nguồn gốc của không-thời gian vũ trụ.",
        "synonyms": [
          "Abstract",
          "Conceptual",
          "Hypothetical"
        ],
        "topicId": "education"
      }
    ]
  },
  {
    "id": "food",
    "title": "Ẩm Thực & Nghệ Thuật Nấu Ăn",
    "slug": "food",
    "icon": "Utensils",
    "color": "text-amber-600",
    "bgColor": "bg-amber-50 dark:bg-amber-950/40",
    "borderColor": "border-amber-200 dark:border-amber-800",
    "description": "Kỹ thuật đầu bếp, hương vị tinh tế, lên men truyền thống, món ngon thế giới và dinh dưỡng",
    "wordCount": 85,
    "words": [
      {
        "id": "food-1",
        "word": "Delicacy",
        "phonetic": "/ˈdel.ə.kə.si/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Món ăn cao lương mỹ vị quý hiếm",
        "definitionEn": "Something delightful or pleasing, especially a choice food considered rare or expensive.",
        "exampleEn": "Smoked sturgeon caviar and white truffles are celebrated worldwide as rare luxury delicacies.",
        "exampleVi": "Trứng cá tầm muối hun khói và nấm truffle trắng được tôn vinh trên toàn thế giới như những món cao lương mỹ vị quý hiếm xa xỉ.",
        "synonyms": [
          "Gourmet food",
          "Treat",
          "Dainty"
        ],
        "topicId": "food"
      },
      {
        "id": "food-2",
        "word": "Artisan",
        "phonetic": "/ˈɑːr.t̬ə.zən/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Nghệ nhân thủ công truyền thống chất lượng cao",
        "definitionEn": "Made in a traditional or non-mechanized way using high-quality ingredients.",
        "exampleEn": "The rustic countryside bakery is famous for its crusty artisan sourdough bread.",
        "exampleVi": "Tiệm bánh mì mộc mạc ở vùng nông thôn nổi tiếng với món bánh mì men chua thủ công giòn rụm được làm theo phương pháp truyền thống.",
        "synonyms": [
          "Handcrafted",
          "Craftsman-made",
          "Traditional"
        ],
        "topicId": "food"
      },
      {
        "id": "food-3",
        "word": "Culinary",
        "phonetic": "/ˈkʌl.ə.ner.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Thuộc về nghệ thuật ẩm thực và nấu nướng",
        "definitionEn": "Of or for cooking or the kitchen; relating to food preparation.",
        "exampleEn": "Studying at the historic French culinary institute honed his master chef techniques.",
        "exampleVi": "Học tập tại viện ẩm thực lịch sử của Pháp đã giúp mài giũa những kỹ thuật đỉnh cao của một đầu bếp bậc thầy.",
        "synonyms": [
          "Gastronomic",
          "Cooking",
          "Kitchen"
        ],
        "topicId": "food"
      },
      {
        "id": "food-4",
        "word": "Gourmet",
        "phonetic": "/ɡʊrˈmeɪ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Ẩm thực sành điệu tinh tế chuẩn sao",
        "definitionEn": "Relating to or being high quality, sophisticated, or exotic food and drink.",
        "exampleEn": "The downtown five-star hotel features an award-winning gourmet seafood restaurant.",
        "exampleVi": "Khách sạn 5 sao ở trung tâm thành phố có một nhà hàng hải sản cao cấp sành điệu từng đoạt nhiều giải thưởng danh giá.",
        "synonyms": [
          "Epicurean",
          "Fine-dining",
          "High-class"
        ],
        "topicId": "food"
      },
      {
        "id": "food-5",
        "word": "Savor",
        "phonetic": "/ˈseɪ.vɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Thưởng thức từ tốn, nhâm nhi từng hương vị",
        "definitionEn": "Taste good food or drink and enjoy it completely; appreciate fully.",
        "exampleEn": "Take your time to savor the complex notes of roasted hazelnut and dark berry in the single-origin coffee.",
        "exampleVi": "Hãy dành thời gian để thưởng thức từ tốn những nốt hương phức hợp của hạt phỉ nướng và quả mọng đen trong tách cà phê nguyên bản.",
        "synonyms": [
          "Relish",
          "Enjoy slowly",
          "Appreciate"
        ],
        "topicId": "food"
      },
      {
        "id": "food-6",
        "word": "Appetizing",
        "phonetic": "/ˈæp.ə.taɪ.zɪŋ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Ngon mắt, khơi gợi cảm giác thèm ăn",
        "definitionEn": "Appealing to the appetite; looking, sounding, or smelling delicious.",
        "exampleEn": "The golden roasted chicken was served with an exceptionally appetizing honey-rosemary glaze.",
        "exampleVi": "Món gà nướng vàng rộm được phục vụ với lớp nước sốt mật ong hương thảo vô cùng ngon mắt và kích thích vị giác.",
        "synonyms": [
          "Mouth-watering",
          "Tempting",
          "Delicious"
        ],
        "topicId": "food"
      },
      {
        "id": "food-7",
        "word": "Fermentation",
        "phonetic": "/ˌfɝː.menˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Quá trình lên men vi sinh tạo hương vị độc đáo",
        "definitionEn": "The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms, typically involving effervescence and the giving off of heat.",
        "exampleEn": "Traditional lactic acid fermentation transforms plain cabbage into tangy, probiotic-rich kimchi.",
        "exampleVi": "Quá trình lên men axit lactic truyền thống biến bắp cải thông thường thành món kim chi chua thanh và giàu lợi khuẩn sinh học.",
        "synonyms": [
          "Brewing",
          "Culturing",
          "Microbial breakdown"
        ],
        "topicId": "food"
      },
      {
        "id": "food-8",
        "word": "Palatable",
        "phonetic": "/ˈpæl.ə.t̬ə.bəl/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Hợp khẩu vị, vừa miệng dễ ăn",
        "definitionEn": "Pleasant to taste; acceptable or satisfactory.",
        "exampleEn": "Adding a dash of sweet coconut milk made the spicy Thai curry wonderfully palatable.",
        "exampleVi": "Thêm một chút nước cốt dừa ngọt béo đã khiến món cà ri cay kiểu Thái trở nên vô cùng vừa miệng và thơm ngon.",
        "synonyms": [
          "Tasty",
          "Flavorful",
          "Appetizing"
        ],
        "topicId": "food"
      },
      {
        "id": "food-9",
        "word": "Condiment",
        "phonetic": "/ˈkɑːn.də.mənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Gia vị chấm hoặc nêm ăn kèm (tương, ớt, giấm)",
        "definitionEn": "A substance such as salt, mustard, or pickle that is used to add flavor to food.",
        "exampleEn": "Vietnamese fish sauce seasoned with lime and chili is an indispensable dipping condiment.",
        "exampleVi": "Nước mắm Việt Nam pha chanh ớt là một loại gia vị chấm ăn kèm không thể thiếu trong mỗi bữa ăn.",
        "synonyms": [
          "Seasoning",
          "Sauce",
          "Dressing"
        ],
        "topicId": "food"
      },
      {
        "id": "food-10",
        "word": "Aroma",
        "phonetic": "/əˈroʊ.mə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Hương thơm ngào ngạt của đồ ăn thức uống",
        "definitionEn": "A distinctive, typically pleasant smell of food, wine, or coffee.",
        "exampleEn": "The enticing aroma of fresh garlic sizzling in olive oil filled the bustling kitchen.",
        "exampleVi": "Hương thơm quyến rũ của tỏi tươi xèo xèo trong dầu ô liu lan tỏa khắp căn bếp nhộn nhịp.",
        "synonyms": [
          "Fragrance",
          "Scent",
          "Bouquet"
        ],
        "topicId": "food"
      },
      {
        "id": "food-11",
        "word": "Marinade",
        "phonetic": "/ˌmer.əˈneɪd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Nước sốt ướp thịt cá cho thấm gia vị",
        "definitionEn": "A sauce, typically made of oil, vinegar, spices, and herbs, in which meat, fish, or other food is soaked before cooking.",
        "exampleEn": "Soaking beef ribs overnight in a sweet soy marinade guarantees tender, juicy barbecue.",
        "exampleVi": "Ngâm sườn bò qua đêm trong nước sốt ướp tương ngọt đảm bảo món nướng sẽ mềm ngọt và mọng nước.",
        "synonyms": [
          "Seasoning sauce",
          "Soak",
          "Brine"
        ],
        "topicId": "food"
      },
      {
        "id": "food-12",
        "word": "Marinate",
        "phonetic": "/ˈmer.ə.neɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Ướp gia vị cho thực phẩm ngấm đều",
        "definitionEn": "Undergo soaking in a marinade.",
        "exampleEn": "Marinate the salmon fillets for at least thirty minutes before placing them on the hot grill.",
        "exampleVi": "Hãy ướp các miếng phi lê cá hồi trong ít nhất ba mươi phút trước khi đặt chúng lên vỉ nướng nóng.",
        "synonyms": [
          "Soak",
          "Season",
          "Steep"
        ],
        "topicId": "food"
      },
      {
        "id": "food-13",
        "word": "Simmer",
        "phonetic": "/ˈsɪm.ɚ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Đun sôi liu riu nhỏ lửa",
        "definitionEn": "Stay just below the boiling point while bubbling gently.",
        "exampleEn": "Let the bone broth simmer on low heat for ten hours to extract maximum collagen richness.",
        "exampleVi": "Hãy để nồi nước dùng xương đun sôi liu riu trên lửa nhỏ trong mười tiếng để chiết xuất tối đa lượng collagen đậm đà.",
        "synonyms": [
          "Stew",
          "Bubble gently",
          "Poach"
        ],
        "topicId": "food"
      },
      {
        "id": "food-14",
        "word": "Sauté",
        "phonetic": "/soʊˈteɪ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Xào lăn nhanh trên chảo nóng với ít dầu",
        "definitionEn": "Fried quickly in a little hot fat or oil.",
        "exampleEn": "Sauté the chopped shallots and wild mushrooms until they turn tender and golden brown.",
        "exampleVi": "Xào nhanh hành tím băm nhỏ và nấm rừng cho đến khi chúng mềm và chuyển sang màu nâu vàng đẹp mắt.",
        "synonyms": [
          "Pan-fry",
          "Stir-fry",
          "Sear"
        ],
        "topicId": "food"
      },
      {
        "id": "food-15",
        "word": "Caramelize",
        "phonetic": "/ˈker.ə.məl.aɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Thắng đường, làm đường chuyển màu nâu caramen",
        "definitionEn": "Convert or be converted into caramel, typically through the application of heat to sugars.",
        "exampleEn": "Slowly cooking sliced onions caramelizes their natural sugars into a rich, sweet relish.",
        "exampleVi": "Nấu hành tây thái lát từ từ trên lửa nhỏ sẽ thắng đường tự nhiên của chúng thành một món sốt ngọt ngào đậm đà.",
        "synonyms": [
          "Brown",
          "Sugar-cook"
        ],
        "topicId": "food"
      },
      {
        "id": "food-16",
        "word": "Blanch",
        "phonetic": "/blæntʃ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Trần sơ qua nước sôi rồi ngâm nước đá giữ màu",
        "definitionEn": "Make white or pale by extracting color; in cooking, plunge into boiling water briefly.",
        "exampleEn": "Blanch the fresh green asparagus for two minutes to preserve its vibrant emerald hue and crisp snap.",
        "exampleVi": "Trần măng tây xanh tươi qua nước sôi trong hai phút để giữ lại sắc xanh ngọc bích rực rỡ và độ giòn ngọt.",
        "synonyms": [
          "Parboil",
          "Scald"
        ],
        "topicId": "food"
      },
      {
        "id": "food-17",
        "word": "Broil",
        "phonetic": "/brɔɪl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Nướng bằng nhiệt trực tiếp từ phía trên",
        "definitionEn": "Cook by exposure to direct, intense radiant heat, typically from above.",
        "exampleEn": "Broil the cheese-topped oysters under high oven heat until bubbly and melted.",
        "exampleVi": "Nướng hàu phủ phô mai dưới nhiệt độ lò nướng cao từ phía trên cho đến khi sủi bọt và tan chảy thơm lừng.",
        "synonyms": [
          "Grill",
          "Roast under direct heat"
        ],
        "topicId": "food"
      },
      {
        "id": "food-18",
        "word": "Braise",
        "phonetic": "/breɪz/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Om, hầm trong nồi đậy kín với một ít nước sốt",
        "definitionEn": "Fry food lightly and then stew it slowly in a closed container.",
        "exampleEn": "Braise the pork belly chunks in caramel fish sauce until melt-in-your-mouth succulent.",
        "exampleVi": "Om những miếng thịt ba chỉ trong nước hàng mắm cho đến khi mềm tan mọng nước trong miệng.",
        "synonyms": [
          "Slow-cook",
          "Pot-roast",
          "Stew"
        ],
        "topicId": "food"
      },
      {
        "id": "food-19",
        "word": "Sear",
        "phonetic": "/sɪr/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Áp chảo lửa lớn cho cháy cạnh bên ngoài",
        "definitionEn": "Burn or scorch the surface of something with a sudden, intense heat.",
        "exampleEn": "Sear the prime ribeye steak for two minutes on each side to lock in flavorful natural juices.",
        "exampleVi": "Áp chảo miếng thịt thăn bò hảo hạng trong hai phút mỗi mặt trên lửa lớn để khóa chặt vị ngọt tự nhiên thơm lừng bên trong.",
        "synonyms": [
          "Brown quickly",
          "Scorch",
          "Char"
        ],
        "topicId": "food"
      },
      {
        "id": "food-20",
        "word": "Garnish",
        "phonetic": "/ˈɡɑːr.nɪʃ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Trang trí món ăn bằng rau mùi hoặc hoa lát mỏng",
        "definitionEn": "Decorate or embellish something, especially food.",
        "exampleEn": "Garnish the velvety pumpkin soup with toasted pumpkin seeds and a swirl of cream.",
        "exampleVi": "Trang trí bát súp bí đỏ mịn màng bằng hạt bí nướng giòn và một đường kem tươi xoáy nghệ thuật.",
        "synonyms": [
          "Decorate",
          "Adorn",
          "Embellish"
        ],
        "topicId": "food"
      },
      {
        "id": "food-21",
        "word": "Appetizer",
        "phonetic": "/ˈæp.ə.taɪ.zɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Món khai vị đầu bữa ăn kích thích vị giác",
        "definitionEn": "A small dish of food or a drink taken before a meal or the main course of a meal to stimulate one's appetite.",
        "exampleEn": "Crispy vegetarian spring rolls served with sweet chili dip made a delightful light appetizer.",
        "exampleVi": "Những chiếc nem chay giòn rụm ăn kèm nước chấm ớt ngọt tạo nên một món khai vị nhẹ nhàng đầy thú vị.",
        "synonyms": [
          "Starter",
          "Hors d'oeuvre",
          "First course"
        ],
        "topicId": "food"
      },
      {
        "id": "food-22",
        "word": "Entrée",
        "phonetic": "/ˈɑːn.treɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Món ăn chính trong thực đơn phương Tây",
        "definitionEn": "The main course of a meal in modern North American culinary terminology.",
        "exampleEn": "For the main dinner entrée, guests had a choice between grilled Chilean sea bass and duck confit.",
        "exampleVi": "Đối với món chính của bữa tối, các thực khách có sự lựa chọn giữa cá vược Chile nướng và đùi vịt confit.",
        "synonyms": [
          "Main dish",
          "Main course",
          "Plat principal"
        ],
        "topicId": "food"
      },
      {
        "id": "food-23",
        "word": "Dessert",
        "phonetic": "/dɪˈzɝːt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Món tráng miệng ngọt ngào kết thúc bữa tiệc",
        "definitionEn": "The sweet course eaten at the end of a meal.",
        "exampleEn": "A warm dark chocolate lava cake served with Tahitian vanilla bean gelato was the perfect sweet dessert.",
        "exampleVi": "Chiếc bánh sô-cô-la đen tan chảy ấm nóng phục vụ cùng kem gelato vani Tahiti là món tráng miệng ngọt ngào hoàn hảo.",
        "synonyms": [
          "Sweet course",
          "Pudding"
        ],
        "topicId": "food"
      },
      {
        "id": "food-24",
        "word": "Sommelier",
        "phonetic": "/sɑːm.əlˈjeɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Chuyên gia thử nếm và tư vấn kết hợp rượu vang",
        "definitionEn": "A wine waiter; a trained and knowledgeable wine professional, normally working in fine dining restaurants.",
        "exampleEn": "The certified sommelier recommended a crisp, mineral Chablis to pair with the raw oyster platter.",
        "exampleVi": "Chuyên gia rượu vang được chứng nhận đã gợi ý một chai Chablis thanh mát, đậm khoáng chất để kết hợp cùng đĩa hàu sống.",
        "synonyms": [
          "Wine steward",
          "Wine expert"
        ],
        "topicId": "food"
      },
      {
        "id": "food-25",
        "word": "Degustation",
        "phonetic": "/ˌdiː.ɡʌsˈteɪ.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Tiệc thưởng thức nhiều món nhỏ nếm thử",
        "definitionEn": "The action or an instance of tasting or savoring something, especially food or drink; a tasting menu.",
        "exampleEn": "The Michelin-starred restaurant offers a memorable twelve-course degustation menu showcasing local micro-seasons.",
        "exampleVi": "Nhà hàng gắn sao Michelin cung cấp thực đơn nếm thử 12 món đáng nhớ thể hiện rõ các tiểu mùa khí hậu của địa phương.",
        "synonyms": [
          "Tasting menu",
          "Sampling dinner"
        ],
        "topicId": "food"
      },
      {
        "id": "food-26",
        "word": "Confectionery",
        "phonetic": "/kənˈfek.ʃən.er.i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Bánh kẹo đồ ngọt thủ công tinh xảo",
        "definitionEn": "Sweets and chocolates considered collectively; the candy-making craft.",
        "exampleEn": "Belgian confectionery is internationally celebrated for exquisite pralines and delicate fruit jellies.",
        "exampleVi": "Bánh kẹo Bỉ nổi tiếng trên toàn thế giới với những viên kẹo praline tinh xảo và kẹo thạch trái cây thanh tao.",
        "synonyms": [
          "Sweets",
          "Candies",
          "Pastries"
        ],
        "topicId": "food"
      },
      {
        "id": "food-27",
        "word": "Pastry",
        "phonetic": "/ˈpeɪ.stri/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Bánh ngọt nướng bằng bột mì nhiều lớp bơ",
        "definitionEn": "A dough of flour, fat, and water, used as a base and covering in baked dishes such as pies.",
        "exampleEn": "Flaky French butter croissants require meticulous pastry laminating techniques to achieve fifty layers.",
        "exampleVi": "Bánh sừng bò bơ Pháp giòn rụm nhiều lớp đòi hỏi kỹ thuật cán bột bánh ngọt tỉ mỉ để đạt tới 50 lớp bơ mỏng.",
        "synonyms": [
          "Baked good",
          "Tart",
          "Croissant"
        ],
        "topicId": "food"
      },
      {
        "id": "food-28",
        "word": "Dough",
        "phonetic": "/doʊ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khối bột nhào đã lên men để nướng bánh",
        "definitionEn": "A thick, malleable mixture of flour and liquid, used for baking into bread or pastry.",
        "exampleEn": "Knead the elastic pizza dough thoroughly on a floured marble counter for ten minutes.",
        "exampleVi": "Nhào kỹ khối bột bánh pizza đàn hồi trên mặt bàn đá cẩm thạch rắc bột trong mười phút.",
        "synonyms": [
          "Batter",
          "Bread paste"
        ],
        "topicId": "food"
      },
      {
        "id": "food-29",
        "word": "Batter",
        "phonetic": "/ˈbæt̬.ɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bột lỏng pha trứng sữa để rán hoặc nhúng bột",
        "definitionEn": "A semi-liquid mixture of one or more flours made with liquids such as water, milk, or eggs.",
        "exampleEn": "Dip the jumbo prawns into the airy tempura batter before dropping them into boiling hot oil.",
        "exampleVi": "Nhúng những con tôm sú lớn vào lớp bột lỏng tempura xốp nhẹ trước khi thả chúng vào chảo dầu nóng sôi.",
        "synonyms": [
          "Liquid dough",
          "Pancake mix"
        ],
        "topicId": "food"
      },
      {
        "id": "food-30",
        "word": "Knead",
        "phonetic": "/niːd/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Nhào bột bằng tay cho dẻo quánh",
        "definitionEn": "Work moistened flour or clay into dough or paste with the hands.",
        "exampleEn": "Knead the bread dough until it passes the windowpane stretch test and feels satin smooth.",
        "exampleVi": "Nhào bột bánh mì cho đến khi nó vượt qua bài kiểm tra kéo màng mỏng và cho cảm giác mịn như lụa satin.",
        "synonyms": [
          "Massage dough",
          "Work paste"
        ],
        "topicId": "food"
      },
      {
        "id": "food-31",
        "word": "Whisk",
        "phonetic": "/wɪsk/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Đánh bông trứng hoặc kem bằng cây đánh trứng",
        "definitionEn": "Beat or stir a substance, especially cream or eggs, with a light, rapid movement.",
        "exampleEn": "Whisk the cold heavy whipping cream until stiff, glossy peaks form in the copper bowl.",
        "exampleVi": "Đánh bông kem tươi lạnh cho đến khi hình thành các chóp nhọn bóng bẩy và cứng cáp trong chiếc âu đồng.",
        "synonyms": [
          "Beat",
          "Whip",
          "Blend"
        ],
        "topicId": "food"
      },
      {
        "id": "food-32",
        "word": "Infusion",
        "phonetic": "/ɪnˈfjuː.ʒən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Nước hãm trà thảo mộc hoặc chiết xuất hương vị",
        "definitionEn": "A drink, remedy, or extract prepared by soaking tea leaves or herbs in liquid.",
        "exampleEn": "A soothing warm chamomile and lavender herbal infusion calms racing minds before bedtime.",
        "exampleVi": "Một tách nước hãm thảo mộc hoa cúc và hoa oải hương ấm áp giúp xoa dịu những tâm trí đang căng thẳng trước giờ đi ngủ.",
        "synonyms": [
          "Steeped tea",
          "Herbal brew",
          "Extract"
        ],
        "topicId": "food"
      },
      {
        "id": "food-33",
        "word": "Steep",
        "phonetic": "/stiːp/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Hãm, ngâm lá trà trong nước nóng lấy tinh chất",
        "definitionEn": "Soak in water or other liquid, as to soften, cleanse, or extract an essential principle.",
        "exampleEn": "Steep the organic high-mountain oolong tea leaves for three minutes to release floral notes.",
        "exampleVi": "Hãm những búp trà ô long hữu cơ vùng núi cao trong ba phút để giải phóng trọn vẹn những nốt hương hoa thanh khiết.",
        "synonyms": [
          "Infuse",
          "Soak",
          "Brew"
        ],
        "topicId": "food"
      },
      {
        "id": "food-34",
        "word": "Zest",
        "phonetic": "/zest/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vỏ cam chanh bào lấy tinh dầu thơm nồng",
        "definitionEn": "Scrape off the outer colored part of the peel of a citrus fruit for use as flavoring.",
        "exampleEn": "A teaspoon of freshly grated lemon zest adds vibrant brightness to the creamy pasta sauce.",
        "exampleVi": "Một thìa cà phê vỏ chanh vàng mới bào tươi mang lại sự tươi sáng sống động cho món sốt mì ống béo ngậy.",
        "synonyms": [
          "Citrus peel",
          "Flavoring skin"
        ],
        "topicId": "food"
      },
      {
        "id": "food-35",
        "word": "Coriander",
        "phonetic": "/ˈkɔːr.i.æn.dɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Rau mùi, ngò rí tươi",
        "definitionEn": "An aromatic Mediterranean plant of the parsley family, the leaves and seeds of which are used as culinary herbs.",
        "exampleEn": "Fresh coriander leaves are scattered over steaming bowls of beef pho just before serving.",
        "exampleVi": "Những lá rau mùi tươi xanh được rắc lên những bát phở bò bốc khói nghi ngút ngay trước khi bưng ra phục vụ.",
        "synonyms": [
          "Cilantro",
          "Chinese parsley"
        ],
        "topicId": "food"
      },
      {
        "id": "food-36",
        "word": "Seasoning",
        "phonetic": "/ˈsiː.zən.ɪŋ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Gia vị nêm nếm mặn ngọt cho vừa miệng",
        "definitionEn": "Salt, herbs, or spices added to food to enhance the flavor.",
        "exampleEn": "Taste the simmered tomato stew frequently to adjust the salt and pepper seasoning.",
        "exampleVi": "Hãy nếm thử món hầm cà chua đang đun sôi thường xuyên để điều chỉnh gia vị muối và hạt tiêu cho vừa vặn.",
        "synonyms": [
          "Flavoring",
          "Condiment",
          "Spice"
        ],
        "topicId": "food"
      },
      {
        "id": "food-37",
        "word": "Piquant",
        "phonetic": "/ˈpiː.kənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Vị cay the kích thích đầu lưỡi, đậm đà",
        "definitionEn": "Having a pleasantly sharp taste or appetizing flavor.",
        "exampleEn": "The piquant homemade salsa combined fiery jalapeño peppers with zesty fresh lime juice.",
        "exampleVi": "Món sốt salsa tự làm có vị cay the kích thích kết hợp giữa ớt jalapeño cay nồng với nước cốt chanh tươi chua thanh.",
        "synonyms": [
          "Spicy",
          "Sharp",
          "Zesty"
        ],
        "topicId": "food"
      },
      {
        "id": "food-38",
        "word": "Zesty",
        "phonetic": "/ˈzes.ti/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Chua thanh the mát, tràn đầy sức sống",
        "definitionEn": "Having a strong, pleasant, and somewhat spicy flavor.",
        "exampleEn": "The lime-coriander salad dressing lends a wonderfully zesty kick to the grilled chicken.",
        "exampleVi": "Nước sốt salad chanh ngò rí mang lại một cú hích chua thanh the mát tuyệt vời cho món gà nướng.",
        "synonyms": [
          "Tangy",
          "Invigorating",
          "Spirited"
        ],
        "topicId": "food"
      },
      {
        "id": "food-39",
        "word": "Tangy",
        "phonetic": "/ˈtæŋ.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Chua ngọt sắc sảo đượm vị",
        "definitionEn": "Having a pleasantly sharp and strong taste, like lemons or ripe tamarind.",
        "exampleEn": "Key lime pie is famous for its smooth custard filling that is simultaneously sweet and tangy.",
        "exampleVi": "Bánh tart chanh Key nổi tiếng với lớp nhân kem trứng mịn màng vừa ngọt ngào lại vừa chua thanh sắc sảo.",
        "synonyms": [
          "Tart",
          "Sharp-tasting",
          "Acidic"
        ],
        "topicId": "food"
      },
      {
        "id": "food-40",
        "word": "Crispy",
        "phonetic": "/ˈkrɪs.pi/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "A2",
        "meaningVi": "Giòn rụm bên ngoài khi chiên nướng",
        "definitionEn": "Pleasantly thin, dry, and easily broken, having a firm dry texture.",
        "exampleEn": "These golden french fries are irresistibly crispy on the outside yet fluffy inside.",
        "exampleVi": "Những cọng khoai tây chiên vàng ruộm này giòn rụm khó cưỡng ở bên ngoài nhưng lại mềm xốp bên trong.",
        "synonyms": [
          "Crunchy",
          "Brittle",
          "Crusty"
        ],
        "topicId": "food"
      },
      {
        "id": "food-41",
        "word": "Succulent",
        "phonetic": "/ˈsʌk.jə.lənt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Mọng nước ngọt mềm thịt cá",
        "definitionEn": "Tender, juicy, and tasty of food, especially meat.",
        "exampleEn": "The roast turkey breast was surprisingly succulent and flavorful, never drying out in the oven.",
        "exampleVi": "Phần ức gà tây nướng mềm mọng nước và đậm đà đến kinh ngạc, không hề bị khô cứng trong lò nướng.",
        "synonyms": [
          "Juicy",
          "Moist",
          "Luscious"
        ],
        "topicId": "food"
      },
      {
        "id": "food-42",
        "word": "Melt-in-your-mouth",
        "phonetic": "/ˌmelt.ɪn.jɔːrˈmaʊθ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Mềm tan biến ngay trong miệng",
        "definitionEn": "Extremely tender, soft, and delicious food.",
        "exampleEn": "Slow-cooked Japanese wagyu beef possesses a melt-in-your-mouth buttery marbling texture.",
        "exampleVi": "Thịt bò wagyu Nhật Bản nấu chậm sở hữu kết cấu vân mỡ cẩm thạch béo ngậy mềm tan ngay trên đầu lưỡi.",
        "synonyms": [
          "Super tender",
          "Dissolving"
        ],
        "topicId": "food"
      },
      {
        "id": "food-43",
        "word": "Savory",
        "phonetic": "/ˈseɪ.vɚ.i/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Đậm đà vị mặn ngọt hài hòa, không ngọt tráng miệng",
        "definitionEn": "Belonging to the category that is salty or spicy rather than sweet in food classification.",
        "exampleEn": "She prefers hearty savory breakfast dishes like omelets and sausage over sweet sugary pancakes.",
        "exampleVi": "Cô ấy thích những món ăn sáng đậm đà như trứng tráng và xúc xích hơn là những chiếc bánh kếp ngọt nhiều đường.",
        "synonyms": [
          "Salty-sweet",
          "Umami",
          "Flavorful"
        ],
        "topicId": "food"
      },
      {
        "id": "food-44",
        "word": "Umami",
        "phonetic": "/uːˈmɑː.mi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vị ngọt thịt tự nhiên từ glutamate (vị thứ 5)",
        "definitionEn": "A category of taste in food (besides sweet, sour, salt, and bitter), corresponding to the flavor of glutamates, especially monosodium glutamate.",
        "exampleEn": "Aged Parmesan cheese, ripe tomatoes, and dried shiitake mushrooms are packed with rich natural umami.",
        "exampleVi": "Phô mai Parmesan ủ lâu năm, cà chua chín mọng và nấm hương khô chứa đầy vị ngọt thịt umami tự nhiên phong phú.",
        "synonyms": [
          "Savory taste",
          "Meatiness"
        ],
        "topicId": "food"
      },
      {
        "id": "food-45",
        "word": "Glaze",
        "phonetic": "/ɡleɪz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Lớp nước sốt bóng bẩy phủ mặt ngoài món nướng",
        "definitionEn": "A shiny coating brushed onto food, such as a sugar syrup on pastry or a reduction on meat.",
        "exampleEn": "Brush the roast duck with a shiny hoisin-honey glaze during the final fifteen minutes of baking.",
        "exampleVi": "Hãy quét lên mình vịt quay một lớp nước sốt bóng bẩy mật ong tương đen trong 15 phút nướng cuối cùng.",
        "synonyms": [
          "Glossy coat",
          "Icing",
          "Lacquer"
        ],
        "topicId": "food"
      },
      {
        "id": "food-46",
        "word": "Carbohydrate",
        "phonetic": "/ˌkɑːr.boʊˈhaɪ.dreɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chất bột đường tinh bột cung cấp năng lượng",
        "definitionEn": "Any of a large group of organic compounds occurring in foods and living tissues and including sugars, starch, and cellulose.",
        "exampleEn": "Complex carbohydrates found in whole grain oats release sustained physical energy throughout the morning.",
        "exampleVi": "Các loại carbohydrate phức hợp có trong yến mạch nguyên cám giải phóng năng lượng thể chất bền bỉ suốt cả buổi sáng.",
        "synonyms": [
          "Carb",
          "Starch",
          "Sugar"
        ],
        "topicId": "food"
      },
      {
        "id": "food-47",
        "word": "Protein",
        "phonetic": "/ˈproʊ.tiːn/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Chất đạm xây dựng cơ bắp và tế bào",
        "definitionEn": "Any of a class of nitrogenous organic compounds that consist of large molecules composed of one or more long chains of amino acids and are an essential part of all living organisms.",
        "exampleEn": "Eggs, Greek yogurt, and chicken breasts provide clean, bioavailable protein for muscle recovery.",
        "exampleVi": "Trứng gà, sữa chua Hy Lạp và ức gà cung cấp nguồn chất đạm sạch, dễ hấp thu cho sự phục hồi cơ bắp.",
        "synonyms": [
          "Amino source",
          "Nutritional protein"
        ],
        "topicId": "food"
      },
      {
        "id": "food-48",
        "word": "Fiber",
        "phonetic": "/ˈfaɪ.bɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chất xơ tiêu hóa tốt cho đường ruột",
        "definitionEn": "Dietary material containing substances such as cellulose, lignin, and pectin, which are resistant to the action of digestive enzymes.",
        "exampleEn": "Eating abundant dietary fiber promotes healthy gut flora biodiversity and stabilizes blood sugar.",
        "exampleVi": "Ăn nhiều chất xơ hòa tan thúc đẩy sự đa dạng sinh học của hệ vi sinh đường ruột và ổn định đường huyết.",
        "synonyms": [
          "Roughage",
          "Dietary bulk"
        ],
        "topicId": "food"
      },
      {
        "id": "food-49",
        "word": "Cholesterol",
        "phonetic": "/kəˈles.tə.rɑːl/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chất mỡ máu cholesterol cần kiểm soát",
        "definitionEn": "A compound of the sterol type found in animal tissues and blood, related to heart disease when elevated.",
        "exampleEn": "Avocados contain healthy monounsaturated fats that help reduce bad LDL cholesterol in the bloodstream.",
        "exampleVi": "Quả bơ chứa các chất béo không bão hòa đơn lành mạnh giúp làm giảm cholesterol xấu LDL trong máu.",
        "synonyms": [
          "Blood fat"
        ],
        "topicId": "food"
      },
      {
        "id": "food-50",
        "word": "Gluten",
        "phonetic": "/ˈɡluː.tən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Protein tạo độ dai dính trong lúa mì",
        "definitionEn": "A substance present in cereal grains, especially wheat, that is responsible for the elastic texture of dough.",
        "exampleEn": "People diagnosed with celiac disease must strictly consume certified gluten-free alternative grains.",
        "exampleVi": "Những người được chẩn đoán mắc bệnh celiac phải tiêu thụ nghiêm ngặt các loại ngũ cốc thay thế không chứa gluten đã được chứng nhận.",
        "synonyms": [
          "Wheat protein"
        ],
        "topicId": "food"
      },
      {
        "id": "food-51",
        "word": "Beverage",
        "phonetic": "/ˈbev.ɚ.ɪdʒ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Đồ uống giải khát các loại",
        "definitionEn": "A drink, especially one other than water.",
        "exampleEn": "The flight attendant wheeled a trolley stocked with sparkling beverages, juices, and hot tea.",
        "exampleVi": "Tiếp viên hàng không đẩy một chiếc xe đẩy chứa đầy các loại đồ uống có ga, nước trái cây và trà nóng.",
        "synonyms": [
          "Drink",
          "Refreshment",
          "Liquid"
        ],
        "topicId": "food"
      },
      {
        "id": "food-52",
        "word": "Gastronomy",
        "phonetic": "/ɡæsˈtrɑː.nə.mi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Nghệ thuật ẩm thực và văn hóa thưởng thức món ngon",
        "definitionEn": "The practice or art of choosing, cooking, and eating good food.",
        "exampleEn": "Molecular gastronomy merges laboratory science with culinary art to create unexpected textures.",
        "exampleVi": "Ẩm thực phân tử kết hợp khoa học phòng thí nghiệm với nghệ thuật nấu ăn để tạo ra những kết cấu bất ngờ.",
        "synonyms": [
          "Culinary art",
          "Food culture"
        ],
        "topicId": "food"
      },
      {
        "id": "food-53",
        "word": "Barista",
        "phonetic": "/bəˈrɪs.tə/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chuyên gia pha chế cà phê điêu luyện",
        "definitionEn": "A person who prepares and serves espresso-based coffee drinks.",
        "exampleEn": "The skilled barista crafted an intricate leafy fern design in the velvety latte micro-foam.",
        "exampleVi": "Người thợ pha chế cà phê lành nghề đã tạo nên hình chiếc lá dương xỉ tinh xảo trên lớp bọt sữa vi mô mịn màng của tách latte.",
        "synonyms": [
          "Coffee specialist",
          "Espresso maker"
        ],
        "topicId": "food"
      },
      {
        "id": "food-54",
        "word": "Bartender",
        "phonetic": "/ˈbɑːrˌten.dɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Người pha chế đồ uống tại quầy bar",
        "definitionEn": "A person who mixes and serves drinks at a bar.",
        "exampleEn": "The charismatic bartender mixed a smoky Mezcal cocktail with fresh grapefruit juice.",
        "exampleVi": "Chàng bartender quyến rũ đã pha chế một ly cocktail Mezcal thơm mùi khói với nước bưởi hồng tươi.",
        "synonyms": [
          "Mixologist",
          "Barkeep"
        ],
        "topicId": "food"
      },
      {
        "id": "food-55",
        "word": "Sommelier",
        "phonetic": "/sɑːm.əlˈjeɪ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Chuyên gia nếm và phục vụ rượu vang cao cấp",
        "definitionEn": "A wine expert who advises restaurant guests on wine choices and food pairings.",
        "exampleEn": "Ask the sommelier to recommend a robust red vintage that complements the grilled lamb chops.",
        "exampleVi": "Hãy nhờ chuyên gia rượu vang gợi ý một chai rượu vang đỏ đậm đà niên vụ tốt để kết hợp cùng sườn cừu nướng.",
        "synonyms": [
          "Wine waiter",
          "Wine professional"
        ],
        "topicId": "food"
      },
      {
        "id": "food-56",
        "word": "Appetite",
        "phonetic": "/ˈæp.ə.taɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Cảm giác ngon miệng, sự thèm ăn",
        "definitionEn": "A natural desire to satisfy a bodily need, especially for food.",
        "exampleEn": "A brisk morning hike in the crisp mountain air worked up a tremendous appetite for breakfast.",
        "exampleVi": "Một chuyến đi bộ nhanh buổi sáng trong bầu không khí miền núi trong lành đã khơi dậy cảm giác thèm ăn bữa sáng vô cùng to lớn.",
        "synonyms": [
          "Hunger",
          "Desire for food",
          "Craving"
        ],
        "topicId": "food"
      },
      {
        "id": "food-57",
        "word": "Ravenous",
        "phonetic": "/ˈræv.ən.əs/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "C1",
        "meaningVi": "Đói cồn cào ruột gan",
        "definitionEn": "Extremely hungry.",
        "exampleEn": "After skipping lunch during the intense twelve-hour workshop, all attendees were utterly ravenous.",
        "exampleVi": "Sau khi bỏ bữa trưa trong buổi hội thảo kéo dài 12 tiếng căng thẳng, tất cả những người tham dự đều đói cồn cào.",
        "synonyms": [
          "Famished",
          "Starving",
          "Voracious"
        ],
        "topicId": "food"
      },
      {
        "id": "food-58",
        "word": "Famished",
        "phonetic": "/ˈfæm.ɪʃt/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B2",
        "meaningVi": "Đói lả người kiệt sức",
        "definitionEn": "Extremely hungry; starved.",
        "exampleEn": "Let's find a cozy local noodle stall immediately; I am completely famished.",
        "exampleVi": "Hãy tìm ngay một quán mì địa phương ấm cúng nào; tôi đang đói lả cả người rồi.",
        "synonyms": [
          "Ravenous",
          "Starving"
        ],
        "topicId": "food"
      },
      {
        "id": "food-59",
        "word": "Binge",
        "phonetic": "/bɪndʒ/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B2",
        "meaningVi": "Ăn uống vô độ, chè chén thả phanh",
        "definitionEn": "Indulge in an activity, especially eating or drinking, to excess.",
        "exampleEn": "Avoid emotional stress that tempts you to binge on sugary junk food late at night.",
        "exampleVi": "Hãy tránh những căng thẳng cảm xúc thôi thúc bạn ăn uống vô độ các món đồ ăn vặt nhiều đường vào đêm khuya.",
        "synonyms": [
          "Overindulge",
          "Gorge",
          "Pig out"
        ],
        "topicId": "food"
      },
      {
        "id": "food-60",
        "word": "Dietitian",
        "phonetic": "/ˌdaɪ.əˈtɪʃ.ən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyên gia tư vấn dinh dưỡng y khoa",
        "definitionEn": "An expert on diet and nutrition, certified to treat medical conditions through dietary changes.",
        "exampleEn": "The clinical dietitian designed a customized diabetic meal plan to keep blood glucose stable.",
        "exampleVi": "Chuyên gia dinh dưỡng lâm sàng đã thiết kế một thực đơn riêng cho người tiểu đường nhằm giữ lượng đường huyết ổn định.",
        "synonyms": [
          "Nutritionist",
          "Diet consultant"
        ],
        "topicId": "food"
      },
      {
        "id": "food-61",
        "word": "Nutritionist",
        "phonetic": "/nuːˈtrɪʃ.ən.ɪst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Chuyên gia dinh dưỡng thể hình và sức khỏe",
        "definitionEn": "A person who studies or is a specialist in nutrition.",
        "exampleEn": "The sports nutritionist recommended consuming thirty grams of protein immediately after heavy workouts.",
        "exampleVi": "Chuyên gia dinh dưỡng thể thao khuyến nghị nên nạp 30 gram chất đạm ngay sau những buổi tập tạ nặng.",
        "synonyms": [
          "Diet expert",
          "Food specialist"
        ],
        "topicId": "food"
      },
      {
        "id": "food-62",
        "word": "Locavore",
        "phonetic": "/ˈloʊ.kə.vɔːr/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Người chuộng tiêu thụ thực phẩm địa phương",
        "definitionEn": "A person whose diet consists only or principally of locally grown or produced food.",
        "exampleEn": "As a committed locavore, she buys ninety percent of her seasonal vegetables from nearby farm stands.",
        "exampleVi": "Là một người cam kết ủng hộ thực phẩm địa phương, cô mua 90% lượng rau củ theo mùa từ các sạp nông trại gần nhà.",
        "synonyms": [
          "Local food consumer"
        ],
        "topicId": "food"
      },
      {
        "id": "food-63",
        "word": "Organic",
        "phonetic": "/ɔːrˈɡæn.ɪk/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Hữu cơ tự nhiên không phân thuốc hóa học",
        "definitionEn": "Produced or involving production without the use of chemical fertilizers, pesticides, or other artificial agents.",
        "exampleEn": "Organic pasture-raised chicken eggs have vibrant deep orange yolks rich in omega-3 fats.",
        "exampleVi": "Trứng gà hữu cơ nuôi thả vườn có lòng đỏ màu cam đậm rực rỡ và giàu chất béo omega-3.",
        "synonyms": [
          "Chemical-free",
          "Natural",
          "Bio"
        ],
        "topicId": "food"
      },
      {
        "id": "food-64",
        "word": "Pesticide",
        "phonetic": "/ˈpes.tə.saɪd/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Thuốc trừ sâu bảo vệ thực vật hóa học",
        "definitionEn": "A substance used for destroying insects or other organisms harmful to cultivated plants or to animals.",
        "exampleEn": "Rinse all fruits and vegetables under running tap water to remove trace agricultural pesticides.",
        "exampleVi": "Hãy rửa sạch tất cả các loại trái cây và rau củ dưới vòi nước chảy để loại bỏ tàn dư thuốc trừ sâu nông nghiệp.",
        "synonyms": [
          "Insecticide",
          "Pest killer"
        ],
        "topicId": "food"
      },
      {
        "id": "food-65",
        "word": "Preservative",
        "phonetic": "/prɪˈzɝː.və.t̬ɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Chất bảo quản thực phẩm chống ôi thiu",
        "definitionEn": "A substance used to preserve foodstuffs, wood, or other materials against decay.",
        "exampleEn": "This artisanal jam is made solely of whole berries and cane sugar, containing zero artificial preservatives.",
        "exampleVi": "Món mứt thủ công này chỉ được làm từ quả mọng nguyên trái và đường mía, hoàn toàn không chứa chất bảo quản nhân tạo.",
        "synonyms": [
          "Chemical stabilizer",
          "Additive"
        ],
        "topicId": "food"
      },
      {
        "id": "food-66",
        "word": "Additive",
        "phonetic": "/ˈæd.ə.t̬ɪv/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Phụ gia thực phẩm tạo màu và mùi",
        "definitionEn": "A substance added to something in small quantities to improve or preserve it.",
        "exampleEn": "Parents often check labels to steer clear of artificial food coloring additives in children's cereals.",
        "exampleVi": "Cha mẹ thường kiểm tra nhãn mác để tránh các chất phụ gia tạo màu nhân tạo trong ngũ cốc của trẻ nhỏ.",
        "synonyms": [
          "Supplement",
          "Chemical additive"
        ],
        "topicId": "food"
      },
      {
        "id": "food-67",
        "word": "Satiety",
        "phonetic": "/səˈtaɪ.ə.t̬i/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "C1",
        "meaningVi": "Cảm giác no nê thỏa mãn sau bữa ăn",
        "definitionEn": "The feeling or state of being sated, full, and satisfied.",
        "exampleEn": "High-fiber whole foods stimulate sustained hormonal satiety, preventing between-meal snacking cravings.",
        "exampleVi": "Thực phẩm toàn phần giàu chất xơ kích thích cảm giác no nê lâu dài từ hormone, ngăn ngừa cơn thèm ăn vặt giữa các bữa.",
        "synonyms": [
          "Fullness",
          "Satisfaction",
          "Repletion"
        ],
        "topicId": "food"
      },
      {
        "id": "food-68",
        "word": "Guzzle",
        "phonetic": "/ˈɡʌz.əl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "C1",
        "meaningVi": "Tu ừng ực, uống một hơi hết sạch vì khát",
        "definitionEn": "Eat or drink something greedily, noisily, or quickly.",
        "exampleEn": "After running ten hot kilometers under the blazing sun, he guzzled down a liter of cold coconut water.",
        "exampleVi": "Sau khi chạy 10 km nóng nực dưới cái nắng gay gắt, anh đã tu ừng ực một hơi hết sạch cả lít nước dừa lạnh.",
        "synonyms": [
          "Gulp",
          "Swill",
          "Quaff"
        ],
        "topicId": "food"
      },
      {
        "id": "food-69",
        "word": "Nibble",
        "phonetic": "/ˈnɪb.əl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Gặm nhấm từng miếng nhỏ xíu",
        "definitionEn": "Take small bites out of.",
        "exampleEn": "She sat peacefully reading her novel, nibbling on a single square of rich dark chocolate.",
        "exampleVi": "Cô ngồi thanh bình đọc cuốn tiểu thuyết của mình, chậm rãi nhấm nháp từng mẩu nhỏ thanh sô-cô-la đen đậm đà.",
        "synonyms": [
          "Munch",
          "Peck at",
          "Nibble on"
        ],
        "topicId": "food"
      },
      {
        "id": "food-70",
        "word": "Feast",
        "phonetic": "/fiːst/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bữa đại tiệc thịnh soạn ê hề món ngon",
        "definitionEn": "A large meal, typically one in celebration of something.",
        "exampleEn": "The Lunar New Year family gathering was a magnificent culinary feast featuring twenty traditional festive dishes.",
        "exampleVi": "Buổi sum họp gia đình dịp Tết Nguyên Đán là một bữa đại tiệc ẩm thực hoành tráng với 20 món ăn truyền thống ngày lễ.",
        "synonyms": [
          "Banquet",
          "Spread",
          "Gala dinner"
        ],
        "topicId": "food"
      },
      {
        "id": "food-71",
        "word": "Banquet",
        "phonetic": "/ˈbæŋ.kwɪt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Yến tiệc trang trọng đông người",
        "definitionEn": "An elaborate and formal evening meal for many people, often followed by speeches.",
        "exampleEn": "The university held an official banquet to honor the Nobel laureate visiting the research campus.",
        "exampleVi": "Trường đại học đã tổ chức một buổi yến tiệc trang trọng để vinh danh nhà khoa học đoạt giải Nobel đang đến thăm khuôn viên nghiên cứu.",
        "synonyms": [
          "Formal dinner",
          "Feast",
          "Dinner gala"
        ],
        "topicId": "food"
      },
      {
        "id": "food-72",
        "word": "Potluck",
        "phonetic": "/ˈpɑːt.lʌk/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Bữa tiệc liên hoan mỗi người tự mang một món góp vui",
        "definitionEn": "A meal or party to which each guest contributes a dish of food.",
        "exampleEn": "Our neighborhood organized an informal Sunday potluck where everyone brought homemade regional specialties.",
        "exampleVi": "Khu phố của chúng tôi đã tổ chức một bữa tiệc potluck thân mật vào Chủ nhật, nơi mỗi người đều mang đến những món đặc sản vùng miền tự nấu.",
        "synonyms": [
          "Shared meal",
          "Bring-a-dish party"
        ],
        "topicId": "food"
      },
      {
        "id": "food-73",
        "word": "Leftovers",
        "phonetic": "/ˈleftˌoʊ.vɚz/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Thức ăn thừa còn lại từ bữa trước",
        "definitionEn": "Food remaining from a meal and kept for later consumption.",
        "exampleEn": "Stored in an airtight glass container, yesterday's leftover chicken curry tastes even richer reheated today.",
        "exampleVi": "Được bảo quản trong hộp thủy tinh đậy kín, món cà ri gà còn thừa hôm qua thậm chí còn đậm đà hơn khi hâm nóng lại hôm nay.",
        "synonyms": [
          "Surplus food",
          "Remaining meal"
        ],
        "topicId": "food"
      },
      {
        "id": "food-74",
        "word": "Recipe",
        "phonetic": "/ˈres.ə.pi/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Công thức hướng dẫn cách nấu nướng",
        "definitionEn": "A set of instructions for preparing a particular dish, including a list of the ingredients required.",
        "exampleEn": "Grandmother passed down her secret handwritten recipe for velvety caramel egg flan.",
        "exampleVi": "Bà đã truyền lại công thức viết tay bí truyền của mình cho món bánh flan trứng caramen mịn màng.",
        "synonyms": [
          "Formula",
          "Cooking instructions",
          "Preparation method"
        ],
        "topicId": "food"
      },
      {
        "id": "food-75",
        "word": "Ingredient",
        "phonetic": "/ɪnˈɡriː.di.ənt/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "A2",
        "meaningVi": "Nguyên liệu thành phần món ăn",
        "definitionEn": "Any of the foods or substances that are combined to make a particular dish.",
        "exampleEn": "Fresh sweet shallots, fragrant lemongrass, and dark soy are essential ingredients for Vietnamese barbecue.",
        "exampleVi": "Hành tím tươi ngọt, sả thơm nức và nước tương đen là những nguyên liệu thiết yếu cho món thịt nướng Việt Nam.",
        "synonyms": [
          "Component",
          "Constituent",
          "Element"
        ],
        "topicId": "food"
      },
      {
        "id": "food-76",
        "word": "Portion",
        "phonetic": "/ˈpɔːr.ʃən/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Khẩu phần ăn của một người",
        "definitionEn": "An amount of food suitable for or served to one person.",
        "exampleEn": "The generous portion of seafood fried rice was easily large enough for two people to share.",
        "exampleVi": "Khẩu phần cơm chiên hải sản hào phóng này dễ dàng đủ lớn cho hai người cùng thưởng thức.",
        "synonyms": [
          "Serving",
          "Helping",
          "Share"
        ],
        "topicId": "food"
      },
      {
        "id": "food-77",
        "word": "Bite-sized",
        "phonetic": "/ˈbaɪt.saɪzd/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Kích cỡ vừa miệng cắn một miếng",
        "definitionEn": "Small enough to be eaten in one single mouthful.",
        "exampleEn": "Caterers served elegant bite-sized savory canapés during the cocktail reception.",
        "exampleVi": "Đơn vị cung cấp tiệc đã phục vụ những chiếc bánh canapé mặn thanh lịch có kích cỡ vừa vặn một miếng cắn trong buổi tiệc cocktail.",
        "synonyms": [
          "Mouthful",
          "Miniature",
          "Tiny"
        ],
        "topicId": "food"
      },
      {
        "id": "food-78",
        "word": "Grate",
        "phonetic": "/ɡreɪt/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Bào nhỏ phô mai, củ quả bằng bàn mài",
        "definitionEn": "Reduce food to small shreds by rubbing it on a grater.",
        "exampleEn": "Grate two tablespoons of aged Parmesan directly over the steaming bowl of pasta.",
        "exampleVi": "Hãy bào hai thìa phô mai Parmesan ủ lâu năm trực tiếp lên trên bát mì ống bốc khói nghi ngút.",
        "synonyms": [
          "Shred",
          "Scrape",
          "Grind"
        ],
        "topicId": "food"
      },
      {
        "id": "food-79",
        "word": "Peel",
        "phonetic": "/piːl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "A2",
        "meaningVi": "Gọt vỏ hoa quả hoặc củ",
        "definitionEn": "Remove the outer covering or skin from a fruit or vegetable.",
        "exampleEn": "Peel and dice the ripe sweet mangoes into bite-sized cubes for the dessert salad.",
        "exampleVi": "Gọt vỏ và cắt hạt lựu những quả xoài chín ngọt thành những khối vừa ăn cho món salad tráng miệng.",
        "synonyms": [
          "Skin",
          "Pare",
          "Strip"
        ],
        "topicId": "food"
      },
      {
        "id": "food-80",
        "word": "Dice",
        "phonetic": "/daɪs/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Cắt hạt lựu thành các khối vuông nhỏ",
        "definitionEn": "Cut food into small cubes.",
        "exampleEn": "Dice the red bell peppers and crisp celery into uniform half-centimeter squares.",
        "exampleVi": "Cắt hạt lựu ớt chuông đỏ và cần tây giòn thành những hình vuông đều nhau nửa centimet.",
        "synonyms": [
          "Cube",
          "Chop small"
        ],
        "topicId": "food"
      },
      {
        "id": "food-81",
        "word": "Chop",
        "phonetic": "/tʃɑːp/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "A2",
        "meaningVi": "Băm chặt, thái khúc thực phẩm",
        "definitionEn": "Cut something into pieces with repeated sharp blows of an axe or knife.",
        "exampleEn": "Chop the fresh cilantro and scallions finely before stirring them into the simmering soup.",
        "exampleVi": "Băm nhỏ ngò rí và hành lá tươi trước khi khuấy chúng vào nồi súp đang sôi liu riu.",
        "synonyms": [
          "Cut",
          "Mince",
          "Slice"
        ],
        "topicId": "food"
      },
      {
        "id": "food-82",
        "word": "Mince",
        "phonetic": "/mɪns/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "B1",
        "meaningVi": "Băm nhuyễn tỏi, ớt hoặc thịt",
        "definitionEn": "Cut up or grind food, especially meat, into very small pieces.",
        "exampleEn": "Mince three cloves of fragrant purple garlic before tossing them into the sizzling pan.",
        "exampleVi": "Băm nhuyễn ba tép tỏi tím thơm phức trước khi thả chúng vào chiếc chảo đang xèo xèo nóng bỏng.",
        "synonyms": [
          "Finely chop",
          "Grind",
          "Hash"
        ],
        "topicId": "food"
      },
      {
        "id": "food-83",
        "word": "Slice",
        "phonetic": "/slaɪs/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "A2",
        "meaningVi": "Thái lát mỏng đều tay",
        "definitionEn": "Cut something into slices with a sharp knife.",
        "exampleEn": "Slice the crusty whole grain sourdough loaf thinly to make gourmet avocado toast.",
        "exampleVi": "Thái mỏng ổ bánh mì men chua nguyên cám giòn rụm để làm món bánh mì nướng bơ thượng hạng.",
        "synonyms": [
          "Carve",
          "Shave",
          "Cut into pieces"
        ],
        "topicId": "food"
      },
      {
        "id": "food-84",
        "word": "Simmering",
        "phonetic": "/ˈsɪm.ɚ.ɪŋ/",
        "partOfSpeech": "Adj",
        "difficultyLevel": "B1",
        "meaningVi": "Đang sôi lăn tăn sủi bọt nhẹ",
        "definitionEn": "Staying just below the boiling point while gently bubbling.",
        "exampleEn": "The fragrant aroma wafting from the simmering pot of beef pho made everyone's mouth water.",
        "exampleVi": "Hương thơm ngào ngạt bốc lên từ nồi phở bò đang sôi lăn tăn khiến ai nấy đều ứa nước miếng.",
        "synonyms": [
          "Gentle boiling",
          "Stewing"
        ],
        "topicId": "food"
      },
      {
        "id": "food-85",
        "word": "Boil",
        "phonetic": "/bɔɪl/",
        "partOfSpeech": "Verb",
        "difficultyLevel": "A1",
        "meaningVi": "Đun sôi sùng sục ở 100 độ C",
        "definitionEn": "Reach or cause to reach the temperature at which it bubbles and turns to vapor.",
        "exampleEn": "Bring two liters of salted water to a rolling boil before adding the dried spaghetti.",
        "exampleVi": "Đun hai lít nước muối cho sôi sùng sục trước khi thả những sợi mì spaghetti khô vào.",
        "synonyms": [
          "Bubble vigorously",
          "Heat to 100°C"
        ],
        "topicId": "food"
      }
    ]
  },
  {
    "id": "idioms",
    "title": "Thành Ngữ & Cụm Từ Thông Dụng",
    "slug": "idioms",
    "icon": "Sparkles",
    "color": "text-pink-500",
    "bgColor": "bg-pink-50 dark:bg-pink-950/40",
    "borderColor": "border-pink-200 dark:border-pink-800",
    "description": "Thành ngữ tiếng Anh sinh động, diễn đạt tự nhiên như người bản xứ trong mọi tình huống",
    "wordCount": 85,
    "words": [
      {
        "id": "idiom-1",
        "word": "Hit the nail on the head",
        "phonetic": "/hɪt ðə neɪl ɑːn ðə hed/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Nói trúng phóc tim đen, cực kỳ chính xác",
        "definitionEn": "Describe exactly what is causing a situation or problem.",
        "exampleEn": "Her incisive analysis of our product bottleneck completely hit the nail on the head.",
        "exampleVi": "Phân tích sắc sảo của cô về nút thắt cổ chai sản phẩm của chúng tôi đã nói trúng phóc tim đen hoàn toàn.",
        "synonyms": [
          "Be dead right",
          "Accurate",
          "Spot on"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-2",
        "word": "Bite the bullet",
        "phonetic": "/baɪt ðə ˈbʊl.ɪt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Cắn răng chịu đựng đối mặt với việc khó",
        "definitionEn": "Decide to do something difficult or unpleasant that one has been putting off or hesitating over.",
        "exampleEn": "I finally decided to bite the bullet and pay the expensive repair bill for my car transmission.",
        "exampleVi": "Cuối cùng tôi quyết định cắn răng chịu đựng chi trả hóa đơn sửa chữa đắt đỏ cho hộp số xe ô tô của mình.",
        "synonyms": [
          "Face the music",
          "Endure hardships",
          "Take the plunge"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-3",
        "word": "Blessing in disguise",
        "phonetic": "/ˌbles.ɪŋ ɪn dɪsˈɡaɪz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Trong cái rủi lại có cái may",
        "definitionEn": "An apparent misfortune that eventually has good results.",
        "exampleEn": "Getting laid off from the bank turned out to be a blessing in disguise as he launched his dream tech firm.",
        "exampleVi": "Bị sa thải khỏi ngân hàng hóa ra lại là trong cái rủi có cái may vì anh đã khởi nghiệp thành công công ty công nghệ mơ ước.",
        "synonyms": [
          "Hidden benefit",
          "Fortunate misfortune"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-4",
        "word": "Burn the midnight oil",
        "phonetic": "/bɝːn ðə ˈmɪd.naɪt ɔɪl/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Thức khuya cày cuốc học tập hoặc làm việc",
        "definitionEn": "Read or work late into the night.",
        "exampleEn": "Medical residents frequently burn the midnight oil preparing for their specialized board exams.",
        "exampleVi": "Các bác sĩ nội trú thường xuyên phải thức khuya cày cuốc để chuẩn bị cho kỳ thi cấp chứng chỉ hành nghề chuyên khoa.",
        "synonyms": [
          "Work late",
          "Pull an all-nighter",
          "Study late"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-5",
        "word": "Break the ice",
        "phonetic": "/breɪk ðiː aɪs/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Phá vỡ bầu không khí ngượng ngùng ban đầu",
        "definitionEn": "Do or say something to relieve tension or get conversation going at the start of a meeting or party.",
        "exampleEn": "The facilitator introduced a fun trivia quiz to break the ice among the new corporate hires.",
        "exampleVi": "Người điều phối đã giới thiệu một câu đố vui nhộn để phá vỡ sự ngượng ngùng ban đầu giữa các nhân sự mới của tập đoàn.",
        "synonyms": [
          "Ease tension",
          "Warm up",
          "Make comfortable"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-6",
        "word": "Piece of cake",
        "phonetic": "/piːs əv keɪk/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "A2",
        "meaningVi": "Dễ như ăn kẹo, không tốn chút sức lực",
        "definitionEn": "Something that is very easy to do.",
        "exampleEn": "With months of diligent preparation, the final driving test was an absolute piece of cake.",
        "exampleVi": "Với nhiều tháng chuẩn bị chăm chỉ, bài thi sát hạch lái xe cuối cùng dễ như ăn kẹo.",
        "synonyms": [
          "Child's play",
          "Breeze",
          "Walk in the park"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-7",
        "word": "Under the weather",
        "phonetic": "/ˌʌn.dɚ ðə ˈweð.ɚ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Cảm thấy hơi mệt mỏi trong người, uể oải",
        "definitionEn": "Slightly unwell or in low spirits.",
        "exampleEn": "She decided to stay home from work today because she was feeling a bit under the weather.",
        "exampleVi": "Cô ấy quyết định ở nhà nghỉ làm hôm nay vì cảm thấy trong người hơi mệt mỏi uể oải.",
        "synonyms": [
          "Indisposed",
          "Ailing",
          "Unwell"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-8",
        "word": "Cost an arm and a leg",
        "phonetic": "/kɑːst ən ɑːrm ənd ə leɡ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Đắt đỏ cắt cổ, tốn một gia tài",
        "definitionEn": "Be extremely expensive.",
        "exampleEn": "Repairing European luxury sports cars can cost an arm and a leg if genuine parts are required.",
        "exampleVi": "Sửa chữa xe thể thao hạng sang của châu Âu có thể đắt đỏ cắt cổ nếu đòi hỏi phụ tùng chính hãng.",
        "synonyms": [
          "Exorbitant",
          "Astronomical",
          "Pricy"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-9",
        "word": "See eye to eye",
        "phonetic": "/siː aɪ tuː aɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Hoàn toàn đồng lòng nhất trí quan điểm",
        "definitionEn": "Agree with someone completely.",
        "exampleEn": "Although they are brothers, they rarely see eye to eye when discussing political economics.",
        "exampleVi": "Mặc dù là anh em ruột, họ hiếm khi hoàn toàn đồng lòng nhất trí khi thảo luận về kinh tế chính trị.",
        "synonyms": [
          "Agree",
          "Be in accord",
          "Concur"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-10",
        "word": "Once in a blue moon",
        "phonetic": "/wʌns ɪn ə bluː muːn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Năm thì mười họa, hiếm hoi lắm mới có",
        "definitionEn": "Very rarely; on rare occasions.",
        "exampleEn": "Living across different continents, the old friends meet up only once in a blue moon.",
        "exampleVi": "Sống ở hai lục địa khác nhau, những người bạn cũ năm thì mười họa hiếm hoi lắm mới có dịp gặp nhau.",
        "synonyms": [
          "Seldom",
          "Rarely",
          "Infrequently"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-11",
        "word": "Barking up the wrong tree",
        "phonetic": "/ˌbɑːr.kɪŋ ʌp ðə rɑːŋ ˈtriː/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Hiểu lầm hướng đi, trách nhầm đối tượng",
        "definitionEn": "Pursuing a mistaken line of thought or course of action.",
        "exampleEn": "If you think accusing the front-desk clerk will solve system bugs, you're barking up the wrong tree.",
        "exampleVi": "Nếu bạn nghĩ việc đổ lỗi cho nhân viên lễ tân sẽ giải quyết được lỗi hệ thống thì bạn đang hiểu lầm hướng đi hoàn toàn rồi.",
        "synonyms": [
          "Misguided",
          "On the wrong track"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-12",
        "word": "Add insult to injury",
        "phonetic": "/æd ˈɪn.sʌlt tuː ˈɪn.dʒɚ.i/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Xát muối vào vết thương, làm tình hình tệ hơn",
        "definitionEn": "Act in a way that makes a bad situation even worse.",
        "exampleEn": "First our flight was delayed by four hours, and then, to add insult to injury, they lost our luggage.",
        "exampleVi": "Đầu tiên là chuyến bay bị hoãn bốn tiếng, và sau đó, như xát thêm muối vào vết thương, họ làm thất lạc luôn hành lý của chúng tôi.",
        "synonyms": [
          "Worsen things",
          "Make matters worse"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-13",
        "word": "At the drop of a hat",
        "phonetic": "/æt ðə drɑːp əv ə hæt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Ngay tắp lự, không ngần ngại chút nào",
        "definitionEn": "Without hesitation or good reason; instantly.",
        "exampleEn": "He is so adventurous that he will pack a backpack and travel to distant countries at the drop of a hat.",
        "exampleVi": "Anh ấy thích phiêu lưu đến mức sẵn sàng xách ba lô lên và đi du lịch tới những vùng đất xa xôi ngay tắp lự không một chút đắn đo.",
        "synonyms": [
          "Instantly",
          "Without delay",
          "Promptly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-14",
        "word": "Ball is in your court",
        "phonetic": "/bɑːl ɪz ɪn jɔːr kɔːrt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Quyền quyết định hành động tiếp theo thuộc về bạn",
        "definitionEn": "It is up to you to take the next decision or step.",
        "exampleEn": "We have submitted our best commercial price offer; the ball is now in the client's court.",
        "exampleVi": "Chúng tôi đã gửi mức giá thương mại tốt nhất có thể; quyền quyết định bước tiếp theo giờ thuộc về phía khách hàng.",
        "synonyms": [
          "Your move",
          "Up to you"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-15",
        "word": "Beat around the bush",
        "phonetic": "/biːt əˈraʊnd ðə bʊʃ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Nói vòng vo tam quốc, tránh né chuyện chính",
        "definitionEn": "Discuss a matter without coming to the point.",
        "exampleEn": "Stop beating around the bush and tell us directly whether you accept the job offer.",
        "exampleVi": "Đừng nói vòng vo tam quốc nữa và hãy nói thẳng cho chúng tôi biết liệu bạn có nhận lời mời làm việc hay không.",
        "synonyms": [
          "Equivocate",
          "Prevaricate",
          "Dither"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-16",
        "word": "Best of both worlds",
        "phonetic": "/ˌbest əv boʊθ ˈwɝːldz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Vẹn cả đôi đường, được cả hai mặt tốt",
        "definitionEn": "A situation in which you can enjoy the advantages of two very different things at the same time.",
        "exampleEn": "Living in the tranquil green countryside while working remotely for a Silicon Valley firm gives her the best of both worlds.",
        "exampleVi": "Sống ở vùng quê xanh mát thanh bình trong khi làm việc từ xa cho một công ty Thung lũng Silicon mang lại cho cô sự vẹn toàn cả đôi đường.",
        "synonyms": [
          "Win-win",
          "Ideal situation"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-17",
        "word": "Burn bridges",
        "phonetic": "/bɝːn ˈbrɪdʒ.ɪz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Đốt cầu rút ván, tự cắt đứt đường lui của mình",
        "definitionEn": "Destroy all possible ways of going back to an earlier situation.",
        "exampleEn": "Never insult your previous employer when resigning; you should never burn your professional bridges.",
        "exampleVi": "Đừng bao giờ xúc phạm người sử dụng lao động cũ khi nộp đơn từ chức; bạn tuyệt đối không nên tự cắt đứt các mối quan hệ chuyên môn của mình.",
        "synonyms": [
          "Cut ties permanently",
          "Ruin relations"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-18",
        "word": "By the skin of one's teeth",
        "phonetic": "/baɪ ðə skɪn əv wʌnz tiːθ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Trong gang tấc, suýt soát sát nút",
        "definitionEn": "Only just; by a very narrow margin.",
        "exampleEn": "He sprinted frantically across the terminal and caught the final train by the skin of his teeth.",
        "exampleVi": "Anh đã chạy thục mạng qua nhà ga và bắt kịp chuyến tàu cuối cùng chỉ trong đường tơ kẽ tóc.",
        "synonyms": [
          "Barely",
          "Narrowly",
          "Just in time"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-19",
        "word": "Cry over spilt milk",
        "phonetic": "/kraɪ ˈoʊ.vɚ spɪlt mɪlk/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Tiếc rẻ chuyện đã rồi không thể cứu vãn",
        "definitionEn": "Worry or lament about past events that cannot be changed.",
        "exampleEn": "The server already crashed and was restored; there is zero point crying over spilt milk.",
        "exampleVi": "Máy chủ đằng nào cũng đã sập và đã được khôi phục; chẳng ích gì khi cứ ngồi tiếc rẻ chuyện đã qua.",
        "synonyms": [
          "Useless regret",
          "Lamenting the past"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-20",
        "word": "Curiosity killed the cat",
        "phonetic": "/ˌkjʊr.iˈɑː.sə.t̬i kɪld ðə kæt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Tò mò quá hại thân, chớ chõ mũi vào chuyện người",
        "definitionEn": "Being too curious can get you into trouble.",
        "exampleEn": "Don't snoop through confidential executive memos; remember that curiosity killed the cat.",
        "exampleVi": "Đừng có lén lút đọc các bản ghi nhớ tuyệt mật của ban giám đốc; hãy nhớ rằng tò mò quá có ngày hại thân.",
        "synonyms": [
          "Warning against prying"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-21",
        "word": "Devil's advocate",
        "phonetic": "/ˌdev.əlz ˈæd.və.kət/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Người cố tình phản biện để tìm ra kẽ hở",
        "definitionEn": "A person who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments.",
        "exampleEn": "Let me play devil's advocate for a moment: what if our chief competitor slashes their subscription prices by half?",
        "exampleVi": "Hãy để tôi đóng vai người phản biện một lát: điều gì sẽ xảy ra nếu đối thủ cạnh tranh lớn nhất của chúng ta giảm một nửa giá thuê bao?",
        "synonyms": [
          "Contrarian",
          "Counter-arguer"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-22",
        "word": "Don't count your chickens before they hatch",
        "phonetic": "/doʊnt kaʊnt jɔːr ˈtʃɪk.ɪnz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Đừng đếm cua trong lỗ, nói trước bước không qua",
        "definitionEn": "Don't make plans based on events that may not happen.",
        "exampleEn": "Wait until the enterprise contract is signed before celebrating; don't count your chickens before they hatch.",
        "exampleVi": "Hãy đợi cho đến khi hợp đồng doanh nghiệp được ký kết chính thức rồi hãy ăn mừng; đừng đếm cua trong lỗ.",
        "synonyms": [
          "Don't anticipate victory"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-23",
        "word": "Elephant in the room",
        "phonetic": "/ˈel.ə.fənt ɪn ðə ruːm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Vấn đề hiển nhiên to lù lù nhưng ai cũng né tránh",
        "definitionEn": "A major problem or controversial issue that is obviously present but which everyone avoids discussing.",
        "exampleEn": "The company's declining cash reserves was the obvious elephant in the room that nobody dared mention during the board meeting.",
        "exampleVi": "Lượng dự trữ tiền mặt ngày càng cạn kiệt của công ty là vấn đề to lù lù hiển nhiên nhưng không ai dám nhắc tới trong cuộc họp hội đồng quản trị.",
        "synonyms": [
          "Unaddressed problem",
          "Taboo topic"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-24",
        "word": "Fit as a fiddle",
        "phonetic": "/fɪt əz ə ˈfɪd.əl/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Khỏe như vâm, dồi dào sinh lực",
        "definitionEn": "In very good health and physical condition.",
        "exampleEn": "After completing his cardiac rehabilitation program, our seventy-year-old grandfather is as fit as a fiddle.",
        "exampleVi": "Sau khi hoàn thành chương trình phục hồi chức năng tim mạch, người ông bảy mươi tuổi của chúng tôi lại khỏe như vâm.",
        "synonyms": [
          "In peak health",
          "Robust",
          "Vigorous"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-25",
        "word": "Go the extra mile",
        "phonetic": "/ɡoʊ ðiː ˈek.strə maɪl/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Nỗ lực vượt bậc làm nhiều hơn mong đợi",
        "definitionEn": "Make a special effort to achieve something or help someone.",
        "exampleEn": "Our dedicated customer service team is always willing to go the extra mile to delight clients.",
        "exampleVi": "Đội ngũ chăm sóc khách hàng tận tâm của chúng tôi luôn sẵn sàng nỗ lực vượt bậc để làm hài lòng khách hàng.",
        "synonyms": [
          "Exceed expectations",
          "Make extra effort"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-26",
        "word": "Good things come to those who wait",
        "phonetic": "/ɡʊd θɪŋz kʌm tuː ðoʊz huː weɪt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Kiên nhẫn ắt gặt hái quả ngọt",
        "definitionEn": "Patience is a virtue that will ultimately be rewarded.",
        "exampleEn": "Don't get discouraged by early setbacks in your business venture; good things come to those who wait.",
        "exampleVi": "Đừng nản lòng trước những trở ngại ban đầu trong dự án kinh doanh của bạn; kiên nhẫn ắt sẽ gặt hái được quả ngọt.",
        "synonyms": [
          "Patience pays off"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-27",
        "word": "Hear it on the grapevine",
        "phonetic": "/hɪr ɪt ɑːn ðə ˈɡreɪp.vaɪn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Nghe phong phanh tin đồn hành lang",
        "definitionEn": "Hear rumors or unverified information circulated informally.",
        "exampleEn": "I heard on the corporate grapevine that the finance director is planning to step down next month.",
        "exampleVi": "Tôi nghe phong phanh tin đồn hành lang rằng giám đốc tài chính đang có kế hoạch từ chức vào tháng tới.",
        "synonyms": [
          "Hear rumors",
          "Word of mouth"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-28",
        "word": "Hit the sack",
        "phonetic": "/hɪt ðə sæk/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Đi ngủ sau một ngày dài mệt mỏi",
        "definitionEn": "Go to bed to sleep.",
        "exampleEn": "It's past midnight and we have an early morning flight; I'm going to hit the sack right now.",
        "exampleVi": "Đã qua nửa đêm rồi và chúng ta có một chuyến bay vào sáng sớm mai; tôi sẽ đi ngủ ngay bây giờ đây.",
        "synonyms": [
          "Go to sleep",
          "Turn in"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-29",
        "word": "In the heat of the moment",
        "phonetic": "/ɪn ðə hiːt əv ðə ˈmoʊ.mənt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Trong lúc nóng giận nhất thời mất kiểm soát",
        "definitionEn": "While temporarily angry, excited, or engrossed, without thinking about consequences.",
        "exampleEn": "He apologized sincerely for shouting, admitting he said those hurtful words in the heat of the moment.",
        "exampleVi": "Anh đã chân thành xin lỗi vì đã quát tháo, thừa nhận rằng mình đã buột miệng nói ra những lời gây tổn thương đó trong lúc nóng giận nhất thời.",
        "synonyms": [
          "Impetuously",
          "Angrily"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-30",
        "word": "It takes two to tango",
        "phonetic": "/ɪt teɪks tuː tuː ˈtæŋ.ɡoʊ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Cả hai bên đều có lỗi, một bàn tay không vỗ nên tiếng",
        "definitionEn": "Both people involved in a difficult situation or argument must share the blame.",
        "exampleEn": "Don't put all the blame on your coworker for the project collapse; remember it takes two to tango.",
        "exampleVi": "Đừng đổ hết mọi lỗi lầm lên đầu người đồng nghiệp về sự đổ bể của dự án; hãy nhớ rằng một bàn tay không vỗ nên tiếng.",
        "synonyms": [
          "Mutual responsibility",
          "Shared blame"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-31",
        "word": "Jump on the bandwagon",
        "phonetic": "/dʒʌmp ɑːn ðə ˈbændˌwæɡ.ən/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Đua đòi theo trào lưu số đông",
        "definitionEn": "Join others in doing or supporting something fashionable or likely to be successful.",
        "exampleEn": "Every consumer brand is rushing to jump on the artificial intelligence bandwagon this year.",
        "exampleVi": "Mọi thương hiệu tiêu dùng đều đang vội vã chạy theo trào lưu trí tuệ nhân tạo trong năm nay.",
        "synonyms": [
          "Follow the trend",
          "Conform"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-32",
        "word": "Keep an eye on",
        "phonetic": "/kiːp ən aɪ ɑːn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "A2",
        "meaningVi": "Để mắt trông chừng, giám sát cẩn thận",
        "definitionEn": "Watch someone or something carefully; supervise.",
        "exampleEn": "Could you please keep an eye on my laptop backpack while I step away to order a coffee?",
        "exampleVi": "Bạn có thể vui lòng để mắt trông chừng chiếc ba lô đựng laptop của tôi trong khi tôi đi gọi cà phê được không?",
        "synonyms": [
          "Watch over",
          "Guard",
          "Monitor"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-33",
        "word": "Kill two birds with one stone",
        "phonetic": "/kɪl tuː bɝːdz wɪð wʌn stoʊn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Một mũi tên trúng hai đích, nhất cử lưỡng tiện",
        "definitionEn": "Achieve two objectives with one single action.",
        "exampleEn": "Walking to the downtown office kills two birds with one stone: you get daily cardio exercise and save commute money.",
        "exampleVi": "Đi bộ đến văn phòng ở trung tâm thành phố là một mũi tên trúng hai đích: bạn vừa được tập thể dục tim mạch mỗi ngày vừa tiết kiệm tiền đi lại.",
        "synonyms": [
          "Dual achievement",
          "Efficient action"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-34",
        "word": "Leave no stone unturned",
        "phonetic": "/liːv noʊ stoʊn ʌnˈtɝːnd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Dốc toàn lực tìm mọi cách, không bỏ sót điều gì",
        "definitionEn": "Try every possible course of action in order to achieve something.",
        "exampleEn": "Investigators promised the grieving family they would leave no stone unturned in finding the missing hiker.",
        "exampleVi": "Các nhà điều tra hứa với gia đình đau buồn rằng họ sẽ dốc toàn lực tìm kiếm mọi ngóc ngách và không bỏ sót manh mối nào để tìm ra người đi bộ mất tích.",
        "synonyms": [
          "Exhaust all options",
          "Search thoroughly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-35",
        "word": "Let the cat out of the bag",
        "phonetic": "/let ðə kæt aʊt əv ðə bæɡ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Vô tình làm lộ bí mật",
        "definitionEn": "Reveal a secret carelessly or by mistake.",
        "exampleEn": "We were planning a surprise birthday party for him, but his sister let the cat out of the bag.",
        "exampleVi": "Chúng tôi đang lên kế hoạch tổ chức một bữa tiệc sinh nhật bất ngờ cho anh ấy, nhưng em gái anh đã vô tình làm lộ bí mật mất rồi.",
        "synonyms": [
          "Spill the beans",
          "Divulge a secret"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-36",
        "word": "Miss the boat",
        "phonetic": "/mɪs ðə boʊt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Bỏ lỡ cơ hội vàng ngàn năm có một",
        "definitionEn": "Be too slow to take advantage of an opportunity.",
        "exampleEn": "Investors who hesitated to buy shares during the market dip completely missed the boat.",
        "exampleVi": "Những nhà đầu tư ngập ngừng không dám mua cổ phiếu trong đợt sụt giảm của thị trường đã hoàn toàn bỏ lỡ cơ hội vàng.",
        "synonyms": [
          "Lose the opportunity",
          "Be too late"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-37",
        "word": "No pain, no gain",
        "phonetic": "/noʊ peɪn noʊ ɡeɪn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Có công mài sắt có ngày nên kim, không gian nan sao có thành công",
        "definitionEn": "Suffering or effort is needed to achieve something worthwhile.",
        "exampleEn": "The rigorous conditioning drills were grueling, but the athletes lived by the mantra: no pain, no gain.",
        "exampleVi": "Những bài tập thể lực nghiêm ngặt vô cùng mệt mỏi, nhưng các vận động viên luôn sống theo tôn chỉ: không có gian nan thì làm sao có được thành công.",
        "synonyms": [
          "Effort brings reward"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-38",
        "word": "Off the hook",
        "phonetic": "/ˌɑːf ðə ˈhʊk/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Thoát khỏi rắc rối hoặc trách nhiệm",
        "definitionEn": "No longer in trouble or difficulty; freed from an obligation.",
        "exampleEn": "Since the client canceled the presentation, the design team is off the hook for this weekend.",
        "exampleVi": "Vì khách hàng đã hủy buổi thuyết trình, đội ngũ thiết kế đã thoát khỏi gánh nặng phải làm thêm vào cuối tuần này.",
        "synonyms": [
          "Exonerated",
          "Relieved of duty"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-39",
        "word": "On cloud nine",
        "phonetic": "/ɑːn klaʊd naɪn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Lâng lâng trên chín tầng mây, hạnh phúc tột cùng",
        "definitionEn": "Extremely happy; in a state of blissful euphoria.",
        "exampleEn": "She was on cloud nine the entire week after receiving an offer letter from her dream university.",
        "exampleVi": "Cô ấy như đang lâng lâng trên chín tầng mây suốt cả tuần sau khi nhận được thư mời nhập học từ trường đại học mơ ước.",
        "synonyms": [
          "Elated",
          "Overjoyed",
          "Ecstatic"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-40",
        "word": "On the fence",
        "phonetic": "/ɑːn ðə fens/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Lưỡng lự ba phải chưa thể đưa ra quyết định",
        "definitionEn": "Undecided between two choices or opinions.",
        "exampleEn": "I am still on the fence about whether to buy the electric hybrid vehicle or wait for solid-state batteries.",
        "exampleVi": "Tôi vẫn còn đang lưỡng lự chưa biết nên mua chiếc xe lai điện hay chờ đợi công nghệ pin thể rắn ra đời.",
        "synonyms": [
          "Undecided",
          "Wavering",
          "Hesitant"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-41",
        "word": "Play by ear",
        "phonetic": "/pleɪ baɪ ɪr/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Tùy cơ ứng biến theo tình hình thực tế",
        "definitionEn": "Proceed intuitively without a pre-formulated plan; improvise.",
        "exampleEn": "We don't have a rigid itinerary for tomorrow's city tour; let's just play it by ear depending on the weather.",
        "exampleVi": "Chúng ta không có một lịch trình cứng nhắc nào cho chuyến tham quan thành phố ngày mai; hãy cứ tùy cơ ứng biến tùy theo thời tiết ra sao.",
        "synonyms": [
          "Improvise",
          "Adapt as you go"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-42",
        "word": "Rain on someone's parade",
        "phonetic": "/reɪn ɑːn ˈsʌm.wʌnz pəˈreɪd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Dội gáo nước lạnh làm mất hứng người khác",
        "definitionEn": "Spoil someone's pleasure or plans.",
        "exampleEn": "I hate to rain on your parade, but the outdoor festival has been canceled due to the torrential storm.",
        "exampleVi": "Tôi rất ghét phải dội một gáo nước lạnh làm mất hứng của bạn, nhưng lễ hội ngoài trời đã bị hủy do cơn bão lớn trút nước.",
        "synonyms": [
          "Dampen enthusiasm",
          "Spoil fun"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-43",
        "word": "Raining cats and dogs",
        "phonetic": "/ˈreɪ.nɪŋ kæts ənd dɑːɡz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "A2",
        "meaningVi": "Mưa tầm tã, mưa như trút nước",
        "definitionEn": "Raining extremely heavily.",
        "exampleEn": "Don't step outside without an umbrella; it's raining cats and dogs out there.",
        "exampleVi": "Đừng bước ra ngoài mà không có ô; ngoài trời đang mưa như trút nước đấy.",
        "synonyms": [
          "Pouring down",
          "Torrential rain"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-44",
        "word": "Spill the beans",
        "phonetic": "/spɪl ðə biːnz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Bật mí, tiết lộ bí mật cho mọi người biết",
        "definitionEn": "Disclose a secret or reveal confidential information.",
        "exampleEn": "Come on, spill the beans! What did the hiring manager tell you in the private meeting?",
        "exampleVi": "Nào, mau bật mí đi! Người quản lý tuyển dụng đã nói gì với bạn trong cuộc họp riêng vậy?",
        "synonyms": [
          "Reveal the secret",
          "Disclose"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-45",
        "word": "Take with a grain of salt",
        "phonetic": "/teɪk wɪð ə ɡreɪn əv sɑːlt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Bán tín bán nghi, nghe để tham khảo thôi",
        "definitionEn": "View something with skepticism or not to take it literally.",
        "exampleEn": "Take online celebrity gossip with a grain of salt; sensational blogs frequently exaggerate rumors.",
        "exampleVi": "Hãy bán tín bán nghi với những tin đồn của người nổi tiếng trên mạng; các trang blog giật gân thường phóng đại tin đồn.",
        "synonyms": [
          "Be skeptical of",
          "Don't swallow whole"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-46",
        "word": "Taste of one's own medicine",
        "phonetic": "/teɪst əv wʌnz oʊn ˈmed.ə.sɪn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Gậy ông đập lưng ông, nếm mùi vị mình từng làm với người khác",
        "definitionEn": "A harsh treatment that is identical or similar to one that one has oneself administered to others.",
        "exampleEn": "The chronic bully got a taste of his own medicine when a bolder classmate publicly challenged his insults.",
        "exampleVi": "Kẻ chuyên đi bắt nạt kinh niên đã phải nếm mùi gậy ông đập lưng ông khi một người bạn cùng lớp dũng cảm hơn đã công khai thách thức những lời lăng mạ của hắn.",
        "synonyms": [
          "Retribution",
          "Poetic justice"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-47",
        "word": "Through thick and thin",
        "phonetic": "/θruː θɪk ənd θɪn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Cùng nhau vượt qua mọi hoạn nạn thăng trầm",
        "definitionEn": "Under all circumstances, no matter how difficult or unpleasant.",
        "exampleEn": "True childhood friends stick together through thick and thin for decades.",
        "exampleVi": "Những người bạn thời thơ ấu đích thực luôn gắn bó bên nhau cùng vượt qua mọi hoạn nạn thăng trầm trong suốt nhiều thập kỷ.",
        "synonyms": [
          "In good and bad times",
          "Steadfastly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-48",
        "word": "Throw in the towel",
        "phonetic": "/θroʊ ɪn ðə ˈtaʊ.əl/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Tung khăn trắng đầu hàng, bỏ cuộc",
        "definitionEn": "Abandon a struggle; admit defeat.",
        "exampleEn": "After years of fighting declining retail sales, the boutique owner finally decided to throw in the towel.",
        "exampleVi": "Sau nhiều năm vật lộn với doanh số bán lẻ sụt giảm, người chủ cửa hàng thời trang cuối cùng đã quyết định tung khăn trắng đầu hàng.",
        "synonyms": [
          "Give up",
          "Admit defeat",
          "Surrender"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-49",
        "word": "Time flies",
        "phonetic": "/taɪm flaɪz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "A2",
        "meaningVi": "Thời gian thấm thoát thoi đưa vút bay",
        "definitionEn": "Time passes surprisingly quickly.",
        "exampleEn": "It feels like we only began university yesterday; how time flies when you're deeply engrossed in learning!",
        "exampleVi": "Cảm giác như chúng ta mới chỉ bước chân vào đại học ngày hôm qua; thời gian mới thấm thoát thoi đưa làm sao khi bạn say mê học tập!",
        "synonyms": [
          "Time passes swiftly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-50",
        "word": "Under the table",
        "phonetic": "/ˌʌn.dɚ ðə ˈteɪ.bəl/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Lén lút dưới gầm bàn, hối lộ phi pháp",
        "definitionEn": "Secretly and illegally, especially of financial transactions.",
        "exampleEn": "The dishonest contractor paid shady inspectors under the table to bypass mandatory fire regulations.",
        "exampleVi": "Nhà thầu bất chính đã đút lót lén lút dưới gầm bàn cho các thanh tra mờ ám để né tránh các quy định phòng cháy bắt buộc.",
        "synonyms": [
          "Illicitly",
          "Bribed",
          "Covertly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-51",
        "word": "Up in the air",
        "phonetic": "/ʌp ɪn ðiː er/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Còn lơ lửng chưa ngã ngũ, chưa chắc chắn",
        "definitionEn": "Unresolved or undecided.",
        "exampleEn": "Our international vacation plans are still up in the air until my annual leave is officially approved.",
        "exampleVi": "Kế hoạch đi nghỉ dưỡng quốc tế của chúng tôi vẫn còn lơ lửng chưa ngã ngũ cho đến khi đơn xin nghỉ phép năm của tôi được phê duyệt chính thức.",
        "synonyms": [
          "Uncertain",
          "Pending",
          "Undecided"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-52",
        "word": "Water under the bridge",
        "phonetic": "/ˈwɑː.t̬ɚ ˌʌn.dɚ ðə brɪdʒ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyện cũ bỏ qua, nước chảy qua cầu không nhắc lại nữa",
        "definitionEn": "Past events that are no longer important or that have been forgiven.",
        "exampleEn": "We had bitter disagreements years ago, but that's all water under the bridge now; we are close allies.",
        "exampleVi": "Chúng tôi từng có những bất đồng gay gắt nhiều năm trước, nhưng tất cả giờ chỉ là chuyện cũ bỏ qua như nước chảy qua cầu; hiện chúng tôi là những đồng minh thân thiết.",
        "synonyms": [
          "Past history",
          "Forgiven past"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-53",
        "word": "Wrap one's head around",
        "phonetic": "/ræp wʌnz hed əˈraʊnd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Hiểu thấu được một vấn đề hóc búa",
        "definitionEn": "Find a way to understand or accept something complex or surprising.",
        "exampleEn": "It took weeks for the physics students to wrap their heads around the mind-bending principles of quantum entanglement.",
        "exampleVi": "Phải mất nhiều tuần các sinh viên vật lý mới có thể hiểu thấu được những nguyên lý đầy hóc búa của hiện tượng rối lượng tử.",
        "synonyms": [
          "Fathom",
          "Comprehend",
          "Grasp"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-54",
        "word": "You can't judge a book by its cover",
        "phonetic": "/juː kænt dʒʌdʒ ə bʊk/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Đừng trông mặt mà bắt hình dong",
        "definitionEn": "One should not judge the worth or value of something by its outward appearance alone.",
        "exampleEn": "The restaurant looked modest and rustic from the outside, but you can't judge a book by its cover: the food was Michelin-star level.",
        "exampleVi": "Nhà hàng trông có vẻ khiêm tốn và mộc mạc nhìn từ bên ngoài, nhưng đừng trông mặt mà bắt hình dong: đồ ăn ở đây đạt đẳng cấp sao Michelin.",
        "synonyms": [
          "Appearances can deceive"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-55",
        "word": "Back to the drawing board",
        "phonetic": "/bæk tuː ðə ˈdrɑː.ɪŋ ˌbɔːrd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Làm lại từ đầu khi kế hoạch thất bại",
        "definitionEn": "Start again from the beginning because a previous attempt failed completely.",
        "exampleEn": "The initial aerodynamic prototype failed wind-tunnel simulations, forcing engineers back to the drawing board.",
        "exampleVi": "Mẫu thử nghiệm khí động học ban đầu đã thất bại trong các mô phỏng đường hầm gió, buộc các kỹ sư phải làm lại từ đầu.",
        "synonyms": [
          "Start over",
          "Re-plan"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-56",
        "word": "Burn the candle at both ends",
        "phonetic": "/bɝːn ðə ˈkæn.dəl æt boʊθ endz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Làm việc quá sức cả ngày lẫn đêm kiệt quệ",
        "definitionEn": "Exhaust someone's physical or mental resources by working or doing other things from early in the morning until late at night.",
        "exampleEn": "Holding two demanding jobs while studying for the bar exam is burning the candle at both ends.",
        "exampleVi": "Vừa ôm hai công việc đòi hỏi khắt khe lại vừa ôn thi chứng chỉ luật sư là đang vắt kiệt sức mình cả ngày lẫn đêm.",
        "synonyms": [
          "Overwork",
          "Exhaust oneself"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-57",
        "word": "Call it a day",
        "phonetic": "/kɑːl ɪt ə deɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Nghỉ tay dừng việc hôm nay tại đây",
        "definitionEn": "Stop working on something, especially because you've done enough or you're tired.",
        "exampleEn": "We've fixed the critical database migration bugs; let's call it a day and resume tomorrow morning.",
        "exampleVi": "Chúng ta đã sửa xong các lỗi di chuyển cơ sở dữ liệu nguy cấp rồi; hãy nghỉ tay dừng việc hôm nay tại đây và tiếp tục vào sáng mai.",
        "synonyms": [
          "Pack up",
          "Finish work"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-58",
        "word": "Cut corners",
        "phonetic": "/kʌt ˈkɔːr.nɚz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Làm ẩu bớt xén quy trình để tiết kiệm",
        "definitionEn": "Do something perfunctorily so as to save time or money.",
        "exampleEn": "Never cut corners on structural concrete foundations when building high-rise skyscrapers.",
        "exampleVi": "Tuyệt đối không bao giờ được làm ẩu bớt xén quy trình móng bê tông kết cấu khi xây dựng các tòa nhà chọc trời.",
        "synonyms": [
          "Skimp",
          "Scrimp",
          "Take shortcuts"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-59",
        "word": "Down to the wire",
        "phonetic": "/daʊn tuː ðə waɪr/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Sát nút tới tận phút chót nghẹt thở",
        "definitionEn": "Until the very last minute or final moment.",
        "exampleEn": "The fierce bidding contest went right down to the wire before the winner was announced.",
        "exampleVi": "Cuộc so găng đấu thầu quyết liệt diễn ra sát nút tới tận phút chót nghẹt thở trước khi người chiến thắng được công bố.",
        "synonyms": [
          "Until the last second",
          "Nail-biting"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-60",
        "word": "Easier said than done",
        "phonetic": "/ˌiː.zi.ɚ ˈsed ðæn ˈdʌn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Nói thì dễ làm mới khó",
        "definitionEn": "More difficult to do than to talk about.",
        "exampleEn": "Adopting a strict zero-sugar diet is much easier said than done when surrounded by dessert bakeries.",
        "exampleVi": "Áp dụng chế độ ăn kiêng hoàn toàn không đường nói thì dễ làm mới khó khi xung quanh toàn là các tiệm bánh ngọt.",
        "synonyms": [
          "Easier talked about",
          "Challenging in reality"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-61",
        "word": "Every cloud has a silver lining",
        "phonetic": "/ˈev.ri klaʊd hæz ə ˈsɪl.vɚ ˈlaɪ.nɪŋ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Trong cái rủi có cái may, sau cơn mưa trời lại sáng",
        "definitionEn": "Every difficult or unpleasant situation has some advantage or hopeful aspect.",
        "exampleEn": "Losing that client gave our engineering team time to overhaul our core platform; every cloud has a silver lining.",
        "exampleVi": "Việc mất đi khách hàng đó đã cho đội ngũ kỹ thuật của chúng tôi thời gian để đại tu lại nền tảng cốt lõi; sau cơn mưa trời lại sáng.",
        "synonyms": [
          "Hope in adversity",
          "Optimistic view"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-62",
        "word": "Get out of hand",
        "phonetic": "/ɡet aʊt əv hænd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Vượt ra ngoài tầm kiểm soát, mất trật tự",
        "definitionEn": "Become chaotic, unruly, or uncontrollable.",
        "exampleEn": "The celebration street party began to get out of hand when loud fireworks were lit inside the crowd.",
        "exampleVi": "Bữa tiệc ăn mừng trên đường phố bắt đầu vượt ra ngoài tầm kiểm soát khi pháo hoa phát nổ ầm ĩ ngay giữa đám đông.",
        "synonyms": [
          "Spirals out of control",
          "Become unruly"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-63",
        "word": "Give the benefit of the doubt",
        "phonetic": "/ɡɪv ðə ˈben.ə.fɪt əv ðə daʊt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Tin tưởng thiện chí của người khác dù chưa rõ bằng chứng",
        "definitionEn": "Accept what someone tells you even though you think that they may be wrong or lying.",
        "exampleEn": "She was thirty minutes late, but we gave her the benefit of the doubt given the sudden heavy snowstorm.",
        "exampleVi": "Cô ấy đến muộn ba mươi phút, nhưng chúng tôi vẫn tin tưởng vào thiện chí của cô ấy trước cơn bão tuyết lớn bất ngờ.",
        "synonyms": [
          "Trust someone",
          "Show leniency"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-64",
        "word": "Go down in flames",
        "phonetic": "/ɡoʊ daʊn ɪn fleɪmz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Thất bại thảm hại ê chề ngoạn mục",
        "definitionEn": "Fail spectacularly or disastrously.",
        "exampleEn": "The overhyped luxury gadget went down in flames after catastrophic safety recalls.",
        "exampleVi": "Thiết bị xa xỉ được thổi phồng quá mức đã thất bại thảm hại ê chề sau các đợt triệu hồi an toàn thảm khốc.",
        "synonyms": [
          "Fail miserably",
          "Collapse disastrously"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-65",
        "word": "Ignorance is bliss",
        "phonetic": "/ˈɪɡ.nɚ.əns ɪz blɪs/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Không biết lại hay, không biết thì đỡ khổ",
        "definitionEn": "Not knowing something is often more comfortable than knowing the harsh truth.",
        "exampleEn": "Sometimes when eating street food in exotic alleys, ignorance is bliss regarding the exact ingredients.",
        "exampleVi": "Đôi khi khi ăn đồ ăn đường phố trong những con ngõ lạ, không biết rõ nguyên liệu chính xác lại là một điều thanh thản hơn.",
        "synonyms": [
          "Better not knowing"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-66",
        "word": "In a nutshell",
        "phonetic": "/ɪn ə ˈnʌt.ʃel/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Nói một cách ngắn gọn súc tích nhất",
        "definitionEn": "In the fewest possible words; concisely.",
        "exampleEn": "In a nutshell, our software reduces database cloud hosting expenses by sixty percent.",
        "exampleVi": "Nói một cách ngắn gọn súc tích nhất, phần mềm của chúng tôi giúp giảm 60% chi phí lưu trữ cơ sở dữ liệu trên đám mây.",
        "synonyms": [
          "Briefly",
          "Concisely",
          "In short"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-67",
        "word": "Keep someone at arm's length",
        "phonetic": "/kiːp ˈsʌm.wʌn æt ɑːrmz leŋθ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Giữ khoảng cách xa giao, không để quá thân thiết",
        "definitionEn": "Avoid becoming too friendly with someone.",
        "exampleEn": "The prudent manager keeps overly ambitious office politicians at arm's length.",
        "exampleVi": "Người quản lý thận trọng luôn giữ khoảng cách vừa phải với những kẻ nhiều mưu mô nơi công sở.",
        "synonyms": [
          "Maintain distance",
          "Stay aloof"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-68",
        "word": "Let sleeping dogs lie",
        "phonetic": "/let ˈsliː.pɪŋ dɑːɡz laɪ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Chuyện đã qua hãy để nó ngủ yên, chớ bới lông tìm vết",
        "definitionEn": "Avoid interfering in a situation that is currently causing no problems but might cause problems if you interfere.",
        "exampleEn": "Don't bring up that old dispute between the co-founders; let sleeping dogs lie.",
        "exampleVi": "Đừng gợi lại mối bất hòa cũ giữa các đồng sáng lập nữa; chuyện đã qua hãy để cho nó ngủ yên.",
        "synonyms": [
          "Avoid stirring trouble",
          "Leave well enough alone"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-69",
        "word": "Look before you leap",
        "phonetic": "/lʊk bɪˈfɔːr juː liːp/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Cẩn tắc vô áy náy, suy tính kỹ trước khi hành động",
        "definitionEn": "Think carefully about the possible results of something before doing it.",
        "exampleEn": "Investing all your life savings into speculative cryptocurrencies is reckless; always look before you leap.",
        "exampleVi": "Dốc toàn bộ số tiền tiết kiệm cả đời vào các loại tiền mã hóa đầu cơ là liều lĩnh; hãy luôn cẩn tắc vô áy náy suy tính kỹ trước khi hành động.",
        "synonyms": [
          "Exercise caution",
          "Think first"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-70",
        "word": "Make ends meet",
        "phonetic": "/meɪk endz miːt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Kiếm đủ tiền trang trải cuộc sống qua ngày",
        "definitionEn": "Earn just enough money to live on.",
        "exampleEn": "Working overtime on weekends enabled the humble student to make ends meet in the expensive capital.",
        "exampleVi": "Làm thêm giờ vào dịp cuối tuần đã giúp người sinh viên nghèo kiếm đủ tiền trang trải cuộc sống tại thủ đô đắt đỏ.",
        "synonyms": [
          "Survive financially",
          "Get by"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-71",
        "word": "No-brainer",
        "phonetic": "/ˈnoʊˌbreɪ.nɚ/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B1",
        "meaningVi": "Quyết định hiển nhiên không cần phải đắn đo suy nghĩ",
        "definitionEn": "Something that requires very little thought; an obvious decision.",
        "exampleEn": "Accepting a fully-funded PhD fellowship at MIT was a complete no-brainer for the young researcher.",
        "exampleVi": "Nhận suất học bổng tiến sĩ toàn phần tại MIT là một quyết định hiển nhiên không cần phải đắn đo đối với nhà nghiên cứu trẻ.",
        "synonyms": [
          "Obvious choice",
          "Easy decision"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-72",
        "word": "On the same page",
        "phonetic": "/ɑːn ðə seɪm peɪdʒ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Cùng chung cách hiểu và chí hướng",
        "definitionEn": "In complete agreement about a plan or goal.",
        "exampleEn": "Let's hold a quick alignment standup to ensure the whole engineering team is on the same page.",
        "exampleVi": "Hãy tổ chức một cuộc họp ngắn để đảm bảo toàn bộ đội ngũ kỹ thuật đều cùng chung cách hiểu và chí hướng.",
        "synonyms": [
          "In accord",
          "Unified"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-73",
        "word": "Out of the blue",
        "phonetic": "/ˌaʊt əv ðə ˈbluː/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Bất thình lình, hoàn toàn bất ngờ không báo trước",
        "definitionEn": "Completely unexpectedly; without warning.",
        "exampleEn": "Out of the blue, my childhood best friend called me after fifteen years of zero contact.",
        "exampleVi": "Hoàn toàn bất thình lình, người bạn thân nhất thời thơ ấu đã gọi điện cho tôi sau 15 năm bặt vô âm tín.",
        "synonyms": [
          "Unexpectedly",
          "Suddenly",
          "Unannounced"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-74",
        "word": "Pull someone's leg",
        "phonetic": "/pʊl ˈsʌm.wʌnz leɡ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Trêu chọc, đùa cợt ai đó cho vui",
        "definitionEn": "Deceive someone playfully as a joke.",
        "exampleEn": "Don't panic! He wasn't serious about the company canceling all bonuses; he was just pulling your leg.",
        "exampleVi": "Đừng hoảng sợ! Anh ấy không có ý nghiêm túc về việc công ty hủy toàn bộ tiền thưởng đâu; anh ấy chỉ đang trêu đùa bạn thôi.",
        "synonyms": [
          "Tease",
          "Joke with"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-75",
        "word": "Put all one's eggs in one basket",
        "phonetic": "/pʊt ɔːl wʌnz eɡz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Bỏ tất cả trứng vào một giỏ (quá mạo hiểm)",
        "definitionEn": "Risk everything on the success of one venture or asset.",
        "exampleEn": "Diversify your retirement portfolio; never put all your financial eggs in one volatile stock basket.",
        "exampleVi": "Hãy đa dạng hóa danh mục hưu trí của bạn; đừng bao giờ bỏ tất cả số trứng tài chính vào một giỏ cổ phiếu đầy biến động.",
        "synonyms": [
          "Over-concentrate risk"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-76",
        "word": "Rule of thumb",
        "phonetic": "/ˌruːl əv ˈθʌm/",
        "partOfSpeech": "Noun",
        "difficultyLevel": "B2",
        "meaningVi": "Kinh nghiệm thực tế bỏ túi mang tính ước chừng",
        "definitionEn": "A broadly accurate guide or principle, based on practice rather than theory.",
        "exampleEn": "As a general rule of thumb, save at least twenty percent of your net take-home salary every month.",
        "exampleVi": "Như một kinh nghiệm bỏ túi thông thường, hãy tiết kiệm ít nhất 20% mức lương thực nhận hàng tháng của bạn.",
        "synonyms": [
          "Heuristic",
          "Practical guideline"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-77",
        "word": "Second to none",
        "phonetic": "/ˈsek.ənd tuː ˈnʌn/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Đỉnh cao số một, không ai sánh bằng",
        "definitionEn": "Better than all others; unmatched.",
        "exampleEn": "The hospital's intensive pediatric care unit is truly second to none in the country.",
        "exampleVi": "Khoa chăm sóc tích cực nhi của bệnh viện thực sự là đỉnh cao số một không nơi nào trong cả nước sánh bằng.",
        "synonyms": [
          "Peerless",
          "Incomparable",
          "Unrivaled"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-78",
        "word": "Shoot oneself in the foot",
        "phonetic": "/ʃuːt wʌn.self ɪn ðə fʊt/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Gậy ông đập lưng ông, tự hại chính mình vì sơ suất",
        "definitionEn": "Inadvertently cause damage to one's own cause or prospects.",
        "exampleEn": "Posting rude comments about your interviewers online is completely shooting yourself in the foot.",
        "exampleVi": "Đăng những bình luận khiếm nhã về người phỏng vấn lên mạng là bạn đang tự hại chính mình một cách ngớ ngẩn.",
        "synonyms": [
          "Self-sabotage",
          "Hurt oneself"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-79",
        "word": "Steal someone's thunder",
        "phonetic": "/stiːl ˈsʌm.wʌnz ˈθʌn.dɚ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "C1",
        "meaningVi": "Cướp công cướp sự chú ý của người khác trước khi họ kịp tỏa sáng",
        "definitionEn": "Win praise for an achievement before someone else can, or steal someone's limelight.",
        "exampleEn": "He announced his startup's product launch early, effectively stealing his rival's conference thunder.",
        "exampleVi": "Anh đã công bố việc ra mắt sản phẩm của công ty khởi nghiệp sớm hơn, cướp trọn sự chú ý của đối thủ tại hội nghị.",
        "synonyms": [
          "Steal limelight",
          "Upstage"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-80",
        "word": "Straight from the horse's mouth",
        "phonetic": "/streɪt frəm ðə ˈhɔːr.sɪz maʊθ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Nguồn tin trực tiếp từ người trong cuộc xác thực",
        "definitionEn": "From the highest or most direct authority; first-hand.",
        "exampleEn": "I didn't believe the merger rumors until I heard it straight from the horse's mouth from our CEO.",
        "exampleVi": "Tôi đã không tin những lời đồn về vụ sáp nhập cho đến khi nghe trực tiếp từ chính miệng vị Tổng giám đốc điều hành của chúng tôi.",
        "synonyms": [
          "From the primary source",
          "First-hand"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-81",
        "word": "Take the bull by the horns",
        "phonetic": "/teɪk ðə bʊl baɪ ðə hɔːrnz/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Dũng cảm nắm lấy sừng bò, trực diện đương đầu khó khăn",
        "definitionEn": "Directly confront a difficult situation with courage.",
        "exampleEn": "Instead of dreading the complex software migration, the team took the bull by the horns and finished it in two weeks.",
        "exampleVi": "Thay vì sợ hãi cuộc di chuyển phần mềm phức tạp, toàn đội đã dũng cảm trực diện đương đầu và hoàn thành nó chỉ trong hai tuần.",
        "synonyms": [
          "Confront boldly",
          "Tackle head-on"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-82",
        "word": "The tip of the iceberg",
        "phonetic": "/ðə tɪp əv ðiː ˈaɪs.bɝːɡ/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Chỉ là phần nổi của tảng băng chìm",
        "definitionEn": "The small, perceptible part of a much larger situation or problem that remains unstated or unseen.",
        "exampleEn": "Reported customer payment failures are merely the tip of the iceberg of our underlying database latency.",
        "exampleVi": "Các báo cáo về lỗi thanh toán của khách hàng chỉ là phần nổi của tảng băng chìm về độ trễ cơ sở dữ liệu bên dưới của chúng tôi.",
        "synonyms": [
          "Small part",
          "Surface symptom"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-83",
        "word": "Throw caution to the wind",
        "phonetic": "/θroʊ ˈkɑː.ʃən tuː ðə wɪnd/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Liều mình hành động, phó mặc cho số phận",
        "definitionEn": "Take a reckless risk; disregard warnings.",
        "exampleEn": "He threw caution to the wind, resigned from his stable job, and booked a one-way flight to Tokyo to pursue game design.",
        "exampleVi": "Anh đã liều mình gạt bỏ mọi e ngại, từ chức công việc ổn định và đặt vé một chiều đến Tokyo để theo đuổi ngành thiết kế trò chơi.",
        "synonyms": [
          "Take big risks",
          "Be daring"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-84",
        "word": "Turn over a new leaf",
        "phonetic": "/tɝːn ˈoʊ.vɚ ə nuː liːf/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B1",
        "meaningVi": "Bước sang trang mới cuộc đời, làm lại từ đầu hướng thiện",
        "definitionEn": "Start to act or behave in a better or more responsible way.",
        "exampleEn": "After realizing how unhealthy his habits were, he decided to turn over a new leaf and exercise daily.",
        "exampleVi": "Sau khi nhận ra thói quen của mình có hại cho sức khỏe như thế nào, anh quyết định bước sang một trang mới và tập thể dục mỗi ngày.",
        "synonyms": [
          "Reform",
          "Start afresh"
        ],
        "topicId": "idioms"
      },
      {
        "id": "idiom-85",
        "word": "Weather the storm",
        "phonetic": "/ˈweð.ɚ ðə stɔːrm/",
        "partOfSpeech": "Phrase",
        "difficultyLevel": "B2",
        "meaningVi": "Vượt qua giông bão gian khó an toàn",
        "definitionEn": "Successfully deal with a very difficult problem or period.",
        "exampleEn": "With disciplined fiscal management and strong cash reserves, the tech firm weathered the severe recession storm safely.",
        "exampleVi": "Với việc quản lý tài chính kỷ luật và lượng dự trữ tiền mặt dồi dào, công ty công nghệ đã vượt qua cơn bão suy thoái nghiêm trọng một cách an toàn.",
        "synonyms": [
          "Survive",
          "Endure",
          "Come through safely"
        ],
        "topicId": "idioms"
      }
    ]
  }
];

export const ALL_VOCABULARY_WORDS: WordItem[] = VOCABULARY_TOPICS.flatMap((t) => t.words);

// Helper functions for optimal UI lookup
export function getTopicById(topicId: string): VocabularyTopic | undefined {
  return VOCABULARY_TOPICS.find((t) => t.id === topicId);
}

export function getWordsByTopic(topicId: string): WordItem[] {
  const topic = getTopicById(topicId);
  return topic ? topic.words : [];
}

export function searchVocabulary(
  query: string,
  topicId?: string,
  level?: string
): WordItem[] {
  let list = topicId && topicId !== 'all' ? getWordsByTopic(topicId) : ALL_VOCABULARY_WORDS;

  if (level && level !== 'all') {
    list = list.filter((w) => w.difficultyLevel === level);
  }

  if (!query || !query.trim()) {
    return list;
  }

  const q = query.toLowerCase().trim();
  return list.filter(
    (w) =>
      w.word.toLowerCase().includes(q) ||
      w.meaningVi.toLowerCase().includes(q) ||
      w.definitionEn.toLowerCase().includes(q) ||
      w.exampleEn.toLowerCase().includes(q) ||
      w.synonyms.some((s) => s.toLowerCase().includes(q))
  );
}

export function getVocabularyStats() {
  const levelCounts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
  ALL_VOCABULARY_WORDS.forEach((w) => {
    if (levelCounts[w.difficultyLevel] !== undefined) {
      levelCounts[w.difficultyLevel]++;
    }
  });

  return {
    totalWords: ALL_VOCABULARY_WORDS.length,
    totalTopics: VOCABULARY_TOPICS.length,
    levelCounts,
  };
}
