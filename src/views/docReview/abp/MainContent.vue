<template>
  <main class="tw-flex-1 tw-bg-gray-100 tw-px-8 tw-flex tw-overflow-hidden tw-h-screen">
    <!-- 左侧内容区域 -->
    <div class="tw-flex-1 tw-flex tw-flex-col">
      <!-- 案情时间轴卡片 -->
      <TimelineCard />

      <!-- 裁决书内容区 -->
      <div class="tw-flex tw-items-center tw-justify-between tw-mb-6">
        <h2 class="tw-text-xl tw-font-semibold">裁决书内容</h2>
        <div class="tw-flex tw-items-center tw-space-x-4 tw-gap-2">
          <a-button
              type="primary"
              @click="showProofreadingPanel"
              :loading="checking"
          >
            智能校对
          </a-button>
<!--          <a-button
              v-if="!isEditing"
              @click="startEdit"
          >
            编辑
          </a-button>
          <a-button
              v-else
              type="primary"
              @click="saveContent"
          >
            保存
          </a-button>-->
<!--          <a-button
              @click="toggleEdit"
              :type="showEdit ? 'primary' : 'default'"
          >
            <EditOutlined class="tw-w-4 tw-h-4 tw-mr-1" />
            编辑面板
          </a-button>-->
        </div>
      </div>

      <!-- 裁决书内容 -->
      <div class="tw-flex-1 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm tw-p-12 tw-overflow-y-auto" ref="contentContainer">
        <div class="tw-max-w-4xl tw-mx-auto">
          <!-- 封面页 -->
          <div class="tw-text-center tw-mb-12">
            <p class="tw-text-xl tw-font-semibold tw-mb-2">广州仲裁委员会</p>
            <p class="tw-text-sm tw-text-gray-500">GUANGZHOU ARBITRATION COMMISSION</p>
          </div>

          <h1 class="tw-text-5xl tw-font-bold tw-text-center tw-my-16 tw-tracking-widest tw-leading-loose" style="margin-left: 47.5%">
            裁<br>决<br>书
          </h1>
          <p class="tw-text-center tw-text-lg tw-tracking-widest tw-mb-16">ARBITRAL AWARD</p>
          <p class="tw-text-center tw-text-2xl tw-font-semibold tw-mb-20">广州 GUANGZHOU</p>

          <div class="tw-text-xs tw-text-gray-500 tw-text-center tw-space-y-1 tw-mb-20">
            <p>广州仲裁委员会地址：广州市越秀区沿江中路298号江湾商业中心14楼、17楼/裙楼2-4楼 咨询电话：020-83287919 传真：020-83283771 邮编：510100</p>
            <p>南沙国际仲裁中心地址：广州市南沙区南沙水岸广场2号楼3楼 咨询电话：020-34681908 传真：020-34680698 邮编：51458</p>
          </div>

          <!-- 正文页 -->
          <div class="page-break-before">
            <div class="tw-text-center tw-mb-8" >
              <h2 class="tw-text-2xl tw-font-bold tw-mb-2">广州仲裁委员会</h2>
              <h3 class="tw-text-xl tw-font-semibold">裁决书</h3>
              <p class="tw-text-lg tw-mt-4">（2026）京仲裁字第0321号</p>
            </div>

            <!-- 当事人信息 -->
            <div class="tw-mb-8 tw-text-base tw-leading-relaxed">
              <div class="tw-mb-4">
                <p class="tw-font-semibold">申请人：北京睿意德商业股份有限公司深圳分公司</p>
                <p class="tw-ml-8">住所：广东省深圳市福田区福田街道福安社区中心四路1号嘉里建设广场T1座804</p>
                <p class="tw-ml-8">负责人：索珊，职务：总经理</p>
                <p class="tw-ml-8">委托代理人：
                  <span
                      class="error-text"
                      @click="showCorrectionPopup($event, '张磊', '张蕾', 0)"
                      data-error-id="0"
                  >
                    张磊
                  </span>、李源源，广东信达（北京）律师事务所律师
                </p>
                <p class="tw-ml-8">委托代理人：游镧芳，该公司员工，身份证号码为430725199807306761</p>
              </div>

              <div class="tw-mb-6">
                <p class="tw-font-semibold">被申请人：
                  <span
                      class="error-text"
                      @click="showCorrectionPopup($event, '江门市悦泰臵业有限公司', '江门市悦泰置业有限公司', 1)"
                      data-error-id="1"
                  >
                    江门市悦泰臵业有限公司
                  </span>
                </p>
                <p class="tw-ml-8">住所：广东省江门市新会区南新区梅江萌交、㜿洛、九宾、西甲九滨</p>
                <p class="tw-ml-8">法定代表人：何德赞，职务：董事长</p>
                <p class="tw-ml-8">委托代理人：陈阳阳，广东百高律师事务所律师</p>
                <p class="tw-ml-8">委托代理人：麦晓岚，广东百高律师事务所实习人员</p>
              </div>
            </div>

            <!-- 案件受理情况 -->
            <div class="tw-mb-8 tw-text-base tw-leading-relaxed tw-text-justify">
              <p class="tw-mb-4 tw-indent-8">
                广州仲裁委员会（以下简称本会）根据申请人北京睿意德商业股份有限公司深圳分公司（以下简称申请人）与被申请人江门市悦泰臵业有限公司（以下简称被申请人）签订的《世茂新会枢纽新城商业项目策略顾问服务合同》（合同编号：RETCL20211013，以下简称《服务合同》）中的仲裁条款，于2022年12月2日受理申请人关于服务合同纠纷的仲裁申请。
              </p>

              <p class="tw-mb-4 tw-indent-8">
                本案适用《广州仲裁委员会仲裁规则（2021年版）》（以下简称《仲裁规则》），根据《仲裁规则》第二十一条、第五十七条的规定，本会向被申请人送达仲裁通知书、仲裁申请书副本、《仲裁规则》、仲裁员名册等材料。在《仲裁规则》规定期限内，被申请人未向本会提交
                <span
                    class="error-text"
                    @click="showCorrectionPopup($event, '书面答辞', '书面答辩', 2)"
                    data-error-id="2"
                >
                  书面答辞
                </span>。
              </p>

              <p class="tw-mb-4 tw-indent-8">
                根据《仲裁规则》第九十二条的规定，本案适用简易程序。在本会《仲裁规则》规定期限内，申请人与被申请人未共同选定独任仲裁员。根据《中华人民共和国仲裁法》（以下简称《仲裁法》第三十二条、《仲裁规则》第三十四条的规定，本会主任指定独任仲裁员何荣新，于2023年3月13日成立本案仲裁庭。本会按照《仲裁规则》的规定向双方当事人送达仲裁庭组成及开庭通知书。
              </p>

              <p class="tw-mb-4 tw-indent-8">
                仲裁庭于2023年4月26日依法不公开开庭审理本案，申请人的委托代理人
                <span
                    class="error-text"
                    @click="showCorrectionPopup($event, '张磊', '张蕾', 3)"
                    data-error-id="3"
                >
                  张磊
                </span>，和被申请人的委托代理人陈阳阳、麦晓岚到庭参加仲裁。
              </p>

              <p class="tw-mb-4 tw-indent-8">
                仲裁庭根据《仲裁法》第五十一条的规定，对当事人进行调解，双方未能达成调解协议。
              </p>

              <p class="tw-mb-4 tw-indent-8">
                由于本案案情复杂，双方争议较大，仲裁庭未能在《仲裁规则》规定期限内结案，根据《仲裁规则》第八十五条的规定，仲裁庭向本会主任提出延期审理申请。本会主任经审查，批准本案审理期延长至2023年7月31日。
              </p>

              <p class="tw-mb-6 tw-indent-8">本案已审理终结，现予以裁决。</p>
            </div>

            <!-- 一、仲裁请求与答辩 -->
            <div class="tw-mb-8">
              <h3 class="tw-text-lg tw-font-bold tw-mb-4 tw-text-center">一、仲裁请求与答辩</h3>

              <div class="tw-mb-6 tw-text-base tw-leading-relaxed">
                <p class="tw-mb-4 tw-indent-8">
                  申请人申请仲裁称：2021年10月13日，申请人（乙方）与被申请人（甲方）签订了《服务合同》，约定被申请人委托申请人为世茂新会枢纽新城商业项目（以下简称涉案项目）提供策略顾问服务。
                </p>

                <p class="tw-mb-4 tw-indent-8">
                  《服务合同》签订且生效后，申请人按照《服务合同》约定，始终认真积极履行合同义务，申请人于2021年12月7日提交了《RET 睿意德——江门世茂明德项目》（以下简称《第一阶段服务报告最终版》），并向被申请人进行服务成果汇报。
                </p>

                <p class="tw-mb-4 tw-indent-8">
                  根据《服务合同》第九条第2款之约定，被申请人应于《服务合同》生效后且在收到申请人开具应付款等额发票后的7个工作日内，向申请人支付第一笔服务费27万元；被申请人应于申请人提交第一阶段服务报告且收到申请人开具应付款等额发票后的7个工作日内，向申请人支付第二笔服务费18万元。然而被申请人并未支付前述款项。
                </p>

                <p class="tw-mb-4 tw-indent-8">
                  鉴于此，申请人分别于2022年2月18日和2022年4月向被申请人发送《服务沟通函》和《律师函》，要求被申请人尽快支付拖欠费用，但被申请人始终未予支付。根据《服务合同》第九条第4款之约定，对于延期付款的，申请人以书面形式通知被申请人支付相应款项，在申请人发出催款通知后合理期限内被申请人仍未支付的，申请人将向被申请人每天收取相当于逾期价款万分之一的滞纳金。
                </p>

                <p class="tw-mb-4 tw-indent-8">为此，申请人特向本会申请仲裁，请求依法裁决如仲裁请求。</p>

                <div class="tw-ml-8 tw-mb-6">
                  <p class="tw-font-semibold tw-mb-2">申请人明确后的仲裁请求为：</p>
                  <p class="tw-mb-2">（一）裁决被申请人向申请人支付策略顾问服务费45万元；</p>
                  <p class="tw-mb-2">（二）裁决被申请人向申请人支付逾期付款滞纳金（滞纳金以45万元为基数，按照每日0.1‰的标准，自2022年2月18日起计算至实际支付之日止）；</p>
                  <p class="tw-mb-2">（三）裁决被申请人向申请人支付律师费2万元、财产保全费及财产保全保险费2000元；</p>
                  <p class="tw-mb-2">（四）裁决被申请人承担本案仲裁费17355元。</p>
                </div>
              </div>

              <!-- 被申请人答辩 -->
              <div class="tw-text-base tw-leading-relaxed">
                <p class="tw-mb-4 tw-indent-8 tw-font-semibold">被申请人答辩称：</p>

                <div class="tw-ml-8">
                  <p class="tw-mb-4">（一）被申请人无需向申请人支付服务费45万元。</p>
                  <p class="tw-mb-4 tw-indent-8">
                    申请人提供的《服务合同》第十八条约定"本合同一式肆份，甲、乙双方各持贰份，此肆份文本具有同等法律效力，本合同自于双方代表签字、并加盖公章之日起生效。"据此可知，《服务合同》生效的两个前提条件为：双方法定代表人签字，且加盖公章，两者缺一不可。但，从《服务合同》落款可见，并没有被申请人的法定代表人何德赞的签字，也没有申请人法定代表人索珊的签字，故《服务合同》并未生效。因《服务合同》并未生效，双方也未实际履行未生效的《服务合同》，《服务合同》对被申请人不发生任何法律效力。
                  </p>

                  <p class="tw-mb-4">（二）被申请人无需向申请人支付逾期滞纳金。</p>
                  <p class="tw-mb-4 tw-indent-8">
                    如上所述，双方并没有实际履行未生效的《服务合同》，《服务合同》对被申请人不发生任何法律效力，被申请人无需向申请人支付其主张的服务费，因此，更无需向申请人支付逾期滞纳金。
                  </p>

                  <p class="tw-mb-4">（三）被申请人无需向申请人支付律师费</p>
                  <p class="tw-mb-4 tw-indent-8">
                    如上所述，《服务合同》未生效，双方并没有实际履行未生效的《服务合同》，《服务合同》对被申请人不发生任何法律效力，被申请人不存在任何违约事实，且《服务合同》并未约定律师费由被申请人承担，申请人也未能提供转账凭证证明律师费已经实际发生，其无权向被申请人主张任何权利，申请人应自行承担提起本案仲裁的全部费用。
                  </p>

                  <p class="tw-mb-4 tw-indent-8">
                    综上，申请人的全部仲裁请求均毫无事实及法律依据，被申请人无需向申请人支付涉案任一款项，故恳请本会依法驳回申请人的全部仲裁请求。
                  </p>
                </div>
              </div>
            </div>

            <!-- 二、举证与质证 -->
            <div class="tw-mb-8">
              <h3 class="tw-text-lg tw-font-bold tw-mb-4 tw-text-center">二、举证与质证</h3>

              <p class="tw-mb-4 tw-indent-8">申请人围绕自己的主张提供并经被申请人质证的证据有：</p>

              <div class="tw-ml-8 tw-text-base tw-leading-relaxed tw-space-y-2">
                <p>证据1：《服务合同》（合同编号：RETCL20211013）。</p>
                <p>证据2：《第一阶段服务报告最终版》（2021年12月7日）。</p>
                <p>证据3：增值税专用发票。</p>
                <p>证据4：《服务沟通函》《律师函》。</p>
                <p>证据5：《委托代理合同》、律师费发票。</p>
                <p>证据6：申请人在世茂江门项目工作群中与被申请人员工的微信聊天截图（2021年10月22日至2021年11月19日）。</p>
                <p>证据7：江门世茂明德项目工作启动会议报告（2021年10月18日）。</p>
                <p>证据8：江门世茂项目方向性初步沟通会暨《江门世茂明德方向初步探讨》（2021年11月4日）。</p>
                <p>证据9：江门世茂项目业态规划及空间建议暨《江门世茂明德项目产品规划探讨会议》（2021年11月4日）。</p>
                <p>证据10：江门世茂项目市场研究部分（最终版）暨《江门世茂明德项目市场研究专题》以及邮件截图（2021年11月12日）。</p>
                <p>证据11：财产保全保险费出账回单。</p>
                <p>证据12：财产保全受理费出账回单。</p>
                <p>证据13：江门市新会区人民法院送达回证和民事裁定书。</p>
                <p>证据14：律师费电子回执。</p>
                <p>证据15：《Fw：答复：RET 睿意德——世茂江门新会枢纽新城项目服务建议书》邮件截图（20211008）。</p>
                <p>证据16：《Re:答复：Fw:答复:RET 睿意德——世茂江门新会枢纽新城项目服务建议书》邮件截图（20211012）。</p>
                <p>证据17：《世茂江门新会项目投标文件-RET 睿意德》邮件截图。</p>
                <p>证据18：《世茂江门新会项目合同初稿-RET 睿意德》邮件截图以及附件（20211012）。</p>
                <p>证据19：《世茂江门新会项目合同终稿-RET 睿意德》邮件截图（20211013）以及附件。</p>
              </div>

              <p class="tw-mt-4 tw-indent-8">被申请人对上述证据的真实性、合法性、关联性及证明目的均提出异议，具体理由略。</p>
              <p class="tw-indent-8">被申请人没有提供证据。</p>
            </div>

            <!-- 三、事实认定 -->
            <div class="tw-mb-8">
              <h3 class="tw-text-lg tw-font-bold tw-mb-4 tw-text-center">三、事实认定</h3>

              <p class="tw-mb-4 tw-indent-8">本案经开庭审理，根据当事人的陈述、举证、质证、辩论以及庭审调查情况，仲裁庭查明：</p>

              <div class="tw-text-base tw-leading-relaxed">
                <h4 class="tw-font-semibold tw-mb-2">（一）合同签订情况</h4>
                <p class="tw-mb-4 tw-indent-8">
                  2021年10月13日，申请人（乙方）与被申请人（甲方）签订了《服务合同》。合同约定，申请人接受并为被申请人提供世茂新会枢纽新城商业项目策略顾问服务之相关事宜。合同主要条款包括项目位置、面积、服务期限、服务范围、服务进度、服务团队、成果报告、服务费用及支付方式、合同生效条件等。
                </p>
                <p class="tw-mb-4 tw-indent-8">
                  《服务合同》落款处有被申请人（甲方）加盖公章，申请人（乙方）加盖公章及王玉珂的个人印鉴。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（二）合同履行情况</h4>
                <p class="tw-mb-4 tw-indent-8">
                  2021年10月19日，申请人以被申请人为购买方开具三张发票，金额合计27万元。
                </p>
                <p class="tw-mb-4 tw-indent-8">
                  2021年10月22日至2021年11月19日，申请人多次在"世茂江门项目工作群（9）"上传项目周报并提醒相关人员查收。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（三）邮件往来情况</h4>
                <p class="tw-mb-6 tw-indent-8">
                  2021年10月11日至2021年11月15日，申请人与世茂相关人员多次邮件沟通项目相关事宜，内容涉及项目资料、投标、合同初稿、终稿、市场研究报告等。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">另查明：</h4>
                <p class="tw-mb-2 tw-indent-8">
                  1. 2022年8月12日，申请人就本案纠纷与广东信达（北京）律师事务所签订《委托代理合同》，并于2022年10月13日支付律师费2万元。
                </p>
                <p class="tw-mb-6 tw-indent-8">
                  2. 本会于2022年12月9日向被申请人送达仲裁申请书副本及证据。
                </p>
              </div>
            </div>

            <!-- 四、仲裁庭意见 -->
            <div class="tw-mb-8">
              <h3 class="tw-text-lg tw-font-bold tw-mb-4 tw-text-center">四、仲裁庭意见</h3>

              <div class="tw-text-base tw-leading-relaxed">
                <h4 class="tw-font-semibold tw-mb-2">（一）关于《服务合同》的效力</h4>
                <p class="tw-mb-4 tw-indent-8">
                  仲裁庭认为，《服务合同》虽未由双方法定代表人签字，但被申请人加盖了公章且确认合同真实性，结合申请人履行主要义务、被申请人未提出异议等事实，依据《中华人民共和国民法典》第四百九十条第二款，认定合同成立并生效。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（二）关于申请人要求被申请人支付策略顾问服务费45万元的仲裁请求</h4>
                <p class="tw-mb-4 tw-indent-8">
                  仲裁庭认定第一笔服务费27万元的付款条件已成就，被申请人应支付。第二笔服务费18万元，因申请人未能充分证明已满足付款条件，仲裁庭不予支持。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（三）关于申请人要求被申请人支付逾期付款滞纳金的仲裁请求</h4>
                <p class="tw-mb-4 tw-indent-8">
                  仲裁庭认定被申请人应自2022年12月21日起，按每日0.1‰的标准支付逾期滞纳金。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（四）关于申请人要求被申请人补偿律师费、财产保全费、财产保全保险费的仲裁请求</h4>
                <p class="tw-mb-4 tw-indent-8">
                  仲裁庭认定上述费用应由被申请人补偿60%，即律师费12000元、保全费1751.97元、保全保险费1200元。
                </p>

                <h4 class="tw-font-semibold tw-mb-2">（五）关于本案仲裁费的承担</h4>
                <p class="tw-mb-6 tw-indent-8">
                  仲裁费合计17355元，由申请人承担40%（6942元），被申请人承担60%（10413元）。
                </p>
              </div>
            </div>

            <!-- 五、裁决 -->
            <div class="tw-mb-8">
              <h3 class="tw-text-lg tw-font-bold tw-mb-4 tw-text-center">五、裁决</h3>

              <p class="tw-mb-4 tw-indent-8">
                综上所述，根据《中华人民共和国民法典》第一百五十八条、第四百八十三条、第五百零二条的规定，仲裁庭裁决如下：
              </p>

              <div class="tw-ml-8 tw-text-base tw-leading-relaxed tw-space-y-2">
                <p>（一）被申请人向申请人支付策略顾问服务费27万元；</p>
                <p>（二）被申请人向申请人支付逾期付款滞纳金（以27万元为基数，按照每日0.1‰的标准，自2022年12月21日起计算至实际付清之日止）；</p>
                <p>（三）被申请人向申请人补偿律师费12000元、保全费1751.97元、保全保险费1200元；</p>
                <p>（四）本案受理费13350元、处理费4005元，仲裁费合计17355元，由申请人承担6942元，由被申请人承担10413元（该费用应由被申请人承担的部分已由申请人预缴，本会不作退回，由被申请人迳付申请人）。</p>
              </div>

              <p class="mt-6 tw-indent-8">
                上述裁决被申请人应支付给申请人的款项，自本裁决书送达之日起十日内付清。逾期支付的，按照《中华人民共和国民事诉讼法》第二百六十条的规定处理。
              </p>

              <p class="tw-mt-4 tw-indent-8">
                本裁决为终局裁决，自作出之日起发生法律效力。
              </p>
            </div>

            <!-- 签名部分 -->
            <div class="mt-16 tw-text-base">
              <div class="tw-flex tw-justify-end tw-mr-20">
                <div class="tw-text-center">
                  <p class="tw-mb-8">仲裁员：何荣新</p>
                  <p class="tw-mb-4">二〇二三年七月二十八日</p>
                  <p>秘书：付希敏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧编辑面板 -->
    <div
        v-if="showEditPanel"
        class="edit-panel"
        :class="{ 'edit-panel-visible': showEditPanel }"
    >
      <!-- 面板头部 -->
      <div class="edit-panel-header">
        <div class="panel-tabs">
          <div
              class="panel-tab"
              :class="{ active: activeTab === 'field' }"
              @click="activeTab = 'field'"
          >
            <FieldBinaryOutlined class="tw-w-4 tw-h-4" />
            <span>字段校对</span>
          </div>
          <div
              class="panel-tab"
              :class="{ active: activeTab === 'export' }"
              @click="activeTab = 'export'"
          >
            <ExportOutlined class="tw-w-4 tw-h-4" />
            <span>导出报告</span>
          </div>
        </div>
        <a-button @click="toggleEditPanel" type="text" size="small">
          <CloseOutlined class="tw-w-4 tw-h-4" />
        </a-button>
      </div>

      <!-- 字段校对面板 -->
      <div v-if="activeTab === 'field'" class="edit-panel-content">
        <!-- 进度统计 -->
        <div class="progress-stats">
          <div class="stat-item">
            <div class="stat-number">{{ totalErrors }}</div>
            <div class="stat-label">校对错误数</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ fixedErrors }}</div>
            <div class="stat-label">修正完成</div>
          </div>
        </div>

        <!-- 全部操作 -->
        <div class="panel-section">
          <div class="section-header">
            <h4>全部操作</h4>
            <a-button type="link" size="small" @click="clearAllErrors">
              <ArrowUturnLeftIcon class="tw-w-4 tw-h-4 tw-mr-1" />
              一键撤销
            </a-button>
          </div>
        </div>

        <!-- 字段列表 -->
        <div class="panel-section">
          <div class="section-header">
            <h4>字段修正</h4>
          </div>
          <div class="error-list">
            <div
                v-for="(error, index) in errorTexts"
                :key="index"
                class="error-item"
                :class="{ 'error-fixed': error.fixed }"
                @click="scrollToError(error.id)"
            >
              <div class="error-item-header">
            <span class="error-type-badge" :class="getErrorTypeBadgeClass(error.type)">
              {{ getErrorTypeName(error.type) }}
            </span>
                <span v-if="error.fixed" class="fixed-badge">已修复</span>
              </div>
              <div class="error-item-content">
                <div class="original-text-preview">
                  原文：<span class="text-red-600">{{ error.original }}</span>
                </div>
                <div v-if="error.fixed" class="corrected-text-preview">
                  修改为：<span class="text-green-600">{{ error.corrected }}</span>
                </div>
                <div v-else class="suggestion-text-preview">
                  建议：<span class="tw-text-blue-600">{{ error.suggestion }}</span>
                </div>
              </div>
              <div class="error-item-actions">
                <a-button
                    v-if="!error.fixed"
                    size="small"
                    type="primary"
                    @click.stop="quickFix(error)"
                >
                  快速修复
                </a-button>
                <a-button
                    v-if="error.fixed"
                    size="small"
                    @click.stop="undoFix(error)"
                >
                  撤销修复
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 导出报告面板 -->
      <div v-if="activeTab === 'export'" class="edit-panel-content">
        <div class="panel-section">
          <div class="section-header">
            <h4>导出选项</h4>
          </div>

          <div class="export-options">
            <a-checkbox-group v-model:value="exportOptions" class="export-checkbox-group">
              <a-checkbox value="pdf">PDF格式</a-checkbox>
              <a-checkbox value="word">Word格式</a-checkbox>
              <a-checkbox value="html">HTML格式</a-checkbox>
            </a-checkbox-group>
          </div>

          <div class="export-actions">
            <a-button type="primary" @click="exportDocument" block>
              <ExportOutlined class="tw-w-4 tw-h-4 tw-mr-1" />
              导出报告
            </a-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 修改建议浮窗 -->
    <div
        v-if="showPopup"
        class="correction-popup"
        :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }"
        @click.stop
    >
      <div class="popup-content">
        <div class="popup-header">
          <h4 class="popup-title">
            <ExclamationCircleIcon class="tw-w-4 tw-h-4 tw-text-red-500" />
            发现错误
          </h4>
          <button @click="closePopup" class="close-btn">
            <XMarkIcon class="tw-w-4 tw-h-4" />
          </button>
        </div>

        <div class="popup-body">
          <div class="error-section">
            <label class="error-label">原文：</label>
            <span class="original-text">{{ currentError.original }}</span>
          </div>

          <div class="correction-section">
            <label class="correction-label">建议修改为：</label>
            <a-input
                v-model:value="currentError.suggestion"
                class="correction-input"
                @keyup.enter="confirmCorrection"
                @keyup.esc="closePopup"
                ref="correctionInput"
                size="small"
            />
          </div>

          <div class="error-reason">
            <label class="reason-label">错误原因：</label>
            <span class="reason-text">{{ getErrorReason(currentError.type) }}</span>
          </div>
        </div>

        <div class="popup-footer">
          <a-button size="small" @click="closePopup">取消</a-button>
          <a-button type="primary" size="small" @click="confirmCorrection">
            确认修改
          </a-button>
          <a-button size="small" @click="ignoreError">
            忽略此错误
          </a-button>
        </div>
      </div>
    </div>


    <!-- 全局遮罩 -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup"></div>
  </main>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { message } from 'ant-design-vue'
