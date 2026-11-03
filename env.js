/*
 * Konfigurasi publik ImagineWorks Studio.
 * Nilai di berkas ini dapat dilihat siapa pun yang membuka website.
 * Jangan pernah menaruh Supabase service_role/secret key, PIN pepper,
 * atau kunci enkripsi di sini.
 *
 * SQL setup cepat untuk Supabase Storage:
 *   INSERT INTO storage.buckets (id, name, public)
 *   VALUES ('studio-photos', 'studio-photos', true)
 *   ON CONFLICT (id) DO UPDATE SET public = true;
 *
 *   ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;
 *   ALTER TABLE storage.buckets DISABLE ROW LEVEL SECURITY;
 *
 * Catatan: untuk demo/prototype, menonaktifkan RLS memudahkan upload/download.
 * Untuk produksi, sebaiknya ganti dengan policy yang lebih ketat.
 */
window.IMAGINEWORKS_CONFIG = Object.freeze({
  // Isi dari Supabase Dashboard > Project Settings > API.
  // GANTI NILAI INI DENGAN PROJECT SUPABASE ANDA YANG SESUNGGUHNYA.
  SUPABASE_URL: 'https://gfhupmpyxjhgxklnuvqr.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaHVwbXB5eGpoZ3hrbG51dnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5NzgyMTIsImV4cCI6MjEwODU1NDIxMn0.cUAuksVoDlVfCGq3ewCHW9diKHAbtMbwgclb4EDKE0g',
  STORAGE_BUCKET: 'studio-photos',

  // Opsional; bila kosong, aplikasi akan memakai fallback demo lokal.
  FUNCTIONS_BASE_URL: '',

  // URL project-managed untuk hero; fallback lokal bila file tidak tersedia.
  HERO_IMAGE_URL: './assets/imagineworks-hero.jpg',
  HERO_IMAGE_FALLBACK: './assets/imagineworks-hero.jpg',

  // Informasi rekening publik untuk transfer manual.
  BANK_TRANSFER: Object.freeze({
    BANK_NAME: 'BANK_MANDIRI',
    ACCOUNT_NUMBER: '1300012345678',
    ACCOUNT_HOLDER: 'IMAGINEWORKS STUDIO'
  }),

  // Nomor WhatsApp tanpa tanda +. Contoh: 6281234567890
  BOOKING_WHATSAPP: '6285349991313',

  // Untuk mode admin demo lokal bila Supabase Auth belum aktif.
  ADMIN_EMAIL: 'admin@imagineworks.id',
  ADMIN_PASSWORD: 'imagineworks123'
});
