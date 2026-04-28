export default function HomePage() {
  const products = [
    { id: 1, name: "منتج 1", price: "100 درهم" },
    { id: 2, name: "منتج 2", price: "200 درهم" },
    { id: 3, name: "منتج 3", price: "300 درهم" },
  ];

  const phoneNumber = "212700653776"; // رقم هاتفك

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">متجر يوسف الإلكتروني</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-2">{p.name}</h2>
            <p className="text-xl text-gray-700 mb-6">{p.price}</p>
            
            <a 
              href={`https://wa.me/${phoneNumber}?text=مرحباً، أريد طلب ${p.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              شراء عبر واتساب
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}