import {
  EditOutlined,
  CloseOutlined,
  FieldBinaryOutlined,
  ExportOutlined,
  FormOutlined,
} from '@ant-design/icons-vue'
import TimelineCard from './main/TimelineCard.vue'

// 基础状态
const checking = ref(false)
const isEditing = ref(false)
const showEditPanel = ref(false)
const showEdit = ref(false)
const activeTab = ref('field')
const selectedFieldId = ref(null)
const submitContent = ref('')
const contentContainer = ref(null)
const correctionInput = ref(null)

// 错误文本相关状态
const showPopup = ref(false)
const showErrorDrawer = ref(false)
const popupPosition = ref({ x: 0, y: 0 })
const currentError = ref({
  id: null,
  original: '',
  suggestion: '',
  type: 'typo',
  element: null
})

// 错误文本数据
const errorTexts = ref([
  {
    id: 0,
    original: '张磊',
    suggestion: '张蕾',
    type: 'typo',
    reason: '姓名拼写错误',
    fixed: false,
    corrected: ''
  },
  {
    id: 1,
    original: '江门市悦泰臵业有限公司',
    suggestion: '江门市悦泰置业有限公司',
    type: 'typo',
    reason: '公司名称中"臵"字应为"置"',
    fixed: false,
    corrected: ''
  },
  {
    id: 2,
    original: '书面答辞',
    suggestion: '书面答辩',
    type: 'typo',
    reason: '法律术语使用错误',
    fixed: false,
    corrected: ''
  },
  {
    id: 3,
    original: '张磊',
    suggestion: '张蕾',
    type: 'typo',
    reason: '姓名拼写错误',
    fixed: false,
    corrected: ''
  },
  {
    id: 4,
    original: '答辞',
    suggestion: '答辩',
    type: 'typo',
    reason: '法律术语错误',
    fixed: false,
    corrected: ''
  }
])

