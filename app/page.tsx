import SavingsGroup from "@/components/SavingsGroup";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold max-w-md mx-auto py-2.5">
              Ajo - savings group app
            </h1>
            {/* TODO: will add tyhe mainpage client components here */}
            <SavingsGroup />
          </div>
        </div>
      </div>
    </main>
  );
}
