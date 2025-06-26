export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e0f7fa',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#0070f3', fontSize: '2.5rem' }}>Selamat Datang di Ruang Digital</h1>
      <p style={{ color: '#004d40', fontSize: '1.2rem' }}>Produk Digital Siap Pakai, Aman & Praktis</p>
    </div>
  );
}