// 字段数据
const fieldList = ref([
  {
    id: 1,
    name: '服务',
    type: '服务',
    path: '服务 > 法律服务申请表单',
    icon: 'service'
  },
  {
    id: 2,
    name: '被申请人',
    type: '被申请人',
    path: '当事人信息 > 被申请人',
    icon: 'person'
  },
  {
    id: 3,
    name: '当事人',
    type: '当事人',
    path: '当事人信息 > 当事人',
    icon: 'person'
  },
  {
    id: 4,
    name: '版本要求',
    type: '版本要求',
    path: '文档版本 > 版本要求',
    icon: 'version'
  },
  {
    id: 5,
    name: '被申请人',
    type: '被申请人',
    path: '当事人信息 > 被申请人信息',
    icon: 'person'
  },
  {
    id: 6,
    name: '修正代价',
    type: '修正代价',
    path: '成本计算 > 修正代价',
    icon: 'cost'
  }
])

// 导出选项
const exportOptions = ref(['pdf'])

// 格式设置
const formatSettings = ref({
  fontSize: 14,
  lineHeight: 1.5,
  margin: 20
})

// 计算属性
const totalErrors = computed(() => errorTexts.value.length)
const fixedErrors = computed(() => errorTexts.value.filter(e => e.fixed).length)
const unfixedErrorsCount = computed(() => errorTexts.value.filter(e => !e.fixed).length)

