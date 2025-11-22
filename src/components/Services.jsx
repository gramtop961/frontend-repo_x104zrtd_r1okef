import { Shield, Users, ServerCog, ShoppingCart } from 'lucide-react'

const items = [
  {
    title: 'Fully Managed IT',
    icon: ServerCog,
    desc: 'End-to-end support, monitoring, and maintenance — proactive and predictable.'
  },
  {
    title: 'Co-Managed IT',
    icon: Users,
    desc: 'Partner with your internal team to scale coverage, projects, and expertise.'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    desc: 'Hardened security stack, continuous monitoring, and clear incident response.'
  },
  {
    title: 'Procurement & Staff Augmentation',
    icon: ShoppingCart,
    desc: 'Right-fit hardware, licensing, and vetted talent — without the headaches.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">What we do</h2>
          <p className="mt-3 text-neutral-600">Four focused services that cover everything you actually need.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.03),0_28px_60px_-24px_rgba(0,0,0,0.25)] transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-neutral-900/95 text-white grid place-items-center shadow-sm">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
