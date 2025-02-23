// TODO: 페이지에 접근하려면 인증정보 필요
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">Workflow</p>
      </div>

      <div className="flex flex-col gap-4 h-full">{children}</div>
    </div>
  );
}
