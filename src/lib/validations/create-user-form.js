import { z } from 'zod';

export const userFormSchema = z.object({
	// fullname: z.string().min(1, '請填寫你的名字')
	// password: z.string().min(8, '最少8個字符，包括 大寫/小寫英文字母丶數字'),
	// email: z.string().email({ message: '請填寫有效電郵' }).min(1, '請填寫電郵')
});
