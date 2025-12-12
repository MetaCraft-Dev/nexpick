export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">关于我们</h3>
            <p className="mt-2 text-sm text-neutral-400">NexPick.cc 致力于提供可信的数字订阅合租服务。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">帮助中心</h3>
            <p className="mt-2 text-sm text-neutral-400">常见问题、支付说明、账号使用与安全指南。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">联系客服</h3>
            <p className="mt-2 text-sm text-neutral-400">微信/邮箱渠道，7×24 支持。</p>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="text-sm font-semibold text-white">热门搜索</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Netflix 合租','ChatGPT 拼车','YouTube 家庭组','Disney+ 会员','Spotify 家庭组'].map((t) => (
              <span key={t} className="rounded-md border border-neutral-800 px-2 py-1 text-[11px] text-neutral-300">{t}</span>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            <details className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">
              <summary className="cursor-pointer text-sm text-white">合租账号合法吗?</summary>
              <p className="mt-2 text-sm text-neutral-400">请遵守各平台使用条款，选择正规渠道与合规套餐，避免共享密码与违反地区政策。</p>
            </details>
            <details className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">
              <summary className="cursor-pointer text-sm text-white">如何使用优惠码?</summary>
              <p className="mt-2 text-sm text-neutral-400">在商家下单页输入优惠码可享折扣，如无效请联系商家客服或更换渠道。</p>
            </details>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          Copyright © 2025 NexPick.cc 版权所有
        </div>
      </div>
    </footer>
  )
}