// 方法
const toggleEditPanel = () => {
  showEditPanel.value = !showEditPanel.value
}
const toggleEdit = () => {
  showEdit.value = !showEdit.value
  message.success(`进行编辑`)
}

const showProofreadingPanel = async () => {
  checking.value = true
  try {
    // 模拟智能校对
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 高亮错误文本
    highlightErrors()

    // 显示编辑面板
    showEditPanel.value = true

    message.success(`智能校对完成，发现 ${errorTexts.value.length} 处错误`)
  } catch (error) {
    message.error('校对失败，请重试')
  } finally {
    checking.value = false
  }
}

const highlightErrors = () => {
  // 为所有错误文本添加高亮样式
  errorTexts.value.forEach(error => {
    const elements = document.querySelectorAll(`[data-error-id="${error.id}"]`)
    elements.forEach(element => {
      if (!error.fixed) {
        element.classList.add('error-highlighted')
      }
    })
  })
}

const showCorrectionPopup = (event, original, suggestion, errorId) => {
  const error = errorTexts.value.find(e => e.id === errorId)
  if (!error || error.fixed) return

  currentError.value = {
    id: errorId,
    original: original,
    suggestion: suggestion,
    type: error.type,
    element: event.target
  }

  // 计算浮窗位置
  const rect = event.target.getBoundingClientRect()
  const containerRect = contentContainer.value.getBoundingClientRect()

  popupPosition.value = {
    x: rect.left - containerRect.left,
    y: rect.bottom - containerRect.top + 10
  }

  showPopup.value = true

  // 聚焦输入框
  nextTick(() => {
    if (correctionInput.value) {
      correctionInput.value.focus()
    }
  })
}

