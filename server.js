import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 10000;
const distDir = path.join(__dirname, 'dist');

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.json({ limit: '20kb' }));

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

const rates = {
  Single: 3500, DeluxeSingle: 4000, Double: 5000, SuperiorDouble: 6000,
  TwinDeluxe: 5500, Family: 7000, Executive: 10000, Cottage: 12000,
  Honeymoon: 14000, Presidential: 15000
};
const roomNames = {
  Single: 'Single Room', DeluxeSingle: 'Deluxe Single Room', Double: 'Double Room',
  SuperiorDouble: 'Superior Lakeview Double', TwinDeluxe: 'Twin Deluxe Room',
  Family: 'Family Room', Executive: 'Executive Lake Suite', Cottage: 'Lakefront Luxury Cottage',
  Honeymoon: 'Honeymoon Panoramic Villa', Presidential: 'Executive Sunset Suite'
};
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

app.post('/process_booking.php', (req, res) => {
  const customerName = String(req.body.customer_name || '').trim();
  const roomType = String(req.body.room_type || 'Double');
  const guests = Number.parseInt(req.body.guests, 10) || 1;
  const nights = Number.parseInt(req.body.nights, 10) || 1;

  if (!customerName || !rates[roomType] || guests < 1 || guests > 10 || nights < 1 || nights > 14) {
    return res.status(400).type('html').send('<h1>Booking details are invalid</h1><p>Please return to the booking form and check your details.</p><a href="/booking.html">Return to booking</a>');
  }

  const breakfast = req.body.breakfast === 'yes';
  const transfer = req.body.airport_transfer === 'yes';
  const conference = req.body.conference_room === 'yes';
  const extraBed = req.body.extra_bed === 'yes';
  const lateCheckout = req.body.late_checkout === 'yes';
  const roomCost = rates[roomType] * nights;
  const breakfastCost = breakfast ? 700 * guests * nights : 0;
  const transferCost = transfer ? 2000 : 0;
  const conferenceCost = conference ? 5000 : 0;
  const extraBedCost = extraBed ? 1500 * nights : 0;
  const lateCheckoutCost = lateCheckout ? 2000 : 0;
  const total = roomCost + breakfastCost + transferCost + conferenceCost + extraBedCost + lateCheckoutCost;
  const ref = 'SRH-' + new Date().getFullYear() + '-' + crypto.randomBytes(3).toString('hex').toUpperCase();

  res.status(200).type('html').send(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Booking Summary - Sunrise Hotel</title><link rel="stylesheet" href="/style.css"></head><body><main class="container"><section class="confirmation-wrap"><h1 class="confirm-title">BOOKING REQUEST RECEIVED</h1><p>Reference: <strong>${esc(ref)}</strong></p><p>Guest: <strong>${esc(customerName)}</strong></p><p>Room: <strong>${esc(roomNames[roomType])}</strong></p><p>Guests: ${guests} · Nights: ${nights}</p><h2>Total estimate: KSh ${total.toLocaleString('en-KE')}</h2><p>This is a booking request prototype. No room has been reserved and no booking was stored.</p><a class="btn-cta" href="/booking.html">Return to booking</a> <a class="btn-secondary" href="/">Home</a></section></main></body></html>`);
});

app.use(express.static(distDir, { extensions: ['html'] }));
app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Sunrise Hotel server listening on 0.0.0.0:${port}`);
});
