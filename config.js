// ส่งค่า Supabase (public) จาก Vercel Environment Variables ให้หน้าเว็บ
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ url: process.env.SUPABASE_URL, key: process.env.SUPABASE_ANON_KEY });
};
