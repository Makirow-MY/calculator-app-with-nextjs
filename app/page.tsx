"use client";
import Calculator from '@/component/Calculator'
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] relative flex items-center justify-center  w-full overflow-hidden ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
              <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />
                 <div className={`w-full min-h-screen flex items-center justify-center overflow-hidden p-4  bg-[var(--bg-main)] `}>
                    <div className="relative w-full  max-w-4xl md:h-[600px] ">
                       <div className="animated-gradient-border  w-full h-full">
                          <div className="w-full h-full flex flex-col rounded-3xl shadow-2xl md:flex-row">
                             <div className="hidden md:w-1/2 md:flex flex-col items-center justify-center p-6 bg-gradient-to-bl from-[var(--bg-secondary)] to-[var(--bg-main)]">
                                  <div>
                                     <img src="/banner.png" alt="calculator image" className="w-full h-auto object-contain" />
                                     <div className="mb-3 text-center">
                                         <h3 className="text-xl font-medium text-[var(--color-primary)]">Get Started Today</h3>
                                         <p className="text-sm text-[var(--text-secondary)]">Experince the power of our next js calculator compare to the other calculator i will create with flutter</p>       
                                     </div>
                                  </div>

                             </div>

                             <Calculator />
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
  );
}