const closePopup = () => {
  showPopup.value = false
  currentError.value = {
    id: null,
    original: '',
    suggestion: '',
    type: 'typo',
    element: null
  }
}

const confirmCorrection = () => {
  if (!currentError.value.element) return

  const errorId = currentError.value.id
  const error = errorTexts.value.find(e => e.id === errorId)

  if (error) {
    // 更新文本内容
    currentError.value.element.textContent = currentError.value.suggestion

    // 移除错误样式
    currentError.value.element.classList.remove('error-text', 'error-highlighted')
    currentError.value.element.classList.add('corrected-text')

    // 更新错误状态
    error.fixed = true
    error.corrected = currentError.value.suggestion

    // 移除点击事件
    currentError.value.element.removeAttribute('data-error-id')
    currentError.value.element.onclick = null

    message.success('修改已应用')
  }

  closePopup()
}

const ignoreError = () => {
  const errorId = currentError.value.id
  const error = errorTexts.value.find(e => e.id === errorId)

  if (error) {
    // 移除错误样式但不修改文本
    currentError.value.element.classList.remove('error-text', 'error-highlighted')
    currentError.value.element.classList.add('ignored-error')

    // 标记为已处理
    error.fixed = true
    error.corrected = error.original // 保持原文

    message.info('已忽略此错误')
  }

  closePopup()
}

