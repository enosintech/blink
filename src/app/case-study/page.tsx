"use client";

import { Download, FileText, Target, Users, HardDrive, Shield, Award, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

import SmoothScroll from '@/components/smooth-scroll';
import { useGSAP } from '@gsap/react';
import { useLoadingValue } from '@/context/loadingValueContext';
import { noTriggerToAnimations } from '@/lib/animations';
import { useRef } from 'react';
import SectionFooter from '@/components/section-footer';

const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-accent/10 p-2 rounded-md">
      {icon}
    </div>
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
  </div>
);

const InfoCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-lg p-4 mb-2">
    {children}
  </div>
);


const CaseStudy = () => {

  const sliderTrigger = useRef<HTMLDivElement | null>(null);

  const { loadingValue } = useLoadingValue();

  useGSAP(() => {
      if(loadingValue === 100) {
        noTriggerToAnimations(sliderTrigger.current, {
          duration: 2.5,
          opacity: 1,
          delay: 0.5
        })
      }
    }, [loadingValue])

  return (
    <SmoothScroll>
        <div ref={sliderTrigger} className="min-h-screen bg-gradient-to-b from-black/60 via-black/40 to-transparent to opacity-0 text-foreground font-sans p-4 sm:p-6 lg:p-8">
            <main className="max-w-4xl mx-auto">
                
                <section 
                    className="text-center py-12"
                >
                    <div className="inline-block bg-accent/10 text-accent font-bold py-1 px-3 rounded-full text-xs md:text-sm mb-4">
                        INVITE-ONLY CASE STUDY
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Head of Digital Role Challenge
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 max-w-sm md:max-w-2xl mx-auto">
                        This is your opportunity to showcase your strategic thinking. We want to see how you tackle a real-world digital marketing plateau within the Zambian market
                    </p>
                </section>

                <div 
                    className="sticky top-20 z-10 flex justify-center mb-12"
                >
                    <a
                        href="/files/case-study.docx" 
                        download="Blink-Marketing-Head-of-Digital-Case-Study.docx"
                        className="flex items-center gap-3 bg-accent text-primary-foreground font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-accent/90 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        <Download size={20} />
                        Download The Full Case Study Brief
                    </a>
                </div>

                <div className="space-y-12 px-4 md:px-0">

                    <section
                    >
                        <SectionHeader icon={<Users className="text-accent" />} title="Context" />
                        <p className="text-neutral-400 md:text-base text-sm">
                            Blink Marketing Solutions is hiring a Head of Digital to lead a key client account. This established brand has a strong offline presence but faces stagnating digital growth despite healthy traffic and engagement. Your mission is to diagnose the problem and design a 90-day reset strategy.
                        </p>
                    </section>

                <section
                >
                    <SectionHeader icon={<Target className="text-accent" />} title="The Brief" />
                    <p className="text-neutral-400 mb-4 md:text-base text-sm">
                        Design a 90-day digital reset strategy to unlock growth. You must work within the following strict constraints:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <InfoCard><strong>No</strong> budget increases</InfoCard>
                        <InfoCard><strong>No</strong> new headcount</InfoCard>
                        <InfoCard><strong>No</strong> structural changes</InfoCard>
                    </div>
                </section>

                <section
                >
                    <SectionHeader icon={<FileText className="text-accent" />} title="What to Cover" />
                    <ul className="list-inside list-disc space-y-2 text-neutral-400 md:text-base text-sm">
                        <li><strong>Diagnosis:</strong> Explain the plateau's cause and the data you'd prioritize.</li>
                        <li><strong>Strategy:</strong> Outline your core strategy and how channels will work cohesively.</li>
                        <li><strong>30-60-90 Day Plan:</strong> Detail your priorities and expected outcomes.</li>
                        <li><strong>Local Market Context:</strong> Demonstrate deep understanding of Zambian/African user behavior.</li>
                        <li><strong>Success Metrics:</strong> Define the KPIs that truly matter for measuring commercial value.</li>
                    </ul>
                </section>
                
                <section
                >
                    <SectionHeader icon={<HardDrive className="text-accent" />} title="Submission Format" />
                    <p className="text-neutral-400">Choose <strong>one</strong> of the following formats for your submission:</p>
                    <ul className="list-inside list-disc space-y-2 text-neutral-400 mt-2 md:text-base text-sm">
                        <li>Maximum of <strong>five</strong> slides.</li>
                        <li>Maximum of <strong>800</strong> words.</li>
                        <li>Maximum of <strong>seven</strong> minute Loom video.</li>
                    </ul>
                </section>
                
                <section
                >
                    <SectionHeader icon={<Shield className="text-accent" />} title="Originality & Integrity" />
                    <p className="text-neutral-400 md:text-base text-sm">
                        Your submission must be 100% original work created for this challenge. The use of AI tools to generate the full response is prohibited. Be prepared to defend every decision in a live discussion.
                    </p>
                </section>

                <section
                >
                    <SectionHeader icon={<Award className="text-accent" />} title="Scoring Criteria" />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center bg-card p-3 rounded-md border-l-4 border-accent">
                            <span className="font-medium text-foreground">1. Strategic Clarity & Logic</span><span className="font-bold text-accent">25 pts</span>
                        </div>
                        <div className="flex justify-between items-center bg-card p-3 rounded-md border-l-4 border-accent">
                            <span className="font-medium text-foreground">2. Local Market Relevance</span><span className="font-bold text-accent">25 pts</span>
                        </div>
                        <div className="flex justify-between items-center bg-card p-3 rounded-md border-l-4 border-accent">
                            <span className="font-medium text-foreground">3. Commercial & Revenue Thinking</span><span className="font-bold text-accent">20 pts</span>
                        </div>
                        <div className="flex justify-between items-center bg-card p-3 rounded-md border-l-4 border-accent">
                            <span className="font-medium text-foreground">4. Execution within Constraints</span><span className="font-bold text-accent">15 pts</span>
                        </div>
                        <div className="flex justify-between items-center bg-card p-3 rounded-md border-l-4 border-accent">
                            <span className="font-medium text-foreground">5. Originality & Depth</span><span className="font-bold text-accent">15 pts</span>
                        </div>
                    </div>
                    <p className="mt-4 text-center font-semibold text-destructive-foreground bg-destructive p-3 rounded-lg md:text-base text-sm">
                        Note: Only candidates scoring 95% or higher will progress to the next stage.
                    </p>
                </section>
                </div>
            
                <footer className="text-center mt-16 py-8 border-t border-border px-3">
                    <BrainCircuit className="mx-auto text-accent mb-4" size={40}/>
                    <h3 className="text-2xl font-bold text-white">Final Word to Candidates</h3>
                    <p className="mt-2 text-neutral-400 max-w-xl mx-auto md:text-base text-sm">
                        We are not looking for perfection. We are looking for judgement, clarity, and leadership thinking. Good luck.
                    </p>
                </footer>
            </main>
        </div>
        <SectionFooter />
    </SmoothScroll>
  );
}

export default CaseStudy;