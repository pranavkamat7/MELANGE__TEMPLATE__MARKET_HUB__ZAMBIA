import { PrimaryButton } from '@/app/components/buttons/PrimaryButton';
import { SecondaryButton } from '@/app/components/buttons/SecondaryButton';
import { GradientDivider } from '@/app/components/ui/GradientDivider';
import { SectionHeading } from '@/app/components/ui/SectionHeading';
import { BodyText } from '@/app/components/ui/BodyText';
import { MicroLabel } from '@/app/components/ui/MicroLabel';

export function DesignSystem() {
  return (
    <div className="bg-[#0B0B12] text-white min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-6xl font-bold mb-16">Mélange Design System</h2>
        
        {/* SPACING SYSTEM */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Spacing System</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-8">
              <div className="w-2 h-2 bg-[#B44CFF]"></div>
              <span className="text-xl">8px / 0.5rem - Micro spacing</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-4 h-4 bg-[#B44CFF]"></div>
              <span className="text-xl">16px / 1rem - Small spacing</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-6 h-6 bg-[#B44CFF]"></div>
              <span className="text-xl">24px / 1.5rem - Medium spacing</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-8 h-8 bg-[#B44CFF]"></div>
              <span className="text-xl">32px / 2rem - Large spacing</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-12 h-12 bg-[#B44CFF]"></div>
              <span className="text-xl">48px / 3rem - XL spacing</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-[#B44CFF]"></div>
              <span className="text-xl">64px / 4rem - XXL spacing</span>
            </div>
          </div>
        </section>

        {/* COLOR SYSTEM */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Color System</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-full h-32 bg-[#0B0B12] border border-white/10 rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#0B0B12</p>
              <p className="text-sm text-[#94A3B8]">Primary Background</p>
            </div>
            <div>
              <div className="w-full h-32 bg-[#0F172A] border border-white/10 rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#0F172A</p>
              <p className="text-sm text-[#94A3B8]">Secondary Dark</p>
            </div>
            <div>
              <div className="w-full h-32 bg-[#B44CFF] rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#B44CFF</p>
              <p className="text-sm text-[#94A3B8]">Primary Purple</p>
            </div>
            <div>
              <div className="w-full h-32 bg-[#5A7CFF] rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#5A7CFF</p>
              <p className="text-sm text-[#94A3B8]">Primary Blue</p>
            </div>
            <div>
              <div className="w-full h-32 bg-[#E879F9] rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#E879F9</p>
              <p className="text-sm text-[#94A3B8]">Accent Pink</p>
            </div>
            <div>
              <div className="w-full h-32 bg-white rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#FFFFFF</p>
              <p className="text-sm text-[#94A3B8]">White</p>
            </div>
            <div>
              <div className="w-full h-32 bg-[#94A3B8] rounded-lg mb-4"></div>
              <p className="text-sm font-mono">#94A3B8</p>
              <p className="text-sm text-[#94A3B8]">Muted Text</p>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Hero H1</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
                Enter the Growth Singularity
              </h2>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Section Heading</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Section Headline
              </h2>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Body Large</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#94A3B8] leading-relaxed">
                Large body text for supporting statements and descriptions
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Body Normal</p>
              <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
                Normal body text for regular content
              </p>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Micro Label</p>
              <MicroLabel>INITIATE SEQUENCE</MicroLabel>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Buttons</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Primary Button (Reactor CTA)</p>
              <PrimaryButton>Book a Strategy Call</PrimaryButton>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Primary Button (No Arrow)</p>
              <PrimaryButton showArrow={false}>Contact Us</PrimaryButton>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Secondary Button (Glass)</p>
              <SecondaryButton>See How We Build</SecondaryButton>
            </div>
          </div>
        </section>

        {/* COMPONENTS */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Components</h2>
          
          <div className="space-y-16">
            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Gradient Divider</p>
              <GradientDivider />
            </div>

            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Section Heading (with highlight)</p>
              <SectionHeading highlight="Systems Compound" center>
                Tactics Expire
              </SectionHeading>
            </div>

            <div>
              <p className="text-sm text-[#94A3B8] mb-4">Body Text (Large, Muted)</p>
              <BodyText size="large" color="muted" center>
                We build once, refine continuously, and scale without resetting the machine.
              </BodyText>
            </div>
          </div>
        </section>

        {/* GRADIENT SYSTEM */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-8">Gradient System</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Mélange Primary Gradient</p>
              <div className="h-24 rounded-lg bg-gradient-to-r from-[#B44CFF] to-[#5A7CFF]"></div>
              <p className="text-sm font-mono mt-2">from-[#B44CFF] to-[#5A7CFF]</p>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Full Spectrum Gradient</p>
              <div className="h-24 rounded-lg bg-gradient-to-r from-[#E879F9] via-[#B44CFF] to-[#5A7CFF]"></div>
              <p className="text-sm font-mono mt-2">from-[#E879F9] via-[#B44CFF] to-[#5A7CFF]</p>
            </div>
            <div>
              <p className="text-sm text-[#94A3B8] mb-2">Gradient Text</p>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-[#B44CFF] to-[#5A7CFF] bg-clip-text text-transparent">
                Gradient Headline
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}