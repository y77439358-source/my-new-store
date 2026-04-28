"use client";

export default function CheckoutPage() {
  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">إتمام الطلب</h1>
      <form className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <label className="block mb-2 font-semibold">الاسم الكامل</label>
        <input type="text" className="w-full p-3 mb-4 border rounded-lg" placeholder="أدخل اسمك" required />
        
        <label className="block mb-2 font-semibold">رقم الهاتف</label>
        <input type="tel" className="w-full p-3 mb-4 border rounded-lg" placeholder="أدخل رقم هاتفك" required />
        
        <label className="block mb-2 font-semibold">عنوان التوصيل</label>
        <textarea className="w-full p-3 mb-6 border rounded-lg" placeholder="أدخل عنوانك الكامل" required />
        
        <button 
          type="button" 
          onClick={() => alert("تم استلام طلبك، شكراً لك!")}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
        >
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}