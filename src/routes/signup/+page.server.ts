import type { Action } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/prisma'

const signup: Action = async ({ request }) => {
	const data = await request.formData()
	const telegramId = data.get('telegramId') as string
	const password = data.get('password') as string

	if (!telegramId || !password) {
		return fail(400, {
			error: 'Missing password or telegramId'
		})
	}

	const user = await db.user.findUnique({
		where: {
			telegramId
		}
	})

	if (user) {
		return fail(400, {
			error: 'User already exists'
		})
	}

	const authToken = crypto.randomUUID()
	await db.user.create({
		data: {
			telegramId,
			passwordHash: password,
			authToken,
      sessionToken: crypto.randomUUID()
		}
	})

	throw redirect(303, '/login')
}

export const actions = {
	signup
}
