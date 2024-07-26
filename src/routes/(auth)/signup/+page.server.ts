import type { Action } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/prisma'
import { hashPassword } from '$lib/hashing'

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/profile')
	}
}

const success: Action = async () => {
	redirect(303, '/login')
}

const signup: Action = async ({ request }) => {
	const data = await request.formData()
	const telegramId = data.get('telegramId') as string
	const password = data.get('password') as string

	if (!telegramId) {
		return fail(400, {
			error: 'Invalid telegram id'
		})
	}

	if (!password) {
		return fail(400, {
			error: 'Invalid password'
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

	const passwordHash = await hashPassword(password)
	const authToken = crypto.randomUUID()

	await db.user.create({
		data: {
			telegramId,
			passwordHash,
			authToken,
			sessionToken: crypto.randomUUID()
		}
	})

	return { success: true, authToken }
}

export const actions = {
	signup,
	success
}
