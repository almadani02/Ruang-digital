export default function TentangKami() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f1f8e9',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#00695c', fontSize: '2rem' }}>Tentang Kami</h1>
      <p style={{ maxWidth: '600px', color: '#33691e' }}>
        Ruang Digital adalah toko produk digital modern yang menyediakan eBook, template, dan tools kreatif.
        Kami hadir untuk memudahkan kreator dan pelaku bisnis mendapatkan kebutuhan digital secara praktis dan aman.
      </p>
    </div>
  );
}