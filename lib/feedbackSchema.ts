import { z } from "zod";

export const feedbackSchema = z.object({
    content: z
        .string()
        .trim()
        .min(21, "Nội dung phải có trên 20 ký tự"),

    phone: z
        .string()
        .trim()
        .regex(
            /^(0[35789])\d{8}$/,
            "Số điện thoại không đúng định dạng Việt Nam"
        ),
});

export type FeedbackData = z.infer<typeof feedbackSchema>;