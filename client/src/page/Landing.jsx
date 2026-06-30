import React, { useState } from 'react';

// Minimalist custom SVG Icons for feature highlights
const StorageIcon = () => (
  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5 5 0 00-4.591-3.42C11 3 9 5 9 7v2" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CollaborationIcon = () => (
  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5 text-indigo-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    /* "fixed inset-0 overflow-y-auto" breaks out of any parent padding 
       and fills 100% horizontal monitor screen exactly.
    */
    <div className="fixed inset-0 w-full h-full bg-[#FBF9F6] text-gray-900 font-sans antialiased selection:bg-black selection:text-white overflow-y-auto">
      
      {/* 1. STICKY NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-gray-200/60 w-full">
        <div className="w-full mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="bg-black rounded-sm"></div>
              <div className="bg-indigo-600 rounded-sm"></div>
              <div className="bg-indigo-400 rounded-sm"></div>
              <div className="bg-black/20 rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">StorageSilo</span>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-black transition-colors">Product</a>
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
            <a href="#enterprise" className="hover:text-black transition-colors">Enterprise</a>
          </nav>

          {/* CTA Actions */}
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Sign In
            </a>
            <a
              href="/register"
              className="inline-flex justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 transition-all active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO PROMOTION SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-gray-100 w-full">
        <div className="w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Promotion */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <span>🚀 StorageSilo 2.0 Now Live</span>
            </div>
            <h1 className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl md:text-7xl leading-tight">
              Your workflow, <br />
              <span className="font-semibold text-indigo-600">synchronized.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Securely store assets, collaborate with internal tagging systems, and orchestrate pipeline workspaces without leaving your primary production focus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/register"
                className="w-full sm:w-auto text-center rounded-xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-md hover:bg-indigo-500 transition-all active:scale-[0.98]"
              >
                Find your plan
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto text-center rounded-xl bg-white border border-gray-200 px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all active:scale-[0.98]"
              >
                See features
              </a>
            </div>
          </div>

          {/* Right Product Preview Mockup */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] bg-[#1E1915] rounded-2xl shadow-2xl p-6 border border-gray-800/80 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="relative h-full flex flex-col justify-between z-10">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-gray-500">~/workspace/silo-vault</span>
                </div>
                <div className="h-5 w-32 bg-gray-800 rounded-md"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <div className="h-3 w-3 bg-indigo-400 rounded-sm"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-16 bg-gray-600 rounded"></div>
                      <div className="h-1.5 w-10 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800/50 pt-4">
                <span>Storage status: 64% used</span>
                <span className="text-indigo-400">All Nodes Connected</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT CORE FEATURES */}
      <section id="features" className="w-full mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Engineered for <span className="font-semibold">modern file operations</span>
          </h2>
          <p className="text-base text-gray-600">
            Everything your team needs to centralize collateral deployment pipelines securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200/70 hover:shadow-xl transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
              <StorageIcon />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Sync Layer</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Only fetch files locally when requested. Keep infinite terabytes at hand without congesting physical computer storage allocations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200/70 hover:shadow-xl transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
              <SecurityIcon />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero-Knowledge Guard</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Your data keys stay completely within client instances. Advanced continuous envelope encryption guards every transfer automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200/70 hover:shadow-xl transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
              <CollaborationIcon />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tag Collaboration</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Embed structured operational workflows inside folders. Instantly assign revision priorities or asset tags with quick permission parameters.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRICING INTERACTIVE SCHEME */}
      <section id="pricing" className="bg-white border-t border-b border-gray-200/60 py-24 w-full">
        <div className="w-full mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-6 mb-16">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
              Simple plans for <span className="font-semibold">teams of all sizes</span>
            </h2>
            <p className="text-base text-gray-600">
              No hidden asset indexing fees. Pick the package that corresponds to your scaling storage footprints.
            </p>

            <div className="inline-flex items-center bg-gray-100 p-1 rounded-xl mt-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${billingCycle === 'annual' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-[#FBF9F6] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Starter Box</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">$0</span>
                  <span className="ml-1 text-sm text-gray-500">/ forever</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Essential standard features for individual space allocation workflows.</p>
                
                <ul className="mt-6 space-y-4 border-t border-gray-200/60 pt-6 text-sm text-gray-700">
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">5 GB Protected Storage</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Smart Sync Access</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Max 2 Linked Devices</span></li>
                </ul>
              </div>
              <a href="/register" className="mt-8 block w-full rounded-xl bg-white border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Register Free
              </a>
            </div>

            <div className="bg-white border-2 border-indigo-600 rounded-2xl p-8 flex flex-col justify-between shadow-lg relative transform lg:-translate-y-2">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Professional</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {billingCycle === 'monthly' ? '$15' : '$12'}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">/ user / mo</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Advanced coordination frameworks optimized for collaborative team pipelines.</p>
                
                <ul className="mt-6 space-y-4 border-t border-gray-200/60 pt-6 text-sm text-gray-700">
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">2 TB High-Speed Storage</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Unlimited Device Syncing</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Advanced Collaborative Tagging</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">30-day File Version History</span></li>
                </ul>
              </div>
              <a href="/register" className="mt-8 block w-full rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-500 shadow-sm transition-colors">
                Start Free Trial
              </a>
            </div>

            <div className="bg-[#FBF9F6] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Custom Vault</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">Custom</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Bespoke scaling options complete with fine-grained admin audit suites.</p>
                
                <ul className="mt-6 space-y-4 border-t border-gray-200/60 pt-6 text-sm text-gray-700">
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Infinite Adaptable Capacity</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">SAML SSO & Guard Admin Console</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Dedicated Support Desk</span></li>
                  <li className="flex items-start"><CheckIcon /><span className="ml-3">Custom Compliance Frameworks</span></li>
                </ul>
              </div>
              <a href="#" className="mt-8 block w-full rounded-xl bg-white border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Contact Operations
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full mx-auto px-6 lg:px-12 py-12 text-center sm:flex sm:items-center sm:justify-between text-xs text-gray-500">
        <div>
          &copy; 2026 StorageSilo Systems Inc. All rights reserved.
        </div>
        <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-black transition-colors">Terms of Operations</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Framework</a>
          <a href="#" className="hover:text-black transition-colors">Security Nodes</a>
        </div>
      </footer>

    </div>
  );
}