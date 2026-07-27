import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, ChevronRight, CheckCircle2, ListFilter, Trash2 } from 'lucide-react';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleYear, setVehicleYear] = useState('2024');
  const [vehicleMake, setVehicleMake] = useState('Porsche');
  const [vehicleModel, setVehicleModel] = useState('911 GT3');
  const [serviceRequired, setServiceRequired] = useState('Precision Tire Care');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [bookingsHistory, setBookingsHistory] = useState<Booking[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');

  // Load bookings on mount
  useEffect(() => {
    const saved = localStorage.getItem('mt_bookings');
    if (saved) {
      try {
        setBookingsHistory(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !preferredDate) return;

    const newBooking: Booking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      email,
      phone,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      serviceRequired,
      preferredDate,
      preferredTime,
      notes,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    const updated = [newBooking, ...bookingsHistory];
    setBookingsHistory(updated);
    localStorage.setItem('mt_bookings', JSON.stringify(updated));
    setStep(2); // Go to success step
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookingsHistory.filter(b => b.id !== id);
    setBookingsHistory(updated);
    localStorage.setItem('mt_bookings', JSON.stringify(updated));
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setStep(1);
    setActiveTab('history');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-55 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop overlay */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm" 
          aria-hidden="true" 
        />

        {/* Trick browser to center modal content */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative z-10 inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-xl border border-surface-container-high sm:my-8"
        >
          {/* Header */}
          <div className="bg-surface-container-low px-6 py-4 flex justify-between items-center border-b border-surface-container-high">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-display text-lg font-bold text-on-surface">
                  Automotive Service Booking
                </h3>
                <p className="font-mono text-[10px] tracking-wider text-secondary uppercase font-medium">
                  Clinical-Grade Performance Care
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-surface-container text-secondary hover:text-on-surface transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs (Only if not in success step) */}
          {step === 1 && (
            <div className="flex border-b border-surface-container-high bg-surface-container-lowest px-6">
              <button
                onClick={() => setActiveTab('form')}
                className={`py-3 px-4 font-mono text-xs uppercase tracking-widest font-semibold border-b-2 transition-all cursor-pointer ${
                  activeTab === 'form' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                Schedule Appointment
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-3 px-4 font-mono text-xs uppercase tracking-widest font-semibold border-b-2 transition-all cursor-pointer relative ${
                  activeTab === 'history' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                Your History
                {bookingsHistory.length > 0 && (
                  <span className="ml-1.5 bg-primary text-on-primary text-[10px] font-sans font-bold px-1.5 py-0.5 rounded-full">
                    {bookingsHistory.length}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Body Content */}
          <div className="p-6">
            {step === 1 ? (
              activeTab === 'form' ? (
                /* Form view */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Full Name
                      </label>
                      <input 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        type="text"
                        required
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Email Address
                      </label>
                      <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        type="email"
                        required
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Phone */}
                    <div className="space-y-1 md:col-span-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Phone Number
                      </label>
                      <input 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(818) 892-1615"
                        type="tel"
                        required
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    {/* Vehicle */}
                    <div className="space-y-1 md:col-span-2">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Vehicle (Year, Make, Model)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <input 
                          value={vehicleYear}
                          onChange={(e) => setVehicleYear(e.target.value)}
                          placeholder="2024"
                          type="text"
                          required
                          className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        />
                        <input 
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          placeholder="Porsche"
                          type="text"
                          required
                          className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        />
                        <input 
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder="911 GT3"
                          type="text"
                          required
                          className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Service Required */}
                    <div className="space-y-1 md:col-span-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Service Required
                      </label>
                      <select 
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                      >
                        <option>Precision Tire Care</option>
                        <option>Advanced Diagnostics</option>
                        <option>Brake Performance</option>
                        <option>White-Glove Maintenance</option>
                        <option>Computerized Alignment</option>
                        <option>Engine Calibration</option>
                      </select>
                    </div>
                    {/* Preferred Date */}
                    <div className="space-y-1 md:col-span-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Preferred Date
                      </label>
                      <input 
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        type="date"
                        required
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all text-on-surface"
                      />
                    </div>
                    {/* Preferred Time */}
                    <div className="space-y-1 md:col-span-1">
                      <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                        Preferred Time Window
                      </label>
                      <select 
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all"
                      >
                        <option>8:00 AM – 10:00 AM</option>
                        <option>10:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 2:00 PM</option>
                        <option>2:00 PM – 4:00 PM</option>
                        <option>4:00 PM – 6:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                      Additional Notes / Details
                    </label>
                    <textarea 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Please details any vehicle symptoms, tire brands preferred, or specific instructions."
                      rows={3}
                      className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-primary text-on-primary p-3.5 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      Confirm Schedule
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                /* History view */
                <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                  {bookingsHistory.length === 0 ? (
                    <div className="text-center py-12 text-secondary space-y-3 bg-surface-container-low rounded-lg border border-dashed border-surface-container-high">
                      <ListFilter className="w-10 h-10 mx-auto opacity-35" />
                      <p className="font-sans text-sm">No bookings scheduled in this browser yet.</p>
                      <button 
                        onClick={() => setActiveTab('form')}
                        className="text-xs text-primary font-mono font-bold hover:underline"
                      >
                        Schedule Your First Now
                      </button>
                    </div>
                  ) : (
                    bookingsHistory.map((booking) => (
                      <div 
                        key={booking.id}
                        className="bg-surface-container-low border border-surface-container-high p-4 rounded-lg relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 group hover:border-outline-variant/30 transition-all"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {booking.id}
                            </span>
                            <span className="text-xs font-semibold px-2 py-0.5 bg-green-100 text-green-800 rounded font-mono uppercase tracking-wider">
                              {booking.status}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-sans text-sm font-bold text-on-surface">
                              {booking.serviceRequired}
                            </h4>
                            <p className="text-xs text-secondary font-sans font-medium">
                              {booking.vehicleYear} {booking.vehicleMake} {booking.vehicleModel}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-secondary">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{booking.preferredDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{booking.preferredTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="sm:text-right flex sm:flex-col justify-between items-end gap-2 shrink-0">
                          <div className="text-xs text-secondary font-mono">
                            Client: {booking.fullName}
                          </div>
                          <button 
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="text-red-600 hover:bg-red-50 p-1.5 rounded transition-colors cursor-pointer"
                            title="Cancel Appointment"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )
            ) : (
              /* Success Step (2) */
              <div className="text-center py-8 space-y-6 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    Booking Confirmed!
                  </h3>
                  <p className="font-sans text-sm text-secondary leading-relaxed">
                    Your appointment has been successfully locked in with surgical precision. A notification has been sent to your device.
                  </p>
                </div>

                {/* Summary of newest booking */}
                {bookingsHistory[0] && (
                  <div className="bg-surface-container border border-surface-container-high p-4 rounded-lg text-left text-sm space-y-2 font-sans">
                    <div className="flex justify-between border-b border-surface-container-high pb-2">
                      <span className="font-mono font-bold text-primary">BOOKING ID:</span>
                      <span className="font-mono font-bold">{bookingsHistory[0].id}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 pt-1 text-xs">
                      <span className="text-secondary font-medium">Service:</span>
                      <span className="font-semibold text-right">{bookingsHistory[0].serviceRequired}</span>

                      <span className="text-secondary font-medium">Vehicle:</span>
                      <span className="font-semibold text-right">
                        {bookingsHistory[0].vehicleYear} {bookingsHistory[0].vehicleMake} {bookingsHistory[0].vehicleModel}
                      </span>

                      <span className="text-secondary font-medium">Date:</span>
                      <span className="font-semibold text-right">{bookingsHistory[0].preferredDate}</span>

                      <span className="text-secondary font-medium">Time Slot:</span>
                      <span className="font-semibold text-right">{bookingsHistory[0].preferredTime}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex gap-3">
                  <button 
                    onClick={handleResetForm}
                    className="flex-1 border border-outline text-on-surface py-2.5 rounded font-mono text-xs uppercase tracking-widest font-bold hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    View History
                  </button>
                  <button 
                    onClick={onClose}
                    className="flex-1 bg-primary text-on-primary py-2.5 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
