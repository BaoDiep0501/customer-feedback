"use client";

import { useState } from "react";
import { feedbackSchema } from "@/lib/feedbackSchema";

export default function Home() {
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState<{
    content?: string;
    phone?: string;
  }>({});

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = feedbackSchema.safeParse({
      content,
      phone,
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        content: fieldErrors.content?.[0],
        phone: fieldErrors.phone?.[0],
      });

      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-gray-900">
          Góp ý khách hàng
        </h1>

        <div>
          <label htmlFor="content" className="block mb-2 text-gray-700">
            Nội dung góp ý
          </label>

          <textarea
            id="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setSuccess(false);
            }}
            className="w-full border rounded-lg p-3 text-gray-900"
            rows={4}
            placeholder="Nhập nội dung góp ý..."
          />

          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-gray-700">
            Số điện thoại
          </label>

          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setSuccess(false);
            }}
            className="w-full border rounded-lg p-3 text-gray-900"
            placeholder="Ví dụ: 0912345678"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Gửi góp ý
        </button>

        {success && (
          <p className="text-green-600 text-center">
            Dữ liệu hợp lệ! Góp ý đã được kiểm tra thành công.
          </p>
        )}
      </form>
    </main>
  );
}