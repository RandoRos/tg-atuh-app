import type { Action } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/prisma'
import { verifyPassword } from '$lib/hashing'

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/profile')
	}
}

const success: Action = async ({ request, cookies }) => {
  const data = await request.formData()
  const authToken = data.get('token') as string

  if (!authToken) {
    throw redirect(302, '/signup')
  }

  const user = await db.user.findUnique({
    where: {
      authToken
    },
    select: {
      telegramId: true
    }
  })

  if (!user) {
    throw redirect(302, '/signup')
  }

	const sessionId = crypto.randomUUID()
	await db.user.update({
		where: {
			telegramId: user.telegramId
		},
		data: {
			sessionToken: sessionId
		}
	})

	cookies.set('session', sessionId, {
		path: '/',
		httpOnly: true,
		sameSite: true,
		maxAge: 60 * 60 * 24 * 7
	})

	redirect(302, '/profile')
}

const login: Action = async ({ request }) => {
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

	if (!user) {
		return fail(400, {
			error: 'User does not exist'
		})
	}

	const passwordValid = await verifyPassword(user.passwordHash, password)

	if (!passwordValid) {
		return fail(400, {
			error: 'Invalid credentials'
		})
	}

	return { success: true }
}

export const actions = { login, success }