const showErrorList = () => {
  showErrorDrawer.value = true
}

const scrollToError = (errorId) => {
  const element = document.querySelector(`[data-error-id="${errorId}"]`)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    // 临时高亮
    element.classList.add('temp-highlight')
    setTimeout(() => {
      element.classList.remove('temp-highlight')
    }, 2000)
  }
}

const quickFix = (error) => {
  const elements = document.querySelectorAll(`[data-error-id="${error.id}"]`)
  elements.forEach(element => {
    element.textContent = error.suggestion
    element.classList.remove('error-text', 'error-highlighted')
    element.classList.add('corrected-text')
    element.removeAttribute('data-error-id')
    element.onclick = null
  })

  error.fixed = true
  error.corrected = error.suggestion

  message.success('快速修复完成')
}

const undoFix = (error) => {
  const elements = document.querySelectorAll('.corrected-text, .ignored-error')
  elements.forEach(element => {
    if (element.textContent === error.corrected || element.textContent === error.original) {
      element.textContent = error.original
      element.classList.remove('corrected-text', 'ignored-error')
      element.classList.add('error-text', 'error-highlighted')
      element.setAttribute('data-error-id', error.id)

      // 重新绑定点击事件
      element.onclick = (event) => {
        showCorrectionPopup(event, error.original, error.suggestion, error.id)
      }
    }
  })

  error.fixed = false
  error.corrected = ''

  message.success('已撤销修复')
}

