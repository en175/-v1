<template>

  <a-modal
    v-model:open="modalStore.petitionModalVisible"
    title="仲裁申请书智能分析"
    width="600px"
    :footer="null"
    class="petition-modal"
  >
    <div>
      <div class="tw-bg-white tw-rounded-xl tw-shadow tw-border tw-border-gray-100 tw-p-5 tw-text-gray-700 tw-text-sm">
        <p>
          申请人与被申请人签订服务合同后，已按约履行全部合同义务并提交成果报告，但被申请人未按约支付服务费及相关费用。申请人多次催款无果，遂依据合同约定及仲裁条款，申请仲裁，要求被申请人支付服务费、滞纳金、律师费等共计47.99万元，并承担全部仲裁及保全费用。案件争议焦点为合同履行及付款义务，申请人证据链完整，仲裁请求明确合理。
        </p>
      </div>

      <!-- 仲裁申请书文件（多条，可预览） -->
      <div class="tw-mb-4 tw-space-y-2 tw-mt-4">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-text-sm tw-font-bold tw-text-gray-800">仲裁申请书文件</div>
          <div class="tw-text-xs tw-text-gray-500">{{ petitionFiles.length }} 个文件</div>
        </div>

        <div v-if="petitionFiles.length" class="tw-space-y-2">
          <div
            v-for="file in petitionFiles"
            :key="file.id"
            class="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-bg-gray-50 tw-border tw-border-gray-100 tw-rounded tw-px-3 tw-py-2"
          >
            <div class="tw-min-w-0">
              <div class="tw-text-sm tw-text-gray-800 tw-truncate">{{ file.filename }}</div>
              <div class="tw-text-xs tw-text-gray-500">
                {{ file.filetype }} · {{ file.size }} · {{ file.source }}
              </div>
            </div>

            <div class="tw-flex tw-items-center tw-gap-2 tw-flex-shrink-0">
              <a-button size="small" type="link" :href="file.previewUrl" target="_blank">预览</a-button>
            </div>
          </div>
        </div>

        <div v-else class="tw-text-xs tw-text-gray-500 tw-bg-gray-50 tw-border tw-border-gray-100 tw-rounded tw-p-3">
          暂无可预览的仲裁申请书文件
        </div>
      </div>

      <!-- 查看原文按钮 -->
      <div class="tw-flex tw-items-center tw-mt-2">
        <a-button
          @click="togglePetitionRaw"
          class="tw-bg-gray-50 tw-text-gray-700 tw-border tw-border-gray-200"
        >
          {{ showPetitionRaw ? '收起原文' : '查看原文' }}
        </a-button>
      </div>

      <!-- 原文：点击后再展示 -->
      <a-collapse-transition>
        <div
          v-show="showPetitionRaw"
          class="tw-mt-4 tw-bg-gray-50 tw-rounded tw-p-4 tw-text-sm tw-leading-relaxed tw-max-h-60 tw-overflow-y-auto"
        >
          <p><strong>仲裁申请书</strong></p>
          <p><strong>申请人：</strong>北京睿意德商业股份有限公司深圳分公司</p>
          <p><strong>被申请人：</strong>江门市悦泰臵业有限公司</p>
          <p>
            <strong>仲裁依据：</strong><br>
            与被申请人于2021年10月13日签订的《世新会枢纽新城商业项目策略顾问服务合同》（以下简称"《合同》")第十六条。
          </p>
          <p>
            <strong>仲裁请求：</strong><br>
            1. 被申请人向申请人支付策略顾问服务费450,000元（人民币，下同）；<br>
            2. 被申请人向申请人支付逾期付款滞纳金9,990元（计算公式：450,000×0.1%×自2022年2月18日起截止至2022年9月28日的天数【222天】，滞纳金暂计至2022年9月28日为9,990元）；<br>
            3. 被申请人向申请人支付律师费20,000元；<br>
            上述三项合计金额为479,990元。<br>
            4. 裁决被申请人承担全部仲裁费用，财产保全费及财产保全保险费等费用。
          </p>
          <p>
            <strong>事实和理由：</strong><br>
            2021年10月13日，申请人（乙方）与被申请人（甲方）签订了《合同》，约定被申请人委托申请人为世茂新会枢纽新城商业项目（以下简称"该项目"）提供策略顾问服务。<br>
            《合同》签订且生效后，申请人按照《合同》约定，始终认真积极履行合同义务，申请人于2021年12月7日提交了《RET 睿意德——江门世茂明德项目》（以下简称"《第一阶段服务报告最终版》"）并向被申请人进行服务成果汇报。<br>
            根据《合同》第九条第2款之约定，被申请人应于《合同》生效后且在收到申请人开具应付款等额发票后的7个工作日内，向申请人支付第一笔服务费27万元；被申请人应于申请人提交第一阶段服务报告且收到申请人开具应付款等额发票后的7个工作日内，向申请人支付第二笔服务费18万元。然而被申请人并未支付前述款项。<br>
            鉴于此，申请人分别于2022年2月18日和2022年4月向被申请人发送《服务沟通函》和《律师函》，要求被申请人尽快支付拖欠费用，但被申请人始终未予支付。根据《合同》第九条第4款之约定，对于延期付款的，申请人以书面形式通知被申请人支付相应款项，在申请人发出催款通知后合理期限内被申请人仍未支付的，申请人将向被申请人每天收取相当于逾期价款万分之一的滞纳金。<br>
            为此，申请人特向贵委申请仲裁，请求依法裁决如仲裁请求。
          </p>
          <p class="tw-mt-2 tw-text-right">
            此致<br>
            广州仲裁委员会<br>
            申请人：北京睿意德商业股份有限公司深圳分公司
          </p>
        </div>
      </a-collapse-transition>
    </div>
  </a-modal>

  <!-- 答辩书弹窗：多条答辩（答辩人 + 内容 + 多个文件可预览） -->
  <a-modal
    v-model:open="modalStore.defenseModalVisible"
    title="答辩书"
    width="720px"
    :footer="null"
    class="defense-modal"
  >
    <div class="tw-space-y-4">
      <a-card
        v-for="(d, idx) in defenseList"
        :key="d.id"
        size="small"
        class="tw-shadow tw-border tw-border-gray-100"
      >
        <template #title>
          <div class="tw-flex tw-items-center tw-justify-between tw-gap-3">
            <div class="tw-min-w-0">
              <div class="tw-font-bold tw-text-base tw-truncate">
                {{ idx + 1 }}. 答辩人：{{ d.respondent }}
              </div>
              <div class="tw-text-xs tw-text-gray-500">
                {{ d.submittedAt ? `提交时间：${d.submittedAt}` : '提交时间：—' }}
              </div>
            </div>
            <span class="tw-text-xs tw-text-gray-500 tw-flex-shrink-0">
              {{ d.files.length }} 个附件
            </span>
          </div>
        </template>

        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          {{ d.content }}
        </div>

        <div class="tw-mt-3 tw-space-y-2">
          <div class="tw-text-xs tw-text-gray-500">答辩文件：</div>

          <div v-if="d.files.length" class="tw-space-y-2">
            <div
              v-for="f in d.files"
              :key="f.id"
              class="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-bg-gray-50 tw-border tw-border-gray-100 tw-rounded tw-px-3 tw-py-2"
            >
              <div class="tw-min-w-0">
                <div class="tw-text-sm tw-text-gray-800 tw-truncate">{{ f.filename }}</div>
                <div class="tw-text-xs tw-text-gray-500">
                  {{ f.filetype }} · {{ f.size }} · {{ f.source }}
                </div>
              </div>

              <div class="tw-flex tw-items-center tw-gap-2 tw-flex-shrink-0">
                <a-button size="small" type="link" :href="f.previewUrl" target="_blank">预览</a-button>
              </div>
            </div>
          </div>

          <div v-else class="tw-text-xs tw-text-gray-500 tw-bg-gray-50 tw-border tw-border-gray-100 tw-rounded tw-p-3">
            暂无可预览的答辩文件
          </div>
        </div>
      </a-card>
    </div>
  </a-modal>

  <!-- 核心诉求弹窗 -->
  <a-modal
    v-model:open="modalStore.claimModalVisible"
    title="核心诉求"
    width="600px"
    :footer="null"
    class="claim-modal"
  >
    <div class="tw-bg-white tw-rounded-xl tw-shadow tw-border tw-border-gray-100 tw-p-4 tw-text-gray-700 tw-text-base tw-leading-relaxed tw-max-h-[60vh] tw-overflow-y-auto">
      <ul class="tw-space-y-4 tw-break-words">
        <li class="tw-flex tw-items-start tw-text-base tw-leading-7">
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            <a-badge status="processing" />
          </span>
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            要求被申请人支付策略顾问费 <span class="tw-font-bold">450,000元</span>
          </span>
        </li>
        <li class="tw-flex tw-items-start tw-text-base tw-leading-7">
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            <a-badge status="processing" />
          </span>
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            要求被申请人支付逾期付款滞纳金 <span class="tw-font-bold">99,990元</span><br>
          </span>
        </li>
        <li class="tw-flex tw-items-start tw-text-base tw-leading-7">
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            <a-badge status="processing" />
          </span>
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            要求被申请人支付律师费 <span class="tw-font-bold">20,000元</span>
          </span>
        </li>
        <li class="tw-flex tw-items-start tw-text-base tw-leading-7">
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            <a-badge status="processing" />
          </span>
          <span class="tw-mt-1.5 tw-mr-3 tw-flex-shrink-0">
            要求被申请人承担全部仲裁费用、财产保全费及财产保险费<br>
          </span>
        </li>
      </ul>
    </div>
  </a-modal>

  <!-- 无争议事实认定弹窗 -->
  <a-modal
    v-model:open="modalStore.factModalVisible"
    title="无争议事实认定"
    width="600px"
    :footer="null"
    class="fact-modal"
  >
    <div class="tw-space-y-4 tw-max-h-[70vh] tw-overflow-y-auto">
      <a-card
        size="small"
        v-for="(fact, index) in factList"
        :key="index"
        class="tw-shadow tw-border tw-border-gray-100"
        style="margin-top: 12px"
      >
        <template #title>
          <span class="tw-font-bold">{{ fact.title }}</span>
        </template>
        <div>{{ fact.content }}</div>
        <div v-if="fact.quote" class="tw-text-sm tw-text-gray-500 tw-mt-1">
          原话："{{ fact.quote }}"
        </div>
      </a-card>
    </div>
  </a-modal>

  <!-- 核心争议焦点分析弹窗 -->
  <a-modal
    v-model:open="modalStore.focusModalVisible"
    title="核心争议焦点分析"
    width="900px"
    :footer="null"
    class="focus-modal"
  >
    <template #title>
      <div class="tw-flex tw-items-center">
        <ExclamationCircleIcon class="tw-w-6 tw-h-6 tw-text-blue-600 tw-mr-2" />
        <span class="tw-font-bold tw-text-lg">核心争议焦点分析</span>
      </div>
    </template>

    <!-- 内容区内置滚动，完整展示所有争议点 -->
    <div class="tw-space-y-8 tw-max-h-[70vh] tw-overflow-y-auto">
      <!-- 争议点1 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100">
        <template #title>
          <span class="tw-font-semibold tw-text-base">1. 涉案合同是否生效？</span>
        </template>
        <div class="tw-flex tw-gap-6 tw-items-start tw-flex-wrap">
          <!-- 申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UsersIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-blue-700">申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>合同已生效，因盖章即生效，且双方已部分履行。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>证据一组（案涉合同）：证明合同条款约定及盖章事实（被申请人认可印章真实）。关联：反驳"未生效"论点，主张盖章满足生效要件。</li>
                  <li>证据二组（工作成果汇报）：证明履行行为（如10月28日汇报）。关联：实际履行行为可补正形式缺陷。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"盖章一定是生效的，既然缺少签字这样一个要件，还是生效的...事实上双方在签订合同以后，军队合同就是被申请人在签订合同以后，申请人即积极履行合同的相关义务，被申请人是接受的。"
              </div>
            </div>
          </div>

          <!-- 分隔图标 -->
          <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-2">
            <ArrowLeftRightIcon class="tw-w-5 tw-h-5 tw-text-gray-400" />
          </div>

          <!-- 被申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UserIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-red-700">被申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>合同未生效，因未满足第18条形式要求（双方法定代表人签字+盖章），且未实际履行。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>涉案合同文本：证明第18条生效条件（"本合同自双方法定代表签字并加盖公章之日起生效"）。关联：落款无签字，形式缺失。</li>
                  <li>无补充证据：但依赖合同本身反驳申请人履行证据（如否认收到证据二组的汇报）。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"案涉合同生效的两个前提条件是双方法定代表人签字，并且加盖公章，两者缺一不可。但是从案涉合同的落款可见，并没有甲方...的签字...故案涉合同实际上并未生效。"
              </div>
            </div>
          </div>
        </div>
        <a-alert
          message="证据对抗小结：核心对抗围绕合同形式缺陷（被申请人强调签字缺失） vs. 实际履行行为（申请人主张履行补正）。被申请人承认印章真实但否认生效，构成关键'自认'事实（合同形式不完整），申请人则试图以履行证据反驳。"
          type="info"
          show-icon
          class="tw-mt-4"
        />
      </a-card>

      <!-- 争议点2 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100">
        <template #title>
          <span class="tw-font-semibold tw-text-base">2. 涉案合同是否实际履行？</span>
        </template>
        <div class="tw-flex tw-gap-6 tw-items-start tw-flex-wrap">
          <!-- 申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UsersIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-blue-700">申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>合同已实际履行，申请人提交了所有工作成果（包括周报、汇报及最终报告）。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>证据二组（工作成果汇报）：含10月28日初步汇报、12月7日最终报告及会议纪要。关联：证明成果提交和被申请人接受（申请人称会议纪要载明被申请人认可）。</li>
                  <li>补充证据（庭后提交）：微信群记录、周报PDF文件、录音（拟证明周报提交及现场汇报）。关联：直接对抗被申请人"未履行"主张。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"在项目启动会后...每周都会通过微信提交周报...2011年12月7日进行了最终汇报，被申请人领导在会议纪要中表示认可付款。"
              </div>
            </div>
          </div>

          <!-- 分隔图标 -->
          <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-2">
            <ArrowLeftRightIcon class="tw-w-5 tw-h-5 tw-text-gray-400" />
          </div>

          <!-- 被申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UserIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-red-700">被申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>合同未实际履行，未收到任何成果、发票或汇报。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>质证意见（对证据二、三、四组）：全盘否认三性（真实性、合法性、关联性）。关联：如对证据二组，"没有收到服务报告，且无被申请人书面确认"。</li>
                  <li>项目停工信息：提及项目2018年开工、2020年停工。关联：暗示服务非必要（但未直接证明未履行）。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"被申请人从未收到申请人所提供的服务报告...申请人并未向被申请人进行成果汇报...所有的这些报告和发票我们都没有收到。"
              </div>
            </div>
          </div>
        </div>
        <a-alert
          message="证据对抗小结：直接对抗集中在成果提交方式（申请人：微信群+邮件；被申请人：否认微信群存在及收到文件）。申请人提供证据链条（汇报、周报），但被申请人全盘否认，形成关键矛盾。无'自认'履行事实。"
          type="info"
          show-icon
          class="tw-mt-4"
        />
      </a-card>

      <!-- 争议点3 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100">
        <template #title>
          <span class="tw-font-semibold tw-text-base">3. 支付全部款项（45万元）及滞纳金（99,990元）的事实依据及法律依据是否充分？</span>
        </template>
        <div class="tw-flex tw-gap-6 tw-items-start tw-flex-wrap">
          <!-- 申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UsersIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-blue-700">申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>支付条件已满足（提交报告且被申请人认可），滞纳金应从服务沟通函发出日起算。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>合同第九条第二款：约定"提交顾问报告并开具发票后付款"。关联：证明支付条件。</li>
                  <li>证据二组（12月7日会议纪要）：证明被申请人承诺付款（"会在2011年12月15日前完成"）。关联：说明履行完毕并获认可。</li>
                  <li>服务沟通函：作为滞纳金起算点证据（需庭后补充）。关联：支持变更请求。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"根据合同第九条第二款...乙方提交项目商业策划顾问报告，且甲方收到发票...我方申请人合同项下的义务权已经全部履行完毕...滞纳金以服务沟通函发出的日期作为起算点。"
              </div>
            </div>
          </div>

          <!-- 分隔图标 -->
          <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-2">
            <ArrowLeftRightIcon class="tw-w-5 tw-h-5 tw-text-gray-400" />
          </div>

          <!-- 被申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UserIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-red-700">被申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>支付条件未成就（合同未生效+未提交报告+未开票），滞纳金无依据。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>合同第九条及第十二条：强调需"合同生效+提交报告+开票+书面确认"。关联：证明多重条件未满足（如第二期发票未开）。</li>
                  <li>质证意见（对证据三组发票）：否认收到发票。关联：推翻支付前提。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"支付第一笔服务费用的两个前提条件是合同生效及开具发票两者缺一不可...案涉合同并未生效...更无需支付滞纳金。"
              </div>
            </div>
          </div>
        </div>
        <a-alert
          message="证据对抗小结：对抗焦点在支付条件是否满足：申请人依赖履行证据（报告提交+会议纪要），被申请人坚持形式条件（生效+发票）。关键'自认'：申请人承认第二期发票未开具（原话：'第二期的发票确实没有开具'），削弱了其支付主张。"
          type="info"
          show-icon
          class="tw-mt-4"
        />
      </a-card>

      <!-- 争议点4 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100">
        <template #title>
          <span class="tw-font-semibold tw-text-base">4. 支付律师费、保全费、保险费等是否具有法律依据？</span>
        </template>
        <div class="tw-flex tw-gap-6 tw-items-start tw-flex-wrap">
          <!-- 申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UsersIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-blue-700">申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>应支持，因合同第16条约定"因仲裁发生的所有费用由败诉方承担"，且费用实际发生。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>合同第16条争议解决条款：约定仲裁费用承担。关联：主张涵盖律师费、保全费等。</li>
                  <li>证据五组（律师费发票）：证明律师费20,000元（被申请人质疑真实性和关联性）。</li>
                  <li>补充证据（财产保险费2,000元凭证）：需庭后提交。关联：证明费用发生。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"合同第16条约定...因仲裁所发生的一切费用均由败诉方承担...包括律师费、仲裁费、保全费等。"
              </div>
            </div>
          </div>

          <!-- 分隔图标 -->
          <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-2">
            <ArrowLeftRightIcon class="tw-w-5 tw-h-5 tw-text-gray-400" />
          </div>

          <!-- 被申请方 -->
          <div class="tw-flex-1 tw-min-w-[320px]">
            <div class="tw-flex tw-items-center tw-mb-2">
              <UserIcon class="tw-w-4 tw-h-4 tw-text-gray-500 tw-mr-1" />
              <span class="tw-font-bold tw-text-red-700">被申请方主张与论证</span>
            </div>
            <div>
              <div class="tw-mb-1"><span class="tw-font-semibold">观点：</span>无依据，因合同未约定，且费用未实际发生或非必要。</div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">证据支撑：</span>
                <ul class="tw-list-disc tw-list-inside tw-mt-1">
                  <li>答辩状及质证：否认证据五组关联性（"无法证明律师费实际产生"）。关联：反驳申请人证据链。</li>
                  <li>合同条款：指出无明确律师费约定。关联：挑战法律依据。</li>
                </ul>
              </div>
              <div class="tw-mb-1 tw-text-sm tw-text-gray-700">
                <span class="tw-font-semibold">关键庭审陈述：</span>"案涉合同并未约定律师费由答辩人承担...被答辩人也未能提供转账凭证，证明律师费已经实际发生...保证费和担保费不是必要费用。"
              </div>
            </div>
          </div>
        </div>
        <a-alert
          message="证据对抗小结：核心对抗在费用覆盖范围（合同约定是否包含）及真实性（申请人需补充凭证）。被申请人全盘否认证据五组，双方无'自认'费用相关事实。"
          type="info"
          show-icon
          class="tw-mt-4"
        />
      </a-card>
    </div>
  </a-modal>

  <!-- 潜在疑点与矛盾提示弹窗 -->
  <a-modal
    v-model:open="modalStore.doubtModalVisible"
    title="潜在疑点与矛盾提示"
    width="900px"
    :footer="null"
    class="doubt-modal"
  >
    <template #title>
      <div class="tw-flex tw-items-center">
        <QuestionMarkCircleIcon class="tw-w-6 tw-h-6 tw-text-blue-500 tw-mr-2" />
        <span class="tw-font-bold tw-text-lg">潜在疑点与矛盾提示</span>
      </div>
    </template>

    <div class="tw-space-y-8 tw-max-h-[70vh] tw-overflow-y-auto">
      <!-- 疑点1 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100" style="margin-top: 10px">
        <template #title>
          <span class="tw-font-bold tw-text-base">1. 微信群存在与成果交付矛盾</span>
        </template>
        <div class="tw-mb-2 tw-text-gray-800">
          申请人坚称通过微信群（被申请人指定联系人XXX的群）提交周报和成果（原话："每周都会通过微信提交周报"），并认为这是合同履行的核心证据。被申请人完全否认微信群存在和收到成果（原话："代理人不清楚微信群...没有收到任何周报或报告"）。
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-2">
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">申请人：</span>
            <span class="tw-italic">"每周都会通过微信交周报"</span>
          </div>
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">被申请人：</span>
            <span class="tw-italic">"代理人不清楚微信群...没有收到任何周报或报告"</span>
          </div>
        </div>
        <a-alert
          message="疑点：若微信群如申请人所述为合同指定联系方式，为何被申请人代理人'不清楚'？申请人未能提供群成员详细名单或实时记录佐证，被申请人未解释其指定联系人XXX的角色（原话：被申请人对XXX身份庭后核实，但未提交）。需进一步核实微信名对应人员身份及群交互内容。"
          type="warning"
          show-icon
          class="tw-mt-2"
        />
      </a-card>

      <!-- 疑点2 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100"style="margin-top: 10px">
        <template #title>
          <span class="tw-font-bold tw-text-base">2. 发票交付与否的矛盾</span>
        </template>
        <div class="tw-mb-2 tw-text-gray-800">
          申请人主张2011年10月19日开具的发票已交付被申请人（原话："发票已经交付给了被申请人"），但未说明交付方式（如邮寄或现场）。被申请人明确否认收到任何发票（原话："被申请人从未收到申请人所开具的增值税发票"）。
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-2">
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">申请人：</span>
            <span class="tw-italic">"发票已经交付给了被申请人"</span>
          </div>
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">被申请人：</span>
            <span class="tw-italic">"被申请人从未收到申请人所开具的增值税发票"</span>
          </div>
        </div>
        <a-alert
          message="疑点：申请人当庭提到'可提供邮寄底单或电子签收截图'，但未在举证期内提交；被申请人未解释若未收到发票，为何不早提出异议。交付事实存疑，可能影响支付条件成就。"
          type="warning"
          show-icon
          class="tw-mt-2"
        />
      </a-card>

      <!-- 疑点3 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100"style="margin-top: 10px">
        <template #title>
          <span class="tw-font-bold tw-text-base">3. 12月7日汇报参与性的关键矛盾</span>
        </template>
        <div class="tw-mb-2 tw-text-gray-800">
          申请人声称会议纪要证明被申请人领导参会并认可付款（原话："12月7日汇报，被申请人领导在会议上明确表示会在12月15日前付款"），拟作为履行完毕的核心证据。被申请人坚决否认任何人参与（原话："所有的汇报我们都没有参与...12月7日的会议并没有我方领导出席"）。
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-2">
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">申请人：</span>
            <span class="tw-italic">"12月7日汇报，被申请人领导在会议上明确表示会在12月15日前付款"</span>
          </div>
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">被申请人：</span>
            <span class="tw-italic">"所有的汇报我们都没有参与...12月7日的会议并没有我方领导出席"</span>
          </div>
        </div>
        <a-alert
          message="矛盾：若申请人有会议录音（庭后提交），为何庭审中未直接播放？被申请人未提供反驳证据（如出勤记录），仅依赖庭后核实，显得被动。"
          type="warning"
          show-icon
          class="tw-mt-2"
        />
      </a-card>

      <!-- 疑点4 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100"style="margin-top: 10px">
        <template #title>
          <span class="tw-font-bold tw-text-base">4. 合同履行与项目状态的逻辑冲突</span>
        </template>
        <div class="tw-mb-2 tw-text-gray-800">
          被申请人主张项目在2018年开工、2020年停工（原话："项目已经停工...开工时间是2018年3月份"），暗示服务不必要。申请人反驳服务与项目开工不冲突（原话："不代表商业体开工以后就不用服务"）。
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-2">
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">被申请人：</span>
            <span class="tw-italic">"项目已经停工...开工时间是2018年3月份"</span>
          </div>
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">申请人：</span>
            <span class="tw-italic">"不代表商业体开工以后就不用服务"</span>
          </div>
        </div>
        <a-alert
          message="疑点：被申请人未解释若服务无关项目状态，为何签约？申请人未提供证据证明服务实际应用于停工项目，引发履行必要性疑问。"
          type="warning"
          show-icon
          class="tw-mt-2"
        />
      </a-card>

      <!-- 疑点5 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-100"style="margin-top: 10px">
        <template #title>
          <span class="tw-font-bold tw-text-base">5. 支付滞纳金的起算点模糊</span>
        </template>
        <div class="tw-mb-2 tw-text-gray-800">
          申请人当庭变更请求，要求滞纳金"从服务沟通函发出日期起算，付至实际支付之日"（原话："以服务沟通函发出的日期作为起算点"），但未提供函件发出日期或内容。未合理解释：申请人未说明为何原请求与庭审陈述不一致，也未在举证期提交沟通函原件。被申请人未对此发表意见，可能因变更突然。
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mb-2">
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">申请人：</span>
            <span class="tw-italic">"以服务沟通函发出的日期作为起算点"</span>
          </div>
          <div class="tw-flex-1 tw-text-sm tw-text-gray-600">
            <span class="tw-font-semibold">被申请人：</span>
            <span class="tw-italic">(未发表意见)</span>
          </div>
        </div>
        <a-alert
          message="疑点：申请人未说明为何原请求与庭审陈述不一致，也未在举证期提交沟通函原件。被申请人未对此发表意见，可能因此更突然。"
          type="warning"
          show-icon
          class="tw-mt-2"
        />
      </a-card>
    </div>
  </a-modal>

  <!-- 证据材料弹窗 -->
  <a-modal
    v-model:open="modalStore.evidenceModalVisible"
    title="证据清单"
    width="720px"
    :footer="null"
    class="evidence-modal"
  >
    <template #title>
      <div class="tw-flex tw-items-center">
        <FolderOpenIcon class="tw-w-6 tw-h-6 text-green-600 tw-mr-2" />
        <span class="tw-font-bold tw-text-lg">证据清单</span>
      </div>
    </template>

    <div class="tw-space-y-4">
      <a-card
        v-for="(e, idx) in evidenceList"
        :key="e.id"
        size="small"
        class="tw-shadow tw-border tw-border-gray-100"
      >
        <template #title>
          <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center tw-gap-2 tw-min-w-0">
              <DocumentTextIcon class="tw-w-4 tw-h-4 tw-text-gray-400 tw-flex-shrink-0" />
              <span class="tw-font-bold tw-text-base tw-truncate">{{ idx + 1 }}. {{ e.name }}</span>
            </div>
            <span class="tw-text-xs tw-text-gray-500 tw-flex-shrink-0">{{ e.files.length }} 个附件</span>
          </div>
        </template>

        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          {{ e.content }}
        </div>

        <div class="tw-mt-3 tw-space-y-2">
          <div class="tw-text-xs tw-text-gray-500">附件：</div>
          <div class="tw-space-y-2">
            <div
              v-for="f in e.files"
              :key="f.id"
              class="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-bg-gray-50 tw-border tw-border-gray-100 tw-rounded tw-px-3 tw-py-2"
            >
              <div class="tw-min-w-0">
                <div class="tw-text-sm tw-text-gray-800 tw-truncate">{{ f.filename }}</div>
                <div class="tw-text-xs tw-text-gray-500">
                  {{ f.filetype }} · {{ f.size }} · {{ f.source }}
                </div>
              </div>

              <div class="tw-flex tw-items-center tw-gap-2 tw-flex-shrink-0">
                <a-button size="small" type="link" :href="f.previewUrl" target="_blank">预览</a-button>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </a-modal>
