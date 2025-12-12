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
        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          Copyright © 2025 NexPick.cc 版权所有
        </div>
      </div>
    </footer>
  )
}