const getErrorReason = (type) => {
  const reasons = {
    'typo': '拼写错误',
    'grammar': '语法错误',
    'format': '格式错误',
    'punctuation': '标点符号错误'
  }
  return reasons[type] || '其他错误'
}

const getErrorTypeName = (type) => {
  const names = {
    'typo': '拼写',
    'grammar': '语法',
    'format': '格式',
    'punctuation': '标点'
  }
  return names[type] || '其他'
}

const getErrorTypeBadgeClass = (type) => {
  const classes = {
    'typo': 'error-type-typo',
    'grammar': 'error-type-grammar',
    'format': 'error-type-format',
    'punctuation': 'error-type-punctuation'
  }
  return classes[type] || 'error-type-other'
}

const selectField = (field) => {
  selectedFieldId.value = field.id
}

const editField = (field) => {
  message.info(`正在校验字段: ${field.name}`)
}

const clearAllErrors = () => {
  errorTexts.value.forEach(error => {
    if (error.fixed) {
      undoFix(error)
    }
  })
  message.success('已撤销所有修正')
}

const exportDocument = () => {
  message.success(`正在导出为 ${exportOptions.value.join(', ')} 格式`)
}

const startEdit = () => {
  isEditing.value = true
}

const saveContent = () => {
  isEditing.value = false
  message.success('内容已保存')
}

