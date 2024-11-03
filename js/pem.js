document.getElementById('pemasukanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jumlah = document.getElementById('jumlah').value;
    const sumber = document.getElementById('sumber').value;
    const tanggal = document.getElementById('tanggal').value;

    const tableBody = document.getElementById('dataPemasukan').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const cellTanggal = newRow.insertCell(0);
    const cellSumber = newRow.insertCell(1);
    const cellJumlah = newRow.insertCell(2);

    cellTanggal.textContent = tanggal;
    cellSumber.textContent = sumber;
    cellJumlah.textContent = jumlah;

    // Reset form
    document.getElementById('pemasukanForm').reset();
});

// Fungsi untuk menambahkan 50 pemasukan contoh
function addSampleData() {
    const tableBody = document.getElementById('dataPemasukan').getElementsByTagName('tbody')[0];

    // Contoh data pemasukan
    const sampleData = [
        { tanggal: "01-11-2024", sumber: "Penjualan Produk A", jumlah: 5000 },
        { tanggal: "02-11-2024", sumber: "Penjualan Produk B", jumlah: 7500 },
        { tanggal: "03-11-2024", sumber: "Layanan Konsultasi", jumlah: 3000 },
        { tanggal: "04-11-2024", sumber: "Sponsorship Event", jumlah: 10000 },
        { tanggal: "05-11-2024", sumber: "Penjualan Produk C", jumlah: 8000 },
        { tanggal: "06-11-2024", sumber: "Proyek Freelance", jumlah: 4500 },
        { tanggal: "07-11-2024", sumber: "Penjualan Barang Bekas", jumlah: 1500 },
        { tanggal: "08-11-2024", sumber: "Bonus Kinerja", jumlah: 2500 },
        { tanggal: "09-11-2024", sumber: "Kegiatan Pelatihan", jumlah: 3500 },
        { tanggal: "10-11-2024", sumber: "Penjualan Merchandise", jumlah: 4000 },
        { tanggal: "11-11-2024", sumber: "Layanan Jasa", jumlah: 2000 },
        { tanggal: "12-11-2024", sumber: "Pemasukan dari Investasi", jumlah: 12000 },
        { tanggal: "13-11-2024", sumber: "Penyewaan Ruangan", jumlah: 6000 },
        { tanggal: "14-11-2024", sumber: "Pemasukan dari Afiliasi", jumlah: 3000 },
        { tanggal: "15-11-2024", sumber: "Penjualan Kue", jumlah: 5000 },
        { tanggal: "16-11-2024", sumber: "Pemasukan Event", jumlah: 15000 },
        { tanggal: "17-11-2024", sumber: "Pemasukan dari Sponsor", jumlah: 9000 },
        { tanggal: "18-11-2024", sumber: "Konsultasi Online", jumlah: 4000 },
        { tanggal: "19-11-2024", sumber: "Penjualan eBook", jumlah: 2000 },
        { tanggal: "20-11-2024", sumber: "Pemasukan dari Webinar", jumlah: 3500 },
        { tanggal: "21-11-2024", sumber: "Layanan Desain", jumlah: 7000 },
        { tanggal: "22-11-2024", sumber: "Donasi", jumlah: 2500 },
        { tanggal: "23-11-2024", sumber: "Penjualan Aset", jumlah: 4000 },
        { tanggal: "24-11-2024", sumber: "Pemasukan dari Promosi", jumlah: 8000 },
        { tanggal: "25-11-2024", sumber: "Layanan Pemeliharaan", jumlah: 3000 },
        { tanggal: "26-11-2024", sumber: "Pemasukan dari Affiliate Marketing", jumlah: 9000 },
        { tanggal: "27-11-2024", sumber: "Penjualan Aplikasi", jumlah: 5000 },
        { tanggal: "28-11-2024", sumber: "Pemasukan dari Penjualan Langganan", jumlah: 7000 },
        { tanggal: "29-11-2024", sumber: "Layanan Pelatihan Online", jumlah: 4000 },
        { tanggal: "30-11-2024", sumber: "Pemasukan dari Sponsorship", jumlah: 10000 },
        { tanggal: "01-12-2024", sumber: "Penjualan Roti", jumlah: 2500 },
        { tanggal: "02-12-2024", sumber: "Pemasukan dari Sewa", jumlah: 8000 },
        { tanggal: "03-12-2024", sumber: "Pemasukan dari Jasa Kebersihan", jumlah: 3000 },
        { tanggal: "04-12-2024", sumber: "Penjualan Layanan Internet", jumlah: 12000 },
        { tanggal: "05-12-2024", sumber: "Kegiatan Kesehatan", jumlah: 9000 },
        { tanggal: "06-12-2024", sumber: "Pemasukan dari Penjualan Tiket", jumlah: 5000 },
        { tanggal: "07-12-2024", sumber: "Layanan Pemasaran Digital", jumlah: 15000 },
        { tanggal: "08-12-2024", sumber: "Pemasukan dari Sewa Alat", jumlah: 6000 },
        { tanggal: "09-12-2024", sumber: "Penjualan Sewa Mobil", jumlah: 10000 },
        { tanggal: "10-12-2024", sumber: "Pemasukan dari Program Loyalti", jumlah: 2000 },
    ]
}