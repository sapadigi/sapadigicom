import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` akan menambahkan objek `token` ke dalam request.
  function middleware(req) {
    // Anda bisa menambahkan logika tambahan di sini jika perlu
    // Contoh: Memeriksa role pengguna dari token
    // if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
    //   return new NextResponse("You are not authorized!");
    // }
  },
  {
    callbacks: {
      // Callback `authorized` digunakan untuk menentukan apakah pengguna diizinkan mengakses halaman.
      // Jika token ada (pengguna sudah login), maka akan mengembalikan `true`.
      authorized: ({ token }) => !!token,
    },
  }
);

// Konfigurasi ini memastikan middleware hanya berjalan pada rute yang cocok.
export const config = {
  matcher: ["/dashboard/:path*"],
};