// 键盘事件处理
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showPopup.value) {
    closePopup()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.tw-indent-8 {
  text-indent: 2rem;
}

.page-break-before {
  page-break-before: always;
}

/* 错误文本样式 */
.error-text {
  background-color: #fee2e2;
  border-bottom: 2px solid #ef4444;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.error-text:hover {
  background-color: #fecaca;
  border-bottom-color: #dc2626;
}

.error-highlighted {
  animation: highlight-pulse 2s infinite;
}

@keyframes highlight-pulse {
  0%, 100% { background-color: #fee2e2; }
  50% { background-color: #fecaca; }
}

.corrected-text {
  background-color: #dcfce7;
  border-bottom: 2px solid #22c55e;
  transition: all 0.3s ease;
}

.ignored-error {
  background-color: #f3f4f6;
  border-bottom: 1px solid #9ca3af;
  opacity: 0.7;
}

.temp-highlight {
  background-color: #ddd6fe !important;
  border: 2px solid #8b5cf6 !important;
  border-radius: 4px;
  animation: temp-highlight-fade 2s ease-out;
}

@keyframes temp-highlight-fade {
  0% {
    background-color: #c4b5fd;
    border-color: #7c3aed;
  }
  100% {
    background-color: #ddd6fe;
    border-color: #8b5cf6;
  }
}

/* 修改建议浮窗样式 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.correction-popup {
  position: absolute;
  z-index: 1000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  min-width: 320px;
  max-width: 400px;
  animation: popup-appear 0.2s ease-out;
}

@keyframes popup-appear {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.popup-content {
  padding: 16px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e7eb;
}

.popup-title {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  color: #6b7280;
  transition: all 0.2s;
}

.close-btn:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.popup-body {
  margin-bottom: 16px;
}

.error-section, .correction-section, .error-reason {
  margin-bottom: 12px;
}

.error-label, .correction-label, .reason-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 4px;
}

.original-text {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 13px;
}

.correction-input {
  width: 100%;
}

.reason-text {
  font-size: 12px;
  color: #6b7280;
  font-style: italic;
}

.popup-footer {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
}

/* 错误列表样式 */
.error-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.error-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.error-item:hover {
  border-color: #d1d5db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.error-item.error-fixed {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
}

.error-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.error-type-badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.error-type-typo {
  background-color: #fef2f2;
  color: #dc2626;
}

.error-type-grammar {
  background-color: #fef3c7;
  color: #d97706;
}

.error-type-format {
  background-color: #ede9fe;
  color: #7c3aed;
}

.error-type-punctuation {
  background-color: #ecfdf5;
  color: #059669;
}

.fixed-badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  background-color: #dcfce7;
  color: #166534;
  font-weight: 500;
}

.error-item-content {
  margin-bottom: 8px;
}

.original-text-preview, .corrected-text-preview, .suggestion-text-preview {
  font-size: 12px;
  margin-bottom: 4px;
}

.error-item-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* 右侧编辑面板样式 */
.edit-panel {
  width: 320px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.edit-panel-visible {
  transform: translateX(0);
}

.edit-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e8e8e8;
  background: #fafafa;
}

.panel-tabs {
  display: flex;
  gap: 8px;
}

.panel-tab {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  color: #666;
  transition: all 0.2s;
}

.panel-tab:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.panel-tab.active {
  background: #1890ff;
  color: white;
}

.edit-panel-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

/* 进度统计样式 */
.progress-stats {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
}

.stat-label {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

/* 面板区块样式 */
.panel-section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-header h4 {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* 字段列表样式 */
.field-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.field-item:hover {
  border-color: #1890ff;
  background: #f0f6ff;
}

.field-item.field-selected {
  border-color: #1890ff;
  background: #e6f7ff;
}

.field-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.field-content {
  flex: 1;
  min-width: 0;
}

.field-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.field-type {
  font-size: 11px;
  color: #666;
  margin-bottom: 2px;
}

.field-path {
  font-size: 10px;
  color: #999;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.field-actions {
  flex-shrink: 0;
}

/* 导出选项样式 */
.export-options {
  margin-bottom: 16px;
}

.export-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.export-actions {
  margin-top: 16px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .edit-panel {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .edit-panel {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    max-width: 400px;
    z-index: 1000;
  }
}
</style>