</template>

<script setup>
import { ref } from 'vue'
import {
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  UserIcon,
  FolderOpenIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'
import { useModalStore } from './stores/modal'

const modalStore = useModalStore()

const showPetitionRaw = ref(false)
const togglePetitionRaw = () => {
  showPetitionRaw.value = !showPetitionRaw.value
}

/** 仲裁申请书文件（多条，可预览） */
const petitionFiles = ref([
  {
    id: 'P-F1',
    filename: '仲裁申请书（盖章版）.pdf',
    filetype: 'PDF',
    size: '1.8MB',
    source: '申请人提交',
    previewUrl: '#'
  },
  {
    id: 'P-F2',
    filename: '仲裁申请书（可编辑稿）.docx',
    filetype: 'DOCX',
    size: '210KB',
    source: '申请人提交',
    previewUrl: '#'
  }
])

/** 多条答辩：答辩人 + 答辩内容 + 答辩文件（可预览） */
const defenseList = ref([
  {
    id: 'D1',
    respondent: '江门市悦泰臵业有限公司',
    submittedAt: '2023-03-20',
    content:
      '答辩人认为案涉合同未满足约定的生效形式要件（缺少法定代表人签字），且申请人未能证明已实际提供合同约定的服务成果与交付过程，因此付款条件并未成就；对服务费、滞纳金及律师费等仲裁请求均不予认可，请求仲裁庭依法驳回申请人全部或主要请求。',
    files: [
      {
        id: 'D1-F1',
        filename: '答辩书（盖章版）.pdf',
        filetype: 'PDF',
        size: '1.2MB',
        source: '答辩人提交',
        previewUrl: '#'
      },
      {
        id: 'D1-F2',
        filename: '质证意见及证据目录.docx',
        filetype: 'DOCX',
        size: '180KB',
        source: '答辩人提交',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'D2',
    respondent: '江门市悦泰臵业有限公司（补充答辩）',
    submittedAt: '2023-04-15',
    content:
      '答辩人补充主张申请人提交的会议纪要、周报及微信记录等材料在真实性、合法性与关联性方面均不足以证明成果已被答辩人接收或认可，且发票送达与催告送达事实不清；即便仲裁庭认定存在部分履行，相关费用与滞纳金亦应依法酌减并以实际损失为限。',
    files: [
      {
        id: 'D2-F1',
        filename: '补充答辩意见.pdf',
        filetype: 'PDF',
        size: '760KB',
        source: '答辩人提交',
        previewUrl: '#'
      }
    ]
  }
])

// 无争议事实列表
const factList = ref([
  {
    title: '当事人身份及授权无异议',
    content: '双方当庭确认对方出庭人员身份及代理权限，表示"没有异议"',
    quote: '双方是否有异议，申请人？被申请人。被：没有异议'
  },
  {
    title: '仲裁程序合规无异议',
    content: '双方同意广州仲裁委员会管辖，并确认"没有异议"仲裁规则适用',
    quote: '当事人参加今天的庭审活动，表明当事人均同意...双方是否有异议？...被：没有异议'
  },
  {
    title: '仲裁庭组成无回避要求',
    content: '双方均表示不要求仲裁员及秘书回避',
    quote: '看双方是否需要...回避，申请人？我不希望。被申请人。被：不需要'
  },
  {
    title: '合同印章真实性确认',
    content: '被申请人明确承认合同印章真实。此为关键"自认"事实，尽管被申请人对合同生效条件有异议',
    quote: '被申请人...对合同中你方的印章的真实性是否确认。被：确认'
  },
  {
    title: '发票已开具事实',
    content: '申请人确认于2011年10月19日开具金额270,000元的发票，被申请人未否认开具行为本身，仅否认收到及关联性',
    quote: '2011年10月19日开具的发票'
  },
  {
    title: '合同未完成生效形式要件',
    content: '双方确认合同第18条约定"双方法定代表人签字并加盖公章生效"，但合同落款处无双方代表签字（被申请人答辩中强调，申请人未反驳此形式缺陷）。此为隐含"自认"。'
  },
  {
    title: '履行期限约定',
    content: '合同期为4个月，双方无异议',
    quote: '合同履行期限非常短的四个月'
  },
  {
    title: '举证补充期限',
    content: '双方同意在庭审后5个工作日内补充证据',
    quote: '庭审结束后五个工作日内进行补充提交...看双方是否有异议，申请人？没有。被申请人。被：没有'
  }
])

// 证据清单（每条证据：名称 + 内容 + 多个附件文件）
const evidenceList = ref([
  {
    id: 'E1',
    name: '证据一组：案涉《策略顾问服务合同》（含签章页）',
    content:
      '用于证明双方就服务内容、费用、支付条件、争议解决条款等达成一致，以及合同文本存在盖章事实。被申请人对印章真实性予以确认，但对合同生效形式要件提出异议。',
    files: [
      {
        id: 'E1-F1',
        filename: '策略顾问服务合同（扫描件）.pdf',
        filetype: 'PDF',
        size: '2.4MB',
        source: '申请人提交（纸质扫描）',
        previewUrl: '#'
      },
      {
        id: 'E1-F2',
        filename: '合同签章页（高清）.jpg',
        filetype: 'JPG',
        size: '860KB',
        source: '申请人补充（庭后）',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'E2',
    name: '证据二组：服务成果交付与汇报材料（周报/阶段报告/会议纪要）',
    content:
      '用于证明申请人已按约提供策略顾问服务、持续提交周报并形成阶段成果；并拟证明12月7日最终汇报及相关纪要所载的参会与认可付款事实。该组证据是“是否实际履行”的核心证据之一。',
    files: [
      {
        id: 'E2-F1',
        filename: '第一阶段服务报告最终版.pdf',
        filetype: 'PDF',
        size: '8.9MB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E2-F2',
        filename: '项目周报汇编（2021-10~2021-12）.pdf',
        filetype: 'PDF',
        size: '5.1MB',
        source: '申请人补充（微信群导出）',
        previewUrl: '#'
      },
      {
        id: 'E2-F3',
        filename: '12月7日成果汇报会议纪要.docx',
        filetype: 'DOCX',
        size: '120KB',
        source: '申请人提交',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'E3',
    name: '证据三组：增值税专用发票及开票信息',
    content:
      '用于证明申请人已就第一期服务费开具发票，以及付款条件“开票”部分的成就情况。被申请人否认收到发票并质疑关联性，需结合寄送/签收等证据进一步佐证交付事实。',
    files: [
      {
        id: 'E3-F1',
        filename: '增值税专用发票（270,000元）.pdf',
        filetype: 'PDF',
        size: '420KB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E3-F2',
        filename: '开票信息截图.png',
        filetype: 'PNG',
        size: '310KB',
        source: '申请人提交（系统截图）',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'E4',
    name: '证据四组：催款沟通材料（服务沟通函/往来邮件/签收凭证）',
    content:
      '用于证明申请人曾多次催告被申请人付款，以及滞纳金/违约责任的主张基础与起算点相关事实（需明确函件发出时间及送达情况）。',
    files: [
      {
        id: 'E4-F1',
        filename: '服务沟通函.pdf',
        filetype: 'PDF',
        size: '680KB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E4-F2',
        filename: '邮件往来（导出）.eml',
        filetype: 'EML',
        size: '95KB',
        source: '申请人提交（邮箱导出）',
        previewUrl: '#'
      },
      {
        id: 'E4-F3',
        filename: '快递签收记录.png',
        filetype: 'PNG',
        size: '210KB',
        source: '申请人拟补充（如有）',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'E5',
    name: '证据五组：律师函及律师费支出凭证',
    content:
      '用于证明申请人委托律师发函催告及律师费实际发生情况，并作为主张律师费由对方承担的事实依据之一。被申请人可能质疑“实际支付”与“必要性”，建议同时配置转账/收据等材料。',
    files: [
      {
        id: 'E5-F1',
        filename: '律师函.pdf',
        filetype: 'PDF',
        size: '540KB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E5-F2',
        filename: '律师费发票（20,000元）.pdf',
        filetype: 'PDF',
        size: '260KB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E5-F3',
        filename: '律师费付款凭证（转账回单）.pdf',
        filetype: 'PDF',
        size: '190KB',
        source: '申请人拟补充（庭后）',
        previewUrl: '#'
      }
    ]
  },
  {
    id: 'E6',
    name: '证据六组：委托代理合同及授权材料',
    content:
      '用于证明代理关系成立、代理权限范围，以及相关费用发生的合同基础（若主张费用承担时可能涉及）。',
    files: [
      {
        id: 'E6-F1',
        filename: '委托代理合同.pdf',
        filetype: 'PDF',
        size: '1.1MB',
        source: '申请人提交',
        previewUrl: '#'
      },
      {
        id: 'E6-F2',
        filename: '授权委托书.pdf',
        filetype: 'PDF',
        size: '350KB',
        source: '申请人提交',
        previewUrl: '#'
      }
    ]
  }
])
</script>

<style scoped>
:deep(.ant-modal-header) {
  border-radius: 16px 16px 0 0;
}

:deep(.ant-modal-content) {
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

:deep(.ant-modal-body) {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
