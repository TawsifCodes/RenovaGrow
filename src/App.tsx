/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import DemoOne from "@/components/ui/feature-demo";
import { Portfolio } from "@/components/ui/portfolio";
import { ContactAuditor } from "@/components/ui/contact-auditor";
import { Footer } from "@/components/ui/footer-section";
import { VectorDecorations } from "@/components/ui/vector-decorations";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0fdf4] font-sans text-emerald-950 relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-950">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-200/30 blur-[100px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-green-100/30 blur-[100px] mix-blend-multiply animate-blob-reverse" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-100/25 blur-[120px] mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      {/* Nano Banana Leaf Minimalist SVG Vector Decorations */}
      <VectorDecorations />

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full flex flex-col items-center relative gap-2">
          <SplineSceneBasic />
          <DemoOne />
          <Portfolio />
          <ContactAuditor />
        </main>
        <Footer />
      </div>
    </div>
  );
}
