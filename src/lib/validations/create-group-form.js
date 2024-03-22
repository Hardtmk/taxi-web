import { z } from 'zod';

export const groupFormSchema = z.object({
	end_point: z.string().min(1, '請填寫終點站'),
	start_point: z.string().min(1, '請填寫起點位置'),
	limit: z
		.number({ invalid_type_error: '請填寫人數限制' })
		.gt(1, '人數一定要大於1人')
		.lte(5, '人數不能多於5人'),
	departure_time: z.string().min(1, '請填寫出發時間'),
	extra_contribution: z.number(),
	contact_number: z.number().nullable(),
	contact_email: z.string().max(0, '請符合電郵格式').or(z.string().email()),
	remark: z.string()
});
