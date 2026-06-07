'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Cabinet Painting',
  'Drywall & Repairs',
  'Commercial Painting',
  'Other / Multiple Services',
]

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  description: string
  startDate: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  description: '',
  startDate: '',
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!form.email.trim()) newErrors.email = 'Email address is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email address.'
    if (!form.service) newErrors.service = 'Please select a service.'
    if (!form.description.trim()) newErrors.description = 'Please describe your project.'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const inputBase =
    'w-full bg-cream border border-lightgray px-4 py-3 text-navy text-sm font-poppins placeholder-navy/40 focus:outline-none focus:border-navy transition-colors duration-200'
  const errorClass = 'border-red-400'
  const labelClass = 'block text-navy text-xs font-semibold tracking-wider uppercase mb-2'

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy/5 border border-gold/30 p-10 text-center"
      >
        <span className="text-gold text-4xl mb-4 block">&#10003;</span>
        <h3 className="text-navy font-bold text-2xl mb-3">Quote Request Received!</h3>
        <p className="text-navy/60 text-sm leading-relaxed">
          Thank you, {form.name.split(' ')[0]}. We&apos;ll reach out within one business day to discuss your project and schedule a free on-site estimate.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Maria Gonzalez"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`${inputBase} ${errors.name ? errorClass : ''}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="(720) 000-0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${inputBase} ${errors.phone ? errorClass : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputBase} ${errors.email ? errorClass : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>Service Needed</label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`${inputBase} ${errors.service ? errorClass : ''} appearance-none cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>Project Description</label>
        <textarea
          id="description"
          rows={4}
          placeholder="Tell us about your project — size, timeline, any specific requirements..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={`${inputBase} resize-none ${errors.description ? errorClass : ''}`}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Start Date */}
      <div>
        <label htmlFor="startDate" className={labelClass}>Preferred Start Date <span className="text-navy/40 normal-case tracking-normal font-normal">(optional)</span></label>
        <input
          id="startDate"
          type="date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          className={inputBase}
        />
      </div>

      <button
        type="submit"
        className="bg-gold text-navy font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold/90 transition-colors duration-200 mt-2"
      >
        Request My Free Quote
      </button>
    </form>
  )
}
